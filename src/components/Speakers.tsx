"use client";

import { siteData } from '@/data/siteData';
import { FadeIn, StaggerContainer, StaggerItem } from './ui/Motion';

export default function Speakers() {
  const { speakers } = siteData;

  return (
    <section id="speakers" className="py-20 bg-wids-dark relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-wids-teal/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        <FadeIn className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-white">{speakers.title}</h2>
          <p className="text-slate-400 text-lg">{speakers.subtitle}</p>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {speakers.list.map((speaker) => (
            <StaggerItem key={speaker.id} className="group">
              <div className="relative overflow-hidden rounded-xl mb-4 aspect-square bg-white/5 border border-white/10 group-hover:border-wids-gold/50 transition-colors">
                {/* Colourful by default, black & white on hover */}
                <img
                  src={speaker.image}
                  alt={speaker.name}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 grayscale-0 group-hover:grayscale"
                />
              </div>
              <h3 className="text-xl font-bold text-white group-hover:text-wids-gold transition-colors">{speaker.name}</h3>
              <p className="text-wids-teal font-medium text-sm mb-1">{speaker.role}</p>
              <p className="text-slate-500 text-sm">{speaker.org}</p>
              {speaker.bio && (
                <p className="text-slate-400 text-sm leading-relaxed mt-3">{speaker.bio}</p>
              )}
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}