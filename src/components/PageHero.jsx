import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, ChevronRight, MapPin } from 'lucide-react';
import { VENUE_INFO } from '../data/venueData';

export default function PageHero({ eyebrow, title, subtitle, image, badge }) {
  return (
    <div className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 bg-charcoal-900 text-white overflow-hidden">
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        <img
          src={image || "/images/editorial/hero_banquet_luxury.jpg"}
          alt={title}
          className="w-full h-full object-cover object-center filter brightness-50 contrast-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900 via-charcoal-900/60 to-charcoal-900/70" />
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-transparent to-charcoal-900/80 pointer-events-none" />
      </div>

      {/* Decorative Gold Filigree Accents */}
      <div className="absolute top-28 left-1/2 -translate-x-1/2 w-48 h-[1px] bg-gradient-to-r from-transparent via-gold-400 to-transparent opacity-60 z-10" />

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Breadcrumb Navigation */}
        <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-gold-300/90 mb-4 bg-charcoal-900/70 px-4 py-1.5 rounded-full border border-gold-400/30 backdrop-blur-md">
          <Link to="/" className="hover:text-white transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3 h-3 text-gold-500" />
          <span className="text-white">{badge || title}</span>
        </div>

        {/* Small Eyebrow */}
        {eyebrow && (
          <p className="text-xs sm:text-sm font-semibold tracking-[0.2em] text-gold-300 uppercase mb-3 flex items-center justify-center gap-2">
            <Sparkles className="w-3.5 h-3.5 text-gold-400" />
            <span>{eyebrow}</span>
            <Sparkles className="w-3.5 h-3.5 text-gold-400" />
          </p>
        )}

        {/* Main Serif Title */}
        <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-tight mb-4 drop-shadow">
          {title}
        </h1>

        {/* Subtitle */}
        {subtitle && (
          <p className="max-w-2xl mx-auto text-base sm:text-lg text-ivory-100 font-light leading-relaxed drop-shadow">
            {subtitle}
          </p>
        )}

        {/* Location Tag */}
        <div className="mt-6 inline-flex items-center gap-2 text-xs text-gold-200/90 tracking-wider">
          <MapPin className="w-3.5 h-3.5 text-gold-400" />
          <span>{VENUE_INFO.shortLocation}</span>
        </div>
      </div>
    </div>
  );
}
