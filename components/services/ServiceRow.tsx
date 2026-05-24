import Image from "next/image";
import { ButtonLink } from "@/components/ui/Button";
import type { Service } from "@/content/services";
import { site } from "@/content/site";

export function ServiceRow({ service }: { service: Service }) {
  return (
    <article className="svc-row" id={service.slug}>
      <div className="svc-row__media">
        <Image
          src={service.cardImage.src}
          alt={service.cardImage.alt}
          fill
          sizes="(max-width: 900px) 100vw, 45vw"
          style={{ objectFit: "cover" }}
        />
      </div>
      <div>
        <div className="svc-row__num">
          {service.number} / {service.category} · {service.durationLabel}
        </div>
        <h2>
          {service.rowTitleLines ? (
            service.rowTitleLines.map((line, i) => (
              <span key={i}>
                {line}
                {i < service.rowTitleLines!.length - 1 ? <br /> : null}
              </span>
            ))
          ) : (
            service.title
          )}
        </h2>
        <p className="svc-row__desc">{service.rowDescription}</p>
        <div className="svc-row__concerns">
          {service.visibleConcernTags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
        <div className="svc-row__specs">
          {service.rowSpecs.map((s) => (
            <div key={s.label} className="spec">
              <div className="spec-lab">{s.label}</div>
              <div className="spec-val">{s.value}</div>
            </div>
          ))}
        </div>
        <div className="svc-row__ctas">
          <ButtonLink variant="primary" arrow href={site.booking.href}>
            {service.rowCta}
          </ButtonLink>
          <ButtonLink variant="ghost" href={`/services/${service.slug}`}>
            Full details
          </ButtonLink>
        </div>
      </div>
    </article>
  );
}
