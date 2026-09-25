import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

const BOOK_URL = "https://butterflyn21t.setmore.com/butterfly";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [location]);

  return (
    <nav className={`navbar${scrolled ? " scrolled" : ""}${open ? " nav-open" : ""}`} aria-label="Main navigation">
      <div className="nav-inner">
        {/* LEFT LINKS */}
        <ul className="nav-links nav-left">
          <li><Link className="nav-link" to="/#about">About</Link></li>
          <li><Link className="nav-link" to="/portfolio">Portfolio</Link></li>
          <li><Link className="nav-link" to="/#services">Services</Link></li>
        </ul>

        {/* LOGO */}
        <Link className="nav-logo-wrap" to="/" aria-label="Butterfly Effect Photographs — Home">
          <img src="/images/logo.png" alt="Butterfly Effect Photographs" className="nav-logo" />
        </Link>

        {/* RIGHT LINKS */}
        <ul className="nav-links nav-right">
          <li>
            <a
              className="nav-link"
              href="https://butterflyeffectconcepts.com/"
              target="_blank"
              rel="noreferrer"
            >
              Design
            </a>
          </li>
          <li><Link className="nav-link" to="/makeup">Makeup</Link></li>
          <li><Link className="nav-link" to="/#contact">Contact</Link></li>
          <li>
            <a href={BOOK_URL} target="_blank" rel="noreferrer" className="nav-book-btn">
              Book Now
            </a>
          </li>
        </ul>

        {/* HAMBURGER */}
        <button
          className="hamburger"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen(o => !o)}
        >
          <span /><span /><span />
        </button>
      </div>

      {/* MOBILE MENU */}
      <div className={`mobile-menu${open ? " mobile-menu-open" : ""}`} aria-hidden={!open}>
        <ul>
          <li><Link to="/#about" onClick={() => setOpen(false)}>About</Link></li>
          <li><Link to="/portfolio" onClick={() => setOpen(false)}>Portfolio</Link></li>
          <li><Link to="/#services" onClick={() => setOpen(false)}>Services</Link></li>
          <li>
            <a
              href="https://butterflyeffectconcepts.com/"
              target="_blank"
              rel="noreferrer"
              onClick={() => setOpen(false)}
            >
              Design
            </a>
          </li>
          <li><Link to="/makeup" onClick={() => setOpen(false)}>Makeup</Link></li>
          <li><Link to="/#contact" onClick={() => setOpen(false)}>Contact</Link></li>
          <li>
            <a
              href={BOOK_URL}
              target="_blank"
              rel="noreferrer"
              className="mobile-book-btn"
              onClick={() => setOpen(false)}
            >
              Book Now
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
