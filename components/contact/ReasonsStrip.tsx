const REASONS = [
  { num: "01", title: "Free virtual consult", body: "15 min on Zoom or phone. No commitment, no charge." },
  { num: "02", title: "MD-supervised", body: "Functional Medicine physician on file for clinical oversight." },
  { num: "03", title: "All skin tones", body: "Protocols selected for safety across the Fitzpatrick scale." },
  { num: "04", title: "Honest pricing", body: "Quoted up front, with full plan — not surprise upsells." },
];

export function ReasonsStrip() {
  return (
    <div className="reasons">
      {REASONS.map((r) => (
        <div key={r.num} className="reason">
          <div className="reason__num">{r.num}</div>
          <h4>{r.title}</h4>
          <p>{r.body}</p>
        </div>
      ))}
    </div>
  );
}
