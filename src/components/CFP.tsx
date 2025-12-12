import { siteData } from '@/data/siteData';
import { FileText, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function CFP() {
  const { cfp } = siteData;

  return (
    <section id="cfp" className="py-20 bg-wids-teal/5">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-100">
          <div className="p-8 md:p-12 flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              <div className="flex items-center gap-2 text-wids-teal font-bold mb-2">
                <FileText className="w-5 h-5" />
                <span>{cfp.subtitle}</span>
              </div>
              <h2 className="text-3xl font-bold mb-4 text-wids-dark">{cfp.title}</h2>
              <p className="text-slate-600 mb-6 leading-relaxed">
                {cfp.description}
              </p>
              <p className="text-sm font-semibold text-wids-gold bg-wids-dark inline-block px-3 py-1 rounded mb-6">
                {cfp.deadline}
              </p>
            </div>
            
            <div className="flex-shrink-0">
              <Link 
                href={cfp.cta.href}
                className="inline-flex items-center gap-2 px-8 py-4 bg-wids-teal text-white font-bold rounded-lg hover:bg-cyan-600 transition-colors shadow-lg shadow-cyan-200"
              >
                {cfp.cta.label}
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
