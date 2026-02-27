import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { ArrowDown, Zap, Target, TrendingUp } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ShimmerButton } from "./ShimmerButton";

export function HeroSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  /* Parallax multilayer */
  const bgLayerY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const midLayerY = useTransform(scrollYProgress, [0, 1], [0, 60]);
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 40]);
  const mockupY = useTransform(scrollYProgress, [0, 1], [0, -30]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const textScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.97]);

  return (
    <section ref={sectionRef} className="relative min-h-screen flex items-center overflow-hidden pt-20 pb-16 lg:pt-28 lg:pb-24">
      {/* Parallax Layer 0 — Deep ambient glow (slowest) */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{ y: bgLayerY }}
      >
        <div
          className="absolute top-[10%] left-[20%] w-[800px] h-[800px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(0,245,147,0.06) 0%, transparent 60%)",
            filter: "blur(100px)",
          }}
        />
        <div
          className="absolute bottom-[5%] right-[10%] w-[600px] h-[600px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(0,184,107,0.04) 0%, transparent 70%)",
            filter: "blur(80px)",
          }}
        />
      </motion.div>

      {/* Parallax Layer 1 — Mid-depth glow orbs */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{ y: midLayerY }}
      >
        <motion.div
          className="absolute top-1/4 left-1/3 w-[500px] h-[500px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(0,245,147,0.08) 0%, transparent 70%)",
          }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(0,212,126,0.05) 0%, transparent 70%)" }}
          animate={{ scale: [1, 1.08, 1], opacity: [0.5, 0.7, 0.5] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>

      {/* Subtle noise texture overlay */}
      <div
        className="absolute inset-0 pointer-events-none z-[1] opacity-[0.015]"
        style={{
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
          backgroundRepeat: "repeat",
          backgroundSize: "128px 128px",
        }}
      />

      {/* Parallax Layer 2 — Content */}
      <motion.div
        style={{ opacity, y: heroY, scale: textScale }}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center"
      >
        {/* Left */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="inline-flex items-center gap-2 bg-[#00F593]/10 border rounded-full px-4 py-2 mb-8"
            style={{ borderColor: "rgba(0,245,147,0.2)" }}
          >
            <Zap className="w-4 h-4 text-[#00F593]" />
            <span className="text-[#00F593] text-sm" style={{ fontWeight: 600 }}>E-book Digital &bull; Acesso Imediato</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ delay: 0.35, duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-white mb-6"
            style={{ fontWeight: 800, lineHeight: 1.05 }}
          >
            20 Passos Para{" "}
            <span className="bg-gradient-to-r from-[#00F593] to-[#00D47E] bg-clip-text text-transparent">
              Conquistar
            </span>{" "}
            o Físico dos Seus Sonhos
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ delay: 0.55, duration: 0.7 }}
            className="text-[#9CA3AF] text-lg lg:text-xl max-w-lg mb-10"
            style={{ lineHeight: 1.7 }}
          >
            O guia definitivo e prático que vai te tirar da estagnação e te colocar no caminho da transformação física real — sem atalhos, sem enrolação.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ delay: 0.7, duration: 0.7 }}
            className="flex flex-col sm:flex-row gap-4 mb-12"
          >
            <ShimmerButton href="#oferta">
              Quero Minha Transformação
            </ShimmerButton>
            <motion.a
              href="#metodo"
              whileHover={{ scale: 1.02, backgroundColor: "rgba(255,255,255,0.06)" }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center gap-2 border text-white px-8 py-4 rounded-2xl text-lg transition-all cursor-pointer whitespace-nowrap backdrop-blur-sm"
              style={{ fontWeight: 500, borderColor: "rgba(255,255,255,0.15)" }}
            >
              Ver o Método <ArrowDown className="w-5 h-5" />
            </motion.a>
          </motion.div>

          {/* Mini stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="flex flex-wrap gap-6"
          >
            {[
              { icon: Target, label: "20 Passos práticos" },
              { icon: TrendingUp, label: "+5.000 leitores" },
              { icon: Zap, label: "Resultado em 90 dias" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 + i * 0.12 }}
                className="flex items-center gap-2"
              >
                <stat.icon className="w-4 h-4 text-[#00F593]" />
                <span className="text-[#9CA3AF] text-sm">{stat.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Right — E-book Mockup (parallax layer 3 — fastest inverse) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92, filter: "blur(12px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ delay: 0.5, duration: 1.1, ease: [0.25, 0.1, 0.25, 1] }}
          style={{ y: mockupY }}
          className="relative flex justify-center"
        >
          {/* Glow behind mockup */}
          <div
            className="absolute inset-0 rounded-3xl pointer-events-none"
            style={{ background: "radial-gradient(circle at center, rgba(0,245,147,0.15) 0%, transparent 60%)", filter: "blur(60px)" }}
          />

          {/* E-book mockup */}
          <div className="relative">
            <motion.div
              animate={{ y: [-2, 2, -2] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative rounded-2xl overflow-hidden shadow-2xl shadow-[#00F593]/10"
              style={{ perspective: "1000px" }}
            >
              <div className="bg-gradient-to-br from-[#0D1117] to-[#161B22] p-8 sm:p-12 rounded-2xl border" style={{ borderColor: "rgba(0,245,147,0.15)" }}>
                <div className="text-center mb-6">
                  <span className="text-[#00F593] text-xs tracking-widest uppercase" style={{ fontWeight: 600 }}>E-Book Premium</span>
                </div>
                <h3 className="text-white text-xl sm:text-2xl text-center mb-4" style={{ fontWeight: 800, lineHeight: 1.2 }}>
                  20 Passos Para Conquistar o Físico dos Seus Sonhos
                </h3>
                <div className="w-full aspect-[4/3] rounded-xl overflow-hidden mb-6">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1649789248266-ef1c7f744f6f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib2R5YnVpbGRlciUyMGNvdXBsZSUyMGZsZXhpbmclMjBtdXNjbGVzfGVufDF8fHx8MTc3MjEzOTY4MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Casal fitness posando exibindo corpo malhado"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex items-center justify-center gap-4 text-[#9CA3AF] text-xs">
                  <span>120+ páginas</span>
                  <span>Acesso imediato</span>
                  <span>20 passos</span>
                </div>
              </div>
            </motion.div>

            {/* Floating badges */}
            <motion.div
              animate={{ y: [-3, 3, -3] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 -right-4 bg-[#0D1117]/95 backdrop-blur-xl rounded-2xl p-4 border shadow-2xl"
              style={{ borderColor: "rgba(0,245,147,0.15)" }}
            >
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-[#00F593]/20 flex items-center justify-center">
                  <TrendingUp className="w-4 h-4 text-[#00F593]" />
                </div>
                <div>
                  <p className="text-white text-xs" style={{ fontWeight: 700 }}>+5.000</p>
                  <p className="text-[#9CA3AF] text-[10px]">leitores</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [3, -3, 3] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute -bottom-4 -left-4 bg-[#0D1117]/95 backdrop-blur-xl rounded-2xl p-4 border shadow-2xl"
              style={{ borderColor: "rgba(0,245,147,0.15)" }}
            >
              <div className="flex items-center gap-2">
                <div className="flex -space-x-1.5">
                  {[1,2,3,4,5].map((s) => (
                    <span key={s} className="text-xs">&#11088;</span>
                  ))}
                </div>
                <span className="text-white text-xs" style={{ fontWeight: 600 }}>4.9/5</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>

      {/* Bottom fade to content */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none z-[2]"
        style={{ background: "linear-gradient(to top, #0A0A0F, transparent)" }}
      />
    </section>
  );
}
