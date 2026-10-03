import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Sparkles, ExternalLink } from 'lucide-react';
import { InstagramIcon } from './SocialIcons';
import { VENUE_INFO } from '../data/venueData';

export default function LightboxModal({ item, onClose, onPrev, onNext }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, onPrev, onNext]);

  if (!item) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-charcoal-900/95 backdrop-blur-md animate-fadeIn">
      {/* Background Click to Dismiss */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Top Controls */}
      <div className="absolute top-4 right-4 sm:top-6 sm:right-6 z-20 flex items-center gap-3">
        {item.isRealIG && (
          <a
            href={VENUE_INFO.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xs font-semibold tracking-wider hover:opacity-90 transition-opacity"
          >
            <InstagramIcon className="w-3.5 h-3.5" />
            <span>@uma.palace</span>
          </a>
        )}

        <button
          onClick={onClose}
          className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center backdrop-blur-md transition-colors"
          aria-label="Close Lightbox"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={onPrev}
        className="absolute left-2 sm:left-6 z-20 w-11 h-11 rounded-full bg-white/10 hover:bg-gold-500 hover:text-charcoal-900 text-white flex items-center justify-center backdrop-blur-md transition-all duration-300"
        aria-label="Previous Image"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={onNext}
        className="absolute right-2 sm:right-6 z-20 w-11 h-11 rounded-full bg-white/10 hover:bg-gold-500 hover:text-charcoal-900 text-white flex items-center justify-center backdrop-blur-md transition-all duration-300"
        aria-label="Next Image"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Modal Content / Image Display */}
      <div className="relative z-10 max-w-5xl max-h-[90vh] flex flex-col items-center">
        <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-black flex items-center justify-center max-h-[72vh]">
          <img
            src={item.image}
            alt={item.title}
            className="max-h-[72vh] max-w-full w-auto object-contain transition-all duration-300"
          />
        </div>

        {/* Caption & Metadata Bar */}
        <div className="mt-4 text-center max-w-2xl px-4 text-white">
          <div className="inline-flex items-center gap-2 mb-1">
            <span className="px-2.5 py-0.5 rounded text-[10px] font-semibold uppercase tracking-widest bg-gold-500 text-charcoal-900">
              {item.badge || item.category}
            </span>
            {item.isRealIG && (
              <span className="text-[11px] text-pink-300 flex items-center gap-1 font-medium">
                <InstagramIcon className="w-3 h-3" />
                Real Instagram Post
              </span>
            )}
          </div>
          <h3 className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-white">
            {item.title}
          </h3>
          <p className="text-xs sm:text-sm text-ivory-200/80 font-light mt-0.5">
            {item.subtitle} • Uma Palace Ghazipur
          </p>
        </div>
      </div>
    </div>
  );
}
