import { STEPS } from "@/components/landing/data";

/**
 * "How It Works" section — 3-step process (numbered 1/2/3).
 * Marketing copy comes from data.ts STEPS (verbatim from the mockup).
 */
export default function HowItWorks() {
  return (
    <section className="how" id="how-it-works">
      <div className="container">
        <div className="text-center">
          <span className="tag">Simple Process</span>
          <h2 className="sec-title">
            3 Steps to a <span>Clean, Restored Home</span>
          </h2>
        </div>
        <div className="steps">
          {STEPS.map((step) => (
            <div className="step" key={step.n}>
              <div className="step-num">{step.n}</div>
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
