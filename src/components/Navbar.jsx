import React, { useState, useEffect } from 'react';
import { NavLink, useLocation, Link } from 'react-router-dom';
import { Sparkles, Calendar, Phone, MessageCircle, Menu, X, MapPin, ChevronRight } from 'lucide-react';
import { VENUE_INFO, NAVIGATION_LINKS } from '../data/venueData';
import { InstagramIcon } from './SocialIcons';

export default function Navbar({ onOpenAvailability }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const openWhatsApp = () => {
    window.open(
      `https://wa.me/${VENUE_INFO.whatsappDefaultNumber}?text=${VENUE_INFO.whatsappMessage}`,
      '_blank'
    );
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-500 font-sans">
        
        {/* Tier 1: Top Royal Utility Bar (Desktop only) */}
        <div
          className={`hidden lg:block bg-[#110F0D] border-b border-gold-500/20 text-ivory-200 transition-all duration-300 ${
            isScrolled ? 'py-1 opacity-90' : 'py-1.5 opacity-100'
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between text-[11px] tracking-wider">
              {/* Left: Location & Tagline */}
              <div className="flex items-center gap-4">
                <span className="flex items-center gap-1.5 text-gold-300/90 font-medium">
                  <MapPin className="w-3 h-3 text-gold-400" />
                  <span>Urdu Bazar Road, Jamlapur, Ghazipur</span>
                </span>
                <span className="text-gold-500/40">|</span>
                <span className="text-ivory-300 font-light flex items-center gap-1">
                  <Sparkles className="w-2.5 h-2.5 text-gold-400" />
                  <span>Book your special day with us ✨</span>
                </span>
              </div>

              {/* Right: Phone Numbers & Instagram */}
              <div className="flex items-center gap-5">
                <a
                  href={`tel:${VENUE_INFO.phones[0]}`}
                  className="flex items-center gap-1.5 hover:text-gold-300 transition-colors font-mono"
                >
                  <Phone className="w-3 h-3 text-gold-400" />
                  <span>+91 {VENUE_INFO.phones[0]}</span>
                </a>
                <span className="text-gold-500/40">|</span>
                <button
                  onClick={openWhatsApp}
                  className="flex items-center gap-1.5 hover:text-emerald-300 text-emerald-400 font-medium transition-colors"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>WhatsApp Direct</span>
                </button>
                <span className="text-gold-500/40">|</span>
                <a
                  href={VENUE_INFO.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 hover:text-pink-300 text-ivory-300 transition-colors"
                >
                  <InstagramIcon className="w-3 h-3 text-pink-400" />
                  <span>@uma.palace</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Tier 2: Main Luxury Palace Navigation Bar */}
        <div
          className={`transition-all duration-500 border-b ${
            isScrolled
              ? 'bg-[#151310]/95 backdrop-blur-xl border-gold-500/30 py-2.5 shadow-2xl'
              : 'bg-[#181512]/90 backdrop-blur-md border-gold-500/20 py-4 shadow-lg'
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between">
              
              {/* Brand Logo / Royal Monogram */}
              <Link
                to="/"
                className="flex items-center gap-2.5 sm:gap-3.5 group flex-shrink-0 text-left min-w-0"
              >
                {/* Royal Crest Monogram Badge */}
                <div className="relative w-9 h-9 sm:w-11 sm:h-11 rounded-full p-[1.5px] bg-gradient-to-tr from-gold-600 via-gold-300 to-gold-700 shadow-md transition-transform duration-300 group-hover:scale-105 flex-shrink-0">
                  <div className="w-full h-full rounded-full bg-[#171512] flex items-center justify-center border border-gold-400/40">
                    <span className="font-serif text-gold-300 font-bold text-xs sm:text-sm tracking-wider">
                      UP
                    </span>
                  </div>
                  {/* Subtle corner micro-sparkle */}
                  <div className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 sm:w-3 sm:h-3 text-gold-300 pointer-events-none">
                    <Sparkles className="w-full h-full" />
                  </div>
                </div>

                {/* Brand Name & Typography */}
                <div className="flex flex-col min-w-0">
                  <span className="font-serif text-lg sm:text-2xl xl:text-[26px] font-bold tracking-[0.12em] sm:tracking-[0.16em] uppercase bg-gradient-to-r from-[#FFF5E4] via-[#F4ECE0] to-[#DFCD9F] bg-clip-text text-transparent leading-tight truncate">
                    UMA PALACE
                  </span>
                  <div className="flex items-center gap-1 sm:gap-1.5 mt-0.5 sm:mt-1">
                    <span className="h-[1px] w-2 sm:w-3 bg-gold-400/70" />
                    <span className="text-[8px] sm:text-[9px] xl:text-[10px] font-medium tracking-[0.16em] sm:tracking-[0.24em] text-gold-300/90 uppercase leading-none truncate">
                      Ghazipur • Banquet & Pool
                    </span>
                    <span className="h-[1px] w-2 sm:w-3 bg-gold-400/70" />
                  </div>
                </div>
              </Link>

              {/* Desktop Nav Links (Clean, No Line Break, High Letter-Spacing) */}
              <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
                {NAVIGATION_LINKS.map((link) => (
                  <NavLink
                    key={link.label}
                    to={link.href}
                    className={({ isActive }) =>
                      `relative px-2.5 xl:px-3.5 py-2 rounded-full text-[11px] xl:text-xs font-semibold tracking-[0.12em] xl:tracking-[0.16em] uppercase transition-all duration-300 whitespace-nowrap ${
                        isActive
                          ? 'text-gold-200 bg-gold-500/15 shadow-sm border border-gold-400/40'
                          : 'text-ivory-200/90 hover:text-white hover:bg-white/5 border border-transparent'
                      }`
                    }
                  >
                    {({ isActive }) => (
                      <span className="flex items-center gap-1.5">
                        {isActive && (
                          <span className="text-gold-400 text-[10px]">✦</span>
                        )}
                        <span>{link.label}</span>
                      </span>
                    )}
                  </NavLink>
                ))}
              </nav>

              {/* Primary Actions: WhatsApp + Check Availability */}
              <div className="hidden sm:flex items-center gap-2.5 xl:gap-3 flex-shrink-0">
                {/* Secondary WhatsApp Button */}
                <button
                  onClick={openWhatsApp}
                  className="hidden xl:inline-flex items-center gap-2 px-3.5 py-2 rounded-full text-xs font-semibold tracking-wider transition-all duration-300 border border-emerald-500/40 text-emerald-300 bg-emerald-950/40 hover:bg-emerald-900/40 shadow-sm"
                  title="WhatsApp Us"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
                  <span>WhatsApp</span>
                </button>

                {/* Primary Royal CTA: Check Availability */}
                <button
                  onClick={onOpenAvailability}
                  className="inline-flex items-center gap-1.5 xl:gap-2 px-3.5 py-2 lg:px-4 lg:py-2.5 xl:px-5 xl:py-2.5 rounded-full text-[11px] xl:text-xs font-bold tracking-[0.12em] xl:tracking-[0.14em] uppercase bg-gradient-to-r from-gold-500 via-gold-400 to-gold-600 hover:from-gold-400 hover:to-gold-500 text-charcoal-900 shadow-soft-gold hover:shadow-elevated transition-all duration-300 transform hover:-translate-y-0.5 border border-gold-200/50"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Check Availability</span>
                </button>
              </div>

              {/* Mobile Navigation Trigger Button */}
              <div className="flex lg:hidden items-center gap-2 flex-shrink-0">
                <button
                  onClick={() => setMobileMenuOpen(true)}
                  className="p-2 sm:p-2.5 rounded-xl border border-gold-400/40 bg-charcoal-800/80 text-gold-300 hover:bg-gold-500 hover:text-charcoal-900 transition-colors shadow-sm"
                  aria-label="Open Navigation Menu"
                >
                  <Menu className="w-5 h-5" />
                </button>
              </div>

            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer (Luxury Full-Height Palace Drawer) */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden animate-fadeIn">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-charcoal-900/85 backdrop-blur-md transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Drawer Body */}
          <div className="fixed inset-y-0 right-0 w-full max-w-sm bg-[#171512] border-l border-gold-500/30 shadow-2xl p-6 sm:p-8 flex flex-col justify-between overflow-y-auto text-white">
            <div>
              {/* Header */}
              <div className="flex items-center justify-between pb-6 border-b border-gold-500/30">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full p-[1.5px] bg-gradient-to-tr from-gold-500 to-gold-300">
                    <div className="w-full h-full rounded-full bg-[#171512] flex items-center justify-center">
                      <span className="font-serif text-gold-300 font-bold text-xs">UP</span>
                    </div>
                  </div>
                  <div>
                    <span className="font-serif text-xl font-bold tracking-widest text-white uppercase block">
                      UMA PALACE
                    </span>
                    <span className="text-[10px] text-gold-400 tracking-widest uppercase">
                      Ghazipur, UP
                    </span>
                  </div>
                </div>

                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 rounded-full border border-white/10 hover:bg-white/10 text-white transition-colors"
                  aria-label="Close Navigation"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Navigation Links */}
              <nav className="mt-6 flex flex-col space-y-2">
                {NAVIGATION_LINKS.map((link) => (
                  <NavLink
                    key={link.label}
                    to={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={({ isActive }) =>
                      `flex items-center justify-between p-3.5 rounded-xl text-sm font-semibold tracking-wider uppercase transition-all duration-200 ${
                        isActive
                          ? 'bg-gold-500/20 text-gold-300 border border-gold-400/40 pl-4'
                          : 'text-ivory-200 hover:bg-white/5 hover:text-white'
                      }`
                    }
                  >
                    {({ isActive }) => (
                      <>
                        <span className="flex items-center gap-2">
                          {isActive && <span className="text-gold-400 text-xs">✦</span>}
                          <span>{link.label}</span>
                        </span>
                        <ChevronRight className="w-4 h-4 text-gold-400/60" />
                      </>
                    )}
                  </NavLink>
                ))}
              </nav>
            </div>

            {/* Bottom Actions & Details */}
            <div className="pt-6 border-t border-gold-500/30 space-y-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenAvailability();
                }}
                className="w-full py-3.5 rounded-full bg-gradient-to-r from-gold-500 to-gold-400 text-charcoal-900 font-bold text-xs tracking-widest uppercase shadow-soft-gold"
              >
                Check Availability
              </button>

              <button
                onClick={openWhatsApp}
                className="w-full py-3 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs tracking-wider uppercase flex items-center justify-center gap-2 shadow-sm"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Us</span>
              </button>

              <a
                href={`tel:${VENUE_INFO.phones[0]}`}
                className="w-full py-3 rounded-full border border-gold-400/40 text-ivory-100 hover:bg-white/5 font-semibold text-xs tracking-wider uppercase flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-gold-400" />
                <span>Call {VENUE_INFO.phones[0]}</span>
              </a>

              <p className="text-[11px] text-gold-300/80 text-center pt-2">
                Urdu Bazar Road, Jamlapur, Ghazipur
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
