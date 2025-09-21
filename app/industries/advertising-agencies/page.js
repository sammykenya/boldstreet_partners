import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Hero from '../../components/Hero';
import UseCaseCard from '../../components/UseCaseCard';
import MetricCard from '../../components/MetricCard';
import AnimatedSection from '../../components/AnimatedSection';

export const metadata = {
  title: "Advertising & Agencies | Boldstreet OOH — Programmatic & Measurable Outdoor Media",
  description: "For agencies and media buyers: Boldstreet OOH offers RTB-ready programmatic DOOH, gaze/dwell verification, DCO, and blockchain receipts — run campaigns that measure and prove offline outcomes.",
  alternates: {
    canonical: "https://boldstreet.co.ke/industries/advertising-agencies",
  },
  openGraph: {
    title: "Advertising & Agencies | Boldstreet OOH — Programmatic & Measurable Outdoor Media",
    description: "For agencies and media buyers: Boldstreet OOH offers RTB-ready programmatic DOOH, gaze/dwell verification, DCO, and blockchain receipts — run campaigns that measure and prove offline outcomes.",
    images: ["/images/advertising-rtb-dashboard.webp"],
    url: "https://boldstreet.co.ke/industries/advertising-agencies",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Advertising & Agencies | Boldstreet OOH — Programmatic & Measurable Outdoor Media",
    description: "For agencies and media buyers: Boldstreet OOH offers RTB-ready programmatic DOOH, gaze/dwell verification, DCO, and blockchain receipts — run campaigns that measure and prove offline outcomes.",
    images: ["/images/advertising-rtb-dashboard.webp"],
  },
};

export default function AdvertisingAgenciesPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Advertising & Agencies — Boldstreet",
    "url": "https://boldstreet.co.ke/industries/advertising-agencies",
    "description": "Boldstreet OOH for agencies and media buyers: programmatic DOOH, gaze/dwell verification, DCO, and blockchain-anchored receipts for campaign reconciliation."
  };

  const useCases = [
    {
      title: "Programmatic Campaign Buys",
      description: "Run RTB auctions on audience segments with real-time bidding logic for precise OOH campaign execution.",
      image: "/images/advertising-rtb-dashboard.webp",
    },
    {
      title: "Dynamic Creatives & DCO",
      description: "Switch messaging dynamically based on weather, crowd demographics, or nearby retail events for higher engagement.",
      image: "/images/advertising-dco-creative.webp",
    },
    {
      title: "Verification for Billing",
      description: "Blockchain-anchored impression receipts ensure accurate finance reconciliation and transparency.",
      image: "/images/advertising-rtb-dashboard.webp",
    },
  ];

  const metrics = [
    {
      category: "Advertising & Agencies KPIs",
      items: [
        "Verified impressions & viewability %",
        "Watch-to-visit conversion (linked via POS/LOOK)",
        "Revenue per site and yield management for publishers",
        "Campaign ROAS and lift vs legacy OOH",
      ],
    },
  ];

  return (
    <div className="bg-background text-textPrimary min-h-screen">
      <Header />
      <main>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <Hero
          title="Advertising & Agencies — Make OOH Perform Like Digital"
          subhead="Buy, optimize, and verify OOH with programmatic precision — request a demo for your next campaign."
          primaryCta={{ text: "Schedule Demo for Agencies", href: "/contact?advertising-agencies" }}
          image="/images/advertising-rtb-dashboard.webp"
          alt="RTB dashboard for DOOH auctions and bidder insights"
        />
        <section className="container mx-auto py-8 px-4">
          <h2 className="text-3xl font-instrument-serif mb-4 text-center">The Challenge</h2>
          <AnimatedSection className="text-lg font-figtree mb-4 max-w-3xl mx-auto">
            <p>
              Agencies face limited verification, no real-time optimization, and weak offline attribution for OOH buys. Buyers want programmatic workflows and receipts that reconcile to billing.
            </p>
          </AnimatedSection>
        </section>
        <section className="container mx-auto py-8 px-4">
          <h2 className="text-3xl font-instrument-serif mb-4 text-center">Boldstreet’s Solution</h2>
          <AnimatedSection className="text-lg font-figtree mb-4 max-w-3xl mx-auto">
            <p>
              Boldstreet OOH exposes inventory as programmatic impressions, uses LOOK and RAVEN signals for audience validation, and records verified impressions on blockchain for reconciled billing. DCO and RTB increase yield and campaign effectiveness.
            </p>
          </AnimatedSection>
        </section>
        <section className="container mx-auto py-8 px-4">
          <h2 className="text-3xl font-instrument-serif mb-4 text-center">Core Use Cases</h2>
          <AnimatedSection className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {useCases.map((useCase, index) => (
              <UseCaseCard key={index} {...useCase} />
            ))}
          </AnimatedSection>
        </section>
        <section className="container mx-auto py-8 px-4">
          <h2 className="text-3xl font-instrument-serif mb-4 text-center">What Agencies Measure</h2>
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
              <li><strong>Quick Onboarding:</strong> Inventory onboarding and pilot auctioning within 4–8 weeks.</li>
              <li><strong>Integrations:</strong> SSP connectors, campaign dashboards, and advertiser white-labelling possibilities.</li>
              <li><strong>Publisher Monetization:</strong> Leasing, rev-share, or managed services models.</li>
            </ul>
          </AnimatedSection>
        </section>
        <section className="container mx-auto py-8 px-4">
          <h2 className="text-3xl font-instrument-serif mb-4 text-center">Compliance & Ethics</h2>
          <AnimatedSection className="text-lg font-figtree mb-4 max-w-3xl mx-auto">
            <p>
              GDPR-style anonymization, creative safety checks, and opt-out signage for venues ensure ethical and compliant operations.
            </p>
          </AnimatedSection>
        </section>
        <section className="container mx-auto py-8 px-4 text-center">
          <h2 className="text-3xl font-instrument-serif mb-4">Next Steps</h2>
          <AnimatedSection className="text-lg font-figtree mb-4 max-w-3xl mx-auto">
            <p>
              Schedule a demo to explore how Boldstreet OOH can transform your next campaign with programmatic precision and verified outcomes.
            </p>
          </AnimatedSection>
          <Link
            href="/contact?advertising-agencies"
            className="bg-gradient-to-r from-blue-600 to-teal-400 text-white py-3 px-6 rounded-2xl font-figtree"
          >
            Schedule Demo for Agencies
          </Link>
        </section>
      </main>
      <Footer />
    </div>
  );
}