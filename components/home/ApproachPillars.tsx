import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";

const PILLARS = [
  {
    num: "01 / Diagnose",
    title: ["Root-cause", "analysis"],
    body: "Inflammation, hormones, gut microbiome, nutrition, topical history. We map all of it before any device touches your skin.",
  },
  {
    num: "02 / Regenerate",
    title: ["Biostimulating", "treatments"],
    body: "Microneedling, plasma fibroblast, nano-infusion, LED. Tools that stimulate your own collagen and barrier repair.",
  },
  {
    num: "03 / Sustain",
    title: ["Functional", "nutrition"],
    body: "What you eat and what your gut microbiome does with it shows up on your face. We coach the inputs, not just the outputs.",
  },
];

export function ApproachPillars() {
  return (
    <section className="section-pad">
      <Container>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "0.7fr 1.3fr",
            gap: "clamp(40px, 6vw, 96px)",
            alignItems: "end",
          }}
        >
          <div><Eyebrow>Our approach</Eyebrow></div>
          <div>
            <h2 className="t-h1">Skin is the mirror.<br />We treat what&apos;s <em className="italic-accent">behind it</em>.</h2>
          </div>
        </div>
        <div className="approach-grid">
          {PILLARS.map((p) => (
            <div key={p.num} className="approach-item">
              <span className="approach-item__num">{p.num}</span>
              <h3>{p.title[0]}<br />{p.title[1]}</h3>
              <p>{p.body}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
