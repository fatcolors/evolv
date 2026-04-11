import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ExpHero from "@/components/experience/ExpHero";
import ExpFeatures from "@/components/experience/ExpFeatures";
import ExpPerformance from "@/components/experience/ExpPerformance";
import ExpTech from "@/components/experience/ExpTech";
import ExpRide from "@/components/experience/ExpRide";
import ExpCTA from "@/components/experience/ExpCTA";

export const metadata: Metadata = {
  title: "Experience | EVOLV INC.",
  description:
    "Silent electric propulsion, instant torque, and an immersive ride built to be felt. Step aboard the future of personal watercraft.",
};

export default function ExperiencePage() {
  return (
    <>
      <Navbar />
      <main className="bg-white">
        <ExpHero />
        <ExpFeatures />
        <ExpPerformance />
        <ExpTech />
        <ExpRide />
        <ExpCTA />
      </main>
      <Footer />
    </>
  );
}
