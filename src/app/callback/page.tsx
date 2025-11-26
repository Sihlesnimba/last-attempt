'use client';

import { useEffect } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';

export default function Callback() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const code = searchParams.get('code');

  useEffect(() => {
    if (!code) return router.push('/');

    fetch(`/api/auth/callback?code=${code}`)
      .then(r => r.json())
      .then(data => {
        if (data.access_token) {
          localStorage.setItem('deriv_token', data.access_token);
          router.push('/dashboard');
        }
      });
  }, [code, router]);

  return (
    <div className="flex items-center justify-center min-h-screen text-xl">
      Connecting to your Deriv account...
    </div>
  );
}