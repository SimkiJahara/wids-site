"use client";

import { siteData } from '@/data/siteData';
import { FadeIn, StaggerContainer, StaggerItem } from './ui/Motion';

export default function Committee() {
  const { committee } = siteData;

  return (
    <section className="py-20 bg-wids-surface relative">
      <div className="container mx-auto px-4">
        <FadeIn className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 text-white">{committee.title}</h2>
          <p className="text-slate-400">{committee.subtitle}</p>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {committee.members.map((member, idx) => (
            <StaggerItem key={idx} className="glass-card rounded-xl p-6 text-center group hover:bg-white/5">
              <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-2 border-wids-teal/20 group-hover:border-wids-teal transition-colors">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-lg font-bold text-white">{member.name}</h3>
              <p className="text-wids-teal font-medium text-sm mb-2">{member.role}</p>
              <p className="text-slate-500 text-xs uppercase tracking-wide">{member.affiliation}</p>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
