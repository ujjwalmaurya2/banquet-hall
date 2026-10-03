import React from 'react';
import { MapPin, Phone, MessageCircle, Navigation, ExternalLink, Clock } from 'lucide-react';
import { VENUE_INFO } from '../data/venueData';

export default function LocationSection() {
  const directionsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent("Uma Palace Urdu Bazar Road Jamlapur Ghazipur Uttar Pradesh")}`;

  const openWhatsApp = () => {
    window.open(`https://wa.me/${VENUE_INFO.whatsappDefaultNumber}?text=${VENUE_INFO.whatsappMessage}`, '_blank');
  };

  return (
    <section id="contact" className="py-24 sm:py-32 bg-ivory-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gold-50 border border-gold-300 text-gold-800 text-xs font-semibold tracking-widest uppercase mb-4">
            <MapPin className="w-3.5 h-3.5 text-gold-600" />
            <span>Venue Location</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-charcoal-900 tracking-tight leading-tight">
            Find Us in Ghazipur
          </h2>

          <p className="mt-4 text-muted text-base sm:text-lg font-light leading-relaxed">
            Conveniently situated on Urdu Bazar Road in Jamlapur, Uma Palace offers direct road connectivity for your guests arriving from across the district.
          </p>
        </div>

        {/* Location & Map Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          
          {/* Left Column: Venue Details & Quick Contacts */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            
            {/* Address Box */}
            <div className="p-8 rounded-3xl bg-white border border-gold-200/80 shadow-luxury space-y-6">
              <div>
                <span className="text-xs uppercase tracking-widest text-gold-700 font-semibold block mb-1">
                  Physical Address
                </span>
                <h3 className="font-serif text-2xl font-bold text-charcoal-900">
                  {VENUE_INFO.name}
                </h3>
                <p className="text-sm text-charcoal-700 mt-2 font-light leading-relaxed flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-gold-600 flex-shrink-0 mt-1" />
                  <span>{VENUE_INFO.displayAddress}</span>
                </p>
              </div>

              {/* Direct Phone Lines */}
              <div className="pt-4 border-t border-gold-100">
                <span className="text-xs uppercase tracking-widest text-charcoal-900 font-semibold block mb-3">
                  Direct Phone Contacts
                </span>
                <div className="space-y-2">
                  {VENUE_INFO.phones.map((phone, i) => (
                    <a
                      key={i}
                      href={`tel:${phone}`}
                      className="flex items-center justify-between p-3 rounded-xl bg-ivory-100 hover:bg-gold-50 border border-gold-200/60 text-charcoal-800 hover:text-gold-800 transition-colors group"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-gold-200/60 flex items-center justify-center text-gold-800">
                          <Phone className="w-3.5 h-3.5" />
                        </div>
                        <span className="font-mono text-sm font-semibold tracking-wider">
                          +91 {phone}
                        </span>
                      </div>
                      <span className="text-xs font-semibold text-gold-700 group-hover:translate-x-0.5 transition-transform">
                        Call Line {i + 1} →
                      </span>
                    </a>
                  ))}
                </div>
              </div>

              {/* Visit / Inquiry Hours */}
              <div className="pt-4 border-t border-gold-100">
                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-gold-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h5 className="text-xs font-semibold uppercase tracking-wider text-charcoal-900">
                      Venue Visits & Consultations
                    </h5>
                    <p className="text-xs text-muted mt-0.5 font-light">
                      Advance telephone confirmation is recommended for guided walkthroughs and hall inspections.
                    </p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 flex flex-col sm:flex-row gap-3">
                <a
                  href={directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 px-4 rounded-full bg-charcoal-900 hover:bg-charcoal-800 text-gold-300 text-xs font-semibold tracking-wider uppercase flex items-center justify-center gap-2 shadow-sm transition-colors text-center"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Get Directions</span>
                </a>

                <button
                  onClick={openWhatsApp}
                  className="flex-1 py-3 px-4 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold tracking-wider uppercase flex items-center justify-center gap-2 shadow-sm transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>WhatsApp Us</span>
                </button>
              </div>

            </div>

          </div>

          {/* Right Column: Google Maps Embed with Stylized Wrapper */}
          <div className="lg:col-span-7">
            <div className="w-full h-full min-h-[420px] rounded-3xl overflow-hidden shadow-elevated border border-gold-200/80 bg-ivory-200 relative">
              <iframe
                title="Uma Palace Ghazipur Location Map"
                src="https://maps.google.com/maps?q=Urdu+Bazar+Road,+Jamlapur,+Ghazipur,+Uttar+Pradesh&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                className="w-full h-full min-h-[420px] border-0"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />

              {/* Map floating card tag */}
              <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md p-3 rounded-xl shadow-md border border-gold-200 hidden sm:block">
                <p className="font-serif font-bold text-xs text-charcoal-900">
                  {VENUE_INFO.name}
                </p>
                <p className="text-[10px] text-muted">
                  Urdu Bazar Road, Jamlapur, Ghazipur
                </p>
              </div>

              <div className="absolute bottom-4 right-4">
                <a
                  href={directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-lg bg-white/95 hover:bg-white text-charcoal-900 shadow-md text-xs font-semibold flex items-center gap-1.5 border border-charcoal-200"
                >
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3 h-3 text-gold-600" />
                </a>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
