import { useEffect, useRef, useState } from "react";
import { ArrowUp } from "lucide-react";
import { Hero, Nav, ScrollProgress } from "./components/Hero";
import { About, Toolkit } from "./components/About";
import { FieldWork, Work } from "./components/Work";
import { Visuals } from "./components/Visuals";
import { EducationAndCV, Proof } from "./components/Proof";
import { Contact, Footer } from "./components/Contact";
import { ToastHost } from "./components/ui";

/** Soft light that follows the pointer across the dark surfaces. */
function Spotlight() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    let raf = 0;
    let x = window.innerWidth / 2;
    let y = window.innerHeight / 3;
    let tx = x;
    let ty = y;

    const onMove = (e: MouseEvent) => {
      tx = e.clientX;
      ty = e.clientY;
    };
    const tick = () => {
      x += (tx - x) * 0.11;
      y += (ty - y) * 0.11;
      if (ref.current) {
        ref.current.style.transform = `translate3d(${x - 320}px, ${y - 320}px, 0)`;
      }
      raf = requestAnimationFrame(tick);
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    raf = requestAnimationFrame(tick);
    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none fixed top-0 left-0 z-[45] size-[640px] rounded-full opacity-80 mix-blend-screen blur-[60px]"
      style={{
        background:
          "radial-gradient(circle, rgba(217,168,92,0.06) 0%, rgba(92,191,169,0.038) 40%, transparent 66%)",
      }}
    />
  );
}

function ToTop() {
  const [on, setOn] = useState(false);
  useEffect(() => {
    const fn = () => setOn(window.scrollY > 700);
    fn();
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Back to top"
      className={`fixed right-5 bottom-5 z-50 grid size-11 place-items-center border border-mist/25 bg-ink-950/85 text-bone backdrop-blur-sm transition-all duration-300 hover:border-gold hover:text-gold sm:right-8 sm:bottom-8 ${
        on ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-3 opacity-0"
      }`}
    >
      <ArrowUp className="size-4" />
    </button>
  );
}

export default function App() {
  return (
    <div className="noise relative min-h-screen bg-ink-900">
      <ScrollProgress />
      <Nav />
      <Spotlight />
      <main className="relative z-10">
        <Hero />
        <About />
        <Toolkit />
        <Work />
        <FieldWork />
        <Proof />
        <Visuals />
        <EducationAndCV />
        <Contact />
      </main>
      <div className="relative z-10">
        <Footer />
      </div>
      <ToTop />
      <ToastHost />
    </div>
  );
}
