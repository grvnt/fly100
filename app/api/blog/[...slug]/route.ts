import { NextRequest, NextResponse } from 'next/server';

export const config = {
  runtime: 'edge',
};

export async function GET(req: NextRequest) {
  const url = new URL(req.url);
  const targetUrl = new URL(url.pathname.replace(/^\/api\/blog/, ''), 'https://blog.fly100.co');
  
  return fetch(targetUrl.toString(), {
    headers: req.headers,
    method: 'GET',
  });
}

export async function POST(req: NextRequest) {
  const url = new URL(req.url);
  const targetUrl = new URL(url.pathname.replace(/^\/api\/blog/, ''), 'https://blog.fly100.co');
  
  return fetch(targetUrl.toString(), {
    headers: req.headers,
    method: 'POST',
    body: req.body,
  });
}

// Add other HTTP methods as needed (PUT, DELETE, etc.)