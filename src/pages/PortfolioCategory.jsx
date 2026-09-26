import { useEffect } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ParallaxImage from "../components/ParallaxImage";
import HowBookingWorks from "../components/HowBookingWorks";
import { PORTFOLIO_CATEGORIES, BOOK_URL } from "../data/portfolioData";
import "./PortfolioCategory.css";

export default function PortfolioCategory() {
  const { categorySlug } = useParams();

  const category = PORTFOLIO_CATEGORIES.find(c => c.slug === categorySlug);

  useEffect(() => {
    if (category) {
      document.title = `${category.title} Portfolio — Butterfly Effect Photographs`;
    }
    window.scrollTo(0, 0);
  }, [categorySlug, category]);

  if (!category) {
    return <Navigate to="/portfolio" replace />;
  }

  return (
    <div className="pc-page">
      <Navbar />

      <main className="pc-main">
        {/* CATEGORY NAV BAR */}
        <nav className="pc-nav-strip" aria-label="Portfolio categories">
          <div className="pc-container pc-nav-inner">
            <span className="pc-nav-label">Categories:</span>
            <div className="pc-nav-links">
              {PORTFOLIO_CATEGORIES.map(cat => {
                const isActive = cat.slug === category.slug;
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

        {/* CATEGORY HERO */}
        <section className="pc-hero">
          <div className="pc-container pc-hero-grid">
            <div className="pc-hero-text">
              <div className="pc-breadcrumbs">
                <Link to="/portfolio" className="pc-crumb">Portfolio</Link>
                <span className="pc-crumb-sep">/</span>
                <span className="pc-crumb-current">{category.title}</span>
              </div>

              <h1 className="pc-title">{category.title}</h1>
              <p className="pc-tagline">{category.tagline}</p>
              <p className="pc-desc">{category.desc}</p>

              <div className="pc-ctas">
                <a href={BOOK_URL} target="_blank" rel="noreferrer" className="btn btn-primary">
                  {category.bookingLabel}
                </a>
                <Link to="/portfolio" className="btn btn-outline">
                  All Collections
                </Link>
              </div>
            </div>

            {/* STRONG OPENING PHOTOGRAPH */}
            <div className="pc-hero-media">
              <ParallaxImage
                src={category.cover}
                alt={`${category.title} opening showcase photograph`}
                aspectRatio="4/5"
                speed={0.12}
                priority={true}
                className="pc-hero-cover-img"
              />
              <div className="pc-hero-badge">
                <span>Featured Collection · {category.title}</span>
              </div>
            </div>
          </div>
        </section>

        {/* CURATED IMAGE SEQUENCE */}
        <section className="pc-gallery-section" aria-label={`${category.title} gallery sequence`}>
          <div className="pc-container">
            <div className="pc-gallery-header">
              <span className="pc-kicker">Curated Sequence</span>
              <h2 className="pc-gallery-title">The {category.title} Collection</h2>
            </div>

            <div className="pc-gallery-grid">
              {category.images.map((img, idx) => {
                const aspect = img.span === "tall" ? "3/4" : img.span === "wide" ? "16/10" : "1/1";
                return (
                  <div className={`pc-gallery-card span-${img.span}`} key={idx}>
                    <ParallaxImage
                      src={img.src}
                      alt={img.alt}
                      aspectRatio={aspect}
                      speed={0.08}
                      className="pc-card-img"
                    />
                    <div className="pc-card-meta">
                      <span className="pc-card-idx">{(idx + 1).toString().padStart(2, "0")}</span>
                      <span className="pc-card-caption">{img.alt}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* HOW BOOKING WORKS & RELEVANT BOOKING CTA */}
        <section className="pc-booking-section" aria-label="Book your session">
          <div className="pc-container">
            <div className="pc-booking-card">
              <div className="pc-booking-header">
                <span className="pc-kicker">Reserve Your Date</span>
                <h3 className="pc-booking-h">Ready for your {category.title.toLowerCase()} shoot?</h3>
                <p className="pc-booking-sub">
                  Book online via our Setmore schedule or connect directly with our studio
                  in Adenta, Accra to tailor your session.
                </p>
              </div>

              {/* 3-Step compact booking process */}
              <div className="pc-hbw-wrap">
                <HowBookingWorks mode="session" />
              </div>

              <div className="pc-booking-footer-action">
                <a href={BOOK_URL} target="_blank" rel="noreferrer" className="btn btn-primary pc-cta-btn">
                  {category.bookingLabel} Online
                </a>
                <Link to="/studio-rental" className="btn btn-outline pc-cta-btn">
                  Rent Our Studio Space
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
