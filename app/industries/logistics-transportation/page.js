import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Hero from '../../components/Hero';
import UseCaseCard from '../../components/UseCaseCard';
import MetricCard from '../../components/MetricCard';
import AnimatedSection from '../../components/AnimatedSection';

export const metadata = {
  title: "Logistics & Transportation | ALLTHEWAY & ONFIX for Smarter Fleets in Kenya",
  description: "Improve delivery times, reduce costs and secure supply chains with ALLTHEWAY and ONFIX — dynamic routing, ETA accuracy, and immutable handoffs for Kenyan logistics operators.",
  alternates: {
    canonical: "https://boldstreet.co.ke/industries/logistics-transportation",
  },
  openGraph: {
    title: "Logistics & Transportation | ALLTHEWAY & ONFIX for Smarter Fleets in Kenya",
    description: "Improve delivery times, reduce costs and secure supply chains with ALLTHEWAY and ONFIX — dynamic routing, ETA accuracy, and immutable handoffs for Kenyan logistics operators.",
    images: ["/images/logistics-truck-route.webp"],
    url: "https://boldstreet.co.ke/industries/logistics-transportation",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Logistics & Transportation | ALLTHEWAY & ONFIX for Smarter Fleets in Kenya",
    description: "Improve delivery times, reduce costs and secure supply chains with ALLTHEWAY and ONFIX — dynamic routing, ETA accuracy, and immutable handoffs for Kenyan logistics operators.",
    images: ["/images/logistics-truck-route.webp"],
  },
};

export default function LogisticsTransportationPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Logistics & Transportation — Boldstreet",
    "url": "https://boldstreet.co.ke/industries/logistics-transportation",
    "description": "ALLTHEWAY and ONFIX for logistics: ETA forecasting, route optimization, and blockchain-backed delivery receipts for Kenyan transportation operators."
  };

  const useCases = [
    {
      title: "Dynamic Rerouting",
      description: "Leverage ONFIX congestion forecasts to optimize delivery routes in real-time, reducing delays.",
      image: "/images/logistics-truck-route.webp",
    },
    {
      title: "Verified Delivery",
      description: "Use blockchain receipts to ensure proof of handoff for high-value shipments, reducing disputes.",
      image: "/images/logistics-blockchain-receipt.webp",
    },
    {
      title: "Cold-chain Integrity",
      description: "Monitor temperature telemetry and trigger instant alerts to maintain compliance and prevent spoilage.",
      image: "/images/logistics-truck-route.webp",
    },
    {
      title: "Fleet Utilization & Driver Coaching",
      description: "Analyze telematics data to improve asset utilization and coach drivers for better performance.",
      image: "/images/logistics-blockchain-receipt.webp",
    },
  ];

  const metrics = [
    {
      category: "Logistics & Transportation KPIs",
      items: [
        "ETA mean absolute error (minutes)",
        "First-attempt delivery % and on-time delivery %",
        "Fuel/km savings and dwell-time reduction",
        "Claims/disputes resolution time and tamper event rate",
      ],
    },
  ];

  return (
    <div className="bg-background text-textPrimary min-h-screen">
      <Header />
      <main>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <Hero
          title="Logistics & Transportation — Predictable Deliveries, Proven Hand-offs"
          subhead="Cut costs and claims — start an ALLTHEWAY + ONFIX pilot to optimize routes and ETAs."
          primaryCta={{ text: "Request Logistics Pilot", href: "/contact?logistics-transportation" }}
          image="/images/logistics-truck-route.webp"
          alt="Delivery truck route with live ETA overlay in Nairobi"
        />
        <section className="container mx-auto py-8 px-4">
          <h2 className="text-3xl font-instrument-serif mb-4 text-center">The Challenge</h2>
          <AnimatedSection className="text-lg font-figtree mb-4 max-w-3xl mx-auto">
            <p>
              High last-mile uncertainty, poor ETA accuracy, unclear handoff provenance, and traffic unpredictability drive costs and customer complaints.
            </p>
          </AnimatedSection>
        </section>
        <section className="container mx-auto py-8 px-4">
          <h2 className="text-3xl font-instrument-serif mb-4 text-center">Boldstreet’s Solution</h2>
          <AnimatedSection className="text-lg font-figtree mb-4 max-w-3xl mx-auto">
            <p>
              ALLTHEWAY provides real-time telemetry, ETA forecasting, and blockchain-backed receipts; ONFIX supplies live and predictive traffic feeds for smarter routing. Together these reduce failed deliveries, improve SLA compliance, and speed dispute resolution.
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
          <h2 className="text-3xl font-instrument-serif mb-4 text-center">What Logistics Leaders Measure</h2>
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
              <li><strong>Pilot (4–8 weeks):</strong> Equip fleet subset with trackers, integrate TMS, tune ETA models using ONFIX feeds.</li>
              <li><strong>Integrations:</strong> TMS, ERP, customer notification systems (SMS/WhatsApp), insurer feeds for claims automation.</li>
            </ul>
          </AnimatedSection>
        </section>
        <section className="container mx-auto py-8 px-4">
          <h2 className="text-3xl font-instrument-serif mb-4 text-center">Security & Compliance</h2>
          <AnimatedSection className="text-lg font-figtree mb-4 max-w-3xl mx-auto">
            <p>
              Permissioned blockchain ledger for immutable handoffs, role-based access to receipts, and exportable audit trails for customs or pharma compliance.
            </p>
          </AnimatedSection>
        </section>
        <section className="container mx-auto py-8 px-4 text-center">
          <h2 className="text-3xl font-instrument-serif mb-4">Next Steps</h2>
          <AnimatedSection className="text-lg font-figtree mb-4 max-w-3xl mx-auto">
            <p>
              Start an ALLTHEWAY + ONFIX pilot to optimize routes, improve ETAs, and secure your supply chain.
            </p>
          </AnimatedSection>
          <Link
            href="/contact?logistics-transportation"
            className="bg-gradient-to-r from-blue-600 to-teal-400 text-white py-3 px-6 rounded-2xl font-figtree"
          >
            Request Logistics Pilot
          </Link>
        </section>
      </main>
      <Footer />
    </div>
  );
}