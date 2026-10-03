import React from 'react';
import { Cake, Heart, Users, Briefcase, Sparkles, ShieldCheck, ArrowRight } from 'lucide-react';
import { EVENT_CATEGORIES } from '../data/venueData';

const iconMap = {
  Cake,
  Heart,
  Users,
  Briefcase,
  Sparkles,
  ShieldCheck
};

export default function EventsSection({ onOpenEnquiry }) {
  return (
    <section id="events" className="py-24 sm:py-32 bg-ivory-200/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gold-100 border border-gold-300 text-gold-800 text-xs font-semibold tracking-widest uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5 text-gold-600" />
            <span>Social & Corporate Occasions</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-charcoal-900 tracking-tight leading-tight">
            More Than Weddings
          </h2>

          <p className="mt-4 text-charcoal-700 text-base sm:text-lg font-light leading-relaxed">
            A versatile setting for celebrations and gatherings. Whether marking an intimate family blessing or hosting an elaborate corporate conference, Uma Palace adjusts with effortless hospitality.
          </p>
        </div>

        {/* 6 Event Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {EVENT_CATEGORIES.map((evt, idx) => {
            const IconComponent = iconMap[evt.icon] || Sparkles;
            return (
              <div
                key={idx}
                className="p-8 rounded-2xl bg-white border border-gold-200/70 shadow-luxury hover:shadow-elevated transition-all duration-300 hover:border-gold-400 group"
              >
                <div className="w-12 h-12 rounded-xl bg-gold-50 border border-gold-300/60 text-gold-700 flex items-center justify-center mb-6 group-hover:bg-gold-500 group-hover:text-charcoal-900 transition-colors duration-300">
                  <IconComponent className="w-6 h-6 stroke-[1.75]" />
                </div>

                <h3 className="font-serif text-xl sm:text-2xl font-bold text-charcoal-900 mb-2 group-hover:text-gold-700 transition-colors">
                  {evt.title}
                </h3>

                <p className="text-xs sm:text-sm text-muted font-light leading-relaxed mb-6">
                  {evt.desc}
                </p>

                <button
                  onClick={() => onOpenEnquiry(evt.title)}
                  className="text-xs font-semibold uppercase tracking-wider text-charcoal-800 hover:text-gold-700 inline-flex items-center gap-1.5 transition-colors"
                >
                  <span>Inquire for this event</span>
                  <ArrowRight className="w-3.5 h-3.5 text-gold-600" />
                </button>
              </div>
            );
          })}
        </div>

        {/* Supporting Note */}
        <div className="mt-12 text-center">
          <p className="text-xs text-muted max-w-xl mx-auto italic">
            *Event arrangements, technical audiovisual setups, and catering options can be customized based on your gathering size. Contact us for details.
          </p>
        </div>

      </div>
    </section>
  );
}
