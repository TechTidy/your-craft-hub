import { BUSINESS } from "@/components/landing/data";

/**
 * Footer for the Hands-Hands landing page.
 *
 * Dark band with the brand logo (logo-box mark + wordmark), the real contact
 * data (phone tel-link, email, Colorado), and the copyright line.
 *
 * Real business data (phone, tel link, email, location) comes from the shared
 * BUSINESS constant in data.ts; the tagline is kept verbatim from the approved
 * mockup. Class names match the mockup exactly via the shared landing.css.
 */
export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-inner">
          <a href="#" className="logo">
            <span className="logo-box">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 2L2 7l10 5 10-5-10-5z" />
                <path d="M2 17l10 5 10-5" />
                <path d="M2 12l10 5 10-5" />
              </svg>
            </span>
            <span className="footer-brand">Hands Hands</span>
          </a>

          <p className="footer-copy">
            Professional carpet cleaning &amp; water extraction — quality and
            commitment.
          </p>

          <p className="footer-copy">
            <a
              href={BUSINESS.telHref}
              style={{
                color: "rgba(255,255,255,.55)",
                textDecoration: "none",
              }}
            >
              {BUSINESS.phone}
            </a>
            {" · "}
            <a
              href={`mailto:${BUSINESS.email}`}
              style={{
                color: "rgba(255,255,255,.55)",
                textDecoration: "none",
              }}
            >
              {BUSINESS.email}
            </a>
            {" · "}
            {BUSINESS.location}
          </p>

          <p className="footer-copy">
            © 2026 Hands Hands Services · Serving {BUSINESS.location} and
            surrounding areas
          </p>
        </div>
      </div>
    </footer>
  );
}
