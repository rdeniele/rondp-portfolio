export interface Project {
  id: number;
  title: string;
  description: string;
  project_url: string;
  image_url: string;
  created_at: string;
  technologies: string[];
  order?: number;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "BudYet - Budget Management App",
    description: "A comprehensive budget management application that helps users track expenses, set financial goals, and visualize spending patterns. Features intuitive charts, expense categorization, and budget alerts.",
    project_url: "https://github.com/rdeniele/budyet",
    image_url: "/images/BudYet.png",
    created_at: "2024-01-15",
    technologies: ["Laravel", "PHP", "MySQL"],
    order: 1
  },
  {
    id: 2,
    title: "SignItOn - ASL-to-Text and Text-to-Speech Platform",
    description: "An ASL-to-text and Text-to-Speech platform that allows users to convert American Sign Language (ASL) to text and vice versa. Features real-time translation and voice output.",
    project_url: "https://github.com/rdeniele/signiton",
    image_url: "/images/SignItOn.jpg",
    created_at: "2024-02-20",
    technologies: ["Django", "Python", "TensorFlow", "CNN", "RNN"],
    order: 2
  },
  {
    id: 3,
    title: "MyBot - AI Chat Assistant",
    description: "An AI chatbot that provides care and health advice to users. Features usage of Gemini API.",
    project_url: "https://github.com/rdeniele/mybot",
    image_url: "/images/myBot.png",
    created_at: "2024-03-10",
    technologies: ["Supabase", "Gemini API", "Next.js"],
    order: 3
  },
  {
    id: 4,
    title: "SimplaBots - Automation Platform",
    description: "A comprehensive automation platform that allows users to create custom bots for repetitive tasks. Features drag-and-drop interface, workflow automation, and integration with popular services.",
    project_url: "https://github.com/rdeniele/simplabots",
    image_url: "/images/simplabots_BLUR.png",
    created_at: "2024-04-05",
    technologies: ["Node.js", "Next.js", "Tailwind CSS", "AI APIs", "PostgreSQL"],
    order: 4
  },
]; 