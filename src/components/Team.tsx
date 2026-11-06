"use client";
import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { assetPath } from "@/lib/basePath";

const techStack = [
  { name: "Next.js", cat: "Web" }, { name: "React", cat: "Web" },
  { name: "Node.js", cat: "Backend" }, { name: "PostgreSQL", cat: "Database" },
  { name: "Redis", cat: "Database" }, { name: "Kotlin", cat: "Mobile" },
  { name: "Jetpack Compose", cat: "Mobile" }, { name: "TensorFlow Lite", cat: "AI" },
  { name: "PyTorch Mobile", cat: "AI" }, { name: "OpenCV", cat: "AI" },
  { name: "Docker", cat: "DevOps" }, { name: "Nginx", cat: "DevOps" },
  { name: "Supabase", cat: "Backend" }, { name: "Figma", cat: "Design" },
  { name: "TypeScript", cat: "Web" }, { name: "GraphQL", cat: "Backend" },
  { name: "Firebase", cat: "Mobile" }, { name: "Tailwind CSS", cat: "Web" },
];

const getTechColor = (cat: string) => {
  switch (cat) {
    case "AI": return "bg-fuchsia-500";
    case "Mobile": return "bg-cyan-500";
    case "Backend": return "bg-primary-500";
    case "Database": return "bg-emerald-500";
    case "DevOps": return "bg-amber-500";
    default: return "bg-slate-400";
  }
};

const team = [
  {
    initials: "YS", name: "Yogesh Saini", role: "Lead Developer & Systems Engineer",
    desc: "Directs full-stack application lifecycle and secure multi-role institutional workflows.",
    skills: ["Next.js", "React", "Node.js", "Cloud Deploys"],
    cat: "backend", hoverBorder: "hover:border-primary-400 hover:shadow-[0_0_35px_rgba(139,92,246,0.35)]", img: assetPath("/yogesh.jpeg"),
    portfolio: "https://yogeshsaini7172.github.io/yogeshsaini/"
  },
  {
    initials: "SM", name: "Sandeep Kumar Maurya", role: "Lead UI/UX Designer",
    desc: "Designs intuitive user journeys, scalable design systems, and rapid micro-interactions.",
    skills: ["Figma", "UI/UX", "Design Systems", "Prototyping"],
    cat: "design", hoverBorder: "hover:border-fuchsia-400 hover:shadow-[0_0_35px_rgba(217,70,239,0.35)]", img: assetPath("/sandeep.jpeg"),
    portfolio: "https://www.linkedin.com/in/sandeep-kumar-maurya-63a66130a/?isSelfProfile=false"
  },
  {
    initials: "DK", name: "Deepak Kumar", role: "Co-Founder, Backend Developer & Core Architect",
    desc: "Architects scalable backend infrastructure and secure database systems for high-throughput endpoints.",
    skills: ["Node.js", "Express", "PostgreSQL", "System Architecture"],
    cat: "backend", hoverBorder: "hover:border-cyan-400 hover:shadow-[0_0_35px_rgba(6,182,212,0.35)]", img: assetPath("/deepak.jpeg"),
    portfolio: "https://deepak-portfolioc.netlify.app/"
  },
  {
    initials: "SM", name: "Shivam Kumar Maurya", role: "UI/UX Designer",
    desc: "Crafts immersive interfaces and user-centric experiences for complex digital workflows.",
    skills: ["Figma", "User Research", "Wireframing", "UI/UX"],
    cat: "design", hoverBorder: "hover:border-pink-400 hover:shadow-[0_0_35px_rgba(244,114,182,0.35)]", img: assetPath("/shivam.jpeg"),
    portfolio: "https://shivam-portfolio-three-pearl.vercel.app/"
  },
  {
    initials: "UM", name: "Utkarsh Mani Mishra", role: "System Tester & QA Lead",
    desc: "Directs edge-case stress testing, load resilience, and QA across web and mobile.",
    skills: ["QA Testing", "Security Audits", "Load Testing", "Field Reliability"],
    cat: "mobile", hoverBorder: "hover:border-emerald-400 hover:shadow-[0_0_35px_rgba(52,211,153,0.35)]", img: assetPath("/utkarsh.jpeg"),
    portfolio: "https://www.linkedin.com/in/utkarsh-mani-mishra-98818128a/"
  },
  {
    initials: "AT", name: "Akarsh Tiwari", role: "AI/ML Engineer",
    desc: "Develops robust computer vision models and edge AI systems for real-time inference.",
    skills: ["Python", "TensorFlow", "Computer Vision", "Edge AI"],
    cat: "ai", hoverBorder: "hover:border-blue-400 hover:shadow-[0_0_35px_rgba(96,165,250,0.35)]", img: assetPath("/akarsh.jpeg"),
    portfolio: "https://www.linkedin.com/in/akarshtiwari52/?isSelfProfile=false"
  },
];

