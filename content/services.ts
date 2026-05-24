// Service catalog — single source of truth for the home grid, the services
// page (finder + rows + compare table), and the 8 service detail pages.
//
// TODO: client to confirm — pricing, brand mentions (Procell, Dermapen,
// RevitaPen Pro), medical claims, and "10+ visits / 3–4 months" estimates.

export type ServiceSlug =
  | "microneedling"
  | "plasma-fibroblast"
  | "holistic-conditions"
  | "corrective-facials"
  | "hyperpigmentation"
  | "skin-tag-removal"
  | "microblading-pmu"
  | "postop-healing";

export type ConcernTag =
  | "Acne"
  | "Aging & lines"
  | "Pores & texture"
  | "Pigmentation"
  | "Scarring"
  | "Laxity"
  | "Rosacea"
  | "Skin tags"
  | "Brows & lips"
  | "Post-surgery";

export type OutcomeTag =
  | "Regenerate"
  | "Tighten"
  | "Even tone"
  | "Heal"
  | "Maintain"
  | "Define";

export type TimeBucket = "short" | "standard" | "multi"; // < 60 min · 60–90 min · Multi-visit

export type Service = {
  slug: ServiceSlug;
  number: string;
  category: string;
  title: string;
  titleLines?: [string, string];
  rowTitleLines?: string[]; // optional multi-line for service row h2
  shortDescription: string; // home grid
  rowDescription: string; // services page row
  priceLabel: string; // home grid foot
  cardImage: { src: string; alt: string };

  // Services page extras
  concerns: ConcernTag[];
  outcomes: OutcomeTag[];
  time: TimeBucket;
  durationLabel: string; // appears in row eyebrow ("60 min", "8-week program", etc.)
  visibleConcernTags: string[]; // the chips rendered under the description
  rowSpecs: Array<{ label: string; value: string }>;
  rowCta: string; // per-service CTA label ("Book consultation", "Book with Beth", etc.)

  // Compare-table row
  compare: { bestFor: string; series: string; downtime: string; startsAt: string };
};

