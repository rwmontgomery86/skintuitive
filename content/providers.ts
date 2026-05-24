export type ProviderSlug = "marley" | "sarita" | "beth" | "susan";

export type Provider = {
  slug: ProviderSlug;
  number: string;
  name: string;
  nameLines?: [string, string];
  credentialSuffix?: string;
  role: string;
  licenseMeta: string;
  portrait: { src: string; alt: string };
  bio: string[];
  credentials: Array<{ label: string; value: string }>;
  specialties: string[];
  spotlightQuote?: { text: string; who: string };
};

export const providers: Provider[] = [
  {
    slug: "marley",
    number: "01",
    name: "Marley Bonnanzio",
    nameLines: ["Marley", "Bonnanzio,"],
    credentialSuffix: "LE",
    role: "Founder · Holistic Medical Esthetician",
    licenseMeta: "Founder · 14+ yr",
    portrait: { src: "/images/staff/marley-bonnanzio.jpg", alt: "Marley Bonnanzio" },
    bio: [
      "Marley founded Skintuitive after a decade developing laser and medspa programs in Manhattan. Her work joins regenerative collagen induction, cosmeceutical chemistry, and functional nutrition coaching — so the protocol that addresses your acne also addresses why it kept coming back.",
    ],
    credentials: [
      { label: "License", value: "LE · Licensed Esthetician (GA)" },
      { label: "Certifications", value: "Functional Nutrition Coach" },
      { label: "Specialties", value: "Microneedling · Plasma Fibroblast\nAcne & rosacea protocols" },
      { label: "Experience", value: "14+ years · NYC & ATL" },
    ],
    specialties: ["Microneedling", "Plasma Fibroblast", "Acne & rosacea protocols"],
    spotlightQuote: {
      text: "It's the first time someone actually looked at me — not just at my prescription.",
      who: "Cindy J. · Patient since 2022",
    },
  },
  {
    slug: "sarita",
    number: "02",
    name: "Dr. Sarita Prasad",
    nameLines: ["Dr. Sarita", "Prasad,"],
    credentialSuffix: "MD",
    role: "Medical Director · Functional Medicine",
    licenseMeta: "Medical oversight",
    portrait: { src: "/images/staff/sarita-prasad.jpg", alt: "Dr. Sarita Prasad" },
    bio: [
      "Dr. Prasad provides medical oversight for Skintuitive's clinical protocols and consults on every functional-medicine case. Board-certified with additional training in integrative medicine.",
    ],
    credentials: [
      { label: "License", value: "MD · Board Certified" },
      { label: "Specialties", value: "Functional + integrative medicine" },
      { label: "Role", value: "Medical Director" },
    ],
    specialties: ["Functional medicine", "Integrative health"],
  },
  {
    slug: "beth",
    number: "03",
    name: "Beth Ward",
    nameLines: ["Beth", "Ward,"],
    credentialSuffix: "PMU",
    role: "Permanent Makeup Artist",
    licenseMeta: "30+ years",
    portrait: { src: "/images/staff/beth-ward.jpg", alt: "Beth Ward" },
    bio: [
      "Beth brings three decades of color artistry to microblading, ombre powder brows, and lip blush. Her aesthetic favors hair-stroke realism and color theory matched to undertone.",
    ],
    credentials: [
      { label: "Specialties", value: "Microblading · Powder brows\nLip blush" },
      { label: "Experience", value: "30+ years" },
    ],
    specialties: ["Microblading", "Powder brows", "Lip blush"],
  },
  {
    slug: "susan",
    number: "04",
    name: "Susan Mejia",
    nameLines: ["Susan", "Mejia,"],
    credentialSuffix: "LE",
    role: "Licensed Esthetician",
    licenseMeta: "Skin care",
    portrait: { src: "/images/staff/susan-mejia.jpg", alt: "Susan Mejia" },
    bio: [
      "Susan brings a quiet, methodical approach to corrective facials and postoperative skin healing.",
    ],
    credentials: [
      { label: "License", value: "LE · Licensed Esthetician (GA)" },
      { label: "Specialties", value: "Corrective facials\nPostop healing" },
    ],
    specialties: ["Corrective facials", "Postop healing"],
  },
];

export const getProvider = (slug: ProviderSlug) => providers.find((p) => p.slug === slug)!;
