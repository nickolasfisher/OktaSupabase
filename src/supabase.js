import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://tfcejjhqlyrlocdrnfsj.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRmY2VqamhxbHlybG9jZHJuZnNqIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjE0MzgwMTYsImV4cCI6MTk3NzAxNDAxNn0.X8FVYSOKlZoSVhm4-Q-d7FUEsMvQeHlvf2TzObvf2Ho'
//import.meta.env.VITE_SUPABASE_URL
//import.meta.env.VITE_SUPABASE_ANON_KEY

export const supabase = createClient(supabaseUrl, supabaseAnonKey)