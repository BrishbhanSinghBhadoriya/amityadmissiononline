// layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import StickyContact from "@/components/StickyContact";
import Script from "next/script";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

// ─── Meta Pixel ID ────────────────────────────────────────────────────────────
// Exported so page.tsx can import it to fire conversion events (Lead, etc.)
export const META_PIXEL_ID = "1230848505368304";

// ─── Metadata ─────────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Amity Online Admission 2026 | Apply Now for UG & PG Programs",

  // Crawler-focused, keyword-rich — intentionally different from OG below
  description:
    "Apply for Amity University Online Admission 2026. UGC & AICTE approved online MBA, BCA, BBA, MCA, B.Com degrees. Flexible learning, No Cost EMI, scholarships, and UGC-recognised degrees valid for government jobs.",

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
    "amity online mba vs nmims online mba",
  ],

  icons: [
    { url: "images/logos/amity/favicon.ico" },
    { url: "images/logos/amity/favicon-32x32.png",          sizes: "32x32",  type: "image/png" },
    { url: "images/logos/amity/favicon-16x16.png",          sizes: "16x16",  type: "image/png" },
    { url: "images/logos/amity/android-chrome-192x192.png", sizes: "192x192",type: "image/png" },
    { url: "images/logos/amity/android-chrome-512x512.png", sizes: "512x512",type: "image/png" },
    { url: "images/logos/amity/apple-touch-icon.png",                        type: "image/png" },
  ],

  metadataBase: new URL("https://degreeuniversity.online"),
  alternates: {
    canonical: "https://degreeuniversity.online/amity-university-online",
    languages: {
      "en-IN": "https://degreeuniversity.online/amity-university-online",
      "hi-IN": "https://degreeuniversity.online/amity-university-online/hi",
    },
  },

  openGraph: {
    title: "Amity Online Admission 2026 | Apply Now for UG & PG Programs",
    // Conversion-focused — intentionally different from meta description
    description:
      "Join 1.60 Lac+ learners at Amity University Online. Earn UGC-approved MBA, BCA, BBA, MCA degrees with No Cost EMI, scholarships up to 50%, and placement support. Limited seats — apply today.",
    url:      "https://degreeuniversity.online/amity-university-online",
    siteName: "Degree University",
    images: [
      {
        url:    "https://res.cloudinary.com/didkrwhbu/image/upload/v1762327030/amity_vmd34g.webp",
        width:  1200,
        height: 630,
        alt:    "Amity University Online Admission 2026",
      },
    ],
    locale: "en_IN",
    type:   "website",
  },

  twitter: {
    card:        "summary_large_image",
    title:       "Amity Online Admission 2026 | Apply Now",
    description: "Apply for UGC & AICTE approved online courses at Amity University Online. Flexible fees, scholarships, and No Cost EMI available.",
    images:      ["https://res.cloudinary.com/didkrwhbu/image/upload/v1762327030/amity_vmd34g.webp"],
  },

  robots: {
    index: true, follow: true,
    googleBot: {
      index: true, follow: true,
      "max-video-preview": -1, "max-image-preview": "large", "max-snippet": -1,
    },
  },

  authors:         [{ name: "Degree University" }],
  publisher:       "Degree University",
  formatDetection: { email: false, address: false, telephone: false },
};

// ─── Schema: Organization ─────────────────────────────────────────────────────
const organizationSchema = {
  "@context":    "https://schema.org",
  "@type":       "EducationalOrganization",
  name:          "Amity University Online",
  alternateName: "Amity Online",
  url:           "https://degreeuniversity.online/amity-university-online",
  logo:          "https://degreeuniversity.online/amity.svg",
  contactPoint: {
    "@type": "ContactPoint", telephone: "+91 7042646766",
    contactType: "admissions", areaServed: "IN", availableLanguage: ["en", "hi"],
  },
  address: {
    "@type": "PostalAddress", addressLocality: "Noida",
    addressRegion: "Uttar Pradesh", postalCode: "201301", addressCountry: "IN",
  },
  sameAs: [
    "https://www.facebook.com/AmityUniversityOnline",
    "https://www.linkedin.com/school/amity-university-online/",
    "https://x.com/AmityUniversity",
  ],
  // Star ratings in SERP — lifts CTR for education landing pages
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8", reviewCount: "1600", bestRating: "5", worstRating: "1",
  },
};

