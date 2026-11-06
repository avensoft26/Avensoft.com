"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { assetPath } from "@/lib/basePath";

const capabilities = [
  {
    title: "Native Android Engineering",
    desc: "Crafted with Kotlin, Jetpack Compose, and modern Android Architecture Components (MVI/MVVM). Engineered for buttery 120fps rendering, minimal APK footprint, and battery efficiency.",
    tech: ["Kotlin", "Jetpack Compose", "Coroutines", "Ktor / Retrofit"],
    accent: "text-cyan-600 dark:text-cyan-400",
    borderHover: "hover:border-cyan-400 hover:shadow-cyan-500/20",
    bg: "bg-cyan-50 dark:bg-cyan-950/20",
    icon: "M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z",
  },
  {
    title: "iOS Systems & Swift",
    desc: "Pixel-perfect native iOS applications using SwiftUI and Combine. Seamless Apple ecosystem integration with WidgetKit, HealthKit, and strict App Store guideline compliance.",
    tech: ["Swift", "SwiftUI", "Combine", "CoreData / SwiftData"],
    accent: "text-primary-600 dark:text-primary-400",
    borderHover: "hover:border-primary-400 hover:shadow-primary-500/20",
    bg: "bg-primary-50 dark:bg-primary-950/20",
    icon: "M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2z",
  },
  {
    title: "Offline-First Local Sync",
    desc: "Built for tough ground conditions. Local embedded database (Room / SQLite) buffers transactions seamlessly, and two-way diff sync activates whenever network connectivity is detected.",
    tech: ["Room DB", "WorkManager", "SQLite", "Exponential Backoff Sync"],
    accent: "text-emerald-600 dark:text-emerald-400",
    borderHover: "hover:border-emerald-400 hover:shadow-emerald-500/20",
    bg: "bg-emerald-50 dark:bg-emerald-950/20",
    icon: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15",
  },
  {
    title: "IoT & Hardware Sensor Telematics",
    desc: "Direct integration with BLE beacons, accelerometers, gyroscopes, thermal ESC/POS printers, and biometric barcode scanners. Ultra-low latency sensor telemetry processing.",
    tech: ["Bluetooth LE", "CameraX API", "SensorManager", "USB OTG Serial"],
    accent: "text-amber-600 dark:text-amber-400",
    borderHover: "hover:border-amber-400 hover:shadow-amber-500/20",
    bg: "bg-amber-50 dark:bg-amber-950/20",
    icon: "M13 10V3L4 14h7v7l9-11h-7z",
  },
  {
    title: "Cross-Platform Frameworks",
    desc: "Single codebase, dual native performance. Flutter and React Native architectures with native bridges where hardware speed is non-negotiable, reducing time-to-market by 40%.",
    tech: ["Flutter", "Dart", "React Native", "Native Bridges"],
    accent: "text-fuchsia-600 dark:text-fuchsia-400",
    borderHover: "hover:border-fuchsia-400 hover:shadow-fuchsia-500/20",
    bg: "bg-fuchsia-50 dark:bg-fuchsia-950/20",
    icon: "M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z",
  },
  {
    title: "Security, MDM & Enterprise Kiosk",
    desc: "Tamper-proof key storage via Android Keystore, SSL certificate pinning, biometric authentication, and locked-down kiosk configurations for dedicated institutional tablets.",
    tech: ["Android Keystore", "SSL Pinning", "BiometricPrompt", "Device Owner MDM"],
    accent: "text-sky-600 dark:text-sky-400",
    borderHover: "hover:border-sky-400 hover:shadow-sky-500/20",
    bg: "bg-sky-50 dark:bg-sky-950/20",
    icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
  },
];

