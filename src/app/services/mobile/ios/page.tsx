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
  Apple,
  Activity,
  Compass,
} from "lucide-react";
import { DynamicIsland } from "@/components/mobile-ui/DynamicIsland";
import { SpotlightCard } from "@/components/mobile-ui/SpotlightCard";
import { ScrollShowcase } from "@/components/mobile-ui/ScrollShowcase";
import { SpringCounter } from "@/components/mobile-ui/SpringCounter";
import { TechTerminal } from "@/components/mobile-ui/TechTerminal";

export const metadata: Metadata = {
  title: "Native iOS App Development | Avensoft Technologies",
  description:
    "Pixel-perfect native iOS applications engineered with Swift, SwiftUI, Combine, and Apple HIG guidelines. Seamless Dynamic Island and Apple ecosystem integration.",
};

const iosFeatures = [
  {
    title: "SwiftUI & Apple HIG Compliance",
    description:
      "Strict compliance with Apple Human Interface Guidelines, fluid spring physics, and system-native haptic feedback integration.",
    icon: <Zap className="h-5 w-5" />,
    tag: "SwiftUI 6",
  },
  {
    title: "Dynamic Island & Live Activities",
    description:
      "Real-time glanceable status updates via ActivityKit and WidgetKit for order tracking, event check-ins, and sensor monitoring.",
    icon: <Activity className="h-5 w-5" />,
    tag: "ActivityKit",
  },
  {
    title: "Apple Neural Engine CoreML",
    description:
      "Sub-millisecond on-device AI classification and face/object detection running directly on Apple's dedicated Neural Engine silicon.",
    icon: <Cpu className="h-5 w-5" />,
    tag: "Neural Engine",
  },
  {
    title: "Secure Enclave & Biometrics",
    description:
      "Enterprise Face ID and biometric authentication backed by Apple's isolated Secure Enclave hardware coprocessor.",
    icon: <ShieldCheck className="h-5 w-5" />,
    tag: "Secure Enclave",
  },
];

const iosCodeTabs = [
  {
    label: "SwiftUI View",
    filename: "PassVerificationView.swift",
    language: "Swift 6",
    code: `struct PassVerificationView: View {
    @StateObject private var viewModel = VerificationViewModel()

    var body: some View {
        VStack(spacing: 24) {
            HeaderBadge(title: "CAMPUS GATE VERIFIED")
                .symbolEffect(.pulse, options: .repeating)

            QRCodeDisplayView(token: viewModel.activeToken)
                .frame(width: 260, height: 260)
                .background(.ultraThinMaterial, in: RoundedRectangle(cornerRadius: 32))
                .shadow(color: .blue.opacity(0.3), radius: 20)

            HStack {
                StatusIndicator(isActive: viewModel.isOnline)
                Text(viewModel.gateStatusDescription)
                    .font(.caption.monospaced())
            }
        }
        .sensoryFeedback(.success, trigger: viewModel.isVerified)
    }
}`,
  },
  {
    label: "Live Activity",
    filename: "GatePassActivity.swift",
    language: "Swift / ActivityKit",
    code: `struct GatePassWidget: Widget {
    var body: some WidgetConfiguration {
        ActivityConfiguration(for: GatePassAttributes.self) { context in
            GatePassLockScreenView(state: context.state)
        } dynamicIsland: { context in
            DynamicIsland {
                DynamicIslandExpandedRegion(.leading) {
                    Image(systemName: "shield.checkered")
                        .foregroundStyle(.cyan)
                }
                DynamicIslandExpandedRegion(.trailing) {
                    Text(context.state.validUntil, style: .timer)
                }
            } compactLeading: {
                Image(systemName: "checkmark.circle.fill")
                    .foregroundStyle(.green)
            } compactTrailing: {
                Text(context.state.statusShort)
            }
        }
    }
}`,
  },
  {
    label: "CoreML Pipeline",
    filename: "FaceDetector.swift",
    language: "Swift / Vision",
    code: `func analyzeSecurityFrame(_ pixelBuffer: CVPixelBuffer) async throws -> VerificationResult {
    let request = VNDetectFaceRectanglesRequest()
    let handler = VNImageRequestHandler(cvPixelBuffer: pixelBuffer, options: [:])
    try handler.perform([request])

    guard let results = request.results, !results.isEmpty else {
        return .notFound
    }
    return .authorized(faces: results.count)
}`,
  },
];

