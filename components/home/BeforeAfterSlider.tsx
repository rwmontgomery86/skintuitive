import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { TextLink } from "@/components/ui/TextLink";

// The source files in /public/images/before-after are already pre-stitched
// before/after composites (left half = before, right half = after), so we
// render them as a single editorial image with corner labels instead of
// running them through a clipping slider.
//
// TODO: once the client supplies separated before/after pairs, restore the
// interactive comparison slider (see git history for the slider version).

const CASE = {
  src: "/images/before-after/Plasma-Fibroblast-Before-and-After-1.jpg",
  alt: "Plasma fibroblast before-and-after composite — same patient, four-month follow-up",
  meta: "Plasma Fibroblast · Female 52 · Fitzpatrick III · 1 session · 4-month follow-up",
};

export function BeforeAfterSlider() {
  return (
    <section className="results section-pad">
      <Container>
        <div className="results__head">
          <div>
            <Eyebrow>Real patient results</Eyebrow>
            <h2 className="t-h1" style={{ marginTop: 20 }}>
              Before <em className="italic-accent">&amp;</em> after.
            </h2>
          </div>
          <p className="lead">
            All photography is of real Skintuitive patients shown with consent. Unretouched, with documented protocol and timeline.
          </p>
        </div>

        <figure className="ba-figure">
          <Image
            src={CASE.src}
            alt={CASE.alt}
            width={1600}
            height={800}
            sizes="(max-width: 900px) 100vw, 1200px"
            className="ba-figure__img"
          />
          <span className="ba-figure__label ba-figure__label--b">Before</span>
          <span className="ba-figure__label ba-figure__label--a">After · 4 months</span>
        </figure>

        <div className="ba-meta">
          <span className="ba-meta__case">{CASE.meta}</span>
          <TextLink href="/services/plasma-fibroblast" arrow>See treatment</TextLink>
        </div>
      </Container>
    </section>
  );
}
