import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import InfoGrid from '@/components/InfoGrid';
import Timeline from '@/components/Timeline';
import CFP from '@/components/CFP';
import Scope from '@/components/Scope';
import Speakers from '@/components/Speakers';
import Committee from '@/components/Committee';
import Sponsors from '@/components/Sponsors';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { siteData } from '@/data/siteData';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      
      <Hero />
      
      {/* About Section */}
      <section id="about" className="pt-20 pb-10 container mx-auto px-4 text-center max-w-3xl">
        <h2 className="text-3xl font-bold mb-6 text-white">{siteData.about.title}</h2>
        <p className="text-lg text-slate-300 leading-relaxed">
          {siteData.about.content}
        </p>
      </section>

      <InfoGrid />

      <Timeline />

      <CFP />

      <Scope />
      
      <Speakers />

      <Committee />
      
      {/* Agenda Placeholder */}
      <section className="py-20 bg-wids-surface text-center border-y border-white/5">
        <h2 className="text-3xl font-bold mb-4 text-white">{siteData.agenda.title}</h2>
        <p className="text-xl text-wids-teal font-semibold">{siteData.agenda.status}</p>
      </section>

      <Sponsors />

      <Contact />

      <Footer />
    </main>
  );
}
