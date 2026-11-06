import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import {
  Zap,
  Layers,
  Cpu,
  ShieldCheck,
  Smartphone,
  Sparkles,
  ArrowRight,
  Code2,
  Atom,
  RefreshCw,
  GitFork,
  Radio,
} from "lucide-react";
import { DynamicIsland } from "@/components/mobile-ui/DynamicIsland";
import { SpotlightCard } from "@/components/mobile-ui/SpotlightCard";
import { ScrollShowcase } from "@/components/mobile-ui/ScrollShowcase";
import { SpringCounter } from "@/components/mobile-ui/SpringCounter";
import { TechTerminal } from "@/components/mobile-ui/TechTerminal";

export const metadata: Metadata = {
  title: "React Native App Development | Avensoft Technologies",
  description:
    "Cross-platform React Native apps with TurboModules, Fabric renderer, and Hermes engine. Over-The-Air updates and high-performance native bridges.",
};

const rnFeatures = [
  {
    title: "Fabric Renderer & TurboModules",
    description:
      "React Native's new architecture directly invokes C++ native code with JSI, eliminating serializing bridge bottlenecks completely.",
    icon: <Zap className="h-5 w-5" />,
    tag: "New Architecture",
  },
  {
    title: "Hermes High-Performance Engine",
    description:
      "AOT bytecode compilation optimized specifically for mobile, cutting memory consumption in half and ensuring instantaneous startup.",
    icon: <Cpu className="h-5 w-5" />,
    tag: "Hermes V8",
  },
  {
    title: "Reanimated 3 UI Thread Physics",
    description:
      "60/120fps gesture-driven animations running entirely on the native UI thread, impervious to any JavaScript execution lag.",
    icon: <Layers className="h-5 w-5" />,
    tag: "Reanimated",
  },
  {
    title: "Over-The-Air (OTA) Instant Updates",
    description:
      "Deploy hotfixes, UI improvements, and feature flags directly to users within minutes via EAS Update without waiting for App Store approvals.",
    icon: <RefreshCw className="h-5 w-5" />,
    tag: "EAS Updates",
  },
];

const rnCodeTabs = [
  {
    label: "Reanimated 3",
    filename: "SwipeablePassCard.tsx",
    language: "TypeScript / React Native",
    code: `import Animated, { useSharedValue, useAnimatedStyle, withSpring } from 'react-native-reanimated';
import { GestureDetector, Gesture } from 'react-native-gesture-handler';

export function SwipeablePassCard({ onVerified }: { onVerified: () => void }) {
  const translateX = useSharedValue(0);

  const panGesture = Gesture.Pan()
    .onUpdate((e) => {
      translateX.value = Math.max(0, Math.min(e.translationX, 220));
    })
    .onEnd(() => {
      if (translateX.value > 180) {
        onVerified();
        translateX.value = withSpring(220);
      } else {
        translateX.value = withSpring(0);
      }
    });

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: translateX.value }],
  }));

  return (
    <GestureDetector gesture={panGesture}>
      <Animated.View style={[styles.card, animatedStyle]} />
    </GestureDetector>
  );
}`,
  },
  {
    label: "TurboModule JSI",
    filename: "NativeSensorModule.ts",
    language: "TypeScript / C++",
    code: `import type { TurboModule } from 'react-native';
import { TurboModuleRegistry } from 'react-native';

export interface Spec extends TurboModule {
  readonly getInstantHardwareGForce: () => Promise<number>;
  readonly triggerHapticPattern: (patternType: string) => void;
  readonly getHardwareKeystoreStatus: () => boolean;
}

export default TurboModuleRegistry.getEnforcing<Spec>('NativeSensorModule');`,
  },
  {
    label: "Offline Sync",
    filename: "WatermelonSync.ts",
    language: "TypeScript / SQLite",
    code: `import { synchronize } from '@nozbe/watermelondb/sync';

export async function syncFieldAudits() {
  await synchronize({
    database,
    pullChanges: async ({ lastPulledAt }) => {
      const response = await fetch(\`/api/sync?since=\${lastPulledAt}\`);
      return await response.json();
    },
    pushChanges: async ({ changes }) => {
      await fetch('/api/sync/push', { method: 'POST', body: JSON.stringify(changes) });
    },
  });
}`,
  },
];

