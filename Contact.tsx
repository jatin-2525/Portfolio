import { useState } from "react";
import { ArrowUpRight, Check, Copy, Mail, Phone } from "lucide-react";
import { LINKS, META } from "../lib/data";
import { copyText } from "../lib/open";
import { A, GithubIcon, LinkedinIcon, Reveal, SectionHead } from "./ui";

const CHANNELS = [
  {
    key: "email",
    label: "Email",
    value: LINKS.email,
    href: LINKS.mailto,
    icon: <Mail className="size-4" />,
    accent: "#d9a85c",
    note: "Replies within a day, usually.",
  },
  {
    key: "linkedin",
    label: "LinkedIn",
    value: "in/kumarjatin25",
    href: LINKS.linkedin,
    icon: <LinkedinIcon className="size-4" />,
    accent: "#7e9cd8",
    note: "Updates on coursework & builds.",
  },
  {
    key: "github",
    label: "GitHub",
    value: "jatin-2525",
    href: LINKS.github,
    icon: <GithubIcon className="size-4" />,
    accent: "#5cbfa9",
    note: "Read the code before you read the CV.",
  },
] as const;

export function Contact() {
  const [copied, setCopied] = useState(false);
  const [phoneOn, setPhoneOn] = useState(false);

  const copy = () => {
    copyText(LINKS.email)
      .then(() => setCopied(true))
      .finally(() => setTimeout(() => setCopied(false), 1800));
  };

  return (
    <section id="contact" className="relative overflow-hidden border-t border-mist/12 bg-ink-900 py-24 sm:py-32">
      <div className="bg-blueprint absolute inset-0 opacity-50" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(92,191,169,0.12),transparent_55%)]" />

      <div className="relative mx-auto max-w-[88rem] px-5 sm:px-8">
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <SectionHead
              no="08"
              kicker="Contact"
              title={
                <>
                  Let's build something{" "}
                  <span className="text-jade italic">small</span> and finish it.
                </>
              }
            />
            <Reveal delay={80}>
              <p className="max-w-md text-[1.02rem] leading-[1.8] text-mist">
                I'm second-year and I'm looking for internships, research
                assistance and project collaborations where I'd be the least
                experienced person in the room. If you've got real work and
                patience, I'll bring the hours.
              </p>
            </Reveal>
            <Reveal delay={140}>
              <div className="mt-8 inline-flex items-center gap-3 border border-jade/25 bg-jade/8 px-4 py-3">
                <span className="relative flex size-2">
                  <span className="absolute inset-0 animate-ping rounded-full bg-jade" />
                  <span className="relative size-2 rounded-full bg-jade" />
                </span>
                <span className="kicker text-jade">Available — Summer 2027 & part-time now</span>
              </div>
            </Reveal>
          </div>

          <Reveal delay={60}>
            <div className="border-t border-mist/12">
              {CHANNELS.map((c) => (
                <A
                  key={c.key}
                  href={c.href}
                  label={c.label === "Email" ? "the email link" : `the ${c.label} link`}
                  className="group flex items-center gap-4 border-b border-mist/12 py-5 transition-all duration-300 hover:pl-3"
                >
                  <span
                    className="grid size-10 shrink-0 place-items-center border transition-colors duration-300"
                    style={{ borderColor: `${c.accent}40`, color: c.accent }}
                  >
                    {c.icon}
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="kicker block text-mist/60">{c.label}</span>
                    <span className="mt-1 block truncate text-[0.98rem] font-medium text-bone transition-colors group-hover:text-white">
                      {c.value}
                    </span>
                    <span className="mt-0.5 block text-xs text-mist/60">{c.note}</span>
                  </span>
                  <ArrowUpRight className="size-4 shrink-0 text-mist transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-bone" />
                </A>
              ))}

              <div className="flex flex-wrap items-center gap-3 border-b border-mist/12 py-5">
                <span className="grid size-10 shrink-0 place-items-center border border-coral/30 text-coral">
                  <Phone className="size-4" />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="kicker block text-mist/60">Phone</span>
                  <span className="mt-1 block text-[0.98rem] font-medium text-bone">
                    {phoneOn ? LINKS.phone : "Hidden for privacy"}
                  </span>
                  <span className="mt-0.5 block text-xs text-mist/60">
                    Revealed on request — or grab it from the CV.
                  </span>
                </span>
                <button
                  onClick={() => setPhoneOn(!phoneOn)}
                  className="border border-mist/20 px-4 py-2 text-xs font-medium text-bone transition-colors hover:border-coral/50 hover:text-coral"
                >
                  {phoneOn ? "Hide" : "Reveal"}
                </button>
              </div>

              <button
                onClick={copy}
                className="group mt-6 flex w-full items-center justify-between gap-3 bg-ink-850 px-5 py-4 text-left transition-colors hover:bg-ink-800"
              >
                <span className="text-sm font-medium text-bone">
                  {copied ? "Address copied" : "Copy email address"}
                </span>
                <span className="flex items-center gap-2 font-mono text-[0.68rem] text-mist">
                  {copied ? (
                    <>
                      <Check className="size-3.5 text-jade" /> done
                    </>
                  ) : (
                    <>
                      <Copy className="size-3.5" /> click
                    </>
                  )}
                </span>
              </button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-mist/12 bg-ink-950">
      <div className="mx-auto max-w-[88rem] px-5 py-10 sm:px-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="display text-2xl font-semibold text-bone">Jatin Kumar Singhal</div>
            <p className="mt-1.5 font-mono text-xs text-mist/60">
              B.Tech CSE · {META.university} · Phagwara, Punjab
            </p>
          </div>
          <div className="flex items-center gap-3">
            {[
              { href: LINKS.github, label: "GitHub", icon: <GithubIcon className="size-4" /> },
              { href: LINKS.linkedin, label: "LinkedIn", icon: <LinkedinIcon className="size-4" /> },
              { href: LINKS.mailto, label: "Email", icon: <Mail className="size-4" /> },
            ].map((s) => (
              <A
                key={s.label}
                href={s.href}
                label={s.label === "Email" ? "the email link" : `the ${s.label} link`}
                className="grid size-10 place-items-center border border-mist/15 text-mist transition-all duration-300 hover:-translate-y-0.5 hover:border-gold/60 hover:text-gold"
              >
                {s.icon}
              </A>
            ))}
          </div>
        </div>
        <div className="mt-8 flex flex-col gap-2 border-t border-mist/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-mist/50">
            © {new Date().getFullYear()} Jatin Kumar Singhal. Built by hand with
            React, Three.js, Vite & Tailwind.
          </p>
          <p className="font-mono text-[0.68rem] text-mist/40">v3 · second-year edition</p>
        </div>
      </div>
    </footer>
  );
}
