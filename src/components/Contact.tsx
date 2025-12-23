"use client";

import { siteData } from '@/data/siteData';
import { Mail } from 'lucide-react';
import { FadeIn } from './ui/Motion';

export default function Contact() {
  const emails = [
    "sumaiya.nimi@northsouth.edu",
    "chair.ece@northsouth.edu"
  ];

  return (
    <section id="contact" className="py-16 bg-wids-surface border-t border-white/5">
      <div className="container mx-auto px-4 text-center">
        <FadeIn>
          <h2 className="text-3xl font-bold mb-6 text-white">Contact Us</h2>
          <p className="text-slate-400 mb-8 max-w-xl mx-auto">
            Have questions about WiDS Bangladesh 2026? Reach out to us!
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            {emails.map((email, idx) => (
              <a
                key={idx}
                href={`mailto:${email}`}
                className="inline-flex items-center gap-2 px-6 py-3 bg-wids-teal/10 border border-wids-teal/30 rounded-lg text-wids-teal hover:bg-wids-teal/20 transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span className="font-medium">{email}</span>
              </a>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
