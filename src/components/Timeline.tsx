import { siteData } from '@/data/siteData';
import { Calendar, CheckCircle, Circle } from 'lucide-react';

export default function Timeline() {
  const { timeline } = siteData;

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 text-wids-dark">{timeline.title}</h2>
          <p className="text-slate-500">{timeline.subtitle}</p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-slate-100 hidden md:block"></div>

          <div className="space-y-12">
            {timeline.events.map((event, index) => {
              const isEven = index % 2 === 0;
              const isPast = new Date(event.date) < new Date(); // Simple check, can be improved

              return (
                <div key={index} className={`flex flex-col md:flex-row items-center ${isEven ? 'md:flex-row-reverse' : ''}`}>
                  <div className="flex-1 w-full md:w-1/2 p-4">
                    <div className={`p-6 rounded-xl border ${isPast ? 'bg-slate-50 border-slate-100 opacity-70' : 'bg-white border-slate-200 shadow-lg'} transition-all hover:shadow-xl`}>
                      <div className="flex items-center gap-3 mb-2">
                        <Calendar className={`w-5 h-5 ${isPast ? 'text-slate-400' : 'text-wids-teal'}`} />
                        <span className={`font-bold ${isPast ? 'text-slate-500' : 'text-wids-dark'}`}>{event.date}</span>
                      </div>
                      <h3 className="text-xl font-bold mb-1">{event.title}</h3>
                      <span className={`text-xs font-semibold px-2 py-1 rounded-full ${isPast ? 'bg-slate-200 text-slate-500' : 'bg-wids-gold/20 text-wids-dark'}`}>
                        {isPast ? 'Completed' : 'Upcoming'}
                      </span>
                    </div>
                  </div>
                  
                  <div className="relative z-10 flex items-center justify-center w-8 h-8 rounded-full bg-white border-4 border-slate-100 md:mx-4 my-4 md:my-0">
                    {isPast ? (
                      <CheckCircle className="w-full h-full text-slate-400" />
                    ) : (
                      <Circle className="w-full h-full text-wids-gold fill-wids-gold" />
                    )}
                  </div>

                  <div className="flex-1 w-full md:w-1/2 p-4 hidden md:block"></div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