// ─── Schema: Landing Page ─────────────────────────────────────────────────────
const landingPageSchema = {
  "@context": "https://schema.org",
  "@type":    ["WebPage", "LandingPage"],
  name:        "Amity University Online Admission 2026 | Apply Now",
  description: "Apply for Amity University Online UG and PG programs. UGC & AICTE approved degrees with scholarships and No Cost EMI.",
  url:         "https://degreeuniversity.online/amity-university-online",
  inLanguage:  "en-IN",
  publisher: {
    "@type": "EducationalOrganization",
    name:    "Amity University Online",
    url:     "https://degreeuniversity.online/amity-university-online",
  },
};

// ─── Schema: FAQPage ─────────────────────────────────────────────────────────
const faqSchema = {
  "@context": "https://schema.org",
  "@type":    "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "What is Amity University Online?", acceptedAnswer: { "@type": "Answer", text: "Amity University Online is the online learning division of Amity University, India's leading private university. It offers UGC-approved online degree programs including MBA, BCA, BBA, MCA, and B.Com, recognised across industries globally." } },
    { "@type": "Question", name: "What is the Admission Process for Amity Online?", acceptedAnswer: { "@type": "Answer", text: "The admission process is entirely online. You submit an enquiry form, receive counselling from an expert, upload your documents, pay the application fee, and receive an admission confirmation — all from the comfort of your home." } },
    { "@type": "Question", name: "How Do I Choose My Course at Amity Online?", acceptedAnswer: { "@type": "Answer", text: "You can choose from programs such as MBA, BCA, BBA, MCA, B.Com, and more. Our expert counsellors are available to help you select the right program based on your educational background, career goals, and interests." } },
    { "@type": "Question", name: "How Will I Get Admission Confirmation from Amity Online?", acceptedAnswer: { "@type": "Answer", text: "Once your application and documents are verified, you will receive an official admission confirmation via email and SMS from Amity University Online." } },
    { "@type": "Question", name: "What is the Cancellation Policy for Amity Online Admission?", acceptedAnswer: { "@type": "Answer", text: "Amity University Online has a defined cancellation and refund policy. Please contact our admissions team or refer to the official Amity Online website for details on deadlines and refund percentages." } },
    { "@type": "Question", name: "What Academic Support Services Are Available to Online Students?", acceptedAnswer: { "@type": "Answer", text: "Online students at Amity have access to live sessions, recorded lectures, AI tutor Prof. Ask, the Amigo mobile learning app, library resources, and dedicated academic mentors throughout their program." } },
    { "@type": "Question", name: "How Are the Forms of Assessments Distributed in Online Programs?", acceptedAnswer: { "@type": "Answer", text: "Assessments typically include online assignments, project-based evaluations, proctored semester-end examinations, and industry case studies, distributed across the semester to ensure continuous learning and fair evaluation." } },
    { "@type": "Question", name: "Are Student Loans Available For Online Students at Amity?", acceptedAnswer: { "@type": "Answer", text: "Yes. Amity Online offers No Cost EMI options for all programs. Additionally, select partner banks offer education loans for eligible students. Contact our admissions team for specific loan and financing options." } },
    { "@type": "Question", name: "How Are Online Degrees from Amity Certified?", acceptedAnswer: { "@type": "Answer", text: "Degrees from Amity University Online are issued by Amity University and are UGC-entitled, making them valid for government jobs, higher education, and recognised by employers across India and globally." } },
  ],
};

