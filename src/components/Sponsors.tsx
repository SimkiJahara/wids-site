"use client";

import { siteData } from '@/data/siteData';
import { FadeIn } from './ui/Motion';

export default function Sponsors() {
  const { sponsors } = siteData;

  return (
    <section id="sponsors" className="py-20 bg-wids-dark border-t border-white/5">
      <div className="container mx-auto px-4 text-center">
        <FadeIn>
          <h2 className="text-3xl font-bold mb-12 text-white">{sponsors.title}</h2>
          
          <div className="flex flex-wrap justify-center items-center gap-12">
            {sponsors.list.map((sponsor, idx) => (
              <a 
                key={idx} 
                href={sponsor.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex flex-col items-center"
              >
                <div className="h-32 w-64 bg-white/5 rounded-xl flex items-center justify-center p-6 border border-white/10 group-hover:bg-white group-hover:scale-105 transition-all duration-300">
                   <img 
                      src={sponsor.logo} 
                      alt={sponsor.name}
                      className="max-h-full max-w-full object-contain group-hover:opacity-70 group-hover:grayscale transition-all duration-300"
                      onError={(e) => {
                        e.currentTarget.src = "https://placehold.co/200x100/transparent/FFFFFF?text=" + encodeURIComponent(sponsor.name);
                      }}
                   />
                </div>
                <span className="mt-4 text-sm font-semibold text-slate-500 group-hover:text-wids-teal transition-colors">
                  {sponsor.name}
                </span>
              </a>
            ))}
          </div>

          {/* Technical Infrastructure Support by Microsoft */}
          <div className="mt-16 pt-12 border-t border-white/10">
            <h3 className="text-xl font-semibold text-wids-teal mb-4">Technical Infrastructure Support by Microsoft</h3>
            <p className="text-slate-400 text-sm max-w-4xl mx-auto leading-relaxed">
              The Microsoft CMT service was used for managing the peer-reviewing process for this conference. This service was provided for free by Microsoft and they bore all expenses, including costs for Azure cloud services as well as for software development and support.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
