import { Container } from "@/components/ui/Container";
import { SectionLeader } from "./SectionLeader";

type Item = { title: string; body: string };

export function BestFor({ items, eyebrow = "Best for", title }: { items: Item[]; eyebrow?: string; title: React.ReactNode }) {
  return (
    <section className="section-pad">
      <Container>
        <SectionLeader eyebrow={eyebrow} title={title} />
        <div className="sd-bestfor">
          {items.map((it, i) => (
            <div className="sd-bestfor__item" key={it.title}>
              <div className="icon">{String(i + 1).padStart(2, "0")}</div>
              <h3>{it.title}</h3>
              <p>{it.body}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
