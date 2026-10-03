import React from 'react';
import { Building2, HeartHandshake, CalendarCheck, Waves, Bed, Utensils, Zap, Car, Sparkles, CheckCircle2 } from 'lucide-react';
import { AMENITIES_CONFIRMED, AMENITIES_ADDITIONAL } from '../data/venueData';

const iconMap = {
  Building2,
  HeartHandshake,
  CalendarCheck,
  Waves,
  Bed,
  Utensils,
  Zap,
  Car
};

export default function Amenities({ onOpenAvailability }) {
  return (
    <section className="py-24 sm:py-32 bg-ivory-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gold-50 border border-gold-300 text-gold-800 text-xs font-semibold tracking-widest uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5 text-gold-600" />
            <span>Venue Facilities</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-charcoal-900 tracking-tight leading-tight">
            Everything You Need for a <br className="hidden sm:inline" />
            <span className="italic font-normal text-gold-700">Memorable Celebration</span>
          </h2>

          <p className="mt-4 text-muted text-base sm:text-lg font-light leading-relaxed">
            Essential hospitality amenities and spacious venue infrastructure designed to make your wedding or event seamless for hosts and guests alike.
          </p>
        </div>

        {/* Primary Confirmed Facilities (4 Core) */}
        <div className="mb-14">
          <h3 className="text-xs uppercase tracking-widest font-semibold text-charcoal-800 mb-6 text-center sm:text-left flex items-center justify-center sm:justify-start gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            <span>Confirmed Venue Offerings</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {AMENITIES_CONFIRMED.map((item, idx) => {
              const IconComp = iconMap[item.icon] || Sparkles;
              return (
                <div
                  key={idx}
                  className="p-7 rounded-2xl bg-white border border-gold-300 shadow-luxury hover:shadow-elevated transition-all duration-300 group relative overflow-hidden"
                >
                  <div className="w-12 h-12 rounded-xl bg-gold-50 border border-gold-300 text-gold-700 flex items-center justify-center mb-5 group-hover:bg-gold-500 group-hover:text-charcoal-900 transition-colors">
                    <IconComp className="w-6 h-6 stroke-[1.75]" />
                  </div>

                  <span className="inline-flex items-center gap-1 text-[10px] font-semibold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full mb-2">
                    <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                    <span>{item.status}</span>
                  </span>

                  <h4 className="font-serif text-xl font-bold text-charcoal-900 mb-2">
                    {item.name}
                  </h4>

                  <p className="text-xs text-charcoal-600 font-light leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Additional Conveniences (Marked clearly as Inquire for details) */}
        <div className="p-8 sm:p-10 rounded-3xl bg-ivory-50 border border-gold-200/80 shadow-sm">
          <div className="max-w-2xl mb-6">
            <h3 className="font-serif text-2xl font-bold text-charcoal-900">
              Additional Event Conveniences & Support
            </h3>
            <p className="text-xs text-muted mt-1">
              The following facilities can be coordinated or tailored according to your specific celebration requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {AMENITIES_ADDITIONAL.map((item, idx) => {
              const IconComp = iconMap[item.icon] || Sparkles;
              return (
                <div
                  key={idx}
                  className="p-5 rounded-xl bg-white border border-gold-100 flex flex-col justify-between"
                >
                  <div>
                    <div className="w-10 h-10 rounded-lg bg-ivory-200 text-charcoal-700 flex items-center justify-center mb-3">
                      <IconComp className="w-5 h-5 stroke-[1.5]" />
                    </div>
                    <h5 className="font-serif text-base font-bold text-charcoal-900 mb-1">
                      {item.name}
                    </h5>
                    <p className="text-xs text-muted font-light leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-ivory-200">
                    <span className="text-[10px] font-medium text-gold-700 uppercase tracking-wider block">
                      {item.statusNote}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-8 pt-6 border-t border-gold-200/60 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-muted">
              Have specific logistical or technical needs for your ceremony? Talk to our team.
            </p>
            <button
              onClick={onOpenAvailability}
              className="px-6 py-2.5 rounded-full bg-charcoal-900 hover:bg-charcoal-800 text-gold-300 text-xs font-semibold tracking-wider uppercase transition-colors"
            >
              Ask About Facilities
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
