import Link from 'next/link';
import { Welcome } from '../components/Welcome/Welcome';
import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';

export default function HomePage() {
  return (
    <>
      <Welcome />
      <Link href="/todo">Todo</Link>
      <ColorSchemeToggle />
    </>
  );
}
