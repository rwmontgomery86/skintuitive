import { PageHero } from "@/components/ui/PageHero";
import { PortraitManifesto } from "@/components/about/PortraitManifesto";
import { QuoteBlock } from "@/components/about/QuoteBlock";
import { Pillars } from "@/components/about/Pillars";
import { StatsStrip } from "@/components/about/StatsStrip";
import { Timeline } from "@/components/about/Timeline";
import { DoDont } from "@/components/about/DoDont";
import { CtaBand } from "@/components/home/CtaBand";

export const metadata = {
  title: "About",
  description:
    "A holistic medspa in Sharpsburg, Georgia. Founded by Marley Bonnanzio, LE with MD oversight from Dr. Sarita Prasad. Root-cause skin and wellness care.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Home", href: "/" }, { label: "About" }]}
        eyebrow="About Skintuitive"
        title={
          <>
            A medspa shaped by clinical rigor <em className="italic-accent">and</em> a refusal to chase quick fixes.
          </>
        }
        lead="Founded in Sharpsburg, Georgia by holistic medical esthetician Marley Bonnanzio — and supervised by a Board-Certified Functional Medicine physician — Skintuitive blends the precision of medical aesthetics with the depth of integrative wellness."
      />
      <PortraitManifesto />
      <QuoteBlock />
      <Pillars />
      <StatsStrip />
      <Timeline />
      <DoDont />
      <CtaBand
        eyebrow="Start the conversation"
        title={
          <>
            Curious if our approach<br />is right for <em className="italic-accent">you</em>?
          </>
        }
        lead="Book a free 15-minute virtual consultation. We'll review your goals and skin history, and recommend a starting protocol — no commitment."
        image={{ src: "/images/stock/aboutus_img.jpg", alt: "Calm Skintuitive treatment room in natural light" }}
      />
    </>
  );
}
