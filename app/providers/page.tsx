import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Container";
import { TeamMini } from "@/components/providers/TeamMini";
import { ProviderBio } from "@/components/providers/ProviderBio";
import { CtaBand } from "@/components/home/CtaBand";
import { providers } from "@/content/providers";

export const metadata = {
  title: "Providers",
  description:
    "Meet the providers of Skintuitive Medspa: Marley Bonnanzio, LE; Dr. Sarita Prasad, MD; Beth Ward; and Susan Mejia, LE.",
};

export default function ProvidersPage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Home", href: "/" }, { label: "Providers" }]}
        eyebrow="The team"
        title={
          <>
            Four providers.<br />One <em className="italic-accent">philosophy</em>.
          </>
        }
        lead="A licensed medical esthetician, a Board-Certified Functional Medicine physician, a permanent cosmetics artist, and a holistic wellness esthetician — working as one practice."
      >
        <TeamMini />
      </PageHero>
      <section style={{ paddingTop: 0, paddingBottom: "clamp(80px, 10vw, 144px)" }}>
        <Container>
          {providers.map((p, i) => (
            <ProviderBio key={p.slug} provider={p} reverse={i % 2 === 1} />
          ))}
        </Container>
      </section>
      <CtaBand
        eyebrow="Provider matching"
        title={
          <>
            Not sure who<br />to book with?
          </>
        }
        lead="Tell us about your goals on a free 15-minute virtual consult. We'll route you to the right provider."
        image={{ src: "/images/stock/newpatients_img.jpg", alt: "Welcoming Skintuitive treatment room" }}
      />
    </>
  );
}
