import { Container } from "@/components/ui/Container";
import { SectionLeader } from "./SectionLeader";

type Row = { when: string; title: string; body: string };

export function Timeline({ rows, eyebrow = "What to expect", title }: { rows: Row[]; eyebrow?: string; title: React.ReactNode }) {
  return (
    <section className="section-pad">
      <Container>
        <SectionLeader eyebrow={eyebrow} title={title} />
        <div className="sd-timeline">
          {rows.map((r) => (
            <div className="sd-timeline__row" key={r.when}>
              <div className="sd-timeline__when">{r.when}</div>
              <div className="sd-timeline__what">
                <h3>{r.title}</h3>
                <p>{r.body}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
