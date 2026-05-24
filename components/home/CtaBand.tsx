import Image from "next/image";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { site } from "@/content/site";

type Props = {
  eyebrow?: string;
  title?: React.ReactNode;
  lead?: string;
  image?: { src: string; alt: string };
  terms?: string;
};

export function CtaBand({
  eyebrow = "Ready when you are",
  title = <>Free virtual consultation,<br />on the house.</>,
  lead = "15 minutes by phone or Zoom. Tell us about your goals and skin history. We'll recommend a starting protocol — no commitment, no charge.",
  image = { src: "/images/stock/aboutus_img.jpg", alt: "Treatment room — warm light, natural materials" },
  terms = "Confirmed within one business day. Please do not include personal health information in your initial message.",
}: Props) {
  return (
    <section className="cta">
      <Container>
        <div className="cta__inner">
          <div className="cta__media">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(max-width: 900px) 100vw, 50vw"
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="cta__copy">
            <Eyebrow>{eyebrow}</Eyebrow>
            <h2 className="h-1" style={{ marginTop: 20 }}>{title}</h2>
            <p className="lead">{lead}</p>
            <div className="cta__ctas">
              <ButtonLink variant="primary" arrow href={site.booking.href}>
                Request appointment
              </ButtonLink>
              <ButtonLink variant="ghost" href={site.phone.href}>
                Call {site.phone.display}
              </ButtonLink>
            </div>
            <p className="cta__terms">{terms}</p>
          </div>
        </div>
      </Container>
    </section>
  );
}
