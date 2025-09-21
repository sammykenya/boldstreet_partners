'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-surface text-textPrimary p-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-xl font-oswald mb-4">Boldstreet Partners</h3>
          <p className="font-quattrocento">Nairobi, Kenya – Serving Africa and beyond</p>
          <p className="font-quattrocento">Email: info@boldstreet.co.ke</p>
          <p className="font-quattrocento">Phone: +254 123 456 789</p>
        </div>
        <div>
          <h3 className="text-xl font-oswald mb-4">Links</h3>
          <ul className="font-quattrocento">
            <li><Link href="/products" className="hover:text-teal-400">Products</Link></li>
            <li><Link href="/industries" className="hover:text-teal-400">Industries</Link></li>
            <li><Link href="/case-studies" className="hover:text-teal-400">Case Studies</Link></li>
            <li><Link href="/blog" className="hover:text-teal-400">Blog</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-oswald mb-4">Legal</h3>
          <ul className="font-quattrocento">
            <li><Link href="/privacy" className="hover:text-teal-400">Privacy</Link></li>
            <li><Link href="/terms" className="hover:text-teal-400">Terms</Link></li>
            <li><Link href="/pitch-deck.pdf" className="hover:text-teal-400">Pitch Deck</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-oswald mb-4">Newsletter</h3>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full p-2 rounded-2xl bg-background text-textPrimary mb-2 focus:outline-none focus:ring-2 focus:ring-teal-400"
          />
          <button className="bg-gradient-to-r from-blue-600 to-teal-400 text-white py-2 px-4 rounded-2xl">Subscribe</button>
          <p className="font-quattrocento mt-2">Blockchain-verified metrics for trust.</p>
        </div>
      </div>
      <div className="text-center mt-8 font-quattrocento">
        <p>&copy; 2025 Boldstreet Partners. All rights reserved.</p>
      </div>
    </footer>
  );
}