import "./About.css";

export default function About() {
  return (
    <section className="about" id="about" aria-label="About Butterfly Effect Photographs">
      <div className="about-inner">
        <div className="about-image-col">
          <div className="about-img-frame">
            <img
              src="/images/about-me-image.jpg"
              alt="Butterfly Effect Photographs team at work"
              loading="lazy"
            />
            <div className="about-img-accent" aria-hidden="true" />
          </div>
        </div>

        <div className="about-text-col">
          <p className="kicker">Our Story</p>
          <h2 className="about-title">
            Butterfly Effect<br />
            <em>Photographs</em>
          </h2>
          <p className="about-body">
            We are a team of passionate photographers and videographers dedicated to
            capturing the moments that matter most. With an eye for detail and a love
            for authentic storytelling, we create stunning visuals that leave a lasting
            impression.
          </p>
          <p className="about-body">
            Our work blends creativity with technical expertise — delivering exceptional
            results for weddings, portraits, events and commercial projects. With over
            five years in the creative industry, we have delivered for brands such as{" "}
            <em>House of Paon</em>, <em>Odartey Style &amp; Fashion Awards</em>,{" "}
            <em>Stable Plus Pharmacy</em>, <em>Efya Nocturnal</em> and{" "}
            <em>Kelvin Vincent</em>.
          </p>
          <p className="about-signature">Creative Diligent Services</p>

          <div className="about-links">
            <a href="https://butterflyeffectconcepts.com" target="_blank" rel="noreferrer" className="sister-link">
              Also see Butterfly Effect Concepts →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
