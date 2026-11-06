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
  Database,
  Radio,
  Lock,
} from "lucide-react";
import { DynamicIsland } from "@/components/mobile-ui/DynamicIsland";
import { SpotlightCard } from "@/components/mobile-ui/SpotlightCard";
import { ScrollShowcase } from "@/components/mobile-ui/ScrollShowcase";
import { SpringCounter } from "@/components/mobile-ui/SpringCounter";
import { TechTerminal } from "@/components/mobile-ui/TechTerminal";

export const metadata: Metadata = {
  title: "Native Android App Development | Avensoft Technologies",
  description:
    "High-performance native Android apps built with Kotlin, Jetpack Compose, Coroutines, and hardware sensor integrations. 120fps fluid rendering.",
};

const androidFeatures = [
  {
    title: "Jetpack Compose Declarative UI",
    description:
      "Modern Android UI built with reactive Compose states, custom Canvas rendering, and smooth hardware-accelerated animations.",
    icon: <Zap className="h-5 w-5" />,
    tag: "Compose UI",
  },
  {
    title: "Coroutines & Flow Reactive Pipeline",
    description:
      "Asynchronous, non-blocking threading handling hundreds of real-time sensor events per second without dropping a single UI frame.",
    icon: <Cpu className="h-5 w-5" />,
    tag: "Concurrency",
  },
  {
    title: "Offline-First Room DB & WorkManager",
    description:
      "Resilient background batch queues running independently of network availability with guaranteed exponential backoff sync.",
    icon: <Database className="h-5 w-5" />,
    tag: "Offline Sync",
  },
  {
    title: "Android Keystore & Biometric Hardening",
    description:
      "FIPS-compliant hardware-backed encryption keys, SSL pinning, and BiometricPrompt authentication for enterprise zero-trust security.",
    icon: <ShieldCheck className="h-5 w-5" />,
    tag: "Hardware Security",
  },
];

const androidCodeTabs = [
  {
    label: "Jetpack Compose",
    filename: "GatePassCard.kt",
    language: "Kotlin",
    code: `@Composable
fun GatePassCard(pass: GatePass, onScan: () -> Unit) {
    Card(
        modifier = Modifier
            .fillMaxWidth()
            .clip(RoundedCornerShape(24.dp))
            .border(1.dp, Brush.horizontalGradient(listOf(Color(0xFF10B981), Color(0xFF064E3B)))),
        colors = CardDefaults.cardColors(containerColor = Color(0xFF090D0B))
    ) {
        Column(modifier = Modifier.padding(20.dp)) {
            Text(text = pass.studentName, style = MaterialTheme.typography.titleLarge, color = Color.White)
            Spacer(modifier = Modifier.height(8.dp))
            Row(verticalAlignment = Alignment.CenterVertically) {
                StatusBadge(status = pass.status)
                Spacer(modifier = Modifier.weight(1f))
                Text(text = "Valid: \${pass.expiryTime}", color = Color.Gray, fontSize = 12.sp)
            }
        }
    }
}`,
  },
  {
    label: "Offline Sync",
    filename: "SyncWorker.kt",
    language: "Kotlin",
    code: `class SyncWorker(appContext: Context, params: WorkerParameters) :
    CoroutineWorker(appContext, params) {

    override suspend fun doWork(): Result = withContext(Dispatchers.IO) {
        val pendingSyncs = roomDatabase.gatePassDao().getUnsyncedRecords()
        if (pendingSyncs.isEmpty()) return@withContext Result.success()

        val response = cloudApi.batchSyncPasses(pendingSyncs)
        if (response.isSuccessful) {
            roomDatabase.gatePassDao().markAsSynced(pendingSyncs.map { it.id })
            Result.success()
        } else {
            Result.retry()
        }
    }
}`,
  },
  {
    label: "Sensor Telematics",
    filename: "SensorEngine.kt",
    language: "Kotlin",
    code: `class SensorEngine(private val context: Context) : SensorEventListener {
    private val sensorManager = context.getSystemService(Context.SENSOR_SERVICE) as SensorManager
    private val accelerometer = sensorManager.getDefaultSensor(Sensor.TYPE_ACCELEROMETER)

    fun startListening(onAnomaly: (Float) -> Unit) {
        sensorManager.registerListener(this, accelerometer, SensorManager.SENSOR_DELAY_FASTEST)
    }

    override fun onSensorChanged(event: SensorEvent?) {
        val gForce = calculateGForce(event?.values)
        if (gForce > CRITICAL_THRESHOLD) onAnomaly(gForce)
    }
}`,
  },
];

