// components/MetricsTile.tsx
'use client';

import React from 'react';
import { motion } from 'framer-motion';

type MetricsTileProps = {
  stat: string | number;
  caption: string;
  compact?: boolean;
};

export default function MetricsTile({ stat, caption, compact = false }: MetricsTileProps) {
  const sizeClasses = compact ? 'p-3 text-sm' : 'p-4';
  const statClass = compact ? 'text-lg' : 'text-2xl';

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.45 }}
      className={`bg-surface rounded-2xl shadow text-center ${sizeClasses}`}
    >
      <h3 className={`${statClass} font-instrument-serif`}>{stat}</h3>
      <p className="font-figtree text-textSecondary">{caption}</p>
    </motion.div>
  );
}
