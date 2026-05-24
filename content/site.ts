// Single source of truth for business info. Swap booking.href once the
// client provides the real Mindbody/SimplePractice URL.
// TODO: client to provide: real address (line2 may be wrong), email, social URLs.

export const site = {
  name: "Skintuitive Medspa",
  shortName: "Skintuitive",
  tagline:
    "Holistic medical aesthetics and integrative wellness. Serving Sharpsburg, Newnan, Peachtree City & Senoia, GA.",
  metaDescription:
    "Holistic medical aesthetics and integrative wellness in Sharpsburg, Georgia. Microneedling, plasma fibroblast, acne & skin condition protocols. MD-supervised, safe for every skin tone.",
  phone: {
    display: "(770) 301 — 7134",
    tel: "+17703017134",
    href: "tel:+17703017134",
  },
  email: "info@skintuitivemedspa.com", // TODO: client to confirm
  address: {
    line1: "820 Ebenezer Church Rd",
    line2: "Suite 105",
    city: "Sharpsburg",
    state: "GA",
    zip: "30277",
    mapsUrl:
      "https://maps.google.com/?q=820+Ebenezer+Church+Rd+Sharpsburg+GA+30277",
  },
  hours: [
    { days: "Mon – Fri", hours: "9:00a – 7:30p" },
    { days: "Saturday", hours: "10:00a – 4:30p" },
    { days: "Sunday", hours: "Closed" },
  ],
  social: {
    instagram: "#", // TODO: client to provide
    facebook: "#",
    google: "#",
  },
  // Single point of indirection for every "Book now" CTA across the site.
  // Change to the real scheduling URL when the client confirms.
  booking: { href: "/contact" },
  ga4MeasurementId: process.env.NEXT_PUBLIC_GA4_ID ?? "",
} as const;
