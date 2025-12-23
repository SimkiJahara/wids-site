"use client";

import { siteData } from '@/data/siteData';
import { FadeIn, StaggerContainer, StaggerItem } from './ui/Motion';
import { BookOpen, ChevronRight } from 'lucide-react';

export default function Scope() {
  const { scope } = siteData;

  return (
    <section id="scope" className="py-20 bg-wids-dark relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-wids-gold/5 rounded-full blur-[120px] -ml-48 -mt-48 pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-wids-teal/5 rounded-full blur-[120px] -mr-48 -mb-48 pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        <FadeIn className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-wids-gold/10 border border-wids-gold/20 mb-6">
            <BookOpen className="w-4 h-4 text-wids-gold" />
            <span className="text-wids-gold text-sm font-semibold">Research Tracks</span>
          </div>
          <h2 className="text-4xl font-bold mb-4 text-white">{scope.title}</h2>
          <p className="text-slate-400 text-lg max-w-3xl mx-auto">{scope.subtitle}</p>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {scope.tracks.map((track) => (
            <StaggerItem key={track.id} className="group">
              <div className="h-full p-6 rounded-xl glass-card border border-white/5 hover:border-wids-teal/30 transition-all duration-300">
                {/* Track Number Badge */}
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br from-wids-gold to-wids-gold-dim flex items-center justify-center shadow-lg shadow-wids-gold/20">
                    <span className="text-wids-dark font-bold text-sm">{String(track.id).padStart(2, '0')}</span>
                  </div>
                  <h3 className="text-lg font-bold text-white group-hover:text-wids-gold transition-colors leading-tight">
                    {track.title}
                  </h3>
                </div>

                {/* Topics List */}
                <ul className="space-y-2 pl-14">
                  {track.topics.map((topic, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm text-slate-400 group-hover:text-slate-300 transition-colors">
                      <ChevronRight className="w-4 h-4 text-wids-teal flex-shrink-0 mt-0.5" />
                      <span>{topic}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
