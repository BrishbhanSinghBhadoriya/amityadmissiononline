"use client";
import React from "react";

export default function WelcomePage(): React.ReactElement {
  const callNumber = "+917042646766";
  const whatsappNumber = "917042646766";

  const handleCall = (): void => {
    if (typeof window !== "undefined") {
      window.location.href = `tel:${callNumber}`;
    }
  };

  const handleWhatsApp = (): void => {
    if (typeof window !== "undefined") {
      window.location.href = `https://wa.me/${whatsappNumber}`;
    }
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-6">
      <div className="max-w-md w-full bg-gradient-to-br from-blue-50 to-white border border-blue-100 rounded-2xl p-6 text-center shadow-sm">
        <h1 className="text-2xl md:text-3xl font-extrabold text-blue-900 mb-2">Thank You!</h1>
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
  );
}
