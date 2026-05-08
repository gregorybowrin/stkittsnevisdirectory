'use client';

import React from 'react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="home-container">
      <section className="hero" style={{ textAlign: 'center', padding: '10rem 0' }}>
        <div className="container">
          <h1 className="mockup-title">Discover the <span>Pulse of the Islands</span></h1>
          <p className="hero-desc" style={{ margin: '0 auto 2rem' }}>The ultimate business directory for finding the finest dining, education, and professional services across the Federation.</p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
            <Link href="/directory/restaurants" className="btn-primary">Restaurants</Link>
            <Link href="/directory/schools" className="btn-primary">Schools</Link>
            <Link href="/directory/services" className="btn-primary">Professional</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
