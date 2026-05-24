import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { TextLink } from "@/components/ui/TextLink";
import { services } from "@/content/services";
import { site } from "@/content/site";

export function CompareTable() {
  return (
    <section className="philosophy section-pad">
      <Container>
        <div className="compare-table__head">
          <div>
            <Eyebrow>Quick comparison</Eyebrow>
            <h2 className="t-h1" style={{ marginTop: 20 }}>
              Which treatment<br />fits your concern?
            </h2>
          </div>
          <TextLink href={site.booking.href} arrow>Not sure? Ask us</TextLink>
        </div>

        <table className="compare-table">
          <thead>
            <tr>
              <th style={{ width: "22%" }}>Treatment</th>
              <th>Best for</th>
              <th>Series</th>
              <th>Downtime</th>
              <th>Starts at</th>
            </tr>
          </thead>
          <tbody>
            {services.map((s) => (
              <tr key={s.slug}>
                <td className="svc-name">{s.title}</td>
                <td>{s.compare.bestFor}</td>
                <td>{s.compare.series}</td>
                <td>{s.compare.downtime}</td>
                <td><span className="compare-table__price">{s.compare.startsAt}</span></td>
              </tr>
            ))}
          </tbody>
        </table>
      </Container>
    </section>
  );
}
