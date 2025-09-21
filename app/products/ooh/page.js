import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Hero from '../../components/Hero';
import UseCaseCard from '../../components/UseCaseCard';
import TechStackCard from '../../components/TechStackCard';
import MetricCard from '../../components/MetricCard';
import ImplementationPhase from '../../components/ImplementationPhase';
import CaseSnapshot from '../../components/CaseSnapshot';
import AnimatedSection from '../../components/AnimatedSection';
import PricingCard from '../../components/PricingCard';
import DownloadLink from '../../components/DownloadLink';

export const metadata = {
  title: "Boldstreet OOH | Programmatic DOOH & Measurable Out-of-Home Advertising in Nairobi",
  description: "Boldstreet OOH turns billboards and street screens into measurable, programmatic ad channels. Real-time audience signals, gaze & dwell metrics, RTB integration and blockchain-verified impressions for advertisers and agencies in Nairobi & East Africa.",
  alternates: {
    canonical: "https://boldstreet.co.ke/products/ooh",
  },
  openGraph: {
    title: "Boldstreet OOH | Programmatic DOOH & Measurable Out-of-Home Advertising in Nairobi",
    description: "Boldstreet OOH turns billboards and street screens into measurable, programmatic ad channels. Real-time audience signals, gaze & dwell metrics, RTB integration and blockchain-verified impressions for advertisers and agencies in Nairobi & East Africa.",
    images: ["/images/ooh-hero.webp"],
    url: "https://boldstreet.co.ke/products/ooh",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Boldstreet OOH | Programmatic DOOH & Measurable Out-of-Home Advertising in Nairobi",
    description: "Boldstreet OOH turns billboards and street screens into measurable, programmatic ad channels. Real-time audience signals, gaze & dwell metrics, RTB integration and blockchain-verified impressions for advertisers and agencies in Nairobi & East Africa.",
    images: ["/images/ooh-hero.webp"],
  },
};

