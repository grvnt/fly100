import { createClient as createSupabaseClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

// Browser client used on the sign-in page & anywhere you call supabase-js directly.
// Force the PKCE flow so the provider redirects back with ?code=... (not #access_token),
// which our /api/auth/callback route can then exchange for a cookie-based session.
const supabase = createSupabaseClient(supabaseUrl, supabaseKey, {
  auth: {
    flowType: "pkce",
    persistSession: false,
  },
});

export { createSupabaseClient as createClient };
export default supabase;