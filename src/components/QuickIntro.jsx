import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MapPin, Sparkles, Check, ArrowRight } from 'lucide-react';
import { VENUE_INFO } from '../data/venueData';

export default function QuickIntro({ onOpenAvailability }) {
  const celebrationTypes = [
    "Grand Wedding Ceremonies & Pheras",
    "Lavish Wedding Receptions & Banquets",
    "Pre-wedding Engagements, Sangeet & Mehendi",
    "Family Milestones & Anniversaries",
    "Social Banquets & Cultural Gatherings",
    "Private Events & Poolside Celebrations"
  ];

  return (
    <section id="venue" className="py-24 sm:py-32 bg-ivory-100 relative overflow-hidden">
      {/* Background Subtle Accent Lines */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gold-300 to-transparent opacity-60" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Text & Storytelling */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gold-50 border border-gold-300/60 text-gold-700 text-xs font-semibold tracking-widest uppercase">
              <Sparkles className="w-3.5 h-3.5 text-gold-600" />
              <span>The Venue Experience</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-charcoal-900 leading-[1.18] tracking-tight">
              A Beautiful Setting for <br className="hidden sm:inline" />
              <span className="italic font-normal text-gold-700">Life’s Special Moments</span>
            </h2>

            <div className="flex items-center gap-2 text-xs sm:text-sm text-charcoal-600 font-medium">
              <MapPin className="w-4 h-4 text-gold-600 flex-shrink-0" />
              <span>{VENUE_INFO.displayAddress}</span>
            </div>

            <p className="text-charcoal-700 text-base sm:text-lg leading-relaxed font-light">
              Nestled on Urdu Bazar Road in Jamlapur, Ghazipur, <strong className="font-semibold text-charcoal-900">Uma Palace</strong> is thoughtfully designed to host cherished milestone celebrations with elegance, dignity, and warmth. From grand matrimonial ceremonies to joyful family gatherings, our venue brings people together in a spacious, welcoming ambience.
            </p>

            <p className="text-muted text-sm sm:text-base leading-relaxed">
              Featuring a magnificent indoor banquet hall, scenic outdoor poolside spaces, dedicated dining zones, and celebratory staging areas, Uma Palace provides a versatile canvas tailored to your event’s individual character and rituals.
            </p>

            {/* Checklist of What Venue is Designed For */}
            <div className="pt-2">
              <h3 className="text-xs uppercase tracking-widest font-semibold text-charcoal-900 mb-3">
                Thoughtfully Suited For:
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {celebrationTypes.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm text-charcoal-800">
                    <div className="w-4 h-4 rounded-full bg-gold-100 flex items-center justify-center flex-shrink-0 text-gold-700">
                      <Check className="w-2.5 h-2.5 stroke-[2.5]" />
                    </div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action buttons */}
            <div className="pt-6 flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenAvailability}
                className="px-6 py-3 rounded-full bg-gold-500 hover:bg-gold-600 text-charcoal-900 font-semibold text-xs tracking-wider uppercase shadow-soft-gold transition-all duration-300"
              >
                Check Date Availability
              </button>
              <Link
                to="/venue"
                className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-charcoal-800 hover:text-gold-600 transition-colors py-3 px-2 group"
              >
                <span>View Event Spaces</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Right Column: Large Editorial Image Composition */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Main Image */}
              <div className="relative rounded-2xl overflow-hidden shadow-elevated border border-gold-200/80 bg-charcoal-900">
                <img
                  src="/images/editorial/banquet_hall_interior.jpg"
                  alt="Uma Palace Banquet Hall Interior"
                  className="w-full h-[440px] sm:h-[500px] object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/80 via-transparent to-transparent pointer-events-none" />
                
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <span className="text-[11px] font-semibold tracking-widest uppercase text-gold-300 block mb-1">
                    Indoor Elegance
                  </span>
                  <p className="font-serif text-xl sm:text-2xl font-bold leading-tight">
                    Crafted for Celebrations that Matter
                  </p>
                  <p className="text-xs text-ivory-200 mt-1">
                    Urdu Bazar Road, Jamlapur, Ghazipur
                  </p>
                </div>
              </div>

              {/* Secondary Floating Card with Real IG Asset / Badge */}
              <div className="absolute -bottom-6 -left-4 sm:-left-8 bg-ivory-50/95 backdrop-blur-md rounded-xl p-3 sm:p-4 shadow-elevated border border-gold-300/60 max-w-[200px] sm:max-w-[230px] hidden xs:block">
                <div className="flex items-center gap-2.5 mb-2">
                  <div className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                  <span className="text-[10px] uppercase font-bold tracking-wider text-gold-700">
                    Official Venue
                  </span>
                </div>
                <p className="text-xs font-serif font-bold text-charcoal-900 leading-snug">
                  Banquet Hall • Weddings • Events • Swimming Pool
                </p>
                <p className="text-[10px] text-muted mt-1">
                  Contact us for capacity & custom layout details.
                </p>
              </div>

              {/* Decorative background framing */}
              <div className="absolute -top-3 -right-3 w-full h-full rounded-2xl border-2 border-gold-300/40 -z-10 pointer-events-none" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
