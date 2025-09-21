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
  title: "ONFIX — Smart Cities Engine | Urban Analytics & Traffic Intelligence Kenya",
  description: "ONFIX by Boldstreet: city-grade urban analytics for Nairobi and Africa. Real-time traffic, pedestrian flow, environmental monitoring, predictive congestion modeling and APIs for municipal operations.",
  alternates: {
    canonical: "https://boldstreet.co.ke/products/onfix",
  },
  openGraph: {
    title: "ONFIX — Smart Cities Engine | Urban Analytics & Traffic Intelligence Kenya",
    description: "ONFIX by Boldstreet: city-grade urban analytics for Nairobi and Africa. Real-time traffic, pedestrian flow, environmental monitoring, predictive congestion modeling and APIs for municipal operations.",
    images: ["/images/onfix-control-room.webp"],
    url: "https://boldstreet.co.ke/products/onfix",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ONFIX — Smart Cities Engine | Urban Analytics & Traffic Intelligence Kenya",
    description: "ONFIX by Boldstreet: city-grade urban analytics for Nairobi and Africa. Real-time traffic, pedestrian flow, environmental monitoring, predictive congestion modeling and APIs for municipal operations.",
    images: ["/images/onfix-control-room.webp"],
  },
};

export default function OnfixPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "ONFIX — Smart Cities Engine",
    "description": "ONFIX: city-grade urban analytics for traffic, pedestrian flow, environmental monitoring, and predictive congestion modelling. Built for Nairobi and African cities.",
    "brand": {
      "@type": "Organization",
      "name": "Boldstreet Partners",
      "url": "https://boldstreet.co.ke"
    },
    "sku": "ONFIX-001",
    "offers": {
      "@type": "Offer",
      "url": "https://boldstreet.co.ke/contact?onfix",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock"
    }
  };

  const useCases = [
    {
      title: "Traffic Management",
      description: "Reduce congestion with real-time rerouting and predictive congestion modeling for municipal traffic operations.",
      image: "/images/onfix-control-room.webp",
    },
    {
      title: "Emergency Response",
      description: "Speed up incident response with automated alerts and playbook-driven dispatch recommendations.",
      image: "/images/onfix-playbook-panel.webp",
    },
    {
      title: "Environmental Monitoring",
      description: "Track NO₂, PM2.5, and CO₂ levels to inform congestion pricing and rerouting for better air quality.",
      image: "/images/onfix-environmental-sensor.webp",
    },
    {
      title: "Urban Planning",
      description: "Use long-term heatmaps and OD matrices to prioritize infrastructure investments like bike lanes or transit hubs.",
      image: "/images/onfix-planning-heatmap.webp",
    },
    {
      title: "Public Transparency",
      description: "Provide commuters with ETA widgets and congestion heatmaps via citizen-facing APIs and apps.",
      image: "/images/onfix-commuter-widget.webp",
    },
  ];

  const techStack = [
    {
      title: "Edge + Cloud Hybrid",
      items: [
        "Edge nodes process high-throughput camera feeds (vehicle classification, crowd counts) to reduce bandwidth and preserve privacy.",
        "Aggregated events stream to the cloud via secure Kafka pipelines for analytics and forecasting.",
      ],
    },
    {
      title: "Modeling Stack",
      items: [
        "Ensemble ML models for vehicle type classification (car, truck, bus, boda) and pedestrian flow signatures.",
        "ARIMA + LSTM hybrid models for short-horizon congestion and crowd predictions.",
      ],
    },
    {
      title: "Integration Layer",
      items: [
        "RESTful APIs and WebSocket feeds for live event push to municipal control rooms and GIS stacks.",
        "Out-of-the-box connectors for PSIM, SCADA, and transport management systems.",
      ],
    },
    {
      title: "Security & Resilience",
      items: [
        "TLS, mutual-auth, role-based access, and encrypted data-at-rest.",
        "Active failover and regional redundancy for critical services.",
      ],
    },
  ];

  const metrics = [
    {
      category: "Traffic & Flow",
      items: [
        "Vehicles per lane per minute",
        "Average vehicle speed (km/h) by segment",
        "Vehicle composition (%) – cars, buses, boda, trucks",
        "Congestion Index (0–100) and queue length",
      ],
    },
    {
      category: "Pedestrian & Crowd",
      items: [
        "People per square meter (density)",
        "Origin-destination flows (OD matrices)",
        "Dwell rate near key nodes (stations, markets)",
      ],
    },
    {
      category: "Environmental",
      items: [
        "PM2.5, NO₂, CO₂ levels correlated with traffic intensity",
        "Idle-time emissions estimates",
      ],
    },
    {
      category: "Operational",
      items: [
        "Incident detection time & response time (MTTD/MTTR)",
        "Predicted vs actual throughput improvements after interventions",
      ],
    },
  ];

  const implementationPhases = [
    {
      phase: "Discovery & KPI Workshop",
      duration: "1–2 weeks",
      description: "Stakeholder alignment, geo-scope, legal clearance, and define success metrics (e.g., reduce corridor congestion by 15%).",
    },
    {
      phase: "Pilot",
      duration: "6–8 weeks",
      description: "Deploy 3–6 sensor zones (cameras + environmental nodes), configure edge nodes, connect to central dashboard, and validate model accuracy.",
    },
    {
      phase: "Operate & Optimize",
      duration: "8–12 weeks",
      description: "Expand sensor footprint, integrate AVL/transport telemetry, tune forecasting models, and implement control-room playbooks.",
    },
    {
      phase: "Scale & Automate",
      duration: "Ongoing",
      description: "City-wide rollout, schedule automation (VMS updates), policy dashboards, SLA-backed support, and model retraining.",
    },
  ];

  const pricingOptions = [
    {
      title: "Urban Starter Pilot",
      price: "$7,500",
      description: "3 zones, 8-week deployment, dashboard access, 2 API integrations, training.",
    },
    {
      title: "City Pilot",
      price: "$25,000",
      description: "10–30 zones, ensemble predictive modeling, emergency dispatch integration, monthly performance reviews.",
    },
    {
      title: "Enterprise / National",
      price: "Custom",
      description: "Full rollouts, policy simulation modules, dedicated SRE, and integration with national traffic management centers.",
    },
  ];

  return (
    <div className="bg-background text-textPrimary min-h-screen">
      <Header />
      <main>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <Hero
          title="ONFIX — The Smart Cities Engine for Data-Driven Urban Management"
          subhead="Turn cities into responsive systems — schedule an ONFIX pilot and get real-time traffic, pollution, and crowd intelligence."
          primaryCta={{ text: "Request ONFIX Pilot", href: "/contact?onfix" }}
          secondaryCta={{ text: "Download ONFIX Pilot Brief", href: "/downloads/onfix-pilot-brief.pdf" }}
          video="/videos/onfix-demo-loop.mp4"
          image="/images/onfix-control-room.webp"
          alt="ONFIX control room dashboard showing real-time congestion heatmap for Nairobi"
        />
        <section className="container mx-auto py-8 px-4">
          <h2 className="text-3xl font-instrument-serif mb-4 text-center">What ONFIX Delivers</h2>
          <AnimatedSection className="text-lg font-figtree mb-4 max-w-3xl mx-auto">
            <p>
              ONFIX is Boldstreet’s smart-cities engine designed to help municipalities, transport authorities, real-estate developers, and large campuses operate more efficiently and safely. ONFIX ingests and normalizes city-scale sensor streams (video, loop counters, environmental sensors, public transport telemetry, and IoT) to deliver real-time dashboards, predictive models, and automated alerts that cut congestion, reduce emissions, and improve public safety. Built for African cities — where vehicle mixes include minibuses, boda-bodas, and heavy trucks, and where informal event patterns are common — ONFIX provides localized models, a policy-ready API layer, and a pilot-to-scale playbook.
            </p>
          </AnimatedSection>
        </section>
        <section className="container mx-auto py-8 px-4">
          <h2 className="text-3xl font-instrument-serif mb-4 text-center">The Problems ONFIX Solves</h2>
          <AnimatedSection className="text-lg font-figtree mb-4 max-w-3xl mx-auto">
            <p>
              Cities face reactive operations, fragmented signals, and poor planning inputs. ONFIX delivers a single source of truth for urban flows, supporting tactical responses (e.g., reroute traffic during incidents) and strategic decisions (e.g., where to build a bike lane). It lowers commute times, speeds up emergency response, improves pollution management, and supports evidence-based infrastructure investments.
            </p>
          </AnimatedSection>
          <ul className="list-disc pl-6 max-w-2xl mx-auto text-lg font-figtree mb-8">
            <li>Lower average commute times and congestion hotspots.</li>
            <li>Faster emergency response and reduced incident escalation.</li>
            <li>Better pollution management and public health outcomes.</li>
            <li>Evidence-based infrastructure investments with measurable ROI.</li>
          </ul>
        </section>
        <section className="container mx-auto py-8 px-4">
          <h2 className="text-3xl font-instrument-serif mb-4 text-center">Core Capabilities</h2>
          <AnimatedSection className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="p-6 bg-surface rounded-2xl shadow-lg">
              <h3 className="text-xl font-instrument-serif mb-2">Multi-source Ingestion</h3>
              <ul className="list-disc pl-6 font-figtree text-textSecondary">
                <li>Connects to CCTV, ANPR, loop counters, bus AVL, parking sensors, weather, air-quality nodes.</li>
                <li>Normalizes feeds into standardized schemas (vehicle_count, pedestrian_density, etc.).</li>
              </ul>
            </div>
            <div className="p-6 bg-surface rounded-2xl shadow-lg">
              <h3 className="text-xl font-instrument-serif mb-2">Real-time Dashboards</h3>
              <ul className="list-disc pl-6 font-figtree text-textSecondary">
                <li>Live maps with traffic, pedestrian flow, incidents, air quality layers.</li>
                <li>Playbook view for operations: incident timeline, response suggestions.</li>
                <li>APIs for municipal dashboards and third-party apps.</li>
              </ul>
            </div>
            <div className="p-6 bg-surface rounded-2xl shadow-lg">
              <h3 className="text-xl font-instrument-serif mb-2">Predictive Analytics</h3>
              <ul className="list-disc pl-6 font-figtree text-textSecondary">
                <li>Short-term forecasting (0–60 min) for congestion and crowd volumes.</li>
                <li>What-if simulations for closures, events, or policy changes.</li>
                <li>Anomaly detection for flash crowds, protests, or pile-ups.</li>
              </ul>
            </div>
            <div className="p-6 bg-surface rounded-2xl shadow-lg">
              <h3 className="text-xl font-instrument-serif mb-2">Automated Alerts</h3>
              <ul className="list-disc pl-6 font-figtree text-textSecondary">
                <li>Rule engine triggers multi-channel alerts (SMS, email, webhook).</li>
                <li>Automated VMS updates and traffic-light timing suggestions.</li>
              </ul>
            </div>
            <div className="p-6 bg-surface rounded-2xl shadow-lg">
              <h3 className="text-xl font-instrument-serif mb-2">Environmental Modules</h3>
              <ul className="list-disc pl-6 font-figtree text-textSecondary">
                <li>Correlate traffic with NO₂/PM2.5 for congestion pricing or rerouting.</li>
                <li>Idle-time reduction and EV-charging demand forecasting.</li>
              </ul>
            </div>
            <div className="p-6 bg-surface rounded-2xl shadow-lg">
              <h3 className="text-xl font-instrument-serif mb-2">Citizen-facing APIs</h3>
              <ul className="list-disc pl-6 font-figtree text-textSecondary">
                <li>Public feeds for ETA widgets, congestion heatmaps.</li>
                <li>Privacy-first: aggregated data only in public endpoints.</li>
              </ul>
            </div>
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
            Deliverables: implementation blueprint, KPI dashboard, training for ops teams, and monthly impact reports.
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
            We provide hardware leasing, financing arrangements, and revenue-share models for long-term procurement cycles.{' '}
            <Link href="/contact?onfix" className="text-teal-400 hover:underline">
              Contact sales
            </Link>{' '}
            for a scoped quote.
          </p>
        </section>
        <section className="container mx-auto py-8 px-4">
          <h2 className="text-3xl font-instrument-serif mb-4 text-center">Case Snapshot — Konza City Shuttle Optimization</h2>
          <CaseSnapshot
            objective="Improve shuttle utilization and reduce wait times during peak office hours at Konza City’s commercial district."
            approach="Integrated shuttle AVL feeds, pedestrian counters at three hubs, and camera-based boarding counts. Short-term forecasts recommended dynamic dispatch intervals and fare incentives."
            outcome="Shuttle wait times reduced by 28% in peak windows; ride occupancy improved by 18%; operations reported fuel savings and predictable scheduling. Justified two additional pick-up bays."
            image="/images/onfix-shuttle-dashboard.webp"
          />
        </section>
        <section className="container mx-auto py-8 px-4">
          <h2 className="text-3xl font-instrument-serif mb-4 text-center">Cross-product Synergies</h2>
          <AnimatedSection className="text-lg font-figtree mb-4 max-w-3xl mx-auto">
            <p>
              ONFIX multiplies the value of the Boldstreet stack: feed pedestrian flows into Boldstreet OOH for high-impact ad scheduling, alert RAVEN to crowd surges for security adjustments, provide ALLTHEWAY with traffic predictions for last-mile optimization, and combine with LOOK for micro-level retail analysis inside transit hubs.
            </p>
          </AnimatedSection>
        </section>
        <section className="container mx-auto py-8 px-4">
          <h2 className="text-3xl font-instrument-serif mb-4 text-center">Privacy, Governance & Ethics</h2>
          <AnimatedSection className="text-lg font-figtree mb-4 max-w-3xl mx-auto">
            <p>
              ONFIX adheres to a privacy-first model: aggregation before publication ensures no PII in public endpoints, retention and access policies are configurable, bias audits prevent unfair model targeting, and transparent governance provides logs and public data policies for civic transparency.
            </p>
          </AnimatedSection>
        </section>
        <section className="container mx-auto py-8 px-4">
          <h2 className="text-3xl font-instrument-serif mb-4 text-center">FAQs</h2>
          <AnimatedSection className="max-w-3xl mx-auto">
            <div className="mb-4">
              <h3 className="text-xl font-instrument-serif">Can ONFIX detect specific vehicle types like boda-bodas?</h3>
              <p className="font-figtree text-textSecondary">
                Yes — classification models are trained on local datasets and reliably separate motorbikes/boda-bodas from cars and trucks.
              </p>
            </div>
            <div className="mb-4">
              <h3 className="text-xl font-instrument-serif">How quickly can we see results?</h3>
              <p className="font-figtree text-textSecondary">
                Pilot results (baseline vs pilot) typically appear within 4–8 weeks. Short-horizon congestion predictions are available after initial site calibration (~2 weeks).
              </p>
            </div>
            <div className="mb-4">
              <h3 className="text-xl font-instrument-serif">Does ONFIX require cloud connectivity?</h3>
              <p className="font-figtree text-textSecondary">
                Edge nodes operate independently for basic detection. Cloud connectivity is recommended for aggregation, forecasting, and cross-site analytics.
              </p>
            </div>
            <div className="mb-4">
              <h3 className="text-xl font-instrument-serif">Can we integrate ONFIX into our existing traffic control room?</h3>
              <p className="font-figtree text-textSecondary">
                Yes — ONFIX provides APIs, webhooks, and can deliver a tailored control-room UI or integrate into your existing PSIM/SCADA stack.
              </p>
            </div>
          </AnimatedSection>
        </section>
        <section className="container mx-auto py-8 px-4 text-center">
          <h2 className="text-3xl font-instrument-serif mb-4">Next Steps</h2>
          <AnimatedSection className="text-lg font-figtree mb-4 max-w-3xl mx-auto">
            <p>
              Book an ONFIX pilot to see immediate operational uplift. Pilots include full technical audit, rapid deployment blueprint, and an ROI forecast based on your corridor data.
            </p>
          </AnimatedSection>
          <div className="space-x-4">
            <Link
              href="/contact?onfix"
              className="bg-gradient-to-r from-blue-600 to-teal-400 text-white py-3 px-6 rounded-2xl font-quattrocento"
            >
              Request ONFIX Pilot
            </Link>
            <DownloadLink
              href="/downloads/onfix-pilot-brief.pdf"
              text="Download ONFIX Pilot Brief"
            />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}