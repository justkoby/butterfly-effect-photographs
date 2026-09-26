import { Link } from "react-router-dom";
import "./StudioRentals.css";

const BOOK_URL = "https://butterflyn21t.setmore.com/butterfly";

const FEATURES = [
  "Professional studio lighting & softboxes",
  "Multiple colored backdrops & paper rolls",
  "Dedicated makeup & styling vanity station",
  "Air-conditioned private changing room",
  "Camera & lens kit (available for additional fee)",
  "Secure parking & high-speed Wi-Fi",
];

export default function StudioRentals() {
  return (
    <section className="studio-rentals" id="studio" aria-label="Studio rentals">
      <div className="studio-inner">
        {/* Left — image */}
        <div className="studio-media">
          <Link to="/studio-rental" className="studio-img-wrap" aria-label="View dedicated studio rental page">
            <img
              src="/images/studio.png"
              alt="Butterfly Effect Photographs studio space in Adenta, Accra"
              loading="lazy"
            />
          </Link>
          <div className="studio-location-tag">
            <span>📍</span> Adenta Housing Down, Accra
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
            Our modern, light-controlled production studio in Adenta is ready for
            photographers, videographers, and creative agencies. Includes backdrops,
            lights, and makeup space — with camera bodies and lenses available for an additional fee.
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
            <Link to="/studio-rental" className="btn btn-primary">
              Explore Studio &amp; Rates
            </Link>
            <a href={BOOK_URL} target="_blank" rel="noreferrer" className="btn btn-ghost">
              Book on Calendar
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

