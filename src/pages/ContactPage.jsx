import React from 'react';
import PageHero from '../components/PageHero';
import LocationSection from '../components/LocationSection';
import EnquirySection from '../components/EnquirySection';

export default function ContactPage({ onOpenAvailability, prefilledSpace }) {
  return (
    <div>
      <PageHero
        badge="Contact & Location"
        eyebrow="Reach Us"
        title="Find Us & Plan Your Celebration"
        subtitle="Located on Urdu Bazar Road, Jamlapur in Ghazipur, Uttar Pradesh. Contact our management team for date availability, venue visits, and event consultation."
        image="/images/editorial/dining_grand_setup.jpg"
      />

      {/* Location Details & Map */}
      <LocationSection />

      {/* Full Enquiry Form */}
      <EnquirySection
        prefilledSpace={prefilledSpace}
        onOpenAvailability={onOpenAvailability}
      />
    </div>
  );
}
