import Image from "next/image";
import { ButtonLink } from "@/components/ui/Button";
import type { Provider } from "@/content/providers";

export function ProviderBio({ provider, reverse = false }: { provider: Provider; reverse?: boolean }) {
  const portrait = (
    <div className="pv-row__media">
      <Image
        src={provider.portrait.src}
        alt={provider.portrait.alt}
        fill
        sizes="(max-width: 900px) 100vw, 45vw"
        style={{ objectFit: "cover" }}
      />
    </div>
  );

  const copy = (
    <div>
      <div className="pv-row__meta">
        {provider.meta.map((m, i) => (
          <span key={m} className={i === 0 ? "ttl" : undefined}>{m}</span>
        ))}
      </div>
      <h2 className="pv-row__name">
        {provider.nameLines ? (
          <>
            {provider.nameLines[0]}<br />{provider.nameLines[1]}
            {provider.credentialSuffix ? (
              <>
                {" "}<span className="italic-accent">{provider.credentialSuffix}</span>
              </>
            ) : null}
          </>
        ) : (
          <>
            {provider.name}
            {provider.credentialSuffix ? (
              <> <span className="italic-accent">{provider.credentialSuffix}</span></>
            ) : null}
          </>
        )}
        <small>{provider.nameSmall}</small>
      </h2>
      {provider.bio.map((p, i) => (
        <p key={i} className="pv-row__bio">{p}</p>
      ))}
      <div className="pv-row__creds">
        {provider.credentials.map((c) => (
          <div key={c.label} className="pv-row__cred-item">
            <div className="pv-row__cred-lab">{c.label}</div>
            <div className="pv-row__cred-val">{c.value}</div>
          </div>
        ))}
      </div>
      <div className="pv-row__tags">
        {provider.specialties.map((s) => (
          <span key={s}>{s}</span>
        ))}
      </div>
      <div className="pv-row__ctas">
        <ButtonLink variant="primary" arrow href={provider.ctaPrimary.href}>
          {provider.ctaPrimary.label}
        </ButtonLink>
        <ButtonLink variant="ghost" href={provider.ctaGhost.href}>
          {provider.ctaGhost.label}
        </ButtonLink>
      </div>
    </div>
  );

  return (
    <article className={`pv-row${reverse ? " pv-row--reverse" : ""}`} id={provider.slug}>
      {reverse ? (
        <>
          {copy}
          {portrait}
        </>
      ) : (
        <>
          {portrait}
          {copy}
        </>
      )}
    </article>
  );
}
