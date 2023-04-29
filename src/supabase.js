import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://izddfrooqqohfvwlkhil.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml6ZGRmcm9vcXFvaGZ2d2xraGlsIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODIyNDQ3NDAsImV4cCI6MTk5NzgyMDc0MH0.hnlugT-L6MESwMCl8a5TFSVZZUGeLWxuSzbfhwoZLdk";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
