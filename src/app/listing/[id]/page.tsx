'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import { MapPin, Phone, Globe, Clock, Star, Share2, Heart, ShieldCheck, ChevronLeft } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import restaurantsData from '@/data/restaurants.json';

export default function ListingDetailPage() {
  const params = useParams();
  const id = params.id as string;
  
  const listing = restaurantsData.find(res => res.id === id);

  if (!listing) {
    return (
      <div className="container error-container">
        <h1>Listing Not Found</h1>
        <p>Sorry, the business you are looking for does not exist in our directory.</p>
        <Link href="/directory/restaurants" className="btn-primary">Return to Directory</Link>
      </div>
    );
  }

  return (
    <div className="listing-detail-page">
      {/* Top Banner / Gallery */}
      <section className="listing-hero">
        <div className="container">
          <Link href="/directory/restaurants" className="back-link">
            <ChevronLeft size={20} />
            Back to Restaurants
          </Link>
        </div>
        <div className="hero-images container">
          <div className="main-image">
            <Image src={listing.image} alt={listing.name} fill />
          </div>
          <div className="side-images">
             <div className="side-img"><Image src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=600" alt="Interior" fill /></div>
             <div className="side-img"><Image src="https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&q=80&w=600" alt="Food" fill /></div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="listing-content-container container">
        <div className="content-main">
          <div className="listing-title-section">
            <div className="title-header">
               <h1>{listing.name}</h1>
               <div className="title-actions">
                  <button className="action-btn"><Share2 size={18} /></button>
                  <button className="action-btn"><Heart size={18} /></button>
               </div>
            </div>
            <div className="title-meta">
               <span className="category-badge">{listing.category}</span>
               <div className="rating">
                  <Star size={16} fill="currentColor" />
                  <span>4.8 (124 Reviews)</span>
               </div>
               <div className="verified">
                  <ShieldCheck size={16} />
                  <span>Verified Listing</span>
               </div>
            </div>
          </div>

          <div className="listing-description glass-card">
            <h2>About {listing.name}</h2>
            <p>Experience the finest {listing.category.toLowerCase()} in {listing.island}. {listing.name} is dedicated to providing an unforgettable dining experience featuring locally-sourced ingredients and world-class service. Whether you're visiting for a casual lunch or a romantic dinner, our team is ready to welcome you with authentic Caribbean hospitality.</p>
            <div className="listing-tags">
              {listing.tags.map(tag => (
                <span key={tag} className="tag">{tag}</span>
              ))}
            </div>
          </div>

          <div className="listing-amenities">
            <h2>Amenities</h2>
            <div className="amenities-grid">
               <div className="amenity"><span>✓ Outdoor Seating</span></div>
               <div className="amenity"><span>✓ Free Wi-Fi</span></div>
               <div className="amenity"><span>✓ Takeout Available</span></div>
               <div className="amenity"><span>✓ Reservations Recommended</span></div>
               <div className="amenity"><span>✓ Accepts Credit Cards</span></div>
               <div className="amenity"><span>✓ Wheelchair Accessible</span></div>
            </div>
          </div>
        </div>

        <div className="content-sidebar">
          <div className="contact-card glass-card">
             <h3>Contact Information</h3>
             <div className="contact-items">
                <div className="contact-item">
                   <MapPin size={20} />
                   <div>
                      <p className="label">Address</p>
                      <p>{listing.location}, {listing.island}</p>
                   </div>
                </div>
                <div className="contact-item">
                   <Phone size={20} />
                   <div>
                      <p className="label">Phone</p>
                      <p>{listing.phone}</p>
                   </div>
                </div>
                <div className="contact-item">
                   <Globe size={20} />
                   <div>
                      <p className="label">Website</p>
                      <p className="link">www.{listing.id}.com</p>
                   </div>
                </div>
                <div className="contact-item">
                   <Clock size={20} />
                   <div>
                      <p className="label">Hours</p>
                      <p>Open Today: 11:00 AM - 10:00 PM</p>
                   </div>
                </div>
             </div>
             <button className="btn-primary full-width">Make a Reservation</button>
          </div>

          <div className="claim-promo glass-card">
             <h4>Is this your business?</h4>
             <p>Claim your listing to respond to reviews, update your information, and unlock premium features.</p>
             <button className="btn-secondary full-width">Claim Now</button>
          </div>
        </div>
      </section>

      <style jsx>{`
        .listing-detail-page {
          padding-bottom: 5rem;
        }

        .back-link {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--muted);
          font-size: 0.9rem;
          margin: 2rem 0;
          transition: color 0.2s ease;
        }

        .back-link:hover {
          color: var(--primary);
        }

        .hero-images {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 1rem;
          height: 500px;
          margin-bottom: 3rem;
        }

        .main-image, .side-img {
          position: relative;
          border-radius: var(--radius);
          overflow: hidden;
        }

        .side-images {
          display: grid;
          grid-template-rows: 1fr 1fr;
          gap: 1rem;
        }

        .main-image :global(img), .side-img :global(img) {
          object-fit: cover;
        }

        .listing-content-container {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 3rem;
        }

        .listing-title-section {
          margin-bottom: 2.5rem;
        }

        .title-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1rem;
        }

        .title-header h1 {
          font-size: 3rem;
        }

        .title-actions {
          display: flex;
          gap: 0.75rem;
        }

        .action-btn {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          border: 1px solid var(--border);
          background: var(--surface);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          color: var(--muted);
          transition: all 0.2s ease;
        }

        .action-btn:hover {
          background: var(--primary);
          color: white;
          border-color: var(--primary);
        }

        .title-meta {
          display: flex;
          align-items: center;
          gap: 1.5rem;
        }

        .category-badge {
          background: rgba(0, 71, 171, 0.1);
          color: var(--primary);
          padding: 0.4rem 1rem;
          border-radius: 100px;
          font-size: 0.85rem;
          font-weight: 700;
        }

        .rating {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          color: #facc15;
          font-weight: 600;
        }

        .verified {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          color: var(--secondary);
          font-weight: 600;
          font-size: 0.9rem;
        }

        .listing-description {
          padding: 2.5rem;
          margin-bottom: 3rem;
        }

        .listing-description h2 {
          margin-bottom: 1.5rem;
        }

        .listing-description p {
          color: var(--muted);
          line-height: 1.8;
          font-size: 1.1rem;
          margin-bottom: 2rem;
        }

        .listing-tags {
          display: flex;
          gap: 0.75rem;
        }

        .tag {
          background: var(--background);
          color: var(--muted);
          padding: 0.4rem 1rem;
          border-radius: 6px;
          font-size: 0.85rem;
          border: 1px solid var(--border);
        }

        .listing-amenities h2 {
          margin-bottom: 1.5rem;
        }

        .amenities-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
          gap: 1.25rem;
        }

        .amenity {
          color: var(--foreground);
          font-weight: 500;
          opacity: 0.9;
        }

        .contact-card {
          padding: 2rem;
          margin-bottom: 2rem;
        }

        .contact-card h3 {
          margin-bottom: 2rem;
        }

        .contact-items {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          margin-bottom: 2.5rem;
        }

        .contact-item {
          display: flex;
          gap: 1rem;
          color: var(--muted);
        }

        .contact-item p.label {
          font-size: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          font-weight: 700;
          margin-bottom: 0.25rem;
        }

        .contact-item p:not(.label) {
          color: var(--foreground);
          font-weight: 500;
        }

        .contact-item .link {
          color: var(--primary);
        }

        .full-width {
          width: 100%;
        }

        .claim-promo {
          padding: 2rem;
          background: linear-gradient(135deg, var(--surface), var(--background));
          text-align: center;
        }

        .claim-promo h4 {
          margin-bottom: 1rem;
          font-size: 1.25rem;
        }

        .claim-promo p {
          color: var(--muted);
          font-size: 0.9rem;
          margin-bottom: 1.5rem;
          line-height: 1.5;
        }

        .btn-secondary {
          background: transparent;
          border: 1px solid var(--border);
          padding: 0.75rem;
          border-radius: var(--radius);
          font-weight: 600;
          cursor: pointer;
        }

        .error-container {
          padding: 10rem 0;
          text-align: center;
        }

        @media (max-width: 992px) {
          .listing-content-container {
            grid-template-columns: 1fr;
          }
          .hero-images {
            grid-template-columns: 1fr;
            height: auto;
          }
          .main-image {
            height: 350px;
          }
          .side-images {
            display: none;
          }
          .title-header h1 {
            font-size: 2.2rem;
          }
        }
      `}</style>
    </div>
  );
}
