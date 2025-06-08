'use client'

import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase'
import { useRouter } from 'next/navigation'

interface Project {
  id: number
  title: string
  description: string
  project_url: string
  image_url: string
  created_at: string
}

export default function AdminDashboard() {
  const [projects, setProjects] = useState<Project[]>([])
  const [loading, setLoading] = useState(true)
  const [deleteLoading, setDeleteLoading] = useState<number | null>(null)
  const router = useRouter()

  useEffect(() => {
    const checkAuth = async () => {
      const { data: { session } } = await supabase.auth.getSession()
      if (!session) {
        router.push('/admin/login')
        return
      }
      fetchProjects()
    }
    checkAuth()
  }, [router])

  const fetchProjects = async () => {
    try {
      const { data, error } = await supabase
        .from('projects')
        .select('*')
        .order('created_at', { ascending: false })

      if (error) throw error
      setProjects(data || [])
    } catch (error) {
      console.error('Error fetching projects:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleDelete = async (projectId: number) => {
    if (!confirm('Are you sure you want to delete this project? This action cannot be undone.')) {
      return
    }

    try {
      setDeleteLoading(projectId)
      
      // First, get the project to get the image URL
      const { data: project } = await supabase
        .from('projects')
        .select('image_url')
        .eq('id', projectId)
        .single()

      if (project?.image_url) {
        // Extract the file name from the URL
        const imageUrl = new URL(project.image_url)
        const fileName = imageUrl.pathname.split('/').pop()
        
        if (fileName) {
          // Delete the image from storage
          const { error: storageError } = await supabase.storage
            .from('projects')
            .remove([fileName])

          if (storageError) {
            console.error('Error deleting image:', storageError)
          }
        }
      }

      // Delete the project from the database
      const { error } = await supabase
        .from('projects')
        .delete()
        .eq('id', projectId)

      if (error) throw error

      // Update the projects list
      setProjects(projects.filter(p => p.id !== projectId))
    } catch (error) {
      console.error('Error deleting project:', error)
      alert('Error deleting project. Please try again.')
    } finally {
      setDeleteLoading(null)
    }
  }

  const handleLogout = async () => {
    await supabase.auth.signOut()
    router.push('/admin/login')
  }

  if (loading) {
    return <div>Loading...</div>
  }

    return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold">Admin Dashboard</h1>
        <button
          onClick={handleLogout}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
        >
          Logout
        </button>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Projects</h2>
        <button
          onClick={() => router.push('/admin/projects/new')}
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        >
          Add New Project
        </button>
        </div>

      <div className="grid gap-4">
        {projects.map((project) => (
          <div key={project.id} className="border p-4 rounded">
            <h3 className="text-lg font-semibold">{project.title}</h3>
            <p className="text-gray-600">{project.description}</p>
            <div className="mt-4 space-x-2">
              <button
                onClick={() => router.push(`/admin/projects/${project.id}/edit`)}
                className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(project.id)}
                disabled={deleteLoading === project.id}
                className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 disabled:opacity-50"
              >
                {deleteLoading === project.id ? 'Deleting...' : 'Delete'}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}