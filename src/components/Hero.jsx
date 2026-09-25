import { useEffect, useRef } from "react";
import "./Hero.css";

const BOOK_URL = "https://butterflyn21t.setmore.com/butterfly";
const HERO_IMAGES = [
  { src: "/images/bg-01.webp", alt: "Editorial portrait – Butterfly Effect Photographs" },
  { src: "/images/portrait-img.jpg", alt: "Fine art portrait in natural light" },
  { src: "/images/experience-image.webp", alt: "Couple photography session" },
];

export default function Hero() {
  const activeIdx = useRef(0);
  const slidesRef = useRef([]);
  const timerRef = useRef(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;
    timerRef.current = setInterval(() => {
      const slides = slidesRef.current;
      if (!slides.length) return;
      slides[activeIdx.current]?.classList.remove("active");
      activeIdx.current = (activeIdx.current + 1) % slides.length;
      slides[activeIdx.current]?.classList.add("active");
    }, 5000);
    return () => clearInterval(timerRef.current);
  }, []);

  return (
    <section className="hero" aria-label="Hero">
      {/* Viewfinder corners */}
      <div className="vf vf-tl" aria-hidden="true"><span className="vf-h" /><span className="vf-v" /></div>
      <div className="vf vf-tr" aria-hidden="true"><span className="vf-h" /><span className="vf-v" /></div>
      <div className="vf vf-bl" aria-hidden="true"><span className="vf-h" /><span className="vf-v" /></div>
      <div className="vf vf-br" aria-hidden="true"><span className="vf-h" /><span className="vf-v" /></div>
      {/* Crosshair center dot */}
      <div className="vf-center" aria-hidden="true"><span className="vf-dot" /></div>
      {/* Horizontal scanning line */}
      <div className="scan-line" aria-hidden="true" />

      {/* Slide images */}
      <div className="hero-slides" aria-hidden="true">
        {HERO_IMAGES.map((img, i) => (
          <div
            key={i}
            className={`hero-slide${i === 0 ? " active" : ""}`}
            ref={el => (slidesRef.current[i] = el)}
          >
            <img src={img.src} alt={img.alt} loading={i === 0 ? "eager" : "lazy"} />
          </div>
        ))}
        <div className="hero-overlay" />
      </div>

      {/* Content */}
      <div className="hero-content">
        <h1 className="hero-title">
          <span className="title-line">Where Every <br className="br-desktop" /><em>Click</em></span>{" "}
          <span className="title-line">Tells <br className="br-desktop" />a Story.</span>
        </h1>
        <div className="hero-ctas">
          <a href={BOOK_URL} target="_blank" rel="noreferrer" className="btn btn-primary">
            Book a Session
          </a>
          <a href="#about" className="btn btn-ghost">
            Discover Our Work
          </a>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="scroll-hint" aria-label="Scroll down">
        <span className="scroll-hint-line" />
        <span className="scroll-hint-text">Scroll</span>
      </div>
    </section>
  );
}
