import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-display",
});

export const metadata: Metadata = {
  title: "St. Kitts & Nevis Business Directory | Find Local Businesses",
  description: "The most comprehensive directory for businesses, restaurants, schools, and professional services in St. Kitts and Nevis.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <style dangerouslySetInnerHTML={{ __html: `
:root {
  --primary: #ff6b00;
  --primary-glow: rgba(255, 107, 0, 0.3);
  --secondary: #00d1ff;
  --secondary-glow: rgba(0, 209, 255, 0.3);
  --accent: #2ecc71;
  --background: #fdfcf0;
  --foreground: #1a1a1a;
  --glass: rgba(255, 255, 255, 0.7);
  --glass-border: rgba(255, 255, 255, 0.4);
  --shadow: 0 20px 40px -10px rgba(0, 0, 0, 0.1);
  --font-sans: 'Inter', -apple-system, sans-serif;
  --font-display: 'Outfit', sans-serif;
}

* { margin: 0; padding: 0; box-sizing: border-box; }
body { 
  background: var(--background); 
  color: var(--foreground); 
  font-family: var(--font-sans); 
  margin: 0; 
  overflow-x: hidden;
  background-image: 
    radial-gradient(circle at 10% 20%, var(--secondary-glow) 0%, transparent 40%),
    radial-gradient(circle at 90% 80%, var(--primary-glow) 0%, transparent 40%);
}

.container { max-width: 1200px; margin: 0 auto; padding: 0 1.5rem; }

/* Premium Glassmorphism */
.glass-panel {
  background: var(--glass);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid var(--glass-border);
  box-shadow: var(--shadow);
  border-radius: 2rem;
}

/* Animations */
@keyframes float {
  0% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-20px) rotate(2deg); }
  100% { transform: translateY(0px) rotate(0deg); }
}

.animate-float { animation: float 6s ease-in-out infinite; }

/* Navbar */
.navbar { 
  background: var(--glass);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid var(--glass-border);
  padding: 1.25rem 0; 
  position: sticky; 
  top: 0; 
  z-index: 1000; 
}
.navbar-inner { display: flex; justify-content: space-between; align-items: center; }
.logo { font-family: var(--font-display); font-size: 2rem; font-weight: 900; color: var(--primary); text-decoration: none; display: flex; align-items: center; gap: 0.5rem; letter-spacing: -1px; }
.logo span { color: var(--secondary); }

.btn-primary { 
  background: linear-gradient(135deg, var(--primary), #ff8c00);
  color: white; 
  padding: 1rem 2.5rem; 
  border-radius: 100px; 
  font-weight: 800; 
  border: none; 
  cursor: pointer; 
  text-decoration: none; 
  box-shadow: 0 10px 20px var(--primary-glow);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
.btn-primary:hover { transform: scale(1.05) translateY(-2px); box-shadow: 0 15px 30px var(--primary-glow); }

/* Hero */
.hero { padding: 10rem 0 8rem; position: relative; min-height: 90vh; display: flex; align-items: center; }
.blob { position: absolute; border-radius: 50%; filter: blur(80px); z-index: 0; opacity: 0.3; }
.blob-1 { width: 500px; height: 500px; background: var(--secondary); top: -100px; right: -100px; }
.blob-2 { width: 400px; height: 400px; background: var(--primary); bottom: -100px; left: -100px; }

.hero-content { position: relative; z-index: 10; display: grid; grid-template-columns: 1fr 1fr; gap: 6rem; align-items: center; }
.hero-title { font-size: 5.5rem; line-height: 1; margin-bottom: 2rem; font-weight: 900; }
.text-gradient { background: linear-gradient(135deg, var(--primary), var(--secondary)); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
.hero-subtitle { font-size: 1.4rem; color: #555; max-width: 550px; margin-bottom: 3.5rem; line-height: 1.6; }

.search-container { padding: 0.75rem; display: flex; gap: 1rem; max-width: 650px; }
.search-input-group { flex: 1; display: flex; align-items: center; gap: 1rem; padding: 0 1.5rem; }
.search-input-group input { border: none; background: transparent; outline: none; font-size: 1.1rem; width: 100%; font-weight: 500; }

.visual-container { position: relative; height: 600px; display: flex; align-items: center; justify-content: center; }
.main-image-card { width: 85%; height: 500px; position: relative; border-radius: 4rem; overflow: hidden; transform: rotate(-3deg); box-shadow: var(--shadow); border: 12px solid white; }

.floating-card { position: absolute; padding: 1.25rem 2rem; display: flex; align-items: center; gap: 1.25rem; z-index: 20; }
.card-1 { top: 10%; right: -5%; transform: rotate(5deg); }
.card-2 { bottom: 15%; left: -10%; transform: rotate(-5deg); }

.card-icon { width: 45px; height: 45px; border-radius: 1rem; display: flex; align-items: center; justify-content: center; font-size: 1.5rem; }
.card-icon.orange { background: var(--primary); }
.card-icon.turquoise { background: var(--secondary); }

.cat-card { padding: 4rem 3rem; border-radius: 4rem; background: #f8fbfd; text-decoration: none; color: inherit; transition: all 0.4s; position: relative; }
.cat-card:hover { transform: translateY(-20px); background: white; box-shadow: 0 40px 80px rgba(0, 209, 255, 0.15); }
.cat-icon-wrapper { width: 80px; height: 80px; border-radius: 2.5rem; display: flex; align-items: center; justify-content: center; margin-bottom: 2.5rem; font-size: 2.5rem; }

.footer { background: #111; color: white; padding: 10rem 0 5rem; }

@media (max-width: 992px) {
  .hero-title { font-size: 4rem; }
  .hero-content { grid-template-columns: 1fr; text-align: center; }
  .main-image-card { width: 100%; height: 400px; transform: rotate(0); }
  .card-1, .card-2 { display: none; }
}

        ` }} />
      </head>
      <body className={`${inter.variable} ${outfit.variable}`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <div style={{ position: 'fixed', bottom: '10px', right: '10px', background: 'var(--secondary)', color: 'white', padding: '5px 15px', borderRadius: '100px', fontSize: '12px', zIndex: 10000, fontWeight: '900', boxShadow: 'var(--shadow)' }}>
          STABLE PREMIUM EDITION
        </div>
      </body>
    </html>
  );
}
