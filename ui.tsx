import {
  useEffect,
  useRef,
  useState,
  type ReactNode,
  type MouseEvent as ReactMouseEvent,
} from "react";
import { onToast, openExternal } from "../lib/open";

/* ─── scroll reveal ─── */
export function useInView<T extends HTMLElement>(threshold = 0.15) {
  const ref = useRef<T>(null);
  const [seen, setSeen] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setSeen(true);
          io.unobserve(el);
        }
      },
      { threshold, rootMargin: "0px 0px -8% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);
  return { ref, seen };
}

export function Reveal({
  children,
  delay = 0,
  className = "",
  as: Tag = "div",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "li" | "article" | "section";
}) {
  const { ref, seen } = useInView<HTMLDivElement>(0.12);
  return (
    <Tag
      ref={ref as never}
      className={`reveal ${seen ? "in" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  );
}

/* ─── brand glyphs (not in lucide v1) ─── */
export function GithubIcon({ className = "size-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.795.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.145 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.621.242 2.842.118 3.145.78.84 1.234 1.91 1.234 3.221 0 4.609-2.803 5.624-5.475 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

export function LinkedinIcon({ className = "size-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.139 1.45-2.139 2.934v5.672H9.348V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

/* ─── external anchor with safe-open fallback ─── */
export function A({
  href,
  label,
  className = "",
  children,
}: {
  href: string;
  label: string;
  className?: string;
  children: ReactNode;
}) {
  const onClick = (e: ReactMouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    openExternal(href, label);
  };
  return (
    <a
      href={href}
      onClick={onClick}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      {children}
    </a>
  );
}

/* ─── section header ─── */
export function SectionHead({
  no,
  kicker,
  title,
  lead,
  light = false,
}: {
  no: string;
  kicker: string;
  title: ReactNode;
  lead?: string;
  light?: boolean;
}) {
  return (
    <div className="mb-14">
      <div className={`flex items-center gap-4 ${light ? "text-ink-700" : "text-mist"}`}>
        <span className={`kicker ${light ? "text-coral" : "text-gold"}`}>{no}</span>
        <span className="h-px w-16 bg-current opacity-30" />
        <span className="kicker">{kicker}</span>
      </div>
      <h2
        className={`display mt-6 text-[2.1rem] leading-[1.03] font-semibold sm:text-5xl lg:text-[3.4rem] ${
          light ? "text-ink-900" : "text-bone"
        }`}
      >
        {title}
      </h2>
      {lead && (
        <p className={`mt-5 max-w-xl text-[0.98rem] leading-relaxed ${light ? "text-ink-700" : "text-mist"}`}>
          {lead}
        </p>
      )}
    </div>
  );
}

/* ─── scrolling ticker ─── */
export function Ticker({ items, className = "" }: { items: string[]; className?: string }) {
  const line = [...items, ...items];
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-ink-950 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-ink-950 to-transparent" />
      <div className="flex w-max animate-marquee">
        {line.map((t, i) => (
          <span key={i} className="kicker flex shrink-0 items-center gap-6 px-6 py-4 text-bone-dim">
            {t}
            <span className="size-1 rounded-full bg-gold/70" />
          </span>
        ))}
      </div>
    </div>
  );
}

/* ─── toast stack (fallback for blocked links) ─── */
export function ToastHost() {
  const [items, setItems] = useState<{ id: number; msg: string }[]>([]);
  useEffect(
    () =>
      onToast((msg) => {
        const id = Date.now() + Math.random();
        setItems((s) => [...s.slice(-2), { id, msg }]);
        setTimeout(() => setItems((s) => s.filter((i) => i.id !== id)), 5200);
      }),
    []
  );
  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-6 z-[80] flex flex-col items-center gap-2 px-4">
      {items.map((t) => (
        <div
          key={t.id}
          className="animate-toast pointer-events-auto flex max-w-md items-start gap-3 border border-gold/40 bg-ink-850/95 px-4 py-3 shadow-[0_18px_50px_-18px_rgba(0,0,0,0.9)] backdrop-blur-md"
        >
          <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-gold text-ink-950">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="size-3">
              <path d="M20 6L9 17l-5-5" />
            </svg>
          </span>
          <p className="text-xs leading-relaxed text-bone">{t.msg}</p>
        </div>
      ))}
    </div>
  );
}
