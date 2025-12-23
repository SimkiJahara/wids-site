"use client";

import { siteData } from '@/data/siteData';
import { MapPin, Calendar } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Hero() {
  const { hero } = siteData;
  
  return (
    <section className="relative min-h-[calc(100vh-64px)] flex flex-col overflow-hidden bg-wids-dark text-white">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-wids-teal/20 rounded-full blur-[120px] animate-[pulse-glow_4s_infinite]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-wids-gold/10 rounded-full blur-[120px] animate-[pulse-glow_6s_infinite_reverse]" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
      </div>

      {/* Top Section */}
      <div className="flex-1 flex items-center justify-center py-6 md:py-8 relative z-10">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            {/* 1st International Conference */}
            <div className="mb-8 md:mb-12">
              <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight">
                <span className="text-wids-gold drop-shadow-[0_0_30px_rgba(254,203,0,0.5)]">1</span>
                <span className="text-wids-teal text-4xl md:text-5xl lg:text-6xl align-top">st</span>
              </h1>
              <p className="text-xl md:text-2xl lg:text-3xl font-medium text-wids-teal mt-2">
                International Conference
              </p>
            </div>
            
            {/* Logo and University Section */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 mb-8">
              {/* WiDS Logo */}
              <div className="relative w-48 h-32 md:w-64 md:h-40 lg:w-80 lg:h-48">
                <div className="absolute inset-0 bg-wids-gold/10 rounded-2xl blur-2xl"></div>
                <img 
                  src="/logos/widsBD.jpeg" 
                  alt="WiDS Bangladesh Logo" 
                  className="relative w-full h-full object-contain drop-shadow-[0_0_20px_rgba(255,255,255,0.3)]"
                />
              </div>
              
              {/* Divider */}
              <div className="hidden md:block w-px h-24 bg-white/30"></div>
              
              {/* University Info */}
              <div className="text-center md:text-left">
                <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
                  Bangladesh @
                </p>
                <p className="text-xl md:text-2xl lg:text-3xl font-semibold text-slate-300">
                  Department of ECE, North South University
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Bottom Section - Dark Glass Banner */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="relative py-6 md:py-10 px-4 z-10"
      >
        {/* Top border glow - more visible */}
        <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-wids-teal/70 to-transparent"></div>
        
        {/* Background with subtle teal tint */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-800/90 via-slate-900/95 to-wids-dark backdrop-blur-md"></div>
        <div className="absolute inset-0 bg-wids-teal/[0.03]"></div>
        
        <div className="container mx-auto relative">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-center leading-relaxed max-w-5xl mx-auto">
            <span className="text-white">The First </span>
            <span className="text-wids-gold whitespace-nowrap">WiDS NSU</span>
            <span className="text-white"> International Conference </span>
            <span className="text-slate-400">(2026)</span>
            <span className="text-white"> Hosted by </span>
            <span className="text-wids-teal whitespace-nowrap">North South University</span>
            <span className="text-white"> in Collaboration with </span>
            <span className="text-wids-gold whitespace-nowrap">Stanford University</span>
          </h2>
          
          {/* Date and Location */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 text-lg text-slate-300 mt-8">
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-wids-gold/10 border border-wids-gold/30 backdrop-blur-md">
              <Calendar className="w-5 h-5 text-wids-gold" />
              <span className="font-mono font-bold tracking-wide text-wids-gold">{hero.status}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-wids-teal" />
              <span>{hero.location}</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
            <Link 
              href={hero.ctaPrimary.href}
              className="w-full sm:w-auto px-8 py-4 bg-wids-gold text-wids-dark font-bold rounded-lg hover:bg-yellow-400 transition-all transform hover:scale-105 hover:shadow-[0_0_30px_rgba(254,203,0,0.4)]"
            >
              {hero.ctaPrimary.label}
            </Link>
            <Link 
              href={hero.ctaSecondary.href}
              className="w-full sm:w-auto px-8 py-4 bg-white/5 border border-wids-teal/30 text-white font-bold rounded-lg hover:bg-wids-teal/10 hover:border-wids-teal/50 transition-all backdrop-blur-sm"
            >
              {hero.ctaSecondary.label}
            </Link>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

