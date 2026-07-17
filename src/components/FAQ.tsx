import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Reveal, { HorizonLine } from './Reveal';

const FAQS = [
  {
    q: 'What is the minimum stay?',
    a: 'Three nights during peak season (May–September), two nights the rest of the year. Exceptions can be arranged for milestone occasions.',
  },
  {
    q: 'Is the estate suitable for children?',
    a: 'Yes — the grounds are family-friendly, and we can arrange supervised activities. Some suites and the wellness pavilion are adults-only.',
  },
  {
    q: 'Do you accommodate dietary restrictions?',
    a: 'Our kitchen accommodates any dietary requirement with advance notice, sourced primarily from the estate\'s own garden and nearby producers.',
  },
  {
    q: 'How far is the estate from the nearest airport?',
    a: 'Perugia International is 40 minutes by car; Rome Fiumicino is roughly two hours. Private transfers can be arranged upon reservation.',
  },
  {
    q: 'Can you host private events or weddings?',
    a: 'Yes, the estate hosts a limited number of private celebrations each year. Reach out through the reservations page for availability and planning.',
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="relative bg-[var(--color-ivory)] px-6 py-28 md:px-12 md:py-36">
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <span className="eyebrow">Good to Know</span>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-5 font-display text-3xl leading-tight md:text-5xl">Frequently asked.</h2>
        </Reveal>
        <HorizonLine className="mt-10 mb-12 max-w-[220px]" />

        <div className="divide-y divide-[var(--color-charcoal)]/12">
          {FAQS.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={item.q} className="py-6">
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-6 text-left"
                  data-cursor-hover
                >
                  <span className="font-display text-lg text-[var(--color-charcoal)] md:text-xl">{item.q}</span>
                  <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.35 }}
                    className="shrink-0 text-2xl font-light text-[var(--color-terra)]"
                  >
                    +
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="max-w-xl pt-4 text-sm font-light leading-relaxed text-[var(--color-charcoal)]/65">
                        {item.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
