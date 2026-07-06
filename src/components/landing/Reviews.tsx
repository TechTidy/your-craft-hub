import { REVIEWS } from "@/components/landing/data";

/**
 * Reviews section — 9 real 5-star customer reviews.
 *
 * Section header copy ("Customer Reviews" / "See Why Customers Trust Hands
 * Hands") is verbatim from the mockup. The cards use the real REVIEWS from
 * data.ts (name + quote), NOT the mockup's invented named/city testimonials,
 * so the mockup's rev-badge is intentionally omitted.
 */
export default function Reviews() {
  return (
    <section className="reviews" id="reviews">
      <div className="container">
        <div className="text-center">
          <span className="tag">Customer Reviews</span>
          <h2 className="sec-title">See Why Customers Trust Hands Hands</h2>
        </div>
        <div className="reviews-grid">
          {REVIEWS.map((review) => (
            <div className="rev-card" key={review.name}>
              <div className="stars">★★★★★</div>
              <p className="rev-text">&ldquo;{review.quote}&rdquo;</p>
              <p className="reviewer">&mdash; {review.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
