"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { TextLink } from "@/components/ui/TextLink";

const BEFORE = "/images/before-after/Plasma-Fibroblast-Before-and-After-1.jpg";
const AFTER = "/images/before-after/Plasma-Fibroblast-Before-and-After-2.jpg";

export function BeforeAfterSlider() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const [slider, setSlider] = useState(50);
  const draggingRef = useRef(false);

  const move = useCallback((clientX: number) => {
    const el = wrapRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setSlider(Math.max(2, Math.min(98, pct)));
  }, []);

  useEffect(() => {
    function onMouseUp() {
      draggingRef.current = false;
    }
    function onMouseMove(e: MouseEvent) {
      if (draggingRef.current) move(e.clientX);
    }
    function onTouchEnd() {
      draggingRef.current = false;
    }
    function onTouchMove(e: TouchEvent) {
      if (draggingRef.current && e.touches[0]) {
        move(e.touches[0].clientX);
        e.preventDefault();
      }
    }
    window.addEventListener("mouseup", onMouseUp);
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("touchend", onTouchEnd);
    window.addEventListener("touchmove", onTouchMove, { passive: false });
    return () => {
      window.removeEventListener("mouseup", onMouseUp);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("touchend", onTouchEnd);
      window.removeEventListener("touchmove", onTouchMove);
    };
  }, [move]);

  return (
    <section className="results section-pad">
      <Container>
        <div className="results__head">
          <div>
            <Eyebrow>Real patient results</Eyebrow>
            <h2 className="h-1" style={{ marginTop: 20 }}>
              Before <em className="italic-accent">&amp;</em> after.
            </h2>
          </div>
          <p className="lead">
            All photography is of real Skintuitive patients shown with consent. Unretouched, with documented protocol and timeline.
          </p>
        </div>

        <div
          ref={wrapRef}
          className="compare"
          style={{ ["--slider" as never]: `${slider}%` }}
          onClick={(e) => {
            if ((e.target as HTMLElement).closest(".compare__handle")) return;
            move(e.clientX);
          }}
        >
          <div className="compare__pane">
            <span className="compare__label compare__label--b">Before</span>
            <Image
              src={BEFORE}
              alt="Patient before plasma fibroblast treatment"
              fill
              sizes="(max-width: 900px) 100vw, 1200px"
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="compare__pane after">
            <span className="compare__label compare__label--a">After · 4 months</span>
            <Image
              src={AFTER}
              alt="Same patient four months after plasma fibroblast treatment"
              fill
              sizes="(max-width: 900px) 100vw, 1200px"
              style={{ objectFit: "cover" }}
            />
          </div>
          <div
            className="compare__handle"
            role="separator"
            aria-orientation="vertical"
            aria-valuenow={Math.round(slider)}
            aria-valuemin={0}
            aria-valuemax={100}
            onMouseDown={() => { draggingRef.current = true; }}
            onTouchStart={(e) => { draggingRef.current = true; e.preventDefault(); }}
          />
        </div>

        <div className="compare__meta">
          <span className="case">Plasma Fibroblast · Female 52 · Fitzpatrick III · 1 session · 4-month follow-up</span>
          <span className="ctrls">
            <TextLink href="/services/plasma-fibroblast" arrow>See treatment</TextLink>
          </span>
        </div>
      </Container>
    </section>
  );
}
