import { Container } from "@/components/ui/Container";
import { SectionLeader } from "./SectionLeader";

type Faq = { q: string; a: string };

export function FaqList({ faqs, eyebrow = "Questions", title }: { faqs: Faq[]; eyebrow?: string; title: React.ReactNode }) {
  return (
    <section className="philosophy section-pad">
      <Container>
        <SectionLeader eyebrow={eyebrow} title={title} />
        {faqs.map((f, i) => (
          <details key={f.q} className="faq" {...(i === 0 ? { open: true } : {})}>
            <summary>{f.q}</summary>
            <div className="faq__answer">{f.a}</div>
          </details>
        ))}
      </Container>
    </section>
  );
}
