import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Amity Online Admission 2026 | Apply Now",
  description:
    "Apply for Amity Online courses. Get UGC-entitled degrees with flexible learning, expert faculty, and global recognition.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white`}
      >
        {children}

        {/* Mobile Sticky Contact Bar */}
        <div className="fixed bottom-0 left-0 w-full z-50 md:hidden">
          <div className="flex">

            {/* Call Button */}
            <a
              href="tel:+917042646766"
              className="w-1/2 bg-blue-900 text-white py-3 flex items-center justify-center gap-2 font-semibold"
            >
              📞 Call Now
            </a>

            {/* WhatsApp Button */}
            <a
              href="https://wa.me/917042646766"
              target="_blank"
              className="w-1/2 bg-green-500 text-white py-3 flex items-center justify-center gap-2 font-semibold"
            >
              💬 WhatsApp
            </a>

          </div>
        </div>

      </body>
    </html>
  );
}