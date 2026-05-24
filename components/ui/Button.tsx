import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { Arrow } from "./Arrow";
import { cn } from "@/lib/cn";

type Variant = "primary" | "ghost" | "invert";
type Size = "default" | "sm";

type BaseProps = {
  variant?: Variant;
  size?: Size;
  arrow?: boolean;
  children: ReactNode;
  className?: string;
};

type ButtonProps = BaseProps & Omit<ComponentPropsWithoutRef<"button">, "children" | "className">;
type AnchorProps = BaseProps & { href: string } & Omit<ComponentPropsWithoutRef<"a">, "children" | "className" | "href">;

function classes(variant: Variant, size: Size, extra?: string) {
  return cn(
    "btn",
    variant === "primary" && "btn--primary",
    variant === "ghost" && "btn--ghost",
    variant === "invert" && "btn--invert",
    size === "sm" && "btn--sm",
    extra,
  );
}

export function Button({ variant = "primary", size = "default", arrow = false, children, className, ...rest }: ButtonProps) {
  return (
    <button className={classes(variant, size, className)} {...rest}>
      {children}
      {arrow ? <Arrow size={size === "sm" ? 12 : 14} /> : null}
    </button>
  );
}

export function ButtonLink({ variant = "primary", size = "default", arrow = false, children, className, href, ...rest }: AnchorProps) {
  const isExternal = href.startsWith("http") || href.startsWith("tel:") || href.startsWith("mailto:");
  if (isExternal) {
    return (
      <a className={classes(variant, size, className)} href={href} {...rest}>
        {children}
        {arrow ? <Arrow size={size === "sm" ? 12 : 14} /> : null}
      </a>
    );
  }
  return (
    <Link className={classes(variant, size, className)} href={href} {...rest}>
      {children}
      {arrow ? <Arrow size={size === "sm" ? 12 : 14} /> : null}
    </Link>
  );
}
