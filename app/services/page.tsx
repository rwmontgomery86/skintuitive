import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Arrow } from "@/components/ui/Arrow";
import { CtaBand } from "@/components/home/CtaBand";
import { services } from "@/content/services";

export const metadata = { title: "Services" };

export default function ServicesPage() {
  return (
    <>
      <section className="section-pad" style={{ paddingTop: 160 }}>
        <Container>
          <Eyebrow>Treatments</Eyebrow>
          <h1 className="h-display" style={{ marginTop: 20, maxWidth: "16ch" }}>
            Every protocol, <em className="italic-accent">built for you</em>.
          </h1>
        </Container>
      </section>
      <section className="section-pad-tight">
        <Container>
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
                <h3 className="svc__title">{s.title}</h3>
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
      <CtaBand />
    </>
  );
}
