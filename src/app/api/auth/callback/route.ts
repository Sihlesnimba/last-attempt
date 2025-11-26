import { NextRequest } from 'next/server';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const code = searchParams.get('code');
  const APP_ID = process.env.DERIV_APP_ID;

  if (!code) return new Response('Missing code', { status: 400 });

  const res = await fetch('https://oauth.deriv.com/oauth2/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      grant_type: 'authorization_code',
      code,
      client_id: APP_ID,
      redirect_uri: 'http://localhost:3000/callback',   // ← SAME DOMAIN AS ABOVE
    }),
  });

  const data = await res.json();
  return Response.json(data);
}