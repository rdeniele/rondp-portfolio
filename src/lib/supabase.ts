// Import the Supabase client
import { createClient } from '@supabase/supabase-js'

// if supabase url and key is not processed, throw an error
if (!process.env.NEXT_PUBLIC_SUPABASE_URL) {
  throw new Error('Missing env.NEXT_PUBLIC_SUPABASE_URL')
}
if (!process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
  throw new Error('Missing env.NEXT_PUBLIC_SUPABASE_ANON_KEY')
}

// create method to export the client
export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,

  // this is to enable session persistence and automatic token refresh for authentication
  {
    auth: {
      persistSession: true,
      autoRefreshToken: true,
    },
  }
)

// Define the TypeScript interface for your project data
export interface Project {
  id: number
  title: string
  description: string
  project_url: string
  image_url: string
  created_at: string
}

