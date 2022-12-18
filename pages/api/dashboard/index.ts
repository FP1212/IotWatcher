import type { NextApiRequest, NextApiResponse } from 'next'
import { getSession } from 'next-auth/react'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { title, content } = req.body;

    const session = await getSession({ req });
    if (session) {
        const result: Array<any> = [];
        res.json(result);
    } else {
        res.status(401).send({ message: 'Unauthorized' })
    }
}