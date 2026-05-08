'use client';

import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <Link href="/" className="logo">
            SKN<span className="dot">.</span>Directory
          </Link>
          <p>The most comprehensive business directory for St. Kitts and Nevis. Making local businesses easy to find.</p>
        </div>
        
        <div className="footer-links">
          <h4>Explore</h4>
          <Link href="/directory/restaurants">Restaurants</Link>
          <Link href="/directory/hotels">Hotels</Link>
          <Link href="/directory/services">Professional Services</Link>
        </div>

        <div className="footer-links">
          <h4>Business</h4>
          <Link href="/pricing">Pricing Plans</Link>
          <Link href="/claim">Claim Listing</Link>
          <Link href="/advertise">Advertise</Link>
        </div>

        <div className="footer-links">
          <h4>Support</h4>
          <Link href="/about">About Us</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/privacy">Privacy Policy</Link>
        </div>
      </div>
      
      <div className="footer-bottom container">
        <p>&copy; {new Date().getFullYear()} St. Kitts & Nevis Directory. All rights reserved.</p>
      </div>

      <style jsx>{`
        .footer {
          background: var(--surface);
          border-top: 1px solid var(--border);
          padding: 5rem 0 2rem;
          margin-top: auto;
        }

        .footer-grid {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1fr;
          gap: 4rem;
          margin-bottom: 4rem;
        }

        .logo {
          font-family: var(--font-display);
          font-size: 1.5rem;
          font-weight: 800;
          letter-spacing: -0.02em;
          color: var(--primary);
          margin-bottom: 1.5rem;
          display: inline-block;
        }

        .dot {
          color: var(--accent);
        }

        .footer-brand p {
          color: var(--muted);
          line-height: 1.6;
          max-width: 300px;
        }

        .footer-links h4 {
          font-size: 1.1rem;
          margin-bottom: 1.5rem;
          color: var(--foreground);
        }

        .footer-links {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .footer-links a {
          color: var(--muted);
          font-size: 0.95rem;
          transition: color 0.2s ease;
        }

        .footer-links a:hover {
          color: var(--primary);
        }

        .footer-bottom {
          padding-top: 2rem;
          border-top: 1px solid var(--border);
          text-align: center;
          color: var(--muted);
          font-size: 0.9rem;
        }

        @media (max-width: 992px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr;
            gap: 3rem;
          }
        }

        @media (max-width: 576px) {
          .footer-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </footer>
  );
}
