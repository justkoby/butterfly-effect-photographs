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
          <p className="footer-slogan">Creative Diligent Service</p>
          <div className="footer-socials">
            <a href="https://www.instagram.com/butterfly_effect_photographs/" target="_blank" rel="noreferrer" aria-label="Instagram (@butterfly_effect_photographs)">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/></svg>
            </a>
            <a href="https://www.facebook.com/butterfly_effect_photographs" target="_blank" rel="noreferrer" aria-label="Facebook (@butterfly_effect_photographs)">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            </a>
            <a href="https://www.tiktok.com/@butterfly_effect_photographs" target="_blank" rel="noreferrer" aria-label="TikTok (@butterfly_effect_photographs)">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"/></svg>
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
            <li><Link to="/studio-rental">Studio Rental</Link></li>
            <li><Link to="/makeup">Makeup &amp; Beauty</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-contact">
          <h4 className="footer-heading">Visit Us</h4>
          <p>
            <strong>Butterfly Effect Photographs</strong><br />
            Adenta Housing Down<br />
            Accra, Ghana
          </p>
          <p>
            <a href="tel:+233558399101">055 839 9101</a><br />
            <a href="mailto:beffectphotographs@gmail.com">beffectphotographs@gmail.com</a>
          </p>
          <div className="footer-directions">
            <span className="footer-dir-label">Directions: Butterfly Effect Photographs, Adenta</span>
            <div className="footer-dir-links">
              <a href="https://maps.google.com/?q=Butterfly+Effect+Photographs,+Adenta" target="_blank" rel="noreferrer">Maps ↗</a>
              <a href="https://bit.ly/bolt-directions" target="_blank" rel="noreferrer">Bolt</a>
              <a href="https://maps.app.goo.gl/bTbZN2XXrbfatf8R8" target="_blank" rel="noreferrer">Uber</a>
              <a href="https://maps.app.goo.gl/bTbZN2XXrbfatf8R8" target="_blank" rel="noreferrer">Yango</a>
            </div>
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
        <p>© 2025 Butterfly Effect Photographs · Creative Diligent Service · All rights reserved</p>
        <p className="footer-credits">
          <a href="https://www.butterflyeffectphotographs.com" target="_blank" rel="noreferrer">www.butterflyeffectphotographs.com</a>
        </p>
      </div>

      {/* Mobile floating CTA */}
      <div className="mobile-float-cta">
        <a href="tel:+233558399101" className="mfc-btn mfc-call">Call Studio</a>
        <a href="https://maps.google.com/?q=Butterfly+Effect+Photographs,+Adenta" target="_blank" rel="noreferrer" className="mfc-btn mfc-dir">Get Directions</a>
      </div>
    </footer>
  );
}
