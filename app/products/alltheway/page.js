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
  title: "ALLTHEWAY — Logistics Engine | AI & Blockchain Supply Chain Optimization Kenya",
  description: "ALLTHEWAY by Boldstreet: end-to-end logistics visibility and last-mile optimization using AI, GPS/RFID telemetry, and blockchain-backed provenance. Reduce costs, improve ETAs, and secure supply chains across Kenya.",
  alternates: {
    canonical: "https://boldstreet.co.ke/products/alltheway",
  },
  openGraph: {
    title: "ALLTHEWAY — Logistics Engine | AI & Blockchain Supply Chain Optimization Kenya",
    description: "ALLTHEWAY by Boldstreet: end-to-end logistics visibility and last-mile optimization using AI, GPS/RFID telemetry, and blockchain-backed provenance. Reduce costs, improve ETAs, and secure supply chains across Kenya.",
    images: ["/images/alltheway-delivery-van.webp"],
    url: "https://boldstreet.co.ke/products/alltheway",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ALLTHEWAY — Logistics Engine | AI & Blockchain Supply Chain Optimization Kenya",
    description: "ALLTHEWAY by Boldstreet: end-to-end logistics visibility and last-mile optimization using AI, GPS/RFID telemetry, and blockchain-backed provenance. Reduce costs, improve ETAs, and secure supply chains across Kenya.",
    images: ["/images/alltheway-delivery-van.webp"],
  },
};

