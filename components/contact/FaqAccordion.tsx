import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";

const FAQS = [
  {
    q: "What happens at a first appointment?",
    a: "We review your medical history, prior treatments, and goals. We examine your skin under magnification, discuss a customized treatment plan, answer your questions, and — if you'd like to move forward — schedule the first session.",
  },
  {
    q: "Do you accept all skin tones?",
    a: "Yes. Every device, peel, and protocol at Skintuitive is selected for safety across the full Fitzpatrick scale — from fair through deeply melanin-rich skin.",
  },
  {
    q: "How does the free virtual consultation work?",
    a: "15 minutes by phone or Zoom. We'll discuss your goals and skin history, recommend a starting protocol, and answer questions. No charge, no obligation to book.",
  },
  {
    q: "Is there parking?",
    a: "Yes — free surface parking directly in front of Suite 105. The entrance is ground-level and accessible.",
  },
  {
    q: "What's your cancellation policy?",
    a: "We ask for 24 hours' notice on cancellations or reschedules. Same-day cancellations and no-shows are subject to a fee. We'll go over policy at booking.",
  },
  {
    q: "Do you offer financing?",
    a: "We accept major cards and offer financing on multi-session programs through Cherry. We'll explain options at consultation.",
  },
];

export function FaqAccordion() {
  return (
    <section className="philosophy section-pad">
      <Container>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "0.7fr 1.3fr",
            gap: "clamp(40px, 6vw, 96px)",
            alignItems: "end",
            marginBottom: 48,
          }}
        >
          <div><Eyebrow>Common questions</Eyebrow></div>
          <h2 className="t-h1">Before<br />you book.</h2>
        </div>
        {FAQS.map((f, i) => (
          <details key={f.q} className="faq" {...(i === 0 ? { open: true } : {})}>
            <summary>{f.q}</summary>
            <div className="faq__answer">{f.a}</div>
          </details>
        ))}
      </Container>
    </section>
  );
}
