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

export const metadata = {
  title: "RAVEN — AI Surveillance Engine | Advanced Security & Public Safety in Kenya",
  description: "RAVEN by Boldstreet: multi-modal AI surveillance for malls, airports, campuses and cities. Detects 1,450+ anomalies with 95%+ accuracy, real-time alerts and blockchain-verified evidence. Schedule a demo.",
  alternates: {
    canonical: "https://boldstreet.co.ke/products/raven",
  },
  openGraph: {
    title: "RAVEN — AI Surveillance Engine | Advanced Security & Public Safety in Kenya",
    description: "RAVEN by Boldstreet: multi-modal AI surveillance for malls, airports, campuses and cities. Detects 1,450+ anomalies with 95%+ accuracy, real-time alerts and blockchain-verified evidence. Schedule a demo.",
    images: ["/images/raven-control-room.webp"],
    url: "https://boldstreet.co.ke/products/raven",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "RAVEN — AI Surveillance Engine | Advanced Security & Public Safety in Kenya",
    description: "RAVEN by Boldstreet: multi-modal AI surveillance for malls, airports, campuses and cities. Detects 1,450+ anomalies with 95%+ accuracy, real-time alerts and blockchain-verified evidence. Schedule a demo.",
    images: ["/images/raven-control-room.webp"],
  },
};

