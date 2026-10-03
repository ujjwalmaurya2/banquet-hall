import React from 'react';
import { Waves, Sparkles, Phone, MessageCircle, ArrowRight } from 'lucide-react';
import { VENUE_INFO } from '../data/venueData';

export default function SwimmingPoolSection({ onOpenEnquiry }) {
  const openWhatsApp = () => {
    const msg = encodeURIComponent("Hello Uma Palace, I would like to inquire about the swimming pool availability and details for an event/visit.");
    window.open(`https://wa.me/${VENUE_INFO.whatsappDefaultNumber}?text=${msg}`, '_blank');
  };

  return (
    <section id="pool" className="py-24 sm:py-32 bg-charcoal-900 text-white relative overflow-hidden">
      {/* Background radial gradient glow */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-sky-950/40 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-gold-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Side: Editorial Pool Visuals */}
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div className="relative">
              {/* Main Pool Image */}
              <div className="relative rounded-3xl overflow-hidden shadow-elevated border border-gold-400/30">
                <img
                  src="/images/editorial/poolside_evening_luxury.jpg"
                  alt="Uma Palace Swimming Pool Ghazipur"
                  className="w-full h-[400px] sm:h-[480px] object-cover hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/90 via-transparent to-transparent pointer-events-none" />
                
                <div className="absolute bottom-6 left-6 right-6">
                  <span className="text-[11px] font-semibold tracking-widest uppercase text-cyan-300 block mb-1">
                    Signature Outdoor Space
                  </span>
                  <p className="font-serif text-2xl font-bold text-white">
                    Tranquil Poolside Evenings
                  </p>
                  <p className="text-xs text-ivory-200/80 mt-1">
                    Uma Palace • Urdu Bazar Road, Jamlapur
                  </p>
                </div>
              </div>

              {/* Inset Second Real Instagram Pool Pic */}
              <div className="absolute -bottom-8 -right-4 sm:-right-8 w-44 sm:w-56 rounded-2xl overflow-hidden shadow-2xl border-2 border-gold-400/50 bg-charcoal-800 hidden xs:block">
                <img
                  src="/images/venue/uma_ig_13.jpg"
                  alt="Uma Palace Pool Atmosphere"
                  className="w-full h-32 sm:h-36 object-cover"
                />
                <div className="p-2.5 bg-charcoal-900/95 text-[10px] text-gold-300 font-medium tracking-wider flex items-center justify-between">
                  <span>Pool Ambience</span>
                  <span className="text-emerald-400">● Open</span>
                </div>
              </div>

            </div>
          </div>

          {/* Right Side: Content */}
          <div className="lg:col-span-6 order-1 lg:order-2 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-950/60 border border-cyan-400/40 text-cyan-300 text-xs font-semibold tracking-widest uppercase">
              <Waves className="w-3.5 h-3.5 text-cyan-400" />
              <span>Poolside Elegance</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white tracking-tight leading-tight">
              A Little More Than <br />
              <span className="italic font-normal text-gold-300 font-serif">a Celebration</span>
            </h2>

            <p className="text-ivory-100 text-base sm:text-lg font-light leading-relaxed">
              Enjoy a refreshing space designed to add a different dimension to your experience. The sparkling swimming pool at Uma Palace elevates typical banquet proceedings into a relaxed, resort-style memory for your guests.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-gold-500/20 text-gold-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Sparkles className="w-3 h-3" />
                </div>
                <p className="text-xs sm:text-sm text-ivory-200">
                  <strong className="text-white">Pre-wedding Sundowners & Mehendi:</strong> A picturesque open-air setting for daytime floral celebrations or dusk lighting.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-gold-500/20 text-gold-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Sparkles className="w-3 h-3" />
                </div>
                <p className="text-xs sm:text-sm text-ivory-200">
                  <strong className="text-white">Memorable Photography Backdrops:</strong> Crisp water reflections and illuminated night fountain vistas for couple portraits.
                </p>
              </div>
            </div>

            {/* Strict Demo Rule Compliance Notice */}
            <div className="p-4 rounded-xl bg-charcoal-800/80 border border-white/10 text-xs text-ivory-200">
              <p className="font-medium text-gold-300 mb-1">
                Pool Availability Notice:
              </p>
              <p className="font-light leading-relaxed">
                Contact us for pool availability and details. Pool access, event coordination, and seasonal guidelines are confirmed directly by management upon consultation.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                onClick={() => onOpenEnquiry("Swimming Pool Inquiry")}
                className="px-8 py-3.5 rounded-full bg-gold-500 hover:bg-gold-600 text-charcoal-900 font-semibold text-xs tracking-wider uppercase shadow-soft-gold transition-all duration-300 transform hover:-translate-y-0.5 flex items-center gap-2"
              >
                <span>Explore the Pool</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={openWhatsApp}
                className="px-6 py-3.5 rounded-full bg-emerald-600/90 hover:bg-emerald-600 text-white font-semibold text-xs tracking-wider uppercase transition-all duration-300 flex items-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Pool Inquiry</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
