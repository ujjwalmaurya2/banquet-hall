import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, MapPin, Phone, MessageCircle, ArrowUp } from 'lucide-react';
import { InstagramIcon, FacebookIcon } from './SocialIcons';
import { VENUE_INFO, NAVIGATION_LINKS } from '../data/venueData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-charcoal-900 text-white pt-20 pb-28 lg:pb-16 border-t border-gold-400/20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-16 border-b border-white/10">
          
          {/* Brand Info */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full border border-gold-400 bg-charcoal-800 flex items-center justify-center text-gold-400">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <span className="font-serif text-2xl sm:text-3xl font-bold tracking-wider text-white block">
                  UMA PALACE
                </span>
                <span className="text-[10px] text-gold-400 tracking-widest uppercase font-medium">
                  Banquet Hall • Weddings • Events • Swimming Pool
                </span>
              </div>
            </div>

            <p className="text-sm text-ivory-200/80 font-light leading-relaxed max-w-sm">
              Ghazipur’s premier destination for weddings, receptions, and memorable family celebrations. Book your special day with us.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <a
                href={VENUE_INFO.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-gradient-to-tr hover:from-amber-500 hover:via-rose-500 hover:to-purple-600 text-white flex items-center justify-center transition-all duration-300"
                aria-label="Instagram Profile"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>

              {/* Disabled Demo State Facebook as per prompt rules */}
              <div
                className="w-9 h-9 rounded-full bg-white/5 text-white/30 flex items-center justify-center cursor-not-allowed"
                title="Facebook page (demo state)"
              >
                <FacebookIcon className="w-4 h-4" />
              </div>

              <span className="text-xs text-muted">
                Follow on Instagram @uma.palace
              </span>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="lg:col-span-3 space-y-4">
            <span className="text-xs uppercase tracking-widest font-semibold text-gold-300 block">
              Quick Navigation
            </span>
            <ul className="space-y-2.5">
              {NAVIGATION_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-xs sm:text-sm text-ivory-200/80 hover:text-gold-300 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Location Info */}
          <div className="lg:col-span-4 space-y-4">
            <span className="text-xs uppercase tracking-widest font-semibold text-gold-300 block">
              Venue Location & Inquiry
            </span>
            
            <div className="space-y-3 text-xs sm:text-sm text-ivory-200/80 font-light">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-gold-400 flex-shrink-0 mt-0.5" />
                <span>{VENUE_INFO.displayAddress}</span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-gold-400 flex-shrink-0" />
                <div className="flex flex-wrap gap-2">
                  {VENUE_INFO.phones.map((p, idx) => (
                    <a
                      key={idx}
                      href={`tel:${p}`}
                      className="hover:text-gold-300 font-mono"
                    >
                      +91 {p}{idx === 0 ? ',' : ''}
                    </a>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <MessageCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <a
                  href={`https://wa.me/${VENUE_INFO.whatsappDefaultNumber}?text=${VENUE_INFO.whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-300 text-emerald-400 font-medium"
                >
                  Direct WhatsApp Inquiry
                </a>
              </div>
            </div>

            <div className="pt-2">
              <span className="inline-block px-3 py-1 rounded bg-gold-500/10 border border-gold-400/30 text-[11px] text-gold-300">
                Bookings Open for 2026 - 2027 Season
              </span>
            </div>
          </div>

        </div>

        {/* Footer Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted">
          <div>
            <p>© 2026 {VENUE_INFO.name}. All rights reserved.</p>
            <p className="text-[11px] text-muted/70 mt-0.5">
              Client Prototype Demo • Urdu Bazar Road, Jamlapur, Ghazipur, UP
            </p>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-xs text-gold-400 hover:text-gold-300 transition-colors py-1 px-3 rounded-full border border-white/10 hover:border-gold-400/40"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
