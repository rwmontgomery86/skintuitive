import { site } from "@/content/site";
import type { Service } from "@/content/services";

const SITE_URL = "https://skintuitive.vercel.app";
const BUSINESS_ID = `${SITE_URL}/#business`;

export function medicalBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "@id": BUSINESS_ID,
    name: site.name,
    description: site.metaDescription,
    url: SITE_URL,
    telephone: site.phone.tel,
    email: site.email,
    image: `${SITE_URL}/images/logo/skintuitive-logo.png`,
    address: {
      "@type": "PostalAddress",
      streetAddress: `${site.address.line1}, ${site.address.line2}`,
      addressLocality: site.address.city,
      addressRegion: site.address.state,
      postalCode: site.address.zip,
      addressCountry: "US",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "19:30",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "10:00",
        closes: "16:30",
      },
    ],
    areaServed: ["Sharpsburg, GA", "Newnan, GA", "Peachtree City, GA", "Senoia, GA"],
  };
}

export function serviceJsonLd(s: Service) {
  const detail = s.detail;
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: s.title,
    description: s.shortDescription,
    serviceType: s.category,
    url: `${SITE_URL}/services/${s.slug}`,
    provider: { "@id": BUSINESS_ID },
    areaServed: ["Sharpsburg, GA", "Newnan, GA", "Peachtree City, GA", "Senoia, GA"],
    ...(detail?.pricing && detail.pricing.length
      ? {
          offers: detail.pricing.map((p) => ({
            "@type": "Offer",
            name: p.name,
            price: p.price.replace(/[^0-9.]/g, "") || undefined,
            priceCurrency: "USD",
            description: p.inclusions.join("; "),
          })),
        }
      : {}),
  };
}
