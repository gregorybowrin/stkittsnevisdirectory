'use client';

import React, { useState } from 'react';
import { Search, MapPin, Utensils, GraduationCap, Briefcase, Plus, ChevronRight, Star, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const categories = [
  { name: 'Restaurants', icon: Utensils, color: '#FF6B00', count: 37, path: '/directory/restaurants' },
  { name: 'Schools', icon: GraduationCap, color: '#00D1FF', count: 42, path: '/directory/schools' },
  { name: 'Professional', icon: Briefcase, color: '#2ECC71', count: 89, path: '/directory/services' },
];

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const [location, setLocation] = useState('');

  return (
    <div className="home-container">
      {/* Dynamic Hero Section */}
      <section className="hero">
        <div className="container hero-content">
          <div className="hero-text">
            <span className="hero-badge">Discover the Magic</span>
            <h1>Explore St. Kitts & Nevis <span>Like Never Before</span></h1>
            <p>The ultimate business directory for finding the finest dining, education, and professional services across the Federation.</p>
            
            <div className="search-box-vibrant">
              <div className="input-group">
                <Search size={20} className="input-icon" />
                <input 
                  type="text" 
                  placeholder="What are you looking for?" 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <div className="divider"></div>
              <div className="input-group">
                <MapPin size={20} className="input-icon" />
                <input 
                  type="text" 
                  placeholder="Location..." 
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                />
              </div>
              <button className="search-btn">Search Now</button>
            </div>
          </div>
          <div className="hero-visual">
             <div className="main-visual-card">
                <Image 
                  src="/hero-bg.png" 
                  alt="St. Kitts and Nevis Aerial" 
                  fill
                  priority
                />
                <div className="floating-stat glass-card">
                   <Star fill="#FFD700" color="#FFD700" size={16} />
                   <span>500+ Verified Businesses</span>
                </div>
             </div>
             <div className="secondary-visual-card"></div>
          </div>
        </div>
      </section>

      {/* Category Grid */}
      <section className="categories-section container">
        <div className="section-header">
          <h2>Browse by Category</h2>
          <p>Find exactly what you need in seconds</p>
        </div>
        <div className="category-grid-vibrant">
          {categories.map((cat) => (
            <Link href={cat.path} key={cat.name} className="cat-card-vibrant">
               <div className="cat-icon-vibrant" style={{ backgroundColor: cat.color }}>
                  <cat.icon size={28} color="white" />
               </div>
               <h3>{cat.name}</h3>
               <p>{cat.count} Businesses</p>
               <div className="cat-arrow">
                  <ArrowRight size={18} />
               </div>
            </Link>
          ))}
          <div className="cat-card-vibrant add-business">
               <div className="cat-icon-vibrant" style={{ backgroundColor: '#1A1A1A' }}>
                  <Plus size={28} color="white" />
               </div>
               <h3>Your Business?</h3>
               <p>Get listed today</p>
               <Link href="/pricing" className="text-link">Learn More</Link>
          </div>
        </div>
      </section>

      {/* Featured Section */}
      <section className="featured-section container">
        <div className="featured-banner glass-card">
           <div className="featured-content">
              <h3>Boost Your Visibility</h3>
              <p>Join hundreds of local businesses and reach thousands of potential customers daily. Our premium listings offer 10x more engagement.</p>
              <Link href="/pricing" className="btn-primary">View Pricing Plans</Link>
           </div>
           <div className="featured-image">
              <Image src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=800" alt="Premium Business" fill />
           </div>
        </div>
      </section>

      <style jsx>{`
        .home-container {
          padding-bottom: 5rem;
          overflow-x: hidden;
        }

        /* Hero Styling */
        .hero {
          padding: 6rem 0 8rem;
          background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
          position: relative;
        }

        .hero-content {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 4rem;
          align-items: center;
        }

        .hero-badge {
          display: inline-block;
          background: rgba(255, 107, 0, 0.1);
          color: var(--primary);
          padding: 0.5rem 1rem;
          border-radius: 100px;
          font-weight: 700;
          font-size: 0.85rem;
          margin-bottom: 1.5rem;
        }

        h1 {
          font-size: 4.5rem;
          line-height: 1.1;
          margin-bottom: 1.5rem;
          color: var(--foreground);
        }

        h1 span {
          color: var(--primary);
          display: block;
        }

        .hero-text p {
          font-size: 1.25rem;
          color: var(--muted);
          margin-bottom: 3rem;
          max-width: 600px;
          line-height: 1.6;
        }

        /* Search Box Vibrant */
        .search-box-vibrant {
          background: white;
          padding: 0.75rem;
          border-radius: 2rem;
          display: flex;
          align-items: center;
          box-shadow: 0 20px 50px rgba(0,0,0,0.1);
          max-width: 800px;
        }

        .input-group {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0 1.5rem;
          flex: 1;
        }

        .input-icon {
          color: var(--primary);
        }

        .input-group input {
          border: none;
          outline: none;
          padding: 0.75rem 0;
          width: 100%;
          font-size: 1rem;
          color: var(--foreground);
        }

        .divider {
          width: 1px;
          height: 30px;
          background: var(--border);
        }

        .search-btn {
          background: var(--primary);
          color: white;
          border: none;
          padding: 1rem 2rem;
          border-radius: 1.5rem;
          font-weight: 700;
          cursor: pointer;
          transition: transform 0.2s ease;
        }

        .search-btn:hover {
          transform: scale(1.05);
        }

        /* Hero Visual */
        .hero-visual {
          position: relative;
          height: 500px;
        }

        .main-visual-card {
          position: relative;
          width: 100%;
          height: 100%;
          border-radius: 3rem;
          overflow: hidden;
          transform: rotate(2deg);
          box-shadow: var(--shadow-lg);
          z-index: 2;
        }

        .main-visual-card :global(img) {
          object-fit: cover;
        }

        .secondary-visual-card {
          position: absolute;
          top: -20px;
          right: -20px;
          width: 100%;
          height: 100%;
          background: var(--secondary);
          border-radius: 3rem;
          z-index: 1;
          opacity: 0.3;
        }

        .floating-stat {
          position: absolute;
          bottom: 2rem;
          right: 2rem;
          padding: 1rem 1.5rem;
          display: flex;
          align-items: center;
          gap: 0.75rem;
          background: rgba(255,255,255,0.9);
          backdrop-filter: blur(10px);
          border-radius: 1rem;
          font-weight: 700;
          font-size: 0.9rem;
          box-shadow: 0 10px 20px rgba(0,0,0,0.1);
        }

        /* Category Grid Vibrant */
        .categories-section {
          padding-top: 8rem;
          margin-bottom: 8rem;
        }

        .section-header {
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

        .category-grid-vibrant {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 2rem;
        }

        .cat-card-vibrant {
          background: white;
          padding: 2.5rem;
          border-radius: 2.5rem;
          text-decoration: none;
          color: inherit;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          border: 1px solid var(--border);
          position: relative;
          overflow: hidden;
        }

        .cat-card-vibrant:hover {
          transform: translateY(-10px);
          border-color: var(--primary);
          box-shadow: var(--shadow-lg);
        }

        .cat-icon-vibrant {
          width: 60px;
          height: 60px;
          border-radius: 1.25rem;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 2rem;
          box-shadow: 0 10px 20px rgba(0,0,0,0.05);
        }

        .cat-card-vibrant h3 {
          font-size: 1.5rem;
          margin-bottom: 0.5rem;
        }

        .cat-card-vibrant p {
          color: var(--muted);
          font-weight: 500;
        }

        .cat-arrow {
          position: absolute;
          bottom: 2.5rem;
          right: 2.5rem;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: var(--surface);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--primary);
          transition: all 0.3s ease;
        }

        .cat-card-vibrant:hover .cat-arrow {
          background: var(--primary);
          color: white;
        }

        .add-business {
           background: var(--surface);
        }

        .text-link {
          display: inline-block;
          margin-top: 1rem;
          color: var(--primary);
          font-weight: 700;
          text-decoration: none;
          font-size: 0.9rem;
        }

        /* Featured Banner */
        .featured-banner {
          display: grid;
          grid-template-columns: 1fr 1fr;
          overflow: hidden;
          padding: 0;
          background: var(--foreground);
          color: white;
          border-radius: 3rem;
        }

        .featured-content {
          padding: 5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: 1.5rem;
        }

        .featured-content h3 {
          font-size: 2.5rem;
        }

        .featured-content p {
          font-size: 1.1rem;
          opacity: 0.8;
          line-height: 1.6;
        }

        .featured-image {
          position: relative;
          min-height: 400px;
        }

        .featured-image :global(img) {
          object-fit: cover;
        }

        @media (max-width: 992px) {
          .hero-content {
            grid-template-columns: 1fr;
            text-align: center;
          }
          .hero-text p {
            margin: 0 auto 3rem;
          }
          .search-box-vibrant {
            flex-direction: column;
            border-radius: 2rem;
            gap: 1rem;
          }
          .divider {
            display: none;
          }
          .search-btn {
            width: 100%;
          }
          h1 {
            font-size: 3rem;
          }
          .hero-visual {
            height: 350px;
          }
          .featured-banner {
            grid-template-columns: 1fr;
          }
          .featured-content {
            padding: 3rem;
          }
        }
      `}</style>
    </div>
  );
}
