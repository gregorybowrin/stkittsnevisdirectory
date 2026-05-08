'use client';

import React, { useState } from 'react';
import { GraduationCap, MapPin, Phone, Star, Filter, Search, ChevronLeft, BookOpen } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import schoolsData from '@/data/schools.json';

export default function SchoolsPage() {
  const [filterIsland, setFilterIsland] = useState('All');
  const [filterType, setFilterType] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredSchools = schoolsData.filter(sch => {
    const matchesIsland = filterIsland === 'All' || sch.island === filterIsland;
    const matchesType = filterType === 'All' || sch.category.includes(filterType);
    const matchesSearch = sch.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          sch.location.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesIsland && matchesType && matchesSearch;
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
            <div className="category-icon-large" style={{ backgroundColor: '#6BCB7720', color: '#6BCB77' }}>
              <GraduationCap size={32} />
            </div>
            <div>
              <h1>Schools & Education</h1>
              <p>Top-rated educational institutions across the Federation</p>
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
            placeholder="Search schools, locations..." 
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
          <div className="filter-group">
            <span>Type:</span>
            <button 
              className={`filter-btn ${filterType === 'All' ? 'active' : ''}`}
              onClick={() => setFilterType('All')}
            >All</button>
            <button 
              className={`filter-btn ${filterType === 'Public' ? 'active' : ''}`}
              onClick={() => setFilterType('Public')}
            >Public</button>
            <button 
              className={`filter-btn ${filterType === 'Private' ? 'active' : ''}`}
              onClick={() => setFilterType('Private')}
            >Private</button>
          </div>
        </div>
      </section>

      {/* Listings Grid */}
      <section className="listings-section container">
        <div className="listings-grid">
          {filteredSchools.map((sch) => (
            <div key={sch.id} className="listing-card glass-card">
              <div className="listing-image">
                <Image src={sch.image} alt={sch.name} fill />
                <div className="listing-badge">{sch.level}</div>
              </div>
              <div className="listing-content">
                <div className="listing-header">
                  <h3>{sch.name}</h3>
                </div>
                <div className="listing-info">
                  <div className="info-item">
                    <MapPin size={14} />
                    <span>{sch.location}, {sch.island}</span>
                  </div>
                  <div className="info-item">
                    <Phone size={14} />
                    <span>{sch.phone}</span>
                  </div>
                  <div className="info-item">
                    <BookOpen size={14} />
                    <span>{sch.category}</span>
                  </div>
                </div>
                <div className="listing-tags">
                  {sch.tags.map(tag => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>
                <button className="btn-outline">School Profile</button>
              </div>
            </div>
          ))}
        </div>
        {filteredSchools.length === 0 && (
          <div className="no-results">
            <h3>No schools found matching your search.</h3>
            <p>Try different keywords or filters.</p>
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
          flex-direction: column;
          gap: 1.5rem;
          margin-bottom: 3rem;
        }

        .search-wrapper {
          display: flex;
          align-items: center;
          padding: 0 1.25rem;
          max-width: 600px;
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
          flex-wrap: wrap;
          gap: 2rem;
        }

        .filter-group {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          color: var(--muted);
          font-size: 0.9rem;
        }

        .filter-btn {
          background: var(--surface);
          border: 1px solid var(--border);
          padding: 0.4rem 0.8rem;
          border-radius: 100px;
          cursor: pointer;
          transition: all 0.2s ease;
          color: var(--foreground);
          font-size: 0.85rem;
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
          grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
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
          height: 180px;
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
          font-size: 0.7rem;
          font-weight: 700;
          color: var(--primary);
          border: 1px solid var(--border);
          text-transform: uppercase;
        }

        .listing-content {
          padding: 1.5rem;
        }

        .listing-header h3 {
          font-size: 1.25rem;
          margin-bottom: 1rem;
          line-height: 1.3;
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
          gap: 0.4rem;
          margin-bottom: 1.5rem;
        }

        .tag {
          background: var(--background);
          color: var(--muted);
          padding: 0.2rem 0.5rem;
          border-radius: 4px;
          font-size: 0.7rem;
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
          .filters {
            gap: 1rem;
          }
        }
      `}</style>
    </div>
  );
}