export default function RavenPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "RAVEN — Boldstreet Surveillance Engine",
    "description": "RAVEN: multi-modal AI surveillance for malls, airports, and cities in Kenya. 1,450+ anomaly detections, edge-first inference, blockchain-anchored evidence.",
    "brand": {
      "@type": "Organization",
      "name": "Boldstreet Partners",
      "url": "https://boldstreet.co.ke"
    },
    "isSimilarTo": [
      {"@type": "Product", "name": "ONFIX Smart Cities Engine"},
      {"@type": "Product", "name": "Boldstreet OOH"}
    ],
    "sku": "RAVEN-001",
    "offers": {
      "@type": "Offer",
      "priceCurrency": "USD",
      "price": "5000.00",
      "availability": "https://schema.org/InStock",
      "url": "https://boldstreet.co.ke/contact?raven"
    }
  };

  const useCases = [
    {
      title: "Retail & Shopping Malls",
      description: "Detect abnormal crowd formation, unattended baggage, aggressive behavior, and access breaches to high-security back areas. Alerts mall control rooms before incidents escalate and correlates CCTV clips with incident metadata.",
      image: "/images/raven-control-room.webp",
    },
    {
      title: "Airports & Transport Hubs",
      description: "Identify erratic passenger flows, queue surges, slip-and-fall events, and unauthorized tarmac access. Thermal and audio sensors flag sudden heat signatures or loud disturbances.",
      image: "/images/raven-control-screenshot.webp",
    },
    {
      title: "Critical Infrastructure & Utilities",
      description: "Monitor perimeters for tampering, garbage fires, and unauthorized vehicle approaches. Blockchain-locked evidence reduces audit friction for operators and insurers.",
      image: "/images/raven-edge-device.webp",
    },
    {
      title: "Municipal Security / Events",
      description: "Live crowd monitoring during public events, automatic crowd-density alerts, and predictive forecasts to reposition patrols and emergency services.",
      image: "/images/raven-evidence-timeline.webp",
    },
    {
      title: "Corporate Campuses & Warehouses",
      description: "Detect tailgating at secure doors, unsafe lifting/handling, and hazardous chemical spills via integrated environmental sensors.",
      image: "/images/raven-sensor-fusion.webp",
    },
  ];

  const techStack = [
    {
      title: "Edge Vision (YOLO-tuned models)",
      items: [
        "Custom YOLO training sets tuned to local clothing, vehicle types (including boda-bodas), and signage common in Kenya and East Africa.",
        "Model suites include human pose estimation, face-blur for privacy, gaze approximation, and object detection (bags, weapons, fire sources).",
        "Edge inference keeps raw video on-premise; only anonymized metadata and flagged clips are transmitted.",
      ],
    },
    {
      title: "Multi-Modal Fusion",
      items: [
        "Audio analytics for gunshot, explosion, glass-break, and aggressive shouting signatures.",
        "Thermal cameras for low-light or obscured detection (smoke, heat from vehicles or fires).",
        "Environmental sensors (CO2, gas, temperature) for hazardous-event correlation.",
      ],
    },
    {
      title: "Streaming & Processing",
      items: [
        "Kafka-based streaming ingestion with micro-batch and real-time pipelines.",
        "Distributed microservices for rule-based correlation, anomaly scoring, and risk prioritization.",
      ],
    },
    {
      title: "Evidence Integrity",
      items: [
        "Each verified alert includes a hashed evidence bundle recorded on a permissioned blockchain.",
        "Ensures tamper-proof audit trails for regulators, insurers, or law enforcement.",
      ],
    },
    {
      title: "Interoperability",
      items: [
        "Open REST APIs, ONVIF support for cameras, and connectors for PSIM and existing NVR systems.",
        "Webhooks, SMS, email, and secure control-room integrations for alert routing.",
      ],
    },
  ];

  const metrics = [
    {
      category: "Human-behavior anomalies",
      items: ["Loitering > threshold time", "Aggressive gestures / fighting", "Sudden directional surges (crowd panic)", "Tailgating at access points"],
    },
    {
      category: "Object & item anomalies",
      items: ["Unattended baggage (left-object detection)", "Weapon detection (shapes and silhouettes)", "Hazardous object (smoke, fire-carrying materials)"],
    },
    {
      category: "Vehicle & perimeter anomalies",
      items: ["Abandoned vehicle detection", "Wrong-way / counterflow", "Illegal parking in restricted zones"],
    },
    {
      category: "Environmental & event",
      items: ["Fire/heat spikes, gas leaks (via sensor fusion)", "Glass-break audio signature", "Crowd density and dwell heatmaps (people/m²)"],
    },
    {
      category: "Performance / accuracy metrics",
      items: ["Model precision / recall dashboards (95%+ on validated datasets)", "False positive rate reduction via multi-sensor correlation", "Mean Time To Detect (MTTD) & Mean Time To Respond (MTTR) reporting"],
    },
  ];

  const implementationPhases = [
    {
      phase: "Phase 0 — Risk & Systems Assessment",
      duration: "1–2 weeks",
      description: "Asset discovery, camera audit, comms review, risk scoring, and SLA alignment. Deliverable: Implementation blueprint + ROI projection.",
    },
    {
      phase: "Phase 1 — Pilot Deployment",
      duration: "4–8 weeks",
      description: "Edge boxes & camera configuration for 3–10 sites, integrate 1–2 sensor types, dashboard access, and on-site training.",
    },
    {
      phase: "Phase 2 — Scale & Harden",
      duration: "4–12 weeks",
      description: "Full rollout, integration with PSIM/NOC, multi-site orchestration, dedicated incident rules and playbooks.",
    },
    {
      phase: "Phase 3 — Operate & Optimize",
      duration: "Ongoing",
      description: "24/7 support, model retraining with site-specific data, monthly tuning for new event types and seasonal patterns.",
    },
  ];

  return (
    <div className="bg-background text-textPrimary min-h-screen">
      <Header />
      <main>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <Hero
          title="RAVEN — The Surveillance Engine for Safer Cities & Critical Sites"
          subhead="Protect people, secure assets, reduce response times — request a live demo of RAVEN today."
          primaryCta={{ text: "Request RAVEN Demo", href: "/contact?raven" }}
          secondaryCta={{ text: "Explore All Products", href: "/products" }}
          video="/videos/raven-demo-loop.mp4"
          image="/images/raven-control-room.webp"
          alt="RAVEN AI surveillance dashboard monitoring crowd density at Nairobi mall"
        />
        <section className="container mx-auto py-8 px-4">
          <h2 className="text-3xl font-instrument-serif mb-4 text-center">What RAVEN Does</h2>
          <AnimatedSection className="text-lg font-figtree mb-4 max-w-3xl mx-auto">
            <p>
              RAVEN is Boldstreet’s enterprise surveillance engine built for African cities and mission-critical sites. Using edge-optimized computer vision, audio analysis, thermal imaging, and sensor fusion, RAVEN detects and classifies 1,450+ anomaly types spanning human behavior, objects, vehicles, events, and environmental hazards. Designed for malls, airports, transport hubs, commercial campuses, and municipal control rooms, RAVEN turns scattered signals into verified, actionable intelligence — with evidence hashed on a blockchain ledger for auditability and legal defensibility.
            </p>
          </AnimatedSection>
          <ul className="list-disc pl-6 max-w-2xl mx-auto text-lg font-figtree mb-8">
            <li>Reduce average incident detection-to-response time by 60% (pilot estimate).</li>
            <li>Cut false positives by prioritizing corroborated multi-sensor evidence.</li>
            <li>Maintain chain-of-evidence using blockchain anchoring for every alert.</li>
            <li>Integrate with existing CCTV, PSIMs, and emergency response workflows.</li>
          </ul>
        </section>
        <section className="container mx-auto py-8 px-4">
          <h2 className="text-3xl font-instrument-serif mb-4 text-center">Use Cases — Where RAVEN Makes a Difference</h2>
          <AnimatedSection className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {useCases.map((useCase, index) => (
              <UseCaseCard key={index} {...useCase} />
            ))}
          </AnimatedSection>
        </section>
        <section className="container mx-auto py-8 px-4">
          <h2 className="text-3xl font-instrument-serif mb-4 text-center">Technology Stack — How RAVEN Sees & Decides</h2>
          <AnimatedSection className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {techStack.map((stack, index) => (
              <TechStackCard key={index} {...stack} />
            ))}
          </AnimatedSection>
        </section>
        <section className="container mx-auto py-8 px-4">
          <h2 className="text-3xl font-instrument-serif mb-4 text-center">Detection Coverage & Metrics</h2>
          <AnimatedSection className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {metrics.map((metric, index) => (
              <MetricCard key={index} {...metric} />
            ))}
          </AnimatedSection>
        </section>
        <section className="container mx-auto py-8 px-4">
          <h2 className="text-3xl font-instrument-serif mb-4 text-center">How RAVEN Fits Your Operations</h2>
          <AnimatedSection className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {implementationPhases.map((phase, index) => (
              <ImplementationPhase key={index} {...phase} />
            ))}
          </AnimatedSection>
          <p className="text-lg font-figtree mt-4 max-w-3xl mx-auto">
            Turnkey services available: hardware procurement, installation, site surveys, training, and runbooks for security teams. We also offer managed SOC services for customers who want a fully outsourced monitoring option.
          </p>
        </section>
        <section className="container mx-auto py-8 px-4">
          <h2 className="text-3xl font-instrument-serif mb-4 text-center">Privacy, Compliance & Security</h2>
          <AnimatedSection className="text-lg font-figtree mb-4 max-w-3xl mx-auto">
            <p>
              RAVEN is built with privacy-by-design: on-edge anonymization (faces and PII blurred unless lawfully overridden), data minimization (only metadata and short clip extracts stored), GDPR and local compliance (configurable retention policies and access logs), and secure infrastructure (TLS, AES-256, role-based access control). Blockchain-anchored evidence ensures immutable audit trails, reducing legal risk and strengthening law enforcement relationships.
            </p>
          </AnimatedSection>
        </section>
        <section className="container mx-auto py-8 px-4">
          <h2 className="text-3xl font-instrument-serif mb-4 text-center">Competitive Differentiation</h2>
          <AnimatedSection className="list-disc pl-6 max-w-2xl mx-auto text-lg font-figtree mb-8">
            <ul>
              <li>Localization & Context: Models trained on African datasets for higher real-world accuracy.</li>
              <li>Sensor Fusion for Confidence: Audio, thermal, and environmental sensors reduce false positives.</li>
              <li>Evidence Chain: Blockchain hashing for audit-grade integrity not offered by standard VMS/NVR vendors.</li>
              <li>Platform Unification: Interoperates with Boldstreet engines for city planning or dynamic ad bidding.</li>
              <li>Pilot-to-Scale Path: Designed for small pilots that scale to city-wide deployments.</li>
            </ul>
          </AnimatedSection>
        </section>
        <section className="container mx-auto py-8 px-4">
          <h2 className="text-3xl font-instrument-serif mb-4 text-center">Pricing & Pilots</h2>
          <AnimatedSection className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-6 bg-surface rounded-2xl shadow-lg">
              <h3 className="text-xl font-instrument-serif mb-2">Pilot — Secure Start</h3>
              <p className="font-figtree text-textSecondary mb-4">3 sites, 6-week pilot, dashboard access, 24/7 alerting, training. Price: $5,000 – includes hardware leasing options.</p>
            </div>
            <div className="p-6 bg-surface rounded-2xl shadow-lg">
              <h3 className="text-xl font-instrument-serif mb-2">Scale — Enterprise</h3>
              <p className="font-figtree text-textSecondary mb-4">Multi-site, API integrations, managed SOC. Pricing: custom, SLA-backed.</p>
            </div>
          </AnimatedSection>
          <p className="text-lg font-figtree mt-4 text-center">Exact pricing depends on site complexity, number of cameras, sensor types, and integration needs. <Link href="/contact?raven" className="text-teal-400 hover:underline">Contact sales</Link> for a scoped quote.</p>
        </section>
        <section className="container mx-auto py-8 px-4">
          <h2 className="text-3xl font-instrument-serif mb-4 text-center">Case Snapshot — Two Rivers Mall</h2>
          <CaseSnapshot
            objective="Reduce security blind spots, test unattended-baggage & crowd detection."
            approach="Deployed RAVEN across 6 camera zones, integrated audio sensors, and configured playbooks with mall control."
            outcome="RAVEN detected simulated unattended items and crowd surges in under 45 seconds; patrol response time reduced by 54%. Mall management reported fewer false alerts and faster incident resolution. Full evidence bundles were blockchain-hashed for audit and insurance purposes."
            image="/images/raven-control-room.webp"
          />
        </section>
        <section className="container mx-auto py-8 px-4">
          <h2 className="text-3xl font-instrument-serif mb-4 text-center">FAQs</h2>
          <AnimatedSection className="max-w-3xl mx-auto">
            <div className="mb-4">
              <h3 className="text-xl font-instrument-serif">Does RAVEN store raw video?</h3>
              <p className="font-figtree text-textSecondary">Raw video stays local by default; only anonymized metadata and short corroborating clips for incidents are stored per retention policy.</p>
            </div>
            <div className="mb-4">
              <h3 className="text-xl font-instrument-serif">Can RAVEN integrate with my existing NVR/PSIM?</h3>
              <p className="font-figtree text-textSecondary">Yes — ONVIF, RTSP, and REST APIs supported. We provide connectors and integration services.</p>
            </div>
            <div className="mb-4">
              <h3 className="text-xl font-instrument-serif">What happens when RAVEN flags an alert?</h3>
              <p className="font-figtree text-textSecondary">Alerts are pushed to configured channels (control-room UI, SMS, webhook), include a confidence score, and an evidence bundle locked to the blockchain for audit.</p>
            </div>
          </AnimatedSection>
        </section>
        <section className="container mx-auto py-8 px-4 text-center">
          <h2 className="text-3xl font-instrument-serif mb-4">Next Steps — Book a Live Demo</h2>
          <AnimatedSection className="text-lg font-figtree mb-4 max-w-3xl mx-auto">
            <p>
              RAVEN is ready for pilots across Nairobi and East Africa. Schedule a demonstration to see live detection, end-to-end evidence capture, and how RAVEN integrates with your teams.
            </p>
          </AnimatedSection>
          <Link
            href="/contact?raven"
            className="bg-gradient-to-r from-blue-600 to-teal-400 text-white py-3 px-6 rounded-2xl font-figtree"
          >
            Request RAVEN Demo
          </Link>
        </section>
      </main>
      <Footer />
    </div>
  );
}