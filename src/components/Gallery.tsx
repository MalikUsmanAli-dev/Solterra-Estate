import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Reveal, { HorizonLine } from './Reveal';

import lobby from '../assets/images/gallery-lobby.jpg';
import carport from '../assets/images/gallery-carport.png';
import medstyle from '../assets/images/gallery-medstyle.png';
import guest from '../assets/images/concierge-guest.jpg';
import villaDusk from '../assets/images/story-villa-dusk.png';
import arches from '../assets/images/dest-arches.jpg';
import wellness from '../assets/images/exp-wellness.jpg';
import pool from '../assets/images/hero-infinitypool.jpg';
import terraceNight from '../assets/images/terrace-night-2.jpg';

const IMAGES = [
  { src: villaDusk, caption: 'The estate at dusk' },
  { src: lobby, caption: 'The reception hall' },
  { src: pool, caption: 'The cliffside pool' },
  { src: medstyle, caption: 'A quiet stone courtyard' },
  { src: arches, caption: 'The sea-facing loggia' },
  { src: wellness, caption: 'Private outdoor bathing' },
  { src: carport, caption: 'The stone carriage arch' },
  { src: guest, caption: 'An evening in the lounge' },
  { src: terraceNight, caption: 'Candlelight on the terrace' },
];

export default function Gallery() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section className="relative bg-[var(--color-beige)] px-6 py-28 md:px-12 md:py-36">
      <div className="mx-auto max-w-[1400px]">
        <Reveal>
          <span className="eyebrow">The Luxury Gallery</span>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-5 max-w-xl font-display text-3xl leading-tight md:text-5xl">
            A glimpse before you arrive.
          </h2>
        </Reveal>
        <HorizonLine className="mt-10 mb-14 max-w-[220px]" />

        <div className="columns-1 gap-6 sm:columns-2 lg:columns-3 [&>*]:mb-6">
          {IMAGES.map((img, i) => (
            <Reveal key={img.src} delay={(i % 3) * 0.06}>
              <motion.button
                onClick={() => setActive(i)}
                data-cursor-hover
                whileHover={{ scale: 1.015 }}
                transition={{ duration: 0.4 }}
                className="group relative block w-full overflow-hidden text-left"
              >
                <img src={img.src} alt={img.caption} className="w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 flex items-end bg-gradient-to-t from-[var(--color-charcoal)]/60 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <span className="p-5 text-xs font-light tracking-wide text-[var(--color-ivory)]">{img.caption}</span>
                </div>
              </motion.button>
            </Reveal>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active !== null && (
          <motion.div
            className="fixed inset-0 z-[200] flex items-center justify-center bg-[var(--color-charcoal)]/95 p-6 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
          >
            <motion.img
              key={IMAGES[active].src}
              src={IMAGES[active].src}
              alt={IMAGES[active].caption}
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="max-h-[85vh] max-w-[90vw] object-contain shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
            <button
              onClick={() => setActive(null)}
              className="absolute top-8 right-8 text-[0.7rem] tracking-[0.25em] uppercase text-[var(--color-ivory)]/70 hover:text-[var(--color-ivory)]"
              data-cursor-hover
            >
              Close ✕
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
