import Link from 'next/link';

export default function Footer() {
  return (
    <footer>
      <ul>
        <li>
          <Link href="/">Contact</Link>
        </li>
        <li>
          <Link href="/">Terms</Link>
        </li>
        <li>
          <Link href="/">Policy</Link>
        </li>
        <li>
          <Link href="/">Facebook</Link>
        </li>
      </ul>
    </footer>
  );
}
