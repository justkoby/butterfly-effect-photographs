import { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ParallaxImage from "../components/ParallaxImage";
import HowBookingWorks from "../components/HowBookingWorks";
import "./StudioRental.css";

/* ============================================================
   CONTENT VALUES FOR CONFIRMATION:
   - Flyer listed rate: GH₵100 / hour
   - Flyer rental-specific line: 055 839 9101
   - Website general studio line: 050 675 5037
   ============================================================ */
const RENTAL_RATE_PER_HOUR = "GH₵100 / hour";
const RENTAL_PHONE = "055 839 9101";
const STUDIO_PHONE = "050 675 5037";
const WHATSAPP_RENTAL = "https://wa.me/233558399101?text=Hello%20Butterfly%20Effect%20Studio,%20I%20am%20inquiring%20about%20booking%20the%20studio%20space.";
const EMAIL_RENTAL = "mailto:beffectphotographs@gmail.com?subject=Studio%20Rental%20Inquiry%20-%20Butterfly%20Effect";
const SETMORE_URL = "https://butterflyn21t.setmore.com/butterfly";

const INCLUDED_AMENITIES = [
  {
    title: "Backdrops & Backgrounds",
    desc: "Seamless colored paper rolls, textured backdrops, and solid neutral surfaces ready for your shoot.",
    icon: "🎨",
  },
  {
    title: "Professional Studio Lights",
    desc: "Complete lighting setup including high-output strobes, softboxes, diffusers, reflectors, and heavy-duty c-stands.",
    icon: "💡",
  },
  {
    title: "Dedicated Makeup Space",
    desc: "Well-lit vanity mirror station with comfortable seating and ample room for makeup artists and hairstylists.",
    icon: "💄",
  },
  {
    title: "Air-Conditioned Changing Area",
    desc: "Private wardrobe and changing area with clothing rack and full-length mirror for outfit changes.",
    icon: "👗",
  },
  {
    title: "Posing Props & Stools",
    desc: "Posing cubes, studio stools, chairs, and versatile staging props.",
    icon: "🪑",
  },
  {
    title: "High-Speed Wi-Fi & Parking",
    desc: "Seamless connectivity for client tethering plus secure on-site parking at the studio premises.",
    icon: "⚡",
  },
];

const SUITABLE_FOR = [
  "Fashion & Model Lookbooks",
  "Fine Art & Editorial Portraits",
  "Commercial & Product Photography",
  "Beauty & Hair Campaigns",
  "Video Podcasts & Interviews",
  "Creative Masterclasses & Content Creation",
];

const STUDIO_GALLERY = [
  { src: "/images/studio.png", alt: "Butterfly Effect main studio space with lights and backdrops", aspect: "16/10" },
  { src: "/images/about/studio-experience.webp", alt: "Creative lighting and portrait shoot in action", aspect: "4/5" },
  { src: "/images/about/studio-space.png", alt: "Studio backdrop selection and gear setup", aspect: "4/5" },
  { src: "/images/about/studio-bts.jpg", alt: "Creative team collaborating in the studio", aspect: "16/10" },
];

export default function StudioRental() {
  useEffect(() => {
    document.title = "Studio Rental in Adenta, Accra — Butterfly Effect Photographs";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="sr-page">
      <Navbar />

      <main className="sr-main">
        {/* HERO */}
        <section className="sr-hero">
          <div className="sr-container">
            <div className="sr-hero-grid">
              <div className="sr-hero-text">
                <div className="sr-hero-badge">
                  <span className="sr-badge-dot" />
                  <span>Creative Studio Space · Adenta, Accra</span>
                </div>
                <h1 className="sr-hero-title">
                  Room for your <em>vision.</em>
                </h1>
                <p className="sr-hero-desc">
                  A modern, light-controlled photography and film production studio
                  in Adenta, Accra. Equipped with backdrops, lighting rigs, and a
                  dedicated vanity space — designed for photographers, videographers,
                  and creative teams.
                </p>

                {/* RATE CARD WITH EXPLICIT CONFIRMATION NOTICE */}
                <div className="sr-rate-card">
                  <div className="sr-rate-main">
                    <span className="sr-rate-label">Studio Rental Rate</span>
                    <div className="sr-rate-amount">
                      <strong>{RENTAL_RATE_PER_HOUR}</strong>
                    </div>
                    <span className="sr-rate-note">
                      *Rate per studio rental flyer. Please confirm upon inquiry.
                    </span>
                  </div>

                  <div className="sr-rate-actions">
                    <a href={WHATSAPP_RENTAL} target="_blank" rel="noreferrer" className="btn btn-primary sr-hero-btn">
                      Inquire on WhatsApp
                    </a>
                    <a href={`tel:${RENTAL_PHONE.replace(/\s+/g, "")}`} className="btn btn-outline sr-hero-btn">
                      Call {RENTAL_PHONE}
                    </a>
                  </div>
                </div>
              </div>

              <div className="sr-hero-media">
                <ParallaxImage
                  src="/images/studio.png"
                  alt="Butterfly Effect Photographs Studio in Adenta"
                  aspectRatio="4/3"
                  speed={0.12}
                  priority={true}
                  className="sr-hero-img"
                />
                <div className="sr-hero-location-chip">
                  <span>📍 Adenta Housing Down, Accra</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* WHAT'S INCLUDED VS ADDITIONAL FEE */}
        <section className="sr-equipment-section" aria-labelledby="gear-heading">
          <div className="sr-container">
            <div className="sr-section-header">
              <span className="sr-kicker">Equipment &amp; Facilities</span>
              <h2 id="gear-heading" className="sr-section-title">
                What’s Included with Your Rental
              </h2>
              <p className="sr-section-sub">
                Our space is built to streamline your production. Walk in with your camera
                and get right to shooting with our prepped gear and amenities.
              </p>
            </div>

            <div className="sr-amenities-grid">
              {INCLUDED_AMENITIES.map((item, idx) => (
                <div className="sr-amenity-card" key={idx}>
                  <span className="sr-amenity-icon" aria-hidden="true">{item.icon}</span>
                  <h3 className="sr-amenity-title">{item.title}</h3>
                  <p className="sr-amenity-desc">{item.desc}</p>
                </div>
              ))}
            </div>

            {/* SEPARATE DISTINCTION: CAMERA AVAILABLE FOR ADDITIONAL FEE */}
            <div className="sr-camera-addon-banner" role="region" aria-label="Camera Rental Equipment Add-on">
              <div className="sr-camera-addon-icon">📷</div>
              <div className="sr-camera-addon-content">
                <div className="sr-addon-badge">Optional Add-On</div>
                <h3 className="sr-camera-addon-title">Camera &amp; Lens Rental (Additional Fee)</h3>
                <p className="sr-camera-addon-text">
                  Need a primary camera body or specialized prime/zoom lens for your session?
                  Professional camera gear is available on-site for an additional rental fee.
                  Please request camera equipment when reserving your date so we have your package
                  prepared and charged.
                </p>
              </div>
              <div className="sr-camera-addon-action">
                <a href={WHATSAPP_RENTAL} target="_blank" rel="noreferrer" className="btn btn-outline sr-addon-btn">
                  Request Gear List
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* SUITABLE FOR + GALLERY */}
        <section className="sr-space-section" aria-labelledby="space-heading">
          <div className="sr-container">
            <div className="sr-space-split">
              <div className="sr-space-info">
                <span className="sr-kicker">Production Scope</span>
                <h2 id="space-heading" className="sr-section-title">
                  What the Space Suits
                </h2>
                <p className="sr-space-text">
                  With controllable lighting, tall ceilings, and quiet surroundings, our
                  Adenta studio serves independent photographers, production teams, and brands.
                </p>
                <ul className="sr-suits-list">
                  {SUITABLE_FOR.map((suit, i) => (
                    <li key={i}>
                      <span className="sr-suits-check">✓</span>
                      <span>{suit}</span>
                    </li>
                  ))}
                </ul>

                <div className="sr-hours-card">
                  <h4>Studio Operating Hours</h4>
                  <p>Monday – Saturday: 8:00 AM – 6:00 PM</p>
                  <p className="sr-hours-sub">Early morning, evening, or Sunday sessions available upon request.</p>
                </div>
              </div>

              <div className="sr-space-gallery">
                <div className="sr-gallery-grid">
                  {STUDIO_GALLERY.map((img, i) => (
                    <div className="sr-gallery-cell" key={i}>
                      <ParallaxImage
                        src={img.src}
                        alt={img.alt}
                        aspectRatio={img.aspect}
                        speed={0.08}
                        className="sr-gallery-img"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* HOW BOOKING WORKS (STUDIO RENTAL ADAPTED) */}
        <section className="sr-process-section" id="rental-process" aria-label="Studio rental process">
          <div className="sr-container">
            <HowBookingWorks mode="rental" />
          </div>
        </section>

        {/* LOCATION, DIRECTIONS & INQUIRY ACTIONS */}
        <section className="sr-inquiry-section" id="rental-inquire" aria-labelledby="inquiry-heading">
          <div className="sr-container">
            <div className="sr-inquiry-box">
              <div className="sr-inquiry-header">
                <span className="sr-kicker">Find &amp; Contact Us</span>
                <h2 id="inquiry-heading" className="sr-inquiry-title">
                  Reserve the Studio in Adenta
                </h2>
                <p className="sr-inquiry-desc">
                  Located conveniently in the Adenta Municipality, Accra. Reach out
                  to verify your preferred dates and discuss your set specifications.
                </p>
              </div>

              <div className="sr-inquiry-grid">
                {/* Contact Columns */}
                <div className="sr-contact-column">
                  <h3 className="sr-contact-h">Rental Contacts</h3>
                  
                  <div className="sr-contact-item">
                    <span className="sr-contact-lbl">Studio Contact &amp; Booking Line:</span>
                    <a href={`tel:${RENTAL_PHONE.replace(/\s+/g, "")}`} className="sr-contact-val sr-highlight">
                      📞 {RENTAL_PHONE}
                    </a>
                  </div>

                  <div className="sr-contact-item">
                    <span className="sr-contact-lbl">Email Inquiries:</span>
                    <a href={EMAIL_RENTAL} className="sr-contact-val">
                      ✉️ beffectphotographs@gmail.com
                    </a>
                  </div>

                  <div className="sr-action-buttons">
                    <a href={WHATSAPP_RENTAL} target="_blank" rel="noreferrer" className="btn btn-primary sr-btn-lg">
                      Chat on WhatsApp
                    </a>
                    <a href={SETMORE_URL} target="_blank" rel="noreferrer" className="btn btn-outline sr-btn-lg">
                      Book Online Calendar
                    </a>
                  </div>
                </div>

                {/* Location & Directions Column */}
                <div className="sr-location-column">
                  <h3 className="sr-contact-h">Location &amp; Directions</h3>
                  <div className="sr-address-card">
                    <p><strong>Butterfly Effect Photographs Studio</strong></p>
                    <p>Adenta Housing Down</p>
                    <p>Accra, Ghana</p>
                  </div>

                  <span className="sr-directions-label">Directions: Butterfly Effect Photographs, Adenta</span>
                  <div className="sr-rides-group">
                    <a href="https://maps.google.com/?q=Butterfly+Effect+Photographs,+Adenta" target="_blank" rel="noreferrer" className="sr-ride-link sr-maps-link">
                      Google Maps ↗
                    </a>
                    <a href="https://bit.ly/bolt-directions" target="_blank" rel="noreferrer" className="sr-ride-link">
                      Bolt
                    </a>
                    <a href="https://m.uber.com/ul/?action=setPickup&dropoff[formatted_address]=Butterfly%20Effect%20Photographs,%20Adenta" target="_blank" rel="noreferrer" className="sr-ride-link">
                      Uber
                    </a>
                    <a href="https://maps.app.goo.gl/bTbZN2XXrbfatf8R8" target="_blank" rel="noreferrer" className="sr-ride-link">
                      Yango
                    </a>
                  </div>

                  <div className="sr-nav-back">
                    <Link to="/portfolio" className="sr-text-link">← Browse Studio Portfolio</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
