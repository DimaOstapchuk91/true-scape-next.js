import AddCompanyBtn from './components/AddCompanyBtn/AddCompanyBtn';
import MagicBtn from './components/MagicBtn/MagicBtn';
import './globals.css';

export default function Home() {
  return (
    <main>
      <h1 className="text-xl text-green-400">Hello Next.js</h1>

      <AddCompanyBtn />

      <MagicBtn />
    </main>
  );
}
