import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://wzrmputrusyttkzobbbs.supabase.co";
const supabaseKey =
"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind6cm1wdXRydXN5dHRrem9iYmJzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTkzNzU3OTcsImV4cCI6MjAzNDk1MTc5N30.vcwZ6GiyO75uhLf-6A6f53O9SaYP3zYhtYNmNJK23ts";
export const supabase = createClient(supabaseUrl, supabaseKey);
