import { createClient as createSupabaseClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
const supabase = createSupabaseClient(supabaseUrl, supabaseKey, {
  auth: {
    persistSession: false // We don't need session persistence since we're only using storage
  }
})

export { createSupabaseClient as createClient }
export default supabase 