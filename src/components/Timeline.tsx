"use client";

import { siteData } from "@/data/siteData";
import { Calendar, CheckCircle, Circle } from "lucide-react";
import { FadeIn, SlideUp } from "./ui/Motion";

export default function Timeline() {
  const { timeline } = siteData;

  return (
    <section className="py-20 bg-wids-dark relative">
      <div className="container mx-auto px-4">
        <FadeIn className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 text-white">
            {timeline.title}
          </h2>
          <p className="text-slate-400">{timeline.subtitle}</p>
        </FadeIn>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-white/10 hidden md:block"></div>

          <div className="space-y-12">
            {timeline.events.map((event, index) => {
              const isEven = index % 2 === 0;
              const isPast = new Date(event.date) < new Date();

              return (
                <SlideUp
                  key={index}
                  delay={index * 0.1}
                  className={`flex flex-col md:flex-row items-center ${isEven ? "md:flex-row-reverse" : ""}`}
                >
                  <div className="flex-1 w-full md:w-1/2 p-4">
                    <div
                      className={`p-6 rounded-xl border ${isPast ? "bg-white/5 border-white/5 opacity-50" : "glass-card"} transition-all hover:border-wids-teal/30`}
                    >
                      <div className="flex items-center gap-3 mb-2">
                        <Calendar
                          className={`w-5 h-5 ${isPast ? "text-slate-500" : "text-wids-teal"}`}
                        />
                        <div className="flex flex-col">
                          <span
                            className={`font-bold ${isPast ? "text-slate-500" : "text-white"} ${event.newDate ? "line-through text-slate-500" : ""}`}
                          >
                            {event.date}
                          </span>
                          {event.newDate && (
                            <span
                              className={`font-bold ${isPast ? "text-slate-500" : "text-wids-gold"}`}
                            >
                              {event.newDate}
                            </span>
                          )}
                        </div>
                      </div>
                      <h3 className="text-xl font-bold mb-1 text-white">
                        {event.title}
                      </h3>
                      <span
                        className={`text-xs font-semibold px-2 py-1 rounded-full ${isPast ? "bg-white/5 text-slate-500" : "bg-wids-gold/20 text-wids-gold"}`}
                      >
                        {isPast ? "Completed" : "Upcoming"}
                      </span>
                    </div>
                  </div>

                  <div className="relative z-10 flex items-center justify-center w-8 h-8 rounded-full bg-wids-dark border-4 border-white/10 md:mx-4 my-4 md:my-0 shadow-[0_0_15px_rgba(0,0,0,0.5)]">
                    {isPast ? (
                      <CheckCircle className="w-full h-full text-slate-600" />
                    ) : (
                      <Circle className="w-full h-full text-wids-gold fill-wids-gold animate-pulse" />
                    )}
                  </div>

                  <div className="flex-1 w-full md:w-1/2 p-4 hidden md:block"></div>
                </SlideUp>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
