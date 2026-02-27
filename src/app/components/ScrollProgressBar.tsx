import { motion, useScroll, useSpring } from "motion/react";

export function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  return (
    <>
      {/* Main bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] z-[100] origin-left"
        style={{
          scaleX,
          background: "linear-gradient(90deg, #00F593, #00D47E, #00F593)",
        }}
      />
      {/* Glow underneath */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[6px] z-[99] origin-left"
        style={{
          scaleX,
          background: "linear-gradient(90deg, rgba(0,245,147,0.4), rgba(0,212,126,0.3), rgba(0,245,147,0.4))",
          filter: "blur(4px)",
        }}
      />
    </>
  );
}
