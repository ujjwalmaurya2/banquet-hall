# Uma Palace — Luxury Banquet Hall, Weddings & Swimming Pool

A cinematic, conversion-focused multi-page website demo for **Uma Palace**, a premier luxury hospitality and celebration venue located at:

> **Urdu Bazar Road, Jamlapur, Ghazipur, Uttar Pradesh**  
> **Contact:** +91 9278242223 / +91 9278342223  
> **Instagram:** [@uma.palace](https://www.instagram.com/uma.palace/)

---

## 🌟 Key Features

* **Regal Visual Design**: Champagne gold accents, warm ivory palette, deep charcoal contrast, and editorial typography (Cormorant Garamond & Playfair Display).
* **Two-Tier Royal Navigation**:
  * *Tier 1 (Utility Bar)*: Quick location marker, direct dial phone lines, active WhatsApp indicator, and Instagram link.
  * *Tier 2 (Palace Bar)*: Royal crest monogram (`UP`), luxury brand typography, active route indicators (`✦`), and primary CTAs.
* **True Multi-Page Experience (React Router)**:
  * **Home (`/`)**: Cinematic hero, video/photo ambiance, quick overview, core pillars, and inquiry gateway.
  * **The Venue (`/venue`)**: Banquet spaces, stage setup, dining arrangements, and conceptual seating layouts.
  * **Weddings (`/weddings`)**: Pheras, Mandap, Receptions, Sangeet & Mehendi rituals showcase.
  * **Events (`/events`)**: Anniversaries, milestones, corporate galas, and social celebrations.
  * **Swimming Pool (`/swimming-pool`)**: Resort-style outdoor pool experience, sundowners, and poolside gatherings.
  * **Gallery (`/gallery`)**: Interactive filterable masonry portfolio with full-screen lightbox modal and real Instagram assets.
  * **Contact & Location (`/contact`)**: Interactive date availability inquiry modal, phone contacts, WhatsApp direct, and interactive Ghazipur map.
* **Conversion Architecture**:
  * Interactive "Check Availability" modal.
  * 1-Click WhatsApp integration with pre-filled inquiries.
  * Direct phone calling buttons.
  * Sticky mobile action bar (Call, WhatsApp, Book).

---

## 🛠️ Tech Stack

* **React 18**
* **Vite**
* **Tailwind CSS**
* **React Router v6**
* **Lucide React**
* **Framer Motion**

---

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Local Development Server
```bash
npm run dev
```

### 3. Build for Production
```bash
npm run build
```

### 4. Preview Production Build
```bash
npm run preview
```

---

## 📂 Project Structure

```
uma-palace/
├── public/
│   ├── images/
│   │   ├── venue/         # Official venue photos & Instagram media
│   │   └── editorial/     # High-resolution hospitality & wedding assets
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Navbar.jsx             # Two-tier luxury navigation bar & mobile drawer
│   │   ├── Footer.jsx             # Royal footer with quick links & location
│   │   ├── PageHero.jsx           # Editorial hero banner with breadcrumbs
│   │   ├── ScrollToTop.jsx        # Instant route scroll reset
│   │   ├── AvailabilityModal.jsx  # Interactive booking reservation modal
│   │   ├── Hero.jsx               # Cinematic home hero with video/photo overlay
│   │   ├── QuickIntro.jsx         # Venue overview & core features
│   │   ├── VenueExperience.jsx    # Discover spaces & core offerings
│   │   ├── SpacesSeating.jsx      # Seating styles & hall arrangements
│   │   ├── WeddingsSection.jsx    # Wedding rituals & celebrations
│   │   ├── EventsSection.jsx      # Special gatherings & social events
│   │   ├── SwimmingPool.jsx       # Outdoor poolside experience
│   │   ├── Gallery.jsx            # Lightbox gallery portfolio
│   │   ├── Amenities.jsx          # Venue amenities & hospitality features
│   │   ├── WhyChooseUs.jsx        # Value propositions & location advantage
│   │   ├── VisualStory.jsx        # 4-step celebration timeline
│   │   ├── Testimonials.jsx       # Guest reviews & placeholder showcase
│   │   ├── LocationSection.jsx    # Ghazipur map & route details
│   │   └── FaqSection.jsx         # Common booking & event questions
│   ├── pages/
│   │   ├── HomePage.jsx
│   │   ├── VenuePage.jsx
│   │   ├── WeddingsPage.jsx
│   │   ├── EventsPage.jsx
│   │   ├── PoolPage.jsx
│   │   ├── GalleryPage.jsx
│   │   └── ContactPage.jsx
│   ├── data/
│   │   └── venueData.js           # Verified venue facts, phone numbers, and content
│   ├── App.jsx                    # Routing configuration
│   ├── main.jsx                   # React entry point
│   └── index.css                  # Custom Tailwind styles & animations
├── package.json
└── vite.config.js
```
