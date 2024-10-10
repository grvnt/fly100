import { NextRequest, NextResponse } from "next/server";
import { createProxyMiddleware, responseInterceptor } from 'http-proxy-middleware';
import { PassThrough, Readable } from 'stream';
import type { IncomingMessage, ServerResponse } from 'http';

const proxy = createProxyMiddleware({
  target: 'https://blog.fly100.co',
  changeOrigin: true,
  pathRewrite: {
    '^/api/blog': '',
  },
  selfHandleResponse: true,
  onProxyRes: responseInterceptor(
    async (responseBuffer: Buffer, proxyRes: IncomingMessage, req: IncomingMessage, res: ServerResponse) => {
      // Modify headers to allow the content to be served from fly100.co
      res.removeHeader('x-frame-options');
      return responseBuffer;
    }
  ),
} as any); // Type assertion to avoid conflicts with Next.js types

export async function GET(request: NextRequest) {
  return new Promise<NextResponse>((resolve, reject) => {
    // @ts-ignore (http-proxy-middleware doesn't have great types for Next.js)
    proxy(request, {
      end: (proxyRes: IncomingMessage) => {
        const response = new NextResponse(
          Readable.toWeb(proxyRes.pipe(new PassThrough())) as ReadableStream,
          {
            status: proxyRes.statusCode,
            headers: new Headers(proxyRes.headers as any),
          }
        );
        resolve(response);
      },
      error: (err: Error) => {
        reject(err);
      },
    });
  });
}

export { GET as POST, GET as PUT, GET as DELETE };
