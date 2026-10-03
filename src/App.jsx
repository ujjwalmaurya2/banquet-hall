import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingActions from './components/FloatingActions';
import AvailabilityModal from './components/AvailabilityModal';

// Pages
import HomePage from './pages/HomePage';
import VenuePage from './pages/VenuePage';
import WeddingsPage from './pages/WeddingsPage';
import EventsPage from './pages/EventsPage';
import PoolPage from './pages/PoolPage';
import GalleryPage from './pages/GalleryPage';
import ContactPage from './pages/ContactPage';

export default function App() {
  const [availabilityModalOpen, setAvailabilityModalOpen] = useState(false);
  const [prefilledSpace, setPrefilledSpace] = useState('Main Banquet Hall');

  const handleOpenAvailability = () => {
    setAvailabilityModalOpen(true);
  };

  const handleCloseAvailability = () => {
    setAvailabilityModalOpen(false);
  };

  const handleOpenEnquiryWithSpace = (spaceName) => {
    setPrefilledSpace(spaceName);
    const enquiryEl = document.querySelector('#enquiry');
    if (enquiryEl) {
      enquiryEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenEnquiry = (topic) => {
    if (topic) {
      setPrefilledSpace(topic);
    }
    const enquiryEl = document.querySelector('#enquiry');
    if (enquiryEl) {
      enquiryEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-ivory text-charcoal relative selection:bg-gold-200 selection:text-charcoal-900 pb-16 lg:pb-0">
        
        {/* Palace Two-Tier Luxury Navbar */}
        <Navbar
          onOpenAvailability={handleOpenAvailability}
        />

        {/* Multi-Page Routes */}
        <div className="flex-grow">
          <Routes>
            <Route
              path="/"
              element={
                <HomePage
                  onOpenAvailability={handleOpenAvailability}
                  onOpenEnquiryWithSpace={handleOpenEnquiryWithSpace}
                  onOpenEnquiry={handleOpenEnquiry}
                  prefilledSpace={prefilledSpace}
                />
              }
            />
            <Route
              path="/venue"
              element={
                <VenuePage
                  onOpenAvailability={handleOpenAvailability}
                  onOpenEnquiryWithSpace={handleOpenEnquiryWithSpace}
                />
              }
            />
            <Route
              path="/weddings"
              element={
                <WeddingsPage
                  onOpenAvailability={handleOpenAvailability}
                  onOpenEnquiry={handleOpenEnquiry}
                />
              }
            />
            <Route
              path="/events"
              element={
                <EventsPage
                  onOpenAvailability={handleOpenAvailability}
                  onOpenEnquiry={handleOpenEnquiry}
                  onOpenEnquiryWithSpace={handleOpenEnquiryWithSpace}
                />
              }
            />
            <Route
              path="/swimming-pool"
              element={
                <PoolPage
                  onOpenAvailability={handleOpenAvailability}
                  onOpenEnquiry={handleOpenEnquiry}
                />
              }
            />
            <Route path="/pool" element={<Navigate to="/swimming-pool" replace />} />
            <Route
              path="/gallery"
              element={
                <GalleryPage />
              }
            />
            <Route
              path="/contact"
              element={
                <ContactPage
                  onOpenAvailability={handleOpenAvailability}
                  prefilledSpace={prefilledSpace}
                />
              }
            />
            {/* Catch-all fallback */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>

        {/* Global Luxury Footer */}
        <Footer />

        {/* Global Floating Actions (Desktop WhatsApp & Mobile Bottom Bar) */}
        <FloatingActions
          onOpenEnquiry={handleOpenEnquiry}
          onOpenAvailability={handleOpenAvailability}
        />

        {/* Global Availability Modal */}
        <AvailabilityModal
          isOpen={availabilityModalOpen}
          onClose={handleCloseAvailability}
        />
      </div>
    </BrowserRouter>
  );
}
