import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata = {
  title: "Industries | Boldstreet AI Solutions",
  description: "Explore how Boldstreet engines transform industries: Advertising, Security, Logistics, Retail, and more.",
};

export default function IndustriesPage() {
  return (
    <div className="bg-background text-textPrimary min-h-screen">
      <Header />
      <main className="container mx-auto py-12 px-4">
        <h1 className="text-4xl font-oswald text-center mb-8">
          Industries We Serve
        </h1>
        <p className="text-lg font-quattrocento text-center max-w-2xl mx-auto mb-12">
          Discover how our AI engines power transformation across key industries.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Link href="/industries/advertising-agencies" className="p-6 border rounded-xl hover:shadow-xl transition">
            <h2 className="text-2xl font-oswald mb-2">Advertising & Agencies</h2>
            <p>Programmatic DOOH, dynamic creatives, blockchain receipts.</p>
          </Link>

          <Link href="/industries/government-security" className="p-6 border rounded-xl hover:shadow-xl transition">
            <h2 className="text-2xl font-oswald mb-2">Government & Security</h2>
            <p>RAVEN surveillance, ONFIX analytics, predictive operations.</p>
          </Link>

          <Link href="/industries/logistics-transportation" className="p-6 border rounded-xl hover:shadow-xl transition">
            <h2 className="text-2xl font-oswald mb-2">Logistics & Transportation</h2>
            <p>Smart routing, blockchain receipts, cold-chain integrity.</p>
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
