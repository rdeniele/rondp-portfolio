// Define the core data models used throughout the app

// This interface represents the structure of a project object
export interface Project {
    id: string;                // Unique identifier for the project
    title: string;             // Title of the project
    description: string;       // Detailed information about the project
    url: string;               // URL or link to the live project or repository
    createdAt: string;         // Timestamp when the project was created
    updatedAt: string;         // Timestamp when the project was last updated
}

// This interface represents the structure of a user object
export interface User {
    id: string;                // Unique identifier for the user
    email: string;             // User's email address
    role: 'admin' | 'user';    // Role assigned to the user (either admin or standard user)
}
