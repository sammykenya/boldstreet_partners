'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function UseCaseCard({ title, description, image }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="p-6 bg-surface rounded-2xl shadow-lg"
    >
      <Image
        src={image}
        alt={title}
        width={400}
        height={200}
        className="mb-4 rounded-2xl object-cover"
        loading="lazy"
      />
      <h3 className="text-xl font-oswald mb-2">{title}</h3>
      <p className="font-quattrocento text-textSecondary">{description}</p>
    </motion.div>
  );
}