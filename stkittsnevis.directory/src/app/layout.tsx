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
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="/style.css" />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
