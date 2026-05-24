import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { site } from "@/content/site";
import { NewsletterSignup } from "./NewsletterSignup";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <Container>
        <div className="footer__grid">
          <div className="footer__brand">
            <Link className="brand" href="/" aria-label={`${site.name}, home`}>
              <span className="brand__mark">
                <Image src="/logo.png" alt="" width={36} height={36} />
              </span>
              <span className="brand__name">{site.name}</span>
            </Link>
            <p>{site.tagline}</p>
            <div className="social">
              <a href={site.social.instagram} aria-label="Instagram">IG</a>
              <a href={site.social.facebook} aria-label="Facebook">FB</a>
              <a href={site.social.google} aria-label="Google">G</a>
            </div>
          </div>
          <div className="footer__col">
            <h4>Visit</h4>
            <ul>
              <li>{site.address.line1}</li>
              <li>{site.address.line2}</li>
              <li>{site.address.city}, {site.address.state} {site.address.zip}</li>
              <li style={{ marginTop: 8 }}>
                <a href={site.address.mapsUrl} target="_blank" rel="noreferrer">Get directions →</a>
              </li>
            </ul>
          </div>
          <div className="footer__col">
            <h4>Hours</h4>
            <ul>
              {site.hours.map((h) => (
                <li key={h.days}>{h.days} · {h.hours}</li>
              ))}
              <li style={{ marginTop: 8 }}>
                <a href={site.phone.href}>{site.phone.display}</a>
              </li>
            </ul>
          </div>
          <div className="footer__col">
            <h4>Newsletter</h4>
            <NewsletterSignup />
          </div>
        </div>
        <div className="footer__bottom">
          <span>© {year} {site.name} · All rights reserved</span>
          <span className="links">
            <Link href="/about">About</Link>
            <Link href="/services">Services</Link>
            <Link href="/contact">Contact</Link>
          </span>
        </div>
      </Container>
    </footer>
  );
}
