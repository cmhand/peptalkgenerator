import type { NextApiRequest, NextApiResponse } from 'next'
import { PepService } from '../../services/pep';

type PepTalk = {
  message: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<PepTalk>
) {
  res.status(200).json({ message: PepService.generatePep() });
}
