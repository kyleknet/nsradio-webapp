import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-4 shadow-lg">
      <Link href="/" className="text-xl font-bold text-teal-500">
        NSRadio
      </Link>
      <div className="flex items-center justify-center gap-8">
        <div>Products</div>
        <div>Cart</div>
      </div>
    </nav>
  );
}
