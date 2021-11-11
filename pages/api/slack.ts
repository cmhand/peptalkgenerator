import type { NextApiRequest, NextApiResponse } from 'next'
import { PepService } from '../../services/pep';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<string>
) {
  res.status(200).send('');
  
  let payload = req.body;

  console.log(payload);

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
    .then(r => {
        console.log(r);
    })
    .catch(e => {
        console.log(e);
    });
}
