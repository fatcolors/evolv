import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TechHero from "@/components/tech/TechHero";
import TechNumbers from "@/components/tech/TechNumbers";
import NeuralCore from "@/components/tech/NeuralCore";
import SensorArray from "@/components/tech/SensorArray";
import CockpitHUD from "@/components/tech/CockpitHUD";
import Connectivity from "@/components/tech/Connectivity";
import SafetySystems from "@/components/tech/SafetySystems";
import TechCTA from "@/components/tech/TechCTA";

export const metadata: Metadata = {
  title: "Technology | EVOLV INC.",
  description:
    "An intelligent watercraft by design. Onboard neural compute, fused-sensor awareness, and lifetime over-the-air evolution.",
};

export default function TechPage() {
  return (
    <>
      <Navbar />
      <main>
        <TechHero />
        <TechNumbers />
        <NeuralCore />
        <SensorArray />
        <CockpitHUD />
        <Connectivity />
        <SafetySystems />
        <TechCTA />
      </main>
      <Footer />
    </>
  );
}
