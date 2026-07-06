import { BUSINESS } from "@/components/landing/data";

/**
 * Dual-CTA section for the Hands-Hands landing page.
 *
 * Blue band with an eyebrow, heading, subheading, and two CTAs: a "Call Now"
 * button (tel link) and a "Get Free Quote" button anchored to the #estimate
 * form in the hero.
 *
 * Marketing copy is kept verbatim from the approved mockup; the phone tel link
 * comes from shared business data.
 */
export default function DualCTA() {
  return (
    <section className="dual-cta">
      <div className="container">
        <div className="dual-cta-inner">
          <p
            style={{
              fontFamily: "var(--font-h)",
              fontSize: "12px",
              fontWeight: 700,
              letterSpacing: ".12em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,.60)",
              marginBottom: "12px",
            }}
          >
            CARPET CLEANING · WATER EXTRACTION · COLORADO
          </p>
          <h2>Ready to bring your home back to life?</h2>
          <p>
            One team, two essential services. Call us now or request a free
            quote — we respond fast for both.
          </p>
          <div className="dual-cta-btns">
            <a
              href={BUSINESS.telHref}
              className="btn-white"
              style={{ fontSize: "15px", padding: "14px 30px" }}
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
              Call Now — {BUSINESS.phone}
            </a>
            <a
              href="#estimate"
              className="btn-outline-dark"
              style={{ fontSize: "15px", padding: "14px 30px" }}
            >
              Get Free Quote
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
