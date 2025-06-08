import { supabase } from '@/lib/supabase'
import ProjectCard from '@/components/ProjectCard'

interface Project {
  id: number
  title: string
  description: string
  project_url: string
  image_url: string
  created_at: string
}

async function getProjects(): Promise<Project[]> {
  const { data, error } = await supabase
    .from('projects')
    .select('*')
    .order('created_at', { ascending: false })

  if (error) {
    console.error('Error fetching projects:', error)
    return []
  }

  return data || []
}

export default async function Home() {
  const projects = await getProjects()

  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-8">My Portfolio</h1>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            project_url={project.project_url}
            image_url={project.image_url}
          />
        ))}
      </div>
    </main>
  )
}