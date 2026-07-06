import type { MouseEvent } from "react";

import { BUSINESS } from "@/components/landing/data";

/**
 * Top navigation for the Hands-Hands landing page.
 *
 * Desktop: absolute-positioned bar over the hero with the logo, in-page
 * anchor links, and a "Call Now" CTA. Mobile (<768px): the desktop links are
 * hidden by CSS and a fixed bottom bar (Call Now / Free Quote) is shown.
 *
 * Anchors keep real hrefs for SEO; onClick smooth-scrolls to the target and
 * updates the location hash. "Home" scrolls back to the top of the page.
 *
 * Class names match the approved mockup exactly via the shared landing.css.
 */

const NAV_LINKS = [
  { href: "#services", label: "Services" },
  { href: "#why-us", label: "Why Us" },
  { href: "#faq", label: "FAQ" },
  { href: "#estimate", label: "Contact" },
];

/** Smooth-scroll to the anchor target and update the hash, keeping href for SEO. */
function handleAnchorClick(
  event: MouseEvent<HTMLAnchorElement>,
  href: string,
): void {
  // "#" / "#top" means scroll to the top of the page (Home).
  if (href === "#" || href === "#top") {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
    if (window.history.replaceState) {
      window.history.replaceState(null, "", window.location.pathname);
    }
    return;
  }

  const target = document.querySelector(href);
  if (!target) return;

  event.preventDefault();
  target.scrollIntoView({ behavior: "smooth", block: "start" });
  if (window.history.replaceState) {
    window.history.replaceState(null, "", href);
  }
}

export default function Nav() {
  return (
    <>
      {/* MOBILE STICKY BAR */}
      <div className="mobile-bar">
        <a
          href={BUSINESS.telHref}
          className="btn-white"
          style={{
            flex: 1,
            justifyContent: "center",
            fontSize: "13px",
            padding: "11px 10px",
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
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
        <a
          href="#estimate"
          className="btn-outline-dark"
          style={{
            flex: 1,
            justifyContent: "center",
            fontSize: "13px",
            padding: "11px 10px",
          }}
          onClick={(event) => handleAnchorClick(event, "#estimate")}
        >
          Free Quote
        </a>
      </div>

      {/* NAVBAR */}
      <nav className="nav">
        <div className="container">
          <div className="nav-inner">
            <a
              href="#"
              className="logo"
              onClick={(event) => handleAnchorClick(event, "#")}
            >
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
              <span>Hands Hands</span>
            </a>

            <ul className="nav-links">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(event) => handleAnchorClick(event, link.href)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            <a
              href={BUSINESS.telHref}
              className="btn-primary"
              style={{ fontSize: "13px", padding: "10px 18px" }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="13"
                height="13"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8 19.79 19.79 0 01.22 2.18 2 2 0 012.18 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.29 6.29l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
              </svg>
              {BUSINESS.phone}
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}
