import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

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
  /* Color Palette - Vibrant Caribbean Modernism */
  --primary: #ff6b00; /* Sunset Orange */
  --primary-glow: rgba(255, 107, 0, 0.3);
  --secondary: #00d1ff; /* Tropical Turquoise */
  --secondary-glow: rgba(0, 209, 255, 0.3);
  --accent: #2ecc71; /* Jungle Green */
  --background: #fdfcf0; /* Sand White */
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
  padding: 1rem 2rem; 
  border-radius: 100px; 
  font-weight: 800; 
  border: none; 
  cursor: pointer; 
  text-decoration: none; 
  box-shadow: 0 10px 20px var(--primary-glow);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
.btn-primary:hover { transform: scale(1.05) translateY(-2px); box-shadow: 0 15px 30px var(--primary-glow); }

/* Typography */
h1, h2, h3 { font-family: var(--font-display); letter-spacing: -0.04em; }

/* Footer Custom Styles */
.footer { background: #111; color: white; padding: 10rem 0 5rem; position: relative; overflow: hidden; }
.footer::before { content: ''; position: absolute; top: 0; left: 0; right: 0; height: 1px; background: linear-gradient(90deg, transparent, var(--secondary), transparent); }

        ` }} />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <div style={{ position: 'fixed', bottom: '10px', right: '10px', background: 'var(--secondary)', color: 'white', padding: '5px 15px', borderRadius: '100px', fontSize: '12px', zIndex: 10000, fontWeight: '900', boxShadow: 'var(--shadow)' }}>
          PREMIUM VIBRANT EDITION
        </div>
      </body>
    </html>
  );
}
