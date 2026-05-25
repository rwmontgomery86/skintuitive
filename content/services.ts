// Service catalog — single source of truth for the home grid, the services
// page (finder + rows + compare table), and the 8 service detail pages.
//
// TODO: client to confirm — pricing, brand mentions (Procell, Dermapen,
// RevitaPen Pro), medical claims, and "10+ visits / 3–4 months" estimates.
//
// `detail` field powers /services/[slug] pages. All non-microneedling detail
// content is drafted; every block is annotated `// TODO: client to confirm`.

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

export type ServiceDetail = {
  heroLeadLong: string;
  heroImage: { src: string; alt: string };
  specs: Array<{ label: string; value: string; suffix?: string }>;
  bestFor: Array<{ title: string; body: string }>;
  process: Array<{ title: string; body: string }>;
  timeline: Array<{ when: string; title: string; body: string }>;
  provider: {
    slug: string;
    blurb: string;
  };
  pricing: Array<{
    label: string;
    name: string;
    price: string;
    unit?: string;
    featured?: boolean;
    inclusions: string[];
    cta: { label: string; href: string };
  }>;
  pricingNote?: string;
  prep: { heading: string; items: string[] };
  aftercare: { heading: string; items: string[] };
  faqs: Array<{ q: string; a: string }>;
  related: ServiceSlug[];
  finalCta: { eyebrow: string; titleLines: [string, string]; lead: string };
};

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

  // /services/[slug] detail page content
  detail?: ServiceDetail;
};

