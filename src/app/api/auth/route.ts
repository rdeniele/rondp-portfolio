import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function POST(req: Request) {
    const { email, password } = await req.json();

    // Fix: Use signInWithPassword instead of signIn
    const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
    });

    if (error) {
        return NextResponse.json({ error: error.message }, { status: 401 });
    }

    return NextResponse.json({ user: data.user });
}

export async function DELETE() {
    // Add logout functionality
    const { error } = await supabase.auth.signOut();
    
    if (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ message: 'Logged out successfully' });
}