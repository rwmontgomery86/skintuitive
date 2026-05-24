import { Arrow } from "@/components/ui/Arrow";
import { site } from "@/content/site";

export function BookInfo() {
  return (
    <aside className="book-info">
      <div className="book-info__block">
        <h4>Prefer to call?</h4>
        <p className="book-info__big book-info__big--phone">
          <a href={site.phone.href}>{site.phone.display}</a>
        </p>
        <p className="book-info__sub">Staffed during open hours</p>
      </div>

      <div className="book-info__block">
        <h4>Visit</h4>
        <p className="book-info__big">
          {site.address.line1}<br />{site.address.line2}
        </p>
        <p className="book-info__big book-info__big--sm" style={{ marginTop: 4 }}>
          {site.address.city}, {site.address.state} {site.address.zip}
        </p>
        <p className="book-info__sub" style={{ marginTop: 14 }}>
          <a className="tlink" href={site.address.mapsUrl} target="_blank" rel="noreferrer" style={{ color: "var(--accent)" }}>
            Get directions
            <Arrow size={12} />
          </a>
        </p>
        <div className="map-frame" aria-hidden="true"><span className="map-frame__pin" /></div>
      </div>

      <div className="book-info__block">
        <h4>Hours</h4>
        <table className="hours-table">
          <tbody>
            {site.hours.map((h, i) => (
              <tr key={h.days} className={i === 0 ? "hours-table__open" : undefined}>
                <td>{h.days}</td>
                <td>{h.hours}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="book-info__block">
        <h4>Or email</h4>
        <p className="book-info__big book-info__big--email">
          <a href={`mailto:${site.email}`}>{site.email}</a>
        </p>
        <p className="book-info__sub" style={{ marginTop: 10 }}>
          Responses within one business day
        </p>
      </div>
    </aside>
  );
}
