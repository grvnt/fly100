import { NextRequest, NextResponse } from 'next/server';
import { createProxyMiddleware } from 'http-proxy-middleware';

export const config = {
  api: {
    bodyParser: false,
  },
};

const proxy = createProxyMiddleware({
  target: 'https://blog.fly100.co',
  changeOrigin: true,
  pathRewrite: {
    '^/api/blog': '',
  },
});

export default function handler(req: NextRequest) {
  return new Promise((resolve, reject) => {
    // @ts-ignore
    proxy(req, {
      // @ts-ignore
      end: (proxyRes) => {
        resolve(new NextResponse(proxyRes));
      },
      // @ts-ignore
      onError: (err) => {
        reject(err);
      },
    });
  });
}