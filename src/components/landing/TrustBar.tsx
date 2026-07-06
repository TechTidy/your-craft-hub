import type { ReactNode } from "react";

/**
 * Blue trust bar band shown directly under the hero.
 *
 * Marketing copy is verbatim from the approved static mockup per client decision.
 */

interface TrustItem {
  icon: ReactNode;
  title: string;
  subtitle: string;
}

const TRUST_ITEMS: TrustItem[] = [
  {
    icon: (
      <svg viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" />
        <polyline
          points="12 6 12 12 16 14"
          fill="none"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
    title: "60-Min Response",
    subtitle: "We arrive fast, 24/7",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24">
        <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" />
      </svg>
    ),
    title: "Pro Equipment",
    subtitle: "Industrial-grade tools",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
    title: "5-Star Rated",
    subtitle: "Trusted in Colorado and surrounding areas",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
    title: "Locally Owned",
    subtitle: "Your Colorado and surrounding areas neighbors",
  },
];

export default function TrustBar() {
  return (
    <div className="trust-bar">
      <div className="container">
        <div className="trust-bar-inner">
          {TRUST_ITEMS.map((item) => (
            <div className="tb-item" key={item.title}>
              <div className="tb-icon">{item.icon}</div>
              <div className="tb-text">
                <strong>{item.title}</strong>
                <span>{item.subtitle}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
