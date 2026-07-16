import { Fragment, useEffect, useMemo, useState } from 'react';
import { CATEGORIES, FAQS, VIDEO_SRC_LANDSCAPE, VIDEO_SRC_PORTRAIT } from './data/faqs';
import './App.css';

const SHOW_REGULATORY = true;
const MOBILE_VIDEO_BREAKPOINT = 640;

function useIsMobile(breakpoint) {
  const [isMobile, setIsMobile] = useState(
    () => window.matchMedia(`(max-width: ${breakpoint}px)`).matches
  );
  useEffect(() => {
    const mq = window.matchMedia(`(max-width: ${breakpoint}px)`);
    const onChange = e => setIsMobile(e.matches);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, [breakpoint]);
  return isMobile;
}

function SearchIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="search-icon">
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}

function PlayIcon() {
  return (
    <svg width="8" height="8" viewBox="0 0 24 24" fill="currentColor">
      <polygon points="6,4 20,12 6,20" />
    </svg>
  );
}

function ChevronIcon() {
  return (
    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="nav-chevron">
      <polyline points="6,9 12,15 18,9" />
    </svg>
  );
}

const NAV_ITEMS = [
  { label: 'Flex', dropdown: true },
  { label: 'Loans', dropdown: true },
  { label: 'Resources', dropdown: true },
  { label: 'Contact Us', dropdown: false },
];

function VideoBlock({ caption }) {
  const isMobile = useIsMobile(MOBILE_VIDEO_BREAKPOINT);
  const src = isMobile ? VIDEO_SRC_PORTRAIT : VIDEO_SRC_LANDSCAPE;

  return (
    <figure className={`faq-video ${isMobile ? 'faq-video--portrait' : ''}`}>
      <video
        key={src}
        controls
        preload="metadata"
        src={src}
      />
      <figcaption>{caption}</figcaption>
    </figure>
  );
}

function AnswerBlocks({ text }) {
  const blocks = text.split(/\n\s*\n/).map(b => b.trim()).filter(Boolean);
  return blocks.map((block, i) => {
    const lines = block.split('\n').map(l => l.trim()).filter(Boolean);
    const isList = lines.length > 0 && lines.every(l => l.startsWith('- '));
    if (isList) {
      return (
        <ul key={i}>
          {lines.map((l, j) => <li key={j}>{l.slice(2)}</li>)}
        </ul>
      );
    }
    return <p key={i}>{block}</p>;
  });
}

function FaqRow({ faq, open, onToggle, variant }) {
  return (
    <div className={`faq-row faq-row--${variant}`}>
      <button className="faq-row-head" onClick={onToggle} aria-expanded={open}>
        <span className="faq-row-label">
          <span className="faq-row-q">{faq.q}</span>
          {faq.video && (
            <span className="tag tag-outline faq-video-tag"><PlayIcon />video</span>
          )}
        </span>
        <span className="faq-row-mark">{open ? '−' : '+'}</span>
      </button>
      {open && (
        <div className="faq-row-body">
          <AnswerBlocks text={faq.a} />
          {faq.video && <VideoBlock caption={faq.video} />}
        </div>
      )}
    </div>
  );
}

export default function App() {
  const [q, setQ] = useState('');
  const [cat, setCat] = useState('All');
  const [openPop, setOpenPop] = useState({});
  const [openAll, setOpenAll] = useState({});
  const [menuOpen, setMenuOpen] = useState(false);

  const list = useMemo(() => {
    const needle = q.trim().toLowerCase();
    return FAQS.filter(f =>
      (cat === 'All' || f.cat === cat) &&
      (!needle || (f.q + ' ' + f.a).toLowerCase().includes(needle))
    );
  }, [q, cat]);

  const popular = useMemo(() => FAQS.filter(f => f.pop), []);
  const popShown = !q.trim() && cat === 'All';
  const empty = list.length === 0;

  const clear = () => { setQ(''); setCat('All'); };

  return (
    <div className="page">
      <header className="nav">
        <div className="nav-inner">
          <div className="nav-brand-group">
            <img className="brand-logo" src="/drafty-logo.svg" alt="Drafty" />
          </div>
          <nav className={`nav-links ${menuOpen ? 'is-open' : ''}`}>
            {NAV_ITEMS.map(item => (
              <a key={item.label} href="#" className="nav-link">
                {item.label}
                {item.dropdown && <ChevronIcon />}
              </a>
            ))}
            <span className="btn btn-secondary nav-signin-btn">Sign in</span>
          </nav>
          <button
            className="nav-toggle"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(o => !o)}
          >
            <span />
            <span />
          </button>
        </div>
      </header>

      <main className="content">
        <section className="hero">
          <h1>How can we help?</h1>
          <p className="text-muted hero-sub">Everything about your Drafty line of credit — search, or filter by topic.</p>

          <div className="search-box">
            <SearchIcon />
            <input
              className="search-input"
              value={q}
              onChange={e => setQ(e.target.value)}
              placeholder="Try “repay early” or “credit score”"
            />
          </div>

          <div className="chip-row">
            <button
              className={`chip ${cat === 'All' ? 'is-active' : ''}`}
              onClick={() => setCat('All')}
            >
              All
            </button>
            {CATEGORIES.map(c => (
              <button
                key={c}
                className={`chip ${cat === c ? 'is-active' : ''}`}
                onClick={() => setCat(c)}
              >
                {c}
              </button>
            ))}
          </div>
        </section>

        {popShown && (
          <section className="most-asked">
            <h6 className="section-kicker">Most asked</h6>
            <div className="faq-list faq-list--pop">
              {popular.map(f => (
                <FaqRow
                  key={f.id}
                  faq={f}
                  variant="pop"
                  open={!!openPop[f.id]}
                  onToggle={() => setOpenPop(p => ({ ...p, [f.id]: !p[f.id] }))}
                />
              ))}
            </div>
          </section>
        )}

        <section className="all-answers">
          <div className="faq-list faq-list--all">
            {list.map((f, i) => (
              <Fragment key={f.id}>
                {(i === 0 || list[i - 1].cat !== f.cat) && (
                  <h6 className="faq-group-heading">{f.cat}</h6>
                )}
                <FaqRow
                  faq={f}
                  variant="all"
                  open={!!openAll[f.id]}
                  onToggle={() => setOpenAll(p => ({ ...p, [f.id]: !p[f.id] }))}
                />
              </Fragment>
            ))}
          </div>
          {empty && (
            <div className="empty-state">
              <span>No matches — try a different word, or ask us directly.</span>
              <button className="btn btn-secondary" onClick={clear}>Clear search</button>
            </div>
          )}
        </section>

        <section className="contact-cta">
          <div>
            <h3>Still stuck?</h3>
            <p>Real humans, Mon–Fri 8am–8pm. Average reply under 2 minutes.</p>
          </div>
          <div className="contact-cta-actions">
            <span className="btn contact-btn-primary">Live chat</span>
            <span className="btn contact-btn-secondary">Email us</span>
          </div>
        </section>

        {SHOW_REGULATORY && (
          <p className="text-muted regulatory">
            Drafty is authorised and regulated by the Financial Conduct Authority. Representative example: assumed credit limit £1,200. Representative 96.2% APR (variable). Annual interest rate 69.4% (variable). You only pay interest on what you draw.
          </p>
        )}
      </main>
    </div>
  );
}
