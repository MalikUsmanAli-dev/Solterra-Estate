import { useEffect, useState, lazy, Suspense } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import MagneticButton from './MagneticButton';

const ParticleField = lazy(() => import('./ParticleField'));
import heroDrone from '../assets/images/hero-drone.png';
import heroPool from '../assets/images/hero-infinitypool.jpg';
import heroVilla from '../assets/images/story-villa-dusk.png';

const SLIDES = [heroDrone, heroPool, heroVilla];

export default function Hero() {
  const [active, setActive] = useState(0);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 800], [0, 220]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);

  useEffect(() => {
    const id = setInterval(() => setActive((a) => (a + 1) % SLIDES.length), 6000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative h-[100svh] w-full overflow-hidden bg-[var(--color-charcoal)]">
      {SLIDES.map((src, i) => (
        <motion.div
          key={src}
          className="absolute inset-0"
          initial={false}
          animate={{ opacity: active === i ? 1 : 0, scale: active === i ? 1.08 : 1 }}
          transition={{ opacity: { duration: 1.6, ease: 'easeInOut' }, scale: { duration: 6.5, ease: 'linear' } }}
          style={{ y }}
        >
          <img src={src} alt="" className="h-full w-full object-cover" />
        </motion.div>
      ))}

      <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-charcoal)]/55 via-[var(--color-charcoal)]/20 to-[var(--color-charcoal)]/70" />
      <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-charcoal)]/80 via-transparent to-transparent" />

      <Suspense fallback={null}>
        <ParticleField />
      </Suspense>

      <motion.div
        style={{ opacity }}
        className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center"
      >
        <motion.span
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.9 }}
          className="eyebrow mb-6 text-[var(--color-gold-light)]"
        >
          Umbria, Italy — Est. 1600
        </motion.span>

        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            transition={{ delay: 0.5, duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-4xl leading-[1.1] text-[var(--color-ivory)] sm:text-6xl md:text-7xl lg:text-[5.5rem]"
          >
            Escape the ordinary.
          </motion.h1>
        </div>
        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            transition={{ delay: 0.65, duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif-display italic font-light text-4xl leading-[1.1] text-[var(--color-champagne)] sm:text-6xl md:text-7xl lg:text-[5.5rem]"
          >
            Discover timeless luxury.
          </motion.h1>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.95, duration: 0.9 }}
          className="mt-8 max-w-xl text-sm font-light leading-relaxed text-[var(--color-ivory)]/80 md:text-base"
        >
          Curated experiences and unforgettable stays in the heart of European elegance —
          where stone, light, and time have always moved a little slower.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.15, duration: 0.9 }}
          className="mt-11 flex flex-col gap-4 sm:flex-row"
        >
          <MagneticButton to="/experiences">Explore Experiences</MagneticButton>
          <MagneticButton to="/reservations" variant="outline" className="!text-[var(--color-ivory)] !border-[var(--color-ivory)]/50 hover:!text-[var(--color-gold-light)] hover:!border-[var(--color-gold-light)]">
            Request Availability
          </MagneticButton>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 1 }}
        className="absolute bottom-9 left-1/2 z-10 -translate-x-1/2 text-center"
      >
        <div className="mx-auto h-10 w-px bg-[var(--color-ivory)]/40" />
        <span className="mt-2 block text-[0.6rem] tracking-[0.3em] text-[var(--color-ivory)]/60 uppercase">Scroll</span>
      </motion.div>
    </section>
  );
}
