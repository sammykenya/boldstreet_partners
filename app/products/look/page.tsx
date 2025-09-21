//'use client';

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

export default function LookPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "LOOK — Consumer Insight Engine",
    "description": "LOOK: privacy-first consumer analytics for retail and OOH. Heatmaps, dwell time, gaze tracking, and offline attribution. Built for Kenya and East Africa.",
    "brand": {
      "@type": "Organization",
      "name": "Boldstreet Partners",
      "url": "https://boldstreet.co.ke"
    },
    "sku": "LOOK-001",
    "offers": {
      "@type": "Offer",
      "url": "https://boldstreet.co.ke/contact?look",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock"
    }
  };

  const useCases = [
    {
      title: "Store Experience Optimization",
      description: "Heatmaps show which aisles attract attention and which displays are blind spots. Optimize product placement and staff allocation.",
      image: "/images/look-heatmap.webp",
      alt: "Heatmap of store aisles"
    },
    {
      title: "Pop-up & Event Analytics",
      description: "Real-time dashboards reveal which activations drive dwell and social sharing; optimize placement and timing mid-event.",
      image: "/images/look-pathing.webp",
      alt: "Event analytics dashboard"
    },
    {
      title: "OOH Creative Validation",
      description: "Integrate with Boldstreet OOH to verify which creatives attracted attention and generated store visits — creating a closed-loop OOH → in-store attribution.",
      image: "/images/look-ab-creative.webp",
      alt: "OOH creative validation metrics"
    },
    {
      title: "Category & Merch Testing",
      description: "Run A/B product placement tests across branches and measure uplift in pick-up vs. pass-by rates.",
      image: "/images/look-pos-attribution.webp",
      alt: "Merchandising A/B testing results"
    },
    {
      title: "Loss Prevention & Operational Alerts",
      description: "Identify suspicious behavior patterns (loitering, repeated shelf probing) and alert staff before loss escalates.",
      image: "/images/look-privacy-signage.webp",
      alt: "Loss prevention alert system"
    },
  ];

  const techStack = [
    {
      title: "Edge-first Computer Vision",
      items: [
        "YOLO-v9 (custom-tuned) for object & pose detection, head-pose, and gaze approximation, trained on regional contexts.",
        "On-edge anonymization: faces blurred by default; identifying images discarded unless lawfully required.",
      ],
    },
    {
      title: "Sensor Fusion",
      items: [
        "Inputs: RGB cameras, passive infrared counters, Bluetooth/Wi-Fi beacons (optional), POS/time-stamp events.",
        "Fusion logic matches anonymous tokens and visual metadata for reliable visit paths while preserving privacy.",
      ],
    },
    {
      title: "Streaming & Analytics",
      items: [
        "Kafka streams for anonymized event aggregation, cohorting, and ML scoring (dwell propensity, repeat-visitor likelihood).",
        "Real-time rules engine for alerts and creative swaps on Boldstreet OOH screens.",
      ],
    },
    {
      title: "Attribution & Linkage",
      items: [
        "Links impressions to POS, CRM, or location pings via secure APIs for near-real-time conversion measurement.",
      ],
    },
    {
      title: "Security & Compliance",
      items: [
        "TLS + AES-256 encryption, role-based access, configurable retention, GDPR-style controls for Kenyan regulations.",
      ],
    },
  ];

  const metrics = [
    {
      category: "Attention & Engagement",
      items: [
        "Glance Rate: % of passersby who look at the display or shelf.",
        "Average Dwell Time: seconds per viewer.",
        "Watch-to-Conversion Rate: % of watchers who purchase (via POS).",
        "Repeat Exposure Rate: % of unique visitors returning within a time window.",
      ],
    },
    {
      category: "Movement & Pathing",
      items: [
        "Heatmaps: time-sliced density visualizations (people/m²).",
        "Origin → Destination Paths: visitor navigation patterns.",
        "Queue Length & Wait-Time Profiles at checkouts.",
      ],
    },
    {
      category: "Demographics & Segmentation",
      items: [
        "Age-range buckets, broad gender indicators, group vs. individual shoppers (aggregate, no PII).",
      ],
    },
    {
      category: "Creative & Campaign Metrics",
      items: [
        "Creative View Rate: % of viewers registering attention for a creative.",
        "A/B Variant Performance: watch time uplift and conversion attributions.",
      ],
    },
    {
      category: "Operational Metrics",
      items: [
        "Staff Efficiency Index: predicted vs. actual staffing needs.",
        "Shrinkage Risk Score: composite metric for anomalous behavior.",
      ],
    },
  ];

  const implementationPhases = [
    {
      phase: "Assessment & KPI Workshop",
      duration: "1 week",
      description: "Define business goals, POS/CRM hookups, legal signage, and pilot metrics.",
    },
    {
      phase: "Pilot Deployment",
      duration: "3–6 weeks",
      description: "Edge device + 2–6 camera zones, dashboard access, baseline benchmarking, one POS/CRM integration.",
    },
    {
      phase: "Optimization & Scale",
      duration: "4–12 weeks",
      description: "Expand to additional branches, train models on site-specific data, add cohort analysis and automated recommendations.",
    },
    {
      phase: "Ongoing Operations",
      duration: "Ongoing",
      description: "Monthly model tuning, quarterly business reviews, add-on modules (e.g., emotion scoring, loyalty integration).",
    },
  ];

  const pricingOptions = [
    {
      title: "Insight Pilot",
      price: "$4,500",
      description: "3 sites, 4-week baseline, heatmaps, attention & dwell dashboards, one POS integration.",
    },
    {
      title: "Growth Insights",
      price: "$10,000",
      description: "Up to 12 sites, A/B testing module, conversion attribution, weekly analytics reviews.",
    },
    {
      title: "Enterprise Insights",
      price: "Custom",
      description: "Region-wide rollout, custom integrations (ERP/CRM), SLA, dedicated success manager.",
    },
  ];

  return (
    <div className="bg-background text-textPrimary min-h-screen">
      <Header />
      <main>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <Hero
          title="LOOK — Unlock Consumer Behavior with Live, Ethical AI"
          subhead="Turn physical interactions into measurable signals. Book a demo to see LOOK in your store or campaign."
          primaryCta={{ text: "Request LOOK Demo", href: "/contact?look" }}
          secondaryCta={{ text: "Download LOOK Pilot Brief", href: "/downloads/look-pilot-brief.pdf" }}
          video="/videos/look-demo-loop.mp4"
          image="/images/look-heatmap.webp"
          alt="LOOK in-store heatmap showing high-attention aisles in Nairobi retail store"
        />
        <section className="container mx-auto py-8 px-4">
          <h2 className="text-3xl font-instrument-serif mb-4 text-center">What LOOK Delivers</h2>
          <AnimatedSection className="text-lg font-figtree mb-4 max-w-3xl mx-auto">
            <p>
              LOOK is Boldstreet’s consumer insight engine that brings online-level analytics to physical spaces. By fusing edge computer vision (YOLO-tuned models), sensor telemetry, and advanced event-stream processing, LOOK produces actionable, privacy-first insights: who looked, for how long, where they moved, what attracted attention, and which creatives drove conversions. Built for retailers, malls, brands, and OOH advertisers across Kenya and East Africa, LOOK translates footfall into conversion lift, optimizes store layouts, and enables dynamic content strategies for Boldstreet OOH. The platform outputs 1,450+ KPIs — from glance rate and dwell time to cross-channel attribution — with dashboards and APIs for analytics teams and C-suite stakeholders.
            </p>
          </AnimatedSection>
        </section>
        <section className="container mx-auto py-8 px-4">
          <h2 className="text-3xl font-instrument-serif mb-4 text-center">Business Outcomes</h2>
          <AnimatedSection className="text-lg font-figtree mb-4 max-w-3xl mx-auto">
            <p>
              Retail and OOH teams face two big gaps: lack of verifiable measurement of physical attention and slow feedback loops for creative or merchandising changes. LOOK closes both by enabling increased in-store conversion through optimized layouts, faster creative iteration for DOOH campaigns, evidence-backed reporting for buyers, and operational efficiencies like reduced checkout queues and shrinkage detection. These outcomes drive measurable KPIs: sales lift, reduced time-to-shelf, improved campaign ROAS, and accurate stock allocation.
            </p>
          </AnimatedSection>
          <ul className="list-disc pl-6 max-w-2xl mx-auto text-lg font-figtree mb-8">
            <li>Increase in-store conversion by optimizing high-traffic layouts and merch placement.</li>
            <li>Faster creative iteration for DOOH campaigns through real-time attention metrics.</li>
            <li>Evidence-backed reporting for buyers and FMCG brands—link impressions to in-store behavior.</li>
            <li>Operational efficiencies: reduce checkout queues, balance staffing, identify shrinkage patterns.</li>
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
          <h2 className="text-3xl font-instrument-serif mb-4 text-center">How LOOK Works</h2>
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
        </section>
        <section className="container mx-auto py-8 px-4">
          <h2 className="text-3xl font-instrument-serif mb-4 text-center">Pricing & Pilot Offers</h2>
          <AnimatedSection className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {pricingOptions.map((option, index) => (
              <PricingCard key={index} {...option} />
            ))}
          </AnimatedSection>
          <p className="text-lg font-figtree mt-4 text-center">
            We offer hardware leasing and revenue-share models for FMCG partners and agencies. Final cost is scoped to site complexity and integration depth.{' '}
            <Link href="/contact?look" className="text-teal-400 hover:underline">
              Contact sales
            </Link>{' '}
            for a scoped quote.
          </p>
        </section>
        <section className="container mx-auto py-8 px-4">
          <h2 className="text-3xl font-instrument-serif mb-4 text-center">Case Snapshot — Retail Chain Pop-up</h2>
          <CaseSnapshot
            objective="A nationwide retailer launched a 10-day pop-up but lacked fast feedback on creative and merchandising."
            approach="Deployed LOOK at 5 pop-up sites, instrumented 3 camera zones per site and connected POS. Ran two creative variants and A/B shelf placements."
            outcome="Variant B increased average dwell 36% and produced a 22% lift in same-day purchases attributable to the pop-up. The retailer rolled the winning layout to 12 branches within 30 days, improving conversion rates chain-wide."
            image="/images/look-heatmap.webp"
            alt="Retail chain pop-up heatmap"
          />
        </section>
        <section className="container mx-auto py-8 px-4">
          <h2 className="text-3xl font-instrument-serif mb-4 text-center">Integration & APIs</h2>
          <AnimatedSection className="text-lg font-figtree mb-4 max-w-3xl mx-auto">
            <p>
              LOOK exposes well-documented REST APIs and webhook events for campaign events (creative served, viewer count), attribution events (POS sale linked to impression token), and custom exports (CSV/JSON) for BI ingestion. We provide SDKs for common stacks and support custom ETL/ELT to BigQuery, Snowflake, or your data lake.
            </p>
          </AnimatedSection>
        </section>
        <section className="container mx-auto py-8 px-4">
          <h2 className="text-3xl font-instrument-serif mb-4 text-center">FAQs</h2>
          <AnimatedSection className="max-w-3xl mx-auto">
            <div className="mb-4">
              <h3 className="text-xl font-instrument-serif">Is LOOK GDPR / Kenyan-data compliant?</h3>
              <p className="font-figtree text-textSecondary">
                Yes. By default LOOK anonymizes and aggregates all data. Retention windows and access controls are configurable to meet regulatory or contractual needs.
              </p>
            </div>
            <div className="mb-4">
              <h3 className="text-xl font-instrument-serif">Do you store face images?</h3>
              <p className="font-figtree text-textSecondary">
                No. Face pixels are blurred at the edge. Only anonymized metadata and short incident clips (if lawfully required) are stored under strict retention rules.
              </p>
            </div>
            <div className="mb-4">
              <h3 className="text-xl font-instrument-serif">How accurate are the demographics?</h3>
              <p className="font-figtree text-textSecondary">
                Demographic inference is probabilistic and presented as ranges. In our pilots (local datasets), classification shows high practical utility — robust for cohorting and campaign optimization, not individual identification.
              </p>
            </div>
            <div className="mb-4">
              <h3 className="text-xl font-instrument-serif">Can LOOK work without cameras?</h3>
              <p className="font-figtree text-textSecondary">
                LOOK can integrate optional beacon-based signals (Bluetooth/Wi-Fi) but camera-based sensing provides most of the attention and pathing capability.
              </p>
            </div>
          </AnimatedSection>
        </section>
        <section className="container mx-auto py-8 px-4">
          <h2 className="text-3xl font-instrument-serif mb-4 text-center">Cross-product Synergies</h2>
          <AnimatedSection className="text-lg font-figtree mb-4 max-w-3xl mx-auto">
            <p>
              LOOK is designed to be a force-multiplier across the Boldstreet stack: feed attention metrics into Boldstreet OOH to dynamically switch creatives, provide crowd & behavior feeds to RAVEN for security thresholds, send origin-destination trends to ONFIX for urban flow planning, and share consumer movement and pickup timing with ALLTHEWAY for last-mile pick-up optimization.
            </p>
          </AnimatedSection>
        </section>
        <section className="container mx-auto py-8 px-4 text-center">
          <h2 className="text-3xl font-instrument-serif mb-4">Next Steps</h2>
          <AnimatedSection className="text-lg font-figtree mb-4 max-w-3xl mx-auto">
            <p>
              Want to see LOOK analyzing a store or DOOH activation live? Book a demo to view heatmaps, watch-time metrics, and sample conversion attributions.
            </p>
          </AnimatedSection>
          <div className="space-x-4">
            <Link
              href="/contact?look"
              className="bg-gradient-to-r from-blue-600 to-teal-400 text-white py-3 px-6 rounded-2xl font-figtree"
            >
              Request LOOK Demo
            </Link>
            <DownloadLink
              href="/downloads/look-pilot-brief.pdf"
              text="Download LOOK Pilot Brief"
            />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}