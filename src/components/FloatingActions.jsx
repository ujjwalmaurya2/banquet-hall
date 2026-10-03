import React from 'react';
import { Phone, MessageCircle, Calendar } from 'lucide-react';
import { VENUE_INFO } from '../data/venueData';

export default function FloatingActions({ onOpenEnquiry, onOpenAvailability }) {
  const openWhatsApp = () => {
    window.open(`https://wa.me/${VENUE_INFO.whatsappDefaultNumber}?text=${VENUE_INFO.whatsappMessage}`, '_blank');
  };

  return (
    <>
      {/* Desktop Floating WhatsApp Button */}
      <div className="hidden lg:block fixed bottom-8 right-8 z-40">
        <button
          onClick={openWhatsApp}
          className="group flex items-center gap-3 pl-4 pr-5 py-3 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white shadow-2xl hover:shadow-emerald-900/40 transition-all duration-300 transform hover:-translate-y-1 border border-emerald-400/40"
          aria-label="Chat with Uma Palace on WhatsApp"
        >
          <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
            <MessageCircle className="w-5 h-5 text-white" />
          </div>
          <div className="text-left">
            <span className="block text-[10px] uppercase font-bold tracking-widest text-emerald-100">
              Direct Support
            </span>
            <span className="block text-xs font-bold tracking-wider">
              WhatsApp Us
            </span>
          </div>
        </button>
      </div>

      {/* Mobile Sticky Bottom Action Bar */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-charcoal-900/95 backdrop-blur-md border-t border-gold-400/30 px-4 py-2.5 shadow-2xl">
        <div className="grid grid-cols-3 gap-2 max-w-md mx-auto">
          {/* Call Button */}
          <a
            href={`tel:${VENUE_INFO.phones[0]}`}
            className="flex flex-col items-center justify-center py-1.5 px-2 rounded-xl bg-charcoal-800 hover:bg-charcoal-700 text-ivory-100 transition-colors border border-white/10"
          >
            <Phone className="w-4 h-4 text-gold-400 mb-0.5" />
            <span className="text-[10px] font-semibold tracking-wider uppercase">Call</span>
          </a>

          {/* WhatsApp Button */}
          <button
            onClick={openWhatsApp}
            className="flex flex-col items-center justify-center py-1.5 px-2 rounded-xl bg-emerald-600/90 hover:bg-emerald-600 text-white transition-colors shadow-sm"
          >
            <MessageCircle className="w-4 h-4 text-white mb-0.5" />
            <span className="text-[10px] font-semibold tracking-wider uppercase">WhatsApp</span>
          </button>

          {/* Enquire Button */}
          <button
            onClick={onOpenAvailability}
            className="flex flex-col items-center justify-center py-1.5 px-2 rounded-xl bg-gold-500 hover:bg-gold-600 text-charcoal-900 font-bold transition-colors shadow-sm"
          >
            <Calendar className="w-4 h-4 text-charcoal-900 mb-0.5" />
            <span className="text-[10px] font-bold tracking-wider uppercase">Book</span>
          </button>
        </div>
      </div>
    </>
  );
}
