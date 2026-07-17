import Reveal from './Reveal';
import MagneticButton from './MagneticButton';
import terrace from '../assets/images/terrace-night-1.jpg';

export default function CTA() {
  return (
    <section className="relative overflow-hidden px-6 py-32 md:px-12 md:py-40">
      <div className="absolute inset-0">
        <img src={terrace} alt="" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-[var(--color-charcoal)]/70" />
      </div>
      <div className="relative mx-auto max-w-2xl text-center">
        <Reveal>
          <span className="eyebrow text-[var(--color-gold-light)]">Solterra Estate</span>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-6 font-display text-3xl leading-tight text-[var(--color-ivory)] md:text-5xl">
            Allow us to craft an unforgettable experience, tailored exclusively for you.
          </h2>
        </Reveal>
        <Reveal delay={0.2} className="mt-11 flex justify-center">
          <MagneticButton to="/reservations">Request Availability →</MagneticButton>
        </Reveal>
      </div>
    </section>
  );
}
