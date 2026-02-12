import { createBrowserClient } from "@supabase/ssr";

// Use @supabase/ssr browser client so the PKCE code_verifier is stored in cookies.
// That way when the OAuth redirect lands on /auth/callback, the verifier is available and exchangeCodeForSession succeeds.
export function createClient() {
  return createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );
}

export default createClient();