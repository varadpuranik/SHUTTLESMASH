import type { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '../../lib/prisma';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { playerIds = [], scoreA, scoreB } = req.body;
    try {
      const match = await prisma.match.create({
        data: {
          playedAt: new Date(),
          scoreA,
          scoreB,
          players: { connect: playerIds.map((id: number) => ({ id })) },
        },
      });
      return res.status(201).json(match);
    } catch (error) {
      console.error('Failed to record match', error);
      return res.status(500).json({ error: 'Failed to record match' });
    }
  }
  res.setHeader('Allow', ['POST']);
  return res.status(405).end('Method Not Allowed');
}
