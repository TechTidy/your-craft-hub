import type { ReactNode } from "react";
import { WHY_US } from "@/components/landing/data";

/**
 * "Why Us" section — 4 differentiator cards.
 *
 * Marketing copy comes from WHY_US in data.ts (verbatim from the mockup).
 * Icons are matched to each card by index, using the mockup's exact SVGs.
 */

// Icons in the same order as WHY_US:
// Fast Response · Professional Equipment · Local Experts · Transparent Pricing
const WHY_US_ICONS: ReactNode[] = [
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="#3B5BF5"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>,
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="#3B5BF5"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
  </svg>,
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="#3B5BF5"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>,
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="#3B5BF5"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="12" y1="1" x2="12" y2="23" />
    <path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
  </svg>,
];

export default function WhyUs() {
  return (
    <section className="why-us" id="why-us">
      <div className="container">
        <div className="text-center">
          <span className="tag">Why Hands Hands</span>
          <h2 className="sec-title">
            Your home deserves more than just a surface clean.
          </h2>
        </div>
        <div className="why-grid">
          {WHY_US.map((item, i) => (
            <div className="why-card" key={item.title}>
              <div className="why-icon">{WHY_US_ICONS[i]}</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
