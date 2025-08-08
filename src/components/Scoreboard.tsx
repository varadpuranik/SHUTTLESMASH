import { useState } from 'react';

export default function Scoreboard() {
  const [scoreA, setScoreA] = useState(0);
  const [scoreB, setScoreB] = useState(0);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState('');

  const recordMatch = async () => {
    setSaving(true);
    setMessage('');
    try {
      const res = await fetch('/api/match', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ scoreA, scoreB, playerIds: [] }),
      });
      if (!res.ok) throw new Error('Request failed');
      setMessage('Match saved');
      setScoreA(0);
      setScoreB(0);
    } catch (err) {
      setMessage('Failed to save match');
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="p-4 text-center">
      <h2 className="text-2xl mb-4">{scoreA} – {scoreB}</h2>
      <div className="space-x-2">
        <button className="px-2 py-1 bg-blue-500 text-white" onClick={() => setScoreA(scoreA + 1)}>
          Point A
        </button>
        <button className="px-2 py-1 bg-green-500 text-white" onClick={() => setScoreB(scoreB + 1)}>
          Point B
        </button>
      </div>
      <button
        className="mt-4 px-2 py-1 bg-gray-800 text-white"
        disabled={saving}
        onClick={recordMatch}
      >
        {saving ? 'Saving...' : 'Record Match'}
      </button>
      {message && <p className="mt-2">{message}</p>}
    </div>
  );
}
