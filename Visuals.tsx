import { Reveal, SectionHead } from "./ui";

export function Visuals() {
  return (
    <section id="visuals" className="relative border-t border-mist/12 bg-ink-950 py-24 sm:py-32">
      <div className="bg-blueprint absolute inset-0 opacity-40" />
      <div className="relative mx-auto max-w-[88rem] px-5 sm:px-8">
        <SectionHead
          no="07"
          kicker="Portraits & Workspace"
          title={
            <>
              Shown <span className="text-gold italic">fully</span> — no crops
            </>
          }
          lead="Studio portrait and workspace setup, presented clearly."
        />

        <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
          {/* Cinematic executive portrait */}
          <Reveal>
            <div className="panel overflow-hidden p-4 sm:p-6">
              <div className="relative w-full overflow-hidden rounded bg-ink-900">
                <img
                  src="images/portrait.png"
                  alt="Jatin Kumar Singhal — cinematic executive portrait"
                  className="block h-auto w-full object-contain transition-transform duration-700 ease-out hover:scale-[1.02]"
                  loading="lazy"
                />
              </div>
              <div className="mt-4 flex items-center justify-between border-t border-mist/12 pt-4">
                <span className="display text-lg font-medium text-bone">Jatin Kumar Singhal</span>
                <span className="kicker text-gold">Cinematic · 2026</span>
              </div>
            </div>
          </Reveal>

          {/* Editorial studio headshot */}
          <Reveal delay={120}>
            <div className="panel overflow-hidden p-4 sm:p-6">
              <div className="relative w-full overflow-hidden rounded bg-ink-900">
                <img
                  src="images/desk.png"
                  alt="Jatin Kumar Singhal — editorial studio headshot"
                  className="block h-auto w-full object-contain transition-transform duration-700 ease-out hover:scale-[1.02]"
                  loading="lazy"
                />
              </div>
              <div className="mt-4 flex items-center justify-between border-t border-mist/12 pt-4">
                <span className="display text-lg font-medium text-bone">Studio Headshot</span>
                <span className="kicker text-jade">Editorial · B&W</span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
