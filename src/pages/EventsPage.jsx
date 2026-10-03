import React from 'react';
import PageHero from '../components/PageHero';
import EventsSection from '../components/EventsSection';
import SpacesSeating from '../components/SpacesSeating';
import EnquirySection from '../components/EnquirySection';
import { Sparkles, Calendar, MessageCircle, Briefcase, Users, Cake } from 'lucide-react';
import { VENUE_INFO } from '../data/venueData';

export default function EventsPage({ onOpenAvailability, onOpenEnquiry, onOpenEnquiryWithSpace }) {
  const openWhatsApp = () => {
    const msg = encodeURIComponent("Hello Uma Palace, I am inquiring about booking the venue for a corporate / social event.");
    window.open(`https://wa.me/${VENUE_INFO.whatsappDefaultNumber}?text=${msg}`, '_blank');
  };

  return (
    <div>
      <PageHero
        badge="Events"
        eyebrow="Celebrations & Gatherings"
        title="More Than Weddings"
        subtitle="A versatile setting for celebrations and gatherings in Ghazipur. Designed to host birthdays, corporate events, anniversaries, and family milestones."
        image="/images/editorial/stage_celebration_lights.jpg"
      />

      {/* Events Categories */}
      <EventsSection onOpenEnquiry={onOpenEnquiry} />

      {/* Space Layouts for Events */}
      <SpacesSeating onOpenEnquiryWithSpace={onOpenEnquiryWithSpace} />

      {/* Quick Booking Strip */}
      <section className="py-16 bg-charcoal-900 text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
          <span className="text-xs uppercase tracking-widest text-gold-400 font-semibold block">
            Custom Event Configuration
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold">
            Host Your Next Function at Uma Palace
          </h2>
          <p className="text-xs sm:text-sm text-ivory-200/90 max-w-2xl mx-auto font-light leading-relaxed">
            From boardroom style setups and projector presentations to celebratory banquets and birthday feasts, our venue adjusts to your gathering size.
          </p>
          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => onOpenEnquiry("Special Event Booking")}
              className="px-8 py-3.5 rounded-full bg-gold-500 hover:bg-gold-600 text-charcoal-900 font-bold text-xs tracking-wider uppercase shadow-soft-gold"
            >
              Inquire for Your Event
            </button>
            <button
              onClick={openWhatsApp}
              className="px-8 py-3.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs tracking-wider uppercase flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Event Team</span>
            </button>
          </div>
        </div>
      </section>

      {/* Enquiry Form */}
      <EnquirySection
        prefilledSpace="Complete Venue Booking"
        onOpenAvailability={onOpenAvailability}
      />
    </div>
  );
}
