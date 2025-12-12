import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import CFP from '@/components/CFP';
import Speakers from '@/components/Speakers';
import Sponsors from '@/components/Sponsors';
import Footer from '@/components/Footer';
import { siteData } from '@/data/siteData';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      
      <Hero />
      
      {/* About Section (Inline for simplicity or extract to component) */}
      <section id="about" className="py-20 container mx-auto px-4 text-center max-w-3xl">
        <h2 className="text-3xl font-bold mb-6 text-wids-dark">{siteData.about.title}</h2>
        <p className="text-lg text-slate-600 leading-relaxed">
          {siteData.about.content}
        </p>
      </section>

      <CFP />
      
      <Speakers />
      
      {/* Agenda Placeholder */}
      <section className="py-20 bg-wids-gold/10 text-center">
        <h2 className="text-3xl font-bold mb-4">{siteData.agenda.title}</h2>
        <p className="text-xl text-wids-teal font-semibold">{siteData.agenda.status}</p>
      </section>

      <Sponsors />
      
      <Footer />
    </main>
  );
}
