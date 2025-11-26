import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center px-6">
      <h1 className="text-5xl md:text-6xl font-bold mb-6">Deriv Pro Bots</h1>
      <p className="text-xl md:text-2xl mb-12 max-w-3xl text-gray-300">
        Login with your Deriv account and trade my proven automated strategies instantly.<br />
        100% free to use · You keep full control · I earn commission only when you profit
      </p>

      <Link
        href="/login"
        className="bg-blue-600 hover:bg-blue-700 text-white font-bold text-xl py-5 px-16 rounded-xl transition shadow-lg"
      >
        Login with Deriv → Start Trading Now
      </Link>

      <p className="mt-12 text-gray-500 text-sm">
        Powered by Deriv.com • Your funds never leave your account
      </p>
    </div>
  );
}