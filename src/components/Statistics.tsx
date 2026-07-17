import { useEffect, useRef, useState } from 'react';
import { motion, useInView, animate } from 'framer-motion';
import { HorizonLine } from './Reveal';

const STATS = [
  { value: 25, suffix: '+', label: 'Years of Excellence' },
  { value: 15000, suffix: '+', label: 'Guests Hosted' },
  { value: 40, suffix: '+', label: 'International Recognitions' },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });
  const [display, setDisplay] = useState('0');

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, value, {
      duration: 2.1,
      ease: [0.16, 1, 0.3, 1],
      onUpdate(v) {
        setDisplay(Math.floor(v).toLocaleString());
      },
    });
    return () => controls.stop();
  }, [inView, value]);

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}

export default function Statistics() {
  return (
    <section className="relative bg-[var(--color-charcoal)] px-6 py-24 md:px-12 md:py-32">
      <div className="mx-auto max-w-[1400px]">
        <HorizonLine className="mb-16 opacity-60" />
        <div className="grid grid-cols-1 gap-14 text-center sm:grid-cols-3">
          {STATS.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.12 }}
            >
              <p className="font-display text-5xl text-[var(--color-gold-light)] md:text-6xl">
                <Counter value={s.value} suffix={s.suffix} />
              </p>
              <p className="mt-3 text-[0.72rem] tracking-[0.22em] uppercase text-[var(--color-ivory)]/60">
                {s.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
