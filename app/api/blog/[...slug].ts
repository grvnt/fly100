import { createProxyMiddleware } from 'http-proxy-middleware';
import { NextApiRequest, NextApiResponse } from 'next';

export const config = {
  api: {
    bodyParser: false,
  },
}

const proxy = createProxyMiddleware({
  target: 'https://blog.fly100.co', // Update this to your Ghost blog URL
  changeOrigin: true,
  pathRewrite: {
    '^/api/blog': '',
  },
});

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  proxy(req, res, (result) => {
    if (result instanceof Error) {
      throw result;
    }
    throw new Error(`Request '${req.url}' is not proxied! We should never reach here!`);
  });
}