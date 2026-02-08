import { useEffect, useRef, useState } from "react";
import { useMousePosition } from "@/hooks/useMousePosition";

/**
 * A cute SVG puppy that chases the cursor.
 * Stays in a fixed position, behind content (pointer-events: none).
 */
export function CursorPuppy() {
  const mouse = useMousePosition();
  const puppyRef = useRef({ x: 80, y: typeof window !== "undefined" ? window.innerHeight - 100 : 600 });
  const [pos, setPos] = useState(puppyRef.current);
  const [isMoving, setIsMoving] = useState(false);
  const [facingLeft, setFacingLeft] = useState(false);
  const frameRef = useRef<number>(0);
  const lastMouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    let moving = false;

    const animate = () => {
      const cur = puppyRef.current;
      const dx = mouse.x - cur.x;
      const dy = mouse.y - cur.y;
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (dist > 60) {
        const speed = Math.min(dist * 0.04, 6);
        cur.x += (dx / dist) * speed;
        cur.y += (dy / dist) * speed;
        moving = true;
        if (dx < -2) setFacingLeft(true);
        else if (dx > 2) setFacingLeft(false);
      } else {
        moving = false;
      }

      setPos({ x: cur.x, y: cur.y });
      setIsMoving(moving);
      frameRef.current = requestAnimationFrame(animate);
    };

    frameRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frameRef.current);
  }, [mouse.x, mouse.y]);

  return (
    <div
      className="fixed z-30 pointer-events-none"
      style={{
        left: pos.x - 20,
        top: pos.y - 20,
        transform: `scaleX(${facingLeft ? -1 : 1})`,
        transition: "transform 0.2s ease",
      }}
    >
      <svg
        width="40"
        height="40"
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Body */}
        <ellipse
          cx="32"
          cy="42"
          rx="16"
          ry="12"
          className="fill-foreground/80"
        />
        {/* Head */}
        <circle cx="32" cy="26" r="12" className="fill-foreground/80" />
        {/* Ears */}
        <ellipse
          cx="22"
          cy="18"
          rx="5"
          ry="8"
          transform="rotate(-15 22 18)"
          className="fill-foreground/60"
        />
        <ellipse
          cx="42"
          cy="18"
          rx="5"
          ry="8"
          transform="rotate(15 42 18)"
          className="fill-foreground/60"
        />
        {/* Eyes */}
        <circle cx="28" cy="24" r="2" className="fill-background" />
        <circle cx="36" cy="24" r="2" className="fill-background" />
        <circle cx="28.5" cy="24.5" r="1" className="fill-foreground" />
        <circle cx="36.5" cy="24.5" r="1" className="fill-foreground" />
        {/* Nose */}
        <ellipse cx="32" cy="29" rx="2.5" ry="1.5" className="fill-primary" />
        {/* Tongue when moving */}
        {isMoving && (
          <ellipse cx="32" cy="33" rx="2" ry="3" fill="hsl(0, 70%, 60%)" />
        )}
        {/* Tail */}
        <path
          d="M48 40 Q56 32 52 26"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          className={`text-foreground/60 origin-[48px_40px] ${isMoving ? "animate-wag" : ""}`}
          fill="none"
        />
        {/* Legs */}
        {isMoving ? (
          <>
            <line x1="24" y1="50" x2="22" y2="58" stroke="currentColor" strokeWidth="3" strokeLinecap="round" className="text-foreground/60" />
            <line x1="28" y1="52" x2="30" y2="58" stroke="currentColor" strokeWidth="3" strokeLinecap="round" className="text-foreground/60" />
            <line x1="36" y1="52" x2="34" y2="58" stroke="currentColor" strokeWidth="3" strokeLinecap="round" className="text-foreground/60" />
            <line x1="40" y1="50" x2="42" y2="58" stroke="currentColor" strokeWidth="3" strokeLinecap="round" className="text-foreground/60" />
          </>
        ) : (
          <>
            <line x1="24" y1="52" x2="24" y2="60" stroke="currentColor" strokeWidth="3" strokeLinecap="round" className="text-foreground/60" />
            <line x1="30" y1="53" x2="30" y2="60" stroke="currentColor" strokeWidth="3" strokeLinecap="round" className="text-foreground/60" />
            <line x1="34" y1="53" x2="34" y2="60" stroke="currentColor" strokeWidth="3" strokeLinecap="round" className="text-foreground/60" />
            <line x1="40" y1="52" x2="40" y2="60" stroke="currentColor" strokeWidth="3" strokeLinecap="round" className="text-foreground/60" />
          </>
        )}
      </svg>
      {/* Idle float animation */}
      {!isMoving && (
        <div className="absolute -top-1 left-1/2 -translate-x-1/2 text-[8px] text-muted-foreground animate-float font-mono opacity-60">
          zzz
        </div>
      )}
    </div>
  );
}
