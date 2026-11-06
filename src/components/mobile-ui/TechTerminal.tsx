"use client";

import React, { useState } from "react";
import { Copy, Check, Terminal, Code2, Server } from "lucide-react";

interface TechTerminalProps {
  title: string;
  accentColor: string;
  tabs: {
    label: string;
    filename: string;
    language: string;
    code: string;
  }[];
}

export function TechTerminal({
  title,
  accentColor = "#00f0ff",
  tabs,
}: TechTerminalProps) {
  const [activeTab, setActiveTab] = useState(0);
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    if (!tabs[activeTab]) return;
    navigator.clipboard.writeText(tabs[activeTab].code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const current = tabs[activeTab] || tabs[0];

  return (
    <div className="relative rounded-2xl border border-white/10 bg-[#07090e]/95 backdrop-blur-2xl shadow-2xl overflow-hidden">
      {/* Terminal Bar */}
      <div className="flex items-center justify-between border-b border-white/10 bg-white/[0.02] px-4 py-3">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <span className="h-3 w-3 rounded-full bg-red-500/80 inline-block" />
            <span className="h-3 w-3 rounded-full bg-yellow-500/80 inline-block" />
            <span className="h-3 w-3 rounded-full bg-emerald-500/80 inline-block" />
          </div>
          <span className="ml-3 font-mono text-xs text-slate-400 hidden sm:inline-block">
            {title} — {current.filename}
          </span>
        </div>

        {/* Tab switchers */}
        <div className="flex items-center gap-1">
          {tabs.map((tab, idx) => (
            <button
              key={idx}
              onClick={() => setActiveTab(idx)}
              className={`rounded-lg px-3 py-1 font-mono text-xs transition-all ${
                activeTab === idx
                  ? "bg-white/15 text-white font-semibold shadow-sm"
                  : "text-slate-400 hover:bg-white/5 hover:text-slate-200"
              }`}
            >
              {tab.label}
            </button>
          ))}
          <button
            onClick={handleCopy}
            className="ml-2 rounded-lg p-1.5 text-slate-400 hover:bg-white/10 hover:text-white transition-colors"
            title="Copy Code"
          >
            {copied ? (
              <Check className="h-3.5 w-3.5 text-emerald-400" />
            ) : (
              <Copy className="h-3.5 w-3.5" />
            )}
          </button>
        </div>
      </div>

      {/* Code Area */}
      <div className="p-5 font-mono text-xs sm:text-sm text-slate-300 overflow-x-auto leading-relaxed">
        <pre className="selection:bg-cyan-500/30">
          <code>{current.code}</code>
        </pre>
      </div>

      {/* Footer Status Bar */}
      <div className="flex items-center justify-between border-t border-white/5 bg-black/40 px-4 py-2 font-mono text-[11px] text-slate-400">
        <div className="flex items-center gap-2">
          <span
            className="h-2 w-2 rounded-full inline-block"
            style={{ backgroundColor: accentColor }}
          />
          <span>{current.language}</span>
        </div>
        <div className="flex items-center gap-4">
          <span>UTF-8</span>
          <span style={{ color: accentColor }}>Ready for Production</span>
        </div>
      </div>
    </div>
  );
}
