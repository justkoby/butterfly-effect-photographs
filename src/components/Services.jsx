import "./Services.css";

const BOOK_URL = "https://butterflyn21t.setmore.com/butterfly";

const SERVICES = [
  {
    icon: "◉",
    title: "Portrait & Studio Sessions",
    desc: "Fine art, fashion and concept-driven portraits in our fully equipped Adenta studio with professional lighting and multiple backdrops.",
  },
  {
    icon: "◎",
    title: "Wedding Photography",
    desc: "Soft romance, editorial candids and real moments — capturing your celebration with authenticity and attention to detail.",
  },
  {
    icon: "◈",
    title: "Corporate & Commercial",
    desc: "Clean, styled images for brands and campaigns. Headshots, product photography and marketing visuals for your business.",
  },
  {
    icon: "◇",
    title: "Birthday & Events",
    desc: "Playful, celebratory portraits and candid event coverage that bring the energy of every occasion to life.",
  },
  {
    icon: "◆",
    title: "Fitness & Lifestyle",
    desc: "On-location storytelling across Accra and beyond — everyday moments, styled yet honest and relaxed.",
  },
  {
    icon: "◉",
    title: "Videography",
    desc: "Behind-the-scenes reels, creative short films and brand videos crafted with the same editorial eye as our photography.",
  },
];

export default function Services() {
  return (
    <section className="services" id="services" aria-label="Photography services">
      <div className="services-inner">
        <div className="services-header">
          <p className="kicker">What We Offer</p>
          <h2 className="services-title">
            Photography<br /><em>Services</em>
          </h2>
          <p className="services-intro">
            Every session is built around your story — curated, intentional and crafted for impact.
          </p>
        </div>

        <div className="services-grid">
          {SERVICES.map((s, i) => (
            <div className="service-card" key={i}>
              <span className="service-icon" aria-hidden="true">{s.icon}</span>
              <h3 className="service-name">{s.title}</h3>
              <p className="service-desc">{s.desc}</p>
              <a href={BOOK_URL} target="_blank" rel="noreferrer" className="service-cta">
                Book Now →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
