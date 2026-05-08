'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="home-wrapper">
      <section className="hero">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
        
        <div className="container hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Experience the <br />
              <span className="text-gradient">Pulse of Paradise</span>
            </h1>
            
            <p className="hero-subtitle">
              The premium gateway to the finest dining, elite education, and world-class professional services across the Federation.
            </p>

            <div className="search-container glass-panel">
              <div className="search-input-group">
                <span>🔍</span>
                <input 
                  type="text" 
                  placeholder="What are you looking for?" 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <button className="btn-primary">Search Now</button>
            </div>
          </div>

          <div className="hero-visual">
            <div className="visual-container animate-float">
              <div className="main-image-card">
                <Image 
                  src="/hero-bg.png" 
                  alt="St. Kitts Aerial" 
                  fill 
                  style={{ objectFit: 'cover' }}
                />
              </div>
              
              <div className="floating-card glass-panel card-1">
                <div className="card-icon orange">🍴</div>
                <div>
                  <p style={{ fontSize: '0.7rem', fontWeight: 800, color: '#888' }}>TOP RATED</p>
                  <p style={{ fontWeight: 800 }}>Fine Dining</p>
                </div>
              </div>

              <div className="floating-card glass-panel card-2">
                <div className="card-icon turquoise">⭐</div>
                <div>
                  <p style={{ fontSize: '0.7rem', fontWeight: 800, color: '#888' }}>NEW LISTINGS</p>
                  <p style={{ fontWeight: 800 }}>Professional</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: '8rem 0', background: 'white' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
            <h2 style={{ fontSize: '3rem', fontWeight: 900 }}>Browse Categories</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
            {[
              { title: 'Fine Dining', icon: '🍴', color: '#ff6b00', link: '/directory/restaurants' },
              { title: 'Education', icon: '🎓', color: '#00d1ff', link: '/directory/schools' },
              { title: 'Professional', icon: '⚖️', color: '#2ecc71', link: '/directory/services' },
            ].map((cat, i) => (
              <Link href={cat.link} key={i} className="cat-card">
                <div className="cat-icon-wrapper" style={{ backgroundColor: cat.color + '15', color: cat.color }}>
                  {cat.icon}
                </div>
                <h3 style={{ fontSize: '1.8rem', fontWeight: 900, marginBottom: '0.5rem' }}>{cat.title}</h3>
                <p style={{ fontWeight: 600, color: '#666' }}>Explore local favorites</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
