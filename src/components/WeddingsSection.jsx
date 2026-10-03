import React from 'react';
import { Heart, Sparkles, ArrowRight, Calendar } from 'lucide-react';
import { WEDDING_CATEGORIES } from '../data/venueData';

export default function WeddingsSection({ onOpenEnquiry }) {
  return (
    <section id="weddings" className="py-24 sm:py-32 bg-ivory-100 relative overflow-hidden">
      {/* Subtle background ornamentation */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-gold-200/20 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold-200/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gold-50 border border-gold-300 text-gold-800 text-xs font-semibold tracking-widest uppercase mb-4">
            <Heart className="w-3.5 h-3.5 text-gold-600 fill-gold-600/30" />
            <span>Matrimonial Celebrations</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold text-charcoal-900 tracking-tight leading-tight">
            Your Day. Your People. <br />
            <span className="italic font-normal text-gold-700">Your Moment.</span>
          </h2>

          <p className="mt-4 text-muted text-base sm:text-lg font-light leading-relaxed">
            Weddings are timeless milestones of family love and cultural tradition. At Uma Palace Ghazipur, we create an atmosphere of reverence, luxury, and seamless hospitality for every ceremony of your wedding journey.
          </p>
        </div>

        {/* 6 Visual Cards for Wedding Ceremonies */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {WEDDING_CATEGORIES.map((category) => (
            <div
              key={category.id}
              className="group bg-white rounded-2xl overflow-hidden border border-gold-200/70 shadow-luxury hover:shadow-elevated transition-all duration-500 transform hover:-translate-y-1 flex flex-col"
            >
              {/* Card Image */}
              <div className="relative h-64 overflow-hidden bg-charcoal-900">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/70 via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-3 left-4 right-4">
                  <span className="text-[11px] font-semibold uppercase tracking-widest text-gold-300">
                    Ceremony Setting
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-charcoal-900 group-hover:text-gold-700 transition-colors mb-2">
                    {category.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed font-light">
                    {category.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-gold-100 flex items-center justify-between">
                  <span className="text-[11px] uppercase tracking-wider text-muted font-medium">
                    Custom decor ready
                  </span>
                  <button
                    onClick={() => onOpenEnquiry(category.title)}
                    className="text-xs font-semibold uppercase tracking-wider text-gold-700 hover:text-gold-800 flex items-center gap-1 group-hover:gap-1.5 transition-all"
                  >
                    <span>Inquire</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Section Primary CTA */}
        <div className="mt-16 text-center">
          <div className="p-8 sm:p-10 rounded-3xl bg-charcoal-900 text-white max-w-4xl mx-auto shadow-elevated border border-gold-400/30 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="text-left">
              <span className="text-xs font-semibold uppercase tracking-widest text-gold-300 block mb-1">
                Begin The Journey
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                Plan Your Wedding at Uma Palace
              </h3>
              <p className="text-xs sm:text-sm text-ivory-200 mt-1 font-light">
                Consult with us regarding auspicious dates, venue tours, and preferred arrangements.
              </p>
            </div>

            <button
              onClick={() => onOpenEnquiry("Wedding Planning")}
              className="px-8 py-3.5 rounded-full bg-gold-500 hover:bg-gold-600 text-charcoal-900 font-semibold text-xs tracking-wider uppercase shadow-soft-gold whitespace-nowrap transition-all duration-300 transform hover:-translate-y-0.5 flex items-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              <span>Plan Your Wedding</span>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
