import Image from "next/image";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { site } from "@/content/site";

export function Hero() {
  return (
    <section className="hero">
      <Container>
        <div className="hero__inner">
          <div className="hero__media">
            <Image
              src="/images/hero.jpg"
              alt="Editorial portrait — soft natural light"
              fill
              priority
              sizes="(max-width: 900px) 100vw, 50vw"
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="hero__copy">
            <div className="hero__pill-row">
              <span className="pill"><span className="dot" />Now accepting new patients</span>
              <span className="pill">Free 15-min virtual consult</span>
            </div>
            <Eyebrow>Holistic medical aesthetics</Eyebrow>
            <h1 className="t-display hero__title">Skin that ages on <em>your</em> terms.</h1>
            <p className="lead hero__lead">
              We pair medical-grade aesthetics with functional medicine, so what shows on your face reflects how your body&apos;s actually doing — not a one-size-fits-all protocol.
            </p>
            <div className="hero__ctas">
              <ButtonLink variant="primary" arrow href={site.booking.href}>
                Book appointment
              </ButtonLink>
              <ButtonLink variant="ghost" href={site.phone.href}>
                Call {site.phone.display}
              </ButtonLink>
            </div>
            <div className="hero__stats">
              <div>
                <div className="stat__num">14<span style={{ fontSize: "0.5em" }}>+</span></div>
                <div className="stat__lbl">Years specialty<br />experience</div>
              </div>
              <div>
                <div className="stat__num">4.9<span style={{ color: "var(--accent-2)", fontSize: "0.5em" }}>★</span></div>
                <div className="stat__lbl">120+ verified<br />Google reviews</div>
              </div>
              <div>
                <div className="stat__num">MD</div>
                <div className="stat__lbl">Functional medicine<br />oversight</div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
