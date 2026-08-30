import { useRef, type ReactNode, type MouseEvent as ReactMouseEvent } from "react";

/**
 * CSS 3D tilt card — rotates toward the pointer with a moving glare.
 */
export function Tilt({
  children,
  max = 7,
  className = "",
  innerClassName = "",
}: {
  children: ReactNode;
  max?: number;
  className?: string;
  innerClassName?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const onMove = (e: ReactMouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    el.style.transform = `perspective(950px) rotateX(${(-py * max).toFixed(2)}deg) rotateY(${(px * max).toFixed(2)}deg) translateZ(0)`;
    el.style.setProperty("--gx", `${((px + 0.5) * 100).toFixed(1)}%`);
    el.style.setProperty("--gy", `${((py + 0.5) * 100).toFixed(1)}%`);
  };

  const onLeave = () => {
    const el = ref.current;
    if (el) el.style.transform = "perspective(950px) rotateX(0deg) rotateY(0deg)";
  };

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={`tilt-3d will-change-transform ${className}`}
      style={{ transformStyle: "preserve-3d", transition: "transform 0.25s ease-out" }}
    >
      <div className={innerClassName}>{children}</div>
      <div className="tilt-glare" />
    </div>
  );
}