const filters = [
  { key: "all", label: "All" },
  { key: "backend", label: "Backend" },
  { key: "ai", label: "AI/ML" },
  { key: "mobile", label: "Mobile" },
  { key: "design", label: "Design" },
];

const faqs = [
  {
    q: "How much do custom projects or product deployments cost?",
    a: "Our pricing is modular and transparent. For existing products (e.g. SISTec Digital Pass or CHC Koraon OPD Suite), deployment involves a nominal one-time onboarding fee plus an annual support SLA. Custom software is quoted on either a fixed-scope milestone basis or a monthly engineering retainer — whichever works for your procurement process.",
  },
  {
    q: "How fast can we run an on-site pilot at our institution?",
    a: "We typically initiate and configure an on-site pilot within 7–14 days of an initial scoping call. Our engineers come on-site to handle operator training, thermal printer configuration, hardware pairing, and staff orientation — at no extra travel charge within MP and UP.",
  },
  {
    q: "Do you provide on-site engineering and implementation support?",
    a: "Yes. Our core engineering team travels directly to partner campuses, hospitals, and enterprise hubs for infrastructure audits, hardware calibration, and staff handovers, backed by 24/7 dedicated SLA support.",
  },
  {
    q: "How does the software function during network drops or power cuts?",
    a: "All our field applications are engineered offline-first. Mobile tablets and gate scanners maintain encrypted local storage, allowing registrations and pass scans to continue without internet. Records auto-sync in a verified batch once connectivity returns — with conflict resolution logic built in.",
  },
  {
    q: "Who owns our data, and how is DPDP Act compliance handled?",
    a: "Your institution retains 100% legal and technical ownership of all data generated. We sign binding DPDP-compliant data processing agreements, store data in Indian cloud regions with zero cross-tenant access, and run daily encrypted off-site backups. We never monetize, aggregate, or sell institutional data.",
  },
  {
    q: "Can you integrate with biometric devices, ERPs, or thermal printers?",
    a: "Yes. We write custom hardware drivers and middleware for ESC/POS thermal slip printers, QR scanners, biometric fingerprint readers, and legacy SQL database exports. We've already integrated with common clinic hardware used at UP government health centres.",
  },
  {
    q: "Do you undertake engagements across India and globally?",
    a: "Absolutely. Our client deployments operate across multiple states in India. We support hybrid delivery models: on-site deployment and integration for mission-critical hardware, and seamless remote sprints for web, mobile, and AI architectures.",
  },
];

