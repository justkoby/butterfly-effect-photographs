import { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SessionPackages from "../components/SessionPackages";
import HowBookingWorks from "../components/HowBookingWorks";
import { PORTFOLIO_CATEGORIES, BOOK_URL } from "../data/portfolioData";
import "./Portfolio.css";

// Hero images for the two scrolling columns
const COL1 = ["/images/port-1.jpg", "/images/portrait-img.jpg", "/images/port-6.jpg", "/images/wedidngs.jpg"];
const COL2 = ["/images/port-4.jpg", "/images/portrait-img-2.jpg", "/images/port-7.jpg", "/images/experience-image.webp"];

export default function Portfolio() {
  useEffect(() => {
    document.title = "Portfolio Collections — Butterfly Effect Photographs";
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />
      <main className="pf-main">
        {/* HERO */}
        <section className="pf-hero">
          <div className="pf-hero-text">
            <p className="kicker">Curated Collections</p>
            <h1 className="pf-hero-title">Choose Your<br /><em>Story</em></h1>
            <p className="pf-hero-intro">
              A curated selection of our finest works — portraits, weddings, beauty, and beyond.
              Each collection is crafted with intention, tailored lighting, and authentic storytelling.
            </p>
            <div className="pf-hero-actions">
              <a href={BOOK_URL} target="_blank" rel="noreferrer" className="btn btn-primary">
                Book a Session
              </a>
              <Link to="/studio-rental" className="btn btn-outline">
                Studio Rental Space
              </Link>
            </div>
          </div>

          <div className="pf-hero-cols">
            <div className="pf-col pf-col-up">
              {[...COL1, ...COL1].map((s, i) => (
                <div className="pf-col-img" key={i}>
                  <img src={s} alt="Portfolio highlight visual" loading="lazy" />
                </div>
              ))}
            </div>
            <div className="pf-col pf-col-down">
              {[...COL2, ...COL2].map((s, i) => (
                <div className="pf-col-img" key={i}>
                  <img src={s} alt="Portfolio highlight visual" loading="lazy" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CATEGORY GRID — EVERY CARD LEADS TO A WORKING GALLERY */}
        <section className="pf-categories">
          <div className="pf-cat-header">
            <p className="kicker">Browse by Category</p>
            <h2 className="pf-cat-title">Explore the <em>Collections</em></h2>
            <p className="pf-cat-subtitle">
              Select any category to view its curated photograph sequence and dedicated booking options.
            </p>
          </div>
          <div className="pf-cat-grid">
            {PORTFOLIO_CATEGORIES.map((cat) => {
              const targetHref = cat.slug === "wedding" ? "/portfolio/wedding" : `/portfolio/${cat.slug}`;
              return (
                <Link to={targetHref} className="pf-cat-card" key={cat.slug} tabIndex={0}>
                  <div className="pf-cat-img">
                    <img src={cat.cover} alt={`${cat.title} collection cover`} loading="lazy" />
                    <div className="pf-cat-overlay" />
                  </div>
                  <div className="pf-cat-info">
                    <h3>{cat.title}</h3>
                    <p>{cat.tagline}</p>
                    <span className="pf-cat-cta">Explore gallery ({cat.images.length} frames) →</span>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>

        {/* STUDIO PHOTOGRAPHY SESSION PACKAGES */}
        <SessionPackages />

        {/* HOW BOOKING WORKS SECTION */}
        <section className="pf-booking-guide-section" aria-label="How booking works">
          <div className="pf-booking-guide-container">
            <HowBookingWorks mode="session" />
            <div className="pf-guide-cta-row">
              <a href={BOOK_URL} target="_blank" rel="noreferrer" className="btn btn-primary">
                Reserve on Setmore Calendar
              </a>
              <Link to="/about" className="btn btn-outline">
                Read About Our Studio
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

