import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";

export function Philosophy() {
  return (
    <section className="philosophy section-pad">
      <Container>
        <div className="philosophy__inner">
          <Eyebrow center>Our philosophy</Eyebrow>
          <p className="philosophy__quote">
            We listen first.{" "}
            <em>Then</em> we look at the whole system — never just the skin.
          </p>
          <div className="philosophy__sig">
            <div className="philosophy__sig-name">Marley Bonnanzio, LE</div>
            <div className="philosophy__sig-role">Founder · Holistic Medical Esthetician</div>
          </div>
        </div>
      </Container>
    </section>
  );
}
