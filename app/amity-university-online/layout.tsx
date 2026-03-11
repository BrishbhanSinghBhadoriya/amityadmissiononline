import type { Metadata } from "next";
import StickyContact from "@/components/StickyContact";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Amity Online Admission 2026 | Apply Now",
  description:
    "Apply for Amity Online courses. Get UGC-entitled degrees with flexible learning, expert faculty, and global recognition.",
};

export default function AmityLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
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