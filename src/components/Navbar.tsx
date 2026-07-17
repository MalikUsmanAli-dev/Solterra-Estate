import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const LINKS = [
  { label: 'Experiences', to: '/experiences' },
  { label: 'Estate Story', to: '/story' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'Contact', to: '/contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 40);
    }
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => setOpen(false), [location.pathname]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'bg-[var(--color-ivory)]/85 backdrop-blur-md shadow-[0_1px_0_rgba(44,44,44,0.06)]' : 'bg-transparent'
        }`}
      >
        <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-5 md:px-12">
          <Link to="/" data-cursor-hover className="font-display text-lg tracking-[0.14em]">
            <span className={scrolled ? 'text-[var(--color-charcoal)]' : 'text-[var(--color-ivory)]'}>
              SOLTERRA <span className="text-[var(--color-terra)]">ESTATE</span>
            </span>
          </Link>

          <nav className="hidden items-center gap-10 md:flex">
            {LINKS.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                data-cursor-hover
                className={`text-[0.72rem] tracking-[0.2em] uppercase transition-colors duration-300 ${
                  scrolled ? 'text-[var(--color-charcoal)]/80 hover:text-[var(--color-terra)]' : 'text-[var(--color-ivory)]/90 hover:text-[var(--color-gold-light)]'
                }`}
              >
                {l.label}
              </Link>
            ))}
            <Link
              to="/reservations"
              data-cursor-hover
              className={`border px-6 py-2.5 text-[0.7rem] tracking-[0.2em] uppercase transition-colors duration-300 ${
                scrolled
                  ? 'border-[var(--color-charcoal)]/30 text-[var(--color-charcoal)] hover:border-[var(--color-terra)] hover:text-[var(--color-terra)]'
                  : 'border-[var(--color-ivory)]/50 text-[var(--color-ivory)] hover:border-[var(--color-gold-light)] hover:text-[var(--color-gold-light)]'
              }`}
            >
              Reserve
            </Link>
          </nav>

          <button
            className="flex flex-col gap-1.5 md:hidden"
            aria-label="Toggle menu"
            onClick={() => setOpen((o) => !o)}
          >
            <span className={`h-px w-7 transition-all ${scrolled || open ? 'bg-[var(--color-charcoal)]' : 'bg-[var(--color-ivory)]'} ${open ? 'translate-y-[3px] rotate-45' : ''}`} />
            <span className={`h-px w-7 transition-all ${scrolled || open ? 'bg-[var(--color-charcoal)]' : 'bg-[var(--color-ivory)]'} ${open ? '-translate-y-[3px] -rotate-45' : ''}`} />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-8 bg-[var(--color-ivory)] md:hidden"
            initial={{ clipPath: 'circle(0% at 92% 5%)' }}
            animate={{ clipPath: 'circle(150% at 92% 5%)' }}
            exit={{ clipPath: 'circle(0% at 92% 5%)' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            {[...LINKS, { label: 'Reservations', to: '/reservations' }].map((l) => (
              <Link key={l.to} to={l.to} className="font-display text-3xl text-[var(--color-charcoal)]">
                {l.label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
