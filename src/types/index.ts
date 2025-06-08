export interface Project {
    id: string;
    title: string;
    description: string;
    url: string;
    createdAt: string;
    updatedAt: string;
}

export interface User {
    id: string;
    email: string;
    role: 'admin' | 'user';
}