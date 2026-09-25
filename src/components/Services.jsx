import "./Services.css";

const BOOK_URL = "https://butterflyn21t.setmore.com/butterfly";

const SERVICES = [
  {
    title: "Photography",
    desc: "From getting ready to the final dance, we document the people, details, emotions, and in-between moments without turning your day into a photoshoot.",
    image: "/images/weddingsss.jpg",
    link: BOOK_URL,
  },
  {
    title: "Film",
    desc: "Our wedding films bring your celebration back to life through movement, sound, emotion, and the little moments that might otherwise fade with time.",
    image: "/images/experience-image.webp",
    link: BOOK_URL,
  },
  {
    title: "Photo + Film",
    desc: "Combine timeless photography with cinematic film to preserve both the moments you see and the feelings you remember - from the quietest glance to the loudest celebration.",
    image: "/images/wedding-image.jpg",
    link: BOOK_URL,
  },
];

export default function Services() {
  return (
    <section className="services" id="services" aria-label="Photography and film services">
      <div className="services-inner">
        <div className="services-header">
          <p className="kicker">Services</p>
          <h2 className="services-title">
            What We <em>Offer</em>
          </h2>
        </div>

        <div className="services-deck">
          {SERVICES.map((s, i) => (
            <div className="service-deck-card" key={i}>
              <div className="service-card-img-wrap">
                <img src={s.image} alt={s.title} loading="lazy" />
              </div>

              <div className="service-card-title-wrap">
                <h3 className="service-card-title">{s.title}</h3>
              </div>

              <div className="service-card-body-wrap">
                <p className="service-card-desc">{s.desc}</p>
                <div className="service-card-divider" aria-hidden="true" />
                <a
                  href={s.link}
                  target="_blank"
                  rel="noreferrer"
                  className="service-pill-btn"
                >
                  <span className="pill-dot" /> Contact
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
