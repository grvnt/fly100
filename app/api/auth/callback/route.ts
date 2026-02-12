import { NextResponse, NextRequest } from "next/server";
import { createClient } from "@/lib/supabase/server";
import config from "@/config";

export const dynamic = "force-dynamic";

// This route is called after a successful login.
// It exchanges the OAuth code for a Supabase session (setting cookies)
// and then redirects to the app callback URL (normally /dashboard).
export async function GET(req: NextRequest) {
  const requestUrl = req.nextUrl ?? new URL(req.url);
  const code = requestUrl.searchParams.get("code");

  if (code) {
    const supabase = await createClient();
    await supabase.auth.exchangeCodeForSession(code);
  }

  // URL to redirect to after sign in process completes
  return NextResponse.redirect(requestUrl.origin + config.auth.callbackUrl);
}
