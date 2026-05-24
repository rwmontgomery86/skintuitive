import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";

const ROWS = [
  {
    when: "2010 · Manhattan",
    title: "Building the laser department.",
    body: "Marley begins her career as a clinical aesthetician at a NYC medspa, eventually leading the development of its laser and device program.",
  },
  {
    when: "2014",
    title: "Cosmeceutical chemistry & nutrition.",
    body: "A pattern — patients with cleared skin who relapse the moment treatments stop — pulls her into functional nutrition certification and ingredient chemistry.",
  },
  {
    when: "2018 · Founded",
    title: "Skintuitive opens in Sharpsburg, GA.",
    body: "A practice designed around root-cause aesthetics and inclusive protocols across skin tones.",
  },
  {
    when: "2022 · MD partnership",
    title: "Dr. Sarita Prasad joins as supervising physician.",
    body: "A Board-Certified Functional Medicine MD provides oversight for clinical protocols and complex skin condition cases.",
  },
  {
    when: "Today",
    title: "A four-provider integrative team.",
    body: "Holistic aesthetics, permanent makeup, postoperative recovery, and functional medicine — under one roof.",
  },
];

export function Timeline() {
  return (
    <section className="section-pad">
      <Container>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "0.7fr 1.3fr",
            gap: "clamp(40px, 6vw, 96px)",
            alignItems: "end",
            marginBottom: 56,
          }}
        >
          <div><Eyebrow>Our story</Eyebrow></div>
          <h2 className="t-h1">From Manhattan medspas<br />to Sharpsburg.</h2>
        </div>
        <div className="timeline">
          {ROWS.map((r) => (
            <div key={r.when} className="timeline__row">
              <div className="timeline__when">{r.when}</div>
              <div className="timeline__what">
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
