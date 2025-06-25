import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function PUT(request: Request) {
    try {
        const body = await request.json();
        const { projectOrders } = body;

        if (!projectOrders || !Array.isArray(projectOrders)) {
            return NextResponse.json(
                { error: 'Invalid request: projectOrders must be an array' }, 
                { status: 400 }
            );
        }

        // Check if order column exists first
        const { error: testError } = await supabase
            .from('projects')
            .select('order')
            .limit(1);

        if (testError) {
            return NextResponse.json(
                { error: 'Order column does not exist in database. Please add the order column first.' }, 
                { status: 500 }
            );
        }

        // Update each project's order
        const results = [];
        for (const { id, order } of projectOrders) {
            const { data, error } = await supabase
                .from('projects')
                .update({ order })
                .eq('id', id)
                .select();
            
            if (error) {
                results.push({ id, error });
            } else {
                results.push({ id, success: true, data });
            }
        }
        
        // Check if any updates failed
        const errors = results.filter(result => result.error);
        if (errors.length > 0) {
            return NextResponse.json(
                { error: 'Failed to update some projects', details: errors }, 
                { status: 500 }
            );
        }

        return NextResponse.json({ success: true, results });
    } catch (error) {
        return NextResponse.json(
            { error: 'Failed to reorder projects', details: error instanceof Error ? error.message : 'Unknown error' }, 
            { status: 500 }
        );
    }
} 