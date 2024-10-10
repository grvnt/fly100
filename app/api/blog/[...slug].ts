import { NextRequest, NextResponse } from 'next/server';

export const config = {
  runtime: 'edge',
};

export default async function handler(req: NextRequest) {
  const url = new URL(req.url);
  const targetUrl = new URL(url.pathname.replace(/^\/api\/blog/, ''), 'https://blog.fly100.co');
  
  return fetch(targetUrl.toString(), {
    headers: req.headers,
    method: req.method,
    body: req.body,
  });
}