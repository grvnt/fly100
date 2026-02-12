import { NextResponse, NextRequest } from "next/server";
import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";
import config from "@/config";

export const dynamic = "force-dynamic";

type SupabaseCookie = {
  name: string;
  value: string;
  options?: Record<string, unknown>;
};

// Fallback for when Supabase returns implicit flow (tokens in hash) instead of PKCE.
// Client posts access_token + refresh_token here; we set session cookies and redirect to dashboard.
export async function POST(req: NextRequest) {
  let access_token: string | undefined;
  let refresh_token: string | undefined;

  const contentType = req.headers.get("content-type") || "";
  if (contentType.includes("application/x-www-form-urlencoded")) {
    const formData = await req.formData();
    access_token = formData.get("access_token") as string | null;
    refresh_token = formData.get("refresh_token") as string | null;
  } else {
    const body = await req.json().catch(() => ({}));
    access_token = body.access_token;
    refresh_token = body.refresh_token;
  }

  if (!access_token || !refresh_token) {
    return NextResponse.json(
      { error: "access_token and refresh_token required" },
      { status: 400 }
    );
  }

  const requestUrl = req.nextUrl ?? new URL(req.url);
  const redirectTo = requestUrl.origin + config.auth.callbackUrl;
  const response = NextResponse.redirect(redirectTo);

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

  const { error } = await supabase.auth.setSession({
    access_token,
    refresh_token,
  });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }

  return response;
}
