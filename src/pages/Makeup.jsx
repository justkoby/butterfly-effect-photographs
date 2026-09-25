import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./Makeup.css";

const WHATSAPP = "https://wa.me/233508408086";
const CALL = "tel:+233508408086";

const PRODUCTS = [
  { title: "Everyday Glam Essentials", desc: "Skin tints, foundations, powders and blushes that flatter melanin-rich skin.", link: "https://www.instagram.com/coloursnbrushes_artistry/" },
  { title: "Tools & Brushes",          desc: "Brush sets, blenders and hygiene essentials to keep your kit clean and sharp.", link: "https://www.instagram.com/coloursnbrushes_artistry/" },
  { title: "Wigs & Hair Care",         desc: "Quality wigs, closures and products to match your glam with perfect hair.",      link: "https://www.instagram.com/coloursnbrushes_artistry/" },
];

const GALLERY_IMGS = [
  "/images/port-7.jpg", "/images/port-8.jpg", "/images/port-9.jpg",
  "/images/port-10.jpg", "/images/port-11.jpeg", "/images/port-12.jpg",
];

export default function Makeup() {
  useEffect(() => {
    document.title = "Makeup & Beauty – Colours & Brushes Artistry | Butterfly Effect Studio";
  }, []);

  return (
    <>
      <Navbar />
      <main>
        {/* HERO */}
        <section className="mu-hero">
          <div className="mu-hero-text">
            <p className="kicker">Colours &amp; Brushes_Artistry</p>
            <h1 className="mu-title">
              Makeup, Wigs &amp;<br /><em>Beauty Essentials.</em>
            </h1>
            <p className="mu-subtitle">
              Quality &amp; affordable makeup products, beauty tools and essentials,
              wigs and hair care — curated for everyday glam and special moments.
            </p>
            <div className="mu-ctas">
              <a href={CALL} className="btn btn-primary">
                📞 Call 050 840 8086
              </a>
              <a href={WHATSAPP} target="_blank" rel="noreferrer" className="btn btn-ghost">
                WhatsApp Us
              </a>
            </div>
            <a href="https://www.instagram.com/coloursnbrushes_artistry/" target="_blank" rel="noreferrer" className="mu-ig-link">
              View our Instagram →
            </a>
            <p className="mu-location">📍 Adenta, Housing Down</p>
          </div>

          <div className="mu-gallery">
            {GALLERY_IMGS.map((src, i) => (
              <div className="mu-gallery-img" key={i}>
                <img src={src} alt="Beauty and makeup photography" loading="lazy" />
              </div>
            ))}
          </div>
        </section>

        {/* PRODUCTS */}
        <section className="mu-products">
          <div className="mu-products-inner">
            <div className="mu-products-header">
              <p className="kicker">Our Range</p>
              <h2 className="mu-products-title">Curated For <em>Your Kit</em></h2>
              <p className="mu-products-sub">Build a pro-level kit without breaking the bank.</p>
            </div>
            <div className="mu-products-grid">
              {PRODUCTS.map((p, i) => (
                <div className="mu-card" key={i}>
                  <h3>{p.title}</h3>
                  <p>{p.desc}</p>
                  <a href={p.link} target="_blank" rel="noreferrer">Browse on Instagram →</a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* LOCATION */}
        <section className="mu-location-sec">
          <div className="mu-location-inner">
            <div className="mu-loc-text">
              <p className="kicker">Find Us</p>
              <h2 className="mu-loc-title">Visit Our <em>Corner</em></h2>
              <p>Find us at Adenta, Housing Down. Call or WhatsApp before visiting to confirm we are in studio.</p>
              <ul className="mu-loc-list">
                <li>📍 Adenta, Housing Down, Accra</li>
                <li>📞 <a href={CALL}>050 840 8086</a></li>
                <li>Instagram: <a href="https://www.instagram.com/coloursnbrushes_artistry/" target="_blank" rel="noreferrer">@coloursnbrushes_artistry</a></li>
              </ul>
            </div>
            <div className="mu-loc-map">
              <iframe
                title="Adenta Housing Down map"
                src="https://www.google.com/maps?q=Adenta+Housing+Down+Accra+Ghana&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
