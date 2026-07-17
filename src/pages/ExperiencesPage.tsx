import Reveal, { HorizonLine } from '../components/Reveal';
import Experiences from '../components/Experiences';
import CTA from '../components/CTA';
import wellness from '../assets/images/exp-wellness.jpg';

export default function ExperiencesPage() {
  return (
    <div className="pt-24 md:pt-28">
      <section className="relative flex min-h-[55vh] items-center overflow-hidden px-6 md:px-12">
        <img src={wellness} alt="" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-[var(--color-charcoal)]/55" />
        <div className="relative mx-auto max-w-2xl py-24 text-center w-full">
          <Reveal>
            <span className="eyebrow text-[var(--color-gold-light)]">Experiences</span>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="mt-5 font-display text-4xl leading-tight text-[var(--color-ivory)] md:text-6xl">
              Days composed around you.
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <HorizonLine className="mx-auto mt-8 max-w-[180px] opacity-70" />
          </Reveal>
        </div>
      </section>

      <Experiences />
      <CTA />
    </div>
  );
}
