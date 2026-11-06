"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Activity, Wifi, ShieldCheck, Zap, Layers } from "lucide-react";

interface DynamicIslandProps {
  platformName: string;
  accentColor: string;
  fpsMetric?: string;
  buildStatus?: string;
}

type TabType = "perf" | "sync" | "security" | "build";

export function DynamicIsland({
  platformName,
  accentColor = "rgb(0, 240, 255)",
  fpsMetric = "120 FPS",
  buildStatus = "Passing (0.2s launch)",
}: DynamicIslandProps) {
  const [activeTab, setActiveTab] = useState<TabType>("perf");
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="relative mx-auto flex flex-col items-center justify-center">
      {/* Floating Dynamic Island Container */}
      <motion.div
        layout
        onClick={() => setIsExpanded(!isExpanded)}
        transition={{ type: "spring", stiffness: 400, damping: 30 }}
        className="group relative cursor-pointer select-none rounded-full border border-white/15 bg-black/85 px-4 py-2.5 shadow-[0_10px_35px_rgba(0,0,0,0.8)] backdrop-blur-2xl transition-all duration-300 hover:border-white/30"
      >
        <div className="flex items-center gap-3">
          {/* Pulsing Status Dot */}
          <span className="relative flex h-2.5 w-2.5">
            <span
              className="absolute inline-flex h-full w-full animate-ping rounded-full opacity-75"
              style={{ backgroundColor: accentColor }}
            />
            <span
              className="relative inline-flex h-2.5 w-2.5 rounded-full"
              style={{ backgroundColor: accentColor }}
            />
          </span>

          {/* Island Label / Status */}
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs font-semibold uppercase tracking-wider text-slate-300">
              {platformName} Core
            </span>
            <span className="text-white/20">•</span>
            <span
              className="font-mono text-xs font-bold"
              style={{ color: accentColor }}
            >
              {activeTab === "perf" && fpsMetric}
              {activeTab === "sync" && "Offline-First Sync"}
              {activeTab === "security" && "Hardware Encrypted"}
              {activeTab === "build" && "Build Ready"}
            </span>
          </div>

          {/* Quick Tab Selector Pills */}
          <div
            className="flex items-center gap-1 border-l border-white/15 pl-2"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveTab("perf")}
              className={`rounded-full p-1.5 transition-colors ${
                activeTab === "perf"
                  ? "bg-white/20 text-white"
                  : "text-slate-400 hover:text-white"
              }`}
              title="Performance (FPS)"
            >
              <Zap className="h-3.5 w-3.5" />
            </button>
            <button
              onClick={() => setActiveTab("sync")}
              className={`rounded-full p-1.5 transition-colors ${
                activeTab === "sync"
                  ? "bg-white/20 text-white"
                  : "text-slate-400 hover:text-white"
              }`}
              title="Data Sync"
            >
              <Wifi className="h-3.5 w-3.5" />
            </button>
            <button
              onClick={() => setActiveTab("security")}
              className={`rounded-full p-1.5 transition-colors ${
                activeTab === "security"
                  ? "bg-white/20 text-white"
                  : "text-slate-400 hover:text-white"
              }`}
              title="Enterprise Security"
            >
              <ShieldCheck className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>

        {/* Expanded Details Drawer */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0, marginTop: 0 }}
              animate={{ opacity: 1, height: "auto", marginTop: 12 }}
              exit={{ opacity: 0, height: 0, marginTop: 0 }}
              transition={{ duration: 0.2 }}
              className="overflow-hidden border-t border-white/10 pt-3 text-left"
            >
              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="rounded-xl bg-white/5 p-2.5">
                  <span className="text-slate-400">Rendering Latency</span>
                  <div className="mt-1 font-mono font-bold text-emerald-400">
                    8.33ms / frame
                  </div>
                </div>
                <div className="rounded-xl bg-white/5 p-2.5">
                  <span className="text-slate-400">Crash Resilience</span>
                  <div className="mt-1 font-mono font-bold text-cyan-400">
                    99.98% uptime
                  </div>
                </div>
              </div>
              <div className="mt-2 text-center text-[10px] text-slate-400">
                Click anywhere on the island to collapse
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
