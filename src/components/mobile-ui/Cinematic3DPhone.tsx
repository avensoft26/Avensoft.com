"use client";

import React, { useRef, useState, useEffect, MouseEvent } from "react";
import Image from "next/image";
import { motion, AnimatePresence, MotionValue } from "framer-motion";
import {
  Zap,
  ShieldCheck,
  Wifi,
  Activity,
  Cpu,
  Layers,
  CheckCircle2,
  Apple,
  RefreshCw,
  Sliders,
  Scan,
  Sparkles,
} from "lucide-react";
import { assetPath } from "@/lib/basePath";

export type PhoneScreenMode = "impeller" | "dualPlatform" | "sensors" | "offline";

interface Cinematic3DPhoneProps {
  customRotateX?: MotionValue<number>;
  customRotateY?: MotionValue<number>;
  customScale?: MotionValue<number>;
  customY?: MotionValue<number>;
  interactiveTilt?: boolean;
  activeScreen?: PhoneScreenMode;
  onScreenChange?: (screen: PhoneScreenMode) => void;
  className?: string;
}

export function Cinematic3DPhone({
  customRotateX,
  customRotateY,
  customScale,
  customY,
  interactiveTilt = true,
  activeScreen = "impeller",
  onScreenChange,
  className = "",
}: Cinematic3DPhoneProps) {
  const phoneRef = useRef<HTMLDivElement>(null);
  const [mouseTilt, setMouseTilt] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [islandExpanded, setIslandExpanded] = useState(false);
  const [activePlatformPreview, setActivePlatformPreview] = useState<"ios" | "android">("ios");
  const [internalScreen, setInternalScreen] = useState<PhoneScreenMode>(activeScreen);

  // Sync internal state if prop changes
  useEffect(() => {
    setInternalScreen(activeScreen);
  }, [activeScreen]);

  const switchScreen = (mode: PhoneScreenMode) => {
    setInternalScreen(mode);
    if (onScreenChange) onScreenChange(mode);
  };

  // Real-time fluctuating FPS ticker for dynamic realism
  const [liveFps, setLiveFps] = useState("120.0");
  const [renderLatency, setRenderLatency] = useState("7.8");

  useEffect(() => {
    const interval = setInterval(() => {
      const randomFps = (119.5 + Math.random() * 0.7).toFixed(1);
      const randomLatency = (7.4 + Math.random() * 0.6).toFixed(1);
      setLiveFps(randomFps);
      setRenderLatency(randomLatency);
    }, 800);
    return () => clearInterval(interval);
  }, []);

  // Mouse hover micro-tilt
  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!interactiveTilt || !phoneRef.current) return;
    const rect = phoneRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) / (rect.width / 2);
    const y = (e.clientY - rect.top - rect.height / 2) / (rect.height / 2);
    setMouseTilt({ x: x * 7, y: -y * 7 });
  };

  const handleMouseLeave = () => {
    setMouseTilt({ x: 0, y: 0 });
    setIsHovered(false);
  };

  return (
    <div
      ref={phoneRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      className={`relative select-none perspective-[1400px] flex items-center justify-center ${className}`}
    >
      {/* Outer Atmospheric Aura Glow */}
      <div className="pointer-events-none absolute -inset-10 -z-10 rounded-[80px] bg-gradient-to-tr from-[#00f0ff]/25 via-[#38bdf8]/15 to-[#fde047]/10 blur-[80px] opacity-75 transition-opacity duration-700" />

      {/* Floating 3D Badge Left (Impeller Engine) */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        style={{
          transform: isHovered
            ? `translate3d(-20px, ${mouseTilt.y * 1.5}px, 60px)`
            : "translate3d(0, 0, 40px)",
        }}
        className="hidden md:flex absolute -left-12 top-24 z-30 items-center gap-2 rounded-2xl border border-white/20 bg-black/90 px-3.5 py-2.5 backdrop-blur-xl shadow-[0_15px_35px_rgba(0,0,0,0.8)] transition-transform duration-300"
      >
        <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#00f0ff]/15 text-[#00f0ff]">
          <Zap className="h-4 w-4" />
        </span>
        <div>
          <div className="font-mono text-[9px] text-slate-400 uppercase tracking-wider">GRAPHICS ENGINE</div>
          <div className="font-heading text-xs font-bold text-white flex items-center gap-1.5">
            <span>{liveFps} FPS</span>
            <span className="text-[10px] text-[#00f0ff] font-mono px-1 rounded bg-[#00f0ff]/10">Impeller</span>
          </div>
        </div>
      </motion.div>

      {/* Floating 3D Badge Right (Storage Sync) */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        style={{
          transform: isHovered
            ? `translate3d(20px, ${-mouseTilt.y * 1.5}px, 60px)`
            : "translate3d(0, 0, 40px)",
        }}
        className="hidden md:flex absolute -right-12 bottom-28 z-30 items-center gap-2 rounded-2xl border border-white/20 bg-black/90 px-3.5 py-2.5 backdrop-blur-xl shadow-[0_15px_35px_rgba(0,0,0,0.8)] transition-transform duration-300"
      >
        <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-emerald-500/15 text-emerald-400">
          <ShieldCheck className="h-4 w-4" />
        </span>
        <div>
          <div className="font-mono text-[9px] text-slate-400 uppercase tracking-wider">OFFLINE BUFFER</div>
          <div className="font-heading text-xs font-bold text-white flex items-center gap-1.5">
            <span>Room / SQLite</span>
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
          </div>
        </div>
      </motion.div>

      {/* Realistic Physical Phone Chassis (Dark Titanium Bevels) */}
      <motion.div
        style={{
          rotateX: customRotateX ?? mouseTilt.y,
          rotateY: customRotateY ?? mouseTilt.x,
          scale: customScale ?? 1,
          y: customY ?? 0,
          transformStyle: "preserve-3d",
        }}
        transition={{ type: "spring", stiffness: 300, damping: 28 }}
        className="relative w-[300px] sm:w-[325px] md:w-[340px] h-[610px] sm:h-[640px] rounded-[52px] bg-gradient-to-b from-[#3a3f4e] via-[#1c1f28] to-[#0c0d12] p-[3px] shadow-[0_35px_120px_rgba(0,0,0,0.95),0_10px_35px_rgba(0,240,255,0.2)] transition-shadow duration-500"
      >
        {/* Hardware Physical Buttons */}
        <div className="absolute -left-[5px] top-28 h-10 w-[3px] rounded-l-sm bg-slate-400/90 shadow-sm" />
        <div className="absolute -left-[5px] top-42 h-10 w-[3px] rounded-l-sm bg-slate-400/90 shadow-sm" />
        <div className="absolute -right-[5px] top-32 h-14 w-[3px] rounded-r-sm bg-slate-400/90 shadow-sm" />

        {/* Outer Titanium Bevel Border */}
        <div className="relative h-full w-full rounded-[49px] bg-[#0c0d12] p-[10px] shadow-[inset_0_1.5px_2px_rgba(255,255,255,0.45),inset_0_-1.5px_2px_rgba(0,0,0,0.9)] overflow-hidden">
          
          {/* Glass Specular Reflection Highlight */}
          <div className="pointer-events-none absolute inset-0 z-30 rounded-[40px] bg-gradient-to-tr from-transparent via-white/[0.12] to-transparent opacity-90" />

          {/* ── LIGHT THEME PHONE SCREEN CONTAINER ── */}
          <div className="relative h-full w-full rounded-[40px] bg-gradient-to-b from-[#f8fafc] via-[#f1f5f9] to-[#ffffff] overflow-hidden flex flex-col justify-between border border-slate-200/90 p-3.5 pt-2.5 text-slate-900 shadow-inner">
            
            {/* Top Status Bar & Clickable Dynamic Island */}
            <div className="relative z-30">
              <div className="flex items-center justify-between text-[11px] font-mono text-slate-700 font-semibold px-2 pt-0.5 mb-1.5">
                <span>09:41</span>
                <div className="flex items-center gap-1.5">
                  <span className="text-[10px] font-bold text-slate-800">5G</span>
                  <div className="h-2.5 w-4 rounded-[3px] border border-slate-800 p-[1px] flex items-center">
                    <div className="h-full w-2.5 rounded-[1px] bg-emerald-600" />
                  </div>
                </div>
              </div>

              {/* Dynamic Island: Sleek Apple-style pill on Light Screen */}
              <motion.div
                layout
                onClick={() => setIslandExpanded(!islandExpanded)}
                className="mx-auto cursor-pointer flex flex-col items-center justify-center rounded-full bg-slate-950 text-white px-3 py-1 shadow-md transition-all duration-300 hover:bg-black"
              >
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-[#00f0ff] animate-pulse" />
                  <span className="font-mono text-[9px] font-bold uppercase tracking-wider text-slate-100">
                    Flutter • {internalScreen.toUpperCase()}
                  </span>
                  <div className="h-2 w-2 rounded-full bg-slate-700" />
                </div>

                <AnimatePresence>
                  {islandExpanded && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="pt-2 text-[10px] font-mono text-slate-300 border-t border-white/15 mt-1.5 w-full text-center"
                    >
                      <div className="flex justify-around text-[9px] text-[#00f0ff]">
                        <span>FPS: {liveFps}</span>
                        <span>LATENCY: {renderLatency}ms</span>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </div>

            {/* Screen Mode Tabs Selector (Light Theme Styled) */}
            <div className="mt-2.5 flex items-center justify-between gap-1 rounded-xl bg-slate-200/80 p-1 border border-slate-300/60 shadow-sm">
              {[
                { id: "impeller", label: "Impeller", icon: <Zap className="h-3 w-3" /> },
                { id: "dualPlatform", label: "Dual OS", icon: <Layers className="h-3 w-3" /> },
                { id: "sensors", label: "Sensors", icon: <Cpu className="h-3 w-3" /> },
                { id: "offline", label: "Offline", icon: <ShieldCheck className="h-3 w-3" /> },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => switchScreen(tab.id as PhoneScreenMode)}
                  className={`flex-1 flex items-center justify-center gap-1 py-1 rounded-lg text-[9px] font-mono transition-all ${
                    internalScreen === tab.id
                      ? "bg-slate-950 text-white font-bold shadow-md"
                      : "text-slate-600 hover:text-slate-950"
                  }`}
                >
                  {tab.icon}
                  <span className="hidden sm:inline">{tab.label}</span>
                </button>
              ))}
            </div>

            {/* ── DYNAMIC LIGHT THEME VIEWPORT CONTENT ── */}
            <div className="my-auto space-y-2.5 pt-1 flex-1 flex flex-col justify-center">
              <AnimatePresence mode="wait">
                
                {/* 1. IMPELLER 120 FPS LIGHT DASHBOARD SCREEN */}
                {internalScreen === "impeller" && (
                  <motion.div
                    key="screen-impeller"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.25 }}
                    className="space-y-2.5"
                  >
                    {/* Clean White Card */}
                    <div className="rounded-2xl border border-slate-200/90 bg-white p-3.5 shadow-[0_4px_20px_rgba(0,0,0,0.06)]">
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-[10px] text-slate-500 font-semibold">IMPELLER PIPELINE</span>
                        <span className="font-mono text-[10px] font-bold text-cyan-700 bg-cyan-50 px-2 py-0.5 rounded-full border border-cyan-200">
                          {liveFps} FPS
                        </span>
                      </div>
                      <div className="mt-1 font-heading text-sm font-extrabold text-slate-900">
                        Hardware Velocity Rendering
                      </div>
                      <p className="mt-0.5 text-[11px] text-slate-600 leading-tight">
                        Vulkan & Metal direct GPU pass with AOT pre-warmed shaders.
                      </p>

                      {/* Vibrant Cyan Gradient Frame-Rate Graph */}
                      <div className="mt-2.5 flex items-end gap-1 h-10 px-1.5 pt-1.5 bg-slate-50 rounded-lg border border-slate-100">
                        {[45, 75, 88, 98, 92, 100, 95, 99, 100, 94, 98, 100, 96, 100].map((h, i) => (
                          <div
                            key={i}
                            className="flex-1 rounded-sm bg-gradient-to-t from-cyan-500 to-sky-400"
                            style={{ height: `${h}%` }}
                          />
                        ))}
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      <div className="rounded-xl border border-slate-200/90 bg-white p-2.5 shadow-sm">
                        <div className="text-[9px] font-mono text-slate-500 uppercase">FRAME LATENCY</div>
                        <div className="font-mono text-xs font-extrabold text-emerald-600 mt-0.5">
                          {renderLatency} ms
                        </div>
                      </div>
                      <div className="rounded-xl border border-slate-200/90 bg-white p-2.5 shadow-sm">
                        <div className="text-[9px] font-mono text-slate-500 uppercase">SHADER JANK</div>
                        <div className="font-mono text-xs font-extrabold text-cyan-600 mt-0.5">
                          0.0% Skipped
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* 2. DUAL PLATFORM (CAMPUS / APP LIGHT THEME MOCKUP) */}
                {internalScreen === "dualPlatform" && (
                  <motion.div
                    key="screen-dual"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.25 }}
                    className="space-y-2"
                  >
                    {/* Target Selector */}
                    <div className="flex rounded-xl bg-slate-200/90 p-1 border border-slate-300/80">
                      <button
                        onClick={() => setActivePlatformPreview("ios")}
                        className={`flex-1 py-1 rounded-lg font-mono text-[10px] flex items-center justify-center gap-1.5 transition-all ${
                          activePlatformPreview === "ios"
                            ? "bg-white text-slate-950 font-bold shadow-sm"
                            : "text-slate-600"
                        }`}
                      >
                        <Apple className="h-3 w-3" />
                        <span>iOS Target</span>
                      </button>
                      <button
                        onClick={() => setActivePlatformPreview("android")}
                        className={`flex-1 py-1 rounded-lg font-mono text-[10px] flex items-center justify-center gap-1.5 transition-all ${
                          activePlatformPreview === "android"
                            ? "bg-white text-cyan-700 font-bold shadow-sm"
                            : "text-slate-600"
                        }`}
                      >
                        <span>🤖 Android Target</span>
                      </button>
                    </div>

                    {/* Light Theme Mockup Image Card */}
                    <div className="relative rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-md">
                      <div className="relative h-32 w-full bg-slate-100">
                        <Image
                          src={assetPath("/hero-mockup.webp")}
                          alt="SISTec Digital Pass Light App Mockup"
                          fill
                          className="object-cover object-center"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
                        <span className="absolute top-2 left-2 px-2 py-0.5 rounded-full text-[9px] font-mono font-bold bg-white/95 text-cyan-700 shadow-sm border border-slate-200">
                          ⚡ SISTec Pass • Live
                        </span>
                      </div>
                      <div className="p-2.5 pt-1 text-left">
                        <div className="text-xs font-extrabold text-slate-900">
                          {activePlatformPreview === "ios" ? "Cupertino Architecture" : "Material 3 Fluid UI"}
                        </div>
                        <div className="text-[10px] text-slate-600 mt-0.5">
                          100% shared business logic across both platforms.
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* 3. HARDWARE TELEMATICS & SENSORS LIGHT SCREEN */}
                {internalScreen === "sensors" && (
                  <motion.div
                    key="screen-sensors"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.25 }}
                    className="space-y-2.5"
                  >
                    <div className="rounded-2xl border border-cyan-200 bg-gradient-to-b from-cyan-50/80 to-white p-3.5 shadow-sm text-left">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-mono text-cyan-700 font-bold">TELEMETRY BUS</span>
                        <span className="text-[9px] font-mono text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                          ACTIVE STREAM
                        </span>
                      </div>
                      <div className="mt-1 text-sm font-extrabold text-slate-900 flex items-center gap-1.5">
                        <Activity className="h-4 w-4 text-cyan-600 animate-pulse" />
                        <span>Real-Time Sensor Link</span>
                      </div>
                      <p className="mt-1 text-[11px] text-slate-600">
                        Sub-millisecond bridge communicating with hardware peripherals.
                      </p>
                    </div>

                    <div className="grid grid-cols-2 gap-2 text-left">
                      <div className="rounded-xl border border-slate-200/90 bg-white p-2.5 shadow-sm">
                        <div className="text-[9px] font-mono text-slate-500 uppercase">ACCELEROMETER</div>
                        <div className="text-xs font-mono font-extrabold text-slate-900 mt-0.5">
                          X: 0.02 | Z: 9.81
                        </div>
                      </div>
                      <div className="rounded-xl border border-slate-200/90 bg-white p-2.5 shadow-sm">
                        <div className="text-[9px] font-mono text-slate-500 uppercase">GATE BEACON</div>
                        <div className="text-xs font-mono font-extrabold text-emerald-600 mt-0.5">
                          Synced (0.4m)
                        </div>
                      </div>
                    </div>

                    <div className="rounded-xl border border-slate-200 bg-white p-2 flex items-center justify-between text-[10px] text-slate-700">
                      <span className="font-medium">MethodChannel Call:</span>
                      <span className="font-mono font-bold text-cyan-700">&lt; 0.12ms Latency</span>
                    </div>
                  </motion.div>
                )}

                {/* 4. OFFLINE-FIRST SYNC LIGHT SCREEN */}
                {internalScreen === "offline" && (
                  <motion.div
                    key="screen-offline"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.25 }}
                    className="space-y-2.5"
                  >
                    <div className="rounded-2xl border border-emerald-200 bg-gradient-to-b from-emerald-50/80 to-white p-3.5 shadow-sm text-left">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-mono text-emerald-700 font-bold">LOCAL SQLITE CACHE</span>
                        <span className="text-[9px] font-mono text-emerald-700 font-bold bg-emerald-100/60 px-2 py-0.5 rounded-full border border-emerald-300">
                          SYNC READY
                        </span>
                      </div>
                      <div className="mt-1 text-sm font-extrabold text-slate-900 flex items-center gap-1.5">
                        <ShieldCheck className="h-4 w-4 text-emerald-600" />
                        <span>Zero-Downtime Offline Buffer</span>
                      </div>
                      <p className="mt-1 text-[11px] text-slate-600">
                        Queued records persist locally during telecom disconnects.
                      </p>
                    </div>

                    <div className="space-y-1.5 text-left text-[10px] font-mono">
                      <div className="flex items-center justify-between p-2 rounded-xl bg-white border border-slate-200 shadow-sm">
                        <span className="text-slate-800 font-semibold">Tx #4092: Gate Pass Scan</span>
                        <span className="text-emerald-600 font-bold">✓ Encrypted</span>
                      </div>
                      <div className="flex items-center justify-between p-2 rounded-xl bg-white border border-slate-200 shadow-sm">
                        <span className="text-slate-800 font-semibold">Biometric Audit Log</span>
                        <span className="text-cyan-600 font-bold">Auto-Sync On</span>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Bottom Home Indicator */}
            <div className="flex flex-col items-center gap-1 pb-0.5 pt-1">
              <div className="h-1 w-28 rounded-full bg-slate-400/80" />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