export default function AllthewayPage() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Product",
      "name": "ALLTHEWAY — Logistics Engine",
      "description": "ALLTHEWAY: AI-driven logistics optimization with GPS/RFID telemetry, route optimization, ETA forecasting, and blockchain-backed provenance. Built for Kenya & East Africa.",
      "brand": {
        "@type": "Organization",
        "name": "Boldstreet Partners",
        "url": "https://boldstreet.co.ke"
      },
      "sku": "ALLTHEWAY-001",
      "offers": {
        "@type": "Offer",
        "url": "https://boldstreet.co.ke/contact?alltheway",
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
        {"@type": "ListItem", "position": 3, "name": "ALLTHEWAY", "item": "https://boldstreet.co.ke/products/alltheway"}
      ]
    }
  ];

  const useCases = [
    {
      title: "Last-mile Delivery / E-commerce",
      description: "Optimize driver routes, predict ETAs, and offer precise SMS/WhatsApp ETAs to reduce failed deliveries.",
      image: "/images/alltheway-driver-app.webp",
    },
    {
      title: "Cold Chain & Pharmaceuticals",
      description: "Monitor temperature telemetry, ensure chain-of-custody with blockchain receipts, and avoid spoilage with excursion alerts.",
      image: "/images/alltheway-cold-chain.webp",
    },
    {
      title: "FMCG Distribution",
      description: "Optimize multi-stop routes, balance load factors, and tie POS uplift to delivery windows.",
      image: "/images/alltheway-route-optimizer.webp",
    },
    {
      title: "Freight & Fleet Operations",
      description: "Detect unauthorized route deviations, improve asset utilization, and automate billing with verified logs.",
      image: "/images/alltheway-fleet-dashboard.webp",
    },
    {
      title: "B2B Procurement & Compliance",
      description: "Immutable handoff proofs ensure suppliers meet SLAs and fast-track dispute resolution.",
      image: "/images/alltheway-blockchain-receipt.webp",
    },
  ];

  const techStack = [
    {
      title: "Telemetry & Edge Devices",
      items: [
        "GPS trackers (LTE/2G), RFID tags, Bluetooth beacons, temperature/humidity sensors.",
        "Edge gateways validate movement, detect tampering, and encrypt events before cloud sync.",
      ],
    },
    {
      title: "Event Streaming & Processing",
      items: [
        "Kafka pipelines normalize high-velocity telemetry to canonical schemas (location, asset_id, status).",
        "Stream processors handle geofence events, route deviations, and dwell alarms.",
      ],
    },
    {
      title: "AI & Forecasting",
      items: [
        "ETA models combine historical traces, ONFIX traffic feeds, driver behavior, and weather for precise predictions.",
        "Predictive analytics identify delays and recommend re-dispatch or consolidation.",
      ],
    },
    {
      title: "Blockchain Provenance",
      items: [
        "Permissioned ledger records handoffs (pickup, hub, delivery) with cryptographic signatures.",
        "Auditable receipts support disputes, warranty claims, and regulatory compliance.",
      ],
    },
    {
      title: "Optimization & Integrations",
      items: [
        "Real-time route optimizer minimizes distance while respecting SLAs.",
        "REST APIs, webhooks, and connectors for TMS, ERP, and customer notifications (SMS/WhatsApp).",
      ],
    },
  ];

  const metrics = [
    {
      category: "Operational KPIs",
      items: [
        "On-time Delivery % (by SLA window)",
        "ETA Accuracy (mean absolute error in minutes)",
        "Average Dwell Time (per hub / last-mile stop)",
        "Route Efficiency (actual km vs optimal km)",
        "Utilization (% of loaded capacity used)",
      ],
    },
    {
      category: "Risk & Integrity KPIs",
      items: [
        "Tamper Events / 1,000 shipments",
        "Temperature Excursion Minutes (for cold chain)",
        "Unauthorized Route Deviations (events flagged)",
      ],
    },
    {
      category: "Business KPIs",
      items: [
        "Cost per Delivery (fuel + labor normalized)",
        "First Attempt Delivery %",
        "Claim / Dispute Rate (per 10k deliveries)",
      ],
    },
  ];

  const implementationPhases = [
    {
      phase: "Needs Assessment",
      duration: "1 week",
      description: "Map routes, define SLA windows, spot hardware/time-to-install constraints. Deliverable: scoped pilot plan and ROI projection.",
    },
    {
      phase: "Pilot",
      duration: "4–8 weeks",
      description: "Equip 10–50 shipments/drivers with trackers and sensors. Integrate one TMS or POS for attribution. Validate ETA models and blockchain receipts.",
    },
    {
      phase: "Optimization",
      duration: "6–12 weeks",
      description: "Roll optimizer for fleet, deploy dynamic ETAs to customers, implement exception workflows and billing reconciliation automation.",
    },
    {
      phase: "Scale & Operate",
      duration: "Ongoing",
      description: "Fleet-wide rollout, SLA reporting, advanced forecasting, and optional managed operations.",
    },
  ];

  const pricingOptions = [
    {
      title: "Starter Pilot",
      price: "$6,000",
      description: "Up to 50 shipments, basic GPS trackers, 6-week pilot, dashboard & ETA validation, one system integration.",
    },
    {
      title: "Operational Pilot",
      price: "$18,000",
      description: "Up to 250 shipments, temperature sensors (optional), route optimizer, blockchain receipts, driver app.",
    },
    {
      title: "Enterprise / Fleet",
      price: "Custom",
      description: "Fleet-wide pricing, SLA, on-site integration, managed operations and analytics consultancy.",
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
          title="ALLTHEWAY — End-to-End Logistics & Last-Mile Optimization"
          subhead="See every package, predict every delay, prove every handoff. Book an ALLTHEWAY demo."
          primaryCta={{ text: "Request ALLTHEWAY Demo", href: "/contact?alltheway" }}
          secondaryCta={{ text: "Download ALLTHEWAY Pilot Brief", href: "/downloads/alltheway-pilot-brief.pdf" }}
          video="/videos/alltheway-demo-loop.mp4"
          image="/images/alltheway-delivery-van.webp"
          alt="Delivery van on Nairobi street with live GPS tracking overlay"
        />
        <section className="container mx-auto py-8 px-4">
          <h2 className="text-3xl font-instrument-serif mb-4 text-center">What ALLTHEWAY Delivers</h2>
          <AnimatedSection className="text-lg font-figtree mb-4 max-w-3xl mx-auto">
            <p>
              ALLTHEWAY is Boldstreet’s logistics intelligence engine that fuses AI forecasting, high-fidelity telemetry (GPS, RFID, IoT), and a permissioned blockchain ledger to deliver real-time visibility, route optimization, and immutable provenance for supply chains in Kenya and Africa. Designed for FMCG, cold-chain, e-commerce, couriers, and enterprise fleets, ALLTHEWAY converts fragmented vehicle and package signals into operational decisions that cut delivery costs, reduce idle time, and prevent losses.
            </p>
          </AnimatedSection>
        </section>
        <section className="container mx-auto py-8 px-4">
          <h2 className="text-3xl font-instrument-serif mb-4 text-center">Business Outcomes</h2>
          <AnimatedSection className="text-lg font-figtree mb-4 max-w-3xl mx-auto">
            <p>
              Transport inefficiencies, lack of visibility, and weak proof-of-delivery inflate costs and erode trust. ALLTHEWAY improves on-time delivery rates (12–25% uplift), reduces route miles and fuel usage (10–18% savings), lowers dwell times (up to 35%), proves provenance with blockchain receipts, and shrinks fraud with tamper detection and immutable records.
            </p>
          </AnimatedSection>
          <ul className="list-disc pl-6 max-w-2xl mx-auto text-lg font-figtree mb-8">
            <li>Improve on-time delivery rates — typical pilot uplift: +12–25%.</li>
            <li>Reduce route miles and fuel usage — 10–18% savings via dynamic routing.</li>
            <li>Lower dwell times at hubs/terminals — up to 35% reduction.</li>
            <li>Prove provenance and condition — blockchain receipts for every handoff.</li>
            <li>Shrink shrinkage/fraud — tamper detection and immutable records.</li>
          </ul>
        </section>
        <section className="container mx-auto py-8 px-4">
          <h2 className="text-3xl font-instrument-serif mb-4 text-center">Typical Use Cases</h2>
          <AnimatedSection className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {useCases.map((useCase, index) => (
              <UseCaseCard key={index} {...useCase} />
            ))}
          </AnimatedSection>
        </section>
        <section className="container mx-auto py-8 px-4">
          <h2 className="text-3xl font-instrument-serif mb-4 text-center">How ALLTHEWAY Works</h2>
          <AnimatedSection className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {techStack.map((stack, index) => (
              <TechStackCard key={index} {...stack} />
            ))}
          </AnimatedSection>
        </section>
        <section className="container mx-auto py-8 px-4">
          <h2 className="text-3xl font-instrument-serif mb-4 text-center">Metrics & KPIs</h2>
          <AnimatedSection className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
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
          <p className="text-lg font-figtree mt-4 text-center">
            Deliverables include: device inventory list, integration docs, dashboard access, training, and quarterly impact reports.
          </p>
        </section>
        <section className="container mx-auto py-8 px-4">
          <h2 className="text-3xl font-instrument-serif mb-4 text-center">Pricing & Pilot Offers</h2>
          <AnimatedSection className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {pricingOptions.map((option, index) => (
              <PricingCard key={index} {...option} />
            ))}
          </AnimatedSection>
          <p className="text-lg font-figtree mt-4 text-center">
            Hardware leasing, capex financing, and revenue-share models available to lower initial barriers.{' '}
            <Link href="/contact?alltheway" className="text-teal-400 hover:underline">
              Contact sales
            </Link>{' '}
            for a scoped quote.
          </p>
        </section>
        <section className="container mx-auto py-8 px-4">
          <h2 className="text-3xl font-instrument-serif mb-4 text-center">Case Snapshot — Nairobi E-commerce Carrier</h2>
          <CaseSnapshot
            objective="Reduce late deliveries and claims for a fast-growing e-commerce carrier in Nairobi’s densest routes."
            approach="Piloted on 120 weekly deliveries with GPS trackers and driver app. Integrated POS confirmations and blockchain receipts for high-value consignments. Tuned ETA models with ONFIX traffic feeds."
            outcome="First-attempt delivery rate rose from 68% to 83%; ETA error reduced from 22 minutes to 8 minutes. Tamper disputes fell 72%. NPS improved; claim settlement time dropped 60%."
            image="/images/alltheway-case-infographic.webp"
          />
        </section>
        <section className="container mx-auto py-8 px-4">
          <h2 className="text-3xl font-instrument-serif mb-4 text-center">Cross-product Synergies</h2>
          <AnimatedSection className="text-lg font-figtree mb-4 max-w-3xl mx-auto">
            <p>
              ALLTHEWAY amplifies the Boldstreet suite: ONFIX supplies traffic forecasts for ETAs and routing, LOOK informs pickup windows at retail, Boldstreet OOH schedules ads around delivery peaks, and RAVEN provides security alerts for high-value shipments in monitored zones.
            </p>
          </AnimatedSection>
        </section>
        <section className="container mx-auto py-8 px-4">
          <h2 className="text-3xl font-instrument-serif mb-4 text-center">Privacy, Compliance & Security</h2>
          <AnimatedSection className="text-lg font-figtree mb-4 max-w-3xl mx-auto">
            <p>
              ALLTHEWAY uses data minimization with configurable retention, permissioned blockchain access, end-to-end encryption with device mutual auth, and supports customs and cold-chain compliance with audit-ready reporting.
            </p>
          </AnimatedSection>
        </section>
        <section className="container mx-auto py-8 px-4">
          <h2 className="text-3xl font-instrument-serif mb-4 text-center">FAQs</h2>
          <AnimatedSection className="max-w-3xl mx-auto">
            <div className="mb-4">
              <h3 className="text-xl font-instrument-serif">How does blockchain help my logistics operation?</h3>
              <p className="font-figtree text-textSecondary">
                Blockchain provides immutable, time-stamped receipts for every handoff — speeding dispute resolution, reducing fraud, and enabling trusted audits for regulated goods.
              </p>
            </div>
            <div className="mb-4">
              <h3 className="text-xl font-instrument-serif">What connectivity is required for trackers?</h3>
              <p className="font-figtree text-textSecondary">
                Trackers support LTE with 2G fallback and short-term offline buffering. Edge gateways can batch upload when connectivity resumes.
              </p>
            </div>
            <div className="mb-4">
              <h3 className="text-xl font-instrument-serif">Can ALLTHEWAY integrate with our ERP/TMS?</h3>
              <p className="font-figtree text-textSecondary">
                Yes — we provide REST APIs, webhooks, and prebuilt connectors for common TMS/ERP systems.
              </p>
            </div>
            <div className="mb-4">
              <h3 className="text-xl font-instrument-serif">Does ALLTHEWAY support cold-chain monitoring?</h3>
              <p className="font-figtree text-textSecondary">
                Yes — temperature/humidity sensors with configurable thresholds, excursion alerts, and immutable temperature logs for compliance.
              </p>
            </div>
          </AnimatedSection>
        </section>
        <section className="container mx-auto py-8 px-4 text-center">
          <h2 className="text-3xl font-instrument-serif mb-4">Next Steps</h2>
          <AnimatedSection className="text-lg font-figtree mb-4 max-w-3xl mx-auto">
            <p>
              See ALLTHEWAY in action: live ETA predictions, route optimization, blockchain proofs, and delivery timeline UI. Schedule a demo and we’ll scope a pilot tailored to your routes.
            </p>
          </AnimatedSection>
          <div className="space-x-4">
            <Link
              href="/contact?alltheway"
              className="bg-gradient-to-r from-blue-600 to-teal-400 text-white py-3 px-6 rounded-2xl font-quattrocento"
            >
              Request ALLTHEWAY Demo
            </Link>
            <DownloadLink
              href="/downloads/alltheway-pilot-brief.pdf"
              text="Download ALLTHEWAY Pilot Brief"
            />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}