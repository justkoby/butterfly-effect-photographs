import { useEffect, useRef } from "react";
import "./InfiniteGallery.css";

// Curated image sequence for the scrolling strip
const GALLERY_IMAGES = [
  { src: "/images/portrait-img.jpg",      alt: "Fine art portrait" },
  { src: "/images/wedding-image.jpg",     alt: "Traditional wedding couple" },
  { src: "/images/fine-art-01.webp",      alt: "Fine art portrait with veil" },
  { src: "/images/weddingsss.jpg",        alt: "Bridal portrait" },
  { src: "/images/portrait-img-2.jpg",    alt: "Studio portrait" },
  { src: "/images/birthday-shoot-4.jpg",  alt: "Editorial portrait" },
  { src: "/images/experience-image.webp", alt: "Couple session" },
  { src: "/images/port-6.jpg",            alt: "Creative editorial" },
  { src: "/images/birthday-shoot-2.jpg",  alt: "Birthday shoot" },
  { src: "/images/portrait-img-3.jpg",    alt: "Beauty portrait" },
  { src: "/images/port-1.jpg",            alt: "Studio session" },
  { src: "/images/port-7.jpg",            alt: "Glam shoot" },
];

function GalleryTrack({ images, speed = 40, dir = 1 }) {
  const trackRef = useRef(null);
  const rafRef = useRef(null);
  const posRef = useRef(0);
  const pausedRef = useRef(false);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const step = () => {
      if (!pausedRef.current) {
        posRef.current -= dir * (speed / 60);
        const half = track.scrollWidth / 2;
        if (Math.abs(posRef.current) >= half) posRef.current = 0;
        track.style.transform = `translateX(${posRef.current}px)`;
      }
      rafRef.current = requestAnimationFrame(step);
    };

    rafRef.current = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafRef.current);
  }, [speed, dir]);

  const pause = () => { pausedRef.current = true; };
  const resume = () => { pausedRef.current = false; };

  const doubled = [...images, ...images];

  return (
    <div
      className="gallery-track-wrap"
      onMouseEnter={pause}
      onMouseLeave={resume}
      onFocus={pause}
      onBlur={resume}
    >
      <div className="gallery-track" ref={trackRef}>
        {doubled.map((img, i) => (
          <div className="gallery-item" key={i}>
            <img src={img.src} alt={img.alt} loading="lazy" draggable={false} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function InfiniteGallery() {
  return (
    <section className="infinite-gallery" aria-label="Image gallery">
      <div className="ig-label">
        <span className="kicker">Selected Work</span>
      </div>
      <GalleryTrack images={GALLERY_IMAGES} speed={36} dir={1} />
    </section>
  );
}
