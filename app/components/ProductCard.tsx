'use client';

import Link from 'next/link';
import AnimatedSection from './AnimatedSection';

interface ProductCardProps {
  name: string;
  blurb: string;
  link: string;
  slug: string;
}

export default function ProductCard({ name, blurb, link, slug }: ProductCardProps) {
  return (
    <AnimatedSection 
      className="p-6 bg-white dark:bg-surface rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
    >
      <h3 className="text-xl font-oswald mb-2">{name}</h3>
      <p className="font-quattrocento text-gray-600 dark:text-textSecondary mb-4 transition-colors duration-300">{blurb}</p>
      <Link href={link || (slug ? `/products/${slug}` : '#')} className="text-brand hover:text-brand-dark dark:hover:text-brand-light font-quattrocento transition-colors duration-300 inline-flex items-center group">
        Learn More
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform duration-300"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M14 5l7 7m0 0l-7 7m7-7H3"
          />
        </svg>
      </Link>
    </AnimatedSection>
  );
}