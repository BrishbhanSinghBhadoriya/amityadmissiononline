import type { Metadata } from "next";
import StickyContact from "@/components/StickyContact";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Amity Online Admission 2026 | Apply Now for UG & PG Programs",
  description:
    "Apply for Amity University Online admission 2026. UGC & AICTE approved online MBA, BCA, BBA, MCA, B.Com degrees with flexible learning, expert faculty, and global recognition.",
  keywords: [
    "amity online admission 2026",
    "amity university online apply now",
    "amity online january batch admission",
    "amity online admission last date",
    "amity university online mba admission",
    "amity online bca admission 2026",
    "amity online bba admission 2026",
    "amity online mca admission 2026",
    "amity university online fees 2026",
    "amity online eligibility criteria",
    "amity online admission process",
    "amity university ugc approved online degree",
    "amity online scholarship 2026",
    "amity online no cost emi",
    "amity university online noida admission",
    "best online degree india 2026",
    "amity online mba fees per semester",
    "amity online vs manipal online",
    "amity online genuine or fake",
    "amity online mba placements"
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
    canonical: "https://degreeuniversity.online/amity-university-online"  
  },

  openGraph: {
    title: "Amity Online Admission 2026 | Apply Now for UG & PG Programs",
    description:
      "Enroll in UGC & AICTE approved online MBA, BCA, BBA, MCA degrees at Amity University Online. Flexible learning with expert faculty and global recognition.",
    url: "https://degreeuniversity.online/amity-university-online",  
    siteName: "UNIFOST",
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

  authors: [{ name: "UNIFOST" }],
  publisher: "UNIFOST",
  formatDetection: {
    email: false,
    address: false,
    telephone: false
  }
};


const admissionPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Amity University Online Admission 2026",
  description:
    "Apply for Amity University Online UG and PG programs. UGC & AICTE approved degrees with scholarships and No Cost EMI.",
  url: "https://unifostedu.com/amity/apply",  // ✅ apna sahi path yahan daalo
  inLanguage: "en-IN",
  publisher: {
    "@type": "EducationalOrganization",
    name: "Amity University Online",
    url: "https://unifostedu.com/amity",
    logo: "https://unifostedu.com/amity.svg",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Noida",
      addressRegion: "Uttar Pradesh",
      postalCode: "201301",
      addressCountry: "IN"
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+91 7042646766",
      contactType: "admissions",
      areaServed: "IN",
      availableLanguage: ["en", "hi"]
    },
    sameAs: [
      "https://www.facebook.com/AmityUniversityOnline",
      "https://www.linkedin.com/school/amity-university-online/",
      "https://x.com/AmityUniversity"
    ]
  }
};

export default function AmityApplyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* ✅ Image preload for LCP optimization */}
      <link
        rel="preload"
        href="https://res.cloudinary.com/didkrwhbu/image/upload/w_400,q_auto,f_auto/v1762327155/girlImage_w9ulny.webp"
        as="image"
        type="image/webp"
      />

      {/* ✅ Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(admissionPageSchema) }}
      />

      {/* ✅ Meta Pixel */}
      <Script id="meta-pixel" strategy="afterInteractive">
        {`
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '1230848505368304');
          fbq('track', 'PageView');
        `}
      </Script>

      {/* ✅ Meta Pixel NoScript Fallback */}
      <noscript>
        <img
          height="1"
          width="1"
          style={{ display: "none" }}
          src="https://www.facebook.com/tr?id=1230848505368304&ev=PageView&noscript=1"
          alt=""
        />
      </noscript>

      {children}
      <StickyContact />
    </>
  );
}