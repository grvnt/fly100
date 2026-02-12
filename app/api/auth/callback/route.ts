import { NextResponse, NextRequest } from "next/server";
import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";
import config from "@/config";

export const dynamic = "force-dynamic";

type SupabaseCookie = { name: string; value: string; options?: Record<string, unknown> };

// OAuth redirect lands here with ?code=... The code_verifier is in the request cookies
// (set by createBrowserClient when the user clicked Sign in with Google). We exchange
// the code for a session and send session cookies back with the redirect.
export async function GET(req: NextRequest) {
  const requestUrl = req.nextUrl ?? new URL(req.url);
  const code = requestUrl.searchParams.get("code");
  const redirectTo = requestUrl.origin + config.auth.callbackUrl;
  const response = NextResponse.redirect(redirectTo);

  if (!code) {
    return NextResponse.redirect(requestUrl.origin + config.auth.loginUrl + "?error=no_code");
  }

  const cookieStore = await cookies();

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return cookieStore.getAll();
        },
        setAll(cookiesToSet: SupabaseCookie[]) {
          cookiesToSet.forEach(({ name, value, options }) => {
            cookieStore.set(name, value, options);
            response.cookies.set(name, value, options as Record<string, unknown>);
          });
        },
      },
    }
  );

  const { error } = await supabase.auth.exchangeCodeForSession(code);
  if (error) {
    return NextResponse.redirect(
      requestUrl.origin + config.auth.loginUrl + "?error=exchange_failed"
    );
  }

  return response;
}
