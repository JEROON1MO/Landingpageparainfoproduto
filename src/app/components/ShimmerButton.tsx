import { motion } from "motion/react";
import { ReactNode } from "react";

interface ShimmerButtonProps {
  href: string;
  children: ReactNode;
  className?: string;
}

export function ShimmerButton({ href, children, className = "" }: ShimmerButtonProps) {
  return (
    <motion.a
      href={href}
      whileHover={{ scale: 1.02, boxShadow: "0 0 40px rgba(0,245,147,0.3)" }}
      whileTap={{ scale: 0.98 }}
      className={`relative overflow-hidden inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#00F593] to-[#00D47E] text-[#0A0A0F] px-8 py-4 rounded-2xl text-lg cursor-pointer whitespace-nowrap ${className}`}
      style={{ fontWeight: 700 }}
    >
      {/* Shimmer effect */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.25) 50%, transparent 60%)",
          backgroundSize: "200% 100%",
        }}
        animate={{ backgroundPosition: ["200% 0", "-200% 0"] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "linear", repeatDelay: 2 }}
      />
      {/* Pulse animation */}
      <motion.div
        className="absolute inset-0 rounded-2xl pointer-events-none"
        animate={{
          boxShadow: [
            "0 0 0 0 rgba(0,245,147,0.35)",
            "0 0 0 12px rgba(0,245,147,0)",
          ],
        }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeOut" }}
      />
      <span className="relative z-10">{children}</span>
    </motion.a>
  );
}