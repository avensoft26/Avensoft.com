import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import dynamic from "next/dynamic";

import SplashScreen from "@/components/SplashScreen";
import { assetPath, siteUrl } from "@/lib/basePath";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

const Navbar = dynamic(() => import("@/components/Navbar"), { ssr: true });
const Footer = dynamic(() => import("@/components/Footer"), { ssr: true });

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Avensoft Technologies — Software & Cloud Systems",
    template: "%s | Avensoft Technologies",
  },
  description:
    "Architecting mission-critical software systems across India — from native Android applications and AI integrations to high-throughput cloud portals.",
  keywords: [
    "Avensoft",
    "Avensoft India",
    "Avensoft Technologies",
    "Avensoft Technologies India",
    "Software Technologies India",
    "Next.js Development India",
    "Native Android Kotlin",
    "AI & Cloud Systems",
    "SISTec Digital Pass",
    "CHC Koraon OPD Hospital System",
    "DualShield AI",
    "Bhopal Tech Studio",
  ],
  authors: [{ name: "Avensoft Technologies", url: siteUrl }],
  creator: "Avensoft Technologies",
  publisher: "Avensoft Technologies",
  alternates: {
    canonical: siteUrl,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    siteName: "Avensoft Technologies",
    title: "Avensoft Technologies — Software & Cloud Systems",
    description:
      "Architecting mission-critical software systems across India — native Android applications, modern AI integrations, and sub-300ms cloud portals.",
    images: [
      {
        url: `${siteUrl}/og-image.jpg`,
        secureUrl: `${siteUrl}/og-image.jpg`,
        width: 1200,
        height: 630,
        type: "image/jpeg",
        alt: "Avensoft Technologies — Software & Cloud Systems",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Avensoft Technologies — Software & Cloud Systems",
    description:
      "Architecting mission-critical software systems across India — native Android applications, modern AI integrations, and cloud portals.",
    images: [`${siteUrl}/og-image.jpg`],
    creator: "@avensoft",
  },
  icons: {
    icon: [
      { url: assetPath("/favicon-light-sys.png?v=5"), media: "(prefers-color-scheme: light)", type: "image/png" },
      { url: assetPath("/favicon.ico?v=5"), media: "(prefers-color-scheme: dark)", type: "image/x-icon" },
    ],
    apple: assetPath("/apple-icon.png?v=2"),
  },
  category: "technology",
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "YFJ9nVJUbevHd03bsm5TECU56zXUHa6UBhL_WFp2DXU",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Organization", "ProfessionalService"],
      "@id": `${siteUrl}/#organization`,
      name: "Avensoft Technologies",
      alternateName: ["Avensoft", "Avensoft India", "Avensoft Technologies India"],
      url: siteUrl,
      logo: `${siteUrl}/AVENSOFT-dark-theme.png`,
      image: `${siteUrl}/og-image.jpg`,
      description:
        "Engineering studio architecting mission-critical software systems across India — native Android applications, modern AI integrations, and cloud portals.",
      email: "avensoft26@gmail.com",
      telephone: "+917992054663",
      priceRange: "$$",
      foundingLocation: {
        "@type": "Place",
        name: "Bhopal, Madhya Pradesh, India",
      },
      address: {
        "@type": "PostalAddress",
        addressLocality: "Bhopal",
        addressRegion: "Madhya Pradesh",
        addressCountry: "IN",
      },
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: "+917992054663",
          contactType: "customer service",
          email: "avensoft26@gmail.com",
          availableLanguage: ["English", "Hindi"],
        },
      ],
      sameAs: [
        "https://github.com/avensoft26",
        "https://deepakkumar7388.github.io/SISTec-Digital-Pass/",
        "https://deepakkumar7388.github.io/Chaudhary_Health_Care-Center-Koraon-Pryagraj/",
      ],
      knowsAbout: [
        "Custom Web Development",
        "Native Android Kotlin",
        "iOS Swift Development",
        "Flutter Cross-Platform",
        "React Native",
        "Next.js Development",
        "Applied AI & Machine Learning",
        "Generative AI & LLM Integrations",
        "Retrieval-Augmented Generation (RAG)",
        "Autonomous AI Agents",
        "Conversational AI Chatbots",
        "Institutional ERP & Campus Management",
        "Healthcare OPD Hospital Systems",
        "UI/UX Design Systems",
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Avensoft Engineering Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Custom Web Development",
              description: "High-throughput Next.js, React, Node.js portals and APIs optimized for sub-300ms speed.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Native Mobile Engineering",
              description: "High-performance Kotlin, Jetpack Compose, Swift, and Flutter mobile applications.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Applied AI & Computer Vision",
              description: "Generative AI, LLM fine-tuning, RAG pipelines, and edge-deployed computer vision models.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Institutional ERP & Systems",
              description: "Multi-tenant role-governed ERP systems for campus administration and public hospitals.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Product Design & UX Research",
              description: "Accessible, human-centric design systems and UI/UX prototypes in Figma.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Support, SLA & Maintenance",
              description: "24/7 system health monitoring, encrypted backups, and high-availability engineering retainers.",
            },
          },
        ],
      },
      founder: [
        {
          "@type": "Person",
          name: "Yogesh Saini",
          jobTitle: "Lead Developer & Systems Engineer",
          sameAs: "https://yogeshsaini7172.github.io/yogeshsaini/",
        },
        {
          "@type": "Person",
          name: "Deepak Kumar",
          jobTitle: "Backend Developer & Core Architect",
          sameAs: "https://deepak-portfolioc.netlify.app/",
        },
        {
          "@type": "Person",
          name: "Sandeep Kumar Maurya",
          jobTitle: "Lead UI/UX Designer",
          sameAs: "https://www.linkedin.com/in/sandeep-kumar-maurya-63a66130a/",
        },
        {
          "@type": "Person",
          name: "Shivam Kumar Maurya",
          jobTitle: "UI/UX Designer",
          sameAs: "https://shivam-portfolio-three-pearl.vercel.app/",
        },
        {
          "@type": "Person",
          name: "Utkarsh Mani Mishra",
          jobTitle: "System Tester & QA Lead",
        },
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "Avensoft Technologies",
      description: "Official portal of Avensoft Technologies — Software & Cloud Systems",
      publisher: {
        "@id": `${siteUrl}/#organization`,
      },
      inLanguage: "en-IN",
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
    >
      <head>
        <link rel="sitemap" type="application/xml" title="Sitemap" href={`${siteUrl}/sitemap.xml`} />
        <link rel="alternate" type="text/plain" href={assetPath("/llms.txt")} title="LLMs.txt" />
      </head>
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <SplashScreen />
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
