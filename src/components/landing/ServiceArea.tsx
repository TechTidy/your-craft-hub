import { SERVICE_AREAS } from "@/components/landing/data";

/**
 * Service Area section — location chips for the communities we serve.
 *
 * Marketing copy (tag, title, subheading) is verbatim from the mockup.
 * Chip labels come from SERVICE_AREAS in data.ts; the four covered cities
 * render as active, and the "+ More Areas" chip renders inactive.
 */
export default function ServiceArea() {
  return (
    <section className="service-area" id="service-area">
      <div className="container text-center">
        <span className="tag">Where We Serve</span>
        <h2 className="sec-title" style={{ marginBottom: "10px" }}>
          <span>Colorado and surrounding areas</span>
        </h2>
        <p className="sec-sub">
          Hands Hands is locally based — we know these communities and we're
          already close by.
        </p>
        <div className="chips">
          {SERVICE_AREAS.map((area) => (
            <span
              className={area.active ? "chip active" : "chip"}
              key={area.label}
              style={
                area.active
                  ? undefined
                  : {
                      background: "var(--blue-light)",
                      borderColor: "var(--blue)",
                      color: "var(--blue)",
                    }
              }
            >
              <span className="dot"></span>
              {area.label}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
