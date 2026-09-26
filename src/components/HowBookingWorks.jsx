import "./HowBookingWorks.css";

const SETMORE_URL = "https://butterflyn21t.setmore.com/butterfly";

export default function HowBookingWorks({ mode = "session", className = "" }) {
  const isRental = mode === "rental";

  const steps = isRental
    ? [
        {
          num: "01",
          title: "Choose your date & hours",
          desc: "Select your desired production date and required rental hours to check studio availability.",
          ctaText: "Check Studio Availability",
          ctaHref: "#rental-inquire",
          isExternal: false,
        },
        {
          num: "02",
          title: "Plan set & equipment needs",
          desc: "Confirm your backdrop preferences, included lighting gear, and any optional camera rentals with our team.",
          ctaText: null,
        },
        {
          num: "03",
          title: "Create in a ready studio",
          desc: "Arrive at a fully prepped studio space with lights and amenities in place so you can focus completely on shooting.",
          ctaText: null,
        },
      ]
    : [
        {
          num: "01",
          title: "Choose your session",
          desc: "Select your preferred photoshoot category and reserve your date easily through our online booking calendar.",
          ctaText: "Select on Setmore ↗",
          ctaHref: SETMORE_URL,
          isExternal: true,
        },
        {
          num: "02",
          title: "Plan the details",
          desc: "We connect prior to your shoot to align on your creative vision, styling preferences, lighting, and mood.",
          ctaText: null,
        },
        {
          num: "03",
          title: "Create and receive your images",
          desc: "Enjoy a relaxed, guided session in our Adenta studio or on location, followed by your finalized photograph collection.",
          ctaText: null,
        },
      ];

  return (
    <div className={`how-booking-works ${className}`}>
      <div className="hbw-header">
        <span className="hbw-kicker">Simple &amp; Transparent</span>
        <h3 className="hbw-title">How Booking Works</h3>
      </div>

      <div className="hbw-steps-grid">
        {steps.map((step, idx) => (
          <div className="hbw-step-card" key={idx}>
            <div className="hbw-step-top">
              <span className="hbw-step-num">{step.num}</span>
              {idx < steps.length - 1 && <span className="hbw-connector" aria-hidden="true" />}
            </div>

            <h4 className="hbw-step-title">{step.title}</h4>
            <p className="hbw-step-desc">{step.desc}</p>

            {step.ctaHref && (
              <a
                href={step.ctaHref}
                target={step.isExternal ? "_blank" : undefined}
                rel={step.isExternal ? "noreferrer" : undefined}
                className="hbw-step-btn"
              >
                {step.ctaText}
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
