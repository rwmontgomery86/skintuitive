// Skeleton service data for the homepage grid. Full per-service data
// (process steps, FAQ, pricing tiers, prep/aftercare) populated in Phase 3.
//
// TODO: client to confirm — pricing, brand names (Procell, Dermapen), and
// specific medical claims. The handoff softened the live site's aggressive
// copy but specifics remain.

export type ServiceSlug =
  | "microneedling"
  | "plasma-fibroblast"
  | "holistic-conditions"
  | "corrective-facials"
  | "hyperpigmentation"
  | "skin-tag-removal"
  | "microblading-pmu"
  | "postop-healing";

export type Service = {
  slug: ServiceSlug;
  number: string;
  category: string;
  title: string;
  titleLines?: [string, string];
  shortDescription: string;
  priceLabel: string;
  cardImage: { src: string; alt: string };
};

export const services: Service[] = [
  {
    slug: "microneedling",
    number: "01",
    category: "Regeneration",
    title: "Advanced Microneedling",
    titleLines: ["Advanced", "Microneedling"],
    shortDescription:
      "Procell, Dermapen, Nano Infusion. Stimulates your own collagen for firmness, pores, scarring, and tone.",
    priceLabel: "From $325 · 60 min",
    cardImage: {
      src: "/images/services/Microneedling.jpg",
      alt: "Microneedling treatment in progress",
    },
  },
  {
    slug: "plasma-fibroblast",
    number: "02",
    category: "Tightening",
    title: "Plasma Fibroblast",
    titleLines: ["Plasma", "Fibroblast"],
    shortDescription:
      "Non-invasive skin tightening for eyes, lids, neck, and lines — often called “soft surgery.”",
    priceLabel: "From $450 · 90 min",
    cardImage: {
      src: "/images/services/eyelid-lifting-fibroblast-procedure.webp",
      alt: "Plasma fibroblast eye treatment",
    },
  },
  {
    slug: "holistic-conditions",
    number: "03",
    category: "Conditions",
    title: "Holistic Skin Conditions",
    titleLines: ["Holistic Skin", "Conditions"],
    shortDescription:
      "Acne, rosacea, eczema — addressed via nutrition, microbiome, and topical protocols. MD-designed.",
    priceLabel: "8-week program",
    cardImage: {
      src: "/images/stock/woman-touching-face-1.jpg",
      alt: "Holistic skin protocol consultation",
    },
  },
  {
    slug: "corrective-facials",
    number: "04",
    category: "Maintenance",
    title: "Corrective Facials",
    titleLines: ["Corrective", "Facials"],
    shortDescription:
      "Monthly maintenance with LED, microcurrent, nano-infusion, and barrier repair tailored to skin state.",
    priceLabel: "From $145 · 60 min",
    cardImage: {
      src: "/images/services/Microneedle-mesotherapy.webp",
      alt: "Corrective facial treatment",
    },
  },
  {
    slug: "hyperpigmentation",
    number: "05",
    category: "Tone",
    title: "Pigmentation & Scar Revision",
    titleLines: ["Pigmentation", "& Scar Revision"],
    shortDescription:
      "Melasma, sun spots, acne marks, stretch marks. Safely on every Fitzpatrick tone.",
    priceLabel: "Series of 3 – 6",
    cardImage: {
      src: "/images/before-after/before-and-after-acne-treatment-1a3103bf.webp",
      alt: "Hyperpigmentation before and after",
    },
  },
  {
    slug: "microblading-pmu",
    number: "06",
    category: "Definition",
    title: "Microblading & Permanent Makeup",
    titleLines: ["Microblading", "& Permanent Makeup"],
    shortDescription:
      "Hair-stroke brows, ombre powder, lip blush. By Beth Ward — 30+ years of color artistry.",
    priceLabel: "From $625 · 2.5 hr",
    cardImage: {
      src: "/images/services/permanent-makeup-eyebrows.jpg",
      alt: "Microblading hair-stroke detail",
    },
  },
];

export function homepageServices() {
  return services.slice(0, 6);
}
