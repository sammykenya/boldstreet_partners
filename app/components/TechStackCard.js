'use client';

import { motion } from 'framer-motion';

export default function TechStackCard({ title, items }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="p-6 bg-surface rounded-2xl shadow-lg"
    >
      <h3 className="text-xl font-oswald mb-2">{title}</h3>
      <ul className="list-disc pl-6 font-quattrocento text-textSecondary">
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </motion.div>
  );
}