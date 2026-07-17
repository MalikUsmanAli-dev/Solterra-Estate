import Reveal, { HorizonLine } from '../components/Reveal';
import StorySection from '../components/StorySection';
import Destinations from '../components/Destinations';
import SeasonalTimeline from '../components/SeasonalTimeline';
import CTA from '../components/CTA';
import villaDusk from '../assets/images/story-villa-dusk.png';

export default function StoryPage() {
  return (
    <div className="pt-24 md:pt-28">
      <section className="relative flex min-h-[55vh] items-center overflow-hidden px-6 md:px-12">
        <img src={villaDusk} alt="" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-[var(--color-charcoal)]/55" />
        <div className="relative mx-auto max-w-2xl py-24 text-center w-full">
          <Reveal>
            <span className="eyebrow text-[var(--color-gold-light)]">Estate Story</span>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="mt-5 font-display text-4xl leading-tight text-[var(--color-ivory)] md:text-6xl">
              Four centuries in the making.
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <HorizonLine className="mx-auto mt-8 max-w-[180px] opacity-70" />
          </Reveal>
        </div>
      </section>

      <StorySection />
      <SeasonalTimeline />
      <Destinations />
      <CTA />
    </div>
  );
}
