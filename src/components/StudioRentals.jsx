import "./StudioRentals.css";

const BOOK_URL = "https://butterflyn21t.setmore.com/butterfly";
const INQUIRY_EMAIL = "mailto:beffectphotographs@gmail.com?subject=Studio%20Rental%20Inquiry";

const FEATURES = [
  "Professional lighting rigs",
  "Multiple backdrop options",
  "Props and set pieces",
  "Private changing area",
  "Spacious car parking",
  "Fast Wi-Fi on-site",
];

export default function StudioRentals() {
  return (
    <section className="studio-rentals" id="studio" aria-label="Studio rentals">
      <div className="studio-inner">
        {/* Left — image */}
        <div className="studio-media">
          <div className="studio-img-wrap">
            <img
              src="/images/studio.png"
              alt="Butterfly Effect Photographs studio space in Adenta, Accra"
              loading="lazy"
            />
          </div>
          <div className="studio-location-tag">
            <span>📍</span> Ala Adjetey St, Adenta Municipality, Accra
          </div>
        </div>

        {/* Right — content */}
        <div className="studio-content">
          <p className="kicker">Rent Our Space</p>
          <h2 className="studio-title">
            The Butterfly<br />
            <em>Effect Studio</em>
          </h2>
          <p className="studio-desc">
            Our modern, fully-equipped studio in Adenta is available for rent by
            photographers, videographers and creatives. Whether you need it for a
            half-day shoot or a full production day, the space is ready for your vision.
          </p>

          <ul className="studio-features">
            {FEATURES.map((f, i) => (
              <li key={i}>
                <span className="feature-dot" aria-hidden="true" />
                {f}
              </li>
            ))}
          </ul>

          <div className="studio-ctas">
            <a href={BOOK_URL} target="_blank" rel="noreferrer" className="btn btn-primary">
              Book the Studio
            </a>
            <a href={INQUIRY_EMAIL} className="btn btn-ghost">
              Send an Inquiry
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
