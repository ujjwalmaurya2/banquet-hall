import React from 'react';
import { MessageSquareQuote, Sparkles, Star, PlusCircle } from 'lucide-react';
import { VENUE_INFO } from '../data/venueData';

export default function Testimonials() {
  return (
    <section className="py-24 sm:py-32 bg-ivory-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gold-50 border border-gold-300 text-gold-800 text-xs font-semibold tracking-widest uppercase mb-4">
            <MessageSquareQuote className="w-3.5 h-3.5 text-gold-600" />
            <span>Guest Impressions</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-charcoal-900 tracking-tight leading-tight">
            What Our Guests Say
          </h2>

          <p className="mt-4 text-muted text-base sm:text-lg font-light leading-relaxed">
            Real experiences and heartfelt memories shared by families who celebrated their milestone moments at Uma Palace.
          </p>
        </div>

        {/* Demo State Notice Card */}
        <div className="max-w-4xl mx-auto mb-10 p-4 rounded-xl bg-gold-50/80 border border-gold-300/80 text-center">
          <p className="text-xs text-gold-900 font-medium">
            ✨ <strong className="font-semibold">Client Presentation Note:</strong> To ensure complete authenticity, this section is prepared in demo mode without placeholder customer names or fabricated reviews. Genuine client testimonials and wedding reviews can be seamlessly added here.
          </p>
        </div>

        {/* 3 Editorial Demo Review Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {[1, 2, 3].map((slot) => (
            <div
              key={slot}
              className="p-8 rounded-2xl bg-white border border-dashed border-gold-300/90 shadow-sm flex flex-col justify-between relative overflow-hidden"
            >
              <div>
                {/* Star rating placeholder */}
                <div className="flex items-center gap-1 text-gold-400 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-gold-400 text-gold-400" />
                  ))}
                </div>

                {/* Quotation text placeholder */}
                <blockquote className="text-sm text-charcoal-700 font-light italic leading-relaxed mb-6">
                  “Guest testimonial will appear here. The space is formatted for verified wedding couples and event hosts to share their celebration experience, dining quality, and hospitality feedback.”
                </blockquote>
              </div>

              {/* Author footer */}
              <div className="pt-4 border-t border-gold-100 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-ivory-200 border border-gold-200 flex items-center justify-center text-gold-700 font-serif font-bold text-sm">
                  G{slot}
                </div>
                <div>
                  <h4 className="font-serif font-bold text-sm text-charcoal-900">
                    Verified Host Slot {slot}
                  </h4>
                  <p className="text-[11px] text-muted">
                    Wedding / Banquet Guest • Ghazipur
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
