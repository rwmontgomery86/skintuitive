import { Container } from "@/components/ui/Container";
import { TextLink } from "@/components/ui/TextLink";
import { reviews, reviewScore } from "@/content/reviews";

export function Reviews() {
  const featured = reviews.find((r) => r.featured) ?? reviews[0];
  const minis = reviews.filter((r) => r !== featured).slice(0, 3);
  return (
    <section className="section-pad">
      <Container>
        <div className="reviews-head">
          <div className="reviews-score">
            <span className="num">{reviewScore.rating}</span>
            <div>
              <div className="stars">★ ★ ★ ★ ★</div>
              <div className="lbl">{reviewScore.label}</div>
            </div>
          </div>
          <TextLink href={"#"} arrow>Read all reviews</TextLink>
        </div>
        <div className="reviews-grid">
          <div className="review--feat">
            <p className="quote">{featured.quote}</p>
            <div className="who"><span className="name">{featured.name}</span> · {featured.context}</div>
          </div>
          <div className="reviews-stack">
            {minis.map((r) => (
              <div key={r.name} className="review-mini">
                <p className="quote">&ldquo;{r.quote}&rdquo;</p>
                <div className="who"><span className="name">{r.name}</span> · {r.context}</div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
