import React, { useState } from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';
import { VISUAL_STORY_STEPS } from '../data/venueData';

export default function VisualStory() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="py-24 sm:py-32 bg-ivory-100 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gold-50 border border-gold-300 text-gold-800 text-xs font-semibold tracking-widest uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5 text-gold-600" />
            <span>The Guest Journey</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-charcoal-900 tracking-tight leading-tight">
            From Arrival to Celebration
          </h2>

          <p className="mt-4 text-muted text-base sm:text-lg font-light leading-relaxed">
            A seamless orchestration of moments designed to envelop your guests in elegance from their very first step into Uma Palace.
          </p>
        </div>

        {/* Story Stepper Tabs */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-12">
          {VISUAL_STORY_STEPS.map((step, idx) => {
            const isActive = activeStep === idx;
            return (
              <button
                key={step.step}
                onClick={() => setActiveStep(idx)}
                className={`p-4 sm:p-5 rounded-2xl text-left border transition-all duration-300 relative overflow-hidden ${
                  isActive
                    ? 'bg-charcoal-900 text-white border-gold-500 shadow-luxury'
                    : 'bg-white border-gold-200/70 text-charcoal-800 hover:border-gold-400'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span
                    className={`font-serif text-2xl sm:text-3xl font-bold ${
                      isActive ? 'text-gold-400' : 'text-gold-600/70'
                    }`}
                  >
                    {step.step}
                  </span>
                  <span
                    className={`text-[10px] tracking-widest uppercase font-semibold px-2 py-0.5 rounded ${
                      isActive ? 'bg-gold-500/20 text-gold-300' : 'bg-ivory-200 text-muted'
                    }`}
                  >
                    Step
                  </span>
                </div>
                <h4 className="font-serif text-base sm:text-lg font-bold tracking-tight">
                  {step.title}
                </h4>
                <p className={`text-[11px] truncate mt-0.5 ${isActive ? 'text-ivory-200' : 'text-muted'}`}>
                  {step.tagline}
                </p>

                {isActive && (
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-gold-500 via-gold-300 to-gold-600" />
                )}
              </button>
            );
          })}
        </div>

        {/* Featured Step Visual & Narrative Card */}
        {(() => {
          const current = VISUAL_STORY_STEPS[activeStep];
          return (
            <div className="bg-white rounded-3xl overflow-hidden shadow-elevated border border-gold-200/80">
              <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
                
                {/* Large Visual */}
                <div className="lg:col-span-7 relative h-80 sm:h-96 lg:h-[460px] overflow-hidden bg-charcoal-900">
                  <img
                    key={current.step}
                    src={current.image}
                    alt={current.title}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/70 via-transparent to-transparent pointer-events-none" />
                  
                  <div className="absolute top-6 left-6">
                    <span className="font-serif text-4xl sm:text-5xl font-bold text-white/40">
                      {current.step}
                    </span>
                  </div>
                </div>

                {/* Narrative text */}
                <div className="lg:col-span-5 p-8 sm:p-12 lg:p-14 space-y-6">
                  <div>
                    <span className="text-xs uppercase tracking-widest text-gold-700 font-semibold block mb-1">
                      Chapter {current.step} • {current.tagline}
                    </span>
                    <h3 className="font-serif text-3xl sm:text-4xl font-bold text-charcoal-900">
                      {current.title}
                    </h3>
                  </div>

                  <p className="text-charcoal-700 text-sm sm:text-base leading-relaxed font-light">
                    {current.description}
                  </p>

                  <div className="pt-4 flex items-center justify-between border-t border-gold-200/60">
                    <button
                      onClick={() => setActiveStep((prev) => (prev > 0 ? prev - 1 : VISUAL_STORY_STEPS.length - 1))}
                      className="text-xs font-semibold uppercase tracking-wider text-muted hover:text-charcoal-900 transition-colors"
                    >
                      ← Previous
                    </button>

                    <button
                      onClick={() => setActiveStep((prev) => (prev < VISUAL_STORY_STEPS.length - 1 ? prev + 1 : 0))}
                      className="text-xs font-semibold uppercase tracking-wider text-gold-700 hover:text-gold-900 flex items-center gap-1 transition-colors"
                    >
                      <span>Next Chapter</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

              </div>
            </div>
          );
        })()}

      </div>
    </section>
  );
}
