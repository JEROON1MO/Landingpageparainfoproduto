import { motion, AnimatePresence } from "motion/react";
import { useInView } from "./hooks/useInView";
import { BookOpen, FileText, CheckCircle, Dumbbell, Utensils, BarChart3, HeartPulse, Target } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useState, useEffect, useRef, useCallback } from "react";

const items = [
  {
    icon: BookOpen,
    text: "E-book completo com 120+ páginas de conteúdo puro e prático",
    highlight: "120+ páginas",
    image: "https://images.unsplash.com/photo-1696952384865-82dba88ac831?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcGVuJTIwYm9vayUyMHJlYWRpbmclMjBrbm93bGVkZ2UlMjBlZHVjYXRpb258ZW58MXx8fHwxNzcyMTQxMjk5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    stat: "120+",
    statLabel: "Páginas",
  },
  {
    icon: Dumbbell,
    text: "Planos de treino detalhados para cada fase da sua transformação",
    highlight: "Treinos",
    image: "https://images.unsplash.com/photo-1758875568651-85952a0e0ce8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW4lMjBneW0lMjBiYXJiZWxsJTIwd2VpZ2h0JTIwdHJhaW5pbmclMjB3b3Jrb3V0fGVufDF8fHx8MTc3MjE0MTMwMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    stat: "4",
    statLabel: "Fases de treino",
  },
  {
    icon: Utensils,
    text: "Guia nutricional com exemplos de refeições e cálculo de macros",
    highlight: "Nutrição",
    image: "https://images.unsplash.com/photo-1621800971860-72ffb1a83f6b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGh5JTIwbWVhbCUyMHByZXAlMjBmb29kJTIwYm93bHMlMjBudXRyaXRpb258ZW58MXx8fHwxNzcyMTQxMzAwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    stat: "30+",
    statLabel: "Receitas",
  },
  {
    icon: BarChart3,
    text: "Planilha de acompanhamento de evolução semanal",
    highlight: "Evolução",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmFseXRpY3MlMjBkYXNoYm9hcmQlMjBncmFwaCUyMHByb2dyZXNzJTIwc2NyZWVufGVufDF8fHx8MTc3MjE1MDM1Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    stat: "12",
    statLabel: "Semanas",
  },
  {
    icon: HeartPulse,
    text: "Protocolo de recuperação e otimização do sono",
    highlight: "Recovery",
    image: "https://images.unsplash.com/photo-1758273239813-cecda76c6c19?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJzb24lMjBzbGVlcGluZyUyMHBlYWNlZnVsJTIwcmVjb3ZlcnklMjByZXN0fGVufDF8fHx8MTc3MjE0MTMwMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    stat: "8h",
    statLabel: "Sono ideal",
  },
  {
    icon: FileText,
    text: "Checklist dos 20 passos para imprimir e acompanhar",
    highlight: "Checklist",
    image: "https://images.unsplash.com/photo-1765867967050-30db3e7a3be8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGVja2xpc3QlMjBub3RlYm9vayUyMHBlbiUyMHBsYW5uaW5nJTIwb3JnYW5pemVkfGVufDF8fHx8MTc3MjE0MTMwMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    stat: "20",
    statLabel: "Passos",
  },
  {
    icon: Target,
    text: "Templates de metas e planejamento de periodização",
    highlight: "Metas",
    image: "https://images.unsplash.com/photo-1745209428549-0332b653ab1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0YXJnZXQlMjBkYXJ0Ym9hcmQlMjBnb2FsJTIwYWNoaWV2ZW1lbnQlMjBmb2N1c3xlbnwxfHx8fDE3NzIxNDEzMDJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    stat: "∞",
    statLabel: "Possibilidades",
  },
  {
    icon: CheckCircle,
    text: "Acesso vitalício — consulte quando e onde quiser",
    highlight: "Vitalício",
    image: "https://images.unsplash.com/photo-1758875568758-daad5146648c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b3Jrb3V0JTIwdHJhY2tpbmclMjBhcHAlMjBzY3JlZW4lMjBmaXRuZXNzJTIwZXZvbHV0aW9ufGVufDF8fHx8MTc3MjE1MDE0MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    stat: "24/7",
    statLabel: "Acesso",
  },
];

