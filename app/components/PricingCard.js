'use client';

import { motion } from 'framer-motion';

export default function PricingCard({ title, price, description }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="p-6 bg-surface rounded-2xl shadow-lg"
    >
      <h3 className="text-xl font-oswald mb-2">{title}</h3>
      <p className="text-lg font-quattrocento text-teal-400 mb-2">{price}</p>
      <p className="font-quattrocento text-textSecondary">{description}</p>
    </motion.div>
  );
}