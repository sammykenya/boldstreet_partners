import './globals.css';
import type { ReactNode } from 'react';

export const metadata = {
  title: "Powering Africa’s Data-Driven Future | Boldstreet",
  description: "Transforming Advertising, Retail, Security, Cities, and Logistics with Patented AI and Blockchain Technology.",
  viewport: "width=device-width, initial-scale=1",
  alternates: {
    canonical: "https://boldstreet.co.ke/",
  },
  openGraph: {
    title: "Powering Africa’s Data-Driven Future | Boldstreet",
    description: "Transforming Advertising, Retail, Security, Cities, and Logistics with Patented AI and Blockchain Technology.",
    images: ["/images/og-image-home.jpg"],
    url: "https://boldstreet.co.ke/",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Powering Africa’s Data-Driven Future | Boldstreet",
    description: "Transforming Advertising, Retail, Security, Cities, and Logistics with Patented AI and Blockchain Technology.",
    images: ["/images/og-image-home.jpg"],
  },
  other: {
    "application/ld+json": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "Boldstreet",
      url: "https://boldstreet.co.ke",
      description:
        "Boldstreet Partners delivers AI-driven solutions for advertising, security, retail, cities, and logistics in Africa.",
    }),
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Oswald:wght@400;500;600;700&family=Quattrocento:wght@400;700&display=swap"
        />
      </head>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
