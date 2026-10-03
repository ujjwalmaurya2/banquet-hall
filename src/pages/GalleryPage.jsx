import React from 'react';
import PageHero from '../components/PageHero';
import Gallery from '../components/Gallery';

export default function GalleryPage() {
  return (
    <div>
      <PageHero
        badge="Gallery"
        eyebrow="Visual Portfolio"
        title="Curated Moments & Architecture"
        subtitle="Explore our visual portfolio featuring grand matrimonial ceremonies, celebratory banquets, and genuine Instagram captures from Uma Palace Ghazipur."
        image="/images/editorial/banquet_hall_interior.jpg"
      />

      {/* Main Gallery Portfolio with Masonry & Lightbox */}
      <Gallery />
    </div>
  );
}
