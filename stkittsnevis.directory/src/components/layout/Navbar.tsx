'use client';

import React from 'react';
import Link from 'next/link';
import { Menu } from 'lucide-react';

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
    </nav>
  );
}
