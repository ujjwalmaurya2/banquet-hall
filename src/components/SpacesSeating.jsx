import React, { useState } from 'react';
import { Sparkles, Users, HelpCircle, Layers, ArrowRight } from 'lucide-react';
import { VENUE_SPACES } from '../data/venueData';

export default function SpacesSeating({ onOpenEnquiryWithSpace }) {
  const [activeTab, setActiveTab] = useState(VENUE_SPACES[0].id);
  const activeSpace = VENUE_SPACES.find(s => s.id === activeTab) || VENUE_SPACES[0];

  return (
    <section id="spaces" className="py-24 sm:py-32 bg-ivory-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gold-50 border border-gold-300 text-gold-800 text-xs font-semibold tracking-widest uppercase mb-4">
            <Layers className="w-3.5 h-3.5 text-gold-600" />
            <span>Versatile Layouts</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-charcoal-900 tracking-tight leading-tight">
            Spaces Designed Around <br className="hidden sm:inline" />
            <span className="italic font-normal text-gold-700">Your Celebration</span>
          </h2>
          <p className="mt-4 text-muted text-base sm:text-lg font-light leading-relaxed">
            From regal ceremonies in the banquet hall to open-air gatherings by the pool, every area adapts effortlessly to your preferred guest flow and seating design.
          </p>

          {/* Neutral Demo Disclaimer as requested */}
          <div className="mt-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-ivory-200/70 border border-charcoal-200/40 text-[11px] text-muted">
            <HelpCircle className="w-3 h-3 text-gold-600 flex-shrink-0" />
            <span>Layout arrangements shown are conceptual. Exact capacity depends on your decor and custom floor plan.</span>
          </div>
        </div>

        {/* Space Selection Tabs */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12">
          {VENUE_SPACES.map((space) => {
            const isActive = activeTab === space.id;
            return (
              <button
                key={space.id}
                onClick={() => setActiveTab(space.id)}
                className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide transition-all duration-300 ${
                  isActive
                    ? 'bg-charcoal-900 text-gold-300 shadow-luxury'
                    : 'bg-ivory-200/80 text-charcoal-700 hover:bg-ivory-300 hover:text-charcoal-900'
                }`}
              >
                {space.name}
              </button>
            );
          })}
        </div>

        {/* Featured Space Showcase */}
        <div className="bg-white rounded-3xl shadow-elevated border border-gold-200/60 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            
            {/* Image Side */}
            <div className="lg:col-span-7 relative h-72 sm:h-96 lg:h-[500px] overflow-hidden bg-charcoal-900">
              <img
                src={activeSpace.image}
                alt={activeSpace.name}
                className="w-full h-full object-cover transition-all duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/60 via-transparent to-transparent pointer-events-none" />
              
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 rounded-full bg-charcoal-900/80 border border-gold-300/40 text-gold-300 text-[11px] font-semibold tracking-widest uppercase backdrop-blur-md">
                  {activeSpace.subtitle}
                </span>
              </div>
            </div>

            {/* Content Side */}
            <div className="lg:col-span-5 p-8 sm:p-10 lg:p-12 flex flex-col justify-between bg-ivory-50/50">
              <div className="space-y-6">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-widest text-gold-700 block mb-1">
                    Featured Event Space
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-charcoal-900">
                    {activeSpace.name}
                  </h3>
                  <p className="text-xs text-muted font-medium mt-1">
                    {activeSpace.subtitle}
                  </p>
                </div>

                <p className="text-charcoal-700 text-sm sm:text-base leading-relaxed font-light">
                  {activeSpace.description}
                </p>

                {/* Conceptual Layout Badges */}
                <div className="pt-2 border-t border-gold-200/60">
                  <span className="text-[11px] font-semibold uppercase tracking-widest text-charcoal-900 block mb-3">
                    Configurable Layout Concepts:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {activeSpace.layouts.map((layout, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 rounded-md text-xs font-medium bg-ivory-200 border border-gold-300/50 text-charcoal-800"
                      >
                        {layout}
                      </span>
                    ))}
                  </div>
                  <p className="text-[11px] text-muted mt-2 italic">
                    {activeSpace.statusNote}
                  </p>
                </div>
              </div>

              {/* Bottom CTA for this Space */}
              <div className="pt-8 border-t border-gold-200/60 mt-8">
                <button
                  onClick={() => onOpenEnquiryWithSpace(activeSpace.name)}
                  className="w-full py-3.5 px-6 rounded-full bg-gold-500 hover:bg-gold-600 text-charcoal-900 font-semibold text-xs tracking-wider uppercase shadow-soft-gold transition-all duration-300 flex items-center justify-center gap-2 group"
                >
                  <span>Ask About Seating & Capacity</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
                <p className="text-[10px] text-center text-muted mt-2">
                  Our coordinator will discuss tailored floor plans for your guest count.
                </p>
              </div>

            </div>

          </div>
        </div>

        {/* 4 Quick Space Overview Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
          {VENUE_SPACES.map((space) => (
            <div
              key={space.id}
              onClick={() => setActiveTab(space.id)}
              className={`p-5 rounded-2xl border transition-all duration-300 cursor-pointer ${
                activeTab === space.id
                  ? 'bg-gold-50/90 border-gold-500 shadow-md ring-1 ring-gold-500/50'
                  : 'bg-white border-charcoal-200/60 hover:border-gold-300 hover:shadow-sm'
              }`}
            >
              <h4 className="font-serif text-lg font-bold text-charcoal-900 mb-1">
                {space.name}
              </h4>
              <p className="text-xs text-gold-700 font-medium mb-2">
                {space.subtitle}
              </p>
              <p className="text-xs text-muted line-clamp-2 mb-3">
                {space.description}
              </p>
              <span className="text-[11px] font-semibold text-charcoal-800 flex items-center gap-1 group">
                <span>View specifications</span>
                <span className="text-gold-600">→</span>
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
