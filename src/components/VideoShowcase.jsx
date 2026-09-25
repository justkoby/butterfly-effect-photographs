import "./VideoShowcase.css";

export default function VideoShowcase() {
  return (
    <section className="video-showcase" aria-label="Behind the scenes video">
      <div className="video-wrap">
        <video
          className="showcase-video"
          autoPlay
          muted
          loop
          playsInline
          poster="/images/bg-01.webp"
          aria-label="Behind the scenes of Butterfly Effect Photographs"
        >
          <source
            src="https://res.cloudinary.com/justkoby/video/upload/v1790305072/vvvvv_mfjjel.mp4"
            type="video/mp4"
          />
        </video>
        <div className="video-overlay" aria-hidden="true" />

        <div className="video-content">
          <p className="kicker">Behind the Lens</p>
          <h2 className="video-title">
            The Butterfly<br />
            <em>Effect in Motion</em>
          </h2>
          <p className="video-sub">
            A glimpse behind the scenes of our photoshoots, videoshoots and studio sessions.
          </p>
        </div>

        {/* Corner accents */}
        <div className="vc vc-tl" aria-hidden="true" />
        <div className="vc vc-br" aria-hidden="true" />
      </div>
    </section>
  );
}