export default function MobileServicesPage() {
  return (
    <div className="pt-24 min-h-screen bg-slate-50 dark:bg-[#020617] transition-colors duration-300">
      {/* ── CINEMATIC DIVISION HERO ── */}
      <section className="relative overflow-hidden py-16 lg:py-24 border-b border-slate-200 dark:border-white/10">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-40 right-10 w-96 h-96 rounded-full bg-cyan-500/15 dark:bg-cyan-500/10 blur-[120px]" />
          <div className="absolute top-40 -left-20 w-80 h-80 rounded-full bg-primary-500/15 dark:bg-primary-500/10 blur-[100px]" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <div className="max-w-3xl">
            <div className="badge mb-6 !bg-cyan-500/10 !text-cyan-300 !border-cyan-500/30">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              Division 01 • Mobile Engineering
            </div>

            <h1 className="font-heading font-extrabold text-[clamp(2.5rem,5.5vw,4.5rem)] tracking-tight leading-[1.08] text-slate-900 dark:text-white">
              Native Mobile Systems. <br />
              <span className="grad-text">Engineered for Ground Reality.</span>
            </h1>

            <p className="font-body text-lg text-slate-600 dark:text-slate-400 leading-relaxed mt-6 max-w-2xl">
              We engineer high-throughput Android and iOS software that refuses to crash in the field — from hospital OPD tablets with 2G fallback to on-device sensor telematics running zero-latency computer vision.
            </p>

            <div className="flex flex-wrap items-center gap-4 mt-8">
              <Link href="/contact" className="btn-primary">
                <svg className="h-4 w-4 fill-slate-950" viewBox="0 0 24 24"><polygon points="6 4 20 12 6 20 6 4" /></svg>
                <span>Discuss Your Mobile Project</span>
              </Link>
              <Link href="/portfolio" className="btn-ghost flex items-center gap-2">
                <svg className="h-4 w-4 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                <span>View Mobile Case Studies</span>
              </Link>
            </div>

            {/* Quick Metrics */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-12 pt-8 border-t border-slate-200 dark:border-white/10">
              {[
                { val: "120 FPS", label: "Smooth Compose UI" },
                { val: "< 40ms", label: "Local DB Read/Write" },
                { val: "Offline-First", label: "2G & Telecom Resilient" },
                { val: "Zero Hardware", label: "Sensor Telematics" },
              ].map((m) => (
                <div key={m.label}>
                  <div className="font-heading font-black text-2xl grad-text">{m.val}</div>
                  <div className="font-body text-xs text-slate-500 dark:text-slate-400 mt-0.5">{m.label}</div>
                </div>
              ))}
            </div>

            {/* Specialized Framework Pages Selector */}
            <div className="mt-12 pt-8 border-t border-slate-200 dark:border-white/10">
              <span className="font-mono text-xs uppercase tracking-widest text-cyan-500 font-semibold">
                Explore Dedicated Framework Platforms
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mt-4">
                {[
                  {
                    name: "Flutter Engineering",
                    slug: "/services/mobile/flutter",
                    tag: "120 FPS Impeller",
                    color: "border-cyan-500/40 hover:border-cyan-400 hover:shadow-[0_0_20px_rgba(0,240,255,0.25)]",
                    badge: "bg-cyan-500/10 text-cyan-400",
                  },
                  {
                    name: "Native Android",
                    slug: "/services/mobile/android",
                    tag: "Kotlin & Compose",
                    color: "border-emerald-500/40 hover:border-emerald-400 hover:shadow-[0_0_20px_rgba(16,185,129,0.25)]",
                    badge: "bg-emerald-500/10 text-emerald-400",
                  },
                  {
                    name: "Native iOS",
                    slug: "/services/mobile/ios",
                    tag: "SwiftUI & Apple HIG",
                    color: "border-blue-500/40 hover:border-blue-400 hover:shadow-[0_0_20px_rgba(59,130,246,0.25)]",
                    badge: "bg-blue-500/10 text-blue-400",
                  },
                  {
                    name: "React Native",
                    slug: "/services/mobile/react-native",
                    tag: "TurboModules & C++",
                    color: "border-fuchsia-500/40 hover:border-fuchsia-400 hover:shadow-[0_0_20px_rgba(217,70,239,0.25)]",
                    badge: "bg-fuchsia-500/10 text-fuchsia-400",
                  },
                ].map((item) => (
                  <Link
                    key={item.slug}
                    href={item.slug}
                    className={`group rounded-xl border bg-white/60 dark:bg-black/40 p-4 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 ${item.color}`}
                  >
                    <div className="flex items-center justify-between">
                      <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full ${item.badge}`}>
                        {item.tag}
                      </span>
                      <svg className="h-4 w-4 text-slate-400 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </div>
                    <div className="mt-2 font-heading font-bold text-sm text-slate-900 dark:text-white group-hover:text-cyan-400 transition-colors">
                      {item.name}
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CORE CAPABILITIES GRID ── */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 max-w-2xl">
            <span className="font-body text-xs font-bold tracking-widest uppercase text-cyan-600 dark:text-cyan-400">Technical Depth</span>
            <h2 className="section-title mt-2">
              Full-Lifecycle Mobile <span className="grad-text">Specializations.</span>
            </h2>
            <p className="font-body text-slate-600 dark:text-slate-400 mt-4 leading-relaxed">
              Every card below represents production-tested engineering stacks used across live healthcare, campus, and automotive deployments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((cap, i) => (
              <motion.div
                key={cap.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`glass p-8 flex flex-col justify-between transition-all duration-300 ${cap.borderHover} hover:-translate-y-2 hover:shadow-xl dark:shadow-none group ${cap.bg}`}
              >
                <div>
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 bg-white dark:bg-white/10 border border-slate-200 dark:border-white/10 ${cap.accent} shadow-sm group-hover:scale-110 transition-transform`}>
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d={cap.icon} />
                    </svg>
                  </div>
                  <h3 className="font-heading font-bold text-xl text-slate-900 dark:text-white mb-3">
                    {cap.title}
                  </h3>
                  <p className="font-body text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                    {cap.desc}
                  </p>
                </div>

                <div className="pt-5 border-t border-slate-200 dark:border-white/10">
                  <div className="flex flex-wrap gap-2">
                    {cap.tech.map((t) => (
                      <span key={t} className="px-2.5 py-1 rounded-md text-[11px] font-semibold bg-white/80 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FLAGSHIP MOBILE CASE STUDY SPOTLIGHT ── */}
      <section className="py-20 bg-slate-100/70 dark:bg-[#04091a] border-y border-slate-200 dark:border-white/10">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <div className="badge !bg-emerald-100 !text-emerald-800 dark:!bg-emerald-950/40 dark:!text-emerald-300">
                Live Deployment • Public Health
              </div>
              <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-slate-900 dark:text-white leading-tight">
                CHC Koraon OPD System: <br />
                <span className="grad-text">Mobile Architecture for Rural Healthcare</span>
              </h2>
              <p className="font-body text-slate-600 dark:text-slate-400 leading-relaxed">
                In high-density Community Health Centres where internet drops constantly and queues stretch over 200 patients daily, we deployed a custom Android tablet ecosystem pairing Bluetooth thermal receipt printers with zero paper loss.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10">
                  <div className="font-heading font-bold text-2xl text-emerald-600 dark:text-emerald-400">~40%</div>
                  <div className="font-body text-xs text-slate-500 mt-1">Faster OPD queue clearance</div>
                </div>
                <div className="p-4 rounded-xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10">
                  <div className="font-heading font-bold text-2xl text-cyan-600 dark:text-cyan-400">2G / 3G</div>
                  <div className="font-body text-xs text-slate-500 mt-1">Full offline functionality</div>
                </div>
              </div>

              <div className="pt-4">
                <Link href="/portfolio" className="btn-primary">
                  Read Case Study Breakdown →
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6 flex justify-center">
              <div className="relative p-6 rounded-3xl bg-gradient-to-br from-cyan-500/10 via-primary-500/10 to-transparent border border-slate-200 dark:border-white/10 shadow-2xl">
                <Image src={assetPath("/app-mockup.jpg")} alt="Healthcare App Mockup" width={320} height={450} className="object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.4)] hover:scale-105 transition-transform duration-500" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CALL TO ACTION ── */}
      <section className="py-24 text-center">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="font-heading font-extrabold text-3xl sm:text-5xl text-slate-900 dark:text-white mb-6">
            Ready to engineer your mobile platform?
          </h2>
          <p className="font-body text-slate-600 dark:text-slate-400 text-lg max-w-2xl mx-auto mb-8">
            Tell us about your target users, device constraints, and scale goals. We’ll outline a complete technical architecture and milestone plan.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="btn-primary">Schedule Technical Consultation</Link>
            <Link href="/services" className="btn-ghost">Explore All Divisions</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
