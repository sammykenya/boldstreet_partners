'use client';

import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-surface text-textPrimary p-4 sticky top-0 z-10">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <Image src="/images/logo.png" alt="Boldstreet Logo" width={120} height={40} className="h-10 w-auto" />
        </Link>
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
        <ul className={`md:flex space-x-6 ${isOpen ? 'block' : 'hidden'} md:block absolute md:static bg-surface w-full md:w-auto left-0 top-16 p-4 md:p-0`}>
          <li><Link href="/" className="hover:text-teal-400 font-quattrocento">Home</Link></li>
          <li><Link href="/products" className="hover:text-teal-400 font-quattrocento">Products</Link></li>
          <li><Link href="/industries" className="hover:text-teal-400 font-quattrocento">Industries</Link></li>
          <li><Link href="/case-studies" className="hover:text-teal-400 font-quattrocento">Case Studies</Link></li>
          <li><Link href="/blog" className="hover:text-teal-400 font-quattrocento">Blog</Link></li>
          <li><Link href="/about" className="hover:text-teal-400 font-quattrocento">About</Link></li>
          <li><Link href="/contact" className="bg-gradient-to-r from-blue-600 to-teal-400 text-white py-2 px-4 rounded-2xl font-quattrocento">Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
}