'use client';

import React, { useState } from 'react';
import { Search, MapPin, Utensils, Hotel, GraduationCap, Briefcase, Plus, TrendingUp, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const categories = [
  { name: 'Restaurants', icon: Utensils, color: '#FF6B6B', count: 124 },
  { name: 'Hotels', icon: Hotel, color: '#4D96FF', count: 56 },
  { name: 'Schools', icon: GraduationCap, color: '#6BCB77', count: 42 },
  { name: 'Professional', icon: Briefcase, color: '#FFD93D', count: 89 },
];

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <main className="home-container">
      {/* Hero Section */}
      <section className="hero">
        <Image 
          src="/hero-bg.png" 
          alt="St. Kitts and Nevis" 
          fill 
          priority 
          className="hero-image"
        />
        <div className="hero-overlay"></div>
        <div className="container hero-content">
          <div className="hero-badge">
            <TrendingUp size={14} />
            <span>The #1 Directory in the Federation</span>
          </div>
          <h1>Find Everything in <span className="highlight">St. Kitts & Nevis</span></h1>
          <p className="hero-subtitle">Discover the best restaurants, schools, professional services, and hidden gems across the islands.</p>
          
          <div className="search-box-container glass-card">
            <div className="search-input-group">
              <Search className="search-icon" size={20} />
              <input 
                type="text" 
                placeholder="What are you looking for?" 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="divider"></div>
            <div className="search-input-group">
              <MapPin className="search-icon" size={20} />
              <select className="location-select">
                <option>All Locations</option>
                <option>Basseterre</option>
                <option>Charlestown</option>
                <option>Frigate Bay</option>
                <option>Sandy Point</option>
              </select>
            </div>
            <button className="btn-primary search-btn">Search Directory</button>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="categories-section container">
        <div className="section-header">
          <h2>Browse by Category</h2>
          <p>Explore listings by industry and service type</p>
        </div>
        <div className="categories-grid">
          <Link href="/directory/restaurants" className="category-card glass-card">
            <div className="icon-wrapper" style={{ backgroundColor: `#FF6B6B20`, color: '#FF6B6B' }}>
              <Utensils size={28} />
            </div>
            <h3>Restaurants</h3>
            <p>124 Listings</p>
            <div className="category-arrow">
              <ChevronRight size={18} />
            </div>
          </Link>
          <Link href="/directory/schools" className="category-card glass-card">
            <div className="icon-wrapper" style={{ backgroundColor: `#6BCB7720`, color: '#6BCB77' }}>
              <GraduationCap size={28} />
            </div>
            <h3>Schools</h3>
            <p>42 Listings</p>
            <div className="category-arrow">
              <ChevronRight size={18} />
            </div>
          </Link>
          {categories.filter(c => c.name !== 'Restaurants' && c.name !== 'Schools').map((cat) => (
            <div key={cat.name} className="category-card glass-card">
              <div className="icon-wrapper" style={{ backgroundColor: `${cat.color}20`, color: cat.color }}>
                <cat.icon size={28} />
              </div>
              <h3>{cat.name}</h3>
              <p>{cat.count} Listings</p>
              <div className="category-arrow">
                <ChevronRight size={18} />
              </div>
            </div>
          ))}
          <div className="category-card add-listing glass-card">
            <div className="icon-wrapper add">
              <Plus size={28} />
            </div>
            <h3>Add Your Business</h3>
            <p>Get discovered today</p>
            <div className="category-arrow">
              <ChevronRight size={18} />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container cta-content glass-card">
          <div className="cta-text">
            <h2>Ready to grow your business?</h2>
            <p>Join over 500+ local businesses already listed on the Federation's most trusted directory. Increase your visibility and attract more customers.</p>
            <div className="cta-buttons">
              <button className="btn-primary">List Your Business</button>
              <button className="btn-secondary">View Pricing</button>
            </div>
          </div>
          <div className="cta-image-wrapper">
             <div className="stats-box glass-card">
                <div className="stat">
                  <h4>50k+</h4>
                  <p>Monthly Visits</p>
                </div>
                <div className="stat">
                  <h4>1.2k+</h4>
                  <p>Total Listings</p>
                </div>
             </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .home-container {
          min-height: 100vh;
        }

        .hero {
          position: relative;
          height: 80vh;
          min-height: 600px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          text-align: center;
        }

        .hero-image {
          object-fit: cover;
          z-index: -2;
        }

        .hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.7));
          z-index: -1;
        }

        .hero-content {
          max-width: 900px;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .hero-badge {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(255, 255, 255, 0.2);
          backdrop-filter: blur(8px);
          padding: 0.5rem 1rem;
          border-radius: 100px;
          font-size: 0.85rem;
          font-weight: 600;
          margin-bottom: 1.5rem;
          border: 1px solid rgba(255, 255, 255, 0.3);
        }

        h1 {
          font-size: clamp(2.5rem, 8vw, 4.5rem);
          line-height: 1.1;
          margin-bottom: 1.5rem;
        }

        .highlight {
          color: var(--accent);
        }

        .hero-subtitle {
          font-size: 1.25rem;
          opacity: 0.9;
          margin-bottom: 3rem;
          max-width: 600px;
        }

        .search-box-container {
          display: flex;
          align-items: center;
          padding: 0.75rem;
          width: 100%;
          max-width: 850px;
          gap: 0.5rem;
        }

        .search-input-group {
          flex: 1;
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0 1rem;
        }

        .search-icon {
          color: var(--muted);
        }

        input, .location-select {
          background: transparent;
          border: none;
          outline: none;
          color: inherit;
          font-size: 1rem;
          width: 100%;
          padding: 0.75rem 0;
        }

        .divider {
          width: 1px;
          height: 30px;
          background: var(--border);
        }

        .search-btn {
          white-space: nowrap;
        }

        .categories-section {
          padding: 6rem 0;
        }

        .section-header {
          text-align: center;
          margin-bottom: 4rem;
        }

        .section-header h2 {
          font-size: 2.5rem;
          margin-bottom: 0.5rem;
        }

        .section-header p {
          color: var(--muted);
          font-size: 1.1rem;
        }

        .categories-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 1.5rem;
        }

        .category-card {
          padding: 2rem;
          text-align: center;
          cursor: pointer;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .category-card:hover {
          transform: translateY(-5px);
          border-color: var(--primary);
        }

        .icon-wrapper {
          width: 64px;
          height: 64px;
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 1.5rem;
        }

        .icon-wrapper.add {
          background: rgba(0, 71, 171, 0.1);
          color: var(--primary);
        }

        .category-card h3 {
          font-size: 1.25rem;
          margin-bottom: 0.25rem;
        }

        .category-card p {
          color: var(--muted);
          font-size: 0.9rem;
        }

        .category-arrow {
          position: absolute;
          bottom: 1.5rem;
          right: 1.5rem;
          opacity: 0;
          transform: translateX(-10px);
          transition: all 0.3s ease;
          color: var(--primary);
        }

        .category-card:hover .category-arrow {
          opacity: 1;
          transform: translateX(0);
        }

        .cta-section {
          padding: 4rem 0 8rem;
        }

        .cta-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          padding: 4rem;
          align-items: center;
          background: linear-gradient(135deg, var(--surface), var(--background));
        }

        .cta-text h2 {
          font-size: 2.5rem;
          margin-bottom: 1.5rem;
        }

        .cta-text p {
          color: var(--muted);
          font-size: 1.1rem;
          margin-bottom: 2.5rem;
          line-height: 1.6;
        }

        .cta-buttons {
          display: flex;
          gap: 1rem;
        }

        .btn-secondary {
          background: transparent;
          border: 2px solid var(--border);
          padding: 0.75rem 1.5rem;
          border-radius: var(--radius);
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .btn-secondary:hover {
          border-color: var(--primary);
          color: var(--primary);
        }

        .cta-image-wrapper {
          position: relative;
          height: 300px;
          background: url('/hero-bg.png') center/cover;
          border-radius: var(--radius);
        }

        .stats-box {
          position: absolute;
          bottom: -2rem;
          left: -2rem;
          display: flex;
          gap: 2rem;
          padding: 2rem;
        }

        .stat h4 {
          font-size: 1.5rem;
          color: var(--primary);
        }

        .stat p {
          font-size: 0.8rem;
          color: var(--muted);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        @media (max-width: 768px) {
          .search-box-container {
            flex-direction: column;
            padding: 1.5rem;
          }
          
          .divider {
            width: 100%;
            height: 1px;
            margin: 0.5rem 0;
          }

          .cta-content {
            grid-template-columns: 1fr;
            padding: 2rem;
            text-align: center;
          }

          .cta-buttons {
            justify-content: center;
          }

          .cta-image-wrapper {
            display: none;
          }
        }
      `}</style>
    </main>
  );
}
