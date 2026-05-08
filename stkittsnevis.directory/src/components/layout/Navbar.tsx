'use client';

import React from 'react';
import Link from 'next/link';
import { Search, Plus } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="navbar glass-card">
      <div className="container nav-inner">
        <Link href="/" className="logo">
          SKN<span className="dot">.</span>Directory
        </Link>
        
        <div className="nav-links">
          <Link href="/directory/restaurants" className="nav-link">Restaurants</Link>
          <Link href="/directory/hotels" className="nav-link">Hotels</Link>
          <Link href="/directory/services" className="nav-link">Services</Link>
        </div>

        <div className="nav-actions">
          <button className="icon-btn">
            <Search size={20} />
          </button>
          <button className="btn-primary add-btn">
            <Plus size={18} />
            <span>List Business</span>
          </button>
        </div>
      </div>

      <style jsx>{`
        .navbar {
          position: sticky;
          top: 1rem;
          margin: 0 1rem;
          z-index: 100;
          border-radius: var(--radius);
          background: var(--glass);
          backdrop-filter: var(--glass-blur);
        }

        .nav-inner {
          height: 70px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .logo {
          font-family: var(--font-display);
          font-size: 1.5rem;
          font-weight: 800;
          letter-spacing: -0.02em;
          color: var(--primary);
        }

        .dot {
          color: var(--accent);
        }

        .nav-links {
          display: flex;
          gap: 2rem;
        }

        .nav-link {
          font-size: 0.95rem;
          font-weight: 600;
          color: var(--foreground);
          opacity: 0.8;
          transition: all 0.2s ease;
        }

        .nav-link:hover {
          opacity: 1;
          color: var(--primary);
        }

        .nav-actions {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .icon-btn {
          background: transparent;
          border: none;
          color: var(--muted);
          cursor: pointer;
          padding: 0.5rem;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s ease;
        }

        .icon-btn:hover {
          background: var(--background);
          color: var(--primary);
        }

        .add-btn {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.6rem 1.25rem;
        }

        @media (max-width: 768px) {
          .nav-links {
            display: none;
          }
          .add-btn span {
            display: none;
          }
          .add-btn {
            padding: 0.6rem;
          }
        }
      `}</style>
    </nav>
  );
}
