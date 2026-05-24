import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";

const PILLARS = [
  {
    label: "PILLAR 01",
    title: ["Root-cause", "analysis"],
    body: "Inflammation, gut microbiome, hormones, nutrition, topical history, sun, sleep, stress. We map all of it before any device touches your skin.",
  },
  {
    label: "PILLAR 02",
    title: ["Regenerative", "biology"],
    body: "Microneedling, plasma fibroblast, nano-infusion, LED, growth factors, peptides. Tools that stimulate your own collagen and barrier repair.",
  },
  {
    label: "PILLAR 03",
    title: ["Functional", "nutrition"],
    body: "What you eat, what you absorb, and what your gut microbiome does with it shows up on your face. We coach the inputs, not just the outputs.",
  },
  {
    label: "PILLAR 04",
    title: ["Inclusive", "by design"],
    body: "Every protocol is selected to be safe across the full Fitzpatrick scale — from fair through deeply melanin-rich skin. No exclusions.",
  },
];

export function Pillars() {
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
          <div><Eyebrow>Our four pillars</Eyebrow></div>
          <div>
            <h2 className="t-h1">How we think<br />about skin.</h2>
          </div>
        </div>
        <div className="pillars">
          {PILLARS.map((p) => (
            <div key={p.label} className="pillar">
              <div className="pillar__lbl">{p.label}</div>
              <h3>{p.title[0]}<br />{p.title[1]}</h3>
              <p>{p.body}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
