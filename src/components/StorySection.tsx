import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Reveal, { HorizonLine } from './Reveal';
import storyFarmhouse from '../assets/images/story-farmhouse.jpg';
import storyGarden from '../assets/images/story-garden.png';

gsap.registerPlugin(ScrollTrigger);

const PILLARS = [
  { label: 'Heritage', copy: 'Four centuries of stonework, restored by hand, never erased.' },
  { label: 'Architecture', copy: 'Umbrian farmhouses reimagined without losing their bones.' },
  { label: 'Nature', copy: 'Olive groves, wild sage, and a horizon that never repeats itself.' },
];

export default function StorySection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        imgRef.current,
        { clipPath: 'inset(18% 18% 18% 18%)' },
        {
          clipPath: 'inset(0% 0% 0% 0%)',
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            end: 'top 20%',
            scrub: 0.6,
          },
        }
      );
      gsap.to(imgRef.current, {
        yPercent: -8,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 0.6,
        },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative bg-[var(--color-ivory)] px-6 py-28 md:px-12 md:py-40">
      <div className="mx-auto grid max-w-[1400px] items-center gap-14 md:grid-cols-12">
        <div className="md:col-span-6 md:col-start-1">
          <Reveal>
            <span className="eyebrow">The Estate Story</span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-5 font-display text-3xl leading-tight text-[var(--color-charcoal)] md:text-5xl">
              A house built by hand,
              <br />
              <span className="italic text-[var(--color-terra)]">kept that way.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <HorizonLine className="my-8 max-w-[220px]" />
          </Reveal>
          <Reveal delay={0.25}>
            <p className="max-w-md text-[15px] font-light leading-[1.9] text-[var(--color-charcoal)]/75">
              Solterra Estate began as a single stone farmhouse on a ridge above the Tiber valley.
              Over four generations, the family that tends it added a wing, a chapel, a stable turned
              library — never all at once, never without reason. Every arch you pass through today was
              laid by someone who lived here. Nothing was designed to impress. It simply endured, and
              in enduring, became beautiful.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-8 sm:grid-cols-3">
            {PILLARS.map((p, i) => (
              <Reveal key={p.label} delay={0.3 + i * 0.1}>
                <div className="border-t border-[var(--color-charcoal)]/15 pt-4">
                  <h4 className="font-display text-base text-[var(--color-charcoal)]">{p.label}</h4>
                  <p className="mt-2 text-xs font-light leading-relaxed text-[var(--color-charcoal)]/60">{p.copy}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="relative md:col-span-6">
          <div ref={imgRef} className="relative aspect-[4/5] w-full overflow-hidden">
            <img src={storyFarmhouse} alt="The main farmhouse of Solterra Estate at dusk" className="h-full w-full object-cover" />
          </div>
          <Reveal delay={0.3} className="absolute -bottom-10 -left-10 hidden w-56 border-8 border-[var(--color-ivory)] shadow-[0_20px_60px_rgba(44,44,44,0.25)] md:block">
            <img src={storyGarden} alt="Stone garden pathway lined with olive trees" className="aspect-[4/5] w-full object-cover" />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
