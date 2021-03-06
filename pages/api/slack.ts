import type { NextApiRequest, NextApiResponse } from 'next'
import { PepService } from '../../services/pep';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<string>
) {
    let payload = req.body;

    console.log(payload);

    let channel = payload.channel_id;

    console.log(channel);

    const message = {
        "text": PepService.generatePep(),
        "channel": channel
    };

    console.log('message', message);

    try {
        const response = await fetch('https://slack.com/api/chat.postMessage',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${process.env.SLACK_BOT_TOKEN}`,
            },
            body: JSON.stringify(message)
        })
        .then(response => response.json());

        console.log(response);
    } catch (e) {
        console.log('Error');
        console.log(e);
    }

    res.status(200).send('');
}
