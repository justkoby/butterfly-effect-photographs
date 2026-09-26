import { useRef, useEffect, useState } from "react";
import "./ParallaxImage.css";

export default function ParallaxImage({
  src,
  alt,
  className = "",
  aspectRatio,
  speed = 0.1,
  objectPosition = "center",
  priority = false,
}) {
  const containerRef = useRef(null);
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    // Disable if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    let ticking = false;

    const onScrollOrResize = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (!containerRef.current) {
            ticking = false;
            return;
          }

          const rect = containerRef.current.getBoundingClientRect();
          const winHeight = window.innerHeight;

          // Process only if in or near viewport
          if (rect.bottom >= -80 && rect.top <= winHeight + 80) {
            const isMobile = window.innerWidth <= 768;
            // On mobile, reduce the speed significantly to preserve composition
            const activeSpeed = isMobile ? speed * 0.2 : speed;
            const elementCenter = rect.top + rect.height / 2;
            const screenCenter = winHeight / 2;
            const rawOffset = (elementCenter - screenCenter) * activeSpeed;

            // Restrain max shift so image always stays securely inside bounds
            const maxShift = isMobile ? 12 : 36;
            const clamped = Math.max(-maxShift, Math.min(maxShift, rawOffset));
            setOffsetY(clamped);
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScrollOrResize, { passive: true });
    window.addEventListener("resize", onScrollOrResize, { passive: true });
    onScrollOrResize();

    return () => {
      window.removeEventListener("scroll", onScrollOrResize);
      window.removeEventListener("resize", onScrollOrResize);
    };
  }, [speed]);

  return (
    <div
      ref={containerRef}
      className={`parallax-frame ${className}`}
      style={aspectRatio ? { aspectRatio } : undefined}
    >
      <img
        src={src}
        alt={alt}
        loading={priority ? "eager" : "lazy"}
        className="parallax-img"
        style={{
          objectPosition,
          transform: `translate3d(0, ${offsetY}px, 0) scale(1.12)`,
        }}
      />
    </div>
  );
}
