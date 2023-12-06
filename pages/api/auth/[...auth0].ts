/**
 * Auth0 dynamic API authentication route with:
 * - /api/auth/login
 * - /api/auth/logout
 * - /api/auth/callback
 * - /api/auth/me
 */
import type { NextApiRequest, NextApiResponse } from 'next';
import type { Session } from '@auth0/nextjs-auth0';
import { handleAuth, handleCallback } from '@auth0/nextjs-auth0';

async function authenticationCallback(
    req: NextApiRequest,
    res: NextApiResponse,
    session: Session
): Promise<Session | undefined> {
    console.log('Authentication callback.', session.user);

    /* Check if the user profile is complete. */
    if (!session.user.isCompleted) {
        console.log('Redirect to update profile.');
        res.setHeader('location', '/enrollment');
    }
    return session;
}

/* Auth0 handlers with customization. */
export default handleAuth({
    async callback(req: NextApiRequest, res: NextApiResponse) {
        try {
            await handleCallback(req, res, { afterCallback: authenticationCallback });
        } catch (error) {
            res.status(500).end();
        }
    },
});