// ─── Schema: Courses ─────────────────────────────────────────────────────────
const coursesSchema = {
  "@context": "https://schema.org",
  "@type":    "ItemList",
  name:       "Amity University Online Programs 2026",
  url:        "https://degreeuniversity.online/amity-university-online",
  itemListElement: [
    { "@type": "ListItem", position: 1,  item: { "@type": "Course", name: "Master of Business Administration (MBA)",                          description: "UGC-approved online MBA with multiple specializations. 2-year program for working professionals.", provider: { "@type": "EducationalOrganization", name: "Amity University Online", url: "https://degreeuniversity.online" }, timeRequired: "P2Y", educationalLevel: "Postgraduate",  inLanguage: "en-IN", url: "https://degreeuniversity.online" } },
    { "@type": "ListItem", position: 2,  item: { "@type": "Course", name: "Bachelor of Computer Applications (BCA)",                          description: "UGC-approved online BCA degree. 3-year undergraduate program in computer science.", provider: { "@type": "EducationalOrganization", name: "Amity University Online", url: "https://degreeuniversity.online" }, timeRequired: "P3Y", educationalLevel: "Undergraduate", inLanguage: "en-IN", url: "https://degreeuniversity.online" } },
    { "@type": "ListItem", position: 3,  item: { "@type": "Course", name: "Bachelor of Business Administration (BBA)",                        description: "UGC-approved online BBA degree. 3-year undergraduate program in business and management.", provider: { "@type": "EducationalOrganization", name: "Amity University Online", url: "https://degreeuniversity.online" }, timeRequired: "P3Y", educationalLevel: "Undergraduate", inLanguage: "en-IN", url: "https://degreeuniversity.online" } },
    { "@type": "ListItem", position: 4,  item: { "@type": "Course", name: "Master of Computer Applications (MCA)",                            description: "UGC-approved online MCA. 2-year postgraduate program in advanced computer applications.", provider: { "@type": "EducationalOrganization", name: "Amity University Online", url: "https://degreeuniversity.online" }, timeRequired: "P2Y", educationalLevel: "Postgraduate",  inLanguage: "en-IN", url: "https://degreeuniversity.online" } },
    { "@type": "ListItem", position: 5,  item: { "@type": "Course", name: "MBA With Dual Specialization",                                     description: "Online MBA with dual specialization tracks. 2-year postgraduate degree.", provider: { "@type": "EducationalOrganization", name: "Amity University Online", url: "https://degreeuniversity.online" }, timeRequired: "P2Y", educationalLevel: "Postgraduate",  inLanguage: "en-IN", url: "https://degreeuniversity.online" } },
    { "@type": "ListItem", position: 6,  item: { "@type": "Course", name: "BBA + MBA Integrated Degree Program",                              description: "5-year integrated online BBA + MBA dual degree.", provider: { "@type": "EducationalOrganization", name: "Amity University Online", url: "https://degreeuniversity.online" }, timeRequired: "P5Y", educationalLevel: "Integrated",    inLanguage: "en-IN", url: "https://degreeuniversity.online" } },
    { "@type": "ListItem", position: 7,  item: { "@type": "Course", name: "B.Com + MBA Integrated Degree Program",                            description: "5-year integrated online B.Com + MBA dual degree.", provider: { "@type": "EducationalOrganization", name: "Amity University Online", url: "https://degreeuniversity.online" }, timeRequired: "P5Y", educationalLevel: "Integrated",    inLanguage: "en-IN", url: "https://degreeuniversity.online" } },
    { "@type": "ListItem", position: 8,  item: { "@type": "Course", name: "BCA + MCA Integrated Degree Program",                              description: "5-year integrated online BCA + MCA dual degree.", provider: { "@type": "EducationalOrganization", name: "Amity University Online", url: "https://degreeuniversity.online" }, timeRequired: "P5Y", educationalLevel: "Integrated",    inLanguage: "en-IN", url: "https://degreeuniversity.online" } },
    { "@type": "ListItem", position: 9,  item: { "@type": "Course", name: "BBA with Specialization in Travel and Tourism Management",         description: "3-year online BBA with specialization in travel and tourism.", provider: { "@type": "EducationalOrganization", name: "Amity University Online", url: "https://degreeuniversity.online" }, timeRequired: "P3Y", educationalLevel: "Undergraduate", inLanguage: "en-IN", url: "https://degreeuniversity.online" } },
    { "@type": "ListItem", position: 10, item: { "@type": "Course", name: "Master of Commerce — Financial Management (M.Com)",                description: "2-year online M.Com with specialization in Financial Management.", provider: { "@type": "EducationalOrganization", name: "Amity University Online", url: "https://degreeuniversity.online" }, timeRequired: "P2Y", educationalLevel: "Postgraduate",  inLanguage: "en-IN", url: "https://degreeuniversity.online" } },
  ],
};

