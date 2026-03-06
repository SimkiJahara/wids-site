"use client";

import Link from "next/link";
import {
  BadgeDollarSign,
  Globe2,
  GraduationCap,
  Info,
  MapPin,
} from "lucide-react";

import { siteData } from "@/data/siteData";
import { FadeIn } from "./ui/Motion";

export default function Registration() {
  const { registration } = siteData;
  const feeGroups = [
    {
      tier: "Regular",
      icon: BadgeDollarSign,
      accent: "text-wids-gold border-wids-gold/20 bg-wids-gold/5",
      amountColor: "text-wids-gold",
      fees: registration.fees.filter((fee) => fee.tier === "Regular"),
    },
    {
      tier: "Student",
      icon: GraduationCap,
      accent: "text-wids-teal border-wids-teal/20 bg-wids-teal/5",
      amountColor: "text-wids-teal",
      fees: registration.fees.filter((fee) => fee.tier === "Student"),
    },
  ];

  return (
    <section
      id="register"
      className="py-20 bg-wids-surface relative overflow-hidden border-t border-white/5"
    >
      <div className="absolute top-0 left-0 w-96 h-96 bg-wids-gold/10 rounded-full blur-[140px] -translate-x-1/3 -translate-y-1/3 pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-wids-teal/10 rounded-full blur-[140px] translate-x-1/4 translate-y-1/4 pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        <FadeIn className="max-w-6xl mx-auto">
          <div className="glass rounded-[32px] border border-white/10 overflow-hidden shadow-2xl">
            <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
              <div className="p-8 md:p-10 lg:p-12 border-b lg:border-b-0 lg:border-r border-white/10">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-wids-gold/10 border border-wids-gold/20 mb-6">
                  <BadgeDollarSign className="w-4 h-4 text-wids-gold" />
                  <span className="text-wids-gold text-sm font-semibold">
                    Registration 2026
                  </span>
                </div>

                <h2 className="text-4xl font-bold text-white mb-4">
                  {registration.title}
                </h2>
                <p className="text-lg text-slate-300 leading-relaxed">
                  {registration.subtitle}
                </p>

                <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-wids-teal/10 border border-wids-teal/20 flex items-center justify-center flex-shrink-0">
                      <Info className="w-5 h-5 text-wids-teal" />
                    </div>
                    <div className="space-y-2">
                      <p className="text-slate-300 leading-relaxed">
                        {registration.note}
                      </p>
                      <Link
                        href="#contact"
                        className="inline-flex items-center gap-2 text-sm font-semibold text-wids-teal hover:text-cyan-300 transition-colors"
                      >
                        Contact organizers
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 md:p-8 lg:p-10 bg-white/[0.02] space-y-5">
                {feeGroups.map((group) => {
                  const TierIcon = group.icon;

                  return (
                    <div
                      key={group.tier}
                      className="rounded-2xl border border-white/10 bg-black/10 p-5 md:p-6"
                    >
                      <div className="flex items-center gap-3 mb-4">
                        <div
                          className={`w-11 h-11 rounded-xl border flex items-center justify-center ${group.accent}`}
                        >
                          <TierIcon className="w-5 h-5" />
                        </div>
                        <div>
                          <p className="text-white font-bold text-lg">
                            {group.tier} Registration
                          </p>
                          <p className="text-sm text-slate-400">
                            Published fee tiers
                          </p>
                        </div>
                      </div>

                      <div className="divide-y divide-white/10">
                        {group.fees.map((fee) => {
                          const AudienceIcon =
                            fee.audience === "International" ? Globe2 : MapPin;

                          return (
                            <div
                              key={`${fee.tier}-${fee.audience}`}
                              className="flex items-center justify-between gap-4 py-4 first:pt-0 last:pb-0"
                            >
                              <div className="flex items-center gap-3 min-w-0">
                                <div className="w-9 h-9 rounded-full bg-white/[0.04] border border-white/10 flex items-center justify-center flex-shrink-0">
                                  <AudienceIcon className="w-4 h-4 text-slate-300" />
                                </div>
                                <div className="min-w-0">
                                  <p className="text-white font-medium">
                                    {fee.audience}
                                  </p>
                                  <p className="text-sm text-slate-400">
                                    {fee.audience === "Local"
                                      ? "Bangladesh-based participants"
                                      : "International participants"}
                                  </p>
                                </div>
                              </div>

                              <p
                                className={`text-lg md:text-xl font-semibold whitespace-nowrap ${group.amountColor}`}
                              >
                                {fee.amount}
                              </p>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
