import React, { useState } from 'react';
import { Send, MessageCircle, Calendar, Sparkles, CheckCircle2, Phone, User, Users, MapPin } from 'lucide-react';
import { VENUE_INFO } from '../data/venueData';

export default function EnquirySection({ prefilledSpace, onOpenAvailability }) {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    eventType: 'Wedding Ceremony',
    preferredDate: '',
    guestCount: '150 - 300 Guests',
    preferredSpace: prefilledSpace || 'Main Banquet Hall',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  // Update space if parent changes prefilledSpace
  React.useEffect(() => {
    if (prefilledSpace) {
      setFormData(prev => ({ ...prev, preferredSpace: prefilledSpace }));
    }
  }, [prefilledSpace]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);
    // Simulate swift submission
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  const handleWhatsAppEnquiry = () => {
    let msg = `Hello Uma Palace, I am interested in booking the venue.\n`;
    if (formData.fullName) msg += `Name: ${formData.fullName}\n`;
    if (formData.eventType) msg += `Event: ${formData.eventType}\n`;
    if (formData.preferredDate) msg += `Date: ${formData.preferredDate}\n`;
    if (formData.guestCount) msg += `Approx Guests: ${formData.guestCount}\n`;
    if (formData.preferredSpace) msg += `Space: ${formData.preferredSpace}\n`;
    if (formData.message) msg += `Notes: ${formData.message}\n`;
    msg += `I would like to know about availability and event details.`;

    window.open(`https://wa.me/${VENUE_INFO.whatsappDefaultNumber}?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <section id="enquiry" className="py-24 sm:py-32 bg-ivory-100 relative overflow-hidden">
      {/* Decorative filigree accents */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-gold-200/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gold-200/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gold-50 border border-gold-300 text-gold-800 text-xs font-semibold tracking-widest uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5 text-gold-600" />
            <span>Event Coordination</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-charcoal-900 tracking-tight leading-tight">
            Let’s Plan Your Special Day
          </h2>

          <p className="mt-4 text-muted text-base sm:text-lg font-light leading-relaxed">
            Share your preferred dates and event preferences. Our team will verify dates, answer all queries, and arrange a personalized venue tour for your family.
          </p>
        </div>

        {/* Main Card with Form & WhatsApp Quick Connect */}
        <div className="bg-white rounded-3xl shadow-elevated border border-gold-200/80 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            
            {/* Left Column: Direct Contacts & WhatsApp Priority */}
            <div className="lg:col-span-5 bg-charcoal-900 text-white p-8 sm:p-10 lg:p-12 flex flex-col justify-between">
              <div className="space-y-6">
                <div>
                  <span className="text-[11px] font-semibold uppercase tracking-widest text-gold-400 block mb-1">
                    Direct Assistance
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                    Uma Palace Ghazipur
                  </h3>
                  <p className="text-xs text-ivory-200/80 mt-1 font-light leading-relaxed">
                    Bookings & date confirmations are handled directly by management.
                  </p>
                </div>

                {/* WhatsApp Quick Connect Button */}
                <div className="p-5 rounded-2xl bg-charcoal-800/80 border border-emerald-500/40 space-y-3">
                  <div className="flex items-center gap-2.5 text-emerald-400">
                    <MessageCircle className="w-5 h-5 flex-shrink-0" />
                    <span className="text-xs font-bold uppercase tracking-wider">
                      Instant WhatsApp Chat
                    </span>
                  </div>
                  <p className="text-xs text-ivory-200 font-light leading-relaxed">
                    Prefer direct messaging? Send your inquiry straight to our phone with pre-filled details.
                  </p>
                  <button
                    type="button"
                    onClick={handleWhatsAppEnquiry}
                    className="w-full py-3 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs tracking-wider uppercase flex items-center justify-center gap-2 transition-colors shadow-sm"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>WhatsApp Us Now</span>
                  </button>
                </div>

                {/* Telephone Lines */}
                <div className="space-y-3 pt-2">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-gold-300 block">
                    Phone Numbers
                  </span>
                  {VENUE_INFO.phones.map((phone, i) => (
                    <a
                      key={i}
                      href={`tel:${phone}`}
                      className="flex items-center gap-3 p-3 rounded-xl bg-charcoal-800/60 hover:bg-charcoal-800 border border-white/10 text-white text-xs font-mono transition-colors"
                    >
                      <Phone className="w-3.5 h-3.5 text-gold-400" />
                      <span>+91 {phone}</span>
                    </a>
                  ))}
                </div>

                {/* Location summary */}
                <div className="pt-2 text-xs text-ivory-300 flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-gold-400 flex-shrink-0 mt-0.5" />
                  <span>{VENUE_INFO.displayAddress}</span>
                </div>
              </div>

              {/* Bottom neutral notice */}
              <div className="pt-8 border-t border-white/10 text-[11px] text-ivory-400/80">
                Official booking policy and custom quote provided upon availability confirmation.
              </div>
            </div>

            {/* Right Column: Interactive Form */}
            <div className="lg:col-span-7 p-8 sm:p-10 lg:p-12 bg-ivory-50/40">
              {submitted ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-12 px-4 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-charcoal-900">
                    Enquiry Received
                  </h3>
                  <p className="text-sm text-charcoal-700 max-w-md font-light leading-relaxed">
                    Thank you, <strong className="font-semibold text-charcoal-900">{formData.fullName || 'Guest'}</strong>. Our team has received your event inquiry for <strong className="font-semibold text-charcoal-900">{formData.preferredDate || 'your preferred date'}</strong> and will contact you via phone shortly to confirm venue availability and answer all questions.
                  </p>
                  <div className="pt-4 flex flex-col sm:flex-row gap-3">
                    <button
                      onClick={handleWhatsAppEnquiry}
                      className="px-6 py-2.5 rounded-full bg-emerald-600 text-white text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Forward to WhatsApp</span>
                    </button>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="px-6 py-2.5 rounded-full border border-charcoal-300 text-charcoal-800 text-xs font-semibold uppercase tracking-wider hover:bg-ivory-200"
                    >
                      Submit Another Query
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Full Name */}
                    <div>
                      <label htmlFor="enquiry-fullname" className="block text-xs uppercase tracking-wider font-semibold text-charcoal-800 mb-1.5">
                        Full Name *
                      </label>
                      <div className="relative">
                        <input
                          id="enquiry-fullname"
                          type="text"
                          name="fullName"
                          autoComplete="name"
                          required
                          placeholder="e.g. Ramesh Chandra"
                          value={formData.fullName}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl bg-white border border-gold-200 text-charcoal-900 text-sm focus:outline-none focus:ring-2 focus:ring-gold-500/50 focus:border-gold-500"
                        />
                      </div>
                    </div>

                    {/* Phone Number */}
                    <div>
                      <label htmlFor="enquiry-phone" className="block text-xs uppercase tracking-wider font-semibold text-charcoal-800 mb-1.5">
                        Phone Number *
                      </label>
                      <div className="relative">
                        <input
                          id="enquiry-phone"
                          type="tel"
                          name="phone"
                          autoComplete="tel"
                          required
                          placeholder="e.g. 9876543210"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl bg-white border border-gold-200 text-charcoal-900 text-sm focus:outline-none focus:ring-2 focus:ring-gold-500/50 focus:border-gold-500"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Event Type */}
                    <div>
                      <label htmlFor="enquiry-event-type" className="block text-xs uppercase tracking-wider font-semibold text-charcoal-800 mb-1.5">
                        Event Type *
                      </label>
                      <select
                        id="enquiry-event-type"
                        name="eventType"
                        value={formData.eventType}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-white border border-gold-200 text-charcoal-900 text-sm focus:outline-none focus:ring-2 focus:ring-gold-500/50 focus:border-gold-500"
                      >
                        <option value="Wedding Ceremony">Wedding Ceremony (Pheras / Barat)</option>
                        <option value="Wedding Reception">Wedding Reception</option>
                        <option value="Engagement / Roka">Engagement / Roka</option>
                        <option value="Sangeet / Mehendi">Sangeet / Mehendi</option>
                        <option value="Birthday Celebration">Birthday Celebration</option>
                        <option value="Anniversary">Anniversary Celebration</option>
                        <option value="Family Function">Family Function</option>
                        <option value="Corporate Event">Corporate Conference / Dinner</option>
                        <option value="Poolside Gathering">Poolside Gathering</option>
                      </select>
                    </div>

                    {/* Preferred Date */}
                    <div>
                      <label htmlFor="enquiry-date" className="block text-xs uppercase tracking-wider font-semibold text-charcoal-800 mb-1.5">
                        Preferred Date *
                      </label>
                      <input
                        id="enquiry-date"
                        type="date"
                        name="preferredDate"
                        required
                        value={formData.preferredDate}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-white border border-gold-200 text-charcoal-900 text-sm focus:outline-none focus:ring-2 focus:ring-gold-500/50 focus:border-gold-500"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Approximate Guests */}
                    <div>
                      <label htmlFor="enquiry-guests" className="block text-xs uppercase tracking-wider font-semibold text-charcoal-800 mb-1.5">
                        Approximate Guests
                      </label>
                      <select
                        id="enquiry-guests"
                        name="guestCount"
                        value={formData.guestCount}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-white border border-gold-200 text-charcoal-900 text-sm focus:outline-none focus:ring-2 focus:ring-gold-500/50 focus:border-gold-500"
                      >
                        <option value="Under 100 Guests">Under 100 Guests (Intimate)</option>
                        <option value="100 - 250 Guests">100 - 250 Guests</option>
                        <option value="250 - 500 Guests">250 - 500 Guests</option>
                        <option value="500 - 800 Guests">500 - 800 Guests</option>
                        <option value="800+ Guests">800+ Guests (Grand Banquet)</option>
                      </select>
                    </div>

                    {/* Preferred Space */}
                    <div>
                      <label htmlFor="enquiry-space" className="block text-xs uppercase tracking-wider font-semibold text-charcoal-800 mb-1.5">
                        Preferred Space
                      </label>
                      <select
                        id="enquiry-space"
                        name="preferredSpace"
                        value={formData.preferredSpace}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-white border border-gold-200 text-charcoal-900 text-sm focus:outline-none focus:ring-2 focus:ring-gold-500/50 focus:border-gold-500"
                      >
                        <option value="Main Banquet Hall">Main Banquet Hall (Indoor)</option>
                        <option value="Outdoor / Poolside Area">Outdoor / Poolside Area</option>
                        <option value="Stage & Celebration Area">Stage & Celebration Area</option>
                        <option value="Complete Venue Booking">Complete Venue (All Spaces)</option>
                        <option value="Not Sure / Guide Me">Not Sure / Recommend Based on Event</option>
                      </select>
                    </div>
                  </div>

                  {/* Message / Special Requirements */}
                  <div>
                    <label htmlFor="enquiry-message" className="block text-xs uppercase tracking-wider font-semibold text-charcoal-800 mb-1.5">
                      Message / Custom Requirements
                    </label>
                    <textarea
                      id="enquiry-message"
                      name="message"
                      rows={3}
                      placeholder="Mention any specific catering preferences, stage decor desires, or questions..."
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-gold-200 text-charcoal-900 text-sm focus:outline-none focus:ring-2 focus:ring-gold-500/50 focus:border-gold-500"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={submitting}
                      className="w-full py-4 rounded-full bg-gold-500 hover:bg-gold-600 text-charcoal-900 font-semibold text-xs tracking-wider uppercase shadow-soft-gold hover:shadow-elevated transition-all duration-300 flex items-center justify-center gap-2"
                    >
                      {submitting ? (
                        <span>Sending details...</span>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Send Enquiry</span>
                        </>
                      )}
                    </button>
                    <p className="text-[11px] text-center text-muted mt-2">
                      *We respect your privacy. Details are solely used to coordinate your event request.
                    </p>
                  </div>
                </form>
              )}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
