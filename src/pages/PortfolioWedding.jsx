import { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./PortfolioWedding.css";

const BOOK_URL = "https://butterflyn21t.setmore.com/butterfly";

const WEDDING_IMGS = [
  { src: "/images/wedidngs.jpg",       alt: "Wedding ceremony photography" },
  { src: "/images/weddingsss.jpg",     alt: "Wedding couple portrait" },
  { src: "/images/wedding-image.jpg",  alt: "Wedding day candid moment" },
];

export default function PortfolioWedding() {
  useEffect(() => {
    document.title = "Wedding Photography – Butterfly Effect Photographs";
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <section className="pw-hero">
          <div className="pw-hero-content">
            <p className="kicker">Portfolio / Wedding</p>
            <h1 className="pw-title">Love, <em>Documented.</em></h1>
            <p className="pw-desc">
              Soft romance, real moments and editorial candids — each wedding story
              captured with authenticity and unobtrusive artistry.
            </p>
            <div className="pw-ctas">
              <a href={BOOK_URL} target="_blank" rel="noreferrer" className="btn btn-primary">Book Your Wedding</a>
              <Link to="/portfolio" className="btn btn-ghost">All Categories</Link>
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
      </main>
      <Footer />
    </>
  );
}
