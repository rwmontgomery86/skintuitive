const ITEMS = [
  "MD-supervised protocols",
  "Safe on every Fitzpatrick tone",
  "Functional Medicine certified",
  "4.9 ★ on Google · 120+ reviews",
  "Procell & Dermapen authorized",
  "Plasma Fibroblast specialists",
  "Cherry financing accepted",
  "Est. 2018 in Sharpsburg, GA",
];

export function AcclaimMarquee() {
  return (
    <div className="acclaim" aria-label="Practice accolades">
      <div className="acclaim__row">
        {[...ITEMS, ...ITEMS].map((item, i) => (
          <span className="acclaim__item" key={i}>{item}</span>
        ))}
      </div>
    </div>
  );
}
