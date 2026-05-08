'use client';

import React, { useState } from 'react';
import { Utensils, MapPin, Phone, Star, Filter, Search, ChevronLeft } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import restaurantsData from '@/data/restaurants.json';

export default function RestaurantsPage() {
  const [filterIsland, setFilterIsland] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredRestaurants = restaurantsData.filter(res => {
    const matchesIsland = filterIsland === 'All' || res.island === filterIsland;
    const matchesSearch = res.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          res.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesIsland && matchesSearch;
  });

  return (
    <div className="directory-page">
      {/* Header */}
      <header className="page-header">
        <div className="container header-inner">
          <Link href="/" className="back-link">
            <ChevronLeft size={20} />
            Back to Home
          </Link>
          <div className="header-title">
            <div className="category-icon-large" style={{ backgroundColor: '#FF6B6B20', color: '#FF6B6B' }}>
              <Utensils size={32} />
            </div>
            <div>
              <h1>Restaurants</h1>
              <p>Discover the best dining experiences in St. Kitts & Nevis</p>
            </div>
          </div>
        </div>
      </header>

      {/* Filters & Search */}
      <section className="filter-bar container">
        <div className="search-wrapper glass-card">
          <Search size={18} className="search-icon" />
          <input 
            type="text" 
            placeholder="Search by name or cuisine..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className="filters">
          <div className="filter-group">
            <Filter size={16} />
            <span>Island:</span>
            <button 
              className={`filter-btn ${filterIsland === 'All' ? 'active' : ''}`}
              onClick={() => setFilterIsland('All')}
            >All</button>
            <button 
              className={`filter-btn ${filterIsland === 'St. Kitts' ? 'active' : ''}`}
              onClick={() => setFilterIsland('St. Kitts')}
            >St. Kitts</button>
            <button 
              className={`filter-btn ${filterIsland === 'Nevis' ? 'active' : ''}`}
              onClick={() => setFilterIsland('Nevis')}
            >Nevis</button>
          </div>
        </div>
      </section>

      {/* Listings Grid */}
      <section className="listings-section container">
        <div className="listings-grid">
          {filteredRestaurants.map((res) => (
            <div key={res.id} className="listing-card glass-card">
              <div className="listing-image">
                <Image src={res.image} alt={res.name} fill />
                <div className="listing-badge">{res.category}</div>
              </div>
              <div className="listing-content">
                <div className="listing-header">
                  <h3>{res.name}</h3>
                  <div className="rating">
                    <Star size={14} fill="currentColor" />
                    <span>4.8</span>
                  </div>
                </div>
                <div className="listing-info">
                  <div className="info-item">
                    <MapPin size={14} />
                    <span>{res.location}, {res.island}</span>
                  </div>
                  <div className="info-item">
                    <Phone size={14} />
                    <span>{res.phone}</span>
                  </div>
                </div>
                <div className="listing-tags">
                  {res.tags.map(tag => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>
                <Link href={`/listing/${res.id}`}>
                  <button className="btn-outline">View Details</button>
                </Link>
              </div>
            </div>
          ))}
        </div>
        {filteredRestaurants.length === 0 && (
          <div className="no-results">
            <h3>No restaurants found matching your criteria.</h3>
            <p>Try adjusting your search or filters.</p>
          </div>
        )}
      </section>

      <style jsx>{`
        .directory-page {
          min-height: 100vh;
          padding-bottom: 5rem;
        }

        .page-header {
          background: var(--surface);
          border-bottom: 1px solid var(--border);
          padding: 3rem 0;
          margin-bottom: 3rem;
        }

        .header-inner {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .back-link {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--muted);
          font-size: 0.9rem;
          transition: color 0.2s ease;
        }

        .back-link:hover {
          color: var(--primary);
        }

        .header-title {
          display: flex;
          align-items: center;
          gap: 1.5rem;
        }

        .category-icon-large {
          width: 64px;
          height: 64px;
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        h1 {
          font-size: 2.5rem;
          margin-bottom: 0.25rem;
        }

        .header-title p {
          color: var(--muted);
          font-size: 1.1rem;
        }

        .filter-bar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 2rem;
          margin-bottom: 3rem;
        }

        .search-wrapper {
          flex: 1;
          display: flex;
          align-items: center;
          padding: 0 1.25rem;
          max-width: 500px;
        }

        .search-icon {
          color: var(--muted);
        }

        .search-wrapper input {
          background: transparent;
          border: none;
          outline: none;
          padding: 1rem;
          width: 100%;
          color: inherit;
        }

        .filters {
          display: flex;
          gap: 2rem;
        }

        .filter-group {
          display: flex;
          align-items: center;
          gap: 1rem;
          color: var(--muted);
          font-size: 0.9rem;
        }

        .filter-btn {
          background: var(--surface);
          border: 1px solid var(--border);
          padding: 0.5rem 1rem;
          border-radius: 100px;
          cursor: pointer;
          transition: all 0.2s ease;
          color: var(--foreground);
        }

        .filter-btn:hover {
          border-color: var(--primary);
        }

        .filter-btn.active {
          background: var(--primary);
          color: white;
          border-color: var(--primary);
        }

        .listings-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
          gap: 2rem;
        }

        .listing-card {
          overflow: hidden;
          transition: transform 0.3s ease;
        }

        .listing-card:hover {
          transform: translateY(-5px);
        }

        .listing-image {
          position: relative;
          height: 200px;
        }

        .listing-image :global(img) {
          object-fit: cover;
        }

        .listing-badge {
          position: absolute;
          top: 1rem;
          left: 1rem;
          background: var(--glass);
          backdrop-filter: var(--glass-blur);
          padding: 0.4rem 0.8rem;
          border-radius: 6px;
          font-size: 0.75rem;
          font-weight: 700;
          color: var(--primary);
          border: 1px solid var(--border);
        }

        .listing-content {
          padding: 1.5rem;
        }

        .listing-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 1rem;
        }

        .rating {
          display: flex;
          align-items: center;
          gap: 0.25rem;
          color: #facc15;
          font-weight: 600;
          font-size: 0.9rem;
        }

        .listing-info {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          margin-bottom: 1.5rem;
        }

        .info-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--muted);
          font-size: 0.85rem;
        }

        .listing-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-bottom: 1.5rem;
        }

        .tag {
          background: var(--background);
          color: var(--muted);
          padding: 0.25rem 0.6rem;
          border-radius: 4px;
          font-size: 0.75rem;
          border: 1px solid var(--border);
        }

        .btn-outline {
          width: 100%;
          padding: 0.75rem;
          border-radius: var(--radius);
          background: transparent;
          border: 1px solid var(--border);
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s ease;
          color: var(--primary);
        }

        .btn-outline:hover {
          background: var(--primary);
          color: white;
          border-color: var(--primary);
        }

        .no-results {
          text-align: center;
          padding: 5rem 0;
        }

        @media (max-width: 768px) {
          .filter-bar {
            flex-direction: column;
            align-items: stretch;
          }
          .listings-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
}
