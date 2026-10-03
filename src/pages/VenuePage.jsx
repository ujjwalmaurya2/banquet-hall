import React from 'react';
import PageHero from '../components/PageHero';
import SpacesSeating from '../components/SpacesSeating';
import Amenities from '../components/Amenities';
import WhyChooseUs from '../components/WhyChooseUs';
import LocationSection from '../components/LocationSection';
import { VENUE_INFO } from '../data/venueData';
import { Sparkles, Calendar, MessageCircle, MapPin, ArrowRight, ShieldCheck } from 'lucide-react';

export default function VenuePage({ onOpenAvailability, onOpenEnquiryWithSpace }) {
  const openWhatsApp = () => {
    window.open(`https://wa.me/${VENUE_INFO.whatsappDefaultNumber}?text=${VENUE_INFO.whatsappMessage}`, '_blank');
  };

  return (
    <div>
      <PageHero
        badge="The Venue"
        eyebrow="Architectural Excellence"
        title="Discover Uma Palace"
        subtitle="A versatile setting crafted for grand wedding ceremonies, banquet celebrations, and open-air poolside hospitality."
        image="/images/editorial/banquet_hall_interior.jpg"
      />

      {/* Spaces & Seating Breakdown */}
      <SpacesSeating onOpenEnquiryWithSpace={onOpenEnquiryWithSpace} />

      {/* Real Instagram Venue Showcase */}
      <section className="py-20 bg-ivory-100 border-t border-gold-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs uppercase tracking-widest text-gold-700 font-semibold block mb-2">
              Authentic Glimpses
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-charcoal-900">
              Live Captures from @uma.palace
            </h2>
            <p className="text-xs sm:text-sm text-muted mt-2">
              Official snapshots of the venue interiors, stage setups, and poolside vistas on Urdu Bazar Road, Jamlapur.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="rounded-2xl overflow-hidden shadow-luxury border border-gold-200 bg-charcoal-900">
              <img
                src="/images/venue/uma_ig_6.jpg"
                alt="Uma Palace Real Post"
                className="w-full h-72 object-cover hover:scale-105 transition-transform duration-500"
              />
              <div className="p-4 bg-white">
                <span className="text-[10px] font-semibold uppercase tracking-wider text-pink-700">Official Instagram Post</span>
                <p className="text-sm font-serif font-bold text-charcoal-900 mt-1">Banquet Setup & Facade</p>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden shadow-luxury border border-gold-200 bg-charcoal-900">
              <img
                src="/images/venue/uma_ig_15.jpg"
                alt="Uma Palace Real Post"
                className="w-full h-72 object-cover hover:scale-105 transition-transform duration-500"
              />
              <div className="p-4 bg-white">
                <span className="text-[10px] font-semibold uppercase tracking-wider text-pink-700">Official Instagram Post</span>
                <p className="text-sm font-serif font-bold text-charcoal-900 mt-1">Celebratory Dining & Lighting</p>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden shadow-luxury border border-gold-200 bg-charcoal-900">
              <img
                src="/images/venue/uma_ig_13.jpg"
                alt="Uma Palace Real Post"
                className="w-full h-72 object-cover hover:scale-105 transition-transform duration-500"
              />
              <div className="p-4 bg-white">
                <span className="text-[10px] font-semibold uppercase tracking-wider text-pink-700">Official Instagram Post</span>
                <p className="text-sm font-serif font-bold text-charcoal-900 mt-1">Evening Poolside Atmosphere</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Amenities Section */}
      <Amenities onOpenAvailability={onOpenAvailability} />

      {/* Why Choose Us */}
      <WhyChooseUs />

      {/* Venue CTA Strip */}
      <section className="py-16 bg-charcoal-900 text-white border-t border-gold-500/20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="text-xs uppercase tracking-widest text-gold-400 font-semibold block">
            Plan An In-Person Walkthrough
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold">
            Experience the Grandeur of Uma Palace in Person
          </h2>
          <p className="text-sm text-ivory-200/90 max-w-2xl mx-auto font-light leading-relaxed">
            Our management team is happy to guide your family through the banquet hall, poolside zones, and dining areas to select the perfect arrangement for your occasion.
          </p>
          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={onOpenAvailability}
              className="px-8 py-3.5 rounded-full bg-gold-500 hover:bg-gold-600 text-charcoal-900 font-bold text-xs tracking-wider uppercase shadow-soft-gold"
            >
              Check Date Availability
            </button>
            <button
              onClick={openWhatsApp}
              className="px-8 py-3.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs tracking-wider uppercase flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Inquire via WhatsApp</span>
            </button>
          </div>
        </div>
      </section>

      <LocationSection />
    </div>
  );
}
