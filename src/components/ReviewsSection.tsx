import React from 'react';
import { siteConfig } from '../data/siteConfig';
import { Star, MessageSquareQuote, CheckCircle2, ThumbsUp } from 'lucide-react';

export const ReviewsSection: React.FC = () => {
  const { reviews } = siteConfig;

  return (
    <section id="reviews" className="relative py-24 bg-[#0a1410] border-t border-white/[0.08] overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-emerald-950/20 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-400 text-xs font-semibold uppercase tracking-[0.2em] mb-4">
            <ThumbsUp className="w-3.5 h-3.5" />
            <span>Verified Guest Experiences</span>
          </div>
          <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-wide">
            WHAT OUR GUESTS SAY
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#9eb6a9]">
            Real reviews and testimonials from families, corporate teams, and wedding celebrations at Country Roads Resort, Howrah.
          </p>
        </div>

        {/* 4 Testimonial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((rev) => (
            <div
              key={rev.id}
              className="luxury-glass-subtle rounded-2xl p-6 sm:p-7 border border-white/10 hover:border-emerald-500/40 transition-all duration-300 flex flex-col justify-between group shadow-xl"
            >
              <div>
                {/* 5-Star Rating */}
                <div className="flex items-center gap-1 text-amber-400 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-xs sm:text-sm text-[#d1e0d7] leading-relaxed italic mb-6">
                  "{rev.reviewText}"
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-4 border-t border-white/10 flex items-center gap-3">
                <img
                  src={rev.avatarUrl}
                  alt={rev.author}
                  className="w-11 h-11 rounded-full object-cover border-2 border-emerald-500/40 group-hover:border-emerald-400 transition-colors shrink-0"
                />
                <div className="min-w-0">
                  <div className="flex items-center gap-1.5">
                    <span className="font-cinzel font-bold text-white text-sm truncate">
                      {rev.author}
                    </span>
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  </div>
                  <div className="text-[11px] text-[#8ea89a] truncate">
                    {rev.location} · {rev.source}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Aggregate Credibility Callout */}
        <div className="mt-14 p-6 rounded-2xl bg-black/40 border border-white/10 max-w-2xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-xl bg-emerald-950/60 border border-emerald-500/30 text-emerald-400 shrink-0">
              <MessageSquareQuote className="w-6 h-6" />
            </div>
            <div>
              <span className="font-cinzel font-bold text-white text-base block">
                Top Rated Weekend Getaway Near Kolkata
              </span>
              <span className="text-xs text-[#9eb6a9]">
                Consistently praised for courteous staff, 55 acres of lush greenery & delicious cuisine.
              </span>
            </div>
          </div>

          <a
            href={siteConfig.contact.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-xl text-xs font-semibold text-emerald-300 hover:text-white bg-white/5 border border-white/10 transition-colors shrink-0"
          >
            Read Google Reviews ↗
          </a>
        </div>
      </div>
    </section>
  );
};
