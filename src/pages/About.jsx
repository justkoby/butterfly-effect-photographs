import { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ParallaxImage from "../components/ParallaxImage";
import "./About.css";

const BOOK_URL = "https://butterflyn21t.setmore.com/butterfly";
const INSTAGRAM_URL = "https://www.instagram.com/sk_bryan.gh/";

// Restrained list of studio work (replacing numerical statistics)
const DISCIPLINES = [
  { id: "01", name: "Portraits", desc: "Fine art, fashion, editorial and concept-driven sessions." },
  { id: "02", name: "Weddings", desc: "Documentary candids, timeless formals, and heartfelt moments." },
  { id: "03", name: "Events", desc: "Comprehensive celebratory and brand event coverage." },
  { id: "04", name: "Commercial", desc: "Tailored campaigns, lookbooks, and visual brand assets." },
  { id: "05", name: "Videography", desc: "Cinematic highlight films and narrative visual media." },
  { id: "06", name: "Studio Rental", desc: "Fully equipped creative studio space in Adenta, Accra." },
];

export default function AboutPage() {
  useEffect(() => {
    document.title = "About Us — Butterfly Effect Photographs · Accra, Ghana";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="about-page">
      <Navbar />

      <main className="about-main" id="main-content">
        {/* SECTION 01: ABOUT THE STUDIO */}
        <section className="ap-section ap-section-studio" aria-labelledby="sec-01-heading">
          <div className="ap-container">
            {/* Top metadata row */}
            <div className="ap-meta-row">
              <span className="ap-badge">
                <span className="ap-dot" aria-hidden="true" />
                About
              </span>
              <span className="ap-index" aria-hidden="true">(01)</span>
            </div>

            {/* Editorial Header & Split Content */}
            <div className="ap-studio-grid">
              <div className="ap-studio-left">
                <p className="ap-body-lead">
                  Butterfly Effect Photographs is a photography and videography studio
                  based in Adenta, Accra. We create portraits, document celebrations,
                  and produce visual stories for people and brands. Every project begins
                  with understanding what matters to the person in front of the camera.
                </p>

                <div className="ap-location-pill">
                  <span className="ap-loc-dot" />
                  <span>Studio Location: Adenta Municipality · Accra, Ghana</span>
                </div>
              </div>

              <div className="ap-studio-right">
                <h1 id="sec-01-heading" className="ap-headline">
                  Photography that makes a moment last.
                </h1>

                {/* Wide behind-the-scenes/studio image */}
                <div className="ap-wide-image-wrapper">
                  <ParallaxImage
                    src="/images/about/studio-bts.jpg"
                    alt="Behind the scenes at Butterfly Effect Photographs studio"
                    aspectRatio="16/10"
                    speed={0.1}
                    priority={true}
                    className="ap-wide-img"
                  />
                  <div className="ap-image-caption">
                    <span>Adenta Studio · Behind the scenes</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 02: OUR APPROACH */}
        <section className="ap-section ap-section-approach" aria-labelledby="sec-02-heading">
          <div className="ap-container">
            {/* Top metadata row */}
            <div className="ap-meta-row">
              <span className="ap-badge">
                <span className="ap-dot" aria-hidden="true" />
                Our approach
              </span>
              <span className="ap-index" aria-hidden="true">(02)</span>
            </div>

            {/* Prominent heading spanning the top */}
            <h2 id="sec-02-heading" className="ap-headline ap-headline-approach">
              Made with intention. Remembered for years.
            </h2>

            {/* Two-column layout: portrait image left, copy + restrained list right */}
            <div className="ap-approach-grid">
              <div className="ap-approach-media">
                <ParallaxImage
                  src="/images/about/studio-experience.webp"
                  alt="Photography session and creative lighting in Adenta studio"
                  aspectRatio="3/4"
                  speed={0.12}
                  className="ap-portrait-img"
                />
              </div>

              <div className="ap-approach-content">
                <div className="ap-paragraphs">
                  <p className="ap-body-text">
                    Our work brings together thoughtful direction, lighting, and
                    attention to the moments that happen naturally. From studio
                    portraits and weddings to events and commercial projects, we
                    shape each session around the people and purpose behind it.
                  </p>
                  <p className="ap-body-text">
                    Our Adenta studio gives us room to build a look with professional
                    lighting and backdrops, while location work lets us tell stories
                    in the places where they unfold.
                  </p>
                </div>

                {/* Restrained list of our work replacing statistics */}
                <div className="ap-disciplines-block">
                  <h3 className="ap-disciplines-heading">Our Disciplines</h3>
                  <div className="ap-disciplines-grid">
                    {DISCIPLINES.map(item => (
                      <div className="ap-discipline-item" key={item.id}>
                        <span className="ap-disc-id">{item.id}</span>
                        <div className="ap-disc-body">
                          <strong className="ap-disc-name">{item.name}</strong>
                          <span className="ap-disc-desc">{item.desc}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 03: HEAD PHOTOGRAPHER */}
        <section className="ap-section ap-section-team" aria-labelledby="sec-03-heading">
          <div className="ap-container">
            {/* Top metadata row */}
            <div className="ap-meta-row">
              <span className="ap-badge">
                <span className="ap-dot" aria-hidden="true" />
                Head Photographer
              </span>
              <span className="ap-index" aria-hidden="true">(03)</span>
            </div>

            {/* Editorial Heading */}
            <h2 id="sec-03-heading" className="ap-headline ap-headline-team">
              The eye behind the frame.
            </h2>

            {/* Profile Card Layout — given significant presence */}
            <div className="ap-profile-card">
              {/* Main Portrait Slot (User supplied image) */}
              <div className="ap-profile-media-slot" data-slot="main-portrait">
                <ParallaxImage
                  src="/images/about/head-photographer-portrait.jpg"
                  alt="Head photographer reviewing photographs on camera"
                  aspectRatio="4/5"
                  speed={0.1}
                  objectPosition="center 20%"
                  className="ap-lead-portrait"
                />
              </div>

              {/* Profile Details */}
              <div className="ap-profile-details">
                <div className="ap-profile-header">
                  <span className="ap-role-kicker">Head Photographer</span>
                  <h3 className="ap-photographer-name">SK Bryan</h3>
                </div>

                <p className="ap-photographer-bio">
                  Our head photographer leads the visual direction behind Butterfly
                  Effect Photographs, bringing care to the people, light, and details
                  in every frame.
                </p>

                {/* Instagram Profile Link */}
                <div className="ap-profile-socials">
                  <a
                    href={INSTAGRAM_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="ap-ig-pill"
                    aria-label="Visit SK Bryan on Instagram (@sk_bryan.gh)"
                  >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect x="2" y="2" width="20" height="20" rx="5" />
                      <circle cx="12" cy="12" r="4" />
                      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
                    </svg>
                    <span>@sk_bryan.gh</span>
                    <span className="ap-ig-arrow">↗</span>
                  </a>
                </div>
              </div>
            </div>

            {/* WORKING PHOTOGRAPHS SLOTS (On location & behind the scenes) */}
            <div className="ap-working-shots">
              <div className="ap-working-meta">
                <span className="ap-working-label">In the field · Working photographs</span>
              </div>

              <div className="ap-working-grid">
                {/* Working Photo Slot 1 (User supplied image) */}
                <div className="ap-working-slot" data-slot="working-photo-1">
                  <ParallaxImage
                    src="/images/about/head-photographer-working-1.jpg"
                    alt="Head photographer on location with camera"
                    aspectRatio="3/4"
                    speed={0.08}
                    className="ap-working-img"
                  />
                  <div className="ap-working-caption">
                    <span>Slot 01: On Location · Coastal Architecture</span>
                  </div>
                </div>

                {/* Working Photo Slot 2 (Prepared slot ready for user's additional asset) */}
                <div className="ap-working-slot" data-slot="working-photo-2">
                  <ParallaxImage
                    src="/images/about/head-photographer-working-2.png"
                    alt="Head photographer directing in the studio"
                    aspectRatio="3/4"
                    speed={0.08}
                    className="ap-working-img"
                  />
                  <div className="ap-working-caption">
                    <span>Slot 02: Studio Direction &amp; Camera Craft</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Dedicated session invitation banner */}
            <div className="ap-booking-banner">
              <div className="ap-booking-banner-text">
                <span className="ap-booking-kicker">Start a Conversation</span>
                <h3 className="ap-booking-title">Ready to create something memorable?</h3>
                <p className="ap-booking-desc">
                  Whether you are planning a wedding, booking an intimate studio portrait,
                  or producing a commercial campaign, we look forward to collaborating with you.
                </p>
              </div>
              <div className="ap-booking-actions">
                <a
                  href={BOOK_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-primary ap-book-cta"
                >
                  Book a Session
                </a>
                <Link to="/portfolio" className="btn btn-outline ap-portfolio-cta">
                  Explore Portfolio
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
