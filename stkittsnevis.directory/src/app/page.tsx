'use client';

import React, { useState } from 'react';
import { Search, Utensils, GraduationCap, Briefcase, Plus } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const categories = [
  { name: 'Restaurants', icon: Utensils, color: '#FF6B00', count: 37, path: '/directory/restaurants' },
  { name: 'Schools', icon: GraduationCap, color: '#00D1FF', count: 42, path: '/directory/schools' },
  { name: 'Professional', icon: Briefcase, color: '#2ECC71', count: 89, path: '/directory/services' },
];

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="home-container">
      {/* Refined Hero Section */}
      <section className="hero">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
        
        <div className="container hero-content">
          <div className="hero-text">
            <div className="explore-badge">
               <span className="dot"></span>
               EXPLORE ST. KITTS & NEVIS
            </div>
            <h1 className="mockup-title">Discover the <span>Pulse of the Islands</span></h1>
            <p className="hero-desc">The ultimate business directory for finding the finest dining, education, and professional services across the Federation.</p>
            
            <div className="search-box-vibrant">
              <div className="input-group">
                <Search size={20} style={{ color: '#ff6b00' }} />
                <input 
                  type="text" 
                  placeholder="What are you looking for?" 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <button className="search-btn">Search Now</button>
            </div>
          </div>
          
          <div className="hero-visual">
             <div className="visual-card-main">
                <Image src="/hero-bg.png" alt="St. Kitts" fill priority />
             </div>
             <div className="visual-card-sub">
                <Image src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=600" alt="Island Culture" fill />
             </div>
             <div className="foliage-emoji">🍃</div>
          </div>
        </div>
      </section>

      {/* Category Grid */}
      <section className="categories-section container">
        <div className="section-header">
          <h2 className="vibrant-title">BUSINESS DIRECTORY</h2>
          <div className="title-underline"></div>
        </div>
        <div className="category-grid">
          {categories.map((cat) => (
            <Link href={cat.path} key={cat.name} className="cat-card">
               <div className="cat-icon" style={{ backgroundColor: cat.color }}>
                  <cat.icon size={32} color="white" />
               </div>
               <h3>{cat.name}</h3>
               <div className="cat-badge">VIEW ALL</div>
            </Link>
          ))}
          <div className="cat-card add-card">
               <div className="cat-icon" style={{ backgroundColor: '#1A1A1A' }}>
                  <Plus size={32} color="white" />
               </div>
               <h3>Your Business?</h3>
               <Link href="/pricing" className="cat-badge" style={{ backgroundColor: '#1A1A1A' }}>GET LISTED</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