export default function AndroidAppPage() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-[#00f0ff]/30">
      {/* Background Root Glow Mesh */}
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
              platformName="Android"
              accentColor="#00f0ff"
              fpsMetric="120 FPS Compose"
              buildStatus="ART Engine Compiled"
            />
          </div>

          {/* Badge */}
          <div className="badge mb-6">
            <span>⚡ Native Android & Embedded Systems</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight">
            Native Android with{" "}
            <span className="grad-text">
              Uncompromising Performance
            </span>
          </h1>

          <p className="mt-6 text-base sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Engineered with modern Kotlin, Jetpack Compose, and low-latency
            hardware APIs. Built for extreme battery efficiency, offline-first
            field durability, and sub-second sensor telematics.
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="btn-primary px-7 py-3.5 rounded-xl font-bold flex items-center gap-2"
            >
              <span>Engineer Android App</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/portfolio"
              className="btn-ghost px-7 py-3.5 rounded-xl font-semibold flex items-center gap-2"
            >
              <span>Explore Deployed Apps</span>
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
                ProMotion & 120Hz Displays
              </div>
            </div>
            <div className="text-center p-3 border-l border-white/10">
              <div className="text-3xl sm:text-4xl font-extrabold text-white">
                <SpringCounter
                  value={14}
                  prefix="< "
                  suffix=" MB"
                  duration={1.4}
                />
              </div>
              <div className="mt-1 text-xs font-mono text-slate-400">
                Optimized APK Footprint
              </div>
            </div>
            <div className="text-center p-3 border-l border-white/10">
              <div className="text-3xl sm:text-4xl font-extrabold text-[#38bdf8]">
                <SpringCounter value={100} suffix="%" duration={1.6} />
              </div>
              <div className="mt-1 text-xs font-mono text-slate-400">
                Offline Transaction Buffer
              </div>
            </div>
            <div className="text-center p-3 border-l border-white/10">
              <div className="text-3xl sm:text-4xl font-extrabold text-[#fde047]">
                <SpringCounter
                  value={99.99}
                  decimals={2}
                  suffix="%"
                  duration={1.8}
                />
              </div>
              <div className="mt-1 text-xs font-mono text-slate-400">
                Crash Resilience
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Scroll-Driven 3D Architecture */}
      <ScrollShowcase
        platform="Android"
        themeColor="#00f0ff"
        gradientFrom="#00f0ff"
        features={androidFeatures}
      />

      {/* Interactive Code Terminal (Vengeance-UI Inspired) */}
      <section className="py-20 px-6 relative">
        <div className="mx-auto max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white">
              Modern Android Stack & Clean Architecture
            </h2>
            <p className="mt-3 text-slate-400">
              MVI architecture with Kotlin Coroutines, Room DB buffering, and
              Jetpack Compose.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7">
              <TechTerminal
                title="Android Native Architecture"
                accentColor="#00f0ff"
                tabs={androidCodeTabs}
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
                    <Radio className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-bold text-white">
                    Hardware BLE & Sensor Pipelines
                  </h3>
                </div>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Real-time communication with Bluetooth beacons, RFID scanners,
                  and inertial sensors for gate access, telematics, and logistics.
                </p>
              </SpotlightCard>

              <SpotlightCard
                spotlightColor="rgba(56, 189, 248, 0.18)"
                borderColor="rgba(56, 189, 248, 0.45)"
                className="p-6"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-lg bg-[#38bdf8]/10 text-[#38bdf8]">
                    <Lock className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-bold text-white">
                    Android Enterprise Kiosk & MDM
                  </h3>
                </div>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Locked-down device owner policies for institutional tablets
                  and security gate stations with tamper-evident audit logs.
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
              Built for Scale
            </span>
            <h2 className="mt-2 text-3xl sm:text-5xl font-extrabold text-white">
              Institutional Android Engineering
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
                Guaranteed 120fps Rendering
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Zero skipped frames with Compose Layout Inspector profiling and
                custom draw passes on low-end to flagship devices.
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
                Zero-Downtime Offline Buffers
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Ground deployments continue working during complete connectivity
                blackouts. Multi-signature passes sync automatically upon reconnect.
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
                Hardened Keystore Security
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Cryptographic authentication keys never leave hardware enclave
                memory, preventing app cloning and replay attacks.
              </p>
            </SpotlightCard>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 text-center relative overflow-hidden">
        <div className="mx-auto max-w-4xl relative z-10 rounded-3xl border border-[#00f0ff]/30 bg-gradient-to-b from-[#00f0ff]/10 via-black to-black p-12 backdrop-blur-2xl">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white">
            Ready to Build Native Android Architecture?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto">
            From consumer apps to mission-critical gate security systems, we
            deliver battle-hardened Kotlin code.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Link
              href="/contact"
              className="btn-primary px-8 py-4 rounded-xl text-base font-bold shadow-[0_0_30px_rgba(0,240,255,0.4)]"
            >
              Schedule Technical Review
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
