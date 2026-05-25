import type { ReactNode } from "react";
import { Eyebrow } from "@/components/ui/Eyebrow";

export function SectionLeader({ eyebrow, title }: { eyebrow: string; title: ReactNode }) {
  return (
    <div className="sd-leader">
      <div><Eyebrow>{eyebrow}</Eyebrow></div>
      <h2 className="t-h1">{title}</h2>
    </div>
  );
}
