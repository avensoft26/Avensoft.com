"use client";

import React, { useRef, useState } from "react";
import Link from "next/link";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useMotionValueEvent,
} from "framer-motion";
import {
  Smartphone,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  RefreshCw,
  Globe2,
  Check,
} from "lucide-react";
import { SpotlightCard } from "@/components/mobile-ui/SpotlightCard";
import { SpringCounter } from "@/components/mobile-ui/SpringCounter";
import { TechTerminal } from "@/components/mobile-ui/TechTerminal";
import {
  Cinematic3DPhone,
  PhoneScreenMode,
} from "@/components/mobile-ui/Cinematic3DPhone";

interface FlutterFeature {
  title: string;
  description: string;
  icon: React.ReactNode;
  tag: string;
}

interface CodeTab {
  label: string;
  filename: string;
  language: string;
  code: string;
}

interface FlutterScrollJourneyProps {
  features: FlutterFeature[];
  codeTabs: CodeTab[];
}

export function FlutterScrollJourney({
  features,
  codeTabs,
}: FlutterScrollJourneyProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const stickyShowcaseRef = useRef<HTMLDivElement>(null);

  // Global Page Scroll Tracking
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 24,
    mass: 0.3,
  });

  // Top Global Progress Bar Transform
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 28 });

  // ── HERO 3D PHONE MOTION VALUES ──
  const heroPhoneRotateX = useTransform(smoothProgress, [0, 0.25], [10, -6]);
  const heroPhoneRotateY = useTransform(smoothProgress, [0, 0.25], [-14, 12]);
  const heroPhoneScale = useTransform(smoothProgress, [0, 0.25], [1, 0.96]);

  // ── STICKY SHOWCASE SCROLL TRACKING ──
  const { scrollYProgress: stickyProgress } = useScroll({
    target: stickyShowcaseRef,
    offset: ["start 80%", "end 20%"],
  });

  const smoothStickyProgress = useSpring(stickyProgress, {
    stiffness: 160,
    damping: 26,
  });

  // Dynamic 3D rotation angles for the pinned phone as user scrolls down the 4 stages
  const stickyPhoneRotateX = useTransform(
    smoothStickyProgress,
    [0, 0.33, 0.66, 1],
    [14, -8, 16, 0]
  );
  const stickyPhoneRotateY = useTransform(
    smoothStickyProgress,
    [0, 0.33, 0.66, 1],
    [-18, 18, -12, 0]
  );
  const stickyPhoneScale = useTransform(
    smoothStickyProgress,
    [0, 0.33, 0.66, 1],
    [0.98, 1.04, 1.01, 1.06]
  );
  const stickyPhoneY = useTransform(
    smoothStickyProgress,
    [0, 0.33, 0.66, 1],
    [0, -15, 10, 0]
  );

  // Active step state (0 = Impeller, 1 = Dual Platform, 2 = Sensors, 3 = Offline)
  const [activeStep, setActiveStep] = useState(0);
  const [activeScreenMode, setActiveScreenMode] = useState<PhoneScreenMode>("impeller");

  // Automatically sync active step and phone screen with scroll position
  useMotionValueEvent(stickyProgress, "change", (latest) => {
    if (latest < 0.28) {
      if (activeStep !== 0) {
        setActiveStep(0);
        setActiveScreenMode("impeller");
      }
    } else if (latest < 0.58) {
      if (activeStep !== 1) {
        setActiveStep(1);
        setActiveScreenMode("dualPlatform");
      }
    } else if (latest < 0.85) {
      if (activeStep !== 2) {
        setActiveStep(2);
        setActiveScreenMode("sensors");
      }
    } else {
      if (activeStep !== 3) {
        setActiveStep(3);
        setActiveScreenMode("offline");
      }
    }
  });

  const showcaseStages: {
    id: PhoneScreenMode;
    number: string;
    tag: string;
    title: string;
    subtitle: string;
    bullets: string[];
    stat: string;
    statLabel: string;
  }[] = [
    {
      id: "impeller",
      number: "01",
      tag: "120 FPS Rendering",
      title: "Impeller Graphics Engine",
      subtitle:
        "Silky smooth hardware-accelerated rendering powered by Flutter's Impeller engine, eliminating shader compilation stutter completely.",
      bullets: [
        "Vulkan on Android & Metal on iOS direct pipelines",
        "Sub-8ms frame times with zero dropped frames",
        "Ahead-of-Time (AOT) shader pre-compilation",
      ],
      stat: "120 FPS",
      statLabel: "Guaranteed Refresh",
    },
    {
      id: "dualPlatform",
      number: "02",
      tag: "Single Codebase",
      title: "iOS & Android Unified Core",
      subtitle:
        "One clean Dart repository shipping pixel-perfect native binaries to both the Apple App Store and Google Play Store simultaneously.",
      bullets: [
        "95%+ shared business logic, state & UI code",
        "Pixel-perfect Cupertino & Material 3 adherence",
        "Cuts ongoing maintenance overhead by half",
      ],
      stat: "2 Platforms",
      statLabel: "1 Single Codebase",
    },
    {
      id: "sensors",
      number: "03",
      tag: "Hardware Telematics",
      title: "MethodChannel Native Bridges",
      subtitle:
        "Zero-overhead native platform channels communicating directly with low-level iOS CoreBluetooth and Android CameraX APIs.",
      bullets: [
        "Low-latency BLE beacon integration for access gates",
        "Custom camera overlays with live QR / barcode detection",
        "Direct hardware sensor telemetry stream processing",
      ],
      stat: "< 0.12ms",
      statLabel: "Bridge Call Latency",
    },
    {
      id: "offline",
      number: "04",
      tag: "Ground Durability",
      title: "Offline-First Hive & SQLite",
      subtitle:
        "Ultra-fast local disk storage with background auto-sync queues ensuring your apps operate with zero downtime in remote areas.",
      bullets: [
        "Encrypted local transaction buffering",
        "Automatic two-way delta sync on reconnect",
        "Conflict-free resolution engineered for telecom drops",
      ],
      stat: "100%",
      statLabel: "Offline Availability",
    },
  ];

  return (
    <div
      ref={containerRef}
      className="relative min-h-screen bg-black text-white selection:bg-[#00f0ff]/30 overflow-x-clip"
    >
      {/* ── TOP SCROLL PROGRESS BAR ── */}
      <motion.div
        style={{ scaleX }}
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#00f0ff] via-[#38bdf8] to-[#fde047] z-50 origin-left"
      />

      {/* Dynamic Ambient Background Glow Mesh */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden z-0">
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.12, 0.2, 0.12],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-40 left-1/2 -translate-x-1/2 h-[700px] w-[1000px] rounded-full bg-[#00f0ff]/10 blur-[170px]"
        />
        <div className="absolute top-[35%] right-[-10%] h-[600px] w-[600px] rounded-full bg-[#38bdf8]/10 blur-[200px]" />
        <div className="absolute top-[65%] left-[-10%] h-[500px] w-[500px] rounded-full bg-[#fde047]/5 blur-[220px]" />
      </div>

      {/* ── 1. CINEMATIC HERO SECTION ── */}
      <section ref={heroRef} className="relative z-10 pt-32 pb-20 px-6">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Content Column */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="lg:col-span-7 text-center lg:text-left space-y-6"
            >
              {/* Badge */}
              <div className="badge inline-flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-[#00f0ff]" />
                <span className="font-bold tracking-wider">Next-Gen Flutter Cross-Platform Engineering</span>
              </div>

              {/* Main Headline (High Visibility, Bold, Matching Reference) */}
              <h1 className="text-4xl sm:text-6xl lg:text-[4.2rem] font-black tracking-tight leading-[1.08] text-white">
                <span className="underline decoration-[#00f0ff] decoration-4 underline-offset-8">
                  Flutter Mobile App Development:
                </span>{" "}
                <span className="text-white block sm:inline mt-2 sm:mt-0">
                  Code Once, Deploy Multiple Applications
                </span>
              </h1>

              {/* High-Visibility Lead Statement (Matching Reference Page) */}
              <p className="text-lg sm:text-2xl font-bold text-slate-100 leading-snug">
                Google developers have denoted India, Asia, as one of the Flutter
                app development hot-spots as the most recent new Flutter apps
                are developed in India.
              </p>

              {/* High-Contrast Body Text */}
              <p className="text-base sm:text-xl text-slate-200 leading-relaxed font-normal">
                We are a proud Flutter Mobile App Development Company in India and
                serve a sophisticated, scalable, and rapid development solution
                for startups to large enterprises.
              </p>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
                Flutter has turned around how cross-platform applications were
                developed and made it happen to achieve a native look, feel, and
                functionality over a multitude of devices swiftly.
              </p>

              <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-medium">
                Our developers have been developing Flutter apps since its
                inception, which makes us among the early adopters. Avensoft has
                helped multiple companies lead their market with the help of our
                experienced Flutter team.
              </p>

              {/* Action Buttons */}
              <div className="pt-3 flex flex-wrap items-center justify-center lg:justify-start gap-4">
                <Link
                  href="/contact"
                  className="btn-primary px-9 py-4 rounded-xl font-extrabold flex items-center gap-2 text-lg shadow-[0_0_30px_rgba(0,240,255,0.4)] hover:scale-105 transition-all"
                >
                  <span>Build My Flutter App</span>
                  <ArrowRight className="h-5 w-5" />
                </Link>
                <Link
                  href="/portfolio"
                  className="btn-ghost px-9 py-4 rounded-xl font-bold flex items-center gap-2 text-lg backdrop-blur-md"
                >
                  <span>View Case Studies</span>
                </Link>
              </div>

              {/* Trust Micro-Pills */}
              <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-3 text-sm text-slate-200 font-mono font-medium">
                <div className="flex items-center gap-2 bg-white/10 border border-white/15 px-3.5 py-1.5 rounded-full">
                  <Check className="h-4 w-4 text-[#00f0ff]" />
                  <span>iOS & Android Native</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 border border-white/15 px-3.5 py-1.5 rounded-full">
                  <Check className="h-4 w-4 text-[#38bdf8]" />
                  <span>App Store Approved</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 border border-white/15 px-3.5 py-1.5 rounded-full">
                  <Check className="h-4 w-4 text-[#fde047]" />
                  <span>100% Code Ownership</span>
                </div>
              </div>
            </motion.div>

            {/* Right Column: Hero 3D Smartphone with live interactive modes */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
              className="lg:col-span-5 flex justify-center relative"
            >
              <Cinematic3DPhone
                customRotateX={heroPhoneRotateX}
                customRotateY={heroPhoneRotateY}
                customScale={heroPhoneScale}
                activeScreen={activeScreenMode}
                onScreenChange={(mode) => setActiveScreenMode(mode)}
                interactiveTilt={true}
                className="max-w-full"
              />
            </motion.div>
          </div>

          {/* Skiper-UI Style Live Metric Counters Strip */}
          <div className="mt-20 max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 rounded-3xl border border-white/10 bg-[#08080c]/90 p-6 backdrop-blur-2xl shadow-2xl">
              <div className="text-center p-3">
                <div className="text-3xl sm:text-5xl font-black text-[#00f0ff]">
                  <SpringCounter value={120} suffix=" FPS" duration={1.5} />
                </div>
                <div className="mt-2 text-sm font-bold font-mono text-slate-300">
                  Impeller Smoothness
                </div>
              </div>
              <div className="text-center p-3 border-l border-white/10">
                <div className="text-3xl sm:text-5xl font-black text-white">
                  <SpringCounter value={45} suffix="%" duration={1.5} />
                </div>
                <div className="mt-2 text-sm font-bold font-mono text-slate-300">
                  Reduced Dev Timeline
                </div>
              </div>
              <div className="text-center p-3 border-l border-white/10">
                <div className="text-3xl sm:text-5xl font-black text-[#38bdf8]">
                  <SpringCounter
                    value={99.98}
                    decimals={2}
                    suffix="%"
                    duration={1.8}
                  />
                </div>
                <div className="mt-2 text-sm font-bold font-mono text-slate-300">
                  Crash-Free Sessions
                </div>
              </div>
              <div className="text-center p-3 border-l border-white/10">
                <div className="text-3xl sm:text-5xl font-black text-[#fde047]">
                  <SpringCounter
                    value={0.24}
                    decimals={2}
                    prefix="< "
                    suffix="s"
                    duration={1.2}
                  />
                </div>
                <div className="mt-2 text-sm font-bold font-mono text-slate-300">
                  Cold Start Time
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. FULLY SCROLLABLE DYNAMIC 3D SMARTPHONE SHOWCASE ── */}
      <section
        ref={stickyShowcaseRef}
        className="relative z-10 py-24 sm:py-32 px-6 border-t border-white/5 bg-gradient-to-b from-transparent via-[#030407] to-transparent"
      >
        <div className="mx-auto max-w-7xl">
          {/* Section Header */}
          <div className="max-w-4xl mb-16 lg:mb-20">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#00f0ff]/30 bg-[#00f0ff]/10 px-4 py-1.5 text-xs font-mono font-bold text-[#00f0ff] mb-4">
              <Smartphone className="h-4 w-4" />
              <span>Hardware-Level Engineering Process</span>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.1]">
              Our approach to build bug-free{" "}
              <span className="underline decoration-[#00f0ff] decoration-4 underline-offset-8">
                Flutter Applications
              </span>
            </h2>
            <p className="mt-4 text-base sm:text-xl text-slate-200 font-medium leading-relaxed max-w-3xl">
              In addition to technical expertise, Avensoft is known for architectural precision and outstanding customer service. Scroll down through our 4 core execution stages below.
            </p>

            {/* Quick Stage Jump Pill Bar */}
            <div className="flex flex-wrap items-center gap-2 pt-6">
              {showcaseStages.map((stage, idx) => (
                <button
                  key={stage.id}
                  onClick={() => {
                    setActiveStep(idx);
                    setActiveScreenMode(stage.id);
                    const el = document.getElementById(`stage-${stage.id}`);
                    if (el) {
                      el.scrollIntoView({ behavior: "smooth", block: "center" });
                    }
                  }}
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl font-mono text-xs sm:text-sm transition-all ${
                    activeStep === idx
                      ? "bg-[#00f0ff] text-slate-950 font-black shadow-[0_0_20px_rgba(0,240,255,0.4)] scale-105"
                      : "bg-white/5 border border-white/10 text-slate-300 font-semibold hover:text-white hover:bg-white/10"
                  }`}
                >
                  <span className="font-bold">{stage.number}</span>
                  <span>{stage.tag}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Two-Column Scrollable Stage Journey */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start relative">
            
            {/* Left Column: All 4 Stages Stacked & Continuously Scrollable */}
            <div className="lg:col-span-7 space-y-10 sm:space-y-12">
              {showcaseStages.map((stage, idx) => {
                const isActive = activeStep === idx;
                return (
                  <motion.div
                    key={stage.id}
                    id={`stage-${stage.id}`}
                    initial={{ opacity: 0, y: 35 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.35 }}
                    onViewportEnter={() => {
                      setActiveStep(idx);
                      setActiveScreenMode(stage.id);
                    }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="scroll-mt-32"
                  >
                    <SpotlightCard
                      spotlightColor={
                        isActive
                          ? "rgba(0, 240, 255, 0.28)"
                          : "rgba(255, 255, 255, 0.08)"
                      }
                      borderColor={
                        isActive
                          ? "rgba(0, 240, 255, 0.65)"
                          : "rgba(255, 255, 255, 0.12)"
                      }
                      className={`p-7 sm:p-9 rounded-3xl transition-all duration-500 ${
                        isActive
                          ? "bg-gradient-to-b from-[#0a0f1d] via-[#05070e] to-black shadow-[0_10px_45px_rgba(0,240,255,0.18)] border-l-4 border-l-[#00f0ff]"
                          : "bg-white/[0.02]"
                      }`}
                    >
                      {/* Card Header & Metrics */}
                      <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
                        <div className="flex items-center gap-2.5">
                          <span
                            className={`font-mono text-xs sm:text-sm font-extrabold px-3 py-1 rounded-full border transition-all ${
                              isActive
                                ? "bg-[#00f0ff] text-slate-950 border-[#00f0ff]"
                                : "bg-white/10 text-slate-300 border-white/20"
                            }`}
                          >
                            STAGE {stage.number}
                          </span>
                          <span className="font-mono text-xs sm:text-sm font-bold text-[#00f0ff]">
                            {stage.tag}
                          </span>
                        </div>
                        <div className="text-right">
                          <div className="font-heading font-black text-2xl sm:text-3xl text-[#00f0ff]">
                            {stage.stat}
                          </div>
                          <div className="text-xs font-mono font-semibold text-slate-300">
                            {stage.statLabel}
                          </div>
                        </div>
                      </div>

                      {/* Card Headline */}
                      <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white mb-3 tracking-tight">
                        {stage.title}
                      </h3>

                      {/* Card Subtitle */}
                      <p className="text-base sm:text-lg text-slate-200 leading-relaxed mb-6 font-normal">
                        {stage.subtitle}
                      </p>

                      {/* Bullet Highlights */}
                      <div className="space-y-3 pt-4 border-t border-white/10">
                        {stage.bullets.map((bullet, bIdx) => (
                          <div
                            key={bIdx}
                            className="flex items-center gap-3 text-sm sm:text-base text-slate-100 font-medium"
                          >
                            <CheckCircle2 className="h-5 w-5 text-[#00f0ff] shrink-0" />
                            <span>{bullet}</span>
                          </div>
                        ))}
                      </div>

                      {/* Mobile In-Card Phone Preview Switcher (Only visible on small screens where sticky phone is hidden) */}
                      <div className="mt-6 pt-4 border-t border-white/10 lg:hidden flex items-center justify-between">
                        <span className="text-xs font-mono text-slate-400">
                          Interactive 3D Preview:
                        </span>
                        <button
                          onClick={() => {
                            setActiveStep(idx);
                            setActiveScreenMode(stage.id);
                          }}
                          className="px-3.5 py-1.5 rounded-lg bg-[#00f0ff]/20 text-[#00f0ff] text-xs font-mono font-bold hover:bg-[#00f0ff]/30 transition-all"
                        >
                          View Mode on 3D Device →
                        </button>
                      </div>
                    </SpotlightCard>
                  </motion.div>
                );
              })}
            </div>

            {/* Right Column: Sticky 3D Smartphone (Floats beside the cards as user scrolls naturally) */}
            <div className="lg:col-span-5 sticky top-28 hidden lg:flex flex-col items-center justify-start self-start space-y-4">
              <div className="relative w-full flex justify-center">
                <Cinematic3DPhone
                  customRotateX={stickyPhoneRotateX}
                  customRotateY={stickyPhoneRotateY}
                  customScale={stickyPhoneScale}
                  activeScreen={activeScreenMode}
                  onScreenChange={(mode) => {
                    setActiveScreenMode(mode);
                    const matchedIdx = showcaseStages.findIndex((s) => s.id === mode);
                    if (matchedIdx !== -1) setActiveStep(matchedIdx);
                  }}
                  interactiveTilt={true}
                  className="max-w-full"
                />
              </div>

              {/* Live Status Pill beneath Phone */}
              <div className="flex items-center gap-2.5 px-4 py-2 rounded-2xl bg-black/80 border border-white/15 backdrop-blur-xl shadow-xl">
                <span className="h-2.5 w-2.5 rounded-full bg-[#00f0ff] animate-ping" />
                <span className="font-mono text-xs font-bold text-slate-200">
                  STAGE {showcaseStages[activeStep].number} SYNCED •{" "}
                  <span className="text-[#00f0ff] uppercase">
                    {showcaseStages[activeStep].tag}
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. INTERACTIVE PRODUCTION CODE & CLEAN ARCHITECTURE ── */}
      <section className="relative z-10 py-24 px-6 border-t border-white/5">
        <div className="mx-auto max-w-7xl">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <span className="font-mono text-sm uppercase tracking-widest text-[#00f0ff] font-bold">
              Deep Technical Specifications
            </span>
            <h2 className="text-4xl sm:text-6xl font-black text-white mt-3 tracking-tight">
              Clean Architecture &{" "}
              <span className="underline decoration-[#00f0ff] decoration-4 underline-offset-8">
                Native Channels
              </span>
            </h2>
            <p className="mt-4 text-base sm:text-xl text-slate-200 font-medium leading-relaxed">
              Explore the exact architecture patterns, BLoC unidirectional state,
              and native platform bridges we engineer for production scale.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7">
              <TechTerminal
                title="Flutter Mobile Architecture"
                accentColor="#00f0ff"
                tabs={codeTabs}
              />
            </div>

            <div className="lg:col-span-5 space-y-5">
              <SpotlightCard
                spotlightColor="rgba(0, 240, 255, 0.22)"
                borderColor="rgba(0, 240, 255, 0.55)"
                className="p-7"
              >
                <div className="flex items-center gap-3.5 mb-3">
                  <div className="p-2.5 rounded-xl bg-[#00f0ff]/15 text-[#00f0ff]">
                    <RefreshCw className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black text-white">
                    State Management with BLoC
                  </h3>
                </div>
                <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-normal">
                  Predictable, unidirectional data flow with 100% test coverage.
                  Zero memory leaks, strict event-driven state transitions, and
                  seamless debugging across both platform runtimes.
                </p>
              </SpotlightCard>

              <SpotlightCard
                spotlightColor="rgba(56, 189, 248, 0.22)"
                borderColor="rgba(56, 189, 248, 0.55)"
                className="p-7"
              >
                <div className="flex items-center gap-3.5 mb-3">
                  <div className="p-2.5 rounded-xl bg-[#38bdf8]/15 text-[#38bdf8]">
                    <Globe2 className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black text-white">
                    Continuous Delivery & App Store Auto-Deploy
                  </h3>
                </div>
                <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-normal">
                  Automated Fastlane pipelines pushing signed test builds to
                  Apple TestFlight and Google Play Internal Testing on every Git
                  merge with automated screenshot tests.
                </p>
              </SpotlightCard>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. VENGEANCE-UI BENTO GRID ── */}
      <section className="relative z-10 py-24 px-6 border-t border-white/5 bg-gradient-to-b from-transparent to-black">
        <div className="mx-auto max-w-7xl">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <span className="font-mono text-sm uppercase tracking-widest text-[#00f0ff] font-bold">
              Why Partner With Avensoft
            </span>
            <h2 className="mt-3 text-4xl sm:text-6xl font-black text-white tracking-tight">
              End-to-End{" "}
              <span className="underline decoration-[#00f0ff] decoration-4 underline-offset-8">
                Mobile Excellence
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <SpotlightCard
              spotlightColor="rgba(0, 240, 255, 0.25)"
              borderColor="rgba(0, 240, 255, 0.55)"
              className="p-8"
            >
              <div className="font-mono text-3xl font-black text-[#00f0ff] mb-3">
                01
              </div>
              <h3 className="text-2xl font-black text-white mb-3">
                Custom Micro-Interactions
              </h3>
              <p className="text-base sm:text-lg text-slate-200 leading-relaxed">
                Physics-based gestures, haptic feedback integration, and fluid
                transitions that make your app feel distinctly alive, tactile,
                and premium on both iOS and Android.
              </p>
            </SpotlightCard>

            <SpotlightCard
              spotlightColor="rgba(56, 189, 248, 0.25)"
              borderColor="rgba(56, 189, 248, 0.55)"
              className="p-8"
            >
              <div className="font-mono text-3xl font-black text-[#38bdf8] mb-3">
                02
              </div>
              <h3 className="text-2xl font-black text-white mb-3">
                Hardware & Sensor Telematics
              </h3>
              <p className="text-base sm:text-lg text-slate-200 leading-relaxed">
                Direct integration with BLE beacons, accelerometers, gyroscopes,
                thermal ESC/POS receipt printers, and biometric barcode
                scanners.
              </p>
            </SpotlightCard>

            <SpotlightCard
              spotlightColor="rgba(253, 224, 71, 0.2)"
              borderColor="rgba(253, 224, 71, 0.5)"
              className="p-8"
            >
              <div className="font-mono text-3xl font-black text-[#fde047] mb-3">
                03
              </div>
              <h3 className="text-2xl font-black text-white mb-3">
                Enterprise Offline Buffer
              </h3>
              <p className="text-base sm:text-lg text-slate-200 leading-relaxed">
                Transactions and user events persist locally with tamper-proof
                encryption. Two-way diff sync triggers automatically upon network
                recovery.
              </p>
            </SpotlightCard>
          </div>
        </div>
      </section>

      {/* ── 5. FINAL CALL TO ACTION LAUNCHPAD ── */}
      <section className="relative z-10 py-24 px-6 text-center overflow-hidden">
        <div className="mx-auto max-w-4xl relative z-10 rounded-3xl border border-[#00f0ff]/30 bg-gradient-to-b from-[#00f0ff]/10 via-black to-black p-12 md:p-16 backdrop-blur-2xl shadow-[0_20px_60px_rgba(0,0,0,0.8)]">
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
            Ready to Deploy Your Flutter Application?
          </h2>
          <p className="mt-5 text-base sm:text-xl text-slate-200 max-w-2xl mx-auto leading-relaxed font-medium">
            Book a technical consultation with our lead mobile architects. We
            will review your product requirements and outline your milestone
            timeline.
          </p>
          <div className="mt-9 flex justify-center gap-4">
            <Link
              href="/contact"
              className="btn-primary px-10 py-5 rounded-2xl text-lg font-black shadow-[0_0_35px_rgba(0,240,255,0.45)] hover:scale-105 transition-all"
            >
              Schedule Technical Consultation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