export function WhatYouGetSection() {
  const { ref: inViewRef, isInView } = useInView();
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Combine refs
  const setRefs = useCallback(
    (node: HTMLDivElement | null) => {
      sectionRef.current = node;
      if (typeof inViewRef === "function") {
        inViewRef(node);
      } else if (inViewRef && "current" in inViewRef) {
        (inViewRef as React.MutableRefObject<HTMLDivElement | null>).current = node;
      }
    },
    [inViewRef]
  );

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const sectionHeight = sectionRef.current.offsetHeight;
      const viewportHeight = window.innerHeight;
      // scrolled = how far we've scrolled past the top of the section
      const scrolled = -rect.top;
      const scrollableHeight = sectionHeight - viewportHeight;
      if (scrollableHeight <= 0) return;
      const progress = Math.max(0, Math.min(1, scrolled / scrollableHeight));
      setScrollProgress(progress);
      const index = Math.min(
        items.length - 1,
        Math.floor(progress * items.length)
      );
      setActiveIndex(index);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={setRefs}
      className="relative"
      style={{ height: `${(items.length + 1) * 100}vh` }}
    >
      {/* Sticky viewport container */}
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        {/* Background glow */}
        <div className="absolute inset-0 bg-[#0A0A0F] pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#00F593]/[0.02] rounded-full blur-[120px]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          {/* Section header — centered above */}
          <div className="mb-10">
            <motion.span
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="text-[#00F593] text-sm tracking-widest uppercase mb-4 block text-center"
              style={{ fontWeight: 600 }}
            >
              O que está incluído
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.7 }}
              className="text-3xl sm:text-4xl lg:text-5xl text-white mb-4 text-center"
              style={{ fontWeight: 800, lineHeight: 1.15 }}
            >
              Tudo que você precisa em{" "}
              <span className="bg-gradient-to-r from-[#00F593] to-[#00D47E] bg-clip-text text-transparent">
                um só lugar
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-[#9CA3AF] text-base max-w-md mx-auto text-center"
              style={{ lineHeight: 1.7 }}
            >
              Continue rolando para explorar cada item incluso no e-book.
            </motion.p>
          </div>

          {/* Scroll progress bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.35, duration: 0.5 }}
            className="mb-8 flex items-center gap-2 max-w-md mx-auto"
          >
            {items.map((_, i) => (
              <motion.div
                key={i}
                className="h-1 rounded-full flex-1"
                animate={{
                  backgroundColor:
                    i <= activeIndex
                      ? "#00F593"
                      : "rgba(255,255,255,0.08)",
                  scaleY: i === activeIndex ? 1.8 : 1,
                }}
                transition={{ duration: 0.3 }}
              />
            ))}
            <span
              className="text-[#00F593] text-xs ml-2 tabular-nums"
              style={{ fontWeight: 700 }}
            >
              {activeIndex + 1}/{items.length}
            </span>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Left — Stacked Cards */}
            <div>
              {/* Stacked cards area */}
              <div className="relative h-[240px] md:h-[200px]">
                <AnimatePresence mode="popLayout">
                  {items.map((item, i) => {
                    const isActive = activeIndex === i;
                    const isPast = i < activeIndex;
                    const isFuture = i > activeIndex;
                    const distance = i - activeIndex;

                    if (isPast) return null; // cards that scrolled past are gone

                    return (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 60, scale: 0.95 }}
                        animate={{
                          opacity: isActive ? 1 : Math.max(0, 1 - distance * 0.3),
                          y: isActive ? 0 : distance * 16,
                          scale: isActive ? 1 : Math.max(0.9, 1 - distance * 0.03),
                          zIndex: items.length - distance,
                        }}
                        exit={{
                          opacity: 0,
                          y: -80,
                          scale: 0.95,
                          transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] },
                        }}
                        transition={{
                          duration: 0.5,
                          ease: [0.25, 0.1, 0.25, 1],
                        }}
                        className="absolute top-0 left-0 right-0"
                        style={{ zIndex: items.length - distance }}
                      >
                        <div
                          className="flex items-center gap-4 p-5 lg:p-6 rounded-2xl relative overflow-hidden border backdrop-blur-sm"
                          style={{
                            backgroundColor: isActive
                              ? "rgba(0,245,147,0.05)"
                              : "rgba(13,17,23,0.95)",
                            borderColor: isActive
                              ? "rgba(0,245,147,0.15)"
                              : "rgba(255,255,255,0.04)",
                            boxShadow: isActive
                              ? "0 8px 40px rgba(0,245,147,0.06)"
                              : "0 4px 20px rgba(0,0,0,0.3)",
                          }}
                        >
                          {/* Active indicator line */}
                          <motion.div
                            className="absolute left-0 top-0 bottom-0 w-[3px] rounded-r-full bg-gradient-to-b from-[#00F593] to-[#00D47E]"
                            animate={{ scaleY: isActive ? 1 : 0 }}
                            transition={{ duration: 0.35 }}
                            style={{ originY: 0.5 }}
                          />

                          {/* Glow */}
                          {isActive && (
                            <div className="absolute inset-0 pointer-events-none">
                              <div className="absolute -left-20 -top-20 w-40 h-40 bg-[#00F593]/[0.06] rounded-full blur-[60px]" />
                            </div>
                          )}

                          {/* Icon */}
                          <div className="relative shrink-0">
                            <motion.div
                              className="w-14 h-14 rounded-xl flex items-center justify-center"
                              animate={{
                                backgroundColor: isActive
                                  ? "rgba(0,245,147,0.18)"
                                  : "rgba(0,245,147,0.05)",
                              }}
                              transition={{ duration: 0.3 }}
                            >
                              <motion.div
                                animate={{
                                  scale: isActive ? 1.2 : 1,
                                  rotate: isActive ? 5 : 0,
                                }}
                                transition={{
                                  duration: 0.4,
                                  type: "spring",
                                  stiffness: 180,
                                }}
                              >
                                <item.icon
                                  className="w-6 h-6"
                                  style={{
                                    color: isActive ? "#00F593" : "#4B5563",
                                  }}
                                />
                              </motion.div>
                            </motion.div>
                            <motion.span
                              className="absolute -top-1.5 -right-1.5 w-6 h-6 rounded-full flex items-center justify-center text-[10px]"
                              style={{ fontWeight: 800 }}
                              animate={{
                                backgroundColor: isActive
                                  ? "#00F593"
                                  : "rgba(255,255,255,0.1)",
                                color: isActive ? "#0A0A0F" : "#6B7280",
                                scale: isActive ? 1.1 : 0.9,
                              }}
                              transition={{ duration: 0.3 }}
                            >
                              {i + 1}
                            </motion.span>
                          </div>

                          <div className="flex-1 min-w-0">
                            <motion.span
                              className="text-[10px] uppercase tracking-widest block mb-1"
                              style={{ fontWeight: 600 }}
                              animate={{
                                color: isActive
                                  ? "#00F593"
                                  : "rgba(0,245,147,0.3)",
                              }}
                            >
                              {item.highlight}
                            </motion.span>
                            <p
                              className="text-sm lg:text-base"
                              style={{
                                lineHeight: 1.6,
                                color: isActive ? "#FFFFFF" : "#6B7280",
                              }}
                            >
                              {item.text}
                            </p>
                          </div>

                          {/* Stat */}
                          <motion.div
                            className="hidden sm:flex flex-col items-end shrink-0"
                            animate={{
                              opacity: isActive ? 1 : 0.2,
                            }}
                          >
                            <span
                              className="text-[#00F593] text-lg"
                              style={{ fontWeight: 800 }}
                            >
                              {item.stat}
                            </span>
                            <span className="text-[#6B7280] text-[10px] uppercase tracking-wider">
                              {item.statLabel}
                            </span>
                          </motion.div>
                        </div>
                      </motion.div>
                    );
                  })}
                </AnimatePresence>

                {/* Past items counter */}
                {activeIndex > 0 && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute -top-8 left-0 flex items-center gap-2"
                  >
                    <div className="flex -space-x-1">
                      {items.slice(0, activeIndex).map((_, i) => (
                        <div
                          key={i}
                          className="w-5 h-5 rounded-full bg-[#00F593]/20 border-2 border-[#0A0A0F] flex items-center justify-center"
                        >
                          <CheckCircle className="w-3 h-3 text-[#00F593]" />
                        </div>
                      ))}
                    </div>
                    <span
                      className="text-[#9CA3AF] text-xs"
                      style={{ fontWeight: 500 }}
                    >
                      {activeIndex} {activeIndex === 1 ? "item" : "itens"} explorado{activeIndex > 1 ? "s" : ""}
                    </span>
                  </motion.div>
                )}
              </div>
            </div>

            {/* Right — Sticky Image */}
            <div className="hidden md:block">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  delay: 0.3,
                  duration: 0.8,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
                className="relative"
              >
                {/* Main image */}
                <div
                  className="relative rounded-3xl overflow-hidden border w-full"
                  style={{
                    borderColor: "rgba(0,245,147,0.1)",
                    aspectRatio: "4 / 3",
                    boxShadow: "0 0 80px rgba(0,245,147,0.06)",
                  }}
                >
                  {/* Pre-render ALL images, toggle opacity */}
                  {items.map((item, i) => (
                    <motion.div
                      key={i}
                      className="absolute inset-0"
                      animate={{
                        opacity: activeIndex === i ? 1 : 0,
                        scale: activeIndex === i ? 1 : 1.05,
                      }}
                      transition={{
                        duration: 0.6,
                        ease: [0.25, 0.1, 0.25, 1],
                      }}
                      style={{ zIndex: activeIndex === i ? 1 : 0 }}
                    >
                      <img
                        src={item.image}
                        alt={item.highlight}
                        className="absolute inset-0 w-full h-full object-cover"
                        loading={i === 0 ? "eager" : "lazy"}
                      />
                    </motion.div>
                  ))}

                  {/* Gradient overlays */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0F] via-[#0A0A0F]/30 to-transparent" style={{ zIndex: 2 }} />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0F]/20 to-transparent" style={{ zIndex: 2 }} />

                  {/* Overlay content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8" style={{ zIndex: 3 }}>
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={activeIndex}
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{
                          duration: 0.4,
                          ease: [0.25, 0.1, 0.25, 1],
                        }}
                      >
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-10 h-10 rounded-xl bg-[#00F593]/20 flex items-center justify-center backdrop-blur-sm">
                            {(() => {
                              const Icon = items[activeIndex].icon;
                              return (
                                <Icon className="w-5 h-5 text-[#00F593]" />
                              );
                            })()}
                          </div>
                          <span
                            className="text-[#00F593] text-xs uppercase tracking-widest"
                            style={{ fontWeight: 600 }}
                          >
                            {items[activeIndex].highlight}
                          </span>
                        </div>
                        <p
                          className="text-white text-lg lg:text-xl mb-4"
                          style={{ fontWeight: 700, lineHeight: 1.3 }}
                        >
                          {items[activeIndex].text}
                        </p>
                        <div className="flex items-baseline gap-2">
                          <span
                            className="text-[#00F593] text-3xl"
                            style={{ fontWeight: 800 }}
                          >
                            {items[activeIndex].stat}
                          </span>
                          <span className="text-[#9CA3AF] text-sm">
                            {items[activeIndex].statLabel}
                          </span>
                        </div>
                      </motion.div>
                    </AnimatePresence>
                  </div>
                </div>

                {/* Step indicator dots */}
                <div className="flex justify-center gap-2 mt-6">
                  {items.map((_, i) => (
                    <motion.div
                      key={i}
                      className="rounded-full"
                      animate={{
                        width: i === activeIndex ? 24 : 8,
                        height: 8,
                        backgroundColor:
                          i === activeIndex
                            ? "#00F593"
                            : i < activeIndex
                            ? "rgba(0,245,147,0.3)"
                            : "rgba(255,255,255,0.1)",
                      }}
                      transition={{
                        duration: 0.35,
                        ease: [0.25, 0.1, 0.25, 1],
                      }}
                    />
                  ))}
                </div>

                {/* Floating stat card */}
                

                
              </motion.div>
            </div>
          </div>
        </div>

        {/* Scroll hint at bottom */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          animate={{
            opacity: activeIndex < items.length - 1 ? 0.6 : 0,
            y: [0, 6, 0],
          }}
          transition={{
            opacity: { duration: 0.3 },
            y: { duration: 2, repeat: Infinity, ease: "easeInOut" },
          }}
        >
          <span className="text-[#9CA3AF] text-xs" style={{ fontWeight: 500 }}>
            Role para explorar
          </span>
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            className="text-[#00F593]"
          >
            <path
              d="M8 3v10m0 0l-4-4m4 4l4-4"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </motion.div>
      </div>
    </section>
  );
}