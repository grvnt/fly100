import { type NextRequest, NextResponse } from "next/server";
import { updateSession } from "@/lib/supabase/middleware";

export async function proxy(request: NextRequest) {
  // Add caching headers for video files from Supabase storage
  if (request.nextUrl.pathname.includes('/storage/v1/object/public/video/')) {
    const response = NextResponse.next();
    
    // Cache video files for 7 days
    response.headers.set('Cache-Control', 'public, max-age=604800, immutable');
    response.headers.set('Vary', 'Accept-Encoding');
    
    return response;
  }

  return await updateSession(request);
}

export const config = {
  matcher: [
    // Only run middleware on routes that need Supabase storage access
    '/api/storage/:path*',
    // Exclude static files and images
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
};
