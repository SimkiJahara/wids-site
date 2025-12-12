"use client";

import { siteData } from '@/data/siteData';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { FadeIn, StaggerContainer, StaggerItem } from './ui/Motion';

export default function InfoGrid() {
  const { infoGrid } = siteData;

  return (
    <section className="py-20 container mx-auto px-4 relative z-20 -mt-20">
      <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {infoGrid.cards.map((card, idx) => (
          <StaggerItem key={idx} className="h-full">
            <div 
              className={`
                ${idx === 0 ? 'bg-gradient-to-br from-wids-gold to-orange-500 text-wids-dark' : ''}
                ${idx === 1 ? 'bg-gradient-to-br from-wids-teal to-cyan-600 text-white' : ''}
                ${idx === 2 ? 'glass-card bg-wids-surface text-white' : ''}
                rounded-2xl p-8 flex flex-col justify-between min-h-[250px] h-full shadow-xl
              `}
            >
              <div>
                <h3 className="text-2xl font-bold mb-4">{card.title}</h3>
                <p className="opacity-90 leading-relaxed mb-8">
                  {card.description}
                </p>
              </div>
              
              <div>
                <Link 
                  href={card.link}
                  className="inline-flex items-center gap-2 font-bold hover:gap-3 transition-all"
                >
                  Learn More <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </section>
  );
}
