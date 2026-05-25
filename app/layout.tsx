import type { Metadata } from "next";
import { Inter, Inter_Tight } from "next/font/google";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { FloatingCTA } from "@/components/layout/FloatingCTA";
import { JsonLd } from "@/components/seo/JsonLd";
import { medicalBusinessJsonLd } from "@/lib/jsonld";
import { site } from "@/content/site";
import "./globals.css";

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const interTight = Inter_Tight({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${site.name} — Holistic Medical Aesthetics in Sharpsburg, GA`,
    template: `%s · ${site.name}`,
  },
  description: site.metaDescription,
  metadataBase: new URL("https://skintuitive.vercel.app"),
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-palette="clinical" className={`${inter.variable} ${interTight.variable}`}>
      <body>
        <JsonLd data={medicalBusinessJsonLd()} />
        <Nav />
        <main>{children}</main>
        <Footer />
        <FloatingCTA />
        <Analytics />
        {site.ga4MeasurementId ? (
          <>
            <Script
              strategy="afterInteractive"
              src={`https://www.googletagmanager.com/gtag/js?id=${site.ga4MeasurementId}`}
            />
            <Script id="ga4-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${site.ga4MeasurementId}');
              `}
            </Script>
          </>
        ) : null}
      </body>
    </html>
  );
}
