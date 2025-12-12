"use client";

import { siteData } from '@/data/siteData';

export default function Sponsors() {
  const { sponsors } = siteData;

  return (
    <section id="sponsors" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-12 text-wids-dark">{sponsors.title}</h2>
        
        <div className="flex flex-wrap justify-center items-center gap-12">
          {sponsors.list.map((sponsor, idx) => (
            <a 
              key={idx} 
              href={sponsor.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex flex-col items-center"
            >
              {/* If logo file exists, use it. Otherwise fallback to text/placeholder */}
              <div className="h-24 w-auto grayscale group-hover:grayscale-0 transition-all duration-300 opacity-70 group-hover:opacity-100">
                 {/* Using a placeholder for now, replace src with sponsor.logo */}
                 <img 
                    src={sponsor.logo} 
                    alt={sponsor.name}
                    className="h-full w-auto object-contain"
                    onError={(e) => {
                      e.currentTarget.src = "https://placehold.co/200x100/transparent/1A1A1A?text=" + encodeURIComponent(sponsor.name);
                    }}
                 />
              </div>
              <span className="mt-4 text-sm font-semibold text-slate-400 group-hover:text-wids-teal">
                {sponsor.name}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
