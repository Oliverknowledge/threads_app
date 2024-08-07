import { SignIn } from '@clerk/nextjs';
import React from 'react';

export default function Home() {
    return (
        <main>
            <SignIn />
        </main>
    );
}

