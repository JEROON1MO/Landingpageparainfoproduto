import { useEffect, useRef, useState, useCallback } from "react";

/**
 * AmbientBackground — Premium immersive background system
 * 1. Animated gradient (slow cycling dark tones)
 * 2. Floating blobs / light glows
 * 3. Futuristic grid lines
 * 4. Mouse-following light (desktop only)
 * 5. Section-aware color transitions
 */

function useIsMobile() {
  const [mobile, setMobile] = useState(false);
  useEffect(() => {
    const check = () => setMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check, { passive: true });
    return () => window.removeEventListener("resize", check);
  }, []);
  return mobile;
}

function useReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const handler = (e: MediaQueryListEvent) => setReduced(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);
  return reduced;
}

/* ───── Mouse Follower Light ───── */
function MouseFollower() {
  const ref = useRef<HTMLDivElement>(null);
  const posRef = useRef({ x: 0, y: 0 });
  const currentRef = useRef({ x: 0, y: 0 });
  const rafRef = useRef<number>(0);

  const animate = useCallback(() => {
    const lerp = 0.08;
    currentRef.current.x += (posRef.current.x - currentRef.current.x) * lerp;
    currentRef.current.y += (posRef.current.y - currentRef.current.y) * lerp;
    if (ref.current) {
      ref.current.style.transform = `translate(${currentRef.current.x - 200}px, ${currentRef.current.y - 200}px)`;
    }
    rafRef.current = requestAnimationFrame(animate);
  }, []);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      posRef.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    rafRef.current = requestAnimationFrame(animate);
    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(rafRef.current);
    };
  }, [animate]);

  return (
    <div
      ref={ref}
      className="fixed top-0 left-0 w-[400px] h-[400px] rounded-full pointer-events-none z-[1] hidden md:block"
      style={{
        background: "radial-gradient(circle, rgba(0,245,147,0.04) 0%, transparent 70%)",
        willChange: "transform",
      }}
    />
  );
}

/* ───── Futuristic Grid ───── */
function FuturisticGrid({ isMobile }: { isMobile: boolean }) {
  if (isMobile) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-[0] overflow-hidden">
      {/* Horizontal lines */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(0deg, transparent 0%, transparent calc(100% - 1px), rgba(0,245,147,0.03) 100%)",
          backgroundSize: "100% 120px",
          animation: "subtlePulse 8s ease-in-out infinite",
        }}
      />
      {/* Vertical lines */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(90deg, transparent 0%, transparent calc(100% - 1px), rgba(0,245,147,0.02) 100%)",
          backgroundSize: "120px 100%",
          animation: "subtlePulse 10s ease-in-out infinite",
          animationDelay: "3s",
        }}
      />
      {/* Scrolling overlay for depth */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent, transparent 59px, rgba(255,255,255,0.008) 59px, rgba(255,255,255,0.008) 60px)",
          animation: "gridScroll 20s linear infinite",
        }}
      />
    </div>
  );
}

/* ───── Floating Blobs ───── */
function FloatingBlobs({ isMobile }: { isMobile: boolean }) {
  const blobs = isMobile
    ? [
        {
          color: "rgba(0,245,147,0.06)",
          size: 300,
          top: "10%",
          left: "20%",
          animation: "blobFloat1 25s ease-in-out infinite",
        },
        {
          color: "rgba(0,212,126,0.04)",
          size: 250,
          top: "60%",
          left: "60%",
          animation: "blobFloat2 30s ease-in-out infinite",
        },
      ]
    : [
        {
          color: "rgba(0,245,147,0.06)",
          size: 500,
          top: "5%",
          left: "10%",
          animation: "blobFloat1 25s ease-in-out infinite",
        },
        {
          color: "rgba(0,212,126,0.04)",
          size: 600,
          top: "40%",
          left: "65%",
          animation: "blobFloat2 30s ease-in-out infinite",
        },
        {
          color: "rgba(0,184,107,0.035)",
          size: 450,
          top: "70%",
          left: "25%",
          animation: "blobFloat3 35s ease-in-out infinite",
        },
        {
          color: "rgba(255,187,36,0.015)",
          size: 350,
          top: "20%",
          left: "80%",
          animation: "blobFloat1 28s ease-in-out infinite",
          animationDelay: "5s",
        },
      ];

  return (
    <div className="fixed inset-0 pointer-events-none z-[0] overflow-hidden">
      {blobs.map((blob, i) => (
        <div
          key={i}
          className="absolute rounded-full"
          style={{
            width: blob.size,
            height: blob.size,
            top: blob.top,
            left: blob.left,
            background: `radial-gradient(circle, ${blob.color} 0%, transparent 70%)`,
            filter: "blur(80px)",
            animation: blob.animation,
            animationDelay: (blob as any).animationDelay || "0s",
            willChange: "transform",
          }}
        />
      ))}
    </div>
  );
}

/* ───── Animated Gradient Base ───── */
function AnimatedGradientBase() {
  return (
    <div
      className="fixed inset-0 pointer-events-none z-[0]"
      style={{
        background:
          "linear-gradient(135deg, #0A0A0F 0%, #0D0E15 20%, #0A0F12 40%, #0C0A12 60%, #0A0A0F 80%, #0B0D10 100%)",
        backgroundSize: "400% 400%",
        animation: "ambientGradient 25s ease infinite",
      }}
    />
  );
}

/* ───── Main Component ───── */
export function AmbientBackground() {
  const isMobile = useIsMobile();
  const reducedMotion = useReducedMotion();

  if (reducedMotion) {
    return (
      <div
        className="fixed inset-0 pointer-events-none z-[0]"
        style={{ backgroundColor: "#0A0A0F" }}
      />
    );
  }

  return (
    <>
      <AnimatedGradientBase />
      <FloatingBlobs isMobile={isMobile} />
      <FuturisticGrid isMobile={isMobile} />
      {!isMobile && <MouseFollower />}
    </>
  );
}
