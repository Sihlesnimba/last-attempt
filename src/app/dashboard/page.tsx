'use client';

import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const BOTS = [
  { id: '1', name: 'Martingale Pro 2025', xml: `<!-- PUT YOUR FULL DBOT XML HERE -->` },
  { id: '2', name: 'Trend Rider Ultra', xml: `<!-- YOUR SECOND BOT XML -->` },
  // Add as many as you want
];

export default function Dashboard() {
  const [token, setToken] = useState<string>('');
  const [ws, setWs] = useState<WebSocket | null>(null);
  const [status, setStatus] = useState<'disconnected' | 'running' | 'stopped'>('disconnected');
  const [selectedBot, setSelectedBot] = useState(BOTS[0]);

  useEffect(() => {
    const stored = localStorage.getItem('deriv_token');
    if (!stored) {
      window.location.href = '/';
      return;
    }
    setToken(stored);
  }, []);

  const connectWS = () => {
    const APP_ID = process.env.NEXT_PUBLIC_DERIV_APP_ID;
    const socket = new WebSocket(`wss://ws.derivws.com/websockets/v3?app_id=${APP_ID}`);

    socket.onopen = () => {
      socket.send(JSON.stringify({ authorize: token }));
    };

    socket.onmessage = (msg) => {
      const data = JSON.parse(msg.data);
      if (data.authorize) {
        console.log('Authorized');
        setStatus('stopped');
      }
      if (data.error) console.error(data.error);
    };

    socket.onclose = () => setStatus('disconnected');
    setWs(socket);
  };

  const startBot = async () => {
    if (!ws || ws.readyState !== WebSocket.OPEN) return;

    const contract = {
      buy: 1,
      price: 10,
      parameters: {
        contract_type: "CALL",
        symbol: "R_10",
        duration: 5,
        duration_unit: "t",
        basis: "stake",
        amount: 1,
      }
    };

    // Real way: send the full bot XML
    ws.send(JSON.stringify({
      bot: 1,
      xml: selectedBot.xml,
      passthrough: { session_id: uuidv4() }
    }));

    setStatus('running');
  };

  const stopBot = () => {
    ws?.send(JSON.stringify({ bot_stop: 1 }));
    setStatus('stopped');
  };

  return (
    <div className="min-h-screen bg-gray-900 p-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold">Trading Dashboard</h1>
          <button onClick={() => { localStorage.clear(); location.href = '/' }}
            className="bg-red-600 px-4 py-2 rounded">Logout</button>
        </div>

        {!ws && (
          <button onClick={connectWS} className="bg-green-600 hover:bg-green-700 px-8 py-4 text-xl rounded mb-6">
            Connect to Deriv Account
          </button>
        )}

        {ws && status !== 'disconnected' && (
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-800 p-6 rounded-lg">
              <h2 className="text-2xl mb-4">Select Bot</h2>
              <select
                className="w-full p-3 bg-gray-700 rounded mb-4"
                onChange={(e) => setSelectedBot(BOTS.find(b => b.id === e.target.value)!)}
              >
                {BOTS.map(bot => (
                  <option key={bot.id} value={bot.id}>{bot.name}</option>
                ))}
              </select>

              <div className="flex gap-4">
                {status === 'running' ? (
                  <button onClick={stopBot} className="bg-red-600 hover:bg-red-700 px-6 py-3 rounded text-xl flex-1">
                    STOP BOT
                  </button>
                ) : (
                  <button onClick={startBot} className="bg-green-600 hover:bg-green-700 px-6 py-3 rounded text-xl flex-1">
                    START {selectedBot.name}
                  </button>
                )}
              </div>

              <p className="mt-6 text-2xl">
                Status: <span className={status === 'running' ? 'text-green-400' : 'text-yellow-400'}>
                  {status.toUpperCase()}
                </span>
              </p>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg">
              <h2 className="text-2xl mb-4">Live Stats</h2>
              <div className="space-y-4 text-xl">
                <p>Profit Today: <span className="text-green-400">$0.00</span></p>
                <p>Win Rate: <span className="text-green-400">—</span></p>
                <p>Running Since: <span className="text-gray-400">—</span></p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}