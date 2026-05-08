'use client';

import React, { useState } from 'react';
import { Search, MapPin, Utensils, GraduationCap, Gavel, ArrowRight, Star } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="home-wrapper">
      {/* Hero Section - High End Vibrant Edition */}
      <section className="hero">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
        <div className="blob blob-3"></div>
        
        <div className="container hero-content">
          <div className="hero-text fade-in">
            <div className="premium-badge">
              <span className="pulse"></span>
              EXPLORE ST. KITTS & NEVIS
            </div>
            
            <h1 className="hero-title">
              Experience the <br />
              <span className="text-gradient">Pulse of Paradise</span>
            </h1>
            
            <p className="hero-subtitle">
              The premium gateway to the finest dining, elite education, and world-class professional services across the Federation.
            </p>

            <div className="search-container glass-panel">
              <div className="search-input-group">
                <Search className="search-icon" size={24} />
                <input 
                  type="text" 
                  placeholder="What are you looking for?" 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <button className="btn-primary">Search Now</button>
            </div>
            
            <div className="hero-stats">
              <div className="stat-item">
                <strong>500+</strong>
                <span>Businesses</span>
              </div>
              <div className="stat-divider"></div>
              <div className="stat-item">
                <strong>50k+</strong>
                <span>Monthly Visitors</span>
              </div>
            </div>
          </div>

          <div className="hero-visual">
            <div className="visual-container animate-float">
              <div className="main-image-card">
                <Image 
                  src="/hero-bg.png" 
                  alt="St. Kitts Aerial" 
                  fill 
                  className="object-cover"
                />
                <div className="image-overlay"></div>
              </div>
              
              <div className="floating-card glass-panel card-1">
                <div className="card-icon orange"><Utensils size={20} /></div>
                <div>
                  <p className="card-label">Top Rated</p>
                  <p className="card-value">Fine Dining</p>
                </div>
              </div>

              <div className="floating-card glass-panel card-2">
                <div className="card-icon turquoise"><Star size={20} /></div>
                <div>
                  <p className="card-label">New Listings</p>
                  <p className="card-value">Professional</p>
                </div>
              </div>
              
              <div className="foliage-decorative">🌿</div>
              <div className="foliage-decorative-2">🌴</div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Grid - High Impact */}
      <section className="categories-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Browse Categories</h2>
            <div className="title-accent"></div>
          </div>

          <div className="category-grid">
            {[
              { title: 'Fine Dining', icon: <Utensils />, count: '85+', color: '#ff6b00', link: '/directory/restaurants' },
              { title: 'Education', icon: <GraduationCap />, count: '42+', color: '#00d1ff', link: '/directory/schools' },
              { title: 'Legal & Medical', icon: <Gavel />, count: '120+', color: '#2ecc71', link: '/directory/services' },
            ].map((cat, i) => (
              <Link href={cat.link} key={i} className="premium-cat-card">
                <div className="cat-icon-wrapper" style={{ backgroundColor: cat.color + '15', color: cat.color }}>
                  {cat.icon}
                </div>
                <h3>{cat.title}</h3>
                <p>{cat.count} Listings</p>
                <div className="cat-arrow">
                  <ArrowRight size={20} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <style jsx>{`
        .home-wrapper { overflow: hidden; }
        
        .hero { 
          padding: 10rem 0 8rem; 
          position: relative; 
          min-height: 90vh; 
          display: flex; 
          align-items: center;
        }

        .blob { 
          position: absolute; 
          border-radius: 50%; 
          filter: blur(80px); 
          z-index: 0; 
          opacity: 0.3; 
        }
        .blob-1 { width: 500px; height: 500px; background: var(--secondary); top: -100px; right: -100px; }
        .blob-2 { width: 400px; height: 400px; background: var(--primary); bottom: -100px; left: -100px; }
        .blob-3 { width: 300px; height: 300px; background: var(--accent); top: 40%; left: 30%; }

        .hero-content { 
          position: relative; 
          z-index: 10; 
          display: grid; 
          grid-template-columns: 1fr 1fr; 
          gap: 6rem; 
          align-items: center; 
        }

        .premium-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.75rem;
          background: #1a1a1a;
          color: white;
          padding: 0.6rem 1.25rem;
          border-radius: 100px;
          font-weight: 800;
          font-size: 0.75rem;
          letter-spacing: 0.1em;
          margin-bottom: 2rem;
        }

        .pulse {
          width: 8px;
          height: 8px;
          background: var(--accent);
          border-radius: 50%;
          box-shadow: 0 0 0 rgba(46, 204, 113, 0.4);
          animation: pulse-ring 2s infinite;
        }

        @keyframes pulse-ring {
          0% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(46, 204, 113, 0.7); }
          70% { transform: scale(1); box-shadow: 0 0 0 10px rgba(46, 204, 113, 0); }
          100% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(46, 204, 113, 0); }
        }

        .hero-title { 
          font-size: 5.5rem; 
          line-height: 1; 
          margin-bottom: 2rem; 
          font-weight: 900;
        }

        .text-gradient {
          background: linear-gradient(135deg, var(--primary), var(--secondary));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .hero-subtitle {
          font-size: 1.4rem;
          color: #555;
          max-width: 550px;
          margin-bottom: 3.5rem;
          line-height: 1.6;
        }

        .search-container {
          padding: 0.75rem;
          display: flex;
          gap: 1rem;
          max-width: 650px;
        }

        .search-input-group {
          flex: 1;
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 0 1.5rem;
        }

        .search-input-group input {
          border: none;
          background: transparent;
          outline: none;
          font-size: 1.1rem;
          width: 100%;
          font-weight: 500;
        }

        .search-icon { color: var(--primary); }

        .hero-stats {
          margin-top: 4rem;
          display: flex;
          align-items: center;
          gap: 3rem;
        }

        .stat-item strong { display: block; font-size: 2rem; font-family: var(--font-display); }
        .stat-item span { color: #888; font-weight: 600; font-size: 0.9rem; }
        .stat-divider { width: 1px; height: 40px; background: #ddd; }

        /* Hero Visual */
        .hero-visual { position: relative; }
        .visual-container { position: relative; height: 600px; display: flex; align-items: center; justify-content: center; }
        
        .main-image-card {
          width: 85%;
          height: 500px;
          position: relative;
          border-radius: 4rem;
          overflow: hidden;
          transform: rotate(-3deg);
          box-shadow: var(--shadow);
          border: 12px solid white;
        }
        
        .image-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(0,0,0,0.4), transparent);
        }

        .floating-card {
          position: absolute;
          padding: 1.25rem 2rem;
          display: flex;
          align-items: center;
          gap: 1.25rem;
          z-index: 20;
        }

        .card-1 { top: 10%; right: -5%; transform: rotate(5deg); }
        .card-2 { bottom: 15%; left: -10%; transform: rotate(-5deg); }

        .card-icon {
          width: 45px;
          height: 45px;
          border-radius: 1rem;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
        }
        .card-icon.orange { background: var(--primary); }
        .card-icon.turquoise { background: var(--secondary); }

        .card-label { font-size: 0.75rem; font-weight: 800; color: #888; text-transform: uppercase; }
        .card-value { font-weight: 800; font-family: var(--font-display); }

        .foliage-decorative { position: absolute; font-size: 10rem; bottom: -50px; left: -80px; z-index: 30; filter: drop-shadow(0 20px 40px rgba(0,0,0,0.2)); }
        .foliage-decorative-2 { position: absolute; font-size: 8rem; top: -40px; right: -40px; z-index: 30; opacity: 0.8; }

        /* Categories Section */
        .categories-section { padding: 10rem 0; background: white; border-radius: 6rem 6rem 0 0; margin-top: -4rem; position: relative; z-index: 50; }
        .section-header { text-align: center; margin-bottom: 6rem; }
        .section-title { font-size: 3.5rem; font-weight: 900; margin-bottom: 1rem; }
        .title-accent { width: 80px; height: 8px; background: var(--primary); margin: 0 auto; border-radius: 10px; }

        .category-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 3rem;
        }

        .premium-cat-card {
          padding: 4rem 3rem;
          border-radius: 4rem;
          background: #f8fbfd;
          text-decoration: none;
          color: inherit;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          border: 1px solid rgba(0,0,0,0.03);
          overflow: hidden;
        }

        .premium-cat-card:hover {
          transform: translateY(-20px);
          background: white;
          box-shadow: 0 40px 80px rgba(0, 209, 255, 0.15);
          border-color: var(--secondary);
        }

        .cat-icon-wrapper {
          width: 80px;
          height: 80px;
          border-radius: 2.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 2.5rem;
        }

        .premium-cat-card h3 { font-size: 2rem; margin-bottom: 1rem; font-weight: 900; }
        .premium-cat-card p { font-size: 1.1rem; color: #777; font-weight: 600; }

        .cat-arrow {
          position: absolute;
          bottom: 3rem;
          right: 3rem;
          width: 50px;
          height: 50px;
          background: #1a1a1a;
          color: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          transform: translateX(20px);
          opacity: 0;
          transition: all 0.4s;
        }

        .premium-cat-card:hover .cat-arrow {
          transform: translateX(0);
          opacity: 1;
        }

        @media (max-width: 1200px) {
          .hero-title { font-size: 4rem; }
          .hero-content { gap: 3rem; }
        }

        @media (max-width: 992px) {
          .hero-content { grid-template-columns: 1fr; text-align: center; }
          .hero-text { display: flex; flex-direction: column; align-items: center; }
          .hero-subtitle { margin: 0 auto 3rem; }
          .hero-stats { margin: 4rem auto 0; }
          .main-image-card { width: 100%; height: 400px; transform: rotate(0); }
          .hero-visual { margin-top: 4rem; }
          .card-1, .card-2 { display: none; }
        }
      `}</style>
    </div>
  );
}
