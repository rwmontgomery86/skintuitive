import { PageHero } from "@/components/ui/PageHero";
import { Container } from "@/components/ui/Container";
import { BookForm } from "@/components/contact/BookForm";
import { BookInfo } from "@/components/contact/BookInfo";
import { ReasonsStrip } from "@/components/contact/ReasonsStrip";
import { FaqAccordion } from "@/components/contact/FaqAccordion";

export const metadata = {
  title: "Contact & booking",
  description:
    "Book an appointment at Skintuitive Medspa in Sharpsburg, GA. (770) 301-7134 · 820 Ebenezer Church Rd, Suite 105.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Home", href: "/" }, { label: "Contact & Book" }]}
        eyebrow="Book or get in touch"
        title={
          <>
            Request an<br /><em className="italic-accent">appointment</em>.
          </>
        }
        lead="Tell us a little about your skin goals. We confirm by phone within one business day. Or skip the form and call — the line is staffed during open hours."
      />
      <section id="book" style={{ paddingTop: 0, paddingBottom: "clamp(80px, 10vw, 144px)" }}>
        <Container>
          <div className="book-split">
            <BookForm />
            <BookInfo />
          </div>
          <ReasonsStrip />
        </Container>
      </section>
      <FaqAccordion />
    </>
  );
}
