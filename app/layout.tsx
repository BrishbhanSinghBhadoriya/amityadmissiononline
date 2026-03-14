// layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import StickyContact from "@/components/StickyContact";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Amity Online Admission 2026 | Apply Now for UG & PG Programs",
  description:
    "Apply for Amity University Online Admission 2026. UGC & AICTE approved online MBA, BCA, BBA, MCA, B.Com degrees with flexible learning, expert faculty, scholarships, and global recognition.",

  keywords: [
    "amity online admission 2026",
    "amity university online apply now",
    "amity online january batch admission",
    "amity online admission last date",
    "amity university online mba",
    "amity online mba fees",
    "amity university online bca",
    "amity university online bba",
    "amity university online bcom",
    "amity university online mca",
    "amity university online ugc approved degrees",
    "amity online mba fees per semester",
    "amity online bca fees 2026",
    "amity university online scholarship",
    "amity online no cost emi",
    "amity online admission process step by step",
    "amity university online noida admission",
    "amity online degree valid for government jobs in india",
    "best online mba in india amity university",
    "amity online mba reviews and placements",
    "amity university online genuine or fake",
    "amity online vs manipal online mba",
    "amity online mba vs nmims online mba"
  ],

  icons: [
    { url: "images/logos/amity/favicon.ico" },
    { url: "images/logos/amity/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    { url: "images/logos/amity/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    { url: "images/logos/amity/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
    { url: "images/logos/amity/android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
    { url: "images/logos/amity/apple-touch-icon.png", type: "image/png" }
  ],

  metadataBase: new URL("https://degreeuniversity.online"),
  alternates: {
    canonical: "https://degreeuniversity.online"
  },

  openGraph: {
    title: "Amity Online Admission 2026 | Apply Now for UG & PG Programs",
    description:
      "Enroll in UGC & AICTE approved online MBA, BCA, BBA, MCA degrees at Amity University Online. Flexible learning with expert faculty and global recognition.",
    url: "https://degreeuniversity.online",
    siteName: "Degree University",
    images: [
      {
        url: "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327030/amity_vmd34g.webp",
        width: 1200,
        height: 630,
        alt: "Amity University Online Admission 2026"
      }
    ],
    locale: "en_IN",
    type: "website"
  },

  twitter: {
    card: "summary_large_image",
    title: "Amity Online Admission 2026 | Apply Now",
    description:
      "Apply for UGC & AICTE approved online courses at Amity University Online. Flexible fees, scholarships, and No Cost EMI available.",
    images: ["https://res.cloudinary.com/didkrwhbu/image/upload/v1762327030/amity_vmd34g.webp"]
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  },

  authors: [{ name: "Degree University" }],
  publisher: "Degree University",
  formatDetection: {
    email: false,
    address: false,
    telephone: false
  }
};

// ✅ Organization Schema
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: "Amity University Online",
  alternateName: "Amity Online",
  url: "https://degreeuniversity.online",
  logo: "https://degreeuniversity.online/amity.svg",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+91 7042646766",
    contactType: "admissions",
    areaServed: "IN",
    availableLanguage: ["en", "hi"]
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Noida",
    addressRegion: "Uttar Pradesh",
    postalCode: "201301",
    addressCountry: "IN"
  },
  sameAs: [
    "https://www.facebook.com/AmityUniversityOnline",
    "https://www.linkedin.com/school/amity-university-online/",
    "https://x.com/AmityUniversity"
  ]
};

// ✅ Landing Page Schema
const landingPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Amity University Online Admission 2026 | Apply Now",
  description:
    "Apply for Amity University Online UG and PG programs. UGC & AICTE approved degrees with scholarships and No Cost EMI.",
  url: "https://degreeuniversity.online",
  inLanguage: "en-IN",
  publisher: {
    "@type": "EducationalOrganization",
    name: "Amity University Online",
    url: "https://degreeuniversity.online"
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* ✅ LCP Image Preload */}
        <link
          rel="preload"
          href="https://res.cloudinary.com/didkrwhbu/image/upload/w_400,q_auto,f_auto/v1762327155/girlImage_w9ulny.webp"
          as="image"
          type="image/webp"
        />

        {/* ✅ Structured Data — Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />

        {/* ✅ Structured Data — Landing Page */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(landingPageSchema) }}
        />

        {/* ✅ Google Ads Only */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-17973395671"
          strategy="beforeInteractive"
        />
        <Script id="google-ads-init" strategy="beforeInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17973395671');
          `}
        </Script>
      </head>

      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white`}>
        {children}
        <StickyContact />
      </body>
    </html>
  );
}