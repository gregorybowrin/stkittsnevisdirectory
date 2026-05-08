import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "St. Kitts & Nevis Business Directory | Find Local Businesses",
  description: "The most comprehensive directory for businesses, restaurants, schools, and professional services in St. Kitts and Nevis. Monetize your listing today.",
  keywords: "St. Kitts, Nevis, Business Directory, Restaurants, Hotels, Lawyers, Doctors, Schools, Government Offices",
};

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Safety font-family backup */}
        <style>{`
          :root {
            --font-sans: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            --font-display: 'Outfit', 'Inter', sans-serif;
          }
          body { 
            margin: 0; 
            background-color: white; 
            color: #1a1a1a; 
            font-family: var(--font-sans);
          }
        `}</style>
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
