'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

type CaseStudyCardProps = {
  title: string;
  blurb: string;
  href: string;
  image: string;
  alt: string; // ✅ added
};

export default function CaseStudyCard({ title, blurb, href, image, alt }: CaseStudyCardProps) {
  return (
    <motion.a
      href={href}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="block p-6 bg-surface rounded-2xl shadow-lg hover:shadow-xl transition-all"
    >
      <Image
        src={image}
        alt={alt}
        width={600}
        height={400}
        className="mb-4 rounded-2xl object-cover"
        loading="lazy"
      />
      <h3 className="text-xl font-oswald mb-2">{title}</h3>
      <p className="font-quattrocento text-textSecondary">{blurb}</p>
    </motion.a>
  );
}
