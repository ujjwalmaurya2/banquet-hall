import React from 'react';
import PageHero from '../components/PageHero';
import WeddingsSection from '../components/WeddingsSection';
import VisualStory from '../components/VisualStory';
import EnquirySection from '../components/EnquirySection';
import { VENUE_INFO } from '../data/venueData';
import { Heart, Sparkles, Calendar, MessageCircle, Check } from 'lucide-react';

export default function WeddingsPage({ onOpenAvailability, onOpenEnquiry }) {
  const weddingFeatures = [
    "Dedicated Mandap Ritual Setup with Sacred Fire Staging",
    "Grand Baraat Welcoming Courtyard on Urdu Bazar Road",
    "Climate-Controlled Banquet Hall for Dining & Receptions",
    "Bridal & Family Preparation Suites for Relaxed Dressing",
    "Open-Air Poolside Space for Mehendi Sundowners & Sangeet",
    "Spacious Stage Architecture for Jaymala & Couple Greetings"
  ];

  return (
    <div>
      <PageHero
        badge="Weddings"
        eyebrow="Matrimonial Grandeur"
        title="Your Day. Your People. Your Moment."
        subtitle="Celebrate the sacred beginning of your marriage surrounded by architectural beauty, traditional reverence, and royal hospitality."
        image="/images/editorial/wedding_ceremony_mandap.jpg"
      />

      {/* Weddings Section Overview Cards */}
      <WeddingsSection onOpenEnquiry={onOpenEnquiry} />

      {/* Thoughtful Wedding Hospitality Checklist */}
      <section className="py-20 bg-ivory-50 border-t border-gold-200/60">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-12 rounded-3xl bg-white border border-gold-300/80 shadow-luxury">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-xs uppercase tracking-widest text-gold-700 font-semibold block mb-1">
                The Matrimonial Promise
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-charcoal-900">
                Crafted for Every Sacred Ritual
              </h2>
              <p className="text-xs sm:text-sm text-muted mt-2 font-light">
                Every ritual from Haldi and Mehendi to Pheras and the grand reception finds a tailored, picturesque space at Uma Palace Ghazipur.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {weddingFeatures.map((feat, i) => (
                <div key={i} className="flex items-start gap-3 p-3.5 rounded-xl bg-ivory-100/70 border border-gold-200/50">
                  <div className="w-5 h-5 rounded-full bg-gold-500/20 text-gold-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 stroke-[2.5]" />
                  </div>
                  <span className="text-xs sm:text-sm text-charcoal-800 font-medium">
                    {feat}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-gold-100 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs text-muted italic">
                *Custom stage decorations and catering layouts arranged in consultation with our coordinator.
              </span>
              <button
                onClick={() => onOpenEnquiry("Wedding Consultation")}
                className="px-6 py-2.5 rounded-full bg-gold-500 hover:bg-gold-600 text-charcoal-900 font-bold text-xs tracking-wider uppercase shadow-soft-gold"
              >
                Plan Your Wedding
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Guest Journey Story */}
      <VisualStory />

      {/* Enquiry Form */}
      <EnquirySection
        prefilledSpace="Main Banquet Hall"
        onOpenAvailability={onOpenAvailability}
      />
    </div>
  );
}
