import Reveal, { HorizonLine } from './Reveal';
import villa from '../assets/images/dest-villa.png';
import retreat from '../assets/images/terrace-night-2.jpg';
import suite from '../assets/images/gallery-fireplace.jpg';
import scenic from '../assets/images/dest-seaside.png';

const DESTINATIONS = [
  {
    tag: 'I',
    title: 'Countryside Villas',
    copy: 'Private stone villas scattered across the hillside, each with its own pool, its own olive terrace, and its own particular silence.',
    img: villa,
  },
  {
    tag: 'II',
    title: 'Hidden Retreats',
    copy: 'Lantern-lit courtyards tucked behind the main house, reserved for guests who prefer to be found by no one.',
    img: retreat,
  },
  {
    tag: 'III',
    title: 'Luxury Suites',
    copy: 'Stone hearths, reclaimed timber, and windows framed for the view rather than the room.',
    img: suite,
  },
  {
    tag: 'IV',
    title: 'Scenic Experiences',
    copy: 'Where the estate meets the coastline — an infinity horizon shared between pool and sea.',
    img: scenic,
  },
];

export default function Destinations() {
  return (
    <section className="relative bg-[var(--color-ivory)] px-6 py-28 md:px-12 md:py-36">
      <div className="mx-auto max-w-[1400px]">
        <Reveal>
          <span className="eyebrow">Featured Destinations</span>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-5 max-w-xl font-display text-3xl leading-tight md:text-5xl">
            Four corners of the estate.
          </h2>
        </Reveal>
        <HorizonLine className="mt-10 mb-6 max-w-[220px]" />

        <div className="mt-16 flex flex-col gap-24 md:gap-32">
          {DESTINATIONS.map((d, i) => (
            <div
              key={d.title}
              className={`grid items-center gap-10 md:grid-cols-12 md:gap-6 ${
                i % 2 === 1 ? 'md:[&>*:first-child]:order-2' : ''
              }`}
            >
              <Reveal className="md:col-span-7" y={0}>
                <div className="relative aspect-[16/10] w-full overflow-hidden">
                  <img src={d.img} alt={d.title} className="h-full w-full object-cover" />
                </div>
              </Reveal>
              <Reveal delay={0.1} className="md:col-span-5">
                <span className="font-serif-display text-sm italic text-[var(--color-terra)]">{d.tag}</span>
                <h3 className="mt-3 font-display text-2xl leading-snug text-[var(--color-charcoal)] md:text-3xl">
                  {d.title}
                </h3>
                <p className="mt-4 max-w-md text-[15px] font-light leading-[1.85] text-[var(--color-charcoal)]/70">
                  {d.copy}
                </p>
              </Reveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
