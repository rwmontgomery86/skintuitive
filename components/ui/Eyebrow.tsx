import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

export function Eyebrow({
  children,
  center = false,
  bare = false,
  className,
}: {
  children: ReactNode;
  center?: boolean;
  bare?: boolean;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "eyebrow",
        center && "eyebrow-center",
        bare && "eyebrow-bare",
        className,
      )}
    >
      {children}
    </span>
  );
}
