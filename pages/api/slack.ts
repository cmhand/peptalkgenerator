import type { NextApiRequest, NextApiResponse } from 'next'
import { PepService } from '../../services/pep';

type PepTalk = {
  message: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<PepTalk>
) {
  res.status(200);
  
  let payload = req.body;

  let channel = payload.channel_id;

  fetch('https://slack.com/api/chat.postMessage',{
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    headers: {
      'Authorization': `Bearer ${process.env.SLACK_BOT_TOKEN}`,
    },
    body: JSON.stringify({
        "text": PepService.generatePep(),
        "channel": channel
    })
    })
    .then(response => response.json())
}
