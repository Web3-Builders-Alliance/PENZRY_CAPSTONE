import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://kbeyhqznwwtkgabohtat.supabase.co";
const supabaseKey = process.env.REACT_APP_supabaseKey ?? "";
const supabase = createClient(supabaseUrl, supabaseKey);


export default supabase;
