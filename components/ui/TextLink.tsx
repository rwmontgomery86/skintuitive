import Link from "next/link";
import type { ReactNode } from "react";
import { Arrow } from "./Arrow";

export function TextLink({
  href,
  children,
  arrow = true,
  external = false,
}: {
  href: string;
  children: ReactNode;
  arrow?: boolean;
  external?: boolean;
}) {
  const isExternal = external || href.startsWith("http") || href.startsWith("tel:") || href.startsWith("mailto:");
  const inner = (
    <>
      {children}
      {arrow ? <Arrow size={14} /> : null}
    </>
  );
  if (isExternal) {
    return <a className="tlink" href={href}>{inner}</a>;
  }
  return <Link className="tlink" href={href}>{inner}</Link>;
}
