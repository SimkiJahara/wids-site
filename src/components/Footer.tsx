import { siteData } from '@/data/siteData';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-wids-dark text-white py-12 border-t border-slate-800">
      <div className="container mx-auto px-4 text-center">
        <div className="mb-8">
          <h3 className="text-2xl font-bold mb-2">WiDS Bangladesh</h3>
          <p className="text-slate-400 max-w-md mx-auto text-sm">
            {siteData.footer.disclaimer}
          </p>
        </div>
        <div className="text-slate-500 text-sm mb-4">
          {siteData.footer.copyright}
        </div>
        <div className="text-slate-600 text-xs">
          Website designed and maintained by{' '}
          <Link 
            href="https://www.linkedin.com/in/maximnizhar/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-wids-teal hover:text-cyan-300 transition-colors"
          >
            Maxim Nizhar
          </Link>
        </div>
      </div>
    </footer>
  );
}
