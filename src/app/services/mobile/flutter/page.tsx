import React from "react";
import { Metadata } from "next";
import {
  Zap,
  Layers,
  Cpu,
  ShieldCheck,
} from "lucide-react";
import { FlutterScrollJourney } from "@/components/flutter-showcase/FlutterScrollJourney";

export const metadata: Metadata = {
  title: "Flutter App Development | Avensoft Technologies",
  description:
    "High-performance, 120fps cross-platform mobile apps for iOS and Android powered by Flutter and Dart. Unified codebase with truly native performance.",
};

const flutterFeatures = [
  {
    title: "Impeller Engine 120fps",
    description:
      "Silky smooth hardware-accelerated rendering powered by Flutter's Impeller engine, eliminating shader compilation stutter completely.",
    icon: <Zap className="h-5 w-5" />,
    tag: "Rendering",
  },
  {
    title: "Unified Single Codebase",
    description:
      "One clean Dart repository shipping pixel-perfect native binaries to both the Apple App Store and Google Play Store simultaneously.",
    icon: <Layers className="h-5 w-5" />,
    tag: "Dual Platform",
  },
  {
    title: "MethodChannel Native Bridges",
    description:
      "Zero-overhead native platform channels communicating directly with low-level iOS CoreBluetooth and Android CameraX APIs.",
    icon: <Cpu className="h-5 w-5" />,
    tag: "Native API",
  },
  {
    title: "Offline-First Hive & SQLite",
    description:
      "Ultra-fast local disk storage with background auto-sync queues ensuring your apps operate with zero downtime in remote areas.",
    icon: <ShieldCheck className="h-5 w-5" />,
    tag: "Storage",
  },
];

const flutterCodeTabs = [
  {
    label: "Bloc State",
    filename: "auth_bloc.dart",
    language: "Dart",
    code: `class AuthBloc extends Bloc<AuthEvent, AuthState> {
  final AuthRepository repository;

  AuthBloc(this.repository) : super(AuthInitial()) {
    on<LoginRequested>((event, emit) async {
      emit(AuthLoading());
      try {
        final session = await repository.authenticate(event.creds);
        emit(AuthSuccess(session: session));
      } catch (err) {
        emit(AuthFailure(error: err.toString()));
      }
    });
  }
}`,
  },
  {
    label: "Native Bridge",
    filename: "biometric_channel.dart",
    language: "Dart / Swift / Kotlin",
    code: `static const platform = MethodChannel('com.avensoft.sensor/biometric');

Future<bool> authenticateBiometric() async {
  try {
    final bool result = await platform.invokeMethod('authenticateUser');
    return result;
  } on PlatformException catch (e) {
    debugPrint("Failed to authenticate: '\${e.message}'.");
    return false;
  }
}`,
  },
  {
    label: "Impeller UI",
    filename: "animated_card.dart",
    language: "Dart",
    code: `AnimatedBuilder(
  animation: _controller,
  builder: (context, child) {
    return Transform(
      transform: Matrix4.identity()
        ..setEntry(3, 2, 0.001)
        ..rotateY(_controller.value * 3.14159),
      alignment: FractionalOffset.center,
      child: GlassContainer(blur: 24, borderRadius: 20),
    );
  },
);`,
  },
];

export default function FlutterAppPage() {
  return (
    <FlutterScrollJourney
      features={flutterFeatures}
      codeTabs={flutterCodeTabs}
    />
  );
}
