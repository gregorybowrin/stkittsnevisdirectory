'use client';

import React from 'react';
import { Search, Utensils, GraduationCap, Briefcase } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <div style={{ padding: '4rem 2rem', textAlign: 'center', fontFamily: 'sans-serif' }}>
      <h1 style={{ fontSize: '3rem', color: '#ff6b00' }}>St. Kitts & Nevis Directory</h1>
      <p style={{ fontSize: '1.25rem', color: '#666', marginBottom: '3rem' }}>
        Find the best businesses, schools, and services in the Federation.
      </p>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem', maxWidth: '800px', margin: '0 auto' }}>
        <Link href="/directory/restaurants" style={{ padding: '2rem', border: '1px solid #ddd', borderRadius: '1rem', textDecoration: 'none', color: 'inherit' }}>
          <Utensils size={40} color="#ff6b00" />
          <h3>Restaurants</h3>
        </Link>
        <Link href="/directory/schools" style={{ padding: '2rem', border: '1px solid #ddd', borderRadius: '1rem', textDecoration: 'none', color: 'inherit' }}>
          <GraduationCap size={40} color="#00d1ff" />
          <h3>Schools</h3>
        </Link>
        <Link href="/directory/services" style={{ padding: '2rem', border: '1px solid #ddd', borderRadius: '1rem', textDecoration: 'none', color: 'inherit' }}>
          <Briefcase size={40} color="#2ecc71" />
          <h3>Professional</h3>
        </Link>
      </div>
    </div>
  );
}