export const services: Service[] = [
  {
    slug: "microneedling",
    number: "01",
    category: "Regeneration",
    title: "Advanced Microneedling",
    titleLines: ["Advanced", "Microneedling"],
    rowTitleLines: ["Advanced", "Microneedling."],
    shortDescription:
      "Procell, Dermapen, Nano Infusion. Stimulates your own collagen for firmness, pores, scarring, and tone.",
    rowDescription:
      "Controlled micro-channels stimulate your own collagen and elastin production. We offer Procell Microchanneling, Dermapen, Nano Infusion, and RevitaPen Pro — each chosen for the concern and tone.",
    priceLabel: "From $325 · 60 min",
    cardImage: { src: "/images/services/Microneedling.jpg", alt: "Microneedling treatment in progress" },
    concerns: ["Acne", "Aging & lines", "Pores & texture", "Scarring"],
    outcomes: ["Regenerate"],
    time: "standard",
    durationLabel: "60 min",
    visibleConcernTags: ["acne", "scarring", "pores", "lines", "tone", "hair regrowth"],
    rowSpecs: [
      { label: "Starts at", value: "$325" },
      { label: "Series", value: "3–6 sessions" },
      { label: "Downtime", value: "24–48 hr" },
    ],
    rowCta: "Book consultation",
    compare: { bestFor: "Collagen, scars, pores, tone", series: "3–6", downtime: "24–48 hr", startsAt: "$325" },
  },
  {
    slug: "plasma-fibroblast",
    number: "02",
    category: "Tightening",
    title: "Plasma Fibroblast",
    titleLines: ["Plasma", "Fibroblast"],
    rowTitleLines: ["Plasma", "Fibroblast."],
    shortDescription:
      "Non-invasive skin tightening for eyes, lids, neck, and lines — often called “soft surgery.”",
    rowDescription:
      "Often called “soft surgery.” Nitrogen plasma creates micro-channels that stimulate fibroblasts to produce collagen and elastin — tightening lids, lines, neck, and stretched skin without incisions.",
    priceLabel: "From $450 · 90 min",
    cardImage: {
      src: "/images/services/eyelid-lifting-fibroblast-procedure.webp",
      alt: "Plasma fibroblast eye treatment",
    },
    concerns: ["Aging & lines", "Laxity"],
    outcomes: ["Tighten"],
    time: "standard",
    durationLabel: "90 min",
    visibleConcernTags: ["eye laxity", "neck", "lines", "stretch marks", "scars", "lesions"],
    rowSpecs: [
      { label: "Starts at", value: "$450" },
      { label: "Sessions", value: "1–2" },
      { label: "Downtime", value: "~ 1 week" },
    ],
    rowCta: "Book consultation",
    compare: { bestFor: "Eye laxity, lines, stretch marks", series: "1–2", downtime: "~1 week", startsAt: "$450" },
  },
  {
    slug: "holistic-conditions",
    number: "03",
    category: "Conditions",
    title: "Holistic Skin Conditions",
    titleLines: ["Holistic Skin", "Conditions"],
    rowTitleLines: ["Holistic Skin", "Conditions."],
    shortDescription:
      "Acne, rosacea, eczema — addressed via nutrition, microbiome, and topical protocols. MD-designed.",
    rowDescription:
      "Acne, rosacea, eczema. A multi-week protocol that addresses inflammation, gut microbiome, nutrition, and topical care — designed with our supervising MD.",
    priceLabel: "8-week program",
    cardImage: { src: "/images/stock/woman-touching-face-1.jpg", alt: "Holistic skin protocol consultation" },
    concerns: ["Acne", "Rosacea"],
    outcomes: ["Heal"],
    time: "multi",
    durationLabel: "8-week program",
    visibleConcernTags: ["acne", "rosacea", "eczema", "barrier damage"],
    rowSpecs: [
      { label: "Format", value: "Program" },
      { label: "Includes", value: "In-office + at-home" },
      { label: "Supervised", value: "MD" },
    ],
    rowCta: "Apply / consult",
    compare: { bestFor: "Acne, rosacea, eczema", series: "8-week program", downtime: "None", startsAt: "Consult" },
  },
  {
    slug: "corrective-facials",
    number: "04",
    category: "Maintenance",
    title: "Corrective Facials",
    titleLines: ["Corrective", "Facials"],
    rowTitleLines: ["Corrective", "Facials."],
    shortDescription:
      "Monthly maintenance with LED, microcurrent, nano-infusion, and barrier repair tailored to skin state.",
    rowDescription:
      "Monthly maintenance built around your needs. LED, microcurrent, nano-infusion, gua sha, oxygen, enzymes — chosen for skin state on the day, not a fixed menu.",
    priceLabel: "From $145 · 60 min",
    cardImage: { src: "/images/services/Microneedle-mesotherapy.webp", alt: "Corrective facial treatment" },
    concerns: [],
    outcomes: ["Maintain"],
    time: "standard",
    durationLabel: "60 min",
    visibleConcernTags: ["maintenance", "hydration", "barrier", "tone"],
    rowSpecs: [
      { label: "Starts at", value: "$145" },
      { label: "Frequency", value: "Monthly" },
      { label: "Downtime", value: "None" },
    ],
    rowCta: "Book facial",
    compare: { bestFor: "Maintenance, barrier, hydration", series: "Monthly", downtime: "None", startsAt: "$145" },
  },
  {
    slug: "hyperpigmentation",
    number: "05",
    category: "Tone",
    title: "Hyperpigmentation, Scar & Stretch Mark Revision",
    titleLines: ["Pigmentation", "& Scar Revision"],
    rowTitleLines: ["Hyperpigmentation,", "Scar & Stretch Mark", "Revision."],
    shortDescription:
      "Melasma, sun spots, acne marks, stretch marks. Safely on every Fitzpatrick tone.",
    rowDescription:
      "Melasma, sun spots, post-inflammatory marks, acne scars, surgical scars, stretch marks. Combined microneedling + targeted topicals, safely on every Fitzpatrick tone.",
    priceLabel: "Series of 3 – 6",
    cardImage: {
      src: "/images/before-after/before-and-after-acne-treatment-1a3103bf.webp",
      alt: "Hyperpigmentation before and after",
    },
    concerns: ["Pigmentation", "Scarring"],
    outcomes: ["Even tone"],
    time: "multi",
    durationLabel: "Series",
    visibleConcernTags: ["melasma", "PIH", "sun damage", "acne scars", "stretch marks"],
    rowSpecs: [
      { label: "Format", value: "Series of 3–6" },
      { label: "Per session", value: "From $295" },
      { label: "All tones", value: "Yes" },
    ],
    rowCta: "Book consultation",
    compare: { bestFor: "Melasma, sun spots, PIH", series: "3–6", downtime: "1–2 days", startsAt: "$295" },
  },
  {
    slug: "skin-tag-removal",
    number: "06",
    category: "Spot work",
    title: "Skin Tag, Cherry & Milia Removal",
    titleLines: ["Skin Tag, Cherry", "& Milia Removal"],
    rowTitleLines: ["Skin Tag, Cherry", "& Milia Removal."],
    shortDescription:
      "Skin tags, cherry angiomas, milia, sebaceous hyperplasia. Removed with high-frequency or plasma.",
    rowDescription:
      "Skin tags, cherry angiomas, milia, sebaceous hyperplasia, and keratosis-type growths — removed with high-frequency or plasma. Requires a current annual dermatology exam for clearance.",
    priceLabel: "From $35 / spot",
    cardImage: { src: "/images/stock/Doctor-dermatologist-examines-birthmark-of-patient-close-up.webp", alt: "Skin lesion close-up exam" },
    concerns: ["Skin tags"],
    outcomes: ["Define"],
    time: "short",
    durationLabel: "30 min",
    visibleConcernTags: ["skin tags", "cherry angiomas", "milia", "sebaceous hyperplasia"],
    rowSpecs: [
      { label: "Per spot", value: "From $35" },
      { label: "Sessions", value: "Usually 1" },
      { label: "Requires", value: "Annual derm exam" },
    ],
    rowCta: "Book consultation",
    compare: { bestFor: "Tags, milia, cherry angiomas", series: "1", downtime: "~5 days", startsAt: "$35/spot" },
  },
  {
    slug: "microblading-pmu",
    number: "07",
    category: "Brow & lip",
    title: "Microblading & Permanent Makeup",
    titleLines: ["Microblading", "& Permanent Makeup"],
    rowTitleLines: ["Microblading", "& Permanent Makeup."],
    shortDescription:
      "Hair-stroke brows, ombre powder, lip blush. By Beth Ward — 30+ years of color artistry.",
    rowDescription:
      "Hair-stroke brows, ombre powder, combination brows, brow correction, and lip blush by Beth Ward — 30+ years in permanent cosmetics. Custom pigment matching, meticulous safety protocols.",
    priceLabel: "From $625 · 2.5 hr",
    cardImage: { src: "/images/services/permanent-makeup-eyebrows.jpg", alt: "Microblading hair-stroke detail" },
    concerns: ["Brows & lips"],
    outcomes: ["Define"],
    time: "standard",
    durationLabel: "2.5 hr",
    visibleConcernTags: ["brows", "lip color", "correction"],
    rowSpecs: [
      { label: "Starts at", value: "$625" },
      { label: "Lasts", value: "Up to 3 yr" },
      { label: "Touch-up", value: "Included at 6 wk" },
    ],
    rowCta: "Book with Beth",
    compare: { bestFor: "Sparse brows, lip color", series: "1 + touch-up", downtime: "1 week peeling", startsAt: "$625" },
  },
  {
    slug: "postop-healing",
    number: "08",
    category: "Recovery",
    title: "Postoperative Healing",
    titleLines: ["Postoperative", "Healing"],
    rowTitleLines: ["Postoperative", "Healing."],
    shortDescription:
      "Lymphatic drainage, ultrasound, wood therapy, compression. Post-surgical recovery from liposuction, BBL, tummy tuck.",
    rowDescription:
      "Post-surgical care for liposuction, BBL, tummy tuck, breast augmentation, and facelift. Lymphatic drainage, ultrasound, wood therapy, compression, infrared/red LED, scar revision, and nutrition support.",
    priceLabel: "From $145 · Multi-visit",
    cardImage: { src: "/images/stock/woman-bikini-15.jpg", alt: "Postoperative recovery session" },
    concerns: ["Post-surgery"],
    outcomes: ["Heal"],
    time: "multi",
    durationLabel: "Multi-visit",
    visibleConcernTags: ["swelling", "fluid retention", "fibrosis", "scars"],
    rowSpecs: [
      { label: "Plan", value: "10+ / 3–4 mo" },
      { label: "Per session", value: "From $145" },
      { label: "Includes", value: "At-home training" },
    ],
    rowCta: "Book recovery plan",
    compare: { bestFor: "Liposuction, BBL, tummy tuck recovery", series: "10+", downtime: "None", startsAt: "$145" },
  },
];

export function homepageServices() {
  return services.slice(0, 6);
}

export const concernChips: ConcernTag[] = [
  "Acne", "Aging & lines", "Pores & texture", "Pigmentation",
  "Scarring", "Laxity", "Rosacea", "Skin tags", "Brows & lips", "Post-surgery",
];

export const outcomeChips: OutcomeTag[] = [
  "Regenerate", "Tighten", "Even tone", "Heal", "Maintain", "Define",
];

export const timeChips: Array<{ value: TimeBucket; label: string }> = [
  { value: "short", label: "< 60 min" },
  { value: "standard", label: "60–90 min" },
  { value: "multi", label: "Multi-visit" },
];
