'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Hero({ title, subhead, primaryCta, secondaryCta, video, image, alt }) {
  return (
    <section className="relative h-screen flex items-center">
      {video ? (
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          src={video}
        />
      ) : image ? (
        <Image
          src={image}
          alt={alt || title}
          fill
          className="absolute inset-0 object-cover"
          priority
        />
      ) : null}
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4 text-center relative z-10"
      >
        <h1 className="text-4xl md:text-5xl font-oswald text-white mb-4">{title}</h1>
        <p className="text-lg font-quattrocento text-textSecondary mb-6 max-w-2xl mx-auto">{subhead}</p>
        <div className="space-x-4">
          <Link
            href={primaryCta.href}
            className="bg-gradient-to-r from-blue-600 to-teal-400 text-white py-3 px-6 rounded-2xl font-quattrocento"
          >
            {primaryCta.text}
          </Link>
          <Link
            href={secondaryCta.href}
            className="border border-teal-400 text-teal-400 py-3 px-6 rounded-2xl font-quattrocento hover:bg-teal-400 hover:text-background"
          >
            {secondaryCta.text}
          </Link>
        </div>
      </motion.div>
    </section>
  );
}