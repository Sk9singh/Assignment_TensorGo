import axios from 'axios';

export async function sendFeedbackToFrill({ title, description }) {
  const url = `https://api.frill.co/v1/projects/${process.env.FRILL_PROJECT_ID}/ideas`;

  const payload = {
    title,
    description
  };

  const config = {
    headers: {
      'Authorization': `Bearer ${process.env.FRILL_API_KEY}`,
      'Content-Type': 'application/json'
    }
  };

  await axios.post(url, payload, config);
}
