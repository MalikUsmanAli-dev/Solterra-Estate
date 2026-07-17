import { motion } from 'framer-motion';
import Reveal, { HorizonLine } from './Reveal';
import accommodation from '../assets/images/gallery-suite.jpg';
import dining from '../assets/images/exp-dining.jpg';
import wellness from '../assets/images/exp-wellness.jpg';
import nature from '../assets/images/story-garden.png';
import seasonal from '../assets/images/terrace-night-1.jpg';
import adventures from '../assets/images/dest-arches.jpg';

const EXPERIENCES = [
  { title: 'Luxury Accommodation', copy: 'Suites and villas dressed in linen, stone, and quiet.', img: accommodation },
  { title: 'Private Dining', copy: 'A table set wherever the light is best that evening.', img: dining },
  { title: 'Wellness Retreats', copy: 'Thermal baths beneath the trees, at your own pace.', img: wellness },
  { title: 'Nature Escapes', copy: 'Groves, trails, and a garden older than the house.', img: nature },
  { title: 'Seasonal Experiences', copy: 'Harvest suppers, candlelight, and the turning year.', img: seasonal },
  { title: 'Guided Adventures', copy: 'The coastline and countryside, led by those who know it.', img: adventures },
];

export default function Experiences() {
  return (
    <section className="relative bg-[var(--color-beige)] px-6 py-28 md:px-12 md:py-36">
      <div className="mx-auto max-w-[1400px]">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <Reveal>
              <span className="eyebrow">Curated Experiences</span>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-5 max-w-xl font-display text-3xl leading-tight text-[var(--color-charcoal)] md:text-5xl">
                Six ways to slow down.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.2} className="max-w-sm">
            <p className="text-sm font-light leading-relaxed text-[var(--color-charcoal)]/65">
              Every stay is composed, not scheduled — a private concierge shapes each day around what
              you actually want from it.
            </p>
          </Reveal>
        </div>

        <HorizonLine className="mt-12 mb-12" />

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {EXPERIENCES.map((exp, i) => (
            <Reveal key={exp.title} delay={(i % 3) * 0.08}>
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="group relative aspect-[3/4] cursor-pointer overflow-hidden"
                data-cursor-hover
              >
                <img
                  src={exp.img}
                  alt={exp.title}
                  className="h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-charcoal)]/85 via-[var(--color-charcoal)]/10 to-transparent transition-opacity duration-500" />
                <div className="absolute inset-0 border border-[var(--color-ivory)]/0 transition-all duration-500 group-hover:border-[var(--color-ivory)]/25 group-hover:backdrop-blur-[1px]" />

                <div className="absolute inset-x-0 bottom-0 p-7">
                  <h3 className="font-display text-xl text-[var(--color-ivory)]">{exp.title}</h3>
                  <p className="mt-2 max-h-0 overflow-hidden text-xs font-light leading-relaxed text-[var(--color-ivory)]/80 opacity-0 transition-all duration-500 group-hover:max-h-20 group-hover:opacity-100">
                    {exp.copy}
                  </p>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
