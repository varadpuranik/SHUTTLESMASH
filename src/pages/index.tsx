 codex/add-badminton-rules-page
import Link from 'next/link';

export default function Home() {
  return (
    <main className="p-6 space-y-4">
      <h1 className="text-2xl font-semibold">Shuttle Smash</h1>
      <nav>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <Link href="/rules" className="text-blue-600 hover:underline">
              Badminton Rules
            </Link>
          </li>
        </ul>
      </nav>

import Scoreboard from '../components/Scoreboard';

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center">
      <Scoreboard />
 main
    </main>
  );
}
