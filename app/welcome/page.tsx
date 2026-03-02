"use client";
import React, { useEffect } from "react";
import Script from "next/script";

export default function WelcomePage(): React.ReactElement {
  const callNumber = "+917042646766";
  const whatsappNumber = "917042646766";

  useEffect(() => {
    // ✅ Meta Pixel — Lead Event (WITH RETRY)
    let metaAttempts = 0;

    const fireMetaLead = () => {
      if (typeof (window as any).fbq === "function") {
        console.log("✅ Meta Pixel - Lead event fired!");
        (window as any).fbq("track", "Lead");
      } else if (metaAttempts < 20) {
        metaAttempts++;
        console.log(`⏳ Meta Pixel loading... attempt ${metaAttempts}`);
        setTimeout(fireMetaLead, 100);
      }
    };

    fireMetaLead();

    // ✅ Google Ads — Conversion Event
    let attempts = 0;
    const maxAttempts = 20;

    const fireConversion = () => {
      if (typeof (window as any).gtag === "function") {
        console.log("✅ Google Ads - Conversion fired!");
        (window as any).gtag("event", "conversion", {
          send_to: "AW-17973395671/gCapCIj1-YAcENeBsfpC",
        });
      } else if (attempts < maxAttempts) {
        attempts++;
        setTimeout(fireConversion, 100);
      } else {
        console.log("🛟 Google Ads fallback - dataLayer push!");
        (window as any).dataLayer = (window as any).dataLayer || [];
        (window as any).dataLayer.push({
          event: "conversion",
          send_to: "AW-17973395671/gCapCIj1-YAcENeBsfpC",
        });
      }
    };

    fireConversion();
  }, []);

  const handleCall = (): void => {
    window.location.href = `tel:${callNumber}`;
  };

  const handleWhatsApp = (): void => {
    window.location.href = `https://wa.me/${whatsappNumber}`;
  };

  return (
    <>
      {/* ✅ Meta Pixel Script - Welcome Page */}
      <Script
        id="meta-pixel-welcome"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
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
          `
        }}
      />

      <div className="min-h-screen bg-white flex items-center justify-center p-6">
        <div className="max-w-md w-full bg-gradient-to-br from-blue-50 to-white border border-blue-100 rounded-2xl p-6 text-center shadow-sm">
          <h1 className="text-2xl md:text-3xl font-extrabold text-blue-900 mb-2">
            Thank You!
          </h1>
          <p className="text-gray-600 text-sm mb-6">
            Your enquiry has been submitted. Our counsellor will contact you shortly.
          </p>
          <div className="grid grid-cols-2 gap-3">
            <button
              onClick={handleCall}
              className="bg-blue-900 text-white font-bold px-4 py-3 rounded-lg hover:bg-blue-800 transition-all shadow-md"
            >
              📞 Call Now
            </button>
            <button
              onClick={handleWhatsApp}
              className="bg-green-500 text-white font-bold px-4 py-3 rounded-lg hover:bg-green-600 transition-all shadow-md"
            >
              WhatsApp
            </button>
          </div>
        </div>
      </div>
    </>
  );
}