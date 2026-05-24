import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { CtaBand } from "@/components/home/CtaBand";

export const metadata = { title: "Providers" };

export default function ProvidersPage() {
  return (
    <>
      <section className="section-pad" style={{ paddingTop: 160 }}>
        <Container>
          <Eyebrow>Our team</Eyebrow>
          <h1 className="t-display" style={{ marginTop: 20, maxWidth: "16ch" }}>
            Hands you can <em className="italic-accent">trust</em>.
          </h1>
          <p className="lead" style={{ marginTop: 28, maxWidth: 640 }}>
            Providers page — full bios land in Phase 2.
          </p>
        </Container>
      </section>
      <CtaBand />
    </>
  );
}
