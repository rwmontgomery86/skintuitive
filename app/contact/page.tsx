import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { ButtonLink } from "@/components/ui/Button";
import { site } from "@/content/site";

export const metadata = { title: "Contact & booking" };

export default function ContactPage() {
  return (
    <section className="section-pad" style={{ paddingTop: 160 }}>
      <Container>
        <Eyebrow>Contact</Eyebrow>
        <h1 className="h-display" style={{ marginTop: 20, maxWidth: "16ch" }}>
          Let&apos;s <em className="italic-accent">talk</em>.
        </h1>
        <p className="lead" style={{ marginTop: 28, maxWidth: 640 }}>
          Full appointment form, info sidebar, and FAQ accordion land in Phase 2.
        </p>
        <div style={{ display: "flex", gap: 14, flexWrap: "wrap", marginTop: 32 }}>
          <ButtonLink variant="primary" arrow href={site.phone.href}>
            Call {site.phone.display}
          </ButtonLink>
          <ButtonLink variant="ghost" href={`mailto:${site.email}`}>
            Email us
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
