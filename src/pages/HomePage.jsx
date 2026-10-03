import React from 'react';
import Hero from '../components/Hero';
import QuickIntro from '../components/QuickIntro';
import VenueExperience from '../components/VenueExperience';
import SpacesSeating from '../components/SpacesSeating';
import WeddingsSection from '../components/WeddingsSection';
import EventsSection from '../components/EventsSection';
import SwimmingPoolSection from '../components/SwimmingPoolSection';
import VisualStory from '../components/VisualStory';
import Gallery from '../components/Gallery';
import Amenities from '../components/Amenities';
import WhyChooseUs from '../components/WhyChooseUs';
import Testimonials from '../components/Testimonials';
import LocationSection from '../components/LocationSection';
import EnquirySection from '../components/EnquirySection';

export default function HomePage({ onOpenAvailability, onOpenEnquiryWithSpace, onOpenEnquiry, prefilledSpace }) {
  return (
    <div>
      <Hero onOpenAvailability={onOpenAvailability} />
      <QuickIntro onOpenAvailability={onOpenAvailability} />
      <VenueExperience onSelectCategory={onOpenEnquiry} />
      <SpacesSeating onOpenEnquiryWithSpace={onOpenEnquiryWithSpace} />
      <WeddingsSection onOpenEnquiry={onOpenEnquiry} />
      <EventsSection onOpenEnquiry={onOpenEnquiry} />
      <SwimmingPoolSection onOpenEnquiry={onOpenEnquiry} />
      <VisualStory />
      <Gallery />
      <Amenities onOpenAvailability={onOpenAvailability} />
      <WhyChooseUs />
      <Testimonials />
      <LocationSection />
      <EnquirySection
        prefilledSpace={prefilledSpace}
        onOpenAvailability={onOpenAvailability}
      />
    </div>
  );
}
