import { Hero } from "@/components/home/Hero";
import { AcclaimMarquee } from "@/components/home/AcclaimMarquee";
import { Philosophy } from "@/components/home/Philosophy";
import { ServicesGrid } from "@/components/home/ServicesGrid";
import { ProviderSpotlight } from "@/components/home/ProviderSpotlight";
import { ApproachPillars } from "@/components/home/ApproachPillars";
import { BeforeAfterSlider } from "@/components/home/BeforeAfterSlider";
import { Reviews } from "@/components/home/Reviews";
import { CtaBand } from "@/components/home/CtaBand";

export default function Home() {
  return (
    <>
      <Hero />
      <AcclaimMarquee />
      <Philosophy />
      <ServicesGrid />
      <ProviderSpotlight />
      <ApproachPillars />
      <BeforeAfterSlider />
      <Reviews />
      <CtaBand />
    </>
  );
}
