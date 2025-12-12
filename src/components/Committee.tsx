import { siteData } from '@/data/siteData';

export default function Committee() {
  const { committee } = siteData;

  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 text-wids-dark">{committee.title}</h2>
          <p className="text-slate-500">{committee.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {committee.members.map((member, idx) => (
            <div key={idx} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow text-center border border-slate-100">
              <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden bg-slate-200">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-lg font-bold text-wids-dark">{member.name}</h3>
              <p className="text-wids-teal font-medium text-sm mb-2">{member.role}</p>
              <p className="text-slate-500 text-xs uppercase tracking-wide">{member.affiliation}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
