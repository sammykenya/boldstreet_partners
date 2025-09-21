'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function ProductCard({ name, blurb, link }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="p-6 bg-surface rounded-2xl shadow-lg"
    >
      <h3 className="text-xl font-oswald mb-2">{name}</h3>
      <p className="font-quattrocento text-textSecondary mb-4">{blurb}</p>
      <Link href={link} className="text-teal-400 hover:underline font-quattrocento">Learn More</Link>
    </motion.div>
  );
}