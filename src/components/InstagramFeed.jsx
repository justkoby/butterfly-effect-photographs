import "./InstagramFeed.css";

export default function InstagramFeed() {
  return (
    <section className="ig-section" aria-label="Instagram feed">
      <div className="ig-inner">
        <div className="ig-header">
          <p className="kicker">Follow Our Creative Journey</p>
          <h2 className="ig-title">
            @butterfly_effect_<br />
            <em>photographs</em>
          </h2>
          <p className="ig-sub">
            Behind-the-scenes, new projects, photoshoots, videoshoots and
            podcast sets from our studio.
          </p>
          <a
            href="https://www.instagram.com/butterfly_effect_photographs/"
            target="_blank"
            rel="noreferrer"
            className="ig-follow-btn"
            aria-label="Follow on Instagram"
          >
            Follow on Instagram →
          </a>
        </div>

        <div className="ig-widget-wrap">
          {/* Elfsight Instagram Feed */}
          <script src="https://elfsightcdn.com/platform.js" async defer />
          <div className="elfsight-app-defa405f-4dc9-4794-9ae5-260c60dd2a86" data-elfsight-app-lazy />
        </div>
      </div>
    </section>
  );
}
