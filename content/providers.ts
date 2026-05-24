import { site } from "./site";

export type ProviderSlug = "marley" | "sarita" | "beth" | "susan";

export type Provider = {
  slug: ProviderSlug;
  number: string;
  miniRole: string; // role label on the hero mini-grid card
  miniName: string; // name on the hero mini-grid card
  name: string;
  nameLines?: [string, string]; // for big name with line break
  credentialSuffix?: string; // "LE", "MD" — italic accent after name
  nameSmall: string; // small subtitle under big name
  role: string; // long role string (used on home spotlight only)
  portrait: { src: string; alt: string };
  meta: string[]; // 3 short meta items at top of bio row
  bio: string[]; // 1+ paragraphs
  credentials: Array<{ label: string; value: string }>;
  specialties: string[]; // tag chips
  ctaPrimary: { label: string; href: string };
  ctaGhost: { label: string; href: string };

  // Home-spotlight only: small pull-quote (currently unused on home; kept for type compatibility)
  licenseMeta?: string;
  spotlightQuote?: { text: string; who: string };
};

export const providers: Provider[] = [
  {
    slug: "marley",
    number: "01",
    miniRole: "Founder · LE",
    miniName: "Marley Bonnanzio",
    name: "Marley Bonnanzio",
    nameLines: ["Marley", "Bonnanzio,"],
    credentialSuffix: "LE",
    nameSmall: "Founder · Holistic Medical Esthetician",
    role: "Founder · Holistic Medical Esthetician",
    licenseMeta: "Founder · 14+ yr",
    portrait: { src: "/images/staff/marley-bonnanzio.jpg", alt: "Marley Bonnanzio" },
    meta: ["Provider · 01", "Licensed Esthetician (GA)", "Functional Nutrition Coach"],
    bio: [
      "Marley founded Skintuitive after a decade developing laser and medspa programs in Manhattan, where she led device selection, protocol design, and aesthetic education for a high-volume clinical practice.",
      "Her work today joins regenerative collagen-induction techniques — microneedling, plasma fibroblast, nano-infusion — with cosmeceutical chemistry and functional nutrition coaching. So the protocol that addresses your acne also addresses why it kept coming back.",
    ],
    credentials: [
      { label: "License", value: "LE · Licensed Esthetician (Georgia)" },
      { label: "Certifications", value: "Functional Nutrition Coach" },
      { label: "Training", value: "Medical aesthetics, cosmeceutical chemistry, NYC" },
      { label: "Experience", value: "14+ years · NYC & Atlanta" },
    ],
    specialties: [
      "Advanced microneedling",
      "Plasma fibroblast",
      "Acne & rosacea protocols",
      "Functional nutrition",
      "Anti-aging programs",
      "Pre-rejuvenation",
    ],
    ctaPrimary: { label: "Book with Marley", href: site.booking.href },
    ctaGhost: { label: "View her services", href: "/services" },
  },
  {
    slug: "sarita",
    number: "02",
    miniRole: "Supervising MD",
    miniName: "Dr. Sarita Prasad",
    name: "Dr. Sarita Prasad",
    nameLines: ["Dr. Sarita", "Prasad,"],
    credentialSuffix: "MD",
    nameSmall: "Supervising Physician · Functional Medicine",
    role: "Medical Director · Functional Medicine",
    portrait: { src: "/images/staff/sarita-prasad.jpg", alt: "Dr. Sarita Prasad" },
    meta: ["Provider · 02", "MD", "Board-Certified · Family + Functional Medicine"],
    bio: [
      "Dr. Prasad is a Board-Certified Functional Medicine and Family Medicine physician who provides medical oversight for Skintuitive's clinical protocols and complex skin condition cases. She approaches care with a root-cause, evidence-based, and prevention-first orientation.",
      "Her work pushes beyond pharmaceutical-only frameworks — pairing patient education, nutrition, lifestyle, and lab-informed planning with medical care when it's needed.",
    ],
    credentials: [
      { label: "Board certifications", value: "Family Medicine · Functional Medicine" },
      { label: "Role", value: "Supervising MD, Skintuitive" },
      { label: "Approach", value: "Root-cause · Evidence-based · Holistic" },
      { label: "Focus", value: "Skin conditions, women's health, prevention" },
    ],
    specialties: [
      "Functional medicine",
      "Skin condition oversight",
      "Hormonal acne",
      "Microbiome & gut health",
    ],
    ctaPrimary: { label: "Request medical consult", href: site.booking.href },
    ctaGhost: { label: "Holistic conditions program", href: "/services/holistic-conditions" },
  },
  {
    slug: "beth",
    number: "03",
    miniRole: "Permanent cosmetics",
    miniName: "Beth Ward",
    name: "Beth Ward",
    nameLines: ["Beth", "Ward"],
    credentialSuffix: undefined,
    nameSmall: "Microblading & Permanent Makeup",
    role: "Permanent Makeup Artist",
    portrait: { src: "/images/staff/beth-ward.jpg", alt: "Beth Ward" },
    meta: ["Provider · 03", "Permanent Cosmetics Artist", "30+ years experience"],
    bio: [
      "Beth has spent more than three decades in beauty and permanent cosmetics. Her work at Skintuitive focuses on microblading, eyebrow shading, ombre powder, combination brows, brow correction, and lip blush.",
      "She's known for color artistry, custom pigment matching, and rigorous safety protocols.",
    ],
    credentials: [
      { label: "Specialty", value: "Permanent cosmetics" },
      { label: "Techniques", value: "Microblading · Ombre · Combo · Correction · Lip blush" },
      { label: "Experience", value: "30+ years" },
      { label: "External brand", value: "Razed Brow" },
    ],
    specialties: ["Microblading", "Ombre powder", "Combo brows", "Brow correction", "Lip blush"],
    ctaPrimary: { label: "Book with Beth", href: site.booking.href },
    ctaGhost: { label: "Service details", href: "/services/microblading-pmu" },
  },
  {
    slug: "susan",
    number: "04",
    miniRole: "Esthetician · LE",
    miniName: "Susan Mejia",
    name: "Susan Mejia",
    nameLines: ["Susan", "Mejia,"],
    credentialSuffix: "LE",
    nameSmall: "Holistic Esthetician · Recovery & Wellness",
    role: "Licensed Esthetician",
    portrait: { src: "/images/staff/susan-mejia.jpg", alt: "Susan Mejia" },
    meta: ["Provider · 04", "Licensed Esthetician", "Wellness vitality"],
    bio: [
      "Susan focuses on holistic rejuvenation, wellness vitality plans, postoperative recovery, and cell renewal. Her sessions integrate lymphatic drainage, body-age resilience work, relaxation, and therapeutic massage techniques.",
    ],
    credentials: [
      { label: "License", value: "LE · Licensed Esthetician (Georgia)" },
      { label: "Focus", value: "Postop recovery · Vitality planning" },
      { label: "Modalities", value: "Lymphatic · Wood therapy · Compression · IR/LED" },
      { label: "Booking", value: "Open" },
    ],
    specialties: [
      "Lymphatic drainage",
      "Postoperative recovery",
      "Body-age resilience",
      "Cell renewal facials",
      "Therapeutic massage",
    ],
    ctaPrimary: { label: "Book with Susan", href: site.booking.href },
    ctaGhost: { label: "Postop recovery", href: "/services/postop-healing" },
  },
];

export const getProvider = (slug: ProviderSlug) => providers.find((p) => p.slug === slug)!;
