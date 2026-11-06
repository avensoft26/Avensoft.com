"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { Smartphone, Zap, Shield, Database, Cpu, CheckCircle } from "lucide-react";
import { assetPath } from "@/lib/basePath";

interface ScrollShowcaseProps {
  platform: string;
  themeColor: string; // e.g., "#00f0ff"
  gradientFrom: string;
  features: {
    title: string;
    description: string;
    icon: React.ReactNode;
    tag: string;
  }[];
}

export function ScrollShowcase({
  platform,
  themeColor,
  gradientFrom,
  features,
}: ScrollShowcaseProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Transform values for 3D phone rotation & depth
  const rotateX = useTransform(scrollYProgress, [0, 0.5, 1], [15, 0, -10]);
  const rotateY = useTransform(scrollYProgress, [0, 0.5, 1], [-12, 0, 10]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.92, 1, 0.95]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.6, 1, 1, 0.7]);

  return (
    <div ref={containerRef} className="relative py-20 overflow-hidden">
      {/* Background Ambience */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div
          className="h-[500px] w-[500px] rounded-full blur-[140px] opacity-20"
          style={{ backgroundColor: themeColor }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-mono font-medium tracking-wide text-slate-300 mb-4"
          >
            <Smartphone className="h-3.5 w-3.5" style={{ color: themeColor }} />
            <span>Scroll-Driven Interactive Architecture</span>
          </motion.div>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white">
            Engineered at the <span className="grad-text">Hardware Level</span>
          </h2>
          <p className="mt-4 text-base md:text-lg text-slate-400">
            Scroll to inspect the synchronized real-time layers powering our {platform} builds.
          </p>
        </div>

        {/* 3D Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Feature Column */}
          <div className="lg:col-span-4 space-y-4">
            {features.slice(0, 2).map((feat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15 }}
                className="group relative rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl transition-all duration-300 hover:border-white/20 hover:bg-white/[0.06]"
              >
                <div className="flex items-center justify-between mb-3">
                  <div
                    className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5"
                    style={{ color: themeColor }}
                  >
                    {feat.icon}
                  </div>
                  <span className="font-mono text-[10px] uppercase tracking-wider text-slate-400 bg-white/5 px-2 py-0.5 rounded-full border border-white/5">
                    {feat.tag}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                  {feat.title}
                </h3>
                <p className="mt-2 text-sm text-slate-400 leading-relaxed">
                  {feat.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Center: 3D Animated Phone Mockup */}
          <div className="lg:col-span-4 flex justify-center perspective-[1200px]">
            <motion.div
              style={{
                rotateX,
                rotateY,
                scale,
                opacity,
                transformStyle: "preserve-3d",
              }}
              className="relative w-[280px] sm:w-[310px] h-[580px] rounded-[44px] border-4 border-slate-700/80 bg-black shadow-[0_25px_60px_rgba(0,0,0,0.9)] p-3 flex flex-col justify-between"
            >
              {/* Outer Phone Ring Glow */}
              <div
                className="pointer-events-none absolute -inset-1 rounded-[48px] blur-sm opacity-30 transition-opacity"
                style={{ backgroundColor: themeColor }}
              />

              {/* Top Notch / Dynamic Island */}
              <div className="relative z-20 flex justify-center pt-1">
                <div className="h-5 w-28 rounded-full bg-slate-950 border border-white/20 flex items-center justify-between px-3 shadow-md">
                  <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-[9px] font-mono font-bold text-slate-200">
                    {platform}
                  </span>
                  <div className="h-2 w-2 rounded-full bg-slate-700" />
                </div>
              </div>

              {/* Inside Screen Content: LIGHT THEME UI */}
              <div className="relative my-3 flex-1 rounded-[32px] overflow-hidden bg-gradient-to-b from-[#f8fafc] via-[#f1f5f9] to-[#ffffff] border border-slate-200/90 p-3.5 flex flex-col justify-between text-slate-900 shadow-inner">
                {/* Header status bar */}
                <div className="flex items-center justify-between text-[11px] text-slate-700 font-mono font-semibold px-1">
                  <span>09:41</span>
                  <div className="flex items-center gap-1.5">
                    <span className="text-[10px] text-slate-900 font-bold">120 Hz</span>
                    <div className="h-2.5 w-4 rounded-sm border border-slate-800 p-[1px] flex items-center">
                      <div className="h-full w-2.5 rounded-[1px] bg-emerald-600" />
                    </div>
                  </div>
                </div>

                {/* Light Theme Mockup Image Card */}
                <div className="relative rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-sm my-auto">
                  <div className="relative h-28 w-full bg-slate-100">
                    <Image
                      src={assetPath("/hero-mockup.webp")}
                      alt={`${platform} Light Theme App Mockup`}
                      fill
                      className="object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
                    <span className="absolute top-2 left-2 px-2 py-0.5 rounded-full text-[9px] font-mono font-bold bg-white/95 text-cyan-800 shadow-sm border border-slate-200">
                      ⚡ SISTec Pass • Live
                    </span>
                  </div>
                  <div className="p-2.5 pt-1 text-left">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[9px] text-slate-500 font-semibold">ENGINE STATUS</span>
                      <span className="font-mono text-[9px] font-bold text-emerald-700 bg-emerald-50 px-1.5 py-0.2 rounded border border-emerald-200">
                        120 FPS
                      </span>
                    </div>
                    <div className="mt-0.5 font-heading text-xs font-extrabold text-slate-900">
                      Avensoft {platform} Core
                    </div>
                  </div>
                </div>

                {/* Two Light Metric Cards */}
                <div className="grid grid-cols-2 gap-2 text-left mb-2">
                  <div className="rounded-xl border border-slate-200 bg-white p-2 shadow-sm">
                    <div className="text-[9px] font-mono text-slate-500">LATENCY</div>
                    <div className="text-xs font-bold text-emerald-600">&lt; 8.2ms</div>
                  </div>
                  <div className="rounded-xl border border-slate-200 bg-white p-2 shadow-sm">
                    <div className="text-[9px] font-mono text-slate-500">OFFLINE</div>
                    <div className="text-xs font-bold text-cyan-700">Encrypted</div>
                  </div>
                </div>

                {/* Bottom Action Pill */}
                <div className="rounded-full bg-slate-950 py-2 text-center text-xs font-bold text-white shadow-md">
                  Running Native Engine
                </div>
              </div>

              {/* Bottom Home Indicator */}
              <div className="flex justify-center pb-1">
                <div className="h-1 w-24 rounded-full bg-slate-400/80" />
              </div>
            </motion.div>
          </div>

          {/* Right Feature Column */}
          <div className="lg:col-span-4 space-y-4">
            {features.slice(2, 4).map((feat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15 }}
                className="group relative rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl transition-all duration-300 hover:border-white/20 hover:bg-white/[0.06]"
              >
                <div className="flex items-center justify-between mb-3">
                  <div
                    className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5"
                    style={{ color: themeColor }}
                  >
                    {feat.icon}
                  </div>
                  <span className="font-mono text-[10px] uppercase tracking-wider text-slate-400 bg-white/5 px-2 py-0.5 rounded-full border border-white/5">
                    {feat.tag}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                  {feat.title}
                </h3>
                <p className="mt-2 text-sm text-slate-400 leading-relaxed">
                  {feat.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
