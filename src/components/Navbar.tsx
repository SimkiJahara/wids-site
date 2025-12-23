import Link from 'next/link';
import { siteData } from '@/data/siteData';
import { Menu } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full glass border-b border-white/10">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          {/* Logo Placeholder - replace src with siteData.general.logo when file exists */}
          <div className="font-bold text-2xl tracking-tighter text-white">
            WiDS
          </div>
        </div>

        <div className="hidden md:flex items-center gap-8">
          {siteData.navbar.links.map((link) => (
            <Link 
              key={link.label} 
              href={link.href}
              className="text-sm font-medium text-slate-300 hover:text-wids-teal transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link 
            href={siteData.navbar.cta.href}
            className="bg-wids-gold text-wids-dark px-5 py-2 rounded-full font-semibold text-sm hover:bg-yellow-400 transition-all hover:shadow-[0_0_20px_rgba(254,203,0,0.3)]"
          >
            {siteData.navbar.cta.label}
          </Link>
        </div>

        {/* Mobile Menu Trigger */}
        <button className="md:hidden p-2 text-white">
          <Menu className="w-6 h-6" />
        </button>
      </div>
    </nav>
  );
}
