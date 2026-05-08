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

  return (
    <div className="home-container">
      {/* Dynamic Hero Section */}
      <section className="hero">
        {/* Background Blobs for Mockup Feel */}
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
        
        <div className="container hero-content">
          <div className="hero-text">
            <div className="explore-badge">
               <span className="dot"></span>
               EXPLORE ST. KITTS & NEVIS
            </div>
            <h1 className="mockup-title">Discover the <span>Pulse of the Islands</span></h1>
            <p>The ultimate business directory for finding the finest dining, education, and professional services across the Federation.</p>
            
            <div className="search-box-mockup">
              <div className="input-group">
                <Search size={20} className="input-icon" />
                <input 
                  type="text" 
                  placeholder="What are you looking for?" 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <button className="search-btn-vibrant">Search</button>
            </div>
          </div>
          <div className="hero-visual-mockup">
             <div className="visual-card-1">
                <Image src="/hero-bg.png" alt="St. Kitts" fill />
             </div>
             <div className="visual-card-2">
                <Image src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=600" alt="Island Life" fill />
             </div>
             <div className="foliage leaf-1">🍃</div>
          </div>
        </div>
      </section>

      {/* Category Grid */}
      <section className="categories-section container">
        <div className="section-header">
          <h2 className="vibrant-title">BUSINESS DIRECTORY</h2>
          <div className="title-underline"></div>
        </div>
        <div className="category-grid-mockup">
          {categories.map((cat) => (
            <Link href={cat.path} key={cat.name} className="cat-card-mockup">
               <div className="cat-icon-mockup" style={{ backgroundColor: cat.color }}>
                  <cat.icon size={32} color="white" />
               </div>
               <h3>{cat.name}</h3>
               <div className="view-all-badge">VIEW ALL</div>
            </Link>
          ))}
          <div className="cat-card-mockup add-business">
               <div className="cat-icon-mockup" style={{ backgroundColor: '#1A1A1A' }}>
                  <Plus size={32} color="white" />
               </div>
               <h3>Your Business?</h3>
               <Link href="/pricing" className="view-all-badge" style={{ backgroundColor: '#1A1A1A' }}>GET LISTED</Link>
          </div>
        </div>
      </section>

      {/* Featured Section */}
      <section className="featured-section container">
        <div className="featured-banner-vibrant">
           <div className="featured-content">
              <h3>Boost Your Visibility</h3>
              <p>Join hundreds of local businesses and reach thousands of potential customers daily. Our premium listings offer 10x more engagement.</p>
              <Link href="/pricing" className="btn-white">View Pricing Plans</Link>
           </div>
           <div className="featured-image">
              <Image src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=800" alt="Premium Business" fill />
           </div>
           <div className="foliage leaf-2">🌿</div>
        </div>
      </section>

      <style jsx>{`
        .home-container {
          padding-bottom: 5rem;
          overflow-x: hidden;
          background: #fff;
        }

        .hero {
          padding: 8rem 0 10rem;
          position: relative;
          background: #fdfcf0; /* Warm off-white */
          overflow: hidden;
        }

        /* Blobs */
        .blob {
          position: absolute;
          border-radius: 50%;
          filter: blur(80px);
          z-index: 1;
        }

        .blob-1 {
          width: 500px;
          height: 500px;
          background: rgba(255, 107, 0, 0.15);
          top: -100px;
          right: -100px;
        }

        .blob-2 {
          width: 400px;
          height: 400px;
          background: rgba(0, 209, 255, 0.15);
          bottom: -50px;
          left: -50px;
        }

        .hero-content {
          position: relative;
          z-index: 2;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
        }

        .explore-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.75rem;
          background: var(--accent);
          color: white;
          padding: 0.6rem 1.25rem;
          border-radius: 100px;
          font-weight: 800;
          font-size: 0.85rem;
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
          font-size: 5rem;
          line-height: 1;
          margin-bottom: 2rem;
          color: #1a1a1a;
          font-weight: 900;
          letter-spacing: -0.03em;
        }

        .mockup-title span {
          display: block;
          color: var(--primary);
        }

        .hero-text p {
          font-size: 1.25rem;
          color: #555;
          margin-bottom: 3.5rem;
          max-width: 500px;
          line-height: 1.6;
        }

        .search-box-mockup {
          background: white;
          padding: 0.5rem;
          border-radius: 100px;
          display: flex;
          align-items: center;
          box-shadow: 0 25px 60px rgba(0,0,0,0.1);
          max-width: 550px;
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
          padding: 1rem 0;
          width: 100%;
          font-size: 1.1rem;
          font-weight: 500;
        }

        .search-btn-vibrant {
          background: var(--primary);
          color: white;
          border: none;
          padding: 1rem 2.5rem;
          border-radius: 100px;
          font-weight: 800;
          cursor: pointer;
          transition: transform 0.2s ease;
        }

        .search-btn-vibrant:hover {
          transform: scale(1.05);
        }

        /* Hero Visual Mockup - Safety Fix */
        .hero-visual-mockup {
          position: relative;
          height: 500px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .visual-card-1 {
          position: relative;
          width: 90%;
          height: 400px;
          border-radius: 3rem;
          overflow: hidden;
          z-index: 2;
          box-shadow: var(--shadow-lg);
          transform: rotate(-2deg);
        }

        .visual-card-2 {
          position: absolute;
          width: 50%;
          height: 250px;
          border-radius: 2rem;
          overflow: hidden;
          bottom: 20px;
          right: -20px;
          z-index: 3;
          box-shadow: var(--shadow-lg);
          transform: rotate(4deg);
          border: 8px solid white;
        }

        .visual-card-1 :global(img), .visual-card-2 :global(img) {
          object-fit: cover;
        }

        .foliage {
          position: absolute;
          z-index: 4;
          opacity: 0.8;
          pointer-events: none;
        }

        .leaf-1 {
          font-size: 10rem;
          bottom: -50px;
          left: -100px;
          transform: rotate(-20deg);
        }

        /* Category Grid Mockup */
        .categories-section {
          padding: 10rem 0;
        }

        .vibrant-title {
          font-size: 2.5rem;
          font-weight: 900;
          text-align: center;
          margin-bottom: 1rem;
          letter-spacing: 0.1em;
        }

        .title-underline {
          width: 80px;
          height: 6px;
          background: var(--primary);
          margin: 0 auto 5rem;
          border-radius: 10px;
        }

        .category-grid-mockup {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
          gap: 2.5rem;
        }

        .cat-card-mockup {
          background: white;
          padding: 3rem 2rem;
          border-radius: 3.5rem;
          text-decoration: none;
          color: inherit;
          text-align: center;
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          box-shadow: 0 15px 35px rgba(0,0,0,0.05);
          border: 1px solid rgba(0,0,0,0.05);
        }

        .cat-card-mockup:hover {
          transform: translateY(-15px) scale(1.02);
          box-shadow: 0 30px 60px rgba(255, 107, 0, 0.15);
        }

        .cat-icon-mockup {
          width: 80px;
          height: 80px;
          border-radius: 2.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 2rem;
        }

        .cat-card-mockup h3 {
          font-size: 1.5rem;
          font-weight: 800;
          margin-bottom: 1.5rem;
        }

        .view-all-badge {
          display: inline-block;
          background: var(--secondary);
          color: white;
          padding: 0.4rem 1.25rem;
          border-radius: 100px;
          font-size: 0.75rem;
          font-weight: 800;
        }

        /* Featured Banner Vibrant */
        .featured-banner-vibrant {
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          background: linear-gradient(135deg, var(--primary), #ff914d);
          border-radius: 4rem;
          overflow: hidden;
          position: relative;
          box-shadow: var(--shadow-lg);
        }

        .featured-content {
          padding: 5rem;
          color: white;
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: 2rem;
        }

        .featured-content h3 {
          font-size: 3rem;
          font-weight: 900;
        }

        .featured-content p {
          font-size: 1.2rem;
          line-height: 1.6;
          opacity: 0.9;
        }

        .featured-image {
          position: relative;
          min-height: 500px;
        }

        .featured-image :global(img) {
          object-fit: cover;
        }

        .btn-white {
          background: white;
          color: var(--primary);
          padding: 1.2rem 2.5rem;
          border-radius: 100px;
          font-weight: 800;
          text-decoration: none;
          display: inline-block;
          width: fit-content;
          transition: transform 0.2s ease;
        }

        .btn-white:hover {
          transform: translateY(-5px);
        }

        .leaf-2 {
          font-size: 8rem;
          top: -40px;
          right: 20%;
          transform: rotate(45deg);
        }

        @media (max-width: 992px) {
          .hero-content {
            grid-template-columns: 1fr;
            text-align: center;
          }
          .hero-text p {
            margin: 0 auto 3rem;
          }
          .search-box-mockup {
            margin: 0 auto;
          }
          .mockup-title {
            font-size: 3.5rem;
          }
          .hero-visual-mockup {
            height: 400px;
          }
          .featured-banner-vibrant {
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
