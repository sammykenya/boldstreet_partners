'use client';

import { motion } from 'framer-motion';

export default function ImplementationPhase({ phase, duration, description }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="p-6 bg-surface rounded-2xl shadow-lg"
    >
      <h3 className="text-xl font-instrument-serif mb-2">{phase}</h3>
      <p className="font-figtree text-textSecondary mb-2">{duration}</p>
      <p className="font-figtree text-textSecondary">{description}</p>
    </motion.div>
  );
}