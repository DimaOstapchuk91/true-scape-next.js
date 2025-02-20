import ActiveLabel from './components/active-label/ActiveLabel';
import './globals.css';

export default function Home() {
  return (
    <main>
      <h1 className="text-xl text-green-400">Hello Next.js</h1>
      <ActiveLabel>Active</ActiveLabel>
    </main>
  );
}
