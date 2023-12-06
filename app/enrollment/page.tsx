'use client'

import { useRouter } from "next/navigation";

/** Add your relevant code here for the issue to reproduce */
export default function Home() {
    const router = useRouter();

    async function enrollment() {
        const res = await fetch('/api/session', { 
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ time: new Date().toISOString() }),
        });
        if (res) router.back();

    }

    return (
        <div>Enrollment.<br/>
            <button onClick={enrollment} >POST</button>
            <br/>
            <a href='/api/auth/logout'>Logout</a>  
        </div>
    )
}
  