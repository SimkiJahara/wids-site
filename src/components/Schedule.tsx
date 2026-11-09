"use client";

import { siteData } from "@/data/siteData";
import { FadeIn } from "./ui/Motion";

export default function Schedule() {
  const { schedule } = siteData;

  return (
    <section id="schedule" className="py-20 bg-wids-dark relative">
      <div className="container mx-auto px-4 max-w-4xl">
        <FadeIn className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-white">{schedule.title}</h2>
          <p className="text-slate-400 text-lg">{schedule.subtitle}</p>
        </FadeIn>

        <div className="rounded-2xl border border-white/10 overflow-hidden">
          {schedule.items.map((item, i) => (
            <div
              key={i}
              className="grid grid-cols-1 md:grid-cols-[240px_1fr] gap-1 md:gap-6 px-6 py-4 border-b border-white/10 last:border-b-0 bg-white/[0.03] hover:bg-white/[0.06] transition-colors"
            >
              <div className="font-mono font-bold text-wids-gold">{item.time}</div>
              <div>
                <div className="text-white font-semibold">{item.title}</div>
                {item.sub && (
                  <div className="text-sm text-wids-teal">{item.sub}</div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}