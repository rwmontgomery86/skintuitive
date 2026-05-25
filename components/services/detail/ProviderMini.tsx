import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { site } from "@/content/site";
import { getProvider } from "@/content/providers";
import type { Service } from "@/content/services";

export function ProviderMini({ service: s }: { service: Service }) {
  if (!s.detail) return null;
  const provider = getProvider(s.detail.provider.slug as Parameters<typeof getProvider>[0]);
  const firstName = provider.name.split(" ")[0];
  return (
    <section className="section-pad-tight">
      <Container>
        <div className="sd-provider">
          <div className="sd-provider__media">
            <Image
              src={provider.portrait.src}
              alt={provider.portrait.alt}
              fill
              sizes="(max-width: 900px) 100vw, 40vw"
              style={{ objectFit: "cover" }}
            />
          </div>
          <div>
            <Eyebrow>Your provider</Eyebrow>
            <h3>
              {provider.name}
              {provider.credentialSuffix ? <span className="cred">{provider.credentialSuffix}</span> : null}
              <small>{provider.nameSmall}</small>
            </h3>
            <p>{s.detail.provider.blurb}</p>
            <div className="sd-provider__ctas">
              <ButtonLink variant="primary" href={site.booking.href}>
                Book with {firstName}
              </ButtonLink>
              <ButtonLink variant="ghost" href={`/providers#${provider.slug}`}>
                Full bio
              </ButtonLink>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
