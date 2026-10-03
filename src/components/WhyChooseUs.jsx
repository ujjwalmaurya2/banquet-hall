import React from 'react';
import { Sparkles, Layers, Compass, MapPin } from 'lucide-react';
import { WHY_CHOOSE_POINTS, VENUE_INFO } from '../data/venueData';

const iconMap = {
  Sparkles,
  Layers,
  Compass,
  MapPin
};

export default function WhyChooseUs() {
  return (
    <section className="py-24 sm:py-32 bg-ivory-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gold-50 border border-gold-300 text-gold-800 text-xs font-semibold tracking-widest uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5 text-gold-600" />
            <span>The Venue Distinction</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-charcoal-900 tracking-tight leading-tight">
            A Setting Worth Celebrating
          </h2>

          <p className="mt-4 text-muted text-base sm:text-lg font-light leading-relaxed">
            Thoughtful architectural design, open-air poolside leisure, and a central Ghazipur location combine to offer an effortless celebration experience.
          </p>
        </div>

        {/* 4 Neutral Value Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {WHY_CHOOSE_POINTS.map((point, index) => {
            const IconComp = iconMap[point.icon] || Sparkles;
            return (
              <div
                key={index}
                className="p-8 rounded-2xl bg-white border border-gold-200/80 shadow-luxury hover:shadow-elevated transition-all duration-300 hover:border-gold-400 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-gold-50 border border-gold-200 text-gold-700 flex items-center justify-center mb-6 group-hover:bg-gold-500 group-hover:text-charcoal-900 transition-colors">
                    <IconComp className="w-6 h-6 stroke-[1.75]" />
                  </div>

                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-charcoal-900 mb-3 group-hover:text-gold-700 transition-colors">
                    {point.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-charcoal-600 font-light leading-relaxed">
                    {point.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-gold-100 flex items-center justify-between">
                  <span className="text-[10px] uppercase tracking-widest text-gold-600 font-semibold">
                    0{index + 1} • Focus
                  </span>
                  <span className="w-2 h-2 rounded-full bg-gold-400 group-hover:scale-125 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
