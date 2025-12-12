import { siteData } from '@/data/siteData';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function InfoGrid() {
  const { infoGrid } = siteData;

  return (
    <section className="py-20 container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {infoGrid.cards.map((card, idx) => (
          <div 
            key={idx} 
            className={`${card.color} ${card.textColor} rounded-2xl p-8 flex flex-col justify-between min-h-[250px] transition-transform hover:-translate-y-1`}
          >
            <div>
              <h3 className="text-2xl font-bold mb-4">{card.title}</h3>
              <p className="opacity-90 leading-relaxed mb-8">
                {card.description}
              </p>
            </div>
            
            <div>
              <Link 
                href={card.link}
                className="inline-flex items-center gap-2 font-bold hover:gap-3 transition-all"
              >
                Learn More <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
