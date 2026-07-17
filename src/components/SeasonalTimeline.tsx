import Reveal, { HorizonLine } from './Reveal';

const SEASONS = [
  { season: 'Spring', title: 'Olive Blossom Season', copy: 'The groves flower and the estate opens its gardens for guided walks.' },
  { season: 'Summer', title: 'Long Table Evenings', copy: 'Communal dinners under the pergola, lit by candle until well past midnight.' },
  { season: 'Autumn', title: 'The Harvest', copy: 'Guests are invited to join the olive and grape harvest, hands in the work.' },
  { season: 'Winter', title: 'The Quiet Season', copy: 'Fires lit in every hearth, and the estate at its most private.' },
];

export default function SeasonalTimeline() {
  return (
    <section className="relative bg-[var(--color-beige)] px-6 py-28 md:px-12 md:py-36">
      <div className="mx-auto max-w-[1400px]">
        <Reveal>
          <span className="eyebrow">The Seasons</span>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-5 max-w-xl font-display text-3xl leading-tight md:text-5xl">
            The estate, through the year.
          </h2>
        </Reveal>
        <HorizonLine className="mt-10 mb-16 max-w-[220px]" />

        <div className="relative grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div className="absolute top-6 left-0 right-0 hidden h-px bg-[var(--color-charcoal)]/15 lg:block" />
          {SEASONS.map((s, i) => (
            <Reveal key={s.season} delay={i * 0.1}>
              <div className="relative pt-8">
                <div className="absolute left-0 top-0 h-2.5 w-2.5 rounded-full bg-[var(--color-terra)] lg:top-0" />
                <span className="text-[0.68rem] tracking-[0.25em] uppercase text-[var(--color-terra)]">{s.season}</span>
                <h4 className="mt-3 font-display text-xl text-[var(--color-charcoal)]">{s.title}</h4>
                <p className="mt-3 text-sm font-light leading-relaxed text-[var(--color-charcoal)]/65">{s.copy}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
