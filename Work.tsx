import { useState } from "react";
import { ArrowUpRight, Check, GraduationCap, MapPin, Users } from "lucide-react";
import { PROJECTS, TRAINING } from "../lib/data";
import { A, GithubIcon, Reveal, SectionHead } from "./ui";

export function Work() {
  const [open, setOpen] = useState<string | null>(PROJECTS[0].id);

  return (
    <section id="work" className="relative border-t border-mist/12 bg-ink-900 py-24 sm:py-32">
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(92,191,169,0.04),transparent_30%)]" />
      <div className="relative mx-auto max-w-[88rem] px-5 sm:px-8">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHead
            no="03"
            kicker="Selected work"
            title={
              <>
                Three things I built
                <br />
                and <span className="text-jade italic">finished</span>
              </>
            }
            lead="Small in scope, complete in practice. Tap any row to open the write-up — every one links to its real repository."
          />
          <div className="mb-14 shrink-0">
            <div className="kicker text-mist/60">Repos</div>
            <div className="display mt-2 text-4xl font-light text-bone">
              03 <span className="text-xl text-mist/40">/ listed</span>
            </div>
          </div>
        </div>

        <div className="border-t border-mist/12">
          {PROJECTS.map((p, i) => {
            const isOpen = open === p.id;
            return (
              <Reveal key={p.id} delay={i * 80}>
                <article className="group border-b border-mist/12" style={{ ["--accent" as string]: p.accent }}>
                  <button
                    onClick={() => setOpen(isOpen ? null : p.id)}
                    className="flex w-full items-center gap-5 py-7 text-left transition-all duration-300 hover:pl-3 sm:gap-8 sm:py-9"
                    aria-expanded={isOpen}
                  >
                    <span className="font-mono text-xs shrink-0">
                      <span className={isOpen ? "" : "text-mist/50"} style={isOpen ? { color: p.accent } : undefined}>
                        {p.index}
                      </span>
                    </span>

                    <span className="min-w-0 flex-1">
                      <span className="display block text-[1.6rem] leading-tight font-medium text-bone sm:text-[2.15rem]">
                        {p.title}
                      </span>
                      <span className="mt-1.5 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-mist">
                        <span style={{ color: p.accent }}>{p.kind}</span>
                        <span className="text-mist/30">·</span>
                        <span>{p.date}</span>
                      </span>
                    </span>

                    <span className="hidden max-w-[24rem] shrink-0 text-right text-xs leading-relaxed text-mist/70 xl:block">
                      {p.summary}
                    </span>

                    <span
                      className="grid size-9 shrink-0 place-items-center border border-mist/20 text-mist transition-all duration-300 group-hover:border-mist/45 group-hover:text-bone"
                      style={isOpen ? { borderColor: p.accent, color: p.accent } : undefined}
                    >
                      <span
                        className="text-base leading-none transition-transform duration-300"
                        style={{ transform: isOpen ? "rotate(45deg)" : "none" }}
                      >
                        +
                      </span>
                    </span>
                  </button>

                  <div className={`expand ${isOpen ? "open" : ""}`}>
                    <div>
                      <div className="grid gap-8 pb-10 lg:grid-cols-[1.25fr_0.75fr] lg:gap-12 lg:pl-[3.25rem]">
                        <div>
                          <p className="text-sm leading-relaxed text-mist xl:hidden">{p.summary}</p>
                          <ul className="mt-4 space-y-3.5 xl:mt-0">
                            {p.bullets.map((b, j) => (
                              <li key={j} className="flex gap-3 text-[0.92rem] leading-relaxed text-bone-dim">
                                <span className="mt-[9px] size-1.5 shrink-0 rounded-full" style={{ background: p.accent }} />
                                {b}
                              </li>
                            ))}
                          </ul>
                          <div className="mt-6 border-l-2 pl-4" style={{ borderColor: `${p.accent}55` }}>
                            <div className="kicker" style={{ color: p.accent }}>
                              What it taught me
                            </div>
                            <p className="display mt-2 text-[1.05rem] leading-snug text-bone italic">{p.learned}</p>
                          </div>
                        </div>

                        <div className="space-y-4">
                          <div className="border border-mist/12 p-5">
                            <div className="kicker text-mist/60">Stack</div>
                            <div className="mt-3 flex flex-wrap gap-1.5">
                              {p.stack.map((s) => (
                                <span
                                  key={s}
                                  className="border border-mist/15 bg-ink-850 px-2.5 py-1 font-mono text-[0.68rem] text-bone-dim"
                                >
                                  {s}
                                </span>
                              ))}
                            </div>
                          </div>
                          <A
                            href={p.repo}
                            label="the repository link"
                            className="group/repo flex items-center justify-between gap-3 border border-mist/15 bg-ink-950/60 px-5 py-4 transition-all duration-300 hover:border-transparent hover:bg-bone"
                          >
                            <span className="flex items-center gap-3">
                              <GithubIcon className="size-4 text-bone transition-colors group-hover/repo:text-ink-950" />
                              <span className="text-sm font-medium text-bone transition-colors group-hover/repo:text-ink-950">
                                View source on GitHub
                              </span>
                            </span>
                            <ArrowUpRight className="size-4 text-mist transition-all duration-300 group-hover/repo:-translate-y-0.5 group-hover/repo:translate-x-0.5 group-hover/repo:text-ink-950" />
                          </A>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>

        <Reveal>
          <p className="mt-8 text-sm text-mist/70">
            More experiments live on GitHub — smaller scripts, coursework turned
            into tools, and things that didn't work.{" "}
            <A href="https://github.com/jatin-2525" label="the GitHub profile link" className="link-underline text-gold">
              Browse the full profile →
            </A>
          </p>
        </Reveal>
      </div>
    </section>
  );
}

export function FieldWork() {
  return (
    <section id="field" className="relative overflow-hidden border-t border-mist/12 bg-ink-950 py-24 sm:py-32">
      <div className="bg-tick absolute inset-0 opacity-40" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_80%,rgba(217,168,92,0.1),transparent_50%)]" />

      <div className="relative mx-auto max-w-[88rem] px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div>
            <SectionHead
              no="04"
              kicker="Field work"
              title={
                <>
                  Teaching <span className="text-coral italic">30 people</span> to
                  <br />
                  stay safe online
                </>
              }
            />
            <Reveal delay={100}>
              <div className="border border-mist/12 bg-ink-900/70 p-6">
                <div className="kicker text-mist/60">Field report</div>
                <div className="mt-5 space-y-4">
                  {TRAINING.metrics.map((m) => (
                    <div
                      key={m.k}
                      className="flex items-baseline justify-between gap-4 border-b border-mist/10 pb-3 last:border-0 last:pb-0"
                    >
                      <span className="display text-3xl font-light text-gold">{m.k}</span>
                      <span className="text-right text-sm text-mist">{m.v}</span>
                    </div>
                  ))}
                </div>
                <A
                  href={TRAINING.link}
                  label="the CyberSmart portal link"
                  className="mt-6 flex items-center justify-between gap-3 bg-gold/12 px-4 py-3 text-sm font-medium text-gold transition-colors hover:bg-gold hover:text-ink-950"
                >
                  {TRAINING.linkLabel}
                  <ArrowUpRight className="size-4" />
                </A>
              </div>
            </Reveal>
          </div>

          <Reveal delay={60}>
            <div className="panel corner relative p-7 [--accent:#e07a5c] sm:p-10">
              <div className="flex flex-wrap items-center gap-3">
                <span className="border border-coral/40 bg-coral/10 px-2.5 py-1 font-mono text-[0.65rem] tracking-widest text-coral uppercase">
                  Training
                </span>
                <span className="kicker text-mist/70">{TRAINING.span}</span>
              </div>

              <h3 className="display mt-6 text-[1.9rem] leading-[1.1] font-semibold text-bone sm:text-[2.4rem]">
                {TRAINING.title}
              </h3>
              <p className="mt-2 font-mono text-sm text-gold">{TRAINING.org}</p>
              <p className="mt-1 text-sm text-mist">{TRAINING.tag}</p>

              <ul className="mt-8 space-y-5">
                {TRAINING.bullets.map((b, i) => (
                  <li key={i} className="flex gap-4">
                    <span className="mt-1 grid size-5 shrink-0 place-items-center border border-jade/40 text-jade">
                      <Check className="size-3" strokeWidth={3} />
                    </span>
                    <span className="text-[0.95rem] leading-[1.75] text-bone-dim">
                      {b.includes("WNS CyberSmart certification portal") ? (
                        <>
                          {b.split("WNS CyberSmart certification portal")[0]}
                          <A
                            href={TRAINING.link}
                            label="the CyberSmart portal link"
                            className="link-underline text-gold"
                          >
                            WNS CyberSmart certification portal
                          </A>
                          {b.split("WNS CyberSmart certification portal")[1]}
                        </>
                      ) : (
                        b
                      )}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-9 grid gap-px border border-mist/12 bg-mist/12 sm:grid-cols-3">
                {[
                  { icon: Users, k: "Schools in Rajasthan", v: "Multi-session" },
                  { icon: GraduationCap, k: "Badge earned", v: "Every trainee" },
                  { icon: MapPin, k: "Geotagged proof", v: "Audited by LPU" },
                ].map((x) => (
                  <div key={x.k} className="bg-ink-950/80 px-4 py-4">
                    <x.icon className="size-4 text-mist/60" />
                    <div className="mt-2.5 text-[0.8rem] leading-snug font-medium text-bone">{x.k}</div>
                    <div className="mt-0.5 font-mono text-[0.68rem] text-mist/60">{x.v}</div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
