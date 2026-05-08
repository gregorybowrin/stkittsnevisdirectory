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
                <Search size={20} className="input-icon" />
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

      <style jsx>{`
        .home-container {
          padding-bottom: 5rem;
          background: #fff;
        }

        .hero {
          padding: 6rem 0 10rem;
          position: relative;
          background: #fdfcf0;
          overflow: hidden;
        }

        .blob {
          position: absolute;
          border-radius: 50%;
          filter: blur(80px);
          z-index: 1;
          opacity: 0.5;
        }

        .blob-1 {
          width: 400px;
          height: 400px;
          background: var(--primary);
          top: -100px;
          right: -100px;
        }

        .blob-2 {
          width: 300px;
          height: 300px;
          background: var(--secondary);
          bottom: -50px;
          left: -50px;
        }

        .hero-content {
          position: relative;
          z-index: 10;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
        }

        .explore-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
          background: var(--accent);
          color: white;
          padding: 0.6rem 1.25rem;
          border-radius: 100px;
          font-weight: 800;
          font-size: 0.8rem;
          margin-bottom: 2rem;
          box-shadow: 0 5px 15px rgba(46, 204, 113, 0.3);
        }

        .explore-badge .dot {
          width: 8px;
          height: 8px;
          background: white;
          border-radius: 50%;
        }

        .mockup-title {
          font-size: 4.5rem;
          line-height: 1;
          font-weight: 900;
          margin-bottom: 1.5rem;
          color: #1a1a1a;
          letter-spacing: -0.03em;
        }

        .mockup-title span {
          display: block;
          color: var(--primary);
        }

        .hero-desc {
          font-size: 1.2rem;
          color: #555;
          margin-bottom: 3.5rem;
          max-width: 500px;
          line-height: 1.6;
        }

        .search-box-vibrant {
          background: white;
          padding: 0.6rem;
          border-radius: 100px;
          display: flex;
          align-items: center;
          box-shadow: 0 20px 50px rgba(0,0,0,0.1);
          max-width: 600px;
        }

        .input-group {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 0 1.5rem;
          flex: 1;
        }

        .input-icon {
          color: var(--primary);
        }

        .input-group input {
          border: none;
          outline: none;
          padding: 0.8rem 0;
          width: 100%;
          font-size: 1.1rem;
          font-weight: 500;
        }

        .search-btn {
          background: var(--primary);
          color: white;
          border: none;
          padding: 1rem 2.5rem;
          border-radius: 100px;
          font-weight: 800;
          cursor: pointer;
          transition: transform 0.2s ease;
        }

        .search-btn:hover {
          transform: scale(1.05);
        }

        .hero-visual {
          position: relative;
          height: 500px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .visual-card-main {
          position: relative;
          width: 90%;
          height: 400px;
          border-radius: 3rem;
          overflow: hidden;
          z-index: 5;
          box-shadow: var(--shadow-lg);
          transform: rotate(-2deg);
        }

        .visual-card-sub {
          position: absolute;
          width: 50%;
          height: 250px;
          border-radius: 2rem;
          overflow: hidden;
          bottom: 20px;
          right: -20px;
          z-index: 6;
          box-shadow: var(--shadow-lg);
          transform: rotate(4deg);
          border: 8px solid white;
        }

        .visual-card-main :global(img), .visual-card-sub :global(img) {
          object-fit: cover;
        }

        .foliage-emoji {
          position: absolute;
          font-size: 8rem;
          bottom: -40px;
          left: -60px;
          z-index: 10;
          opacity: 0.8;
          transform: rotate(-20deg);
        }

        .categories-section {
          padding: 8rem 0;
        }

        .vibrant-title {
          font-size: 2.2rem;
          font-weight: 900;
          text-align: center;
          margin-bottom: 0.75rem;
          letter-spacing: 0.1em;
        }

        .title-underline {
          width: 60px;
          height: 6px;
          background: var(--primary);
          margin: 0 auto 5rem;
          border-radius: 10px;
        }

        .category-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
          gap: 2.5rem;
        }

        .cat-card {
          background: white;
          padding: 3rem 2rem;
          border-radius: 3rem;
          text-decoration: none;
          color: inherit;
          text-align: center;
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          box-shadow: 0 10px 30px rgba(0,0,0,0.05);
          border: 1px solid rgba(0,0,0,0.05);
        }

        .cat-card:hover {
          transform: translateY(-12px);
          box-shadow: 0 25px 50px rgba(255, 107, 0, 0.15);
        }

        .cat-icon {
          width: 70px;
          height: 70px;
          border-radius: 2rem;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 2rem;
        }

        .cat-card h3 {
          font-size: 1.4rem;
          font-weight: 800;
          margin-bottom: 1.5rem;
        }

        .cat-badge {
          display: inline-block;
          background: var(--secondary);
          color: white;
          padding: 0.4rem 1.25rem;
          border-radius: 100px;
          font-size: 0.7rem;
          font-weight: 800;
          text-decoration: none;
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
            margin: 0 auto;
          }
          .mockup-title {
            font-size: 3rem;
          }
          .hero-visual {
            height: 400px;
            margin-top: 2rem;
          }
        }
      `}</style>
    </div>
  );
}
