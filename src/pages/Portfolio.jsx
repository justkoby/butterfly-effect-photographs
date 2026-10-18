import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { PORTFOLIO_CATEGORIES } from '../data/portfolioData';
import './Portfolio.css';

export default function Portfolio() {
  useEffect(() => { document.title = 'Photography Portfolio | Butterfly Effect Photographs'; }, []);
  return <><Navbar /><main className="pf-main">
    <header className="pf-intro">
      <div><p className="kicker">Butterfly Effect Photographs · Selected work</p><h1>A little of <em>what we see.</em></h1></div>
      <p>People, connection and the moments worth keeping. Find the collection that feels like you.</p>
    </header>
    <nav className="pf-collection-nav" aria-label="Jump to a collection">
      {PORTFOLIO_CATEGORIES.map(cat => <a key={cat.slug} href={`#collection-${cat.slug}`}>{cat.navTitle}</a>)}
    </nav>
    <section className="pf-collections" aria-label="Photography collections">
      <div className="pf-cat-grid">
        {PORTFOLIO_CATEGORIES.map((cat, i) => <Link to={`/portfolio/${cat.slug}`} className="pf-cat-card" key={cat.slug} id={`collection-${cat.slug}`}>
          <div className="pf-cat-img"><img src={cat.cover} alt={cat.images.find(img => img.src === cat.cover)?.alt || `${cat.title} photograph`} width={cat.images.find(img => img.src === cat.cover)?.width} height={cat.images.find(img => img.src === cat.cover)?.height} loading={i < 3 ? 'eager' : 'lazy'} /></div>
          <div className="pf-cat-info"><div><span className="pf-cat-number">{String(i + 1).padStart(2, '0')}</span><h2>{cat.title}</h2></div><span className="pf-cat-arrow" aria-hidden="true">↗</span></div>
          <p className="pf-cat-tagline">{cat.tagline}</p>
        </Link>)}
      </div>
    </section>
    <section className="pf-next-step" aria-labelledby="pf-next-title"><div><p className="kicker">Inspired by something?</p><h2 id="pf-next-title">Let’s make it <em>yours.</em></h2><p>Choose a package or bring your own idea. We’ll help shape the details.</p></div><div className="pf-next-actions"><Link to="/plan-your-shoot" className="btn btn-primary">Plan Your Shoot ✦</Link><Link to="/#packages" className="pf-pricing-link">View session packages →</Link></div></section>
  </main><Footer /></>;
}
