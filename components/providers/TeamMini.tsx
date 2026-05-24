import Image from "next/image";
import Link from "next/link";
import { providers } from "@/content/providers";

export function TeamMini() {
  return (
    <div className="team-mini">
      {providers.map((p) => (
        <Link key={p.slug} className="team-mini__card" href={`#${p.slug}`}>
          <div className="team-mini__media">
            <Image
              src={p.portrait.src}
              alt={p.portrait.alt}
              fill
              sizes="(max-width: 900px) 50vw, 22vw"
              style={{ objectFit: "cover" }}
            />
          </div>
          <span className="team-mini__role">{p.miniRole}</span>
          <span className="team-mini__name">{p.miniName}</span>
        </Link>
      ))}
    </div>
  );
}
