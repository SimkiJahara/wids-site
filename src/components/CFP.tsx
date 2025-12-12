"use client";

import { siteData } from '@/data/siteData';
import { FileText, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { FadeIn } from './ui/Motion';

export default function CFP() {
  const { cfp } = siteData;

  return (
    <section id="cfp" className="py-20 bg-wids-dark relative">
      <div className="container mx-auto px-4">
        <FadeIn className="max-w-4xl mx-auto glass rounded-2xl shadow-2xl overflow-hidden border border-wids-teal/20 relative">
          {/* Decorative Gradient */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-wids-teal/10 rounded-full blur-[80px] -mr-16 -mt-16"></div>
          
          <div className="p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 relative z-10">
            <div className="flex-1">
              <div className="flex items-center gap-2 text-wids-teal font-bold mb-2">
                <FileText className="w-5 h-5" />
                <span>{cfp.subtitle}</span>
              </div>
              <h2 className="text-3xl font-bold mb-4 text-white">{cfp.title}</h2>
              <p className="text-slate-300 mb-6 leading-relaxed">
                {cfp.description}
              </p>
              <p className="text-sm font-semibold text-wids-dark bg-wids-gold inline-block px-3 py-1 rounded mb-6">
                {cfp.deadline}
              </p>
            </div>
            
            <div className="flex-shrink-0">
              <Link 
                href={cfp.cta.href}
                className="inline-flex items-center gap-2 px-8 py-4 bg-wids-teal text-white font-bold rounded-lg hover:bg-cyan-400 transition-all shadow-[0_0_20px_rgba(0,181,226,0.3)] hover:shadow-[0_0_30px_rgba(0,181,226,0.5)]"
              >
                {cfp.cta.label}
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
