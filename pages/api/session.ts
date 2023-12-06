import type { NextApiRequest, NextApiResponse } from 'next'
import { getSession, updateSession } from '@auth0/nextjs-auth0';
 
type ResponseData = {
  message: string
}
 
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
    if (req.method === 'POST') {
        let session = await getSession(req, res);
        if (session) {
            const user = session.user;
            user.isCompleted = true;
            await updateSession(req, res, { ...session, user: { ...user } });
            console.log('Updated session.');
        } else throw new Error('User has no session.');
    
        res.status(204).end()
    } else res.status(400).end();
}