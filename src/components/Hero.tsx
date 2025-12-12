import { siteData } from '@/data/siteData';
import { MapPin, Calendar } from 'lucide-react';
import Link from 'next/link';

export default function Hero() {
  const { hero } = siteData;
  
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-wids-dark text-white">
      {/* Background Overlay */}
      <div className="absolute inset-0 z-0 opacity-40">
        <img 
          src={hero.backgroundImage} 
          alt="Background" 
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="container mx-auto px-4 relative z-10 text-center">
        <span className="inline-block py-1 px-3 rounded-full bg-wids-teal/20 text-wids-teal text-sm font-semibold mb-6 border border-wids-teal/30">
          {hero.subtitle}
        </span>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
          {hero.title}
        </h1>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 text-lg text-gray-300 mb-10">
          <div className="flex items-center gap-2">
            <Calendar className="w-5 h-5 text-wids-gold" />
            <span>{hero.status}</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-5 h-5 text-wids-gold" />
            <span>{hero.location}</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link 
            href={hero.ctaPrimary.href}
            className="w-full sm:w-auto px-8 py-4 bg-wids-gold text-wids-dark font-bold rounded-lg hover:bg-yellow-400 transition-all transform hover:scale-105"
          >
            {hero.ctaPrimary.label}
          </Link>
          <Link 
            href={hero.ctaSecondary.href}
            className="w-full sm:w-auto px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-wids-dark transition-all"
          >
            {hero.ctaSecondary.label}
          </Link>
        </div>
      </div>
    </section>
  );
}
