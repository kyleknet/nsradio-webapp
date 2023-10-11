import Link from 'next/link';

export default function Navbar() {
  const itemsInCart = 0;

  return (
    <nav className="flex items-center justify-between px-8 py-4 shadow-lg">
      <Link href="/" className="text-xl font-bold text-teal-500">
        NSRadio
      </Link>
      <div className="flex items-center justify-center gap-8">
        <Link
          href="/products"
          className="group transition-all hover:text-teal-500 "
        >
          Products
          <div className="h-[2px] w-0 bg-teal-500 transition-all group-hover:w-full" />
        </Link>
        <Link
          href="/cart"
          className="group transition-all hover:text-teal-500 "
        >
          Cart{' '}
          <span className="text-lg font-semibold text-teal-500">
            {itemsInCart > 0 && itemsInCart}
          </span>
          <div className="h-[2px] w-0 bg-teal-500 transition-all group-hover:w-full" />
        </Link>
      </div>
    </nav>
  );
}
