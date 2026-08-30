import { useEffect, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { HERO_FACTS, LINKS, META, ROTATING, STATS } from "../lib/data";
import { A, GithubIcon, LinkedinIcon, Ticker } from "./ui";
import { ThreeScene } from "./ThreeScene";

const SECTIONS = [
  ["about", "About"],
  ["toolkit", "Toolkit"],
  ["work", "Work"],
  ["field", "Field work"],
  ["proof", "Proof"],
  ["edu", "Education"],
  ["cv", "My CV"],
  ["contact", "Contact"],
] as const;

export function ScrollProgress() {
  const [p, setP] = useState(0);
  useEffect(() => {
    let raf = 0;
    const fn = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const h = document.body.scrollHeight - window.innerHeight;
        setP(h > 0 ? (window.scrollY / h) * 100 : 0);
      });
    };
    fn();
    window.addEventListener("scroll", fn, { passive: true });
    window.addEventListener("resize", fn);
    return () => {
      window.removeEventListener("scroll", fn);
      window.removeEventListener("resize", fn);
      cancelAnimationFrame(raf);
    };
  }, []);
  return (
    <div className="fixed top-0 left-0 right-0 z-[70] h-[2px]">
      <div
        className="h-full bg-gradient-to-r from-gold via-jade to-steel"
        style={{ width: `${p}%` }}
      />
    </div>
  );
}

