import { Container } from "@/components/ui/Container";
import { SectionLeader } from "./SectionLeader";

type Block = { heading: string; items: string[] };

export function PrepAftercare({ prep, aftercare, eyebrow = "Prep & aftercare", title }: { prep: Block; aftercare: Block; eyebrow?: string; title: React.ReactNode }) {
  return (
    <section className="section-pad">
      <Container>
        <SectionLeader eyebrow={eyebrow} title={title} />
        <div className="sd-care">
          <div className="sd-care__col">
            <span className="meta">Before your treatment</span>
            <h3>{prep.heading}</h3>
            <ul>
              {prep.items.map((i) => <li key={i}>{i}</li>)}
            </ul>
          </div>
          <div className="sd-care__col">
            <span className="meta">After your treatment</span>
            <h3>{aftercare.heading}</h3>
            <ul>
              {aftercare.items.map((i) => <li key={i}>{i}</li>)}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
