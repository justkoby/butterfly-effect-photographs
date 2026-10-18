import { useEffect, useRef, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { SESSION_TYPES, SHOOT_TYPES, STUDIO, buildSummary, formatPrice, getPackage, guidedReply, suggestedPackage, outfitLabel, sessionForBrief } from '../data/studio';
import './ShootPlanner.css';

const STARTERS = ['I want a classy birthday shoot.', 'Help me prepare for professional headshots.', 'I feel awkward posing. Can you help?', 'I would like to rent the studio.'];
export default function ShootPlanner() {
  const [params] = useSearchParams();
  const initial = getPackage(params.get('package'));
  const [brief, setBrief] = useState({ type: initial?.session === 'Couple' ? 'Couple' : initial?.session === 'Family' ? 'Family' : 'Birthday', session: initial?.session || 'Individual', outfits: initial?.outfits || 1, people: initial?.peopleMin || 3, photos: initial?.photos || 6, style: '', date: '' });
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [busy, setBusy] = useState(false);
  const [status, setStatus] = useState('AI advice when available · guided planning always available');
  const [copied, setCopied] = useState(false);
  const abortRef = useRef(null);
  const transcript = useRef(null);
  useEffect(() => {
    document.title = 'Plan Your Shoot | Butterfly Effect Photographs';
    return () => abortRef.current?.abort();
  }, []);
  useEffect(() => { transcript.current?.scrollTo({ top: transcript.current.scrollHeight, behavior: 'smooth' }); }, [messages, busy]);
  const pkg = suggestedPackage(brief);
  const session = sessionForBrief(brief);
  const summary = buildSummary(brief, pkg?.id, messages);
  const update = (key, value) => {
    setBrief(old => {
      const next = { ...old, [key]: value };
      if (key === 'session') {
        next.type = value === 'Individual' ? 'Portrait' : value;
        next.outfits = 1; next.photos = 6; next.people = 3;
      }
      if (key === 'type' && ['Couple', 'Family'].includes(value) && next.session !== value) {
        next.session = value; next.photos = 6; next.outfits = 1; next.people = 3;
      }
      return next;
    });
    setCopied(false);
  };
  async function send(text = input) {
    if (busy || !text.trim()) return;
    const next = [...messages, { role: 'user', text: text.trim().slice(0, 1200) }].slice(-11);
    // Always send complete recent turns, starting with a customer message.
    if (next[0]?.role === 'assistant') next.shift();
    setMessages(next); setInput(''); setBusy(true); setCopied(false);
    abortRef.current = new AbortController();
    const timeout = setTimeout(() => abortRef.current?.abort(), 22000);
    try {
      const response = await fetch('/api/shoot-planner', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ messages: next, brief }), signal: abortRef.current.signal });
      const data = await response.json();
      if (!response.ok || typeof data.reply !== 'string' || !data.reply.trim()) throw new Error(response.status === 429 ? 'Please wait a minute before asking again.' : 'Guided planner · AI is currently unavailable');
      setMessages([...next, { role: 'assistant', text: data.reply }]);
      setStatus('AI advice · studio confirmation required');
    } catch (error) {
      if (abortRef.current?.signal.aborted && !transcript.current) return;
      setMessages([...next, { role: 'assistant', text: guidedReply(brief) }]);
      setStatus(error.name === 'AbortError' ? 'Guided planner · AI took too long to respond' : error.message === 'Please wait a minute before asking again.' ? error.message : 'Guided planner · AI is currently unavailable');
    } finally { clearTimeout(timeout); setBusy(false); }
  }
  async function copyBrief() {
    try { await navigator.clipboard.writeText(summary); setCopied(true); } catch { setStatus('Copy is unavailable here. Select and copy the enquiry text below.'); }
  }
  return <><Navbar /><main className="planner-page">
    <header className="planner-intro"><p className="kicker">A little inspiration. A clearer plan.</p><h1>Let’s plan <em>your shoot.</em></h1><p>Bring an idea, an occasion, or just yourself. Find a direction you love, then let’s make it happen in our Adenta studio.</p></header>
    <div className="planner-grid">
      <section className="planner-conversation" aria-labelledby="planner-chat-title">
        <div className="planner-panel-heading"><div><span className="planner-spark" aria-hidden="true">✦</span><h2 id="planner-chat-title">Your creative starting point</h2></div><p role="status">{status}</p></div>
        <div className="planner-transcript" ref={transcript} role="log" aria-label="Shoot planning conversation" aria-live="polite" aria-busy={busy}>
          <div className="planner-message assistant"><span>STUDIO ASSISTANT</span><p>What are we celebrating or creating? Tell me your idea, or choose a starting point below. Set your shoot details alongside our conversation to build your enquiry.</p></div>
          {!messages.length && <div className="planner-starters">{STARTERS.map(text => <button key={text} disabled={busy} onClick={() => { if (text.includes('rent')) update('type', 'Studio rental'); else if (text.includes('headshots')) update('type', 'Headshots'); setInput(text); }}>{text} <span aria-hidden="true">↗</span></button>)}</div>}
          {messages.map((m, i) => <div className={`planner-message ${m.role}`} key={i}><span>{m.role === 'user' ? 'YOU' : 'STUDIO ASSISTANT'}</span><p>{m.text}</p></div>)}
          {busy && <p className="planner-thinking" role="status">Thinking through your ideas…</p>}
        </div>
        <form className="planner-composer" onSubmit={e => { e.preventDefault(); send(); }}>
          <label htmlFor="planner-message">Tell us what you have in mind</label><textarea id="planner-message" value={input} onChange={e => setInput(e.target.value)} maxLength={1200} rows={3} placeholder="A birthday shoot with two outfits, soft lighting and a little drama…" disabled={busy} required />
          <div><small>Messages are sent to Google for AI replies. Avoid sensitive details.</small><button type="submit" disabled={busy || !input.trim()}>{busy ? 'Planning…' : 'Explore my idea ↗'}</button></div>
        </form>
      </section>
      <aside className="planner-brief" aria-labelledby="planner-brief-title"><p className="kicker">Make it yours</p><h2 id="planner-brief-title">Your shoot brief</h2><p className="planner-muted">Edit these details anytime. They shape your package and enquiry.</p>
        <div className="planner-fields"><label>Session category<select value={session} onChange={e => update('session', e.target.value)} disabled={busy}>{SESSION_TYPES.map(type => <option key={type}>{type}</option>)}</select></label>
          <label>Shoot type<select value={brief.type} onChange={e => update('type', e.target.value)} disabled={busy}>{SHOOT_TYPES.map(type => <option key={type}>{type}</option>)}</select></label>
          <label>Outfits<select value={brief.outfits} onChange={e => update('outfits', Number(e.target.value))} disabled={busy}>{[1, 2, 3].map(count => <option key={count} value={count}>{count} outfit{count > 1 ? 's' : ''}</option>)}</select></label>
          {session === 'Couple' && <label>Retouched photos<select value={brief.photos} onChange={e => update('photos', Number(e.target.value))} disabled={busy}>{[6, 9, 12].map(count => <option key={count} value={count}>{count} photos</option>)}</select></label>}
          {session === 'Family' && <label>Family size<select value={brief.people} onChange={e => update('people', Number(e.target.value))} disabled={busy}>{[3, 4, 5, 6, 7].map(count => <option key={count} value={count}>{count === 7 ? '7 or more people (custom quote)' : `${count} people`}</option>)}</select></label>}
          <label>Preferred date <span>(optional)</span><input type="date" value={brief.date} onChange={e => update('date', e.target.value)} disabled={busy} /></label>
          <label>Creative direction <span>(optional)</span><input maxLength={200} value={brief.style} onChange={e => update('style', e.target.value)} placeholder="Minimal, bold, romantic…" disabled={busy} /></label>
        </div>
        <div className="planner-package" aria-live="polite"><p className="kicker">{pkg ? `${pkg.session} studio package` : 'Tailored to your project'}</p><h3>{pkg ? `${pkg.name} · ${formatPrice(pkg.price)}` : 'Let’s discuss your scope'}</h3><p>{pkg ? `${pkg.photos} retouched photos · ${outfitLabel(pkg)}` : 'No listed package matches these details. Adjust your selections or ask the studio for a tailored quote.'}</p><small>{pkg ? `For a ${pkg.session.toLowerCase()} studio session${pkg.peopleMin ? ` with ${pkg.peopleMin === pkg.peopleMax ? pkg.peopleMin : `${pkg.peopleMin}–${pkg.peopleMax}`} people` : ''}. Additional or commercial requirements need studio confirmation.` : 'Tell the team about your location, timing and requirements.'}</small></div>
        <details className="planner-summary"><summary>Review your enquiry</summary><pre>{summary}</pre></details>
        <a className="planner-whatsapp" href={`https://wa.me/${STUDIO.whatsapp}?text=${encodeURIComponent(summary)}`} target="_blank" rel="noreferrer">Send enquiry on WhatsApp ↗</a>
        <button className="planner-copy" onClick={copyBrief}>{copied ? 'Brief copied ✓' : 'Copy my brief'}</button>
        <a className="planner-calendar" href={STUDIO.bookingUrl} target="_blank" rel="noreferrer">Open booking calendar ↗</a><p className="planner-footnote">Your brief is not sent to Setmore automatically. Copy it to include in your booking notes. Dates, final pricing and deposits are confirmed by the studio.</p>
      </aside>
    </div><p className="planner-bottom">Prefer to browse first? <Link to="/portfolio">Explore our photography →</Link></p>
  </main><Footer /></>;
}
