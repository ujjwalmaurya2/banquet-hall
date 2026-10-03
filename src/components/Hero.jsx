import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MapPin, Calendar, Compass, Sparkles, ChevronDown } from 'lucide-react';
import { VENUE_INFO } from '../data/venueData';

export default function Hero({ onOpenAvailability }) {

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image Container with Cinematic Treatment */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/editorial/hero_banquet_luxury.jpg"
          alt="Uma Palace Luxury Banquet Hall & Wedding Venue Ghazipur"
          className="w-full h-full object-cover object-center scale-105 animate-pulse duration-[10000ms]"
        />
        {/* Gradients: warm champagne glow + soft dark overlay to ensure readable text without over-darkening */}
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/90 via-charcoal-900/40 to-charcoal-900/50" />
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-transparent to-charcoal-900/60 pointer-events-none" />
      </div>

      {/* Decorative Gold Filigree Accents */}
      <div className="absolute top-24 left-1/2 -translate-x-1/2 w-48 h-[1px] bg-gradient-to-r from-transparent via-gold-400 to-transparent opacity-60 z-10" />

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-24 pb-20">
        {/* Eyebrow badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-charcoal-900/70 border border-gold-400/40 backdrop-blur-md mb-6"
        >
          <Sparkles className="w-3.5 h-3.5 text-gold-400" />
          <span className="text-[11px] sm:text-xs font-semibold tracking-widest text-gold-200 uppercase">
            BANQUET HALL • WEDDINGS • EVENTS
          </span>
        </motion.div>

        {/* Large Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-7xl font-bold text-white tracking-tight leading-[1.1] mb-6 drop-shadow-md"
        >
          Where Your Special Moments <br className="hidden sm:inline" />
          <span className="italic font-normal text-gold-300 font-serif">
            Become Unforgettable
          </span>
        </motion.h1>

        {/* Supporting Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="text-lg sm:text-xl md:text-2xl text-ivory-100 font-light mb-6 tracking-wide drop-shadow"
        >
          Book your special day with us ✨
        </motion.p>

        {/* Location Marker */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="inline-flex items-center gap-2 text-xs sm:text-sm text-gold-200/90 font-medium tracking-wider mb-10 px-4 py-1.5 rounded-md bg-charcoal-900/50 backdrop-blur-sm border border-white/10"
        >
          <MapPin className="w-4 h-4 text-gold-400 flex-shrink-0" />
          <span>{VENUE_INFO.shortLocation}</span>
        </motion.div>

        {/* Call to Actions */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
        >
          <button
            onClick={onOpenAvailability}
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-gold-500 hover:bg-gold-600 text-charcoal-900 font-semibold text-sm tracking-wider uppercase shadow-soft-gold hover:shadow-elevated transition-all duration-300 transform hover:-translate-y-0.5 flex items-center justify-center gap-3"
          >
            <Calendar className="w-4 h-4" />
            <span>Check Availability</span>
          </button>

          <Link
            to="/venue"
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-charcoal-900/60 hover:bg-charcoal-900/90 text-ivory-50 border border-gold-300/40 hover:border-gold-300 font-medium text-sm tracking-wider uppercase backdrop-blur-md transition-all duration-300 flex items-center justify-center gap-2 group"
          >
            <Compass className="w-4 h-4 text-gold-400 group-hover:rotate-45 transition-transform duration-300" />
            <span>Explore the Venue</span>
          </Link>
        </motion.div>

        {/* Feature Badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="mt-14 pt-8 border-t border-white/15 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto"
        >
          <div className="text-center">
            <span className="block text-gold-300 font-serif text-lg font-semibold">Grand Hall</span>
            <span className="text-[11px] text-ivory-200 uppercase tracking-widest">Indoor Celebrations</span>
          </div>
          <div className="text-center">
            <span className="block text-gold-300 font-serif text-lg font-semibold">Weddings</span>
            <span className="text-[11px] text-ivory-200 uppercase tracking-widest">Pheras & Receptions</span>
          </div>
          <div className="text-center">
            <span className="block text-gold-300 font-serif text-lg font-semibold">Swimming Pool</span>
            <span className="text-[11px] text-ivory-200 uppercase tracking-widest">Leisure & Parties</span>
          </div>
          <div className="text-center">
            <span className="block text-gold-300 font-serif text-lg font-semibold">Ghazipur, UP</span>
            <span className="text-[11px] text-ivory-200 uppercase tracking-widest">Prime Location</span>
          </div>
        </motion.div>
      </div>

      {/* Subtle Scroll Indicator at Bottom */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 pointer-events-none"
      >
        <span className="text-[10px] tracking-widest text-gold-300/80 uppercase font-medium">Scroll to explore</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-7 h-7 rounded-full border border-gold-400/40 flex items-center justify-center text-gold-300"
        >
          <ChevronDown className="w-4 h-4" />
        </motion.div>
      </motion.div>
    </section>
  );
}
