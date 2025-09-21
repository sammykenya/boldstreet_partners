'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

type BlogCardProps = {
  title: string;
  href: string;
  image: string;
  excerpt: string; // ✅ added
};

export default function BlogCard({ title, href, image, excerpt }: BlogCardProps) {
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
        alt={title}
        width={600}
        height={400}
        className="mb-4 rounded-2xl object-cover"
        loading="lazy"
      />
      <h3 className="text-xl font-oswald mb-2">{title}</h3>
      <p className="font-quattrocento text-textSecondary">{excerpt}</p>
    </motion.a>
  );
}
