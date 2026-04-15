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
        {/* Sticky stacked reveal: each section locks at top, the next slides up over it.
            Only enabled when viewport is ≥1024px wide AND ≥1200px tall — otherwise the
            sections (which are taller than shorter viewports) would have their bottoms
            clipped while pinned. Below that, sections flow normally. */}
        <div className="lg:[@media(min-height:1200px)]:relative">
          <div className="lg:[@media(min-height:1200px)]:sticky lg:[@media(min-height:1200px)]:top-0 lg:[@media(min-height:1200px)]:z-10">
            <WatercraftParadigm />
          </div>
          <div className="lg:[@media(min-height:1200px)]:sticky lg:[@media(min-height:1200px)]:top-0 lg:[@media(min-height:1200px)]:z-20">
            <EngineeringSpecs />
          </div>
          <div className="lg:[@media(min-height:1200px)]:sticky lg:[@media(min-height:1200px)]:top-0 lg:[@media(min-height:1200px)]:z-30">
            <BuiltForBeyond />
          </div>
        </div>
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}
