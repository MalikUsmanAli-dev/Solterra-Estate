import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Reveal, { HorizonLine } from './Reveal';

const QUOTES = [
  {
    quote: 'We arrived for three nights and stayed for nine. Nothing was ever asked of us — everything was simply there when we wanted it.',
    name: 'Isabelle & Marc Dufresne',
    place: 'Lyon, France',
  },
  {
    quote: 'The kind of quiet you cannot buy in a city. The staff seemed to know what we needed before we did.',
    name: 'Helena Voss',
    place: 'Vienna, Austria',
  },
  {
    quote: 'A rare thing — a luxury property that feels lived-in rather than staged. The olive grove dinner remains unmatched.',
    name: 'Thomas & Anaïs Rousseau',
    place: 'Geneva, Switzerland',
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % QUOTES.length), 6500);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative bg-[var(--color-charcoal)] px-6 py-28 md:px-12 md:py-36">
      <div className="mx-auto max-w-3xl text-center">
        <Reveal>
          <span className="eyebrow">In Their Words</span>
        </Reveal>
        <HorizonLine className="mx-auto mt-6 mb-14 max-w-[160px] opacity-60" />

        <div className="relative min-h-[220px] md:min-h-[180px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -18 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              <p className="font-serif-display text-2xl italic leading-relaxed text-[var(--color-ivory)] md:text-3xl">
                "{QUOTES[index].quote}"
              </p>
              <p className="mt-8 text-[0.72rem] tracking-[0.2em] uppercase text-[var(--color-gold-light)]">
                {QUOTES[index].name}
              </p>
              <p className="mt-1 text-xs font-light text-[var(--color-ivory)]/50">{QUOTES[index].place}</p>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-10 flex justify-center gap-3">
          {QUOTES.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              aria-label={`Show testimonial ${i + 1}`}
              className="h-1.5 rounded-full transition-all duration-500"
              style={{
                width: i === index ? 26 : 8,
                background: i === index ? 'var(--color-gold)' : 'rgba(247,244,239,0.25)',
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
