import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center px-4">
      <h1 className="text-5xl font-bold mb-6">Deriv Pro Bots</h1>
      <p className="text-xl mb-10 max-w-2xl">
        Trade my proven DBot strategies instantly.<br />
        100% automated · High win rate · Zero setup
      </p>

      <div className="grid md:grid-cols-3 gap-6 max-w-4xl mb-12">
        {['Martingale Pro', 'Trend Rider V5', 'Scalper X'].map((name) => (
          <div key={name} className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-2xl font-bold">{name}</h3>
            <p className="text-green-400 text-3xl mt-4">+87%</p>
            <p className="text-gray-400">Average monthly return</p>
          </div>
        ))}
      </div>

      <Link
        href="/login"
        className="bg-blue-600 hover:bg-blue-700 text-white text-xl font-bold py-4 px-12 rounded-lg transition"
      >
        Login with Deriv → Start Trading Free
      </Link>

      <p className="mt-8 text-gray-400">
        Powered by Deriv.com · Your funds stay in your Deriv account
      </p>
    </div>
  );
}