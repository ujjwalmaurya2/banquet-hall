import React, { useState } from 'react';
import { Camera, Sparkles, Maximize2, ExternalLink } from 'lucide-react';
import { InstagramIcon } from './SocialIcons';
import { GALLERY_ITEMS, VENUE_INFO } from '../data/venueData';
import LightboxModal from './LightboxModal';

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  const categories = ["All", "Weddings", "Events", "Venue", "Pool", "Decor"];

  const filteredItems = activeCategory === "All"
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(item => item.category.toLowerCase() === activeCategory.toLowerCase());

  const handleOpenLightbox = (index) => {
    setSelectedImageIndex(index);
  };

  const handleCloseLightbox = () => {
    setSelectedImageIndex(null);
  };

  const handlePrev = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((prev) => (prev > 0 ? prev - 1 : filteredItems.length - 1));
    }
  };

  const handleNext = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((prev) => (prev < filteredItems.length - 1 ? prev + 1 : 0));
    }
  };

  return (
    <section id="gallery" className="py-24 sm:py-32 bg-ivory-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gold-50 border border-gold-300 text-gold-800 text-xs font-semibold tracking-widest uppercase mb-4">
            <Camera className="w-3.5 h-3.5 text-gold-600" />
            <span>Visual Portfolio</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-charcoal-900 tracking-tight leading-tight">
            Curated Gallery
          </h2>

          <p className="mt-4 text-muted text-base sm:text-lg font-light leading-relaxed">
            Glimpses of matrimonial grandeur, celebratory banquets, and serene poolside ambience at Uma Palace Ghazipur.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold tracking-wide transition-all duration-300 ${
                  isActive
                    ? 'bg-charcoal-900 text-gold-300 shadow-md scale-105'
                    : 'bg-white border border-gold-200/80 text-charcoal-700 hover:border-gold-400 hover:text-charcoal-900'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Editorial Masonry/Varied Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => handleOpenLightbox(index)}
              className={`group relative rounded-2xl overflow-hidden shadow-luxury hover:shadow-elevated transition-all duration-500 cursor-pointer bg-charcoal-900 ${
                item.aspect === 'tall' ? 'sm:row-span-2' : ''
              }`}
            >
              {/* Image */}
              <div className={`w-full overflow-hidden ${item.aspect === 'tall' ? 'h-96 sm:h-full min-h-[380px]' : 'h-72 sm:h-80'}`}>
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
              </div>

              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/90 via-charcoal-900/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 flex flex-col justify-between" />

              {/* Top Badges */}
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                <span className="px-3 py-1 rounded-full text-[10px] font-semibold uppercase tracking-widest bg-charcoal-900/70 border border-gold-300/40 text-gold-200 backdrop-blur-md">
                  {item.badge || item.category}
                </span>

                {item.isRealIG && (
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-semibold tracking-wider bg-gradient-to-r from-purple-600/90 to-pink-600/90 text-white backdrop-blur-md flex items-center gap-1 shadow-sm">
                    <InstagramIcon className="w-3 h-3" />
                    <span>Real IG</span>
                  </span>
                )}
              </div>

              {/* Fullscreen icon indicator on hover */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/20 backdrop-blur-md text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-75 group-hover:scale-100">
                <Maximize2 className="w-5 h-5 text-gold-200" />
              </div>

              {/* Bottom text visible on hover */}
              <div className="absolute bottom-0 inset-x-0 p-5 text-white opacity-90 group-hover:opacity-100 transition-opacity">
                <h4 className="font-serif text-lg sm:text-xl font-bold text-white group-hover:text-gold-200 transition-colors">
                  {item.title}
                </h4>
                <p className="text-xs text-ivory-200/90 font-light mt-0.5">
                  {item.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Instagram Account Banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-white border border-gold-200 shadow-luxury flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 p-0.5 flex-shrink-0 shadow-md">
              <div className="w-full h-full rounded-full bg-white p-0.5 overflow-hidden">
                <img
                  src="/images/venue/uma_profile_logo.jpg"
                  alt="Uma Palace Instagram"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h4 className="font-serif text-xl font-bold text-charcoal-900">
                  Follow Uma Palace on Instagram
                </h4>
                <span className="text-xs px-2 py-0.5 rounded-full bg-pink-100 text-pink-700 font-semibold">
                  Official
                </span>
              </div>
              <p className="text-xs sm:text-sm text-muted mt-0.5">
                See live stories, recent functions, and wedding highlights at <strong className="text-charcoal-800">{VENUE_INFO.instagramHandle}</strong>
              </p>
            </div>
          </div>

          <a
            href={VENUE_INFO.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-full bg-charcoal-900 hover:bg-charcoal-800 text-gold-300 hover:text-gold-200 text-xs font-semibold tracking-wider uppercase border border-gold-400/40 flex items-center gap-2 whitespace-nowrap shadow-sm transition-all"
          >
            <InstagramIcon className="w-4 h-4 text-pink-400" />
            <span>Visit @uma.palace</span>
            <ExternalLink className="w-3.5 h-3.5 opacity-60" />
          </a>
        </div>

      </div>

      {/* Lightbox Modal */}
      {selectedImageIndex !== null && (
        <LightboxModal
          item={filteredItems[selectedImageIndex]}
          onClose={handleCloseLightbox}
          onPrev={handlePrev}
          onNext={handleNext}
        />
      )}
    </section>
  );
}
