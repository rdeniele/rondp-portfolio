import {supabase} from './supabase'

export const isAdmin = async (): Promise<boolean> => {
  const { data: { user } } = await supabase.auth.getUser()
  return user?.email === 'work.rparagoso@gmail.com' 
}

export const requireAdmin = async () => {
  const admin = await isAdmin()
  if (!admin) {
    throw new Error('Unauthorized: Admin access required')
  }
}