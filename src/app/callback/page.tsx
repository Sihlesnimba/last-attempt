// src/app/callback/page.tsx
'use client';

import { useEffect, suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';

export default function Callback() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const code = searchParams.get('code');

  useEffect(() => {
    if (!code) {
      router.push('/');
      return;
    }

    fetch(`/api/auth/callback?code=${code}`)
      .then(r => r.json())
      .then(data => {
        if (data.access_token) {
          localStorage.setItem('deriv_token', data.access_token);
          router.push('/dashboard');
        } else {
          router.push('/');
        }
      })
      .catch(() => router.push('/'));
  }, [code, router]);

  return (
    <div className="flex items-center justify-center min-h-screen text-xl text-white">
      Connecting to your Deriv account...
    </div>
  );
}

// This line fixes the suspense error
export const dynamic = 'force-dynamic';