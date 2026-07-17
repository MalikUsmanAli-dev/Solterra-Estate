import Reveal, { HorizonLine } from '../components/Reveal';
import FAQ from '../components/FAQ';
import MagneticButton from '../components/MagneticButton';
import terrace from '../assets/images/terrace-night-2.jpg';
import img1 from '../assets/images/hero-infinitypool.jpg';
import img2 from '../assets/images/exp-wellness.jpg';
import img3 from '../assets/images/dest-arches.jpg';
import img4 from '../assets/images/story-garden.png';
import img5 from '../assets/images/gallery-carport.png';
import img6 from '../assets/images/dest-seaside.png';

const INSTAGRAM = [img1, img2, img3, img4, img5, img6];

export default function ContactPage() {
  return (
    <div className="pt-24 md:pt-28">
      <section className="relative flex min-h-[45vh] items-center overflow-hidden px-6 md:px-12">
        <img src={terrace} alt="" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-[var(--color-charcoal)]/55" />
        <div className="relative mx-auto max-w-2xl py-20 text-center w-full">
          <Reveal>
            <span className="eyebrow text-[var(--color-gold-light)]">Contact</span>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="mt-5 font-display text-4xl leading-tight text-[var(--color-ivory)] md:text-6xl">
              We look forward to hosting you.
            </h1>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 py-24 md:px-12">
        <div className="grid grid-cols-1 gap-16 md:grid-cols-3">
          <Reveal>
            <span className="eyebrow">Location</span>
            <p className="mt-4 font-serif-display text-xl italic text-[var(--color-charcoal)]">
              Strada della Collina 12,
              <br />
              06019 Umbertide, Umbria, Italy
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <span className="eyebrow">Reach Us</span>
            <p className="mt-4 text-sm font-light leading-loose text-[var(--color-charcoal)]/70">
              reservations@solterraestate.example
              <br />
              +39 075 000 0000
              <br />
              Concierge available 8am – 9pm CET
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <span className="eyebrow">Getting Here</span>
            <p className="mt-4 text-sm font-light leading-loose text-[var(--color-charcoal)]/70">
              40 minutes from Perugia Airport
              <br />
              2 hours from Rome Fiumicino
              <br />
              Private transfers arranged on request
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.3} className="mt-14">
          <MagneticButton to="/reservations">Request Availability →</MagneticButton>
        </Reveal>
      </section>

      <HorizonLine className="mx-auto max-w-[1400px] opacity-30" />

      <section className="mx-auto max-w-[1400px] px-6 py-24 md:px-12">
        <Reveal>
          <span className="eyebrow">Follow Along</span>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-5 font-display text-3xl md:text-5xl">@solterraestate</h2>
        </Reveal>
        <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-6">
          {INSTAGRAM.map((src, i) => (
            <Reveal key={i} delay={i * 0.05} className="aspect-square overflow-hidden">
              <img src={src} alt="" className="h-full w-full object-cover transition-transform duration-700 hover:scale-110" />
            </Reveal>
          ))}
        </div>
      </section>

      <FAQ />
    </div>
  );
}
