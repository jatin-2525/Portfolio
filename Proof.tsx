import { ArrowUpRight, BadgeCheck, Download, FileText } from "lucide-react";
import { CERTS, CV_INSIDE, EDU, LINKS } from "../lib/data";
import { A, Reveal, SectionHead } from "./ui";
import { Tilt } from "./Tilt";

export function Proof() {
  return (
    <section id="proof" className="relative border-t border-mist/12 bg-ink-900 py-24 sm:py-32">
      <div className="bg-blueprint absolute inset-0 opacity-40" />
      <div className="relative mx-auto max-w-[88rem] px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <SectionHead
              no="05"
              kicker="Certificates"
              title={
                <>
                  A ledger,{" "}
                  <span className="text-steel italic">verifiable</span>
                </>
              }
              lead="Every course I've finished outside the syllabus, linked to its actual credential. Click a row to open it."
            />
            <Reveal delay={120}>
              <div className="mt-2 flex items-center gap-3 border border-jade/25 bg-jade/8 px-4 py-3">
                <BadgeCheck className="size-4 shrink-0 text-jade" />
                <span className="text-xs leading-snug text-jade/90">
                  5+ credentials · Coursera, SimpliLearn, neoColab, Board
                  Infinity
                </span>
              </div>
            </Reveal>
          </div>

          <div className="border-t border-mist/12">
            {CERTS.map((c, i) => (
              <Reveal key={c.title} delay={i * 70}>
                <A
                  href={c.href}
                  label="the certificate link"
                  className="group relative flex items-center gap-5 border-b border-mist/12 px-2 py-6 transition-all duration-300 hover:bg-ink-850 hover:px-4 sm:gap-7"
                >
                  <span
                    className="display grid size-12 shrink-0 place-items-center border text-lg font-semibold"
                    style={{ borderColor: `${c.accent}55`, color: c.accent }}
                  >
                    {c.mark}
                  </span>

                  <span className="min-w-0 flex-1">
                    <span className="block text-[1.05rem] leading-snug font-medium text-bone transition-colors group-hover:text-white sm:text-[1.2rem]">
                      {c.title}
                    </span>
                    <span className="mt-1 block text-sm text-mist">
                      {c.issuer}
                      <span className="mx-2 text-mist/30">/</span>
                      <span className="font-mono text-xs">{c.date}</span>
                    </span>
                    <span className="mt-2 block max-w-lg text-xs leading-relaxed text-mist/70">{c.blurb}</span>
                  </span>

                  <span className="hidden shrink-0 items-center gap-2 font-mono text-[0.65rem] tracking-wider text-mist/50 uppercase transition-colors group-hover:text-bone sm:flex">
                    {c.verify}
                  </span>

                  <span className="grid size-9 shrink-0 place-items-center border border-mist/15 text-mist transition-all duration-300 group-hover:border-transparent group-hover:bg-bone group-hover:text-ink-950">
                    <ArrowUpRight className="size-4" />
                  </span>
                </A>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function EducationAndCV() {
  return (
    <section id="edu" className="relative bg-bone text-ink-900">
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.035),transparent_25%)]" />
      <div className="relative mx-auto max-w-[88rem] px-5 py-24 sm:px-8 sm:py-32">
        <div className="grid gap-14 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <SectionHead
              light
              no="06"
              kicker="Education"
              title={
                <>
                  The
                  <br />
                  <span className="text-coral italic">transcript</span>
                </>
              }
              lead="Two schools in Rajasthan, one university in Punjab, and a CGPA that keeps climbing."
            />
            <div className="border border-ink-900/15 bg-ink-900/[0.03] p-5">
              <div className="kicker text-ink-700/70">Current aggregate</div>
              <div className="mt-2 flex items-baseline gap-2">
                <span className="display text-5xl font-light leading-none">7.63</span>
                <span className="font-mono text-xs text-ink-700/70">/ 10 CGPA</span>
              </div>
              <p className="mt-3 text-xs leading-relaxed text-ink-700/80">
                Second year in progress. Up from where I started — the curve
                matters more to me than the number.
              </p>
            </div>
          </div>

          {/* timeline */}
          <div className="relative">
            <span className="absolute top-2 bottom-2 left-[7px] w-px bg-ink-900/12 sm:left-[9px]" />
            <ol className="space-y-10">
              {EDU.map((e, i) => (
                <Reveal as="li" key={e.where} delay={i * 100} className="relative">
                  <span
                    className="absolute top-2 size-[15px] rounded-full border-[3px] border-bone sm:-left-1"
                    style={{ background: e.accent }}
                  />
                  <div className="pl-9 sm:pl-12">
                    <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                      <span className="font-mono text-xs tracking-wider text-ink-700/70 uppercase">{e.when}</span>
                      {e.current && (
                        <span className="border border-ink-900/20 bg-ink-900 px-2 py-0.5 font-mono text-[0.6rem] tracking-widest text-bone uppercase">
                          Current
                        </span>
                      )}
                      <span className="ml-auto font-mono text-sm font-semibold" style={{ color: e.accent, filter: "brightness(0.72)" }}>
                        {e.score}
                      </span>
                    </div>
                    <h3 className="display mt-3 text-[1.7rem] leading-tight font-semibold sm:text-[2rem]">{e.where}</h3>
                    <p className="mt-1 text-sm text-ink-700/80">{e.place}</p>
                    <p className="mt-3 text-[0.95rem] font-medium text-ink-900">{e.what}</p>
                    <p className="mt-3 max-w-2xl border-l-2 border-ink-900/12 pl-4 text-sm leading-relaxed text-ink-700">
                      {e.note}
                    </p>
                  </div>
                </Reveal>
              ))}
            </ol>
          </div>
        </div>

        {/* ── CV band, inverted ── */}
        <Reveal>
          <div id="cv" className="relative mt-24 scroll-mt-24 overflow-hidden bg-ink-950 text-bone">
            <div className="bg-tick absolute inset-0 opacity-40" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(217,168,92,0.14),transparent_55%)]" />
            <div className="relative grid gap-10 p-8 sm:p-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 lg:p-16">
              <div>
                <div className="flex items-center gap-4">
                  <span className="kicker text-gold">07</span>
                  <span className="h-px w-16 bg-mist/30" />
                  <span className="kicker text-mist">The one-page summary</span>
                </div>
                <h3 className="display mt-6 text-[2.2rem] leading-[1.05] font-semibold sm:text-[3rem]">
                  My CV —
                  <br />
                  <span className="text-gold italic">everything, in order</span>
                </h3>
                <p className="mt-6 max-w-md text-[0.98rem] leading-relaxed text-mist">
                  Kept on Google Docs so it's always the current version. Open
                  it in a tab, or download a copy straight from there.
                </p>
                <ul className="mt-8 grid gap-x-8 gap-y-2.5 sm:grid-cols-2">
                  {CV_INSIDE.map((x) => (
                    <li key={x} className="flex items-start gap-2.5 text-sm text-bone-dim">
                      <span className="mt-[7px] size-1.5 shrink-0 rounded-full bg-jade" />
                      {x}
                    </li>
                  ))}
                </ul>
                <div className="mt-10 flex flex-wrap gap-3">
                  <A
                    href={LINKS.cv}
                    label="the CV link"
                    className="group/btn inline-flex items-center gap-2.5 bg-gold px-6 py-3.5 text-sm font-semibold text-ink-950 transition-all duration-300 hover:-translate-y-0.5 hover:bg-bone"
                  >
                    <FileText className="size-4" />
                    Open my CV
                    <span className="transition-transform duration-300 group-hover/btn:translate-x-1">→</span>
                  </A>
                  <A
                    href={LINKS.cv}
                    label="the CV link"
                    className="inline-flex items-center gap-2.5 border border-mist/25 px-6 py-3.5 text-sm font-medium text-bone transition-all duration-300 hover:-translate-y-0.5 hover:border-mist/55"
                  >
                    <Download className="size-4" />
                    Save a copy
                  </A>
                </div>
              </div>

              {/* paper preview */}
              <div className="relative flex items-center justify-center py-6">
                <Tilt max={8} className="relative w-full max-w-[21rem]">
                  <div className="relative bg-bone p-7 text-ink-900 shadow-[0_40px_80px_-30px_rgba(0,0,0,0.9)]">
                    <div className="flex items-baseline justify-between border-b border-ink-900/15 pb-3">
                      <span className="display text-base font-semibold">Jatin Kumar Singhal</span>
                    </div>
                    <div className="mt-1 font-mono text-[0.58rem] tracking-wide text-ink-700/70 uppercase">
                      B.Tech CSE · LPU · CGPA 7.63
                    </div>
                    {[
                      ["Education", 3],
                      ["Skills & Stack", 4],
                      ["Projects", 3],
                      ["Training", 1],
                      ["Certificates", 5],
                    ].map(([k, n]) => (
                      <div key={k as string} className="mt-4">
                        <div className="flex items-center justify-between">
                          <span className="kicker text-ink-900">{k}</span>
                          <span className="font-mono text-[0.6rem] text-ink-700/60">{String(n).padStart(2, "0")}</span>
                        </div>
                        <div className="mt-2 space-y-1.5">
                          <div className="h-1 w-full bg-ink-900/12" />
                          <div className="h-1 w-4/5 bg-ink-900/12" />
                          <div className="h-1 w-2/3 bg-ink-900/8" />
                        </div>
                      </div>
                    ))}
                    <div className="mt-6 border-t border-ink-900/15 pt-3 font-mono text-[0.55rem] text-ink-700/60">
                      singhaljatin7378@gmail.com
                    </div>
                  </div>
                </Tilt>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
