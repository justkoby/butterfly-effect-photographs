import { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HowBookingWorks from "../components/HowBookingWorks";
import { PORTFOLIO_CATEGORIES, BOOK_URL } from "../data/portfolioData";
import "./PortfolioWedding.css";

const WEDDING_IMGS = [
  { src: "/images/wedidngs.jpg", alt: "Traditional wedding ceremony ceremony moments" },
  { src: "/images/weddingsss.jpg", alt: "Intimate wedding couple portrait" },
  { src: "/images/wedding-image.jpg", alt: "Wedding day candid celebration" },
  { src: "/images/header-01-01.jpg", alt: "Bridal preparation and fine styling details" },
  { src: "/images/header.jpg", alt: "Sunset romance and venue atmosphere" },
];

export default function PortfolioWedding() {
  useEffect(() => {
    document.title = "Wedding Photography — Butterfly Effect Photographs";
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />
      <main className="pw-main">
        {/* CATEGORY NAV STRIP */}
        <nav className="pc-nav-strip" aria-label="Portfolio categories">
          <div className="pc-container pc-nav-inner">
            <span className="pc-nav-label">Categories:</span>
            <div className="pc-nav-links">
              {PORTFOLIO_CATEGORIES.map(cat => {
                const isActive = cat.slug === "wedding";
                return (
                  <Link
                    key={cat.slug}
                    to={cat.slug === "wedding" ? "/portfolio/wedding" : `/portfolio/${cat.slug}`}
                    className={`pc-nav-item${isActive ? " active" : ""}`}
                  >
                    {cat.navTitle}
                  </Link>
                );
              })}
            </div>
          </div>
        </nav>

        <section className="pw-hero">
          <div className="pw-hero-content">
            <p className="kicker">Portfolio / Wedding</p>
            <h1 className="pw-title">Love, <em>Documented.</em></h1>
            <p className="pw-desc">
              Soft romance, real moments, and editorial candids — each wedding story
              captured with authenticity and unobtrusive artistry.
            </p>
            <div className="pw-ctas">
              <a href={BOOK_URL} target="_blank" rel="noreferrer" className="btn btn-primary">Book Your Wedding</a>
              <Link to="/portfolio" className="btn btn-ghost">All Collections</Link>
            </div>
          </div>
          <div className="pw-hero-img">
            <img src="/images/wedidngs.jpg" alt="Wedding photography hero" />
            <div className="pw-hero-overlay" />
          </div>
        </section>

        <section className="pw-gallery">
          <div className="pw-gallery-grid">
            {WEDDING_IMGS.map((img, i) => (
              <div className="pw-gallery-item" key={i}>
                <img src={img.src} alt={img.alt} loading="lazy" />
              </div>
            ))}
          </div>
        </section>

        {/* 3-Step Booking Process */}
        <section className="pw-booking-section" aria-label="How to book your wedding">
          <div className="pw-booking-container">
            <HowBookingWorks mode="session" />
            <div className="pw-booking-cta-row">
              <a href={BOOK_URL} target="_blank" rel="noreferrer" className="btn btn-primary">
                Book Wedding Session Online
              </a>
              <Link to="/portfolio" className="btn btn-outline">
                Explore More Collections
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

