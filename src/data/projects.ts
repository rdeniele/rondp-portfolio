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
  // Web/Mobile Development Projects
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
    title: "SimplaBots - Automation Platform",
    description: "A comprehensive automation platform that allows users to create custom bots for repetitive tasks. Features drag-and-drop interface, workflow automation, and integration with popular services.",
    project_url: "https://simplabots.vercel.app",
    image_url: "/images/design/simplabots_AI.png",
    created_at: "2024-04-05",
    technologies: ["Node.js", "Next.js", "Tailwind CSS", "AI APIs", "PostgreSQL"],
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
    title: "NoteJewel",
    description: "An AI-powered note-taking application that allows users to create, organize, quiz, flashcards, generate concept maps, and search notes using natural language processing. Features real-time collaboration, AI-generated summaries, and smart tagging.",
    project_url: "https://notejewel.vercel.app",
    image_url: "/images/design/noteJewel_AI.png",
    created_at: "2025-07-21",
    technologies: ["Next.js", "Tailwind CSS", "Supabase", "TypeScript", "Prisma", "Gemini API"],
    order: 4
  },
  {
    id: 5,
    title: "FinSensei",
    description: "An AI-powered financial tracking and coaching application that helps users manage their finances, set budgets, and achieve financial goals. Features personalized financial advice, expense tracking, and investment insights.",
    project_url: "https://finsensei.vercel.app",
    image_url: "/images/design/finsenseichatAI.png",
    created_at: "2025-07-21",
    technologies: ["Next.js", "Tailwind CSS", "Supabase", "TypeScript", "Prisma", "Gemini API"],
    order: 5
  },

  // Web Design & Development Projects
  {
    id: 6,
    title: "Home Team Luxury Rentals",
    description: "A modern and minimalist design showcasing real estate listings with a focus on luxury rentals. Features dark UI, responsive layout, and smooth animations for enhanced user experience.",
    project_url: "https://hometeamluxuryrentals.com",
    image_url: "/images/design/HTVR-B4hj3Yjo.png",
    created_at: "2025-07-21",
    technologies: ["Figma", "UI/UX Design", "HTML", "CSS", "WordPress", "Guesty"],
    order: 6
  },
  {
    id: 8,
    title: "Home Team Capital",
    description: "A modern and elegant design for a real estate investment firm focusing on high-value properties. Features sophisticated UI elements, investment portfolio showcase, and interactive property listings.",
    project_url: "https://hometeamcapital.com",
    image_url: "/images/design/HTC-2wqgoYH4.png",
    created_at: "2025-07-21",
    technologies: ["Figma", "UI/UX Design", "HTML", "CSS", "WordPress"],
    order: 8
  },
  {
    id: 9,
    title: "Dwell Team Luxury Rentals",
    description: "A luxury vacation rental website with modern aesthetics and seamless booking experience. Features property showcases, availability calendar, and integrated booking system.",
    project_url: "https://dwellluxuryrentals.com",
    image_url: "/images/design/Dwell-JnIKZ48V.png",
    created_at: "2025-07-21",
    technologies: ["Figma", "UI/UX Design", "HTML", "CSS", "WordPress", "Guesty"],
    order: 9
  },
  {
    id: 10,
    title: "Haulivo",
    description: "A calm and soft design showcasing hauling and logistics services. Features light UI, responsive layout, and smooth animations for enhanced user experience.",
    project_url: "https://haulivo.vercel.app/",
    image_url: "/images/design/Haulivo.png",
    created_at: "2025-07-21",
    technologies: ["Figma", "UI/UX Design", "HTML", "CSS"],
    order: 10
  },
  {
    id: 11,
    title: "Ritwal Cafe",
    description: "A sleek dark and modern design for a cafe website. Features dark UI, elegant typography, and smooth animations for an immersive user experience.",
    project_url: "https://ritwalcafe.vercel.app/",
    image_url: "/images/design/ritwal.png",
    created_at: "2025-07-21",
    technologies: ["Figma", "UI/UX Design", "HTML", "CSS"],
    order: 11
  },
  {
    id: 12,
    title: "Don Macchiatos",
    description: "A sleek dark and modern design for a cafe website. Features dark UI, elegant typography, and smooth animations for an immersive user experience.",
    project_url: "https://donmacchiatos.vercel.app/",
    image_url: "/images/design/donmacc.png",
    created_at: "2025-07-21",
    technologies: ["Figma", "UI/UX Design", "HTML", "CSS"],
    order: 12
  },
  {
    id: 13,
    title: "Bean Brewing Cafe",
    description: "A sleek dark and modern design for a cafe website. Features dark UI, elegant typography, and smooth animations for an immersive user experience.",
    project_url: "https://beanbrewingcafe.vercel.app/",
    image_url: "/images/design/bean-brewing-cafe.png",
    created_at: "2025-07-21",
    technologies: ["Figma", "UI/UX Design", "HTML", "CSS"],
    order: 13
  },

  // AI/ML/Data Science Projects
  {
    id: 14,
    title: "SignItOn - ASL-to-Text and Text-to-Speech Platform",
    description: "An ASL-to-text and Text-to-Speech platform that allows users to convert American Sign Language (ASL) to text and vice versa. Features real-time translation and voice output.",
    project_url: "https://github.com/rdeniele/signiton",
    image_url: "/images/SignItOn.jpg",
    created_at: "2024-02-20",
    technologies: ["Django", "Python", "TensorFlow", "CNN", "RNN"],
    order: 14
  },
  {
    id: 15,
    title: "Battery Life Prediction",
    description: "Linear regression model for predicting device battery life based on usage patterns and hardware specifications.",
    project_url: "",
    image_url: "/images/design/predict_batt_life_linear_reg.png",
    created_at: "2023-10-15",
    technologies: ["scikit-learn", "Matplotlib", "Python"],
    order: 15
  },
  {
    id: 16,
    title: "MMA Match Prediction",
    description: "Predicting Mixed Martial Arts (MMA) match outcomes using decision trees. Features historical fight data analysis and fighter statistics.",
    project_url: "",
    image_url: "/images/design/predict_mma_match_decision_tree.png",
    created_at: "2023-10-01",
    technologies: ["scikit-learn", "Pandas", "Python"],
    order: 16
  },
  {
    id: 17,
    title: "CPU Temperature Prediction",
    description: "Linear regression model for predicting CPU temperatures under various workloads.",
    project_url: "",
    image_url: "/images/design/predict_cpu_temp_linear_reg.png",
    created_at: "2023-09-01",
    technologies: ["scikit-learn", "NumPy", "Python"],
    order: 17
  },
  {
    id: 18,
    title: "Box Office Success Prediction",
    description: "Logistic regression model predicting box office success by analyzing movie attributes and market factors.",
    project_url: "",
    image_url: "/images/design/predict_box_match_logistic_reg.png",
    created_at: "2023-09-15",
    technologies: ["scikit-learn", "Pandas", "Python"],
    order: 18
  },
  {
    id: 19,
    title: "Parrot Species Classification",
    description: "Support Vector Classification (SVC) model for identifying parrot species from images.",
    project_url: "",
    image_url: "/images/design/predict_parrot_species_SVC.png",
    created_at: "2023-08-15",
    technologies: ["scikit-learn", "OpenCV", "Python"],
    order: 19
  }
]; 