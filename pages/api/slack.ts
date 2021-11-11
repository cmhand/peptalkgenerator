import type { NextApiRequest, NextApiResponse } from 'next'
import { PepService } from '../../services/pep';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<string>
) {
  res.status(200).send(PepService.generatePep());
}
