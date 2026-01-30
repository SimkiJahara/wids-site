"use client";

import { siteData } from "@/data/siteData";
import {
  FileText,
  ExternalLink,
  AlertTriangle,
  Download,
  Send,
} from "lucide-react";
import Link from "next/link";
import { FadeIn } from "./ui/Motion";

export default function CFP() {
  const { cfp } = siteData;

  return (
    <section id="cfp" className="py-20 bg-wids-dark relative">
      <div className="container mx-auto px-4">
        <FadeIn className="max-w-4xl mx-auto glass rounded-2xl shadow-2xl overflow-hidden border border-wids-teal/20 relative">
          {/* Decorative Gradient */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-wids-teal/10 rounded-full blur-[80px] -mr-16 -mt-16"></div>

          <div className="p-8 md:p-12 relative z-10">
            {/* Header */}
            <div className="flex items-center gap-2 text-wids-teal font-bold mb-2">
              <FileText className="w-5 h-5" />
              <span>{cfp.subtitle}</span>
            </div>
            <h2 className="text-3xl font-bold mb-4 text-white">{cfp.title}</h2>
            <p className="text-slate-300 mb-6 leading-relaxed">
              {cfp.description}
            </p>

            {/* Submission Guidelines */}
            <div className="mb-6">
              <h3 className="text-lg font-bold text-wids-gold mb-4">
                Submission Guidelines
              </h3>
              <ul className="space-y-3">
                {cfp.guidelines.map(
                  (item: { label: string; text: string }, idx: number) => (
                    <li key={idx} className="flex gap-3 text-sm">
                      <span className="text-wids-teal font-bold whitespace-nowrap">
                        • {item.label}:
                      </span>
                      <span className="text-slate-300">{item.text}</span>
                    </li>
                  ),
                )}
              </ul>
            </div>

            {/* Warning */}
            <div className="flex items-start gap-3 p-4 bg-wids-gold/10 border border-wids-gold/30 rounded-lg mb-6">
              <AlertTriangle className="w-5 h-5 text-wids-gold flex-shrink-0 mt-0.5" />
              <p className="text-sm text-wids-gold">{cfp.warning}</p>
            </div>

            {/* Submit Paper Button */}
            <div className="mb-6">
              <a
                href="https://cmt3.research.microsoft.com/WiDSNSU2026/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-wids-gold text-wids-dark font-bold rounded-lg hover:bg-yellow-400 transition-all shadow-[0_0_20px_rgba(255,206,86,0.3)] hover:shadow-[0_0_30px_rgba(255,206,86,0.5)]"
              >
                <Send className="w-5 h-5" />
                Submit a Paper
              </a>
            </div>

            {/* Download PDF Button */}
            <div className="mb-6">
              <a
                href="/downloads/WiDS Final.pdf"
                download
                className="inline-flex items-center gap-2 px-6 py-3 bg-wids-teal text-white font-bold rounded-lg hover:bg-cyan-400 transition-all shadow-[0_0_20px_rgba(0,181,226,0.3)] hover:shadow-[0_0_30px_rgba(0,181,226,0.5)]"
              >
                <Download className="w-5 h-5" />
                Download Call for Papers (Poster)
              </a>
            </div>

            {/* Deadline Badge */}
            <p className="text-sm font-semibold text-wids-dark bg-wids-gold inline-block px-3 py-1 rounded">
              {cfp.deadline}
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
