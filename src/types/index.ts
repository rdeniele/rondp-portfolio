// Define the core data models used throughout the app

// This interface represents the structure of a project object
export interface Project {
    id: number;                // Unique identifier for the project
    title: string;             // Title of the project
    description: string;       // Detailed information about the project
    project_url: string;       // URL or link to the live project or repository
    image_url: string;         // URL to the project image
    created_at: string;        // Timestamp when the project was created
    technologies: string[];     // Array of technologies used in the project
    order?: number;            // Order for displaying projects (optional)
}
