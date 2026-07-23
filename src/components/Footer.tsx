import { useState } from 'react';
import { Link } from 'react-router-dom';
import { HorizonLine } from './Reveal';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
  }

  return (
    <footer className="relative bg-[var(--color-charcoal)] px-6 pt-24 pb-10 text-[var(--color-ivory)] md:px-12">
      <div className="mx-auto max-w-[1400px]">
        <div className="grid gap-14 md:grid-cols-12">
          <div className="md:col-span-5">
            <span className="font-display text-2xl tracking-[0.08em]">
              SOLTERRA <span className="text-[var(--color-terra-soft)]">ESTATE</span>
            </span>
            <p className="mt-5 max-w-sm text-sm font-light leading-relaxed text-[var(--color-ivory)]/60">
              A private hillside estate above the Tiber valley, Umbria — one of Europe's quietest corners
              of luxury.
            </p>
          </div>

          <div className="md:col-span-3">
            <h4 className="eyebrow text-[var(--color-gold-light)]">Navigate</h4>
            <ul className="mt-5 space-y-3 text-sm font-light text-[var(--color-ivory)]/70">
              <li><Link to="/experiences" className="hover:text-[var(--color-ivory)]">Experiences</Link></li>
              <li><Link to="/story" className="hover:text-[var(--color-ivory)]">Estate Story</Link></li>
              <li><Link to="/gallery" className="hover:text-[var(--color-ivory)]">Gallery</Link></li>
              <li><Link to="/reservations" className="hover:text-[var(--color-ivory)]">Reservations</Link></li>
              <li><Link to="/contact" className="hover:text-[var(--color-ivory)]">Contact</Link></li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <h4 className="eyebrow text-[var(--color-gold-light)]">Stay Informed</h4>
            <p className="mt-5 text-sm font-light text-[var(--color-ivory)]/60">
              Seasonal openings and estate news, sent rarely and only when it matters.
            </p>
            {submitted ? (
              <p className="mt-5 text-sm text-[var(--color-gold-light)]">You're on the list — thank you.</p>
            ) : (
              <form onSubmit={handleSubmit} className="mt-5 flex border-b border-[var(--color-ivory)]/30 focus-within:border-[var(--color-gold)]">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  className="w-full bg-transparent py-2 text-sm font-light text-[var(--color-ivory)] placeholder:text-[var(--color-ivory)]/40 focus:outline-none"
                />
                <button type="submit" className="shrink-0 text-xs tracking-[0.2em] uppercase text-[var(--color-gold-light)]" data-cursor-hover>
                  Join →
                </button>
              </form>
            )}
          </div>
        </div>

        <HorizonLine className="my-12 opacity-40" />

        <div className="flex flex-col items-center justify-between gap-4 text-xs font-light text-[var(--color-ivory)]/45 md:flex-row">
          <p>© {new Date().getFullYear()} Solterra Estate. A fictional brand, crafted by Usman Web Studio</p>
          <div className="flex gap-6">
            <span className="hover:text-[var(--color-ivory)]/80">Privacy</span>
            <span className="hover:text-[var(--color-ivory)]/80">Terms</span>
            <span className="hover:text-[var(--color-ivory)]/80">Instagram</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
