"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function Cursor() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 400, damping: 30, mass: 0.6 });
  const sy = useSpring(y, { stiffness: 400, damping: 30, mass: 0.6 });
  const [variant, setVariant] = useState<"default" | "hover">("default");
  const [hidden, setHidden] = useState(true);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      setHidden(false);
    };
    const over = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest("[data-cursor='hover'], a, button")) setVariant("hover");
      else setVariant("default");
    };
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", over);
    window.addEventListener("mouseleave", () => setHidden(true));
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
    };
  }, [x, y]);

  if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) {
    return null;
  }

  return (
    <>
      <motion.div
        style={{ translateX: sx, translateY: sy }}
        animate={{
          width: variant === "hover" ? 56 : 14,
          height: variant === "hover" ? 56 : 14,
          opacity: hidden ? 0 : 1,
          backgroundColor: variant === "hover" ? "rgba(163,255,18,0.18)" : "rgba(163,255,18,0.95)",
          borderColor: "rgba(163,255,18,0.6)",
        }}
        transition={{ type: "spring", stiffness: 500, damping: 35 }}
        className="pointer-events-none fixed left-0 top-0 z-[9999] -translate-x-1/2 -translate-y-1/2 rounded-full mix-blend-difference border"
      />
      <motion.div
        style={{ translateX: x, translateY: y, opacity: hidden ? 0 : 1 }}
        className="pointer-events-none fixed left-0 top-0 z-[9999] -translate-x-1/2 -translate-y-1/2 h-1 w-1 rounded-full bg-white"
      />
    </>
  );
}
