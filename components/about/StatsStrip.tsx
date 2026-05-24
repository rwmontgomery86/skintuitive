import { Container } from "@/components/ui/Container";

const STATS = [
  { num: "14", suffix: "+", label: ["Years specialty", "experience"] },
  { num: "3,200", suffix: "+", label: ["Treatments", "performed"] },
  { num: "4.9", star: true, label: ["Average Google", "rating"] },
  { num: "All", label: ["Fitzpatrick", "skin tones"] },
];

export function StatsStrip() {
  return (
    <section style={{ paddingTop: 0, paddingBottom: "clamp(40px, 6vw, 96px)" }}>
      <Container>
        <div className="stats-strip">
          {STATS.map((s) => (
            <div key={s.label[0]} className="stat">
              <div className="stat-num">
                {s.num}
                {s.suffix ? <span style={{ fontSize: "0.5em" }}>{s.suffix}</span> : null}
                {s.star ? <span style={{ fontSize: "0.4em", color: "var(--accent-2)" }}>★</span> : null}
              </div>
              <div className="stat-lab">{s.label[0]}<br />{s.label[1]}</div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
