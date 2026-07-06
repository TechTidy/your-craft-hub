import logo from "@/assets/handshands-logo.png";
import { BUSINESS } from "@/components/landing/data";

/**
 * Footer for the Hands-Hands landing page.
 *
 * Dark band with the brand logo (real Hands-Hands wordmark), the real contact
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
            <img src={logo} alt="Hands-Hands" className="footer-logo-img" />
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
