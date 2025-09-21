import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Hero from '../../components/Hero';
import UseCaseCard from '../../components/UseCaseCard';
import MetricCard from '../../components/MetricCard';
import AnimatedSection from '../../components/AnimatedSection';

export const metadata = {
  title: "Retail & FMCG | LOOK & Boldstreet OOH for Shopper Insights & Campaign ROI",
  description: "Boost conversion and retail efficiency with LOOK consumer analytics and Boldstreet OOH programmatic ads. Real-time heatmaps, gaze metrics, and offline attribution for Nairobi retailers and FMCG brands.",
  alternates: {
    canonical: "https://boldstreet.co.ke/industries/retail-fmcg",
  },
  openGraph: {
    title: "Retail & FMCG | LOOK & Boldstreet OOH for Shopper Insights & Campaign ROI",
    description: "Boost conversion and retail efficiency with LOOK consumer analytics and Boldstreet OOH programmatic ads. Real-time heatmaps, gaze metrics, and offline attribution for Nairobi retailers and FMCG brands.",
    images: ["/images/retail-heatmap.webp"],
    url: "https://boldstreet.co.ke/industries/retail-fmcg",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Retail & FMCG | LOOK & Boldstreet OOH for Shopper Insights & Campaign ROI",
    description: "Boost conversion and retail efficiency with LOOK consumer analytics and Boldstreet OOH programmatic ads. Real-time heatmaps, gaze metrics, and offline attribution for Nairobi retailers and FMCG brands.",
    images: ["/images/retail-heatmap.webp"],
  },
};

export default function RetailFMCGPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Retail & FMCG — Boldstreet",
    "url": "https://boldstreet.co.ke/industries/retail-fmcg",
    "description": "LOOK and Boldstreet OOH for retail and FMCG: heatmaps, gaze analytics, and offline attribution to increase conversions across Kenya.",
  };

  const useCases = [
    {
      title: "Merchandising Optimization",
      description: "Move products to high-attention zones based on gaze and dwell analytics.",
      image: "/images/retail-heatmap.webp",
    },
    {
      title: "Campaign-to-Conversion Attribution",
      description: "Link DOOH impressions to in-store lift via POS integration for measurable ROI.",
      image: "/images/retail-dooh-creative.webp",
    },
    {
      title: "Customer Segmentation",
      description: "Tailor promotions by aggregated demographics and visit behavior patterns.",
      image: "/images/retail-heatmap.webp",
    },
    {
      title: "Pop-ups & Events",
      description: "Rapid feedback loops for activation optimization during temporary setups.",
      image: "/images/retail-dooh-creative.webp",
    },
  ];

  const metrics = [
    {
      category: "Retail & FMCG KPIs",
      items: [
        "Glance Rate & Watch-to-Conversion ratio",
        "Dwell time by display and uplift % post-creative change",
        "Store-level sales lift attributable to DOOH events",
        "Queue reduction & staff optimization metrics",
      ],
    },
  ];

  return (
    <div className="bg-background text-textPrimary min-h-screen">
      <Header />
      <main>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <Hero
          title="Retail & FMCG — From Footfall to Sales"
          subhead="Convert attention into revenue — book a retail insights pilot with LOOK and Boldstreet OOH."
          primaryCta={{ text: "Request Retail Pilot", href: "/contact?retail-fmcg" }}
          image="/images/retail-heatmap.webp"
          alt="Retail store heatmap showing customer attention and dwell zones"
        />
        <section className="container mx-auto py-8 px-4">
          <h2 className="text-3xl font-instrument-serif mb-4 text-center">The Challenge</h2>
          <AnimatedSection className="text-lg font-figtree mb-4 max-w-3xl mx-auto">
            <p>
              Brick-and-mortar retailers and FMCG teams lack fast, precise measurements of real-world attention and the
              chain linking ad exposure → store visit → purchase. Decisions rely on surveys, not verified behavioral
              signals.
            </p>
          </AnimatedSection>
        </section>
        <section className="container mx-auto py-8 px-4">
          <h2 className="text-3xl font-instrument-serif mb-4 text-center">Boldstreet’s Solution</h2>
          <AnimatedSection className="text-lg font-figtree mb-4 max-w-3xl mx-auto">
            <p>
              LOOK captures attention and movement data (gaze, dwell, pathing); Boldstreet OOH dynamically serves creatives
              based on live audience signals. Together they enable A/B creative testing, in-store optimization, and
              attribution of offline conversions to DOOH exposures.
            </p>
          </AnimatedSection>
        </section>
        <section className="container mx-auto py-8 px-4">
          <h2 className="text-3xl font-instrument-serif mb-4 text-center">Core Use Cases</h2>
          <AnimatedSection className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
            {useCases.map((useCase, index) => (
              <UseCaseCard key={index} {...useCase} />
            ))}
          </AnimatedSection>
        </section>
        <section className="container mx-auto py-8 px-4">
          <h2 className="text-3xl font-instrument-serif mb-4 text-center">What Retailers Measure</h2>
          <AnimatedSection className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {metrics.map((metric, index) => (
              <MetricCard key={index} {...metric} />
            ))}
          </AnimatedSection>
        </section>
        <section className="container mx-auto py-8 px-4">
          <h2 className="text-3xl font-instrument-serif mb-4 text-center">Implementation Highlights</h2>
          <AnimatedSection className="text-lg font-figtree mb-4 max-w-3xl mx-auto">
            <ul className="list-disc pl-6">
              <li><strong>Pilot (3–6 weeks):</strong> Install 2–6 camera zones, connect POS for attribution, run A/B creative tests via Boldstreet OOH.</li>
              <li><strong>Integrations:</strong> POS, CRM, loyalty systems, ad platforms.</li>
              <li><strong>Results:</strong> Actionable playbooks for layout changes, staffing shifts, targeted promotions.</li>
            </ul>
          </AnimatedSection>
        </section>
        <section className="container mx-auto py-8 px-4">
          <h2 className="text-3xl font-instrument-serif mb-4 text-center">Compliance & Shopper Trust</h2>
          <AnimatedSection className="text-lg font-figtree mb-4 max-w-3xl mx-auto">
            <p>
              Signage, clear opt-out, and anonymized aggregate reporting. Bias testing of demographic models to ensure
              fairness.
            </p>
          </AnimatedSection>
        </section>
        <section className="container mx-auto py-8 px-4 text-center">
          <h2 className="text-3xl font-instrument-serif mb-4">Next Steps</h2>
          <AnimatedSection className="text-lg font-figtree mb-4 max-w-3xl mx-auto">
            <p>
              Book a retail insights pilot with LOOK and Boldstreet OOH to optimize conversions and campaign ROI.
            </p>
          </AnimatedSection>
          <Link
            href="/contact?retail-fmcg"
            className="bg-gradient-to-r from-blue-600 to-teal-400 text-white py-3 px-6 rounded-2xl font-figtree"
          >
            Request Retail Pilot
          </Link>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default function RetailFmcgPage() {
  return (
    <RetailFmcgLayout>
      <RetailFmcgPageContent />
    </RetailFmcgLayout>
  );
}