export default function IosAppPage() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-[#00f0ff]/30">
      {/* Background Ambient Glow */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-[600px] w-[900px] rounded-full bg-[#00f0ff]/10 blur-[160px]" />
        <div className="absolute top-[40%] right-[-10%] h-[500px] w-[500px] rounded-full bg-[#38bdf8]/10 blur-[180px]" />
        <div className="absolute top-[60%] left-[-10%] h-[400px] w-[400px] rounded-full bg-[#fde047]/5 blur-[200px]" />
      </div>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6">
        <div className="mx-auto max-w-5xl text-center">
          {/* Skiper-UI Dynamic Island */}
          <div className="mb-8">
            <DynamicIsland
              platformName="iOS"
              accentColor="#00f0ff"
              fpsMetric="120 FPS ProMotion"
              buildStatus="SwiftUI 6 Native"
            />
          </div>

          {/* Badge */}
          <div className="badge mb-6">
            <span>⚡ Native iOS & Apple Ecosystem</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight">
            Native iOS Apps with{" "}
            <span className="grad-text">
              Pixel-Perfect Precision
            </span>
          </h1>

          <p className="mt-6 text-base sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Crafted for the Apple ecosystem with modern Swift and SwiftUI. From
            ultra-fluid Dynamic Island widgets to hardware-accelerated CoreML
            models on the Apple Neural Engine.
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="btn-primary px-7 py-3.5 rounded-xl font-bold flex items-center gap-2"
            >
              <span>Develop iOS Application</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/portfolio"
              className="btn-ghost px-7 py-3.5 rounded-xl font-semibold flex items-center gap-2"
            >
              <span>Explore Apple Portfolio</span>
            </Link>
          </div>
        </div>

        {/* Skiper-UI Metrics Counters */}
        <div className="mx-auto mt-20 max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 rounded-2xl border border-white/10 bg-[#08080c]/90 p-6 backdrop-blur-2xl">
            <div className="text-center p-3">
              <div className="text-3xl sm:text-4xl font-extrabold text-[#00f0ff]">
                <SpringCounter value={120} suffix=" Hz" duration={1.5} />
              </div>
              <div className="mt-1 text-xs font-mono text-slate-400">
                ProMotion Display Fidelity
              </div>
            </div>
            <div className="text-center p-3 border-l border-white/10">
              <div className="text-3xl sm:text-4xl font-extrabold text-white">
                <SpringCounter
                  value={0.18}
                  decimals={2}
                  prefix="< "
                  suffix="s"
                  duration={1.2}
                />
              </div>
              <div className="mt-1 text-xs font-mono text-slate-400">
                Instant App Launch
              </div>
            </div>
            <div className="text-center p-3 border-l border-white/10">
              <div className="text-3xl sm:text-4xl font-extrabold text-[#38bdf8]">
                <SpringCounter
                  value={99.99}
                  decimals={2}
                  suffix="%"
                  duration={1.8}
                />
              </div>
              <div className="mt-1 text-xs font-mono text-slate-400">
                App Store Stability
              </div>
            </div>
            <div className="text-center p-3 border-l border-white/10">
              <div className="text-3xl sm:text-4xl font-extrabold text-[#fde047]">
                <SpringCounter value={100} suffix="%" duration={1.4} />
              </div>
              <div className="mt-1 text-xs font-mono text-slate-400">
                Apple HIG Compliance
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Scroll-Driven 3D Architecture */}
      <ScrollShowcase
        platform="iOS"
        themeColor="#00f0ff"
        gradientFrom="#00f0ff"
        features={iosFeatures}
      />

      {/* Interactive Code Terminal (Vengeance-UI Inspired) */}
      <section className="py-20 px-6 relative">
        <div className="mx-auto max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white">
              Swift 6 Concurrency & Apple Silicon
            </h2>
            <p className="mt-3 text-slate-400">
              Production-tested SwiftUI code featuring ActivityKit Dynamic
              Island integration and on-device CoreML pipelines.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7">
              <TechTerminal
                title="SwiftUI & Apple Stack"
                accentColor="#00f0ff"
                tabs={iosCodeTabs}
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
                    <Activity className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-bold text-white">
                    Dynamic Island & Live Activities
                  </h3>
                </div>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Engage users on their Lock Screen and Dynamic Island with
                  real-time APNs push tokens and ActivityKit status transitions.
                </p>
              </SpotlightCard>

              <SpotlightCard
                spotlightColor="rgba(56, 189, 248, 0.18)"
                borderColor="rgba(56, 189, 248, 0.45)"
                className="p-6"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-lg bg-[#38bdf8]/10 text-[#38bdf8]">
                    <Compass className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-bold text-white">
                    WatchOS, iPadOS & CarPlay Continuity
                  </h3>
                </div>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Seamless multi-device experiences across Apple Watch, iPad,
                  and automotive CarPlay screens using universal SwiftUI components.
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
              The Apple Standard
            </span>
            <h2 className="mt-2 text-3xl sm:text-5xl font-extrabold text-white">
              Why Avensoft iOS Engineering Leads
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
                Haptic Engine Integration
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Taptic Engine feedback calibrated to every button press, success
                notch, and error vibration for an authentic physical tactile feel.
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
                App Store Review Readiness
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Strict adherence to Apple App Review Guidelines with zero
                rejections. Comprehensive privacy manifests and entitlement setups.
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
                SwiftData & CloudKit Sync
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Encrypted local persistent storage that synchronizes
                frictionlessly across the user's iCloud devices without custom backend overhead.
              </p>
            </SpotlightCard>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 text-center relative overflow-hidden">
        <div className="mx-auto max-w-4xl relative z-10 rounded-3xl border border-[#00f0ff]/30 bg-gradient-to-b from-[#00f0ff]/10 via-black to-black p-12 backdrop-blur-2xl">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white">
            Build Your Flagship iOS Application
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto">
            Bring your iOS vision to life with engineers who live and breathe
            Apple HIG, Swift 6, and cutting-edge silicon optimization.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Link
              href="/contact"
              className="btn-primary px-8 py-4 rounded-xl text-base font-bold shadow-[0_0_30px_rgba(0,240,255,0.4)]"
            >
              Schedule Architecture Session
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
