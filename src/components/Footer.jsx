import { Link } from "react-router-dom";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer" id="contact" aria-label="Site footer">
      <div className="footer-inner">

        {/* Brand */}
        <div className="footer-brand">
          <img src="/images/logo.png" alt="Butterfly Effect Photographs" className="footer-logo" />
          <p className="footer-tagline">Fine art photography &amp; studio · Accra, Ghana</p>
          <div className="footer-socials">
            <a href="https://www.instagram.com/butterfly_effect_photographs/" target="_blank" rel="noreferrer" aria-label="Instagram">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/></svg>
            </a>
            <a href="https://www.instagram.com/coloursnbrushes_artistry/" target="_blank" rel="noreferrer" aria-label="Colours and Brushes Artistry Instagram">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/></svg>
            </a>
          </div>
          <a href="https://butterflyeffectconcepts.com" target="_blank" rel="noreferrer" className="sister-brand-link">
            Also visit Butterfly Effect Concepts →
          </a>
        </div>

        {/* Navigation */}
        <div className="footer-nav">
          <h4 className="footer-heading">Navigate</h4>
          <ul>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/portfolio">Portfolio</Link></li>
            <li><a href="/#services">Services</a></li>
            <li><a href="/#studio">Studio Rental</a></li>
            <li><Link to="/makeup">Makeup &amp; Beauty</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-contact">
          <h4 className="footer-heading">Visit Us</h4>
          <p>
            <strong>Butterfly Effect Photographs</strong><br />
            Ala Adjetey St, Adenta Municipality<br />
            Accra, Ghana (PV42+36)
          </p>
          <p>
            <a href="tel:+233506755037">050 675 5037</a><br />
            <a href="mailto:beffectphotographs@gmail.com">beffectphotographs@gmail.com</a>
          </p>
          <div className="footer-directions">
            <span className="footer-dir-label">Get there:</span>
            <a href="https://bit.ly/bolt-directions" target="_blank" rel="noreferrer">Bolt</a>
            <a href="https://maps.app.goo.gl/bTbZN2XXrbfatf8R8" target="_blank" rel="noreferrer">Uber</a>
            <a href="https://maps.app.goo.gl/bTbZN2XXrbfatf8R8" target="_blank" rel="noreferrer">Yango</a>
          </div>
        </div>

        {/* Book */}
        <div className="footer-book">
          <h4 className="footer-heading">Ready to shoot?</h4>
          <a href="https://butterflyn21t.setmore.com/butterfly" target="_blank" rel="noreferrer" className="btn btn-primary footer-book-btn">
            Book Now
          </a>
          <p className="footer-hours">Mon – Sat · 8 am – 6 pm</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 Butterfly Effect Photographs · All rights reserved</p>
        <p className="footer-credits">
          <a href="https://www.butterflyeffectphotographs.com" target="_blank" rel="noreferrer">www.butterflyeffectphotographs.com</a>
        </p>
      </div>

      {/* Mobile floating CTA */}
      <div className="mobile-float-cta">
        <a href="tel:+233506755037" className="mfc-btn mfc-call">Call Studio</a>
        <a href="https://maps.app.goo.gl/bTbZN2XXrbfatf8R8" target="_blank" rel="noreferrer" className="mfc-btn mfc-dir">Get Directions</a>
      </div>
    </footer>
  );
}