export default function OOHPage() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Product",
      "name": "Boldstreet OOH",
      "description": "Programmatic DOOH platform for Nairobi & East Africa — real-time audience signals, gaze & dwell metrics, RTB integration, and blockchain-verified impressions.",
      "brand": {
        "@type": "Organization",
        "name": "Boldstreet Partners",
        "url": "https://boldstreet.co.ke"
      },
      "offers": {
        "@type": "Offer",
        "url": "https://boldstreet.co.ke/contact?ooh",
        "priceCurrency": "USD",
        "availability": "https://schema.org/InStock"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {"@type": "ListItem", "position": 1, "name": "Home", "item": "https://boldstreet.co.ke/"},
        {"@type": "ListItem", "position": 2, "name": "Products", "item": "https://boldstreet.co.ke/products"},
        {"@type": "ListItem", "position": 3, "name": "Boldstreet OOH", "item": "https://boldstreet.co.ke/products/ooh"}
      ]
    }
  ];

  const useCases = [
    {
      title: "Brand Marketers / CMOs",
      description: "Run targeted, measurable campaigns that drive in-store traffic and offline conversions. Example: launch a weekend promo triggered by high footfall near malls.",
      image: "/images/ooh-hero.webp",
    },
    {
      title: "Media Agencies / DOOH Traders",
      description: "Leverage RTB integration and programmatic workflows to serve clients dynamic campaigns with real-time reporting and verified impression receipts.",
      image: "/images/ooh-publisher-portal.webp",
    },
    {
      title: "Venue Owners / Outdoor Publishers",
      description: "Monetize digital inventory with higher yield through programmatic auctions and premium DCO offerings.",
      image: "/images/ooh-edge-appliance.webp",
    },
    {
      title: "Retail / FMCG Field Teams",
      description: "Localized creative and timing: change creative mid-day when working commuters dominate or during a heavy market day.",
      image: "/images/ooh-dco-example.webp",
    },
  ];

  const techStack = [
    {
      title: "Edge & Cloud Hybrid",
      items: [
        "Edge processing runs gaze detection and anonymization within the screen’s local appliance to minimize latency and preserve privacy.",
        "Anonymized metadata and event tokens stream to our cloud via secure Kafka channels for aggregation, bid evaluation, and reporting.",
      ],
    },
    {
      title: "RTB & SSP Layer",
      items: [
        "Inventory is represented as bidable impressions. SSP requests bids from connected DSP partners.",
        "Bids are evaluated using live audience signals, creative suitability, and floor pricing.",
      ],
    },
    {
      title: "Creative Delivery & DCO",
      items: [
        "Creatives stored in a CDN and served to screens after a winning bid is confirmed.",
        "DCO rules (weather, crowd profile, time of day) select creative variants.",
      ],
    },
    {
      title: "Measurement & Verification",
      items: [
        "Edge-confirmed gaze/dwell events are hashed into a permissioned blockchain.",
        "Advertisers receive signed receipts for each verified impression.",
      ],
    },
    {
      title: "APIs & Integrations",
      items: [
        "RESTful APIs for campaign management, inventory control, and report export.",
        "Prebuilt connectors for popular DSPs and analytics platforms, plus webhook support.",
      ],
    },
  ];

  const metrics = [
    {
      category: "Real-time Dashboard Widgets",
      items: [
        "Active audience (per site)",
        "Watchers vs passersby ratio (viewability %)",
        "Average watch time (seconds) per creative",
        "Demographic mix % (aggregate)",
        "Creative performance leaderboard (impressions → footfall uplift)",
        "Blockchain-verified impression counts (attested receipts)",
      ],
    },
    {
      category: "Reports & Exports",
      items: [
        "Campaign performance (CSV, JSON, PDF)",
        "Impression audit trail for finance & compliance",
        "Heatmaps (time-of-day, day-of-week) for planning buys",
      ],
    },
  ];

  const implementationPhases = [
    {
      phase: "Phase A — Strategy & Site Audit",
      duration: "1–2 weeks",
      description: "Inventory onboarding, site surveys, legal & safety checklist, and pilot KPI definition.",
    },
    {
      phase: "Phase B — Pilot Deployment",
      duration: "4–6 weeks",
      description: "Deploy edge appliances on 3–10 screens, configure RTB endpoints, map creatives and DCO rules, run an initial 2-week pilot with A/B creative testing.",
    },
    {
      phase: "Phase C — Optimization & Ramp",
      duration: "4–12 weeks",
      description: "Iterate creative rules, tune bid floors, integrate payment/settlement flows, and start multi-site programmatic auctions.",
    },
    {
      phase: "Phase D — Scale & SRE",
      duration: "Ongoing",
      description: "Add more inventory, integrate brand measurement tools (POS attribution), and establish SLA-backed monitoring.",
    },
  ];

  const pricingOptions = [
    {
      title: "Starter Pilot",
      price: "$5,000",
      description: "3 sites, 4–6 week pilot, dashboard access, A/B creative testing, basic RTB connectivity.",
    },
    {
      title: "Growth Pilot",
      price: "$12,500",
      description: "Up to 12 screens, DCO rules, API access, co-managed programmatic auctions, weekly performance reviews.",
    },
    {
      title: "Enterprise",
      price: "Custom",
      description: "Full-stack integration (SSP, billing, settlement), SLA, on-site support, and dedicated success manager.",
    },
  ];

  return (
    <div className="bg-background text-textPrimary min-h-screen">
      <Header />
      <main>
        {jsonLd.map((schema, index) => (
          <script
            key={index}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        ))}
        <Hero
          title="Boldstreet OOH — Turn Every Screen into a Measurable Media Channel"
          subhead="Swap guesswork for verified outcomes. Launch programmatic DOOH campaigns with live audience intelligence — schedule a demo."
          primaryCta={{ text: "Request Boldstreet OOH Demo", href: "/contact?ooh" }}
          secondaryCta={{ text: "Download OOH Pilot Proposal", href: "/downloads/ooh-pilot-proposal.pdf" }}
          video="/videos/ooh-demo-loop.mp4"
          image="/images/ooh-hero.webp"
          alt="Programmatic DOOH in Nairobi: digital billboards with live audience analytics"
        />
        <section className="container mx-auto py-8 px-4">
          <h2 className="text-3xl font-instrument-serif mb-4 text-center">Why Boldstreet OOH</h2>
          <AnimatedSection className="text-lg font-figtree mb-4 max-w-3xl mx-auto">
            <p>
              Boldstreet OOH is an enterprise-grade programmatic out-of-home (DOOH) platform that transforms static out-of-home assets into data-driven media inventory. In a market where brands demand digital accountability, our platform supplies the same precision that digital marketers expect — but applied to streets, malls, and transit hubs. We combine real-time computer vision, sensor fusion, dynamic creative optimization (DCO), and RTB-ready auctioning so agencies and advertisers can buy impressions, optimize campaigns in-flight, and prove campaign ROI. All audience signals are anonymized and blockchain-anchored for tamper-proof measurement and third-party auditability.
            </p>
          </AnimatedSection>
        </section>
        <section className="container mx-auto py-8 px-4">
          <h2 className="text-3xl font-instrument-serif mb-4 text-center">Market Opportunity — Why Now</h2>
          <AnimatedSection className="text-lg font-figtree mb-4 max-w-3xl mx-auto">
            <p>
              Global DOOH spend reached ~$16.7B in 2023, and programmatic DOOH is among the fastest-growing channels for outdoor advertising. Nairobi’s OOH market is estimated at ~$35M, and advertisers are shifting spend to measurable, context-aware formats. Brands that adopt programmatic DOOH gain measurable uplifts in footfall and conversions while agencies gain new revenue streams through RTB and dynamic inventory. Boldstreet OOH positions publishers, agencies, and advertisers to capture that growth with tools built for African contexts: local audience models, boda-boda-aware detection, event-aware scheduling, and integration with regional ad exchanges.
            </p>
          </AnimatedSection>
        </section>
        <section className="container mx-auto py-8 px-4">
          <h2 className="text-3xl font-instrument-serif mb-4 text-center">What Boldstreet OOH Does</h2>
          <AnimatedSection className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="p-6 bg-surface rounded-2xl shadow-lg">
              <h3 className="text-xl font-instrument-serif mb-2">Inventory & Supply Management</h3>
              <ul className="list-disc pl-6 font-figtree text-textSecondary">
                <li>Register and manage screens, kiosks, and DOOH panels as supply sources.</li>
                <li>Define site metadata: GPS, orientation, pixel size, brightness, and compliance flags.</li>
                <li>Support for mixed inventory: static digital billboards, interactive kiosks, and programmatic slots.</li>
              </ul>
            </div>
            <div className="p-6 bg-surface rounded-2xl shadow-lg">
              <h3 className="text-xl font-instrument-serif mb-2">Real-time Audience Measurement</h3>
              <ul className="list-disc pl-6 font-figtree text-textSecondary">
                <li>Gaze & dwell detection: Detect looking behavior, head orientation, and estimated attention time.</li>
                <li>Footfall & passerby counts: Measure passerby rate vs. active watchers.</li>
                <li>Demographic inference (age-range, gender-neutral) and environmental triggers.</li>
              </ul>
            </div>
            <div className="p-6 bg-surface rounded-2xl shadow-lg">
              <h3 className="text-xl font-instrument-serif mb-2">Programmatic Ad Exchange</h3>
              <ul className="list-disc pl-6 font-figtree text-textSecondary">
                <li>SSP & DSP connectors: Expose inventory to RTB partners and accept bids.</li>
                <li>Real-time auctions with dynamic targeting rules.</li>
                <li>Frequency & reach controls to avoid overexposure.</li>
              </ul>
            </div>
            <div className="p-6 bg-surface rounded-2xl shadow-lg">
              <h3 className="text-xl font-instrument-serif mb-2">Dynamic Creative Optimization</h3>
              <ul className="list-disc pl-6 font-figtree text-textSecondary">
                <li>Serve creatives based on live context: weather, crowd makeup, or promotions.</li>
                <li>A/B & multi-variant testing with automatic allocation to top performers.</li>
              </ul>
            </div>
            <div className="p-6 bg-surface rounded-2xl shadow-lg">
              <h3 className="text-xl font-oswald mb-2">Measurement & Verification</h3>
              <ul className="list-disc pl-6 font-quattrocento text-textSecondary">
                <li>Blockchain-anchored impressions for auditability.</li>
                <li>End-to-end attribution: tie OOH exposures to footfall or conversions.</li>
                <li>Standard ad metrics: impressions, viewable impressions, watch time, CTR.</li>
              </ul>
            </div>
            <div className="p-6 bg-surface rounded-2xl shadow-lg">
              <h3 className="text-xl font-oswald mb-2">Privacy & Compliance</h3>
              <ul className="list-disc pl-6 font-quattrocento text-textSecondary">
                <li>Edge-first processing ensures raw images stay local.</li>
                <li>No face or identity storage; configurable retention policies.</li>
              </ul>
            </div>
          </AnimatedSection>
        </section>
        <section className="container mx-auto py-8 px-4">
          <h2 className="text-3xl font-oswald mb-4 text-center">Typical Use Cases & Buyer Personas</h2>
          <AnimatedSection className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {useCases.map((useCase, index) => (
              <UseCaseCard key={index} {...useCase} />
            ))}
          </AnimatedSection>
        </section>
        <section className="container mx-auto py-8 px-4">
          <h2 className="text-3xl font-instrument-serif mb-4 text-center">Technology & Architecture</h2>
          <AnimatedSection className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {techStack.map((stack, index) => (
              <TechStackCard key={index} {...stack} />
            ))}
          </AnimatedSection>
        </section>
        <section className="container mx-auto py-8 px-4">
          <h2 className="text-3xl font-instrument-serif mb-4 text-center">Metrics & Dashboards</h2>
          <AnimatedSection className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {metrics.map((metric, index) => (
              <MetricCard key={index} {...metric} />
            ))}
          </AnimatedSection>
        </section>
        <section className="container mx-auto py-8 px-4">
          <h2 className="text-3xl font-instrument-serif mb-4 text-center">Implementation Plan</h2>
          <AnimatedSection className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {implementationPhases.map((phase, index) => (
              <ImplementationPhase key={index} {...phase} />
            ))}
          </AnimatedSection>
        </section>
        <section className="container mx-auto py-8 px-4">
          <h2 className="text-3xl font-instrument-serif mb-4 text-center">Pricing & Pilot Offers</h2>
          <AnimatedSection className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {pricingOptions.map((option, index) => (
              <PricingCard key={index} {...option} />
            ))}
          </AnimatedSection>
          <p className="text-lg font-figtree mt-4 text-center">
            Exact pricing depends on inventory size, hardware needs, and integration complexity. We provide hardware leasing and revenue-share models for publishers.{' '}
            <Link href="/contact?ooh" className="text-teal-400 hover:underline">
              Contact sales
            </Link>{' '}
            for a scoped quote.
          </p>
        </section>
        <section className="container mx-auto py-8 px-4">
          <h2 className="text-3xl font-instrument-serif mb-4 text-center">Example Case Study — Downtown Nairobi Billboard Campaign</h2>
          <CaseSnapshot
            objective="Drive weekend footfall to a retail pop-up and measure offline conversions."
            approach="Deployed Boldstreet OOH on 8 downtown kiosks for 10 days. Creatives dynamically changed based on weather (sunny vs rainy) and crowd gender skew. RTB auctions were open to local DSPs."
            outcome="Verified impressions increased ROI on the campaign by 28% compared to previous static buys; walk-in conversions at the pop-up rose by 22% during high-watch periods. Advertiser received blockchain-anchored receipts for accounting and billing reconciliation."
            image="/images/ooh-hero.webp"
          />
        </section>
        <section className="container mx-auto py-8 px-4">
          <h2 className="text-3xl font-instrument-serif mb-4 text-center">Privacy, Compliance & Ethics</h2>
          <AnimatedSection className="text-lg font-figtree mb-4 max-w-3xl mx-auto">
            <p>
              We design for privacy and fairness: anonymization at the source ensures faces are blurred and identifiers are never stored. Opt-out flows and signage are implemented per local regulations and venue policies. Retention & audit policies are configurable for advertisers, publishers, and regulators. Bias mitigation: models are trained and continuously evaluated on regionally diverse datasets to reduce systemic bias in age/gender inference.
            </p>
          </AnimatedSection>
        </section>
        <section className="container mx-auto py-8 px-4">
          <h2 className="text-3xl font-instrument-serif mb-4 text-center">Competitive Advantages</h2>
          <AnimatedSection className="list-disc pl-6 max-w-2xl mx-auto text-lg font-figtree mb-8">
            <ul>
              <li>Localized models trained on East African datasets (higher accuracy for region-specific clothing, vehicle types, and signage).</li>
              <li>End-to-end verification with blockchain anchoring — rare in regional DOOH offerings.</li>
              <li>Full-stack solution: from hardware appliances to SSP, DCO, and compliance workflows.</li>
              <li>Inter-engine synergies: use LOOK analytics to inform DOOH audience segments, or ONFIX traffic data to plan ad timing and placement.</li>
            </ul>
          </AnimatedSection>
        </section>
        <section className="container mx-auto py-8 px-4">
          <h2 className="text-3xl font-oswald mb-4 text-center">FAQs</h2>
          <AnimatedSection className="max-w-3xl mx-auto">
            <div className="mb-4">
              <h3 className="text-xl font-oswald">Can we target by age or gender?</h3>
              <p className="font-quattrocento text-textSecondary">
                We provide aggregated, anonymized demographic segments (age-range, non-specific gender indicators) for campaign targeting and reporting. No PII is collected.
              </p>
            </div>
            <div className="mb-4">
              <h3 className="text-xl font-oswald">How fast can a campaign run after setup?</h3>
              <p className="font-quattrocento text-textSecondary">
                A pilot can begin within 2–6 weeks depending on hardware and RTB integrations. Full programmatic auctions require SSP/DSP connectors and can take 4–8 weeks for enterprise setups.
              </p>
            </div>
            <div className="mb-4">
              <h3 className="text-xl font-oswald">How are impressions verified?</h3>
              <p className="font-quattrocento text-textSecondary">
                Impressions are verified via edge-confirmed gaze/dwell events and recorded with a cryptographic hash on our permissioned blockchain. Advertisers receive signed receipts for each attested impression.
              </p>
            </div>
            <div className="mb-4">
              <h3 className="text-xl font-oswald">Can Boldstreet manage creative serving?</h3>
              <p className="font-quattrocento text-textSecondary">
                Yes — we offer creative hosting and DCO rules, or you can continue using your ad-serving partners.
              </p>
            </div>
          </AnimatedSection>
        </section>
        <section className="container mx-auto py-8 px-4 text-center">
          <h2 className="text-3xl font-oswald mb-4">Next Steps</h2>
          <AnimatedSection className="text-lg font-quattrocento mb-4 max-w-3xl mx-auto">
            <p>
              Ready to move from impressions to outcomes? Book a technical demo to see live RTB auctions, gaze verification, and blockchain-anchored receipts. Pilots start within weeks.
            </p>
          </AnimatedSection>
          <div className="space-x-4">
            <Link
              href="/contact?ooh"
              className="bg-gradient-to-r from-blue-600 to-teal-400 text-white py-3 px-6 rounded-2xl font-quattrocento"
            >
              Boldstreet Partners OOH Measurability & pDOOH
            </Link>
            <DownloadLink
              href="/downloads/Boldstreet Partners OOH Measurability & pDOOH.pdf"
              text="Boldstreet Partners OOH Measurability & pDOOH"
            />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}