import type { Metadata } from "next";

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
  console.log("SKN Directory Version: 2.0 - Active");
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="/style.css" />
      </head>
      <body>
        <div style={{ position: 'fixed', bottom: '10px', right: '10px', background: '#ff6b00', color: 'white', padding: '5px 10px', borderRadius: '5px', fontSize: '10px', zIndex: 10000, fontWeight: 'bold' }}>
          SKN v2.0
        </div>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
