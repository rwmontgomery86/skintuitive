import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";

export function QuoteBlock() {
  return (
    <section className="philosophy quote-block">
      <Container>
        <div className="quote-block__inner">
          <Eyebrow center>Our philosophy</Eyebrow>
          <p className="quote-block__big">
            If a treatment can&apos;t explain <em>why</em> it&apos;s working, it probably isn&apos;t. We chose protocols backed by both biology and visible results — then taught our patients how to maintain them at home.
            <small>— Marley Bonnanzio, LE · Founder</small>
          </p>
        </div>
      </Container>
    </section>
  );
}
