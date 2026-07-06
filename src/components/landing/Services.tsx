import { BUSINESS, SERVICES } from "@/components/landing/data";

/**
 * Services section.
 *
 * Two big highlighted cards (Professional Carpet Cleaning + Emergency Water
 * Extraction) with verbatim marketing copy from the approved mockup, followed
 * by a secondary block listing the 8 real services grouped by their 4 real
 * categories (sourced from data.ts SERVICES).
 *
 * Anchors defined: #services (section), #more-services (secondary block).
 */
export default function Services() {
  return (
    <section className="services" id="services">
      <div className="container">
        <div className="text-center">
          <span className="tag">Our Services</span>
          <h2 className="sec-title">
            Your Trusted Carpet Cleaning &amp; Water Extraction Team
          </h2>
          <p className="sec-sub">
            Whether you need spotless carpets or emergency flood cleanup — we
            handle both with the same professionalism.
          </p>
        </div>

        <div className="services-grid">
          {/* CARPET CLEANING */}
          <div className="svc-card">
            <div className="svc-img-wrap">
              <span className="svc-tag-pill svc-tag-carpet">Carpet Cleaning</span>
            </div>
            <div className="svc-body">
              <div className="svc-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#3B5BF5"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                  <polyline points="9 22 9 12 15 12 15 22" />
                </svg>
              </div>
              <h3 className="svc-title">
                <span>Professional</span> Carpet Cleaning
              </h3>
              <p className="svc-desc">
                Stains, odors, and ground-in dirt removed at the root level. Our
                hot-water extraction method restores your carpets to like-new
                condition — fast.
              </p>
              <ul className="svc-list">
                <li>Deep stain removal (wine, coffee, pet, grease)</li>
                <li>Odor neutralization — not just masking</li>
                <li>Hot-water extraction steam cleaning</li>
                <li>Quick dry — ready in hours, not days</li>
                <li>Safe for children, pets &amp; allergy sufferers</li>
              </ul>
              <a href="#estimate" className="btn-primary">
                Get a Free Carpet Quote
              </a>
            </div>
          </div>

          {/* WATER EXTRACTION */}
          <div className="svc-card">
            <div className="svc-img-wrap">
              <span className="svc-tag-pill svc-tag-water">⚡ Emergency 24/7</span>
            </div>
            <div className="svc-body">
              <div className="svc-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#3B5BF5"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 2.69l5.66 5.66a8 8 0 11-11.31 0z" />
                </svg>
              </div>
              <h3 className="svc-title">
                <span>Emergency</span> Water Extraction
              </h3>
              <p className="svc-desc">
                Flooding, burst pipes, or overflow — we're on call 24/7 to
                extract water fast and prevent lasting structural damage and mold
                growth.
              </p>
              <ul className="svc-list">
                <li>
                  Immediate dispatch — 60-min response in Colorado and
                  surrounding areas
                </li>
                <li>Industrial pumps &amp; vacuums extract completely</li>
                <li>Moisture detection in walls &amp; subfloors</li>
                <li>Commercial air movers &amp; dehumidifiers</li>
                <li>Insurance documentation support</li>
              </ul>
              <a href={BUSINESS.telHref} className="btn-primary">
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
                Call Now
              </a>
            </div>
          </div>
        </div>

        {/* SECONDARY — all 8 real services, grouped by category */}
        <div id="more-services" className="text-center" style={{ marginTop: 72 }}>
          <span className="tag">More Services We Offer</span>
          <h2 className="sec-title">
            Complete Carpet &amp; <span>Restoration Care</span>
          </h2>
          <p className="sec-sub">
            From routine steam cleaning to full water damage restoration — one
            local team for every job.
          </p>
        </div>

        {SERVICES.map((group) => (
          <div key={group.category} style={{ marginTop: 40 }}>
            <h3
              className="svc-title"
              style={{ fontSize: 15, color: "var(--blue)", marginBottom: 16 }}
            >
              {group.category}
            </h3>
            <div className="why-grid" style={{ marginTop: 0 }}>
              {group.services.map((service) => (
                <div key={service.title} className="why-card">
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
