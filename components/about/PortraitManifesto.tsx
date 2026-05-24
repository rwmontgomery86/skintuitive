import Image from "next/image";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { site } from "@/content/site";

export function PortraitManifesto() {
  return (
    <section style={{ paddingTop: 0, paddingBottom: "clamp(80px, 10vw, 144px)" }}>
      <Container>
        <div className="portrait-manifesto">
          <div className="portrait-manifesto__media">
            <Image
              src="/images/staff/marley-bonnanzio.jpg"
              alt="Marley Bonnanzio in the Skintuitive treatment room"
              fill
              sizes="(max-width: 900px) 100vw, 50vw"
              style={{ objectFit: "cover" }}
            />
          </div>
          <div>
            <Eyebrow>A note from the founder</Eyebrow>
            <h2 className="t-h2" style={{ margin: "24px 0 28px" }}>
              Skintuitive exists because most skin advice doesn&apos;t actually fix anything.
            </h2>
            <p className="portrait-manifesto__body">
              For most of our patients, Skintuitive is the third or fourth place they&apos;ve tried. They&apos;ve been prescribed creams, paid for treatment series elsewhere, and watched the problem return.
            </p>
            <p className="portrait-manifesto__body">
              We start by listening, then looking at the whole system: inflammation, hormones, gut microbiome, products, diet, stress, sun history. Then we build a protocol — clinical when it needs to be, holistic when that&apos;s smarter, always personalized.
            </p>
            <div style={{ display: "flex", gap: 14, flexWrap: "wrap", marginTop: 32 }}>
              <ButtonLink variant="primary" arrow href={site.booking.href}>
                Request consultation
              </ButtonLink>
              <ButtonLink variant="ghost" href="/providers">
                Meet the team
              </ButtonLink>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
