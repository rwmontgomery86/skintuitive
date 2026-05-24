import Image from "next/image";
import Link from "next/link";
import { Arrow } from "@/components/ui/Arrow";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { TextLink } from "@/components/ui/TextLink";
import { homepageServices } from "@/content/services";

export function ServicesGrid() {
  const services = homepageServices();
  return (
    <section className="section-pad">
      <Container>
        <div className="svc-head">
          <div>
            <Eyebrow>Treatments</Eyebrow>
            <h2 className="t-h1" style={{ marginTop: 20 }}>Signature<br />services.</h2>
          </div>
          <TextLink href="/services">All treatments</TextLink>
        </div>
        <div className="svc-grid">
          {services.map((s) => (
            <Link key={s.slug} href={`/services/${s.slug}`} className="svc">
              <div className="svc__media">
                <span className="svc__num">{s.number} / {s.category}</span>
                <Image
                  src={s.cardImage.src}
                  alt={s.cardImage.alt}
                  fill
                  sizes="(max-width: 560px) 100vw, (max-width: 900px) 50vw, 33vw"
                  className="svc__media-img"
                  style={{ objectFit: "cover" }}
                />
              </div>
              <h3 className="svc__title">
                {s.titleLines ? (
                  <>
                    {s.titleLines[0]}<br />{s.titleLines[1]}
                  </>
                ) : (
                  s.title
                )}
              </h3>
              <p className="svc__desc">{s.shortDescription}</p>
              <div className="svc__foot">
                <span className="price">{s.priceLabel}</span>
                <span className="more">Learn more <Arrow size={12} /></span>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
