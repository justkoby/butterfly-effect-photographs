import { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./Portfolio.css";

const BOOK_URL = "https://butterflyn21t.setmore.com/butterfly";

const CATEGORIES = [
  { title: "Wedding",        desc: "Soft romance, real moments, editorial candids.",          href: "/portfolio/wedding",    img: "/images/wedidngs.jpg" },
  { title: "Studioshoots",   desc: "Fine art, fashion and concept-driven studio portraits.",  href: "#",                     img: "/images/port-1.jpg" },
  { title: "Beautyshoots",   desc: "Close-up glam, skin work and detail-focused beauty.",    href: "#",                     img: "/images/port-10.jpg" },
  { title: "Hairshoots",     desc: "Editorial hair stories, wigs and textured styles.",       href: "#",                     img: "/images/port-11.jpeg" },
  { title: "Maternityshoots",desc: "Soft, intimate portraits celebrating motherhood.",        href: "#",                     img: "/images/portrait-img-2.jpg" },
  { title: "Lifestyleshoots",desc: "Everyday moments, styled yet honest and relaxed.",       href: "#",                     img: "/images/portrait-img.jpg" },
  { title: "Birthdays",      desc: "Playful, celebratory portraits before the big day.",     href: "#",                     img: "/images/birthday-shoot.jpg" },
  { title: "Productshoots",  desc: "Clean, styled images for brands and campaigns.",         href: "#",                     img: "/images/port-4.jpg" },
  { title: "Events",         desc: "Candid, vibrant coverage of your special occasions.",    href: "#",                     img: "/images/port-5.jpg" },
  { title: "Outdoor Shoots", desc: "On-location storytelling across Ghana and beyond.",      href: "#",                     img: "/images/tours-image.webp" },
];

// Hero images for the two scrolling columns
const COL1 = ["/images/port-1.jpg","/images/portrait-img.jpg","/images/port-6.jpg","/images/wedidngs.jpg"];
const COL2 = ["/images/port-4.jpg","/images/portrait-img-2.jpg","/images/port-7.jpg","/images/experience-image.webp"];

export default function Portfolio() {
  useEffect(() => {
    document.title = "Portfolio – Butterfly Effect Photographs";
  }, []);

  return (
    <>
      <Navbar />
      <main>
        {/* HERO */}
        <section className="pf-hero">
          <div className="pf-hero-text">
            <p className="kicker">Portfolio</p>
            <h1 className="pf-hero-title">Choose Your<br /><em>Story</em></h1>
            <p className="pf-hero-intro">
              A curated selection of our finest works — portraits, weddings, beauty and beyond.
              Each image is crafted with attention to detail, lighting and authentic storytelling.
            </p>
            <a href={BOOK_URL} target="_blank" rel="noreferrer" className="btn btn-primary">
              Book a Session
            </a>
          </div>

          <div className="pf-hero-cols">
            <div className="pf-col pf-col-up">
              {[...COL1,...COL1].map((s,i) => (
                <div className="pf-col-img" key={i}>
                  <img src={s} alt="Portfolio image" loading="lazy" />
                </div>
              ))}
            </div>
            <div className="pf-col pf-col-down">
              {[...COL2,...COL2].map((s,i) => (
                <div className="pf-col-img" key={i}>
                  <img src={s} alt="Portfolio image" loading="lazy" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CATEGORY GRID */}
        <section className="pf-categories">
          <div className="pf-cat-header">
            <p className="kicker">Browse by Category</p>
            <h2 className="pf-cat-title">Explore the <em>Collection</em></h2>
          </div>
          <div className="pf-cat-grid">
            {CATEGORIES.map((cat, i) => (
              <Link to={cat.href} className="pf-cat-card" key={i} tabIndex={0}>
                <div className="pf-cat-img">
                  <img src={cat.img} alt={cat.title} loading="lazy" />
                  <div className="pf-cat-overlay" />
                </div>
                <div className="pf-cat-info">
                  <h3>{cat.title}</h3>
                  <p>{cat.desc}</p>
                  <span className="pf-cat-cta">View works →</span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
