import { type ReactNode } from 'react';
import { type Metadata } from 'next';
import { Raleway } from 'next/font/google';
import './globals.css';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const raleway = Raleway({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'NS Radio',
  description:
    'NS Radio caters to all of your Commercial Radio & Amateur Radio needs and is a fully licensed HAM & ICASA approved dealer. Check out our online store!',
};

type Props = {
  children: ReactNode;
};

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <body className={raleway.className}>
        <Navbar />
        <div className="min-h-screen">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
