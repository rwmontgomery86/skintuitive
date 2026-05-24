import Image from "next/image";
import { ButtonLink } from "@/components/ui/Button";
import { getProvider } from "@/content/providers";
import { site } from "@/content/site";

export function ProviderSpotlight() {
  const m = getProvider("marley");
  return (
    <section className="spotlight">
      <div className="spotlight__inner">
        <div className="spotlight__media">
          <Image
            src={m.portrait.src}
            alt={m.portrait.alt}
            fill
            sizes="(max-width: 900px) 100vw, 50vw"
            style={{ objectFit: "cover" }}
          />
          {m.spotlightQuote ? (
            <div className="spotlight__pull">
              <p>&ldquo;{m.spotlightQuote.text}&rdquo;</p>
              <span className="who">{m.spotlightQuote.who}</span>
            </div>
          ) : null}
        </div>
        <div className="spotlight__copy">
          <span className="spotlight__role">{m.role}</span>
          <h2 className="spotlight__name">
            {m.nameLines ? (
              <>
                {m.nameLines[0]}<br />{m.nameLines[1]}{" "}
                <span className="italic-accent">{m.credentialSuffix}</span>
              </>
            ) : (
              <>{m.name} <span className="italic-accent">{m.credentialSuffix}</span></>
            )}
          </h2>
          <p className="spotlight__bio">{m.bio[0]}</p>
          <div className="spotlight__creds">
            {m.credentials.map((c) => (
              <div key={c.label}>
                <div className="lab">{c.label}</div>
                <div className="val" style={{ whiteSpace: "pre-line" }}>{c.value}</div>
              </div>
            ))}
          </div>
          <div className="spotlight__ctas">
            <ButtonLink variant="primary" arrow href={site.booking.href}>
              Book with Marley
            </ButtonLink>
            <ButtonLink variant="ghost" href="/providers#marley">
              Full bio
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}
