import { useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { PORTFOLIO_CATEGORIES, PORTFOLIO_ALIASES, BOOK_URL } from '../data/portfolioData';
import './PortfolioCategory.css';

export default function PortfolioCategory({ categoryOverride }) {
  const { categorySlug } = useParams();
  const slug = categoryOverride || categorySlug;
  const category = PORTFOLIO_CATEGORIES.find(cat => cat.slug === slug);
  useEffect(() => { if (category) document.title = `${category.title} Portfolio | Butterfly Effect Photographs`; }, [category]);
  if (PORTFOLIO_ALIASES[slug]) return <Navigate to={`/portfolio/${PORTFOLIO_ALIASES[slug]}`} replace />;
  if (!category) return <Navigate to="/portfolio" replace />;
  const next = PORTFOLIO_CATEGORIES[(PORTFOLIO_CATEGORIES.indexOf(category) + 1) % PORTFOLIO_CATEGORIES.length];
  return <><Navbar /><main className="collection-page">
    <nav className="collection-nav" aria-label="Portfolio categories"><Link to="/portfolio">All work</Link>{PORTFOLIO_CATEGORIES.map(cat => <Link key={cat.slug} to={`/portfolio/${cat.slug}`} aria-current={cat.slug === slug ? 'page' : undefined}>{cat.navTitle}</Link>)}</nav>
    <header className="collection-header"><p className="kicker">Portfolio / {category.navTitle}</p><h1>{category.title}</h1><p className="collection-tagline">{category.tagline}</p><p className="collection-description">{category.desc}</p></header>
    <section className="collection-photos" aria-label={`${category.title} photographs`}>
      {category.images.map((img, i) => <figure key={img.src}><img src={img.src} alt={img.alt} width={img.width} height={img.height} loading={i < 3 ? 'eager' : 'lazy'} decoding="async" /></figure>)}
    </section>
    <section className="collection-end"><div><p className="kicker">Your story, next</p><h2>Have something <em>in mind?</em></h2><div className="collection-actions"><Link to="/plan-your-shoot" className="btn btn-primary">Plan Your Shoot ✦</Link><a href={BOOK_URL} target="_blank" rel="noreferrer" className="collection-text-link">Open booking calendar ↗</a></div></div><Link to={`/portfolio/${next.slug}`} className="collection-next"><span>Next collection</span><strong>{next.title} ↗</strong></Link></section>
  </main><Footer /></>;
}
