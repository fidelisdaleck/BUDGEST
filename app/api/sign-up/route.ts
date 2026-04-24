import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

export async function POST(req: Request) {
    const { name, email, password } = await req.json();

    if (!email || !password) {
        return NextResponse.json(
            { error: 'Email et mot de passe requis' },
            { status: 400 }
        );
    }

    const supabase = createClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.SUPABASE_SERVICE_ROLE_KEY!
    );

    const { data, error } = await supabase.auth.signUp({
        email,
        password
    });

    if (error || !data.user) {
        return NextResponse.json(
            { error: error?.message || 'User creation failed' },
            { status: 400 }
        );
    }

    const { error: profileError } = await supabase
        .from('profiles')
        .insert([
            {
                id: data.user.id,
                created_at: new Date().toISOString(),
                name: name || '',
                email: data.user.email,
            }
        ]);

    if (profileError) {
        return NextResponse.json(
            { error: profileError.message },
            { status: 400 }
        );
    }

    return NextResponse.json(
        { message: 'User created successfully' },
        { status: 200 }
    );
}