/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { BrandStory } from './components/BrandStory';
import { Accommodations } from './components/Accommodations';
import { Experiences } from './components/Experiences';
import { Dining } from './components/Dining';
import { WeddingsEvents } from './components/WeddingsEvents';
import { CorporateEvents } from './components/CorporateEvents';
import { PackagesGalaSection } from './components/PackagesGalaSection';
import { ReviewsSection } from './components/ReviewsSection';
import { Gallery } from './components/Gallery';
import { LocationSection } from './components/LocationSection';
import { FaqSection } from './components/FaqSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { StayEnquiryModal } from './components/Modals/StayEnquiryModal';
import { BusinessVerificationModal } from './components/Modals/BusinessVerificationModal';
import { HostingerDownloadPill } from './components/HostingerDownloadPill';
import { RoomItem } from './data/siteConfig';
import { CalendarCheck } from 'lucide-react';

export default function App() {
  const [isStayModalOpen, setIsStayModalOpen] = useState(false);
  const [selectedRoomForStay, setSelectedRoomForStay] = useState<RoomItem | null>(null);
  const [isAuditModalOpen, setIsAuditModalOpen] = useState(false);

  const handleOpenStayModal = (room?: RoomItem | null) => {
    setSelectedRoomForStay(room || null);
    setIsStayModalOpen(true);
  };

  const handleScrollToExplore = () => {
    const el = document.getElementById('story');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#070c0a] text-[#f3f6f4] font-sans relative selection:bg-[#1b332a] selection:text-white">
      {/* Primary Top Navigation */}
      <Navbar
        onOpenStayModal={() => handleOpenStayModal(null)}
        onOpenAuditModal={() => setIsAuditModalOpen(true)}
      />

      {/* Main Page Flow */}
      <main>
        {/* Cinematic Hero */}
        <Hero
          onExplore={handleScrollToExplore}
          onOpenStayModal={() => handleOpenStayModal(null)}
          onOpenAuditModal={() => setIsAuditModalOpen(true)}
        />

        {/* Brand Story & Atmosphere */}
        <BrandStory onOpenAuditModal={() => setIsAuditModalOpen(true)} />

        {/* Stays & Accommodations */}
        <Accommodations
          onSelectRoomForStay={(room) => handleOpenStayModal(room)}
          onOpenAuditModal={() => setIsAuditModalOpen(true)}
        />

        {/* Exclusive Packages & Gala Time */}
        <PackagesGalaSection
          onOpenStayModal={() => handleOpenStayModal(null)}
          onOpenEventEnquiry={() => handleScrollToSection('weddings')}
        />

        {/* Resort Facilities (7 Verified Pillars) */}
        <Experiences onOpenStayModal={() => handleOpenStayModal(null)} />

        {/* Dining & Gastronomy */}
        <Dining onOpenDiningEnquiry={() => handleScrollToSection('contact')} />

        {/* Weddings & Celebrations */}
        <WeddingsEvents onOpenEventModal={() => handleScrollToSection('weddings')} />

        {/* Corporate Offsites & Group Stays */}
        <CorporateEvents onOpenCorporateEnquiry={() => handleScrollToSection('contact')} />

        {/* Verified Guest Reviews */}
        <ReviewsSection />

        {/* Property Gallery & Lightbox */}
        <Gallery />

        {/* Geographic Location & Google Maps */}
        <LocationSection />

        {/* Frequently Asked Questions */}
        <FaqSection />

        {/* Reservations & Direct Contact */}
        <ContactSection onOpenAuditModal={() => setIsAuditModalOpen(true)} />
      </main>

      {/* Cinematic Footer */}
      <Footer
        onOpenStayModal={() => handleOpenStayModal(null)}
        onOpenAuditModal={() => setIsAuditModalOpen(true)}
      />

      {/* Modals */}
      <StayEnquiryModal
        isOpen={isStayModalOpen}
        onClose={() => setIsStayModalOpen(false)}
        initialRoom={selectedRoomForStay}
      />

      <BusinessVerificationModal
        isOpen={isAuditModalOpen}
        onClose={() => setIsAuditModalOpen(false)}
      />

      {/* Dev-only One-Click Hostinger Deployment ZIP Download */}
      {import.meta.env.DEV && <HostingerDownloadPill />}

      {/* Floating Quick Action Button (Mobile & Desktop) */}
      <div className="fixed bottom-6 right-6 z-30">
        <button
          type="button"
          onClick={() => handleOpenStayModal(null)}
          className="flex items-center gap-2 px-4 py-3 rounded-full bg-white text-[#06120c] font-semibold text-xs uppercase tracking-wider shadow-2xl hover:bg-emerald-100 hover:shadow-emerald-950/40 active:scale-95 transition-all duration-200 border border-white/20"
          aria-label="Open Stay Enquiry Form"
        >
          <CalendarCheck className="w-4 h-4 text-emerald-900" />
          <span className="hidden sm:inline">Enquire Stay</span>
          <span className="sm:hidden">Enquire</span>
        </button>
      </div>
    </div>
  );
}
