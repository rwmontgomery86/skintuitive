import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Container";
import { ServiceFinder } from "@/components/services/ServiceFinder";
import { CompareTable } from "@/components/services/CompareTable";
import { CtaBand } from "@/components/home/CtaBand";
import { services } from "@/content/services";

export const metadata = {
  title: "Treatments",
  description:
    "Microneedling, plasma fibroblast, corrective facials, holistic skin condition treatments, hyperpigmentation revision, and permanent makeup in Sharpsburg, GA.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Home", href: "/" }, { label: "Treatments" }]}
        eyebrow="Treatment menu"
        title={
          <>
            Every service starts<br />with a <em className="italic-accent">consultation</em>.
          </>
        }
        lead="We don't sell packages cold. We assess your skin, your goals, and your history — then propose a protocol. Below is what's possible, not what's prescribed."
      />
      <section style={{ paddingTop: 0, paddingBottom: "clamp(80px, 10vw, 144px)" }}>
        <Container>
          <ServiceFinder services={services} />
        </Container>
      </section>
      <CompareTable />
      <CtaBand
        eyebrow="Free virtual consult"
        title={
          <>
            Not sure where to start?<br />We&apos;ll point you there.
          </>
        }
        lead="15 minutes by phone or Zoom. We'll review your goals and recommend a starting protocol."
        image={{ src: "/images/stock/medspaservices_img.jpg", alt: "Skintuitive treatment room" }}
      />
    </>
  );
}
