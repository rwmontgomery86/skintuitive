import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { CtaBand } from "@/components/home/CtaBand";
import { services, type ServiceSlug } from "@/content/services";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const s = services.find((x) => x.slug === slug);
  if (!s) return {};
  return { title: s.title, description: s.shortDescription };
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const s = services.find((x) => x.slug === slug as ServiceSlug);
  if (!s) notFound();
  return (
    <>
      <section className="section-pad" style={{ paddingTop: 160 }}>
        <Container>
          <Eyebrow>{s.number} / {s.category}</Eyebrow>
          <h1 className="h-display" style={{ marginTop: 20, maxWidth: "14ch" }}>
            {s.title}
          </h1>
          <p className="lead" style={{ marginTop: 28, maxWidth: 640 }}>
            {s.shortDescription}
          </p>
          <p className="small" style={{ marginTop: 16 }}>
            Full service detail (process, pricing, prep/aftercare, FAQ, related) lands in Phase 3.
          </p>
        </Container>
      </section>
      <CtaBand />
    </>
  );
}
