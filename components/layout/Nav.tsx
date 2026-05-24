"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { navLinks } from "@/content/nav";
import { site } from "@/content/site";
import { MobileDrawer } from "./MobileDrawer";

export function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 16);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setDrawerOpen(false);
  }, [pathname]);

  return (
    <>
      <nav className={`nav ${scrolled ? "scrolled" : ""}`}>
        <Container>
          <div className="nav__inner">
            <Link className="brand" href="/" aria-label={`${site.name}, home`}>
              <span className="brand__mark">
                <Image src="/logo.png" alt="" width={36} height={36} priority />
              </span>
              <span className="brand__name">{site.shortName}</span>
            </Link>
            <div className="nav__links">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={pathname === link.href ? "page" : undefined}
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <div className="nav__cta">
              <a className="nav__phone" href={site.phone.href}>
                <span className="dot" />
                {site.phone.display}
              </a>
              <ButtonLink variant="primary" size="sm" arrow href={site.booking.href}>
                Book now
              </ButtonLink>
              <button
                type="button"
                className="nav__hamburger"
                aria-label="Open menu"
                aria-expanded={drawerOpen}
                onClick={() => setDrawerOpen(true)}
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
                  <path d="M2 4h12M2 8h12M2 12h12" />
                </svg>
              </button>
            </div>
          </div>
        </Container>
      </nav>
      <MobileDrawer
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        pathname={pathname}
      />
    </>
  );
}
