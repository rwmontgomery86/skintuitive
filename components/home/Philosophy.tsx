import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";

export function Philosophy() {
  return (
    <section className="philosophy section-pad">
      <Container>
        <div className="philosophy__inner">
          <div>
            <Eyebrow>Our philosophy</Eyebrow>
          </div>
          <div>
            <p className="philosophy__big">
              For most of our patients, Skintuitive is the third or fourth place they&apos;ve tried. They&apos;ve been prescribed creams, paid for treatment series elsewhere, and watched the problem return.
              <br /><br />
              We start <em>differently</em>—by listening, then looking at the whole system: inflammation, hormones, the gut microbiome, products, diet, sun history. Then we build a protocol that doesn&apos;t depend on you coming back forever.
              <small>— A note from Marley Bonnanzio, LE · Founder</small>
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
