'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import ProductCard from './components/ProductCard';
import MetricsTile from './components/MetricsTile';
import CaseStudyCard from './components/CaseStudyCard';
import BlogCard from './components/BlogCard';

export default function Home() {
  const products = [
    {
      name: 'RAVEN',
      slug: 'raven',
      blurb: 'Our AI Surveillance Engine for proactive security and anomaly detection.',
      link: '/products/raven',
    },
    {
      name: 'Boldstreet OOH',
      slug: 'ooh',
      blurb: 'A Programmatic Out-of-Home Advertising Engine for data-driven DOOH campaigns.',
      link: '/products/ooh',
    },
    {
      name: 'LOOK',
      slug: 'look',
      blurb: 'A Consumer Insight Engine delivering real-time retail analytics and personalization.',
      link: '/products/look',
    },
    {
      name: 'ONFIX',
      slug: 'onfix',
      blurb: 'A Smart Cities Engine for urban traffic, pedestrian, and sustainability analytics.',
      link: '/products/onfix',
    },
    {
      name: 'ALLTHEWAY',
      slug: 'alltheway',
      blurb: 'A Logistics Engine optimizing supply chains with AI and blockchain.',
      link: '/products/alltheway',
    },
  ];

  // Framer motion variants
  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.06 },
    },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 14 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="bg-background text-textPrimary min-h-screen scroll-smooth leading-relaxed">
      <Header />
      <main className="pb-16">
        {/* HERO (kept but tightened layout) */}
        <Hero
          title="Powering Africa’s Data-Driven Future"
          subhead="Transforming Advertising, Retail, Security, Cities, and Logistics with Patented AI and Blockchain Technology."
          primaryCta={{ text: 'Request Pilot', href: '/contact?product=general' }}
          secondaryCta={{ text: 'Explore Our Engines', href: '#our-engines' }}
          video="/videos/nairobi-skyline-loop.mp4"
          image="/images/hero-poster.webp"
          alt="Nairobi skyline at dusk"
        />

        {/* Partner strip + stats */}
        <section className="container mx-auto px-4 -mt-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="flex flex-col md:flex-row items-center gap-4 justify-between"
          >
            <motion.div variants={fadeUp} className="flex items-center gap-4 flex-wrap">
              <img
                src="/images/partner-konza.png"
                alt="Konza City Partner Logo"
                className="h-8 object-contain"
                loading="lazy"
              />
              <img
                src="/images/partner-nps.png"
                alt="National Police Service Partner Logo"
                className="h-8 object-contain"
                loading="lazy"
              />
              <span className="font-quattrocento text-sm opacity-90">10+ early adopters</span>
              <span className="font-quattrocento text-sm opacity-90">95% model accuracy</span>
            </motion.div>
            <motion.div variants={fadeUp} className="flex gap-3 items-center">
              <Link
                href="/pitch-deck.pdf"
                className="rounded-full px-4 py-2 text-sm font-medium bg-white/6 backdrop-blur-sm border border-white/6 hover:scale-105 transition-transform"
              >
                Download Pitch Deck
              </Link>
            </motion.div>
          </motion.div>

          {/* Why Boldstreet — glass card */}
          <motion.div initial="hidden" animate="visible" variants={containerVariants} className="mt-6">
            <motion.h2 variants={fadeUp} className="text-3xl font-oswald mb-4 text-center drop-shadow-md">
              Why Boldstreet
            </motion.h2>
            <motion.div
              variants={fadeUp}
              className="max-w-5xl mx-auto rounded-2xl p-6 bg-white/6 backdrop-blur-md border border-white/6 shadow-lg"
            >
              <p className="text-lg font-quattrocento mb-4">
                Welcome to Boldstreet Partners, Kenya’s leading innovator in AI-driven solutions. Founded in 2024 and
                headquartered in Nairobi, we’ve developed five flagship engines. Powered by a patented technology stack
                (YOLO computer vision, Kafka streaming, and blockchain validation), we deliver 95%+ accuracy in detection
                and 1,450+ real-time KPIs across 25 categories. From Nairobi’s bustling streets to Konza City’s smart
                campuses, Boldstreet turns raw data into actionable intelligence.
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 list-none mt-4">
                <li className="flex items-start gap-3 text-sm">
                  <span className="rounded-full w-7 h-7 flex items-center justify-center bg-white/8">✓</span>
                  <span>Real-Time Security & Surveillance: Detect terrorism, theft, and safety risks instantly with RAVEN.</span>
                </li>
                <li className="flex items-start gap-3 text-sm">
                  <span className="rounded-full w-7 h-7 flex items-center justify-center bg-white/8">✓</span>
                  <span>Data-Driven Advertising: Boost OOH campaign ROI with Boldstreet OOH.</span>
                </li>
                <li className="flex items-start gap-3 text-sm">
                  <span className="rounded-full w-7 h-7 flex items-center justify-center bg-white/8">✓</span>
                  <span>Retail Personalization & Insights: Understand customer behavior in real time with LOOK.</span>
                </li>
                <li className="flex items-start gap-3 text-sm">
                  <span className="rounded-full w-7 h-7 flex items-center justify-center bg-white/8">✓</span>
                  <span>Smart City Optimization: Plan more efficient, safer cities with ONFIX.</span>
                </li>
                <li className="flex items-start gap-3 text-sm">
                  <span className="rounded-full w-7 h-7 flex items-center justify-center bg-white/8">✓</span>
                  <span>Logistics Efficiency: ALLTHEWAY cuts costs in $6B+ supply chains.</span>
                </li>
              </ul>
              {/* Metrics as compact glass tiles */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
                <MetricsTile stat="1450+" caption="KPIs Tracked" compact />
                <MetricsTile stat="95%" caption="Model Accuracy" compact />
                <MetricsTile stat="10+" caption="Pilots Run" compact />
                <MetricsTile stat="Nairobi" caption="HQ" compact />
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* Our Engines — rearranged into prominent glass cards */}
        <section id="our-engines" className="container mx-auto px-4 mt-12">
          <motion.h2 initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-3xl font-oswald mb-6 text-center drop-shadow-md">
            Our Engines
          </motion.h2>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6"
          >
            {products.map((product) => (
              <motion.article
                key={product.slug}
                variants={fadeUp}
                whileHover={{ y: -6 }}
                className="rounded-2xl bg-white/6 backdrop-blur-md border border-white/6 shadow-md p-4 flex flex-col justify-between hover:shadow-xl transition-shadow"
              >
                {/* Product visual placeholder */}
                <div className="w-full h-40 md:h-44 rounded-xl overflow-hidden mb-4 bg-gradient-to-br from-black/10 to-white/2 flex items-center justify-center">
                  {/* If ProductCard already includes visuals, it will render inside. We place ProductCard inside a constrained container so it adapts */}
                  <div className="w-full h-full flex items-center justify-center">
                    <ProductCard
                      name={product.name}
                      slug={product.slug}
                      blurb={product.blurb}
                      link={product.link}
                    />
                  </div>
                </div>
                <div className="mt-2 flex items-center justify-between gap-3">
                  <Link
                    href={product.link}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-600 to-teal-400 text-white text-sm font-medium shadow-sm hover:scale-105 transition-transform"
                  >
                    Explore
                  </Link>
                  <Link
                    href={`/contact?product=${product.slug}`}
                    className="text-sm px-3 py-2 rounded-full bg-white/6 backdrop-blur-sm border border-white/6 hover:bg-white/8 transition-colors"
                  >
                    Start Pilot
                  </Link>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </section>

        {/* Live Demo — big visual card */}
        <section className="container mx-auto px-4 mt-12">
          <motion.h2 initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-3xl font-oswald mb-4 text-center drop-shadow-md">
            Live Demo
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-5xl mx-auto rounded-3xl overflow-hidden shadow-2xl"
          >
            <img
              src="/images/dashboard-mock.webp"
              alt="Boldstreet dashboard showing heatmaps and KPIs"
              className="w-full h-64 md:h-96 object-cover"
              loading="lazy"
            />
            <div className="p-6 bg-gradient-to-t from-black/20 to-transparent flex items-center justify-between">
              <div>
                <h3 className="text-xl font-semibold">See Boldstreet in action</h3>
                <p className="text-sm opacity-80">
                  Request a live demo and watch how our engines translate sensor data into business outcomes.
                </p>
              </div>
              <div className="flex items-center gap-3">
                <motion.a
                  whileHover={{ scale: 1.03 }}
                  href="/contact?demo=true"
                  className="inline-block rounded-full px-5 py-3 bg-gradient-to-r from-blue-600 to-teal-400 text-white font-semibold shadow-md"
                >
                  Request Live Demo
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.03 }}
                  href="/contact?demo=true"
                  className="inline-block rounded-full px-4 py-2 bg-white/6 backdrop-blur-sm border border-white/6"
                >
                  Book a walkthrough
                </motion.a>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Case Studies */}
        <section className="container mx-auto px-4 mt-12">
          <motion.h2 initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-3xl font-oswald mb-6 text-center drop-shadow-md">
            Case Studies
          </motion.h2>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            <motion.div
              variants={fadeUp}
              className="rounded-2xl bg-white/6 backdrop-blur-md border border-white/6 shadow-md overflow-hidden hover:shadow-xl transition-shadow"
            >
              <CaseStudyCard
                title="Two Rivers Mall (RAVEN)"
                blurb="Reduced response time by 54%."
                href="/case-studies/two-rivers-raven"
                image="/images/two-rivers.webp"
                alt="Two Rivers Mall case study"
              />
            </motion.div>
            <motion.div
              variants={fadeUp}
              className="rounded-2xl bg-white/6 backdrop-blur-md border border-white/6 shadow-md overflow-hidden hover:shadow-xl transition-shadow"
            >
              <CaseStudyCard
                title="Nairobi Billboard Campaign"
                blurb="Increased ROI by 30% with OOH."
                href="/case-studies/nairobi-ooh-campaign"
                image="/images/nairobi-ooh.webp"
                alt="Nairobi billboard campaign case study"
              />
            </motion.div>
          </motion.div>
        </section>

        {/* Insights / Blog */}
        <section className="container mx-auto px-4 mt-12">
          <motion.h2 initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-3xl font-oswald mb-6 text-center drop-shadow-md">
            Insights from Boldstreet
          </motion.h2>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            <motion.div
              variants={fadeUp}
              className="rounded-2xl bg-white/6 backdrop-blur-md border border-white/6 shadow-md overflow-hidden hover:shadow-xl transition-shadow"
            >
              <BlogCard
                title="RAVEN: Preventing Terrorism in Kenya"
                href="/blog/raven-preventing-terrorism-kenya"
                image="/images/blog-raven-terrorism.webp"
                excerpt="Discover how RAVEN's AI surveillance is enhancing security measures across Kenya."
              />
            </motion.div>
            <motion.div
              variants={fadeUp}
              className="rounded-2xl bg-white/6 backdrop-blur-md border border-white/6 shadow-md overflow-hidden hover:shadow-xl transition-shadow"
            >
              <BlogCard
                title="Programmatic DOOH: The Future of Advertising in Nairobi"
                href="/blog/programmatic-dooh-nairobi"
                image="/images/blog-dooh-nairobi.webp"
                excerpt="Explore the rise of programmatic digital out-of-home advertising in Nairobi's urban landscape."
              />
            </motion.div>
            <motion.div
              variants={fadeUp}
              className="rounded-2xl bg-white/6 backdrop-blur-md border border-white/6 shadow-md overflow-hidden hover:shadow-xl transition-shadow"
            >
              <BlogCard
                title="Consumer Analytics Post-COVID"
                href="/blog/consumer-analytics-post-covid"
                image="/images/blog-consumer-analytics.webp"
                excerpt="Insights into how consumer behavior has evolved in retail post-COVID and how analytics can help."
              />
            </motion.div>
          </motion.div>
          <div className="text-center mt-6">
            <Link
              href="/blog"
              className="inline-block rounded-full px-5 py-3 bg-white/6 backdrop-blur-sm border border-white/6 hover:scale-105 transition-transform"
            >
              Read Our Blog
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}