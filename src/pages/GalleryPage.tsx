import Reveal, { HorizonLine } from '../components/Reveal';
import Gallery from '../components/Gallery';
import lobby from '../assets/images/gallery-lobby.jpg';

export default function GalleryPage() {
  return (
    <div className="pt-24 md:pt-28">
      <section className="relative flex min-h-[50vh] items-center overflow-hidden px-6 md:px-12">
        <img src={lobby} alt="" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-[var(--color-charcoal)]/60" />
        <div className="relative mx-auto max-w-2xl py-20 text-center w-full">
          <Reveal>
            <span className="eyebrow text-[var(--color-gold-light)]">Gallery</span>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="mt-5 font-display text-4xl leading-tight text-[var(--color-ivory)] md:text-6xl">
              The estate, in light.
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <HorizonLine className="mx-auto mt-8 max-w-[180px] opacity-70" />
          </Reveal>
        </div>
      </section>
      <Gallery />
    </div>
  );
}
