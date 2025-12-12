"use client";

import { siteData } from '@/data/siteData';
import { Mail } from 'lucide-react';

export default function Newsletter() {
  const { newsletter } = siteData;

  return (
    <section className="py-20 bg-wids-dark text-white relative overflow-hidden">
      {/* Decorative Circle */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-wids-teal rounded-full opacity-10 blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/10 mb-6">
            <Mail className="w-6 h-6 text-wids-gold" />
          </div>
          
          <h2 className="text-3xl font-bold mb-4">{newsletter.title}</h2>
          <p className="text-slate-400 mb-8">
            {newsletter.description}
          </p>
          
          <form className="flex flex-col sm:flex-row gap-4" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder={newsletter.placeholder}
              className="flex-1 px-6 py-4 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-slate-500 focus:outline-none focus:border-wids-teal transition-colors"
            />
            <button 
              type="submit"
              className="px-8 py-4 bg-wids-gold text-wids-dark font-bold rounded-lg hover:bg-yellow-400 transition-colors"
            >
              {newsletter.buttonText}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
