import { useEffect, useRef } from "react";
import {
  Chart,
  RadarController,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
} from "chart.js";
import { CURRENTLY, FACTS, JOURNEY, META, PRINCIPLES, RADAR, SKILL_ROWS } from "../lib/data";
import { Reveal, SectionHead, useInView } from "./ui";
import { Tilt } from "./Tilt";

Chart.register(
  RadarController,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip
);

export function About() {
  return (
    <section id="about" className="relative border-t border-mist/12 bg-ink-900 py-24 sm:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_0%,rgba(224,122,92,0.06),transparent_45%)]" />
      <div className="relative mx-auto max-w-[88rem] px-5 sm:px-8">
        <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          {/* sticky spec sheet */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            <Reveal>
              <Tilt
                max={6}
                innerClassName="panel corner relative p-7 [--accent:#d9a85c]"
              >
                <div className="flex items-center justify-between">
                  <span className="kicker text-mist/70">Spec sheet</span>
                  <span className="kicker text-gold">fig. 01</span>
                </div>
                <h3 className="display mt-5 text-[2rem] leading-[1.05] font-semibold text-bone">
                  {META.name}
                </h3>
                <p className="mt-2 font-mono text-xs text-mist">
                  {META.role} · {META.year}
                </p>
                <div className="mt-6 space-y-px">
                  {FACTS.map(([k, v]) => (
                    <div
                      key={k}
                      className="group flex items-start justify-between gap-4 border-b border-mist/10 py-2.5 last:border-0"
                    >
                      <span className="kicker shrink-0 pt-0.5 text-mist/60">{k}</span>
                      <span className="text-right text-[0.82rem] leading-snug text-bone transition-colors group-hover:text-gold">
                        {v}
                      </span>
                    </div>
                  ))}
                </div>
              </Tilt>
            </Reveal>

            <Reveal delay={120}>
              <div className="mt-6 border-l-2 border-gold/60 pl-5">
                <p className="display text-lg leading-snug font-medium text-bone italic">
                  “I'd rather ship a clumsy thing that taught me something than
                  keep a perfect idea in my head.”
                </p>
              </div>
            </Reveal>
          </div>

          {/* prose */}
          <div>
            <SectionHead
              no="01"
              kicker="About"
              title={
                <>
                  Still in the middle of
                  <br />
                  figuring it out —{" "}
                  <span className="text-coral italic">on purpose.</span>
                </>
              }
            />

            <div className="space-y-6 text-[1.02rem] leading-[1.85] text-mist">
              <Reveal>
                <p>
                  <span className="display float-left mr-3 mt-1 text-[3.4rem] leading-[0.72] font-semibold text-gold">
                    I
                  </span>
                  started writing code in my first year of college, not because I
                  was ahead of anyone, but because I wanted to know what was
                  actually happening inside the programs in my textbook. That
                  curiosity turned into a habit: read about an idea, then spend a
                  weekend trying to rebuild it badly, then iterate until it works.
                </p>
              </Reveal>
              <Reveal delay={80}>
                <p>
                  Most of what I've made lives in the same corner —{" "}
                  <span className="text-bone">agents that take in a signal and have to make a
                  decision</span>. A Flappy Bird agent that learns when to flap
                  instead of following a timer I wrote by hand. A Hill Climb
                  Racing bot that reads the terrain off the screen and works the
                  throttle. Both look like toys in the demo, and both taught me
                  something a lecture couldn't: reward design, perception noise,
                  and how quickly a model quietly becomes its training loop.
                </p>
              </Reveal>
              <Reveal delay={140}>
                <p>
                  Outside the model, I've had to learn the rest of the stack too.
                  My notes app pushed me through front-end structure, an API, a
                  MongoDB schema and the awkward gap between "the model returned
                  something" and "a person would actually use this on a
                  Tuesday." That gap is where I've grown the most.
                </p>
              </Reveal>
              <Reveal delay={200}>
                <p>
                  The other half of my learning happened away from a screen. As
                  part of LPU's Community Development Project I helped run{" "}
                  <span className="text-bone">WNS CyberSmart</span> — taking
                  cyber-safety workshops into schools across Rajasthan for 30+
                  participants, walking them through five certification modules
                  and logging every session with geotagged verification. Teaching
                  phishing to a room full of teenagers is a harder communication
                  problem than any bug I've fixed.
                </p>
              </Reveal>
            </div>

            {/* principles */}
            <div className="mt-12 grid gap-px border border-mist/12 bg-mist/12 sm:grid-cols-3">
              {PRINCIPLES.map((p, i) => (
                <Reveal key={p.no} delay={i * 90} className="group bg-ink-900 p-6">
                  <div className="kicker text-gold">{p.no}</div>
                  <h4 className="display mt-3 text-[1.05rem] leading-snug font-semibold text-bone">
                    {p.title}
                  </h4>
                  <p className="mt-2.5 text-[0.82rem] leading-relaxed text-mist/85">{p.body}</p>
                </Reveal>
              ))}
            </div>

            {/* journey */}
            <Reveal delay={120}>
              <div className="mt-14">
                <div className="flex items-center gap-4">
                  <span className="kicker text-mist/70">Journey</span>
                  <span className="h-px flex-1 bg-mist/15" />
                  <span className="kicker text-mist/50">2021 → now</span>
                </div>
                <ol className="mt-6 grid gap-px border border-mist/12 bg-mist/12 sm:grid-cols-2 lg:grid-cols-4">
                  {JOURNEY.map((j) => (
                    <li key={j.where + j.when} className="group bg-ink-900 p-5">
                      <div className="flex items-center gap-2.5">
                        <span className="size-2 rounded-full" style={{ background: j.accent }} />
                        <span className="font-mono text-[0.62rem] tracking-wider text-mist/70 uppercase">
                          {j.when}
                        </span>
                      </div>
                      <div className="mt-3 text-sm font-medium text-bone">{j.where}</div>
                      <div className="mt-1 font-mono text-xs" style={{ color: j.accent }}>
                        {j.what}
                      </div>
                      <div className="mt-2 text-xs leading-relaxed text-mist/75">{j.note}</div>
                    </li>
                  ))}
                </ol>
              </div>
            </Reveal>

            {/* currently */}
            <Reveal delay={160}>
              <div className="mt-12 border border-jade/25 bg-jade/5 p-6 sm:p-7">
                <div className="flex items-center gap-3">
                  <span className="relative flex size-2">
                    <span className="absolute inset-0 animate-ping rounded-full bg-jade" />
                    <span className="relative size-2 rounded-full bg-jade" />
                  </span>
                  <span className="kicker text-jade">This semester</span>
                </div>
                <div className="mt-4 grid gap-4 sm:grid-cols-3">
                  {CURRENTLY.map(([k, v]) => (
                    <div key={k}>
                      <div className="kicker text-mist/60">{k}</div>
                      <div className="mt-2 text-[0.85rem] leading-relaxed text-bone">{v}</div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── radar chart ─── */
function RadarChart() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { ref, seen } = useInView<HTMLDivElement>(0.25);

  useEffect(() => {
    const cv = canvasRef.current;
    if (!cv || !seen) return;
    const ctx = cv.getContext("2d");
    if (!ctx) return;

    const chart = new Chart(ctx, {
      type: "radar",
      data: {
        labels: RADAR.labels,
        datasets: [
          {
            label: "Self-assessed comfort",
            data: RADAR.values,
            fill: true,
            backgroundColor: "rgba(217,168,92,0.15)",
            borderColor: "rgba(217,168,92,0.9)",
            borderWidth: 1.5,
            pointBackgroundColor: "#ece7dd",
            pointBorderColor: "#d9a85c",
            pointBorderWidth: 2,
            pointRadius: 3.5,
            pointHoverRadius: 6,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        animation: { duration: 1100, easing: "easeOutQuart" },
        plugins: {
          tooltip: {
            backgroundColor: "#070b11",
            borderColor: "rgba(140,152,168,0.25)",
            borderWidth: 1,
            titleColor: "#ece7dd",
            bodyColor: "#8c98a8",
            titleFont: { family: "Space Grotesk", size: 12 },
            bodyFont: { family: "JetBrains Mono", size: 11 },
            padding: 10,
            callbacks: {
              label: (c) => `  ${c.parsed.r} / 100`,
            },
          },
        },
        scales: {
          r: {
            min: 0,
            max: 100,
            ticks: { display: false, stepSize: 25 },
            grid: { color: "rgba(140,152,168,0.14)" },
            angleLines: { color: "rgba(140,152,168,0.14)" },
            pointLabels: {
              color: "#c9c2b4",
              font: { family: "JetBrains Mono", size: 10.5 },
            },
          },
        },
      },
    });

    return () => {
      chart.destroy();
    };
  }, [seen]);

  return (
    <div ref={ref} className="relative aspect-square w-full">
      <canvas ref={canvasRef} />
    </div>
  );
}

export function Toolkit() {
  const { ref, seen } = useInView<HTMLDivElement>(0.2);

  return (
    <section id="toolkit" className="relative border-t border-mist/12 bg-ink-950 py-24 sm:py-32">
      <div className="bg-blueprint absolute inset-0 opacity-60" />
      <div className="relative mx-auto max-w-[88rem] px-5 sm:px-8">
        <SectionHead
          no="02"
          kicker="Toolkit"
          title={
            <>
              What I can actually{" "}
              <span className="text-gold italic">do today</span>
            </>
          }
          lead="Honest, self-assessed numbers from a second-year — measured against what I've shipped, not what I've watched a tutorial about."
        />

        <div ref={ref} className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <Reveal>
            <div className="panel relative p-6 sm:p-8">
              <div className="flex items-center justify-between">
                <span className="kicker text-mist/70">Capability map</span>
                <span className="kicker text-jade">2026</span>
              </div>
              <div className="mt-4">
                <RadarChart />
              </div>
              <p className="mt-4 border-t border-mist/12 pt-4 text-xs leading-relaxed text-mist/70">
                Refreshed every semester. The gaps are the point — they're what
                I'm signing up for next.
              </p>
            </div>
          </Reveal>

          <div className="space-y-10">
            {SKILL_ROWS.map((row, ri) => (
              <Reveal key={row.group} delay={ri * 90}>
                <div>
                  <div className="flex items-center gap-3 border-b border-mist/12 pb-3">
                    <span className="size-2 rounded-full" style={{ background: row.accent }} />
                    <h3 className="kicker text-bone">{row.group}</h3>
                    <span className="ml-auto font-mono text-[0.68rem] text-mist/50">
                      {String(row.items.length).padStart(2, "0")} items
                    </span>
                  </div>
                  <ul className="mt-5 space-y-4">
                    {row.items.map((it, ii) => (
                      <li key={it.name} className="group">
                        <div className="flex items-baseline justify-between gap-4">
                          <span className="text-sm font-medium text-bone transition-colors group-hover:text-gold">
                            {it.name}
                          </span>
                          <span className="font-mono text-[0.7rem] text-mist/60">{it.level}</span>
                        </div>
                        <div className="mt-2 h-[3px] w-full bg-mist/12">
                          <div
                            className="h-full transition-[width] duration-1000 ease-out"
                            style={{
                              width: seen ? `${it.level}%` : "0%",
                              background: row.accent,
                              transitionDelay: `${ri * 120 + ii * 80}ms`,
                            }}
                          />
                        </div>
                        <div className="mt-1.5 font-mono text-[0.68rem] text-mist/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                          {it.note}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
