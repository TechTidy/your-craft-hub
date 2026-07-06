import QuoteForm from "./QuoteForm";

/**
 * Hero section for the Hands-Hands landing page.
 *
 * Left column: badge, headline, subheading, two CTAs, and three trust items.
 * Right column: the <QuoteForm /> card, wrapped so its container carries the
 * #estimate anchor targeted by the "Get Free Quote" CTA.
 *
 * Marketing copy is kept verbatim from the approved mockup.
 */
export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-bg" />
      <div className="hero-overlay" />
      <div className="container">
        <div className="hero-inner">
          {/* LEFT */}
          <div className="hero-left">
            <div className="hero-badge">
              <span className="pulse" />
              Now Serving Colorado and surrounding areas — Available 24/7
            </div>
            <h1>
              Carpet Cleaning &amp;
              <br />
              <em>Water Extraction</em>
              <br />
              in{" "}
              <span
                style={{
                  textDecoration: "underline",
                  textDecorationColor: "var(--blue)",
                  textUnderlineOffset: "6px",
                }}
              >
                Colorado
              </span>
              .
            </h1>
            <p className="hero-sub">
              Deep carpet cleaning that removes stains and odors for good and
              emergency water extraction available{" "}
              <strong style={{ color: "white" }}>24 hours a day</strong>.
            </p>
            <div className="hero-ctas">
              <a href="tel:+17202557466" className="btn-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8 19.79 19.79 0 01.22 2.18 2 2 0 012.18 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.29 6.29l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                </svg>
                Call Now
              </a>
              <a href="#estimate" className="btn-outline-dark">
                Get Free Quote
              </a>
            </div>
            <div className="hero-trust">
              <span className="hero-trust-item">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#22C55E"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                60-Min Response
              </span>
              <span className="hero-trust-item">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#22C55E"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                Same-Day Service
              </span>
              <span className="hero-trust-item">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#22C55E"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                Free Inspection
              </span>
            </div>
          </div>

          {/* RIGHT — FORM CARD */}
          <div id="estimate">
            <QuoteForm />
          </div>
        </div>
      </div>
    </section>
  );
}
