import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { CtaBand } from "@/components/home/CtaBand";

export const metadata = { title: "About" };

export default function AboutPage() {
  return (
    <>
      <section className="section-pad" style={{ paddingTop: 160 }}>
        <Container>
          <Eyebrow>About</Eyebrow>
          <h1 className="h-display" style={{ marginTop: 20, maxWidth: "18ch" }}>
            Built differently <em className="italic-accent">on purpose</em>.
          </h1>
          <p className="lead" style={{ marginTop: 28, maxWidth: 640 }}>
            About page — full content lands in Phase 2.
          </p>
        </Container>
      </section>
      <CtaBand />
    </>
  );
}
