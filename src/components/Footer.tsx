"use client";
import React from "react";
import Link from "next/link";
import { assetPath } from "@/lib/basePath";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/[0.05] bg-[#000000] pb-12 pt-20 lg:pt-28 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay" style={{ backgroundImage: `url(${assetPath("/noise.png")})` }}></div>
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-cyan-900/10 blur-[120px] pointer-events-none rounded-[100%]"></div>

      <div className="relative z-10 mx-auto max-w-[85rem] px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:gap-16 pb-16 md:grid-cols-12 border-b border-white/[0.06]">
          {/* Brand info */}
          <div className="md:col-span-12 lg:col-span-5 space-y-6">
            <Link href="/" className="inline-flex items-center group">
              <img src={assetPath("/AVENSOFT-dark-theme.png")} alt="Avensoft Logo" className="h-20 lg:h-[96px] w-auto object-contain transition-transform duration-500 group-hover:scale-105" />
            </Link>

            <p className="font-body text-sm lg:text-base text-slate-400 max-w-md leading-relaxed">
              Architecting mission-critical software systems — from native Android telematics and edge AI models to high-throughput cloud portals for institutions across India.
            </p>

            <div className="pt-2">
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 shadow-[inset_0_0_10px_rgba(16,185,129,0.05)]">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-xs font-mono font-semibold tracking-wide text-emerald-400 uppercase">Deployments Active</span>
              </div>
            </div>
          </div>

          {/* Offerings Links */}
          <div className="md:col-span-6 lg:col-span-4">
            <h4 className="font-mono text-xs font-bold tracking-[0.2em] uppercase text-white/50 mb-6 lg:mb-8 flex items-center gap-2">
              <span className="w-3 h-[1px] bg-white/20"></span> Engineering
            </h4>
            <ul className="space-y-4">
              {[
                { label: "Mobile App Development", href: "/services/mobile" },
                { label: "Web Platform Development", href: "/services/web" },
                { label: "AI & ML Integration", href: "/services/ai" },
                { label: "Enterprise Architecture", href: "/services/enterprise" },
                { label: "UI / UX & Product Design", href: "/services/design" },
              ].map(({ label, href }) => (
                <li key={label}>
                  <Link href={href} className="font-body text-[0.95rem] text-slate-400 transition-colors hover:text-cyan-400 flex items-center gap-3 group w-max">
                    <svg className="w-3.5 h-3.5 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 text-cyan-400 transition-all duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                    <span className="transition-transform duration-300 group-hover:translate-x-1">{label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-6 lg:col-span-3">
            <h4 className="font-mono text-xs font-bold tracking-[0.2em] uppercase text-white/50 mb-6 lg:mb-8 flex items-center gap-2">
              <span className="w-3 h-[1px] bg-white/20"></span> Company
            </h4>
            <ul className="space-y-4">
              {[
                { label: "Our Work (Portfolio)", href: "/portfolio" },
                { label: "About Avensoft", href: "/about" },
                { label: "Book a Consultation", href: "#contact" },
              ].map(({ label, href }) => (
                <li key={label}>
                  <Link href={href} className="font-body text-[0.95rem] text-slate-400 transition-colors hover:text-cyan-400 flex items-center gap-3 group w-max">
                    <svg className="w-3.5 h-3.5 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 text-cyan-400 transition-all duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                    <span className="transition-transform duration-300 group-hover:translate-x-1">{label}</span>
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-10 pt-6 border-t border-white/[0.06]">
              <span className="font-mono text-[0.65rem] text-slate-500 uppercase tracking-[0.2em] block mb-2">Direct Channel</span>
              <a href="mailto:avensoft26@gmail.com" className="inline-flex font-heading font-bold text-[0.95rem] tracking-wide text-white hover:text-cyan-400 transition-colors">
                avensoft26@gmail.com
              </a>
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="flex flex-col items-center justify-between gap-6 pt-8 md:flex-row text-center md:text-left">
          <p className="font-body text-xs text-slate-500">
            © 2026 Avensoft Technologies. Fully compliant with India DPDP Act 2026.
          </p>
          <div className="flex flex-wrap justify-center md:justify-end items-center gap-4 lg:gap-8">
            <Link href="/services/mobile" className="font-mono text-[0.65rem] font-bold tracking-[0.1em] text-slate-500 uppercase hover:text-white transition-colors">Mobile Systems</Link>
            <Link href="/services/web" className="font-mono text-[0.65rem] font-bold tracking-[0.1em] text-slate-500 uppercase hover:text-white transition-colors">Web Platforms</Link>
            <Link href="/services/ai" className="font-mono text-[0.65rem] font-bold tracking-[0.1em] text-slate-500 uppercase hover:text-white transition-colors">AI / ML</Link>
            <a href={assetPath("/sitemap.xml")} target="_blank" rel="noopener noreferrer" className="font-mono text-[0.65rem] font-bold tracking-[0.1em] text-slate-500 uppercase hover:text-cyan-400 transition-colors">Sitemap</a>
            <a href={assetPath("/llms.txt")} target="_blank" rel="noopener noreferrer" className="font-mono text-[0.65rem] font-bold tracking-[0.1em] text-slate-500 uppercase hover:text-cyan-400 transition-colors">AI Docs (llms.txt)</a>
            <Link href="#contact" className="font-mono text-[0.65rem] font-bold tracking-[0.1em] text-slate-500 uppercase hover:text-white transition-colors">Get in Touch</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