export default function ReactNativeAppPage() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-[#00f0ff]/30">
      {/* Background Neon Mesh */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-[600px] w-[900px] rounded-full bg-[#00f0ff]/10 blur-[160px]" />
        <div className="absolute top-[40%] left-[-10%] h-[500px] w-[500px] rounded-full bg-[#38bdf8]/10 blur-[180px]" />
        <div className="absolute top-[60%] right-[-10%] h-[400px] w-[400px] rounded-full bg-[#fde047]/5 blur-[200px]" />
      </div>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6">
        <div className="mx-auto max-w-5xl text-center">
          {/* Skiper-UI Dynamic Island */}
          <div className="mb-8">
            <DynamicIsland
              platformName="React Native"
              accentColor="#00f0ff"
              fpsMetric="120 FPS Fabric"
              buildStatus="Hermes AOT Compiled"
            />
          </div>

          {/* Badge */}
          <div className="badge mb-6">
            <span>⚡ Fabric Renderer & TurboModules Architecture</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight">
            React Native with{" "}
            <span className="grad-text">
              C++ Native Velocity
            </span>
          </h1>

          <p className="mt-6 text-base sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Harness the speed of React combined with direct C++ JSI bindings.
            We architect cross-platform mobile apps with seamless Web/Mobile
            code-sharing, Over-The-Air instant hotfixes, and zero-latency
            hardware integrations.
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="btn-primary px-7 py-3.5 rounded-xl font-bold flex items-center gap-2"
            >
              <span>Build React Native App</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/portfolio"
              className="btn-ghost px-7 py-3.5 rounded-xl font-semibold flex items-center gap-2"
            >
              <span>View Case Studies</span>
            </Link>
          </div>
        </div>

        {/* Skiper-UI Metrics Counters */}
        <div className="mx-auto mt-20 max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 rounded-2xl border border-white/10 bg-[#08080c]/90 p-6 backdrop-blur-2xl">
            <div className="text-center p-3">
              <div className="text-3xl sm:text-4xl font-extrabold text-[#00f0ff]">
                <SpringCounter value={70} suffix="%" duration={1.5} />
              </div>
              <div className="mt-1 text-xs font-mono text-slate-400">
                Shared Web & App Code
              </div>
            </div>
            <div className="text-center p-3 border-l border-white/10">
              <div className="text-3xl sm:text-4xl font-extrabold text-white">
                <SpringCounter
                  value={0.22}
                  decimals={2}
                  prefix="< "
                  suffix="s"
                  duration={1.2}
                />
              </div>
              <div className="mt-1 text-xs font-mono text-slate-400">
                Hermes Cold Boot
              </div>
            </div>
            <div className="text-center p-3 border-l border-white/10">
              <div className="text-3xl sm:text-4xl font-extrabold text-[#38bdf8]">
                <SpringCounter value={100} suffix="%" duration={1.4} />
              </div>
              <div className="mt-1 text-xs font-mono text-slate-400">
                Type-Safe TurboModules
              </div>
            </div>
            <div className="text-center p-3 border-l border-white/10">
              <div className="text-3xl sm:text-4xl font-extrabold text-[#fde047]">
                <SpringCounter value={5} prefix="< " suffix="m" duration={1.6} />
              </div>
              <div className="mt-1 text-xs font-mono text-slate-400">
                OTA Hotfix Deployment
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Scroll-Driven 3D Architecture */}
      <ScrollShowcase
        platform="React Native"
        themeColor="#00f0ff"
        gradientFrom="#00f0ff"
        features={rnFeatures}
      />

      {/* Interactive Code Terminal (Vengeance-UI Inspired) */}
      <section className="py-20 px-6 relative">
        <div className="mx-auto max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white">
              Direct C++ JSI & Reanimated 3 Engine
            </h2>
            <p className="mt-3 text-slate-400">
              Zero serialized JSON overhead. Pure synchronous C++ memory access
              connecting JavaScript directly to platform graphics and sensors.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7">
              <TechTerminal
                title="React Native New Architecture"
                accentColor="#00f0ff"
                tabs={rnCodeTabs}
              />
            </div>

            <div className="lg:col-span-5 space-y-4">
              <SpotlightCard
                spotlightColor="rgba(0, 240, 255, 0.18)"
                borderColor="rgba(0, 240, 255, 0.45)"
                className="p-6"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-lg bg-[#00f0ff]/10 text-[#00f0ff]">
                    <RefreshCw className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-bold text-white">
                    Instant OTA Updates via EAS
                  </h3>
                </div>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Bypass app store review queues for critical security hotfixes.
                  Roll out JavaScript and asset updates silently in the
                  background.
                </p>
              </SpotlightCard>

              <SpotlightCard
                spotlightColor="rgba(56, 189, 248, 0.18)"
                borderColor="rgba(56, 189, 248, 0.45)"
                className="p-6"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-lg bg-[#38bdf8]/10 text-[#38bdf8]">
                    <GitFork className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-bold text-white">
                    Next.js & Solito Universal Monorepo
                  </h3>
                </div>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Share business logic, validation schemas, and UI components
                  between your Next.js web application and React Native mobile
                  apps.
                </p>
              </SpotlightCard>
            </div>
          </div>
        </div>
      </section>

      {/* Vengeance-UI Bento Grid */}
      <section className="py-20 px-6 border-t border-white/5 bg-gradient-to-b from-transparent to-black">
        <div className="mx-auto max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="font-mono text-xs uppercase tracking-widest text-[#00f0ff]">
              Cross-Platform Precision
            </span>
            <h2 className="mt-2 text-3xl sm:text-5xl font-extrabold text-white">
              Engineered for Enterprise Speed
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <SpotlightCard
              spotlightColor="rgba(0, 240, 255, 0.2)"
              borderColor="rgba(0, 240, 255, 0.5)"
              className="p-8"
            >
              <div className="font-mono text-2xl font-bold text-[#00f0ff] mb-3">
                01
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                Unified Design Tokens
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Shared Tailwind / NativeWind design tokens guaranteeing strict
                visual consistency across Android, iOS, and Web platforms.
              </p>
            </SpotlightCard>

            <SpotlightCard
              spotlightColor="rgba(56, 189, 248, 0.2)"
              borderColor="rgba(56, 189, 248, 0.5)"
              className="p-8"
            >
              <div className="font-mono text-2xl font-bold text-[#38bdf8] mb-3">
                02
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                Custom TurboModules
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Need raw native power? We drop down into Swift and Kotlin to
                write bespoke TurboModules with sub-microsecond call overhead.
              </p>
            </SpotlightCard>

            <SpotlightCard
              spotlightColor="rgba(253, 224, 71, 0.15)"
              borderColor="rgba(253, 224, 71, 0.45)"
              className="p-8"
            >
              <div className="font-mono text-2xl font-bold text-[#fde047] mb-3">
                03
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                Offline WatermelonDB
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Multi-threaded SQLite database built for high scalability,
                caching tens of thousands of records without slowing down the UI.
              </p>
            </SpotlightCard>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 text-center relative overflow-hidden">
        <div className="mx-auto max-w-4xl relative z-10 rounded-3xl border border-[#00f0ff]/30 bg-gradient-to-b from-[#00f0ff]/10 via-black to-black p-12 backdrop-blur-2xl">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white">
            Scale Fast with React Native
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto">
            Get your mobile application to market twice as fast without
            sacrificing native feel, 120fps animations, or hardware security.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Link
              href="/contact"
              className="btn-primary px-8 py-4 rounded-xl text-base font-bold shadow-[0_0_30px_rgba(0,240,255,0.4)]"
            >
              Start React Native Build
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
