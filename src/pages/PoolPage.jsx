import React from 'react';
import PageHero from '../components/PageHero';
import SwimmingPoolSection from '../components/SwimmingPoolSection';
import EnquirySection from '../components/EnquirySection';
import { Waves, Sparkles, Phone, MessageCircle, ArrowRight, Sun, Camera, ShieldCheck } from 'lucide-react';
import { VENUE_INFO } from '../data/venueData';

export default function PoolPage({ onOpenAvailability, onOpenEnquiry }) {
  const poolHighlights = [
    {
      icon: Sun,
      title: "Resort-Style Open Air Leisure",
      desc: "A sparkling outdoor swimming pool creating a tranquil escape right in Ghazipur, surrounded by paved lounge areas."
    },
    {
      icon: Sparkles,
      title: "Pre-Wedding Sundowner Events",
      desc: "Perfect for relaxed Mehendi ceremonies, family cocktail evenings, and celebratory gatherings under evening lights."
    },
    {
      icon: Camera,
      title: "Picturesque Photo Opportunities",
      desc: "Water reflections, twilight lighting, and architectural vistas providing an idyllic backdrop for couple and family portraits."
    },
    {
      icon: ShieldCheck,
      title: "Managed & Maintained Experience",
      desc: "Maintained with care to ensure a clean, hospitable, and safe leisure environment for all your event guests."
    }
  ];

  const openWhatsApp = () => {
    const msg = encodeURIComponent("Hello Uma Palace, I am inquiring regarding the swimming pool availability, timings, and event booking details.");
    window.open(`https://wa.me/${VENUE_INFO.whatsappDefaultNumber}?text=${msg}`, '_blank');
  };

  return (
    <div>
      <PageHero
        badge="Swimming Pool"
        eyebrow="Signature Leisure"
        title="A Little More Than a Celebration"
        subtitle="Enjoy a refreshing space designed to add a different dimension to your experience at Uma Palace Ghazipur."
        image="/images/editorial/poolside_evening_luxury.jpg"
      />

      {/* Main Swimming Pool Feature Section */}
      <SwimmingPoolSection onOpenEnquiry={onOpenEnquiry} />

      {/* In-Depth Poolside Experience Grid */}
      <section className="py-20 bg-ivory-50 border-t border-gold-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs uppercase tracking-widest text-gold-700 font-semibold block mb-2">
              The Poolside Dimension
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-charcoal-900">
              Where Relaxation Meets Celebration
            </h2>
            <p className="text-xs sm:text-sm text-muted mt-2 font-light">
              Add a relaxed, memorable dimension to your wedding itinerary or host an exclusive poolside celebration.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {poolHighlights.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div
                  key={idx}
                  className="p-7 rounded-2xl bg-white border border-gold-200/80 shadow-luxury flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-cyan-50 border border-cyan-200 text-cyan-700 flex items-center justify-center mb-5">
                      <IconComp className="w-6 h-6 stroke-[1.75]" />
                    </div>
                    <h3 className="font-serif text-lg font-bold text-charcoal-900 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-xs text-muted leading-relaxed font-light">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Real Instagram Pool Photo Grid */}
          <div className="mt-14 p-8 rounded-3xl bg-charcoal-900 text-white border border-gold-500/20">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-5 space-y-4">
                <span className="text-xs uppercase tracking-widest text-cyan-300 font-semibold">
                  Official Instagram Capture
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold">
                  As Seen on @uma.palace
                </h3>
                <p className="text-xs sm:text-sm text-ivory-200 font-light leading-relaxed">
                  Real snapshots of the pristine swimming pool and courtyard from Uma Palace's official Instagram feed.
                </p>
                <div className="p-4 rounded-xl bg-charcoal-800/80 border border-white/10 text-xs text-ivory-300 leading-relaxed">
                  <strong className="text-gold-300 block mb-1">Pool Availability Notice:</strong>
                  Contact us for pool availability, event inclusion terms, and private booking details.
                </div>
              </div>

              <div className="lg:col-span-7 grid grid-cols-2 gap-4">
                <div className="rounded-2xl overflow-hidden border border-gold-400/30">
                  <img
                    src="/images/venue/uma_ig_13.jpg"
                    alt="Uma Palace Swimming Pool Atmosphere"
                    className="w-full h-52 object-cover hover:scale-105 transition-transform duration-500"
                  />
                  <div className="p-2.5 bg-charcoal-800 text-[11px] text-ivory-200 text-center font-medium">
                    Poolside Evening Glow
                  </div>
                </div>
                <div className="rounded-2xl overflow-hidden border border-gold-400/30">
                  <img
                    src="/images/editorial/pool_daylight.jpg"
                    alt="Daylight Swimming Pool"
                    className="w-full h-52 object-cover hover:scale-105 transition-transform duration-500"
                  />
                  <div className="p-2.5 bg-charcoal-800 text-[11px] text-ivory-200 text-center font-medium">
                    Sunlit Open Terrace
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Enquiry Form */}
      <EnquirySection
        prefilledSpace="Outdoor / Poolside Area"
        onOpenAvailability={onOpenAvailability}
      />
    </div>
  );
}
