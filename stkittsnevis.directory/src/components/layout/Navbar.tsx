'use client';

import React from 'react';
import Link from 'next/link';
import { Search, User, Menu } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="container navbar-inner">
        <Link href="/" className="logo">
          SKN Directory <span className="logo-dot"></span>
        </Link>

        <div className="nav-links">
          <Link href="/directory/restaurants">Restaurants</Link>
          <Link href="/directory/schools">Schools</Link>
          <Link href="/directory/services">Professional</Link>
          <Link href="/pricing">Pricing</Link>
        </div>

        <div className="nav-actions">
          <button className="icon-btn mobile-only"><Menu size={20} /></button>
          <button className="btn-primary">List Business</button>
        </div>
      </div>

      <style jsx>{`
        .navbar {
          background: var(--background);
          border-bottom: 1px solid var(--border);
          padding: 1.25rem 0;
          position: sticky;
          top: 0;
          z-index: 1000;
        }

        .navbar-inner {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .logo {
          font-family: var(--font-display);
          font-size: 1.75rem;
          font-weight: 800;
          color: var(--primary);
          text-decoration: none;
          letter-spacing: -0.02em;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .logo-dot {
          width: 10px;
          height: 10px;
          background: var(--secondary);
          border-radius: 50%;
        }

        .nav-links {
          display: flex;
          gap: 2.5rem;
          align-items: center;
        }

        .nav-links a {
          text-decoration: none;
          color: var(--foreground);
          font-weight: 600;
          font-size: 0.95rem;
          transition: color 0.2s ease;
        }

        .nav-links a:hover {
          color: var(--primary);
        }

        .nav-actions {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .btn-primary {
          background: var(--primary);
          color: white;
          padding: 0.8rem 1.75rem;
          border-radius: var(--radius);
          font-weight: 700;
          border: none;
          cursor: pointer;
          transition: all 0.2s ease;
          box-shadow: var(--shadow-sm);
        }

        .btn-primary:hover {
          background: var(--primary-hover);
          transform: translateY(-2px);
          box-shadow: var(--shadow-md);
        }

        .icon-btn {
          background: transparent;
          border: none;
          color: var(--foreground);
          cursor: pointer;
        }

        .mobile-only {
          display: none;
        }

        @media (max-width: 992px) {
          .nav-links {
            display: none;
          }
          .mobile-only {
            display: block;
          }
        }
      `}</style>
    </nav>
  );
}
