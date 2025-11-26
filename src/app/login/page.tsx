import { redirect } from 'next/navigation';

export default function Login() {
  const APP_ID = process.env.NEXT_PUBLIC_DERIV_APP_ID!;
  const REDIRECT_URI = `https://yourdomain.com/callback`;  // ← CHANGE TO YOUR DOMAIN
  const AFFILIATE_TOKEN = process.env.NEXT_PUBLIC_AFFILIATE_TOKEN!;  // Your affiliate token

  const oauthUrl = `https://oauth.deriv.com/oauth2/authorize?app_id=${APP_ID}&redirect_uri=${encodeURIComponent(REDIRECT_URI)}&affiliate_token=${AFFILIATE_TOKEN}&brand=deriv`;

  redirect(oauthUrl);
}