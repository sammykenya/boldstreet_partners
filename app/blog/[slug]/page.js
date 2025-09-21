import Link from 'next/link';
import { notFound } from 'next/navigation';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Hero from '../../components/Hero';
import AnimatedSection from '../../components/AnimatedSection';

const blogPosts = [
  {
    slug: 'raven-ai-surveillance-prevents-terrorism',
    title: "How RAVEN’s AI Surveillance Prevents Terrorism and Protects Public Spaces in Kenya",
    description: "Learn how RAVEN’s multi-modal AI and blockchain evidence chain detect threats early, reduce response time, and make public venues safer — a practical guide for mall operators, municipalities, and security teams in Nairobi.",
    image: "/images/blog-raven-surveillance.webp",
    imageAlt: "RAVEN surveillance control room with multi-modal sensor overlays monitoring a crowded Nairobi mall",
    content: {
      intro: "Security is not a single camera or a single guard — it’s systems working together to see, verify, and act. RAVEN combines computer vision, audio detection, thermal sensing and blockchain logging to convert raw signals into credible, actionable intelligence. For Kenyan cities and high-density venues, this is not theoretical: it's the difference between chaotic, reactive responses and coordinated, preventive operations.",
      sections: [
        {
          title: "Why traditional CCTV fails",
          content: [
            "Cameras without intelligent filtering produce endless footage that human operators cannot continuously monitor.",
            "Manual triage is slow; alerts are often generated too late.",
            "Forensics lack tamper-proof chains; evidence is vulnerable to challenges in court or insurance processes.",
          ],
        },
        {
          title: "How RAVEN changes the equation",
          content: [
            "<strong>Multi-modal detection</strong> — RAVEN doesn’t rely on sight alone. Gunshots, glass breaks, sudden heat spikes, and crowd surges are correlated to produce high-confidence alerts. This reduces false positives and directs attention to real risks.",
            "<strong>Edge-first inference</strong> — Raw video stays local; only anonymized event metadata and validated clips are transmitted. This accelerates detection and preserves privacy.",
            "<strong>Priority scoring & playbooks</strong> — Each alert carries a confidence score; high-confidence events trigger pre-defined playbooks (e.g., seal perimeter, dispatch patrol, notify first responders).",
            "<strong>Blockchain-anchored evidence</strong> — Every verified incident bundle is hashed to an immutable ledger, establishing court-admissible audit trails and simplifying insurer claims.",
          ],
        },
        {
          title: "Concrete scenarios",
          content: [
            "<strong>Unattended object in a mall:</strong> Vision detects an object left in a busy corridor; audio and temporal patterns confirm it’s been unattended for 6+ minutes and crowd dynamics suggest avoidance. RAVEN raises a “left-object” high-confidence alert; control room initiates targeted sweep rather than mall-wide evacuation.",
            "<strong>Flash crowd before an attack vector:</strong> Multiple low-signal events (sudden directional surges, clustered group formation, elevated heart/heat signatures from thermal) correlate into a high-priority alert, prompting security preemption.",
          ],
        },
        {
          title: "Operational outcomes (what organizations achieve)",
          content: [
            "<strong>Faster detection-to-response:</strong> pilot metrics show dramatic reductions in MTTD/MTTR when multi-sensor detection is used.",
            "<strong>Fewer false alarms:</strong> sensor fusion dramatically reduces wasted patrols.",
            "<strong>Stronger legal position:</strong> blockchain evidence shortens investigations and improves insurer outcomes.",
          ],
        },
        {
          title: "Ethics & privacy",
          content: [
            "RAVEN is designed with privacy-first defaults: faces blurred on-edge, minimal retention, and role-based access for evidence. Deployments should include clear signage and public policies aligned with Kenyan law.",
          ],
        },
        {
          title: "Implementation checklist",
          content: [
            "Site risk assessment and camera audit.",
            "Pilot with 3–6 camera zones + audio/thermal sensors.",
            "Integrate with control room and emergency services.",
            "Create and test incident playbooks.",
          ],
        },
      ],
      cta: {
        text: "Request a RAVEN demo",
        href: "/contact?raven",
      },
    },
  },
  {
    slug: 'programmatic-dooh-nairobi',
    title: "Programmatic DOOH in Nairobi: How Boldstreet OOH Makes Billboards Perform Like Digital Ads",
    description: "Programmatic DOOH turns static outdoor media into measurable, optimizable channels. Learn how Boldstreet OOH uses gaze detection, DCO, and blockchain verification to boost campaign ROI in Nairobi.",
    image: "/images/blog-dooh-billboard.webp",
    imageAlt: "Digital billboard in Nairobi displaying dynamic creative with audience analytics overlay",
    content: {
      intro: "Marketers tuned to digital ad metrics expect immediate feedback, precise targeting, and measurable ROI. Outdoor advertising has historically been judged on estimates; programmatic DOOH fixes that. Boldstreet OOH fuses real-time audience signals with RTB auctions and blockchain verification to enable buys that look and act like digital campaigns — but in physical places.",
      sections: [
        {
          title: "The old vs the new",
          content: [
            "<strong>Old OOH:</strong> static creatives, gross audience estimates, and post-hoc guesswork.",
            "<strong>New DOOH:</strong> real-time audience profiling, dynamic creatives (DCO), and verified impressions with signed receipts.",
          ],
        },
        {
          title: "Core technologies making DOOH programmatic",
          content: [
            "<strong>Gaze & dwell detection:</strong> Cameras near screens detect attention; an impressions auction is only settled after edge-confirmation of view.",
            "<strong>Dynamic Creative Optimization (DCO):</strong> Creative variants adjust based on weather, crowd composition, or nearby retail events.",
            "<strong>RTB / SSP / DSP integration:</strong> Each ad slot becomes a programmatic impression; local and global buyers bid in real time.",
            "<strong>Verification layer:</strong> Blockchain-anchored receipts prove impressions and fuel reconciled billing.",
          ],
        },
        {
          title: "A playbook for Nairobi campaigns",
          content: [
            "<strong>Objective:</strong> Drive footfall to weekend retail activations.",
            "<strong>Setup:</strong> Deploy 8 digital kiosks downtown + Boldstreet OOH edge appliances.",
            "<strong>Rules:</strong> Serve “rain-ready” creative if precipitation forecasted; priority to bidders targeting 18–35 year-olds during evenings.",
            "<strong>Measurement:</strong> Watch-time, conversion linked via POS integration or store check-ins.",
          ],
        },
        {
          title: "Why advertisers win",
          content: [
            "Better creative allocation through live A/B testing.",
            "Real-world attribution: tie impressions to store visits and sales lift.",
            "Reduced wastage: only pay for verified attention, not mere ad rotations.",
          ],
        },
        {
          title: "Publisher benefits",
          content: [
            "Publishers monetize more effectively via RTB; floor-price strategies and yield optimization increase revenue per screen.",
          ],
        },
        {
          title: "Privacy & trust",
          content: [
            "Edge anonymization and opt-out signage keep deployments compliant with privacy expectations.",
          ],
        },
      ],
      cta: {
        text: "Book DOOH Pilot",
        href: "/contact?ooh",
      },
    },
  },
  {
    slug: 'smart-cities-onfix-africa',
    title: "Smart Cities in Africa: How ONFIX Uses Data to Reduce Congestion and Improve Safety",
    description: "ONFIX helps Kenyan cities plan and operate smarter: live traffic feeds, pedestrian heatmaps, predictive congestion modeling, and policy simulations that turn evidence into action.",
    image: "/images/blog-onfix-traffic.webp",
    imageAlt: "City traffic control room with ONFIX congestion heatmap displayed over Nairobi streets",
    content: {
      intro: "Cities are complex systems. ONFIX treats them like systems: ingesting streams (cameras, vehicle telemetry, air quality) and turning them into short-term forecasts and actionable playbooks. For Nairobi and Konza-style developments, that means less congestion, faster emergency response, and better infrastructure investment decisions.",
      sections: [
        {
          title: "Problems ONFIX solves",
          content: [
            "Chronic congestion on corridors with mixed transport modes.",
            "Reactive emergency response based on citizen calls rather than signals.",
            "Lack of data for infrastructure prioritization.",
          ],
        },
        {
          title: "How ONFIX works (brief)",
          content: [
            "<strong>Edge nodes</strong> normalize camera and sensor data into event streams.",
            "<strong>Predictive models</strong> forecast congestion 0–60 minutes ahead.",
            "<strong>Control-room dashboards and public APIs</strong> deliver routes, ETAs and alerts.",
          ],
        },
        {
          title: "Use cases with outcomes",
          content: [
            "<strong>Corridor management:</strong> Short-horizon forecasts allow dynamic signal timing, reducing peak congestion by measurable percentages.",
            "<strong>Event management:</strong> Pre-emptive crowd routing prevents dangerous density during large gatherings.",
            "<strong>Pollution control:</strong> Correlate traffic with PM2.5 spikes and recommend temporary traffic restrictions.",
          ],
        },
        {
          title: "Policy & planning",
          content: [
            "ONFIX supports “what-if” simulations that help planners assess the impact of bus lanes, road closures and bike lanes using historical and simulated data.",
          ],
        },
        {
          title: "Operationalizing ONFIX",
          content: [
            "Start with a 3–6 zone pilot.",
            "Integrate with traffic ops and emergency services.",
            "Use the evidence to justify targeted capital investments.",
          ],
        },
      ],
      cta: {
        text: "Request ONFIX Pilot",
        href: "/contact?onfix",
      },
    },
  },
  {
    slug: 'look-in-store-analytics-retail',
    title: "LOOK: Turning Footfall into Sales — In-Store Analytics for Kenyan Retailers",
    description: "LOOK brings online-level analytics to physical retail: heatmaps, gaze & dwell metrics, and store-level attribution that increase conversion and optimize merchandising across Nairobi stores.",
    image: "/images/blog-look-retail.webp",
    imageAlt: "Retail store heatmap overlay showing customer dwell and attention zones in Nairobi",
    content: {
      intro: "Retail is now omnichannel in customer expectations, but many stores are blind to what actually works on the ground. LOOK provides in-store sightlines: who looked, how long they stayed, and which product placements lead to purchases — so retailers can iterate fast and measure results.",
      sections: [
        {
          title: "What LOOK delivers",
          content: [
            "Heatmaps showing traffic and attention.",
            "Watch-to-conversion rates linked to POS.",
            "A/B testing of layouts and creatives with same-day learnings.",
          ],
        },
        {
          title: "Operational improvements",
          content: [
            "Reallocate staff to match predicted footfall.",
            "Reconfigure shelving to reduce blind aisles and increase exposure.",
            "Validate OOH campaigns by measuring in-store uplift after ad exposure.",
          ],
        },
        {
          title: "Privacy & trust",
          content: [
            "Anonymized analytics, blurring on-edge, and clear customer signage maintain privacy compliance and trust.",
          ],
        },
        {
          title: "Implementation quick-start",
          content: [
            "1-week workshop → 3–6 week pilot → expand on validated uplift.",
          ],
        },
      ],
      cta: {
        text: "Request LOOK Demo",
        href: "/contact?look",
      },
    },
  },
  {
    slug: 'blockchain-logistics-alltheway',
    title: "Blockchain in Logistics: How ALLTHEWAY Proves Provenance and Cuts Disputes",
    description: "Immutable records matter in logistics. ALLTHEWAY uses blockchain-backed receipts, GPS telemetry and AI to reduce claims, prove handoffs, and improve ETA accuracy for Kenyan carriers.",
    image: "/images/blog-alltheway-receipt.webp",
    imageAlt: "Delivery receipt shown as blockchain-anchored proof of handoff with GPS trail overlay",
    content: {
      intro: "In logistics, “who signed for what, when” determines cost, compliance, and trust. ALLTHEWAY combines GPS/RFID telemetry with a permissioned blockchain ledger to produce tamper-proof delivery receipts — reducing disputes and speeding claim resolution.",
      sections: [
        {
          title: "Key benefits of blockchain-backed logistics",
          content: [
            "Immutable handoff receipts for every stage.",
            "Faster claims settlement — auditable trails reduce investigation time.",
            "Cold-chain integrity with signed temperature snapshots.",
          ],
        },
        {
          title: "How it operates",
          content: [
            "Devices buffer and encrypt telemetry; events are normalized and streamed.",
            "Critical handoffs (pickup, hub scan, delivery) are hashed and written to a ledger.",
            "Viewable receipts are shared with customers and partners, reducing calls and dispute rates.",
          ],
        },
        {
          title: "Operational ROI",
          content: [
            "Increased first-attempt success and transparency.",
            "Lower claim rates and reduced administrative overhead.",
            "Improved customer trust and reduced refund liabilities.",
          ],
        },
        {
          title: "Piloting ALLTHEWAY",
          content: [
            "Start with a focused lane (e.g., FMCG same-day deliveries). Measure ETA accuracy, first-attempt success and claims. Iterate to scale.",
          ],
        },
      ],
      cta: {
        text: "Request ALLTHEWAY Demo",
        href: "/contact?alltheway",
      },
    },
  },
];

