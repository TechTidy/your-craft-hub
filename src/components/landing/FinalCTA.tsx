import { BUSINESS } from "@/components/landing/data";

/**
 * Final CTA section for the Hands-Hands landing page.
 *
 * Dark band with the "Deep Clean, Pure Shine." headline, a subheading, two CTAs
 * (a "Call Now" tel-link button and a "Get a Free Quote" button anchored to the
 * #estimate form in the hero), and the copyright line.
 *
 * Marketing copy is kept verbatim from the approved mockup; the phone display
 * and tel link come from shared business data.
 */
export default function FinalCTA() {
  return (
    <section className="final-cta">
      <div className="container">
        <h2>Deep Clean, Pure Shine.</h2>
        <p>
          Hands Hands is your Colorado expert for both services. Available now.
          Transparent Pricing. Real results.
        </p>
        <div className="final-cta-btns">
          <a
            href={BUSINESS.telHref}
            className="btn-white"
            style={{ fontSize: "15px", padding: "14px 32px" }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8 19.79 19.79 0 01.22 2.18 2 2 0 012.18 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.29 6.29l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
            </svg>
            {BUSINESS.phone} — Call Now
          </a>
          <a
            href="#estimate"
            className="btn-outline-dark"
            style={{ fontSize: "15px", padding: "14px 32px" }}
          >
            Get a Free Quote
          </a>
        </div>
        <p
          style={{
            color: "rgba(255,255,255,.35)",
            fontSize: "12px",
            marginTop: "30px",
            position: "relative",
            zIndex: 2,
          }}
        >
          © 2026 Hands Hands Services · Serving Colorado and surrounding areas
        </p>
      </div>
    </section>
  );
}