export function Nav() {
  const [solid, setSolid] = useState(false);
  const [active, setActive] = useState("hero");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    let raf = 0;
    const fn = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        setSolid(window.scrollY > 70);
        let cur = "hero";
        for (const [id] of SECTIONS) {
          const el = document.getElementById(id);
          if (el && el.getBoundingClientRect().top <= 140) cur = id;
        }
        setActive(cur);
      });
    };
    fn();
    window.addEventListener("scroll", fn, { passive: true });
    return () => {
      window.removeEventListener("scroll", fn);
      cancelAnimationFrame(raf);
    };
  }, []);

  const go = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        solid ? "border-b border-mist/12 bg-ink-950/85 backdrop-blur-md" : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex h-[68px] max-w-[88rem] items-center justify-between gap-6 px-5 sm:px-8">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="group flex items-baseline gap-2.5"
        >
          <span className="display text-lg font-semibold tracking-tight text-bone transition-colors group-hover:text-gold">
            JKS
          </span>
          <span className="kicker hidden text-mist/70 sm:inline">/ jatin singhal</span>
        </button>

        <nav className="hidden items-center gap-0.5 lg:flex">
          {SECTIONS.map(([id, label]) => (
            <button
              key={id}
              onClick={() => go(id)}
              data-active={active === id}
              className="nav-pill px-3 py-2 text-[0.8rem] font-medium text-mist transition-colors hover:text-bone data-[active=true]:text-bone"
            >
              {label}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <A
            href={LINKS.cv}
            label="the résumé link"
            className="hidden items-center gap-2 border border-gold/40 px-4 py-2 text-[0.78rem] font-medium text-gold transition-all hover:bg-gold hover:text-ink-950 sm:inline-flex"
          >
            Résumé
            <ArrowUpRight className="size-3.5" />
          </A>
          <button
            onClick={() => setOpen(!open)}
            className="grid size-9 place-items-center border border-mist/20 text-bone lg:hidden"
            aria-label="Menu"
          >
            <span className="space-y-[5px]">
              <span className={`block h-px w-4 bg-current transition-transform ${open ? "translate-y-[6px] rotate-45" : ""}`} />
              <span className={`block h-px w-4 bg-current transition-opacity ${open ? "opacity-0" : ""}`} />
              <span className={`block h-px w-4 bg-current transition-transform ${open ? "-translate-y-[6px] -rotate-45" : ""}`} />
            </span>
          </button>
        </div>
      </div>

      <div className={`expand bg-ink-950/95 backdrop-blur-md lg:hidden ${open ? "open border-t border-mist/10" : ""}`}>
        <div>
          <div className="grid grid-cols-2 gap-px bg-mist/10 p-px">
            {SECTIONS.map(([id, label]) => (
              <button
                key={id}
                onClick={() => go(id)}
                className={`bg-ink-950 px-4 py-3.5 text-left text-sm transition-colors ${
                  active === id ? "text-gold" : "text-mist hover:text-bone"
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}

/* ── terminal card ── */
const TERMINAL = [
  { c: "$ whoami", o: "jatin — b.tech cse, 2nd year" },
  { c: "$ cat focus.txt", o: "ai agents · full-stack · data" },
  { c: "$ git log --oneline -3", o: "notes-app, flappy-rl, hill-climb" },
  { c: "$ status", o: "cgpa 7.63 · open to internships" },
];

function Terminal() {
  const [line, setLine] = useState(0);
  const [chars, setChars] = useState(0);

  useEffect(() => {
    if (line >= TERMINAL.length) return;
    const target = TERMINAL[line].o.length;
    if (chars < target) {
      const t = setTimeout(() => setChars((c) => c + 1), 22);
      return () => clearTimeout(t);
    }
    const t = setTimeout(() => {
      setLine((l) => l + 1);
      setChars(0);
    }, 900);
    return () => clearTimeout(t);
  }, [line, chars]);

  return (
    <div className="panel relative overflow-hidden">
      <div className="bg-tick pointer-events-none absolute inset-0 opacity-35" />
      <div className="animate-sweep pointer-events-none absolute inset-x-0 top-0 h-14 bg-gradient-to-b from-jade/10 to-transparent" />
      <div className="relative flex items-center gap-2 border-b border-mist/12 bg-ink-950/60 px-4 py-2.5">
        <span className="size-2.5 rounded-full bg-coral/80" />
        <span className="size-2.5 rounded-full bg-gold/80" />
        <span className="size-2.5 rounded-full bg-jade/80" />
        <span className="kicker ml-3 text-mist/70">jatin — portfolio.sh</span>
      </div>
      <div className="relative space-y-3 p-5 font-mono text-[0.78rem] leading-relaxed sm:p-6">
        {TERMINAL.map((l, i) => {
          const state = i < line ? "done" : i === line ? "typing" : "pending";
          return (
            <div
              key={i}
              className="transition-opacity duration-300"
              style={{ opacity: state === "pending" ? 0.25 : 1 }}
            >
              <div className="text-jade">
                <span className="text-mist/60">{String(i + 1).padStart(2, "0")} </span>
                {l.c}
              </div>
              <div className="mt-1 pl-5 text-bone-dim">
                {state === "typing" ? l.o.slice(0, chars) : state === "done" ? l.o : ""}
                {state === "typing" && (
                  <span className="animate-caret ml-0.5 inline-block h-3.5 w-[7px] translate-y-[2px] bg-gold" />
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function useTypewriter(words: string[]) {
  const [i, setI] = useState(0);
  const [n, setN] = useState(0);
  const [del, setDel] = useState(false);
  useEffect(() => {
    const word = words[i];
    if (!del && n < word.length) {
      const t = setTimeout(() => setN(n + 1), 46);
      return () => clearTimeout(t);
    }
    if (!del && n === word.length) {
      const t = setTimeout(() => setDel(true), 1900);
      return () => clearTimeout(t);
    }
    if (del && n > 0) {
      const t = setTimeout(() => setN(n - 1), 22);
      return () => clearTimeout(t);
    }
    const t = setTimeout(() => {
      setDel(false);
      setI((i + 1) % words.length);
    }, 260);
    return () => clearTimeout(t);
  }, [n, del, i, words]);
  return words[i].slice(0, n);
}

export function Hero() {
  const typed = useTypewriter(ROTATING);

  return (
    <section id="hero" className="relative overflow-hidden bg-ink-900">
      {/* ambient layers */}
      <div className="bg-blueprint absolute inset-0" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(217,168,92,0.12),transparent_55%),radial-gradient(circle_at_82%_12%,rgba(126,156,216,0.12),transparent_52%),radial-gradient(circle_at_50%_115%,rgba(92,191,169,0.13),transparent_58%)]" />

      {/* 3D artifact */}
      <div className="pointer-events-none absolute inset-0 hidden opacity-90 md:block [mask-image:linear-gradient(100deg,transparent_8%,black_55%)]">
        <ThreeScene className="h-full w-full" />
      </div>
      <div className="pointer-events-none absolute inset-0 md:hidden">
        <ThreeScene className="h-full w-full opacity-40" />
      </div>

      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-ink-950 to-transparent" />
      <div className="animate-orbit absolute top-40 right-[2%] hidden size-80 rounded-full border border-dashed border-mist/10 xl:block">
        <span className="absolute top-1/2 -left-1 size-1.5 rounded-full bg-steel" />
      </div>

      <div className="relative mx-auto max-w-[88rem] px-5 pt-32 pb-0 sm:px-8 lg:pt-40">
        <div className="grid items-end gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          {/* left */}
          <div>
            <div className="animate-rise flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-2.5 border border-jade/30 bg-jade/8 py-1.5 pr-3 pl-1.5">
                <img
                  src="images/portrait.png"
                  alt="Jatin Kumar Singhal"
                  className="ph size-7 rounded-full object-cover object-top ring-2 ring-jade/50"
                />
                <span className="relative flex size-1.5">
                  <span className="absolute inset-0 animate-ping rounded-full bg-jade" />
                  <span className="relative size-1.5 rounded-full bg-jade" />
                </span>
                <span className="kicker text-jade">{META.status}</span>
              </span>
              <span className="kicker text-mist/70">
                {META.year} · {META.university}
              </span>
            </div>

            <h1 className="display animate-rise mt-8 font-light text-bone" style={{ animationDelay: "80ms" }}>
              <span className="block text-[3rem] leading-[0.92] tracking-[-0.03em] sm:text-[4.5rem] lg:text-[6rem]">
                Jatin Kumar
              </span>
              <span className="block text-[3rem] leading-[0.92] tracking-[-0.03em] text-gold italic sm:text-[4.5rem] lg:text-[6rem]">
                Singhal
              </span>
            </h1>

            <div className="animate-rise mt-7 flex min-h-7 items-baseline gap-2 font-mono text-sm sm:text-base" style={{ animationDelay: "160ms" }}>
              <span className="text-jade">const</span>
              <span className="text-mist">build</span>
              <span className="text-mist/50">=</span>
              <span className="text-bone">"{typed}"</span>
              <span className="animate-caret inline-block h-4 w-[7px] bg-gold" />
            </div>

            <p className="animate-rise mt-7 max-w-xl text-[1.02rem] leading-[1.75] text-mist" style={{ animationDelay: "240ms" }}>
              I'm a second-year Computer Science student who learns by building.
              A bird that teaches itself to flap, a bot that drives by watching
              the screen, a notes app that writes its own summaries — nothing
              fancy, just real problems solved one commit at a time.
            </p>

            <div className="animate-rise mt-10 flex flex-wrap items-center gap-3" style={{ animationDelay: "320ms" }}>
              <a
                href="#work"
                className="group/btn inline-flex items-center gap-2.5 bg-bone px-6 py-3.5 text-sm font-medium text-ink-950 transition-all duration-300 hover:-translate-y-0.5 hover:bg-gold"
              >
                See what I've built
                <span className="transition-transform duration-300 group-hover/btn:translate-x-1">→</span>
              </a>
              <A
                href={LINKS.github}
                label="the GitHub link"
                className="inline-flex items-center gap-2.5 border border-mist/25 px-5 py-3.5 text-sm font-medium text-bone transition-all duration-300 hover:-translate-y-0.5 hover:border-gold/60 hover:text-gold"
              >
                <GithubIcon className="size-4" />
                jatin-2525
              </A>
              <A
                href={LINKS.linkedin}
                label="the LinkedIn link"
                className="inline-flex items-center gap-2.5 border border-mist/25 px-5 py-3.5 text-sm font-medium text-bone transition-all duration-300 hover:-translate-y-0.5 hover:border-steel/60 hover:text-steel"
              >
                <LinkedinIcon className="size-4" />
                in/kumarjatin25
              </A>
            </div>
          </div>

          {/* right */}
          <div className="animate-rise space-y-4" style={{ animationDelay: "400ms" }}>
            <Terminal />
            <div className="grid grid-cols-2 gap-px border border-mist/12 bg-mist/12">
              {HERO_FACTS.map(([k, v]) => (
                <div key={k} className="bg-ink-950/70 px-4 py-3">
                  <div className="kicker text-mist/60">{k}</div>
                  <div className="mt-1.5 text-[0.82rem] leading-snug text-bone">{v}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* stat strip */}
        <div className="mt-16 grid grid-cols-2 gap-px border-t border-mist/12 bg-mist/12 lg:grid-cols-4 lg:border-b">
          {STATS.map((s) => (
            <div key={s.label} className="group bg-ink-900 px-5 py-6 transition-colors hover:bg-ink-850 sm:px-7">
              <div className="display text-4xl leading-none font-light text-bone transition-colors group-hover:text-gold sm:text-5xl">
                {s.value}
              </div>
              <div className="mt-3 text-sm font-medium text-bone">{s.label}</div>
              <div className="mt-0.5 text-xs text-mist/70">{s.note}</div>
            </div>
          ))}
        </div>
      </div>

      <Ticker
        className="relative border-t border-mist/12 bg-ink-950"
        items={[
          "Python",
          "C++",
          "C",
          "HTML",
          "MongoDB",
          "MS SQL Server",
          "Tableau",
          "ETL",
          "Reinforcement Learning",
          "Computer Vision",
          "Full-stack",
          "Problem solving",
        ]}
      />
    </section>
  );
}