export async function generateMetadata({ params }) {
  const { slug } = params;
  const post = blogPosts.find(p => p.slug === slug);
  
  if (!post) {
    return {
      title: "Blog Not Found",
      description: "The requested blog post could not be found.",
    };
  }

  return {
    title: post.title,
    description: post.description,
    alternates: {
      canonical: `https://boldstreet.co.ke/blog/${slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.description,
      images: [post.image],
      url: `https://boldstreet.co.ke/blog/${slug}`,
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [post.image],
    },
  };
}

export default function BlogPost({ params }) {
  const { slug } = params;
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": post.title,
    "description": post.description,
    "image": post.image,
    "url": `https://boldstreet.co.ke/blog/${slug}`,
    "publisher": {
      "@type": "Organization",
      "name": "Boldstreet Partners",
      "url": "https://boldstreet.co.ke",
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://boldstreet.co.ke/blog/${slug}`,
    },
  };

  return (
    <div className="bg-background text-textPrimary min-h-screen">
      <Header />
      <main>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <Hero
          title={post.title}
          image={post.image}
          alt={post.imageAlt}
        />
        <section className="container mx-auto py-8 px-4">
          <AnimatedSection className="text-lg font-figtree mb-4 max-w-3xl mx-auto">
            <p>{post.content.intro}</p>
          </AnimatedSection>
          {post.content.sections.map((section, index) => (
            <AnimatedSection key={index} className="mb-8 max-w-3xl mx-auto">
              <h2 className="text-2xl font-instrument-serif mb-4">{section.title}</h2>
              <ul className="list-disc pl-6 font-figtree text-textSecondary">
                {section.content.map((item, idx) => (
                  <li key={idx} dangerouslySetInnerHTML={{ __html: item }} />
                ))}
              </ul>
            </AnimatedSection>
          ))}
          <AnimatedSection className="text-center max-w-3xl mx-auto">
            <h2 className="text-2xl font-instrument-serif mb-4">Get Started</h2>
            <p className="text-lg font-figtree mb-4">
              {post.content.cta.text.replace('→', '').trim()}
            </p>
            <Link
              href={post.content.cta.href}
              className="bg-gradient-to-r from-blue-600 to-teal-400 text-white py-3 px-6 rounded-2xl font-figtree"
            >
              {post.content.cta.text}
            </Link>
          </AnimatedSection>
        </section>
      </main>
      <Footer />
    </div>
  );
}