import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PerfHero from "@/components/performance/PerfHero";
import PerfStatStrip from "@/components/performance/PerfStatStrip";
import Powertrain from "@/components/performance/Powertrain";
import SensorArray from "@/components/tech/SensorArray";
import Hydrodynamics from "@/components/performance/Hydrodynamics";
import SafetySystems from "@/components/tech/SafetySystems";
import PerfModes from "@/components/performance/PerfModes";
import ProvenOnWater from "@/components/performance/ProvenOnWater";
import PerfCTA from "@/components/performance/PerfCTA";

export const metadata: Metadata = {
  title: "Performance | EVOLV INC.",
  description:
    "Three years of R&D condensed into a single push of the throttle. Instant torque, surgical handling, and uncompromising composure.",
};

export default function PerformancePage() {
  return (
    <>
      <Navbar />
      <main>
        <PerfHero />
        <PerfStatStrip />
        <Powertrain />
        <SensorArray />
        <Hydrodynamics />
        <SafetySystems />
        <PerfModes />
        <ProvenOnWater />
        <PerfCTA />
      </main>
      <Footer />
    </>
  );
}
