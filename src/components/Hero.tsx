"use client";

import { siteData } from '@/data/siteData';
import { MapPin, Calendar } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Hero() {
  const { hero } = siteData;
  
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-wids-dark text-white">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-wids-teal/20 rounded-full blur-[120px] animate-[pulse-glow_4s_infinite]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-wids-gold/10 rounded-full blur-[120px] animate-[pulse-glow_6s_infinite_reverse]" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Logo */}
          <div className="mb-8 flex justify-center">
            <div className="relative w-48 h-48 md:w-64 md:h-64">
              <div className="absolute inset-0 bg-wids-gold/20 rounded-full blur-3xl animate-pulse"></div>
              <img 
                src="/logos/widsBD.png" 
                alt="WiDS Bangladesh Logo" 
                className="relative w-full h-full object-contain drop-shadow-[0_0_25px_rgba(255,255,255,0.4)]"
              />
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            <span className="text-white">WiDS</span> <span className="text-gradient-gold">Bangladesh</span> <span className="text-white">2026</span>
          </h1>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 text-lg text-slate-300 mb-10">
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
              <Calendar className="w-5 h-5 text-wids-gold" />
              <span className="font-mono font-bold text-white tracking-wide">{hero.status}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-wids-gold" />
              <span>{hero.location}</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              href={hero.ctaPrimary.href}
              className="w-full sm:w-auto px-8 py-4 bg-wids-gold text-wids-dark font-bold rounded-lg hover:bg-yellow-400 transition-all transform hover:scale-105 hover:shadow-[0_0_30px_rgba(254,203,0,0.4)]"
            >
              {hero.ctaPrimary.label}
            </Link>
            <Link 
              href={hero.ctaSecondary.href}
              className="w-full sm:w-auto px-8 py-4 bg-white/5 border border-white/10 text-white font-bold rounded-lg hover:bg-white/10 transition-all backdrop-blur-sm"
            >
              {hero.ctaSecondary.label}
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