export default function Team({ showOnlyTeam = false }: { showOnlyTeam?: boolean } = {}) {
  const [filter, setFilter] = useState("all");
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <>
      {/* ── TECH STACK ── */}
      {!showOnlyTeam && (
      <section id="techstack" className="relative bg-[#000000] py-20 lg:py-28 overflow-hidden transition-colors duration-300">
        <div className="divider" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-7xl px-4 sm:px-6 mb-12 lg:mb-14 text-center relative z-10"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-400 font-body text-xs font-bold uppercase tracking-widest mb-6 backdrop-blur-md shadow-sm">
            <span className="h-2 w-2 rounded-full bg-purple-400 animate-pulse"></span> Technology
          </div>
          <h2 className="font-heading font-black text-[2.5rem] md:text-[4rem] lg:text-[4.5rem] text-white leading-[1.1] tracking-tight mb-4 drop-shadow-lg">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-400 to-pink-500">engineering toolkit.</span>
          </h2>
          <p className="font-body text-base lg:text-lg text-slate-400 mt-4 mx-auto max-w-xl px-2 drop-shadow-md">Production-battle-tested technologies chosen for reliability, performance, and long-term maintainability.</p>
        </motion.div>

        {/* Marquee rows */}
        <div className="space-y-4 py-2 relative z-10">
          {[techStack.slice(0, 9), techStack.slice(9)].map((row, ri) => (
            <div key={ri} className="flex w-full overflow-hidden py-3" style={{ maskImage: "linear-gradient(90deg, transparent, black 8%, black 92%, transparent)", WebkitMaskImage: "linear-gradient(90deg, transparent, black 8%, black 92%, transparent)" }}>
              <div className={`flex items-center gap-4 pr-4 cursor-default ${ri === 1 ? "animate-marquee-rev" : "animate-marquee"}`}>
                {[...row, ...row, ...row, ...row].map((t, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 rounded-full border border-white/[0.14] bg-gradient-to-b from-[#24242b] to-[#121215] px-5 py-3 whitespace-nowrap shadow-[inset_0_1px_0_0_rgba(255,255,255,0.22),0_8px_20px_-3px_rgba(0,0,0,0.85),0_2px_6px_rgba(0,0,0,0.5)] hover:border-white/30 hover:-translate-y-1 hover:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.32),0_14px_28px_-4px_rgba(0,0,0,0.95)] transition-all cursor-default"
                  >
                    <span className={`h-2 w-2 rounded-full shadow-sm ${getTechColor(t.cat)}`} />
                    <span className="font-body font-semibold text-[0.875rem] text-neutral-100">{t.name}</span>
                    <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded-full bg-black/45 border border-white/[0.08] text-neutral-300 shadow-[inset_0_1px_2px_rgba(0,0,0,0.4)] font-semibold">{t.cat}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
      )}

      {/* ── TEAM ── */}
      <section id="team" className="relative bg-[#000000] py-24 lg:py-36 transition-colors duration-300 overflow-hidden">
        <div className="divider" />

        {/* Deep Cyber grid background */}
        <div className="absolute inset-0 opacity-[0.04] mix-blend-overlay" style={{ backgroundImage: `url(${assetPath("/noise.png")})` }}></div>
        <div className="absolute top-0 inset-x-0 h-[500px] bg-gradient-to-b from-cyan-900/20 to-transparent blur-[100px] pointer-events-none"></div>

        <div className="relative z-10 mx-auto max-w-[90rem] px-4 sm:px-6">
          <div className="mb-16 flex flex-col items-center text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 font-body text-xs font-bold uppercase tracking-widest mb-6 backdrop-blur-md shadow-sm">
              <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse"></span> The Collective
            </div>
            <h2 className="font-heading font-black text-4xl md:text-5xl lg:text-6xl text-white leading-[1.1] tracking-tight mb-6">
              Built by <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f0ff] via-[#38bdf8] to-[#fde047]">engineers</span><br className="hidden md:block" />obsessed with scale.
            </h2>
            <p className="font-body text-lg lg:text-xl text-slate-400 max-w-2xl mx-auto">
              Cross-disciplinary engineers across high-throughput backends, native Android, edge AI/ML, and resilient distributed systems.
            </p>
          </div>

          {/* Interactive Holographic Accordion */}
          <div className="flex flex-col lg:flex-row h-auto lg:h-[500px] w-full gap-6 lg:gap-2">
            {team.map((m) => (
              <div
                key={m.name}
                className="group relative w-full h-[450px] lg:h-auto lg:flex-1 lg:hover:flex-[2.5] transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] overflow-hidden rounded-xl bg-[#0c0c0e] border border-white/10 lg:hover:border-white/30 cursor-pointer shadow-2xl lg:hover:shadow-[0_0_40px_rgba(255,255,255,0.1)]"
              >
                {/* Background Image: Mobile = 100% Original Colors; Desktop = Studio B&W by default, revealing Original Color on hover */}
                <img
                  src={m.img}
                  alt={m.name}
                  className="absolute inset-0 w-full h-full object-cover object-[center_top] filter grayscale-0 contrast-100 brightness-100 lg:grayscale lg:contrast-[1.18] lg:brightness-[0.92] lg:group-hover:grayscale-0 lg:group-hover:contrast-100 lg:group-hover:brightness-100 lg:group-hover:scale-105 transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]"
                />

                {/* Subtle bottom shadow vignette for readable text */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/25 to-transparent opacity-85 lg:group-hover:opacity-65 transition-opacity duration-700 pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/20 to-transparent opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                {/* Content Container */}
                <div className="absolute inset-0 p-6 lg:p-8 flex flex-col justify-end">

                  {/* Default State (Shrunken) - Vertical Text (Desktop only) */}
                  <div className="absolute inset-x-0 bottom-10 hidden lg:flex flex-col items-center justify-end gap-4 transition-all duration-700 group-hover:opacity-0 group-hover:-translate-y-8 pointer-events-none">
                    <h3 className="font-heading font-black text-lg text-white tracking-widest whitespace-nowrap [writing-mode:vertical-rl] rotate-180 drop-shadow-md">
                      {m.name.split(' ')[0]}
                    </h3>
                    <span className="flex h-9 w-9 shrink-0 text-xs rounded-full border border-white/20 bg-black/60 backdrop-blur-md items-center justify-center font-heading font-bold text-white relative z-10 shadow-lg">
                      {m.initials}
                    </span>
                  </div>

                  {/* Expanded State (Hovered on Desktop / Always on Mobile) - Full Info */}
                  <div className="relative z-10 w-full lg:w-[420px] max-w-full opacity-100 lg:opacity-0 translate-y-0 lg:translate-y-10 lg:group-hover:opacity-100 lg:group-hover:translate-y-0 transition-all duration-700 delay-100 ease-[cubic-bezier(0.25,1,0.5,1)]">
                    <div className="flex items-center gap-2 mb-3 lg:mb-4">
                      <span className="h-1.5 w-1.5 rounded-full bg-amber-400 shadow-[0_0_8px_rgba(251,191,36,0.8)] animate-pulse" />
                      <span className="font-mono text-[0.65rem] lg:text-[0.7rem] font-bold uppercase tracking-widest text-amber-300">
                        {m.role}
                      </span>
                    </div>
                    <h3 className="font-heading font-black text-lg lg:text-xl text-white mb-5 drop-shadow-xl">{m.name}</h3>
                    {m.portfolio && (
                      <a href={m.portfolio} target="_blank" rel="noopener noreferrer" className="inline-flex items-center w-max gap-2 px-4 py-1.5 lg:px-5 lg:py-2 rounded-full font-heading font-bold text-[0.65rem] lg:text-xs text-slate-900 bg-white hover:bg-amber-400 hover:text-slate-900 hover:scale-105 transition-all duration-300">
                        View Portfolio
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                      </a>
                    )}
                  </div>

                </div>
              </div>
            ))}
          </div>

          {/* Join the team CTA */}
          <div className="mt-12 flex justify-center">
            <Link href="#contact" className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full font-heading font-bold text-sm text-white bg-white/5 border border-white/10 hover:bg-white/10 hover:border-cyan-400/50 transition-all duration-300 backdrop-blur-md overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative z-10 flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span className="relative z-10">Engineering Roles Open — Join Us</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      {!showOnlyTeam && (
      <section id="faq" className="relative bg-[#000000] py-24 lg:py-36 overflow-hidden">
        <div className="divider" />
        {/* Decorative background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="mx-auto max-w-5xl px-4 sm:px-6 relative z-10">
          <div className="mb-16 lg:mb-20 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 font-body text-xs font-bold uppercase tracking-widest mb-6 backdrop-blur-md shadow-sm">
              <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse"></span> Clarity
            </div>
            <h2 className="font-heading font-black text-4xl md:text-5xl lg:text-6xl text-white leading-[1.1] tracking-tight mb-4 drop-shadow-lg">
              Frequently Asked <span className="grad-text">Questions.</span>
            </h2>
            <p className="font-body text-base lg:text-lg text-slate-400 leading-relaxed px-2 max-w-2xl mx-auto drop-shadow-md">Practical answers about pricing, pilots, compliance, and technical requirements.</p>
          </div>

          <div className="space-y-4 max-w-4xl mx-auto">
            {faqs.map((faq, i) => {
              const isOpen = openFaq === i;
              return (
                <div
                  key={i}
                  className={`relative overflow-hidden rounded-2xl border transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] ${isOpen ? 'bg-[#0a0a0f] border-cyan-500/40 shadow-[0_0_30px_rgba(6,182,212,0.15)]' : 'bg-[#121215]/50 border-white/[0.08] hover:border-white/20'}`}
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-6 px-6 lg:px-8 py-6 text-left cursor-pointer group"
                  >
                    <div className="flex items-center gap-4 lg:gap-6">
                      <span className={`font-mono text-xl lg:text-2xl font-black ${isOpen ? 'text-cyan-400' : 'text-white/20 group-hover:text-white/40'} transition-colors`}>
                        0{i + 1}
                      </span>
                      <span className="font-heading font-bold text-base lg:text-[1.1rem] text-white leading-snug">
                        {faq.q}
                      </span>
                    </div>
                    <div className={`flex shrink-0 items-center justify-center w-10 h-10 rounded-full border transition-all duration-500 ${isOpen ? 'border-cyan-500/50 bg-cyan-500/10 text-cyan-400 rotate-180' : 'border-white/10 bg-white/5 text-white/50 group-hover:border-white/30 group-hover:bg-white/10'}`}>
                      <svg className="w-5 h-5 transition-transform duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M5 15l7-7 7 7" : "M19 9l-7 7-7-7"} />
                      </svg>
                    </div>
                  </button>
                  <div
                    className={`grid transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
                  >
                    <div className="overflow-hidden">
                      <div className="px-6 lg:px-8 pb-8 pt-2 pl-[3.5rem] lg:pl-[4.5rem]">
                        <p className="font-body text-sm lg:text-[0.95rem] text-slate-400 leading-[1.85]">
                          {faq.a}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      )}
    </>
  );
}
