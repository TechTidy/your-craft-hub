import { useState } from "react";
import { FAQ } from "@/components/landing/data";

/**
 * FAQ section — accordion of the 6 FAQ items (verbatim marketing copy from
 * data.ts FAQ). Only one item is open at a time; the first is open by default.
 */
export default function Faq() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (index: number) =>
    setOpenIndex((current) => (current === index ? -1 : index));

  return (
    <section className="faq" id="faq">
      <div className="container">
        <div className="text-center">
          <span className="tag">FAQ</span>
          <h2 className="sec-title">
            Questions? <span>We Have Answers.</span>
          </h2>
        </div>
        <div className="faq-list">
          {FAQ.map((item, index) => (
            <div
              className={index === openIndex ? "faq-item open" : "faq-item"}
              key={item.q}
            >
              <button
                type="button"
                className="faq-q"
                onClick={() => toggle(index)}
                aria-expanded={index === openIndex}
              >
                {item.q}
                <span className="faq-ico">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#3B5BF5"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="12" y1="5" x2="12" y2="19" />
                    <line x1="5" y1="12" x2="19" y2="12" />
                  </svg>
                </span>
              </button>
              <div className="faq-a">{item.a}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
