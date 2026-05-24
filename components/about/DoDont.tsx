import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";

const DO_ITEMS = [
  "Stimulate your own collagen and elastin",
  "Build a barrier that lasts between visits",
  "Pair topical work with internal protocols",
  "Treat across all skin tones, safely",
  "Educate so you can maintain results yourself",
];

const DONT_ITEMS = [
  "Botox or neuromodulators",
  "Dermal fillers",
  "One-size-fits-all packages",
  "Products we wouldn't put on our own skin",
  "Treatments that depend on you coming back forever",
];

export function DoDont() {
  return (
    <section className="philosophy section-pad">
      <Container>
        <div className="do-dont">
          <div className="do-dont__col do-dont__col--do">
            <Eyebrow>What we do</Eyebrow>
            <h3>Treatments grounded<br />in biology.</h3>
            <ul>
              {DO_ITEMS.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </div>
          <div className="do-dont__col do-dont__col--dont">
            <Eyebrow>What we don&apos;t</Eyebrow>
            <h3>Quick fixes, freezing,<br />fillers.</h3>
            <ul>
              {DONT_ITEMS.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
