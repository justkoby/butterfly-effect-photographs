import { Link } from "react-router-dom";
import "./SessionPackages.css";

const BOOK_URL = "https://butterflyn21t.setmore.com/butterfly";

export const SESSION_PACKAGES = [
  {
    id: "pkg-1",
    name: "Package I",
    price: "GH₵400",
    photos: "6 Retouched Photos",
    outfits: "1 Outfit",
    badge: null,
  },
  {
    id: "pkg-2",
    name: "Package II",
    price: "GH₵600",
    photos: "9 Retouched Photos",
    outfits: "2 Outfits",
    badge: "Most Popular",
  },
  {
    id: "pkg-3",
    name: "Package III",
    price: "GH₵800",
    photos: "12 Retouched Photos",
    outfits: "3 Outfits",
    badge: null,
  },
];

export default function SessionPackages({ className = "" }) {
  return (
    <section className={`session-packages ${className}`} id="packages" aria-label="Studio photography session packages">
      <div className="sp-container">
        <div className="sp-header">
          <span className="sp-kicker">Individual Studio Sessions</span>
          <h2 className="sp-title">Session <em>Packages</em></h2>
          <p className="sp-desc">
            Studio photography sessions captured with professional lighting, thoughtful direction, and high-end retouching in our Adenta studio.
          </p>
        </div>

        <div className="sp-grid">
          {SESSION_PACKAGES.map((pkg) => (
            <div className={`sp-card${pkg.badge ? " featured" : ""}`} key={pkg.id}>
              {pkg.badge && <span className="sp-card-badge">{pkg.badge}</span>}
              <div className="sp-card-header">
                <h3 className="sp-card-name">{pkg.name}</h3>
                <div className="sp-card-price">{pkg.price}</div>
              </div>

              <div className="sp-card-divider" aria-hidden="true" />

              <ul className="sp-card-features">
                <li>
                  <span className="sp-check">✓</span>
                  <span>{pkg.photos}</span>
                </li>
                <li>
                  <span className="sp-check">✓</span>
                  <span>{pkg.outfits}</span>
                </li>
              </ul>

              <a
                href={BOOK_URL}
                target="_blank"
                rel="noreferrer"
                className={`btn ${pkg.badge ? "btn-primary" : "btn-outline"} sp-card-btn`}
              >
                Book Session
              </a>
            </div>
          ))}
        </div>

        <div className="sp-rental-notice">
          <p>
            Looking to hire the space for your own production rather than a portrait session?{" "}
            <Link to="/studio-rental" className="sp-rental-link">
              View Studio Rental Information →
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
