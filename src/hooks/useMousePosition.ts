import { useEffect, useState } from "react";

interface MousePosition {
  x: number;
  y: number;
}

export function useMousePosition() {
  const [position, setPosition] = useState<MousePosition>({ x: 0, y: 0 });

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    const touchHandler = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        setPosition({ x: e.touches[0].clientX, y: e.touches[0].clientY });
      }
    };
    window.addEventListener("mousemove", handler);
    window.addEventListener("touchstart", touchHandler);
    window.addEventListener("touchmove", touchHandler);
    return () => {
      window.removeEventListener("mousemove", handler);
      window.removeEventListener("touchstart", touchHandler);
      window.removeEventListener("touchmove", touchHandler);
    };
  }, []);

  return position;
}