// ─── Schema: BreadcrumbList ───────────────────────────────────────────────────
const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type":    "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home",                    item: "https://degreeuniversity.online" },
    { "@type": "ListItem", position: 2, name: "Amity University Online", item: "https://degreeuniversity.online" },
    { "@type": "ListItem", position: 3, name: "Admission 2026",          item: "https://degreeuniversity.online" },
  ],
};

// ─── Root Layout ──────────────────────────────────────────────────────────────
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN">
      <head>

        {/* ── Sitemap ───────────────────────────────────────────────────── */}
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />

        {/* ── LCP Preload (mobile 400px / desktop 800px) ────────────────── */}
        <link rel="preload" as="image" type="image/webp" media="(max-width: 768px)"
          href="https://res.cloudinary.com/didkrwhbu/image/upload/w_400,q_auto,f_auto/v1762327155/girlImage_w9ulny.webp"
        />
        <link rel="preload" as="image" type="image/webp" media="(min-width: 769px)"
          href="https://res.cloudinary.com/didkrwhbu/image/upload/w_800,q_auto,f_auto/v1762327155/girlImage_w9ulny.webp"
        />

        {/* ── Branding & Local SEO ──────────────────────────────────────── */}
        <meta name="theme-color"    content="#0B1E3A" />
        <meta name="geo.region"     content="IN-UP" />
        <meta name="geo.placename"  content="Noida, Uttar Pradesh" />
        <meta name="geo.position"   content="28.5355;77.3910" />
        <meta name="ICBM"           content="28.5355, 77.3910" />

        {/* ── Structured Data (5 schemas) ───────────────────────────────── */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(landingPageSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(coursesSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

        {/* ════════════════════════════════════════════════════════════════
            META (FACEBOOK) PIXEL  —  ID: ${META_PIXEL_ID}
            ─────────────────────────────────────────────────────────────
            • strategy="afterInteractive" — loads after hydration
            • fbq('track','PageView') fires automatically here on every page
            • Conversion events fired from page.tsx via window.fbq():
              ┌──────────────────────┬──────────────────────────────────┐
              │ Where                │ Event                            │
              ├──────────────────────┼──────────────────────────────────┤
              │ Enquiry modal open   │ fbq('track','InitiateCheckout')  │
              │ Apply Now click      │ fbq('track','AddToCart')         │
              │ Form submit success  │ fbq('track','Lead')              │
              └──────────────────────┴──────────────────────────────────┘
            • Create Custom Conversions in Meta Events Manager pointing
              to these standard events to use them in ad campaigns.
        ════════════════════════════════════════════════════════════════ */}
        <Script id="meta-pixel-init" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s){
              if(f.fbq)return;
              n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;
              n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)
            }(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '${META_PIXEL_ID}');
            fbq('track', 'PageView');
          `}
        </Script>

        {/* Meta Pixel noscript fallback (for JS-disabled browsers) */}
        {/* Next.js does not allow <noscript> in <head> via Script component,    */}
        {/* so this inline script appends the tracking pixel image at runtime.   */}
        <script
          id="meta-pixel-noscript"
          dangerouslySetInnerHTML={{
            __html: `
              (function(){
                var img=document.createElement('img');
                img.height=1; img.width=1; img.style.display='none';
                img.src='https://www.facebook.com/tr?id=${META_PIXEL_ID}&ev=PageView&noscript=1';
                img.alt='';
                document.head.appendChild(img);
              })();
            `,
          }}
        />

      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white`}>
        {children}
        <StickyContact />
      </body>
    </html>
  );
}