const BOOK = "/contact";

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
    // detail content from canonical handoff (service-microneedling.html) — verbatim
    detail: {
      heroLeadLong:
        "Controlled micro-channels stimulate your own collagen and elastin production. We offer Procell Microchanneling, Dermapen, Nano Infusion, and RevitaPen Pro — each chosen for the concern, your skin type, and the level of intervention we agreed at consultation.",
      heroImage: { src: "/images/services/Microneedling.jpg", alt: "Microneedling treatment in progress" },
      specs: [
        { label: "Starts at", value: "$325", suffix: "/ session" },
        { label: "Duration", value: "60", suffix: "min" },
        { label: "Series", value: "3 – 6", suffix: "sessions" },
        { label: "Downtime", value: "24 – 48", suffix: "hr flushing" },
      ],
      bestFor: [
        { title: "Loss of firmness & fine lines", body: "Stimulates fibroblasts to lay down fresh collagen and elastin — restoring spring to the cheeks, jawline, and neck." },
        { title: "Active acne & acne scarring", body: "Breaks up indented scar tissue and accelerates barrier repair without aggressive resurfacing or extended downtime." },
        { title: "Enlarged pores & uneven texture", body: "Refines pore architecture and smooths grain across cheeks, nose, and forehead — most visible by session three." },
        { title: "Hyperpigmentation & uneven tone", body: "Pairs with Nano Infusion of brightening actives to reduce melasma and post-inflammatory marks across every Fitzpatrick tone." },
        { title: "Stretch marks & body scars", body: "Effective on hips, thighs, abdomen, and surgical scars. Multi-session protocol; results compound visit over visit." },
        { title: "Thinning hair & scalp regrowth", body: "Procell Microchanneling on the scalp with growth-factor infusion to support follicle health and density." },
      ],
      process: [
        { title: "Controlled micro-injury", body: "A device tipped with sterile micro-needles creates thousands of clean vertical channels — calibrated to depth, your concern, and your tone." },
        { title: "Channels open, actives in", body: "While channels are open we infuse growth factors, peptides, or hyaluronic acid — chosen at consultation for the result we're driving." },
        { title: "Wound-healing cascade", body: "Your skin reads the micro-injury as a signal to rebuild. Platelets, then fibroblasts, then fresh collagen and elastin — over the next 4 – 6 weeks." },
        { title: "Compounding results", body: "One session jump-starts the response. A series of 3 – 6, spaced ~4 weeks apart, lets each round build on the last for durable change." },
      ],
      timeline: [
        { when: "Pre-treatment", title: "30-minute consultation, included.", body: "We review your skin history, current routine, medications, and goals — under magnification. If you're a fit, we book the first session for a later date." },
        { when: "During session", title: "60 minutes, mostly comfortable.", body: "20 minutes of topical numbing, then ~30 minutes of treatment, then a calming nano-infusion. Most people describe it as warm, not sharp." },
        { when: "Hours 0 – 24", title: "Pink, warm, slightly tight.", body: "Like a moderate sunburn. We send you home with the only serum you should use for the first 24 hours, plus written aftercare." },
        { when: "Days 1 – 3", title: "Flushing fades, light flaking begins.", body: "Skin can feel sandpaper-textured by day two. This is the old layer releasing — do not exfoliate or pick. Mineral SPF only outdoors." },
        { when: "Weeks 2 – 4", title: "Glow phase.", body: "Tone evens, pores look refined, makeup sits better. This is the visible part of the response — the structural rebuild is still underway underneath." },
        { when: "Months 2 – 6", title: "Collagen remodels, results compound.", body: "Firmness, scar softening, and tone improvements deepen over months. Series patients see step-changes after sessions 3 and 5." },
      ],
      provider: {
        slug: "marley",
        blurb: "Marley has performed thousands of microneedling sessions across NYC and Atlanta. She'll match the device, depth, and infusion to your tone and concern — and tell you honestly if you're not a good candidate.",
      },
      pricing: [
        {
          label: "Single session",
          name: "Try it once",
          price: "$325",
          unit: "/ session",
          inclusions: ["60-min treatment", "Device chosen at consult", "Calming nano-infusion", "Post-care serum to take home"],
          cta: { label: "Book single", href: BOOK },
        },
        {
          label: "Series of 3 · most chosen",
          name: "3-session series",
          price: "$875",
          unit: "/ total · save $100",
          featured: true,
          inclusions: ["Three 60-min treatments", "Mixed device strategy", "Growth-factor infusion included", "Progress photos at each visit", "Bonus: in-between maintenance facial"],
          cta: { label: "Book series", href: BOOK },
        },
        {
          label: "Series of 6 · max results",
          name: "6-session series",
          price: "$1,650",
          unit: "/ total · save $300",
          inclusions: ["Six 60-min treatments", "Includes exosomes (1 session)", "Includes PRP option (1 session)", "Photo documentation throughout", "Bonus: 2 maintenance facials"],
          cta: { label: "Book series", href: BOOK },
        },
      ],
      pricingNote:
        "Add-ons available: PRP (+$150), Exosomes (+$200), Meluma Peel (+$95), Pore Shrink booster (+$50), Procell hair regrowth zone (+$100). Cherry financing available on series.",
      prep: {
        heading: "For 5 – 7 days prior.",
        items: [
          "Stop retinoids, AHAs/BHAs, and benzoyl peroxide.",
          "Skip waxing, threading, or hair removal on the area.",
          "Avoid intentional sun exposure and tanning beds.",
          "Hydrate well and arrive with clean, product-free skin.",
          "Tell us about any new medications, antibiotics, or accutane history.",
        ],
      },
      aftercare: {
        heading: "For the first 5 – 7 days.",
        items: [
          "Use only the post-care serum we provide for 24 hours.",
          "Mineral SPF outdoors, every day, without exception.",
          "No retinoids, acids, or exfoliants for 5 days.",
          "Do not pick, scrub, or exfoliate flaking skin.",
          "Skip workouts that cause heavy sweat for 48 hours.",
        ],
      },
      faqs: [
        { q: "Does microneedling hurt?", a: "With topical numbing applied for 20 minutes before treatment, most people describe it as warm pressure, not sharp pain. The forehead and upper lip are the most sensitive zones." },
        { q: "Is it safe for darker skin tones?", a: "Yes. Mechanical microneedling does not use heat or light, so it is safe across the entire Fitzpatrick scale. We adjust depth and infusion based on tone to minimize any risk of post-inflammatory pigmentation." },
        { q: "How many sessions will I need?", a: "Most concerns respond visibly to 3 sessions spaced ~4 weeks apart. Scarring and stretch marks usually benefit from 6. We'll recommend a series at consultation but you're never locked in." },
        { q: "What's the difference between Procell, Dermapen, and Nano Infusion?", a: "Procell delivers human growth factors via microchanneling — best for collagen rebuild and scarring. Dermapen offers precise depth control for deeper work. Nano Infusion is the gentlest, no-downtime option for brightening and product delivery." },
        { q: "Can I do microneedling if I'm pregnant or nursing?", a: "We do not perform microneedling during pregnancy. While nursing, Nano Infusion may be appropriate — we'll discuss at consultation with your OB's clearance." },
        { q: "Can I combine microneedling with PRP or exosomes?", a: "Yes — both significantly enhance the regenerative response. PRP uses your own platelets; exosomes use lab-derived signaling molecules. We'll explain which is right for your goals and budget." },
      ],
      related: ["corrective-facials", "plasma-fibroblast", "hyperpigmentation"],
      finalCta: {
        eyebrow: "Start with a consult",
        titleLines: ["Curious if microneedling", "is right for your skin?"],
        lead: "Book a free 15-minute virtual consultation. We'll review your goals and skin history, then recommend a starting protocol — no charge, no commitment.",
      },
    },
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
    // TODO: client to confirm — pricing, session counts, and medical claims for plasma fibroblast
    detail: {
      heroLeadLong:
        "Nitrogen plasma creates a tiny arc that tightens the skin surface and stimulates fibroblasts deeper down. The result: a tightening and lifting effect on eyelids, around the eyes, neck, and lines — without incisions, sutures, or general anesthesia. Often referred to as “soft surgery.”",
      heroImage: { src: "/images/services/eyelid-lifting-fibroblast-procedure.webp", alt: "Plasma fibroblast eye treatment" },
      specs: [
        { label: "Starts at", value: "$450", suffix: "/ small area" },
        { label: "Duration", value: "90", suffix: "min" },
        { label: "Sessions", value: "1 – 2", suffix: "typical" },
        { label: "Downtime", value: "~ 1", suffix: "week visible" },
      ],
      bestFor: [
        { title: "Upper eyelid laxity (“lift”)", body: "The most-requested application. Tightens the eyelid skin to reduce hooding — often producing a more open, lifted eye without surgery." },
        { title: "Crow's feet & under-eye crepe", body: "Smooths fine crepiness around the eye where injectables and creams can't reach without overfilling." },
        { title: "Lip lines & perioral wrinkles", body: "Softens vertical lip lines (“smoker's lines”) that fillers tend to bridge but not erase." },
        { title: "Neck & jawline laxity", body: "Tightens loose skin under the chin and along the jawline for a more defined contour." },
        { title: "Stretch marks & loose abdominal skin", body: "Reduces the appearance of stretch marks and modest skin laxity on the abdomen — including post-pregnancy." },
        { title: "Benign skin lesions", body: "Removes skin tags, fibromas, and certain pigmented lesions in the same session — pending an annual derm exam." },
      ],
      process: [
        { title: "Mapped & numbed", body: "We map the treatment zone, photograph for reference, and apply topical numbing for 30 – 45 minutes — longer than microneedling, because this work goes deeper." },
        { title: "Plasma arc, dot by dot", body: "A handheld device sublimates a precise grid of micro-dots on the skin surface. No tool ever touches the skin — only the plasma arc." },
        { title: "Carbon crusts form", body: "Tiny brown crusts appear at each dot site. These are protective scabs — they must be left intact while the skin heals beneath them." },
        { title: "Sloughing & tightening", body: "Crusts fall off naturally over 5 – 10 days, revealing tightened skin. Collagen continues to remodel for 8 – 12 weeks beneath the surface." },
      ],
      timeline: [
        { when: "Pre-treatment", title: "Consultation & candidacy review.", body: "We confirm you're a fit (skin tone, medications, history of keloids, photosensitivity), photograph, and book the procedure for a later date." },
        { when: "Treatment day", title: "~90 minutes total.", body: "30 – 45 min of numbing, 30 – 45 min of plasma work. You'll smell a faint singed-hair note from the plasma arc; that's normal." },
        { when: "Days 1 – 3", title: "Swelling peaks (especially eyes).", body: "Eye-area treatments swell visibly — usually peaking on day 2. Cool compresses and head elevation overnight help." },
        { when: "Days 4 – 10", title: "Crusts dry and fall off.", body: "Do not pick. The new skin underneath is delicate and prone to pigmentation if disturbed." },
        { when: "Weeks 2 – 4", title: "Pink skin fades to normal.", body: "Mineral SPF is non-negotiable during this phase. New skin is photosensitive." },
        { when: "Months 2 – 3", title: "Final result settles.", body: "Collagen remodeling continues for 8 – 12 weeks. We decide together if a second session would add value." },
      ],
      provider: {
        slug: "marley",
        blurb: "Marley has performed plasma fibroblast on eyelids, necks, and stretch marks for clients on every Fitzpatrick tone. She'll show you photos of comparable cases at consult and tell you honestly whether one session or two will get you to your goal.",
      },
      pricing: [
        {
          label: "Single small area",
          name: "Upper lids OR crow's feet",
          price: "$450",
          unit: "/ session",
          inclusions: ["90-min session including numbing", "One small zone (upper lids, crow's feet, or perioral)", "Aftercare kit", "Photo documentation"],
          cta: { label: "Book consult", href: BOOK },
        },
        {
          label: "Larger area · most chosen",
          name: "Full eye zone or neck",
          price: "$750",
          unit: "/ session",
          featured: true,
          inclusions: ["Full upper + lower lids, OR full neck", "Extended numbing", "Aftercare kit", "Photo documentation", "8-week follow-up included"],
          cta: { label: "Book consult", href: BOOK },
        },
        {
          label: "Two areas bundled",
          name: "Eye + neck package",
          price: "$1,200",
          unit: "/ two areas · save $100",
          inclusions: ["Full eye zone + full neck", "Two separate session days", "Aftercare kit at each visit", "Photo documentation", "8-week follow-up included"],
          cta: { label: "Book consult", href: BOOK },
        },
      ],
      pricingNote:
        "Most clients see their result from one session; a second is sometimes recommended at the 12-week follow-up. Cherry financing available on packages.",
      prep: {
        heading: "For 7 days prior.",
        items: [
          "Stop retinoids, AHAs/BHAs, and exfoliants on the area.",
          "Avoid sun exposure and tanning beds for 4 weeks.",
          "No facial waxing or chemical peels in the prior 30 days.",
          "Tell us about any cold-sore history if treating around the lips.",
          "Arrive without makeup and with clean skin.",
        ],
      },
      aftercare: {
        heading: "For the first 10 – 14 days.",
        items: [
          "Do NOT pick at the carbon crusts — let them fall off naturally.",
          "Mineral SPF outdoors, every day, for the full 8 weeks.",
          "Cool compresses for swelling on day 1 – 2.",
          "Sleep with your head elevated for 2 nights if eye area was treated.",
          "No makeup over treated zones until crusts are gone.",
          "No saunas, steam rooms, or vigorous workouts for 7 days.",
        ],
      },
      faqs: [
        { q: "How much does plasma fibroblast hurt?", a: "With proper numbing, most clients rate it 3 – 5 out of 10 — sharp at first but tolerable. Eye-area work is the most sensitive. We numb for longer than microneedling because the work goes deeper." },
        { q: "How is this different from a surgical eyelid lift?", a: "Plasma fibroblast is non-surgical — no incisions, no sutures, no general anesthesia. It produces a meaningful but more modest result than surgery, with much less risk and downtime. For very heavy hooding, surgery may still be the better choice; we'll tell you honestly at consultation." },
        { q: "How long do results last?", a: "Most clients see results that last 3 – 5 years. Plasma fibroblast does not stop aging — it resets the clock. Maintenance touch-ups are an option, not a requirement." },
        { q: "Is it safe on darker skin tones?", a: "Plasma fibroblast carries a meaningful risk of hyper- or hypopigmentation in skin types V – VI. We assess candidacy carefully and may recommend a different protocol for the deepest tones." },
        { q: "Can I wear makeup after?", a: "Not over the treated area until all carbon crusts have fallen off naturally — typically 7 – 10 days. Makeup elsewhere on the face is fine." },
        { q: "Will I need a second session?", a: "About 60% of clients are satisfied after one session. We re-evaluate at the 12-week follow-up; a second session, if needed, is heavily discounted." },
      ],
      related: ["microneedling", "hyperpigmentation", "skin-tag-removal"],
      finalCta: {
        eyebrow: "Candidacy matters",
        titleLines: ["Plasma fibroblast is powerful —", "let's see if it fits."],
        lead: "Book a free 15-minute virtual consultation. We'll review your goals, your skin tone, your history, and tell you honestly whether plasma fibroblast or a different treatment is the better fit.",
      },
    },
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
    // TODO: client to confirm — program pricing, lab partner, MD scope, antibiotic protocol references
    detail: {
      heroLeadLong:
        "Acne, rosacea, and eczema rarely respond to topicals alone. We design a multi-week protocol that addresses inflammation at its source — gut microbiome, nutrition, sleep, lifestyle — alongside in-office work and a focused topical routine. Designed with our supervising MD.",
      heroImage: { src: "/images/stock/woman-touching-face-1.jpg", alt: "Holistic skin protocol consultation" },
      specs: [
        { label: "Format", value: "8-week", suffix: "program" },
        { label: "Visits", value: "4 – 5", suffix: "in-office" },
        { label: "Supervised", value: "MD", suffix: "oversight" },
        { label: "Starts at", value: "Consult", suffix: "to assess" },
      ],
      bestFor: [
        { title: "Adult hormonal acne", body: "Cyclical breakouts along the jawline, chin, and neck. We look at hormones, gut, and topical-routine interactions together." },
        { title: "Stubborn cystic acne", body: "Deep, painful cysts that don't respond to retinoids or BPO alone. Often need an internal-plus-external approach." },
        { title: "Rosacea flares & flushing", body: "Subtype-specific protocols (erythematotelangiectatic, papulopustular, phymatous) — not one-size-fits-all redness creams." },
        { title: "Eczema & barrier dysfunction", body: "Restore the lipid barrier, identify triggers (dietary, environmental, stress), and rebuild tolerance to your routine." },
        { title: "Post-pregnancy & postpartum skin", body: "Hormonal shifts trigger acne, melasma, and barrier issues. Protocols are pregnancy- and nursing-safe." },
        { title: "Skin that flares with stress", body: "When perfectly executed routines stop working under stress, the answer is usually inflammation and nervous-system input, not stronger products." },
      ],
      process: [
        { title: "Intake & MD review", body: "Skin history, medical history, medications, current routine, diet, sleep, stress. Reviewed by our supervising MD before we propose a plan." },
        { title: "Personalized protocol", body: "In-office treatments (sessions vary), targeted topicals, supplement guidance, and lifestyle inputs — sequenced over 8 weeks." },
        { title: "Weekly check-ins", body: "Brief virtual touchpoints to flag flares early and adjust. Most plans need at least one mid-course adjustment." },
        { title: "Maintenance & graduation", body: "Once stable, we transition you to a maintenance protocol you can run yourself — with quarterly check-ins by choice." },
      ],
      timeline: [
        { when: "Application", title: "30-minute intake call.", body: "We review your case and tell you honestly whether this program fits — or whether a different path (dermatologist referral, conventional medication, or our corrective facials) is better." },
        { when: "Week 1", title: "Baseline & topicals reset.", body: "Photos, baseline assessment, simplification of your current routine, and the first in-office treatment." },
        { when: "Weeks 2 – 4", title: "Stabilization phase.", body: "Address active inflammation. Weekly virtual touchpoints. Expect 1 – 2 in-office visits during this stretch." },
        { when: "Weeks 5 – 8", title: "Rebuilding phase.", body: "Once the worst is calmed, we reintroduce actives (retinoids, vitamin C) carefully, layer in barrier-repair work, and prep for maintenance." },
        { when: "Week 8", title: "Graduation review.", body: "Photo comparison vs. baseline, a written maintenance plan, and discussion of optional quarterly check-ins." },
        { when: "Months 3 – 12", title: "Optional maintenance.", body: "Quarterly check-ins, single-session top-ups (peels, microneedling, LED), and rapid-response support during flares." },
      ],
      provider: {
        slug: "sarita",
        blurb: "Dr. Prasad reviews every intake and signs off on every protocol. She brings a root-cause, evidence-based functional-medicine lens to acne, rosacea, and eczema cases that haven't responded to conventional care alone.",
      },
      pricing: [
        {
          label: "Starter · 4 weeks",
          name: "Reset",
          price: "$650",
          unit: "/ program",
          inclusions: ["Intake & MD review", "2 in-office sessions", "Custom topical plan", "Weekly virtual check-ins", "Aftercare kit"],
          cta: { label: "Apply", href: BOOK },
        },
        {
          label: "Standard · 8 weeks · most chosen",
          name: "Full program",
          price: "$1,150",
          unit: "/ program",
          featured: true,
          inclusions: ["Intake & MD review", "4 – 5 in-office sessions", "Custom topical & supplement plan", "Weekly virtual check-ins", "Aftercare kit + maintenance plan"],
          cta: { label: "Apply", href: BOOK },
        },
        {
          label: "Extended · 12 weeks",
          name: "Deep reset",
          price: "$1,650",
          unit: "/ program",
          inclusions: ["Intake & MD review", "6 – 7 in-office sessions", "Custom topical & supplement plan", "Weekly virtual check-ins", "Aftercare kit + maintenance plan", "One quarterly check-in included"],
          cta: { label: "Apply", href: BOOK },
        },
      ],
      pricingNote:
        "We ask every applicant to start with a no-charge 15-minute call to confirm fit. This is not a fast aesthetic service — it's a real protocol. Cherry financing available.",
      prep: {
        heading: "Before your intake.",
        items: [
          "Photograph your current breakout pattern in good light.",
          "Bring a list of every topical and supplement you currently use.",
          "Note medications (including birth control or hormone therapy).",
          "Think about flare triggers you've already noticed.",
          "Don't make routine changes in the 7 days before intake.",
        ],
      },
      aftercare: {
        heading: "While in the program.",
        items: [
          "Use only the products on your written protocol — no extras.",
          "Mineral SPF daily, indoors and out.",
          "Submit weekly photos to your check-in thread.",
          "Flag any new prescriptions or supplements immediately.",
          "Reach out at the first sign of a flare, not after.",
          "Don't ghost — even bad weeks are useful data.",
        ],
      },
      faqs: [
        { q: "Is this medical treatment?", a: "Our supervising MD oversees the protocol, but the program is integrative — it pairs evidence-based topicals and in-office work with nutrition, lifestyle, and barrier-repair guidance. If you need prescription medication (Accutane, antibiotics, hormonal therapy), we'll refer you to a dermatologist or your PCP." },
        { q: "Will I need to change my diet?", a: "Maybe. We don't promote restrictive elimination diets, but we do look at the food–skin axis honestly. Most plans include small, targeted adjustments — not overhauls." },
        { q: "What if I'm already seeing a dermatologist?", a: "Perfect. We coordinate with your dermatologist where it's helpful. We won't override prescription protocols." },
        { q: "Can I do this while pregnant or nursing?", a: "Yes — the protocol is fully customized to be pregnancy- and nursing-safe. We exclude retinoids, salicylic acid above safe thresholds, and certain supplements." },
        { q: "What if it doesn't work?", a: "We'll know within 4 weeks. If you're not responding, we re-evaluate honestly — sometimes the right answer is a referral, not more of our program." },
        { q: "Do you accept insurance?", a: "No. This is an out-of-pocket integrative program. We accept HSA/FSA in some cases — ask at intake." },
      ],
      related: ["corrective-facials", "microneedling", "hyperpigmentation"],
      finalCta: {
        eyebrow: "Start with intake",
        titleLines: ["Stubborn skin condition?", "Let's find the cause."],
        lead: "Book a free 15-minute intake call. We'll review your case honestly and tell you whether the program is a fit — or whether a different path serves you better.",
      },
    },
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
    // TODO: client to confirm — facial pricing tiers, membership terms, modality menu
    detail: {
      heroLeadLong:
        "Monthly maintenance built around what your skin actually needs that day — not a fixed menu. We pull from LED, microcurrent, nano-infusion, gua sha, oxygen, enzymes, and lymphatic work. Designed to keep you stable between bigger interventions.",
      heroImage: { src: "/images/services/Microneedle-mesotherapy.webp", alt: "Corrective facial treatment" },
      specs: [
        { label: "Starts at", value: "$145", suffix: "/ session" },
        { label: "Duration", value: "60", suffix: "min" },
        { label: "Frequency", value: "Every", suffix: "4 – 6 wk" },
        { label: "Downtime", value: "None", suffix: "" },
      ],
      bestFor: [
        { title: "Maintenance between bigger work", body: "Keep your skin stable between microneedling series or seasonal peels. Most clients run a monthly cadence." },
        { title: "Dehydration & dull skin", body: "Nano-infusion of hyaluronic acid and electrolytes restores plumpness in one session — most visible the next morning." },
        { title: "Barrier repair & sensitivity", body: "Calming protocols (oxygen, LED red, barrier-repair masks) for skin that's reactive, post-treatment, or seasonally compromised." },
        { title: "Pre-event glow", body: "Time it 3 – 5 days before a wedding, photoshoot, or event for visible refinement without redness or downtime." },
        { title: "Lymphatic facial massage", body: "Gua sha and manual drainage reduce puffiness, improve circulation, and define the jawline. Excellent the morning after travel or salt." },
        { title: "Acne-prone maintenance", body: "Gentle enzyme work, extraction where needed, blue LED for bacterial load. Keeps active skin in check without aggression." },
      ],
      process: [
        { title: "Skin check & double cleanse", body: "We start with a quick review of how your skin is behaving this week, then a thorough double cleanse and tone." },
        { title: "Treatment customization", body: "Based on what we see, we choose the modality stack: peel vs. enzyme, microcurrent vs. lymphatic, LED color, infusion serums. Different every visit." },
        { title: "Active treatment", body: "30 – 40 minutes of hands-on work. This is the part most people describe as the best hour of their month." },
        { title: "Finish & home plan", body: "SPF, takeaway notes on what your skin responded to, and any tweaks to your home routine." },
      ],
      timeline: [
        { when: "Pre-visit", title: "Tell us what's going on.", body: "A quick form before each visit (or a text to us) — what's flaring, what you love, what you want from this session." },
        { when: "On arrival", title: "5-min consult.", body: "Sit, water, brief check-in. We adjust the planned protocol if your skin needs something different than expected." },
        { when: "Session", title: "60 minutes, deeply restorative.", body: "Hands-on the whole time. Most clients leave glowing, calm, and asleep in their car for a minute." },
        { when: "24 – 48 hours", title: "Peak glow.", body: "Most facial benefits crest the day after. Makeup sits better, tone is more even, skin feels denser." },
        { when: "Weeks 2 – 4", title: "Maintenance phase.", body: "Skin holds the result. This is when home routine carries the load." },
      ],
      provider: {
        slug: "marley",
        blurb: "Marley designs each facial as a corrective protocol, not a relaxing menu. She'll tell you which modalities your skin needs this week — and which ones are a waste of your money.",
      },
      pricing: [
        {
          label: "Single visit",
          name: "Drop-in facial",
          price: "$145",
          unit: "/ session",
          inclusions: ["60-min customized facial", "Skin check & home plan", "Mineral SPF send-off"],
          cta: { label: "Book single", href: BOOK },
        },
        {
          label: "Membership · most chosen",
          name: "3-month membership",
          price: "$390",
          unit: "/ 3 months · save $45",
          featured: true,
          inclusions: ["One facial per month for 3 months", "10% off any add-on", "Priority booking", "Carry-over allowed (within 60 days)"],
          cta: { label: "Start membership", href: BOOK },
        },
        {
          label: "Membership",
          name: "6-month membership",
          price: "$750",
          unit: "/ 6 months · save $120",
          inclusions: ["One facial per month for 6 months", "15% off any add-on", "Priority booking", "Carry-over allowed (within 60 days)", "One complimentary LED upgrade"],
          cta: { label: "Start membership", href: BOOK },
        },
      ],
      pricingNote:
        "Add-ons available: dermaplane (+$40), LED upgrade (+$30), gua sha extension (+$25), Meluma Peel (+$95), Nano Infusion booster (+$50).",
      prep: {
        heading: "For your visit.",
        items: [
          "Arrive 5 minutes early; skip caffeine if you're sensitive.",
          "Bring a list of any new products you've added.",
          "Tell us about recent retinoid or acid use.",
          "If using prescription topicals, pause per your protocol.",
          "Hydrate well the day of.",
        ],
      },
      aftercare: {
        heading: "For the next 24 hours.",
        items: [
          "Mineral SPF outdoors, always.",
          "Skip retinoids and exfoliating acids that night.",
          "Drink water — many modalities are mildly lymphatic.",
          "No heavy makeup for 12 hours if extractions were done.",
          "Take a photo — you'll thank yourself when you forget how good your skin looked.",
        ],
      },
      faqs: [
        { q: "How often should I come in?", a: "Monthly is the sweet spot for most clients. Every 6 weeks is acceptable for stable, low-maintenance skin. Acne-prone or transitioning skin may benefit from every 3 weeks for a stretch." },
        { q: "Is this a relaxing facial or a results facial?", a: "Both. Each session is corrective in intent — we're using modalities that produce real change — but the experience is also genuinely restorative. You can have it both ways." },
        { q: "Will I leave red or peeling?", a: "Rarely. Our facials are no-downtime by default. If we're using something more aggressive (like a Meluma Peel add-on), we'll tell you to schedule it with a quiet weekend ahead." },
        { q: "Can I do this between microneedling sessions?", a: "Yes — and we recommend it. A nano-infusion or LED facial 2 weeks after a microneedling session helps lock in results." },
        { q: "Do you do extractions?", a: "When indicated and asked for. We don't pursue extractions aggressively in every visit — that's how barrier damage starts." },
        { q: "Can I bring a friend?", a: "Not into the same room, but we love a friend-pair booking. Ask when scheduling." },
      ],
      related: ["microneedling", "hyperpigmentation", "holistic-conditions"],
      finalCta: {
        eyebrow: "Monthly maintenance",
        titleLines: ["The best hour", "of your month."],
        lead: "Try a single facial, or start with the membership. Either way: 60 minutes that compound into real change over the year.",
      },
    },
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
    // TODO: client to confirm — pricing tiers, topical brands, melasma protocol references
    detail: {
      heroLeadLong:
        "Melasma, sun spots, post-inflammatory marks, acne and surgical scars, stretch marks. We combine microneedling and Nano Infusion with targeted topicals — designed to work safely on every Fitzpatrick tone, including the deepest, where light-based devices often can't go.",
      heroImage: { src: "/images/before-after/before-and-after-acne-treatment-1a3103bf.webp", alt: "Hyperpigmentation before and after" },
      specs: [
        { label: "Starts at", value: "$295", suffix: "/ session" },
        { label: "Duration", value: "60 – 75", suffix: "min" },
        { label: "Series", value: "3 – 6", suffix: "sessions" },
        { label: "Downtime", value: "1 – 2", suffix: "days" },
      ],
      bestFor: [
        { title: "Melasma", body: "Hormonal pigmentation that's often worsened by light-based devices. Our mechanical-plus-topical approach is one of the safer paths." },
        { title: "Sun spots & age spots", body: "Discrete brown spots from cumulative UV exposure. Often respond well to a 3-session protocol." },
        { title: "Post-inflammatory hyperpigmentation (PIH)", body: "The dark marks left behind after acne, ingrown hairs, or trauma. More common — and harder to resolve — in deeper skin tones." },
        { title: "Acne scarring (indented)", body: "Boxcar and rolling scars respond to deeper microneedling combined with focused topical actives." },
        { title: "Stretch marks", body: "Pink/red (early) marks respond fastest; silver/white (mature) marks need more sessions but soften meaningfully." },
        { title: "Surgical & traumatic scars", body: "Post-surgical scars, healed burns, and traumatic scars all soften with patient, sequenced work. Must be fully healed first." },
      ],
      process: [
        { title: "Tone & history review", body: "Fitzpatrick assessment, photo documentation, history of any prior pigment treatments (laser, IPL, peels). Some prior treatments narrow our options." },
        { title: "Topical preparation", body: "We start you on a 2 – 4 week topical primer — tyrosinase inhibitors, antioxidants — to suppress melanocyte activity before any in-office work." },
        { title: "Microneedling + infusion", body: "Sessions combine controlled microchanneling with infusion of brightening actives. Depth and pass count are tone-adjusted." },
        { title: "Long-term protection", body: "SPF discipline and a maintenance topical routine. Without these, pigmentation almost always returns." },
      ],
      timeline: [
        { when: "Pre-treatment", title: "Consultation & priming.", body: "We assess, photograph, and start you on a topical primer 2 – 4 weeks before the first in-office session." },
        { when: "Session day", title: "60 – 75 minutes, mostly comfortable.", body: "20 min topical numbing, 30 – 40 min combined microneedling and brightening infusion, finishing serum." },
        { when: "Days 1 – 2", title: "Light flushing, minor flaking.", body: "Less downtime than standard microneedling because depth is calibrated for tone. Mineral SPF starts immediately." },
        { when: "Weeks 2 – 4", title: "First fading visible.", body: "Darkest spots begin to lift. Tone evens. The full response builds across the series." },
        { when: "Sessions 3 – 6", title: "Compounding fading.", body: "Each session deepens the response. Photo comparison at sessions 3 and 6 is usually the gut-check moment." },
        { when: "Months 3 – 6", title: "Maintenance phase.", body: "Quarterly maintenance and ongoing topical discipline keep results durable. Sun discipline is non-negotiable." },
      ],
      provider: {
        slug: "marley",
        blurb: "Marley has treated melasma, PIH, and acne scarring across every Fitzpatrick tone. She'll explain honestly which patterns respond fastest, which need patience, and which won't fully clear — before you commit to a series.",
      },
      pricing: [
        {
          label: "Single session",
          name: "Test session",
          price: "$295",
          unit: "/ session",
          inclusions: ["60-min combined treatment", "Brightening infusion", "Topical primer kit", "Photo documentation"],
          cta: { label: "Book single", href: BOOK },
        },
        {
          label: "Series of 3 · most chosen",
          name: "3-session series",
          price: "$795",
          unit: "/ total · save $90",
          featured: true,
          inclusions: ["Three sessions, ~4 weeks apart", "Topical primer & maintenance kit", "Progress photos at each visit", "Mid-series adjustment call"],
          cta: { label: "Book series", href: BOOK },
        },
        {
          label: "Series of 6 · max results",
          name: "6-session series",
          price: "$1,495",
          unit: "/ total · save $275",
          inclusions: ["Six sessions, ~4 weeks apart", "Topical primer & full maintenance kit", "Progress photos throughout", "Two mid-series adjustment calls", "Bonus: one corrective facial"],
          cta: { label: "Book series", href: BOOK },
        },
      ],
      pricingNote:
        "Topicals add ~$95 – $180 depending on protocol. We do not perform these treatments without a pre-treatment topical priming phase — it doubles the success rate.",
      prep: {
        heading: "For 4 weeks prior.",
        items: [
          "Start the topical primer we prescribe at consultation.",
          "Strict mineral SPF daily, indoors and out.",
          "No tanning beds, sun exposure, or self-tanner on the area.",
          "Stop retinoids 5 days before each session.",
          "Tell us about any flare of acne or eczema before booking.",
        ],
      },
      aftercare: {
        heading: "For 4 weeks after each session.",
        items: [
          "Mineral SPF, daily, no exceptions.",
          "No retinoids or acids for 5 – 7 days post-session.",
          "Hands-off — picking is the fastest way to make pigmentation worse.",
          "Resume topical primer at day 7.",
          "Photograph at day 14 in identical lighting for honest comparison.",
          "Avoid heat (saunas, hot yoga) for 48 hours.",
        ],
      },
      faqs: [
        { q: "Will my melasma come back?", a: "Honestly: it can. Melasma is hormonal and triggered by UV. With strict SPF and topical maintenance, most clients hold their results for years. Without those, pigmentation returns. We'll set expectations clearly at consultation." },
        { q: "Is this safe on dark skin?", a: "Yes — that's much of why our approach is mechanical rather than light-based. We adjust depth, pass count, and topical strength for tone." },
        { q: "How is this different from a laser or IPL?", a: "Laser and IPL use heat and light energy. They're powerful but carry meaningful risk in skin types IV – VI. Our microneedling-plus-topical approach achieves comparable results in pigment work on most tones, with much lower risk." },
        { q: "How many sessions will I really need?", a: "Most melasma cases need 4 – 6. Discrete sun spots often clear in 2 – 3. Acne scarring usually wants 6. We'll re-evaluate honestly at session 3." },
        { q: "Can I do this while pregnant?", a: "No. Tyrosinase inhibitors and some of our actives are not recommended in pregnancy. We can resume after delivery and nursing." },
        { q: "Will old stretch marks really fade?", a: "Silver/white stretch marks soften — they don't disappear. Pink/red stretch marks (still inflamed) respond more dramatically. We'll show you realistic before/afters at consultation." },
      ],
      related: ["microneedling", "corrective-facials", "plasma-fibroblast"],
      finalCta: {
        eyebrow: "Patience pays",
        titleLines: ["Pigmentation is the long game.", "We'll run it with you."],
        lead: "Book a free 15-minute consultation. We'll assess your tone, your pattern, and tell you honestly what to expect — including how long it'll take.",
      },
    },
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
    // TODO: client to confirm — per-spot pricing tiers, derm-clearance requirement language
    detail: {
      heroLeadLong:
        "Skin tags, cherry angiomas, milia, sebaceous hyperplasia, and keratosis-type growths — removed cleanly with high-frequency electro-desiccation or plasma. Most lesions are gone in one visit. A current annual dermatology exam is required before we touch anything.",
      heroImage: { src: "/images/stock/Doctor-dermatologist-examines-birthmark-of-patient-close-up.webp", alt: "Skin lesion close-up exam" },
      specs: [
        { label: "Per spot", value: "From $35", suffix: "/ lesion" },
        { label: "Duration", value: "15 – 30", suffix: "min" },
        { label: "Sessions", value: "Usually", suffix: "1" },
        { label: "Downtime", value: "~ 5", suffix: "days" },
      ],
      bestFor: [
        { title: "Skin tags (acrochordons)", body: "Small soft growths on the neck, underarms, eyelids, and groin. Quick and painless to remove with high-frequency." },
        { title: "Cherry angiomas", body: "Bright red, dome-shaped vascular spots — most common on the torso. Vanish in one treatment with minimal trace." },
        { title: "Milia", body: "Tiny white cysts under the skin, often around the eyes. Extracted with a fine lance — no scarring when done correctly." },
        { title: "Sebaceous hyperplasia", body: "Soft yellowish bumps from enlarged oil glands. Reduced or removed with targeted high-frequency." },
        { title: "Seborrheic keratoses", body: "Waxy, stuck-on-looking growths. We treat smaller lesions; larger or atypical ones get a dermatologist referral." },
        { title: "Small fibromas & DPN (Dermatosis Papulosa Nigra)", body: "Small benign bumps common in deeper skin tones. Treated carefully with tone-appropriate technique." },
      ],
      process: [
        { title: "Photograph & flag for clearance", body: "We map every lesion, photograph, and cross-check against your most recent dermatology exam. Anything not cleared gets referred — no exceptions." },
        { title: "Topical numb (optional)", body: "Most lesions are quick enough to skip numbing. For sensitive areas (eyelids, lips), we apply topical anesthetic for 20 minutes." },
        { title: "Targeted removal", body: "High-frequency electro-desiccation or plasma — chosen by lesion type. Each lesion takes seconds." },
        { title: "Heal & monitor", body: "We send you home with aftercare and check-back instructions. Most lesions heal cleanly in 5 – 10 days." },
      ],
      timeline: [
        { when: "Pre-visit", title: "Dermatology clearance.", body: "Send us your most recent dermatology exam note (within 12 months). If you don't have one, we'll refer you — every lesion needs to be assessed for malignancy risk before we treat." },
        { when: "Treatment day", title: "15 – 30 minutes.", body: "Quick. Most clients are in and out in under half an hour. Bring a hat and SPF for the ride home if facial lesions were treated." },
        { when: "Days 1 – 5", title: "Crust forms, sloughs.", body: "Tiny brown crusts at each spot. Do not pick. Keep clean and dry; aftercare ointment 2 – 3x daily." },
        { when: "Days 5 – 10", title: "Crusts fall off.", body: "Skin underneath is pink and slightly thinner. Mineral SPF mandatory while pink fades." },
        { when: "Weeks 2 – 6", title: "Pink fades to normal.", body: "Most lesions heal with no visible trace. Cherry angiomas occasionally leave a faint pink dot that resolves over months." },
      ],
      provider: {
        slug: "marley",
        blurb: "Marley performs lesion removal with the same care she brings to facial work — methodical, conservative, and tone-aware. If anything you point to looks atypical, you'll get a referral instead of a removal.",
      },
      pricing: [
        {
          label: "Single spot",
          name: "1 lesion",
          price: "$35",
          unit: "/ spot",
          inclusions: ["Consultation & clearance check", "Single lesion removal", "Aftercare ointment", "Healing instructions"],
          cta: { label: "Book single", href: BOOK },
        },
        {
          label: "Small cluster · most chosen",
          name: "3 – 5 spots",
          price: "$125",
          unit: "/ session · save up to $50",
          featured: true,
          inclusions: ["Up to 5 lesions in one visit", "Topical numbing included", "Aftercare ointment", "Healing instructions", "30-day check-in"],
          cta: { label: "Book session", href: BOOK },
        },
        {
          label: "Larger cluster",
          name: "6 – 12 spots",
          price: "$250",
          unit: "/ session · save up to $170",
          inclusions: ["Up to 12 lesions in one visit", "Topical numbing included", "Aftercare ointment", "Healing instructions", "30-day check-in", "Photo documentation"],
          cta: { label: "Book session", href: BOOK },
        },
      ],
      pricingNote:
        "Pricing is per session, not per appointment hour. For very large counts (DPN, widespread cherry angiomas), we'll quote a package at consultation.",
      prep: {
        heading: "Before your visit.",
        items: [
          "Bring your most recent dermatology exam note (within 12 months).",
          "Photograph each lesion you want treated, in good light.",
          "Skip retinoids on the area for 5 days prior.",
          "Avoid sun exposure on the area for 2 weeks prior.",
          "Tell us if you've had any lesion change in size, color, or texture.",
        ],
      },
      aftercare: {
        heading: "For 7 – 10 days.",
        items: [
          "Apply aftercare ointment 2 – 3x daily until crusts fall off.",
          "Do NOT pick — picking causes pigmentation and scarring.",
          "Mineral SPF on facial lesions, every day, for 6 weeks.",
          "Keep dry — no swimming, hot tubs, or saunas for 7 days.",
          "Avoid makeup over treated spots until fully healed.",
        ],
      },
      faqs: [
        { q: "Why do I need a dermatology exam first?", a: "We are licensed estheticians, not dermatologists. We do not diagnose lesions — and any lesion could in principle be a melanoma or other malignancy that needs a biopsy, not removal. A current dermatology clearance protects you. No exceptions." },
        { q: "Will there be a scar?", a: "Skin tags and milia almost never leave a trace. Cherry angiomas occasionally leave a faint pink mark that fades. Sebaceous hyperplasia in deeper skin tones can leave subtle pigmentation — we treat conservatively to minimize this." },
        { q: "Can you remove moles?", a: "No. Pigmented moles must be evaluated by a dermatologist; if removal is indicated, they should be excised and biopsied. We do not treat moles." },
        { q: "Does it hurt?", a: "Most lesions are seconds-fast and feel like a quick pinch. For sensitive areas we use topical numbing." },
        { q: "Will my insurance cover this?", a: "No — these are cosmetic removals. Save your dermatology visit for medical exam and any medically-indicated removals; come to us for the cosmetic ones." },
        { q: "Will more skin tags grow back?", a: "Not in the spots we treat. But if you're prone to skin tags, new ones can grow elsewhere. Maintenance visits are common." },
      ],
      related: ["plasma-fibroblast", "corrective-facials", "microneedling"],
      finalCta: {
        eyebrow: "Cleared & ready",
        titleLines: ["A handful of small things,", "gone in one visit."],
        lead: "Bring your dermatology clearance and a list of what bothers you. Most clients walk out lighter — literally.",
      },
    },
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
    // TODO: client to confirm — pricing across techniques, touch-up policy, correction pricing
    detail: {
      heroLeadLong:
        "Hair-stroke brows, ombre powder, combination brows, brow correction, and lip blush — by Beth Ward, 30+ years in permanent cosmetics. Custom pigment matching for your undertone, meticulous safety protocols, and an aesthetic that reads natural in every light.",
      heroImage: { src: "/images/services/permanent-makeup-eyebrows.jpg", alt: "Microblading hair-stroke detail" },
      specs: [
        { label: "Starts at", value: "$625", suffix: "/ procedure" },
        { label: "Duration", value: "2.5 – 3", suffix: "hr" },
        { label: "Lasts", value: "Up to 3", suffix: "years" },
        { label: "Touch-up", value: "6 – 8 wk", suffix: "included" },
      ],
      bestFor: [
        { title: "Sparse or over-plucked brows", body: "Hair-stroke microblading rebuilds density with strokes that mimic real hairs. The most natural-looking technique for thin brows." },
        { title: "Brows that won't hold a pencil", body: "Oily skin, exercise routines, humid climates — if pencil and powder don't stay put, ombre or combo brows do." },
        { title: "Asymmetric or uneven brows", body: "Brows that drift different shapes through the day. Combo brows fix both line and fill in one procedure." },
        { title: "Lip color & definition", body: "Lip blush adds soft color, defines edges, and corrects asymmetry. Reads like a tinted gloss that never wears off." },
        { title: "Lost pigmentation from age or scarring", body: "Pigment restoration in brows or lips lost to aging, alopecia, or scarring." },
        { title: "Brow correction & re-work", body: "Old microblading from another artist, faded, ashy, or shape-wrong. Color correction and re-shape — fixable in most cases." },
      ],
      process: [
        { title: "Consultation & design", body: "We map your brow or lip shape from your bone structure, your features, and your goals. Pigment is custom-matched to your undertone. Nothing gets done until you approve the drawing." },
        { title: "Numbing & first pass", body: "Topical numbing for 30 – 40 minutes. First pass deposits pigment at a conservative depth — we'd rather go back twice than overdo it." },
        { title: "Color check & second pass", body: "We re-evaluate color after the first pass and adjust. Final pass refines density and edges." },
        { title: "Heal & touch-up", body: "Pigment looks ~30% darker in the first week, then peels, then settles. A complimentary touch-up at 6 – 8 weeks fine-tunes the final result." },
      ],
      timeline: [
        { when: "Pre-procedure", title: "Consultation + booking.", body: "We confirm candidacy, design intent, and contraindications. A deposit holds your procedure date; full balance is due at appointment." },
        { when: "Procedure day", title: "2.5 – 3 hours.", body: "Design (30 – 45 min), numbing (30 – 40 min), procedure (60 – 90 min). Bring water and a snack — long appointment." },
        { when: "Days 1 – 7", title: "Dark, then darker, then peel.", body: "Brows/lips look more saturated than the final result for the first week. Day 4 – 7: peeling. This is normal. Do not pick." },
        { when: "Weeks 2 – 4", title: "Color settles.", body: "Pigment lightens 30 – 40% from peak. Edges soften. The final color reveals itself." },
        { when: "Week 6 – 8", title: "Complimentary touch-up.", body: "Beth reviews healing, fills gaps, refines shape, and adjusts color if needed. This is included — not optional." },
        { when: "Year 1 – 3", title: "Long-term wear.", body: "Pigment fades gradually. Annual refresh recommended at 12 – 18 months. Sun exposure accelerates fade." },
      ],
      provider: {
        slug: "beth",
        blurb: "Beth has spent more than three decades in permanent cosmetics. Her work is known for natural-looking density, conservative color choice, and a refusal to overdo. She'll tell you no if your design ask isn't going to age well.",
      },
      pricing: [
        {
          label: "Single procedure",
          name: "Brows or lips",
          price: "$625",
          unit: "/ procedure",
          inclusions: ["Consultation & custom design", "Microblading, ombre, or combo brows", "OR lip blush", "Complimentary touch-up at 6 – 8 weeks", "Aftercare kit"],
          cta: { label: "Book with Beth", href: BOOK },
        },
        {
          label: "Brow + lip · most chosen",
          name: "Combination package",
          price: "$1,150",
          unit: "/ two procedures · save $100",
          featured: true,
          inclusions: ["Both brow procedure and lip blush", "Two separate appointments", "Custom pigment matching for both", "Touch-up at 6 – 8 weeks for each", "Aftercare kit"],
          cta: { label: "Book package", href: BOOK },
        },
        {
          label: "Annual refresh",
          name: "Yearly touch-up",
          price: "$295",
          unit: "/ procedure",
          inclusions: ["For returning clients (within 18 months)", "Shape adjustment", "Color refresh", "Aftercare kit"],
          cta: { label: "Book refresh", href: BOOK },
        },
      ],
      pricingNote:
        "Color correction (work from another artist) is quoted at consultation — $725 – $950 depending on what's there. Removal is a separate process; we can refer. Deposit of $150 required to hold your booking.",
      prep: {
        heading: "For the week before.",
        items: [
          "No retinoids, AHAs/BHAs on or around the treatment area for 7 days.",
          "No tanning or sun exposure on the area for 2 weeks.",
          "No alcohol or blood thinners (incl. ibuprofen) 24 hours before.",
          "Skip caffeine the morning of — it increases bleeding.",
          "Eat a real meal before the procedure.",
          "Bring a friend if you'd like a second opinion on shape.",
        ],
      },
      aftercare: {
        heading: "For 10 – 14 days.",
        items: [
          "Keep the area clean and dry — pat with a damp cotton round, do not rub.",
          "Apply aftercare ointment per Beth's written instructions.",
          "Do NOT pick or scratch when peeling starts.",
          "No swimming, saunas, hot tubs, or hot yoga for 14 days.",
          "Mineral SPF on healed brows/lips, every day, indefinitely.",
          "No makeup over the treatment area until fully peeled.",
        ],
      },
      faqs: [
        { q: "Will it look natural?", a: "Yes — that's Beth's entire aesthetic. Color is matched to your undertone, density is conservative, and shape follows your face. People notice you look better, not that you have PMU." },
        { q: "How long does it last?", a: "Brows: typically 18 months to 3 years before significant fading. Lip blush: 2 – 4 years. Annual touch-ups extend wear and keep color fresh." },
        { q: "Does it hurt?", a: "Brows: mild — a 3 out of 10 with numbing. Lips: more sensitive — a 4 – 6 with numbing. Most clients are surprised by how tolerable it is." },
        { q: "Can you fix bad PMU from another artist?", a: "Often, yes. We do color correction and re-shape work, but candidacy depends on what's there. We'll review photos and quote at consultation. Sometimes the answer is removal first; we can refer." },
        { q: "Is it safe during pregnancy or while nursing?", a: "We do not perform PMU during pregnancy. While nursing, we wait until at least 3 months post-delivery and require OB clearance." },
        { q: "What if I don't like it?", a: "We design carefully and don't touch a needle until you approve the drawing. If healed color isn't quite right, we adjust at the 6 – 8 week touch-up. Beth has 30+ years of these conversations — you're in safe hands." },
      ],
      related: ["corrective-facials", "skin-tag-removal", "hyperpigmentation"],
      finalCta: {
        eyebrow: "Book with Beth",
        titleLines: ["30+ years of brows", "and lip color."],
        lead: "Start with a 30-minute consultation to discuss design, candidacy, and pricing. A $150 deposit holds your procedure date.",
      },
    },
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
    // TODO: client to confirm — surgeon coordination protocols, session counts per procedure, package pricing
    detail: {
      heroLeadLong:
        "Post-surgical care for liposuction, BBL, tummy tuck, breast augmentation, and facelift. Lymphatic drainage, ultrasound, wood therapy, compression, infrared/red LED, scar revision, and nutrition support — coordinated with your surgeon's protocol.",
      heroImage: { src: "/images/stock/woman-bikini-15.jpg", alt: "Postoperative recovery session" },
      specs: [
        { label: "Starts at", value: "$145", suffix: "/ session" },
        { label: "Duration", value: "60 – 90", suffix: "min" },
        { label: "Plan", value: "10+", suffix: "/ 3 – 4 mo" },
        { label: "Begins", value: "Day 3 – 7", suffix: "post-op" },
      ],
      bestFor: [
        { title: "Liposuction recovery", body: "Lymphatic drainage and ultrasound to move trapped fluid, reduce swelling, and prevent fibrosis. Begin within the first week." },
        { title: "BBL (Brazilian Butt Lift)", body: "Specialized lymphatic work that protects the graft while reducing swelling in donor sites. Position-aware throughout." },
        { title: "Tummy tuck (abdominoplasty)", body: "Decongestion of swollen tissue, scar revision starting at week 4, and gentle progression back to compression-free comfort." },
        { title: "Breast augmentation & reduction", body: "Reduce swelling, prevent capsular contracture, and address scarring — coordinated with your surgeon's massage protocol." },
        { title: "Facelift, eyelid, & neck lift", body: "Gentle lymphatic drainage to reduce bruising and swelling. Improves the visible recovery curve dramatically." },
        { title: "Fibrosis after old surgeries", body: "Cell-renewal work and ultrasound for fibrotic tissue from surgeries months or years old. Patient work — multi-month plans." },
      ],
      process: [
        { title: "Surgeon coordination", body: "We review your surgical report and your surgeon's recovery protocol. We do not freelance — we work in support of the plan they set." },
        { title: "Phased plan", body: "Acute phase (week 1 – 3): lymphatic and decongestion. Building phase (week 4 – 8): scar work and tissue mobilization. Maintenance phase (month 3+): residual work and home protocols." },
        { title: "In-session work", body: "Hands-on lymphatic drainage, ultrasound, wood therapy, compression rotation, infrared/red LED — selected per phase and your specific procedure." },
        { title: "At-home training", body: "We teach you the home self-massage and skincare that bridges between visits. The work between sessions is at least half the result." },
      ],
      timeline: [
        { when: "Days 0 – 2", title: "Hospital / immediate recovery.", body: "We are not involved this phase. Follow your surgeon's protocol exactly — rest, compression, hydration." },
        { when: "Days 3 – 7", title: "First session (with surgeon clearance).", body: "Gentle lymphatic drainage. Reduce swelling, increase comfort, improve sleep quality." },
        { when: "Weeks 1 – 3", title: "Acute decongestion phase.", body: "2 – 3 sessions per week. This is the highest-value stretch — discipline here meaningfully changes 3-month outcomes." },
        { when: "Weeks 4 – 8", title: "Building phase.", body: "1 – 2 sessions per week. Scar revision begins (week 4). Wood therapy, ultrasound, LED. We progress as tissue tolerates." },
        { when: "Months 3 – 4", title: "Maintenance phase.", body: "Every 2 – 3 weeks. Fibrosis prevention, final scar work, ongoing home routine." },
        { when: "Month 6+", title: "Graduated home protocol.", body: "Most clients graduate to monthly check-ins or as-needed visits. Some choose to continue for ongoing body work." },
      ],
      provider: {
        slug: "susan",
        blurb: "Susan specializes in post-surgical recovery — lymphatic drainage, wood therapy, ultrasound, and the home protocols that bridge between visits. She'll coordinate with your surgeon and design a phased plan that's honest about how much work the next 3 – 4 months will take.",
      },
      pricing: [
        {
          label: "Starter · 5 visits",
          name: "Acute phase",
          price: "$725",
          unit: "/ 5 sessions · save $50",
          inclusions: ["5 sessions in first 2 – 3 weeks", "Lymphatic drainage + ultrasound", "Compression rotation guidance", "At-home self-massage training", "Surgeon coordination"],
          cta: { label: "Book starter", href: BOOK },
        },
        {
          label: "Standard · 10 visits · most chosen",
          name: "Full recovery plan",
          price: "$1,395",
          unit: "/ 10 sessions · save $155",
          featured: true,
          inclusions: ["10 sessions over 6 – 8 weeks", "Acute + building phases covered", "Scar revision begins week 4", "At-home protocol training", "Surgeon coordination throughout", "Wood therapy & ultrasound included"],
          cta: { label: "Book full plan", href: BOOK },
        },
        {
          label: "Extended · 15 visits",
          name: "Comprehensive recovery",
          price: "$1,995",
          unit: "/ 15 sessions · save $180",
          inclusions: ["15 sessions over 3 – 4 months", "All three phases covered", "Scar revision & fibrosis work", "Infrared/red LED at every visit", "At-home protocol training", "Surgeon coordination throughout", "Two complimentary maintenance sessions in month 5 – 6"],
          cta: { label: "Book extended", href: BOOK },
        },
      ],
      pricingNote:
        "Single sessions ($145) available for clients on a tighter cadence. Most clients see meaningful difference in outcome by going with the full or extended plans — fibrosis is easier to prevent than to reverse.",
      prep: {
        heading: "Before your first session.",
        items: [
          "Send us your surgical report and your surgeon's written recovery instructions.",
          "Confirm surgeon clearance for lymphatic work (typically day 3 – 7).",
          "Bring your compression garments to every session.",
          "Wear loose clothing you can change in/out of easily.",
          "Hydrate well — lymphatic work moves a lot of fluid.",
          "Do not eat heavily within 2 hours of session.",
        ],
      },
      aftercare: {
        heading: "Between sessions.",
        items: [
          "Wear compression as instructed — this is half the work.",
          "Hydrate aggressively — 80 oz+ per day during acute phase.",
          "Do your at-home self-massage routine daily.",
          "Walk gently and often; avoid prolonged sitting in the first 2 weeks.",
          "Sleep in the position your surgeon specified (especially BBL).",
          "Flag any unusual asymmetry, hardness, or skin color change immediately.",
        ],
      },
      faqs: [
        { q: "When can I start after surgery?", a: "Typically day 3 – 7 post-op, but only with explicit surgeon clearance. We do not begin earlier — early lymphatic work without clearance can dislocate tissue or compromise grafts." },
        { q: "How many sessions will I really need?", a: "Honest answer: most outcomes are meaningfully improved by 10 – 15 sessions over the first 3 – 4 months. The first 5 are the highest-value. After that, we taper to maintenance." },
        { q: "Will this hurt?", a: "Lymphatic drainage is gentle and feels good. Ultrasound and wood therapy can be uncomfortable on tender post-op tissue — Susan adjusts pressure to your tolerance, always." },
        { q: "Do you coordinate with my surgeon?", a: "Yes — directly. Send us your surgical report and we'll work in support of their protocol. We do not freelance changes." },
        { q: "What if I had surgery months or years ago?", a: "We see meaningful results on older fibrosis and scarring — it just takes longer. Plan for 3+ months of patient work." },
        { q: "Will insurance cover this?", a: "Generally no — post-op aesthetic recovery is out-of-pocket. HSA/FSA sometimes apply; check your plan." },
      ],
      related: ["corrective-facials", "microneedling", "hyperpigmentation"],
      finalCta: {
        eyebrow: "Start within the first week",
        titleLines: ["The first 3 weeks", "matter most."],
        lead: "Get your surgeon's clearance, send us your surgical report, and book your acute-phase sessions. The work you do now meaningfully changes the result you'll see at month 3.",
      },
    },
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
