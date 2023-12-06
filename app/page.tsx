'use client'

import { useUser } from '@auth0/nextjs-auth0/client';

/** Add your relevant code here for the issue to reproduce */
export default function Home() {
  const { user} = useUser();

  return (
    <div>Hello world.<br/>
      {user ? <a href='/api/auth/logout'>Logout</a>: <a href='/api/auth/login'>Login</a>}
      <div>{JSON.stringify(user)}</div>
    </div>
  );
}
