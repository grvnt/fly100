import { NextRequest, NextResponse } from "next/server";
import { createProxyMiddleware, responseInterceptor } from 'http-proxy-middleware';

const proxy = createProxyMiddleware({
  target: 'https://blog.fly100.co',
  changeOrigin: true,
  pathRewrite: {
    '^/api/blog': '',
  },
  selfHandleResponse: true,
  onProxyRes: responseInterceptor(async (responseBuffer, proxyRes, req, res) => {
    // Modify headers to allow the content to be served from fly100.co
    res.removeHeader('x-frame-options');
    return responseBuffer;
  }),
});

export async function GET(request: NextRequest) {
  return new Promise<NextResponse>((resolve, reject) => {
    // @ts-ignore (http-proxy-middleware doesn't have great types for Next.js)
    proxy(request, {
      end: (proxyRes) => {
        const response = new NextResponse(proxyRes.pipe(new PassThrough()), {
          status: proxyRes.statusCode,
          headers: new Headers(proxyRes.headers as any),
        });
        resolve(response);
      },
      error: (err) => {
        reject(err);
      },
    });
  });
}

export { GET as POST, GET as PUT, GET as DELETE };
