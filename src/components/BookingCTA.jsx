import "./BookingCTA.css";

const BOOK_URL = "https://butterflyn21t.setmore.com/butterfly";

export default function BookingCTA() {
  return (
    <section className="booking-cta" aria-label="Book a session">
      <div className="booking-bg" aria-hidden="true">
        <img src="/images/port-6.jpg" alt="" />
        <div className="booking-overlay" />
      </div>
      <div className="booking-content">
        <p className="kicker">Ready to Create?</p>
        <h2 className="booking-title">
          Let us tell<br /><em>your story.</em>
        </h2>
        <p className="booking-sub">
          Book your session online — portraits, weddings, commercial or studio rental.
        </p>
        <a href={BOOK_URL} target="_blank" rel="noreferrer" className="btn btn-primary booking-btn">
          Book a Session
        </a>
      </div>
    </section>
  );
}
