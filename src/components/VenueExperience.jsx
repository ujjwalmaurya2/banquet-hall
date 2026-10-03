import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Sparkles } from 'lucide-react';

export default function VenueExperience() {
  const experiences = [
    {
      id: "banquet",
      title: "Banquet Hall",
      subtitle: "Indoor Celebration Space",
      description: "An elegant, fully appointed indoor venue crafted with ambient architectural lighting and grand ceilings for memorable ceremonies and grand receptions.",
      image: "/images/editorial/banquet_hall_interior.jpg",
      route: "/venue",
      badge: "The Grand Hall"
    },
    {
      id: "weddings",
      title: "Weddings & Ceremonies",
      subtitle: "Pheras, Mandap & Receptions",
      description: "A majestic setting where traditional rituals, sacred vows, and cherished family gatherings unfold with seamless grace and dignity.",
      image: "/images/editorial/wedding_ceremony_mandap.jpg",
      route: "/weddings",
      badge: "Matrimonial Grandeur"
    },
    {
      id: "events",
      title: "Special Events",
      subtitle: "Social, Corporate & Family",
      description: "Versatile indoor and outdoor arrangements tailored for milestone birthdays, anniversaries, corporate conferences, and social galas.",
      image: "/images/editorial/stage_celebration_lights.jpg",
      route: "/events",
      badge: "Flexible Celebrations"
    },
    {
      id: "pool",
      title: "Swimming Pool",
      subtitle: "Leisure & Sundowner Gatherings",
      description: "A distinctive outdoor pool environment adding a refreshing resort-like dimension for relaxed pre-wedding functions and poolside gatherings.",
      image: "/images/editorial/poolside_evening_luxury.jpg",
      route: "/swimming-pool",
      badge: "Signature Leisure"
    }
  ];

  return (
    <section className="py-24 sm:py-32 bg-ivory-200/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gold-100 border border-gold-300 text-gold-800 text-xs font-semibold tracking-widest uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5 text-gold-600" />
            <span>Core Offerings</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-charcoal-900 tracking-tight leading-tight">
            Discover the Venue
          </h2>
          <p className="mt-4 text-muted text-base sm:text-lg font-light leading-relaxed">
            Every corner of Uma Palace is thoughtfully arranged to offer a refined balance of grandeur, comfortable hospitality, and lasting memories.
          </p>
        </div>

        {/* 4 Large Visual Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {experiences.map((exp) => (
            <Link
              key={exp.id}
              to={exp.route}
              className="group block relative rounded-2xl overflow-hidden bg-charcoal-900 shadow-luxury hover:shadow-elevated transition-all duration-500 transform hover:-translate-y-1.5"
            >
              {/* Image with zoom effect */}
              <div className="relative h-80 sm:h-96 w-full overflow-hidden">
                <img
                  src={exp.image}
                  alt={exp.title}
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900 via-charcoal-900/40 to-transparent opacity-85 group-hover:opacity-75 transition-opacity" />
              </div>

              {/* Card Badge */}
              <div className="absolute top-5 left-5">
                <span className="px-3 py-1 rounded-full bg-charcoal-900/70 border border-gold-300/40 text-gold-300 text-[11px] font-semibold tracking-widest uppercase backdrop-blur-md">
                  {exp.badge}
                </span>
              </div>

              {/* Explore Arrow Button */}
              <div className="absolute top-5 right-5 w-10 h-10 rounded-full bg-white/10 group-hover:bg-gold-500 group-hover:text-charcoal-900 text-white backdrop-blur-md flex items-center justify-center transition-all duration-300 transform group-hover:rotate-45">
                <ArrowUpRight className="w-5 h-5" />
              </div>

              {/* Bottom Content */}
              <div className="absolute bottom-0 inset-x-0 p-6 sm:p-8 text-white">
                <span className="text-xs uppercase tracking-widest text-gold-300 font-medium block mb-1">
                  {exp.subtitle}
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-white mb-2 group-hover:text-gold-200 transition-colors">
                  {exp.title}
                </h3>
                <p className="text-sm text-ivory-200/90 font-light leading-relaxed line-clamp-2">
                  {exp.description}
                </p>
                <div className="mt-4 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-gold-400 group-hover:text-gold-300">
                  <span>Explore space</span>
                  <span>→</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
