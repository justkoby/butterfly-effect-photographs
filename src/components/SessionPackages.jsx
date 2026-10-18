import { Link } from "react-router-dom";
import "./SessionPackages.css";

import { useState } from "react";
import { SESSION_TYPES, packagesForSession, formatPrice, outfitLabel } from "../data/studio";

export default function SessionPackages({ className = "" }) {
  const [session, setSession] = useState("Individual");
  return (
    <section className={`session-packages ${className}`} id="packages" aria-label="Studio photography session packages">
      <div className="sp-container">
        <div className="sp-header">
          <span className="sp-kicker">Individual · Couple · Family</span>
          <h2 className="sp-title">Session <em>Packages</em></h2>
          <p className="sp-desc">
            Studio photography sessions captured with professional lighting, thoughtful direction, and high-end retouching in our Adenta studio.
          </p>
        </div>

        <div className="sp-session-filter" role="group" aria-label="Session category">
          {SESSION_TYPES.map(type => <button key={type} type="button" aria-pressed={session === type} onClick={() => setSession(type)}>{type}</button>)}
        </div>
        <p className="sp-session-caption" aria-live="polite">{session} studio sessions</p>
        <div className="sp-grid">
          {packagesForSession(session).map((pkg) => (
            <div className={`sp-card${pkg.badge ? " featured" : ""}`} key={pkg.id}>
              {pkg.badge && <span className="sp-card-badge">{pkg.badge}</span>}
              <div className="sp-card-header">
                <h3 className="sp-card-name">{pkg.name}</h3>
                <div className="sp-card-price">{formatPrice(pkg.price)}</div>
              </div>

              <div className="sp-card-divider" aria-hidden="true" />

              <ul className="sp-card-features">
                <li>
                  <span className="sp-check">✓</span>
                  <span>{pkg.photos} Retouched Photos</span>
                </li>
                <li>
                  <span className="sp-check">✓</span>
                  <span>{outfitLabel(pkg)}</span>
                </li>
                {pkg.peopleMin && <li><span className="sp-check">✓</span><span>{pkg.peopleMin === pkg.peopleMax ? pkg.peopleMin : `${pkg.peopleMin}–${pkg.peopleMax}`} people</span></li>}
              </ul>

              <Link
                to={`/plan-your-shoot?package=${pkg.id}`}
                className={`btn ${pkg.badge ? "btn-primary" : "btn-outline"} sp-card-btn`}
              >
                Plan This Session
              </Link>
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
