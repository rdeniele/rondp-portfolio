// Import Next.js helper to return API responses
import { NextResponse } from 'next/server';
// Import the Supabase client instance
import { supabase } from '@/lib/supabase';

/**
 * Handles GET requests to fetch all projects from the database.
 */
export async function GET() {
    // Query all rows from the "projects" table
    const { data, error } = await supabase
        .from('projects')
        .select('*');

    // If there’s an error, return it with a 500 Internal Server Error status
    if (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }

    // If successful, return the data as a JSON response
    return NextResponse.json(data);
}

/**
 * Handles POST requests to insert a new project into the database.
 * Expects a JSON body with title, description, and link.
 */
export async function POST(request: Request) {
    // Parse the request body to extract form fields
    const body = await request.json();
    const { title, description, link } = body;

    // Insert the new project into the "projects" table
    const { data, error } = await supabase
        .from('projects')
        .insert([{ title, description, link }]);

    // If there’s an error, return it with a 500 status
    if (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }

    // Return the inserted data with a 201 Created status
    return NextResponse.json(data, { status: 201 });
}
