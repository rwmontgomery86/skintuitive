import { notFound } from "next/navigation";
import { services, type ServiceSlug } from "@/content/services";
import { SdHero } from "@/components/services/detail/SdHero";
import { BestFor } from "@/components/services/detail/BestFor";
import { Process } from "@/components/services/detail/Process";
import { Timeline } from "@/components/services/detail/Timeline";
import { ProviderMini } from "@/components/services/detail/ProviderMini";
import { Pricing } from "@/components/services/detail/Pricing";
import { PrepAftercare } from "@/components/services/detail/PrepAftercare";
import { FaqList } from "@/components/services/detail/FaqList";
import { RelatedTreatments } from "@/components/services/detail/RelatedTreatments";
import { CtaBand } from "@/components/home/CtaBand";
import { JsonLd } from "@/components/seo/JsonLd";
import { serviceJsonLd } from "@/lib/jsonld";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const s = services.find((x) => x.slug === slug as ServiceSlug);
  if (!s) return {};
  return { title: s.title, description: s.shortDescription };
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const s = services.find((x) => x.slug === slug as ServiceSlug);
  if (!s || !s.detail) notFound();
  const d = s.detail;
  return (
    <>
      <JsonLd data={serviceJsonLd(s)} />
      <SdHero service={s} />
      <BestFor
        items={d.bestFor}
        title={<>What this treatment<br />actually addresses.</>}
      />
      <Process
        steps={d.process}
        title={<>The biology<br />behind the result.</>}
      />
      <Timeline
        rows={d.timeline}
        title={<>The session,<br />and what follows.</>}
      />
      <ProviderMini service={s} />
      <Pricing
        tiers={d.pricing}
        note={d.pricingNote}
        title={<>Honest pricing.<br />Quoted up front.</>}
      />
      <PrepAftercare
        prep={d.prep}
        aftercare={d.aftercare}
        title={<>How to get<br />the best result.</>}
      />
      <FaqList
        faqs={d.faqs}
        title={<>Common<br />questions.</>}
      />
      <RelatedTreatments
        slugs={d.related}
        title={<>Related<br />treatments.</>}
      />
      <CtaBand
        eyebrow={d.finalCta.eyebrow}
        title={
          <>
            {d.finalCta.titleLines[0]}<br />{d.finalCta.titleLines[1]}
          </>
        }
        lead={d.finalCta.lead}
      />
    </>
  );
}
