import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import LogoMarquee from "@/components/LogoMarquee";
import SmartEngineering from "@/components/SmartEngineering";
import ComfortSpeed from "@/components/ComfortSpeed";
import WatercraftParadigm from "@/components/WatercraftParadigm";
import EngineeringSpecs from "@/components/EngineeringSpecs";
import BuiltForBeyond from "@/components/BuiltForBeyond";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <LogoMarquee />
        <SmartEngineering />
        <ComfortSpeed />
        <WatercraftParadigm />
        <EngineeringSpecs />
        <BuiltForBeyond />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}
