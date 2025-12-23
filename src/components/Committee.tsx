"use client";

import { siteData } from '@/data/siteData';
import { FadeIn, StaggerContainer, StaggerItem } from './ui/Motion';
import { Users } from 'lucide-react';

export default function Committee() {
  const { committee } = siteData;

  return (
    <section id="committee" className="py-20 bg-wids-surface relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-wids-gold/5 rounded-full blur-[150px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-wids-teal/5 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        <FadeIn className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-wids-teal/10 border border-wids-teal/20 mb-6">
            <Users className="w-4 h-4 text-wids-teal" />
            <span className="text-wids-teal text-sm font-semibold">Meet the Team</span>
          </div>
          <h2 className="text-4xl font-bold mb-4 text-white">{committee.title}</h2>
          <p className="text-slate-400 text-lg">{committee.subtitle}</p>
        </FadeIn>

        {/* Committee Sections */}
        <div className="space-y-20">
          {committee.sections.map((section, sectionIdx) => (
            <FadeIn key={section.id} delay={sectionIdx * 0.1}>
              {/* Section Header */}
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-wids-gold/10 to-wids-teal/10 border border-white/10">
                  <span className="w-8 h-8 rounded-full bg-wids-gold flex items-center justify-center text-wids-dark font-bold text-sm">
                    {section.id}
                  </span>
                  <h3 className="text-2xl font-bold text-white">{section.name}</h3>
                </div>
              </div>

              {/* Members Grid */}
              <StaggerContainer className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6 max-w-7xl mx-auto">
                {section.members.map((member, idx) => (
                  <StaggerItem key={idx} className="glass-card rounded-xl p-4 text-center group hover:bg-white/5 transition-all duration-300">
                    <div className="w-20 h-20 mx-auto mb-3 rounded-full overflow-hidden border-2 border-wids-teal/20 group-hover:border-wids-gold transition-colors shadow-lg">
                      <img 
                        src={member.image} 
                        alt={member.name}
                        className="w-full h-full object-cover group-hover:grayscale transition-all duration-500"
                      />
                    </div>
                    <h4 className="text-sm font-bold text-white group-hover:text-wids-gold transition-colors line-clamp-2 mb-1">
                      {member.name}
                    </h4>
                    <p className="text-wids-teal font-medium text-xs mb-1 line-clamp-2">{member.role}</p>
                    <p className="text-slate-500 text-xs">{member.affiliation}</p>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
