import type { ReactNode } from "react";
import { Eyebrow } from "./Eyebrow";

// Two-column header used 20+ times: 0.7fr eyebrow-left / 1.3fr t-h1-right
export function SectionHeader({
  eyebrow,
  children,
}: {
  eyebrow: string;
  children: ReactNode;
}) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "0.7fr 1.3fr",
        gap: "clamp(40px, 6vw, 96px)",
        alignItems: "end",
      }}
      className="section-header"
    >
      <div>
        <Eyebrow>{eyebrow}</Eyebrow>
      </div>
      <div>{children}</div>
    </div>
  );
}
