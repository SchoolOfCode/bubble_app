import { createClient } from "@supabase/supabase-js";

const supapaseURL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

const supabase = createClient(
    supapaseURL,
    supabaseAnonKey
);

export default supabase