import { Container } from "@/components/ui/Container";
import { SectionLeader } from "./SectionLeader";

type Step = { title: string; body: string };

export function Process({ steps, eyebrow = "How it works", title }: { steps: Step[]; eyebrow?: string; title: React.ReactNode }) {
  return (
    <section className="philosophy section-pad">
      <Container>
        <SectionLeader eyebrow={eyebrow} title={title} />
        <div className="sd-process">
          {steps.map((s, i) => (
            <div className="sd-step" key={s.title}>
              <div className="sd-step__num">STEP {String(i + 1).padStart(2, "0")}</div>
              <h3>{s.title}</h3>
              <p>{s.body}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
