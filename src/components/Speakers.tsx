import { siteData } from '@/data/siteData';

export default function Speakers() {
  const { speakers } = siteData;

  return (
    <section id="speakers" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-wids-dark">{speakers.title}</h2>
          <p className="text-slate-500 text-lg">{speakers.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {speakers.list.map((speaker) => (
            <div key={speaker.id} className="group">
              <div className="relative overflow-hidden rounded-xl mb-4 aspect-square bg-slate-100">
                <img 
                  src={speaker.image} 
                  alt={speaker.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <h3 className="text-xl font-bold text-wids-dark">{speaker.name}</h3>
              <p className="text-wids-teal font-medium text-sm mb-1">{speaker.role}</p>
              <p className="text-slate-500 text-sm">{speaker.org}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
