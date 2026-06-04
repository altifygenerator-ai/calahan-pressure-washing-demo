import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://calahan-pressure-washing.hometownwebservicesar.cc";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default:
      "Calahan Pressure Washing LLC | Residential & Commercial Pressure Washing",
    template: "%s | Calahan Pressure Washing LLC",
  },
  description:
    "Calahan Pressure Washing LLC provides residential and commercial pressure washing and soft washing services. Based in Bicknell, Indiana and serving Bloomington, Vincennes, and nearby surrounding areas.",
  keywords: [
    "Calahan Pressure Washing LLC",
    "pressure washing Bicknell IN",
    "pressure washing Bloomington IN",
    "pressure washing Vincennes IN",
    "soft washing Indiana",
    "residential pressure washing",
    "commercial pressure washing",
    "house washing",
    "driveway pressure washing",
    "concrete cleaning",
    "deck cleaning",
    "fence cleaning",
  ],
  authors: [{ name: "Calahan Pressure Washing LLC" }],
  creator: "Calahan Pressure Washing LLC",
  publisher: "Calahan Pressure Washing LLC",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Calahan Pressure Washing LLC",
    title:
      "Calahan Pressure Washing LLC | Residential & Commercial Pressure Washing",
    description:
      "Residential and commercial pressure washing and soft washing based in Bicknell, Indiana. Serving Bloomington, Vincennes, and nearby surrounding areas.",
    images: [
      {
        url: "/images/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Calahan Pressure Washing LLC exterior cleaning work",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Calahan Pressure Washing LLC | Residential & Commercial Pressure Washing",
    description:
      "Pressure washing and soft washing for homes, businesses, concrete, decks, fences, siding, and exterior surfaces.",
    images: ["/images/hero.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const businessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Calahan Pressure Washing LLC",
    url: siteUrl,
    image: `${siteUrl}/images/logo.png`,
    telephone: "+18124449045",
    email: "herbiecalahan92@gmail.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Bicknell",
      addressRegion: "IN",
      addressCountry: "US",
    },
    areaServed: [
      {
        "@type": "City",
        name: "Bicknell",
      },
      {
        "@type": "City",
        name: "Bloomington",
      },
      {
        "@type": "City",
        name: "Vincennes",
      },
      {
        "@type": "Place",
        name: "Nearby surrounding areas within about an hour",
      },
    ],
    description:
      "Residential and commercial pressure washing and soft washing service based in Bicknell, Indiana, serving Bloomington, Vincennes, and nearby surrounding areas.",
    priceRange: "$$",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Pressure Washing Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Residential Pressure Washing",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Commercial Pressure Washing",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Soft Washing",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Driveway and Concrete Cleaning",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Deck and Fence Cleaning",
          },
        },
      ],
    },
  };

  return (
    <html lang="en">
      <body>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(businessSchema),
          }}
        />
      </body>
    </html>
  );
}