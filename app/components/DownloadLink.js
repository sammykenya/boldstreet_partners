'use client';

import Link from 'next/link';

export default function DownloadLink({ href, text }) {
  return (
    <Link
      href={href}
      className="border border-teal-400 text-teal-400 py-3 px-6 rounded-2xl font-quattrocento hover:bg-teal-400 hover:text-background"
    >
      {text}
    </Link>
  );
}