import React, { useState } from 'react';
import { X, Calendar, CheckCircle2, MessageCircle, Phone, Sparkles } from 'lucide-react';
import { VENUE_INFO } from '../data/venueData';

export default function AvailabilityModal({ isOpen, onClose }) {
  const [step, setStep] = useState('form'); // 'form' or 'confirmed'
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    eventType: 'Wedding Ceremony',
    date: '',
    guests: '150 - 300 Guests'
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setStep('confirmed');
  };

  const handleWhatsApp = () => {
    const msg = `Hello Uma Palace, I am checking availability for:\nEvent: ${formData.eventType}\nDate: ${formData.date}\nApprox Guests: ${formData.guests}\nName: ${formData.name}\nPhone: ${formData.phone}\nPlease let me know if this date is open.`;
    window.open(`https://wa.me/${VENUE_INFO.whatsappDefaultNumber}?text=${encodeURIComponent(msg)}`, '_blank');
  };

  const handleReset = () => {
    setStep('form');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-charcoal-900/80 backdrop-blur-sm animate-fadeIn">
      <div className="absolute inset-0" onClick={handleReset} />

      <div className="relative z-10 w-full max-w-lg bg-ivory-50 rounded-3xl shadow-2xl border border-gold-300/80 overflow-hidden">
        
        {/* Header */}
        <div className="p-6 sm:p-7 bg-charcoal-900 text-white flex items-center justify-between border-b border-gold-400/30">
          <div>
            <div className="inline-flex items-center gap-1.5 text-[11px] font-semibold tracking-widest uppercase text-gold-400 mb-1">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Real-time Inquiry</span>
            </div>
            <h3 className="font-serif text-2xl font-bold text-white">
              Check Date Availability
            </h3>
            <p className="text-xs text-ivory-200/80 mt-0.5 font-light">
              Uma Palace • Urdu Bazar Road, Jamlapur, Ghazipur
            </p>
          </div>

          <button
            onClick={handleReset}
            className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 sm:p-8">
          {step === 'form' ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="avail-event-type" className="block text-xs uppercase tracking-wider font-semibold text-charcoal-800 mb-1">
                  Event Type
                </label>
                <select
                  id="avail-event-type"
                  name="eventType"
                  value={formData.eventType}
                  onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-white border border-gold-200 text-charcoal-900 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-gold-500/50"
                >
                  <option value="Wedding Ceremony">Wedding Ceremony (Pheras / Barat)</option>
                  <option value="Wedding Reception">Wedding Reception</option>
                  <option value="Engagement / Ring Ceremony">Engagement / Ring Ceremony</option>
                  <option value="Sangeet / Mehendi">Sangeet / Mehendi Night</option>
                  <option value="Birthday Party">Birthday Party</option>
                  <option value="Anniversary">Anniversary Celebration</option>
                  <option value="Corporate / Social Event">Corporate / Social Event</option>
                  <option value="Poolside Gathering">Poolside Gathering</option>
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="avail-date" className="block text-xs uppercase tracking-wider font-semibold text-charcoal-800 mb-1">
                    Preferred Date *
                  </label>
                  <input
                    id="avail-date"
                    type="date"
                    name="date"
                    required
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-white border border-gold-200 text-charcoal-900 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-gold-500/50"
                  />
                </div>

                <div>
                  <label htmlFor="avail-guests" className="block text-xs uppercase tracking-wider font-semibold text-charcoal-800 mb-1">
                    Approximate Guests
                  </label>
                  <select
                    id="avail-guests"
                    name="guests"
                    value={formData.guests}
                    onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-white border border-gold-200 text-charcoal-900 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-gold-500/50"
                  >
                    <option value="Under 100 Guests">Under 100 Guests</option>
                    <option value="100 - 250 Guests">100 - 250 Guests</option>
                    <option value="250 - 500 Guests">250 - 500 Guests</option>
                    <option value="500 - 800 Guests">500 - 800 Guests</option>
                    <option value="800+ Guests">800+ Guests</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                <div>
                  <label htmlFor="avail-name" className="block text-xs uppercase tracking-wider font-semibold text-charcoal-800 mb-1">
                    Your Name *
                  </label>
                  <input
                    id="avail-name"
                    type="text"
                    name="name"
                    autoComplete="name"
                    required
                    placeholder="Full name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-white border border-gold-200 text-charcoal-900 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-gold-500/50"
                  />
                </div>

                <div>
                  <label htmlFor="avail-phone" className="block text-xs uppercase tracking-wider font-semibold text-charcoal-800 mb-1">
                    Phone Number *
                  </label>
                  <input
                    id="avail-phone"
                    type="tel"
                    name="phone"
                    autoComplete="tel"
                    required
                    placeholder="Mobile number"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-white border border-gold-200 text-charcoal-900 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-gold-500/50"
                  />
                </div>
              </div>

              <div className="pt-3">
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-full bg-gold-500 hover:bg-gold-600 text-charcoal-900 font-semibold text-xs tracking-wider uppercase shadow-soft-gold transition-all duration-300"
                >
                  Verify Date Availability
                </button>
              </div>

              <div className="text-center pt-1">
                <button
                  type="button"
                  onClick={handleWhatsApp}
                  className="text-xs text-emerald-700 hover:text-emerald-800 font-semibold inline-flex items-center gap-1.5"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Or ask via WhatsApp directly</span>
                </button>
              </div>
            </form>
          ) : (
            <div className="text-center py-6 space-y-4">
              <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <h4 className="font-serif text-2xl font-bold text-charcoal-900">
                Inquiry Logged
              </h4>

              <div className="p-4 rounded-xl bg-white border border-gold-200 text-xs text-charcoal-700 leading-relaxed font-light">
                <p className="font-medium text-charcoal-900 mb-1">
                  Thank you. Our team will contact you to confirm availability.
                </p>
                <p>
                  Requested Date: <strong className="font-semibold text-charcoal-900">{formData.date || 'To be discussed'}</strong>
                </p>
                <p>
                  Occasion: <strong className="font-semibold text-charcoal-900">{formData.eventType}</strong>
                </p>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <button
                  onClick={handleWhatsApp}
                  className="flex-1 py-3 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs tracking-wider uppercase flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Send to WhatsApp</span>
                </button>

                <button
                  onClick={handleReset}
                  className="flex-1 py-3 rounded-full border border-charcoal-300 text-charcoal-800 font-semibold text-xs tracking-wider uppercase hover:bg-ivory-200"
                >
                  Close Window
                </button>
              </div>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
