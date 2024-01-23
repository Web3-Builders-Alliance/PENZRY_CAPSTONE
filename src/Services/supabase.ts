import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://kbeyhqznwwtkgabohtat.supabase.co";
const supabaseKey = import.meta.env.VITE_supabaseKey ?? "";
console.log(supabaseKey);

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
