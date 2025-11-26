import { redirect } from 'next/navigation';

export default function Login() {
  const APP_ID = process.env.NEXT_PUBLIC_DERIV_APP_ID!;
  const AFFILIATE_TOKEN = process.env.NEXT_PUBLIC_AFFILIATE_TOKEN!;
  const REDIRECT_URI = `http://localhost:3000/callback`;   // ← CHANGE THIS TO YOUR REAL DOMAIN

  const url = `https://oauth.deriv.com/oauth2/authorize?app_id=${APP_ID}&redirect_uri=${encodeURIComponent(REDIRECT_URI)}&affiliate_token=${AFFILIATE_TOKEN}&brand=deriv`;

  redirect(url);
}