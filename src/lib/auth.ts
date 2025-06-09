// Import the Supabase client instance
import { supabase } from './supabase'

/**
 * Check if the currently authenticated user is an admin.
 * Returns true if the user's email matches the admin email.
 */
export const isAdmin = async (): Promise<boolean> => {
  const { data: { user } } = await supabase.auth.getUser()
  return user?.email === 'work.rparagoso@gmail.com'
}

/**
 * Throws an error if the current user is not an admin.
 * Use this function to protect routes or actions that require admin access.
 */
export const requireAdmin = async () => {
  const admin = await isAdmin()
  if (!admin) {
    throw new Error('Unauthorized: Admin access required')
  }
}
