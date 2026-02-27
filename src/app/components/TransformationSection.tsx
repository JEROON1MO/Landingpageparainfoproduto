import { motion } from "motion/react";
import { useInView } from "./hooks/useInView";
import { ArrowRight, Frown, Smile } from "lucide-react";

const comparisons = [
  { before: "Sem direção no treino", after: "Plano estruturado e progressivo" },
  { before: "Dieta restritiva e sofrida", after: "Alimentação flexível e sustentável" },
  { before: "Motivação que vai e vem", after: "Disciplina que gera resultados diários" },
  { before: "Corpo que não muda há meses", after: "Evolução visível a cada 4 semanas" },
  { before: "Insegurança e frustração", after: "Confiança e orgulho do progresso" },
  { before: "Informação confusa e contraditória", after: "Método claro, passo a passo" },
];

export function TransformationSection() {
  const { ref, isInView } = useInView();

  return (
    <section ref={ref} className="py-20 lg:py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0D0D14]/50 to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-center mb-20"
        >
          <span className="text-[#00F593] text-sm tracking-widest uppercase mb-4 block" style={{ fontWeight: 600 }}>
            Antes & Depois Mental
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl text-white mb-6" style={{ fontWeight: 800, lineHeight: 1.15 }}>
            A transformação começa{" "}
            <span className="bg-gradient-to-r from-[#00F593] to-[#00D47E] bg-clip-text text-transparent">
              na sua mente
            </span>
          </h2>
          <p className="text-[#9CA3AF] text-lg max-w-2xl mx-auto" style={{ lineHeight: 1.7 }}>
            Antes de mudar o corpo, você precisa mudar a forma como pensa sobre treino, alimentação e disciplina.
          </p>
        </motion.div>

        {/* Column Headers */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            className="flex items-center justify-center gap-2"
          >
            <div className="w-8 h-8 rounded-full bg-[#EF4444]/10 flex items-center justify-center">
              <Frown className="w-4 h-4 text-[#EF4444]" />
            </div>
            <span className="text-[#EF4444]/80 text-sm uppercase tracking-widest" style={{ fontWeight: 600 }}>Sem o método</span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            className="flex items-center justify-center gap-2"
          >
            <div className="w-8 h-8 rounded-full bg-[#00F593]/10 flex items-center justify-center">
              <Smile className="w-4 h-4 text-[#00F593]" />
            </div>
            <span className="text-[#00F593]/80 text-sm uppercase tracking-widest" style={{ fontWeight: 600 }}>Com os 20 Passos</span>
          </motion.div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {comparisons.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 + i * 0.08, duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
              className="contents"
            >
              {/* Before Card */}
              <motion.div
                whileHover={{ scale: 1.02, borderColor: "rgba(239,68,68,0.15)" }}
                transition={{ duration: 0.25 }}
                className="group relative p-6 lg:p-8 rounded-2xl bg-gradient-to-br from-[#EF4444]/[0.04] to-transparent border backdrop-blur-sm"
                style={{ borderColor: "rgba(239,68,68,0.08)" }}
              >
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#EF4444]/20 to-transparent" />
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#EF4444]/10 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-[#EF4444] text-lg">✕</span>
                  </div>
                  <div>
                    <p className="text-white text-base lg:text-lg mb-1" style={{ fontWeight: 600 }}>{item.before}</p>
                    <div className="flex items-center gap-2 mt-2">
                      <div className="w-16 h-1 rounded-full bg-[#EF4444]/20" />
                      <span className="text-[#9CA3AF]/50 text-xs">frustração</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* After Card */}
              <motion.div
                whileHover={{ scale: 1.02, borderColor: "rgba(0,245,147,0.2)" }}
                transition={{ duration: 0.25 }}
                className="group relative p-6 lg:p-8 rounded-2xl bg-gradient-to-br from-[#00F593]/[0.04] to-transparent border backdrop-blur-sm"
                style={{ borderColor: "rgba(0,245,147,0.08)" }}
              >
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#00F593]/20 to-transparent" />
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#00F593]/10 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-[#00F593] text-lg">✓</span>
                  </div>
                  <div>
                    <p className="text-white text-base lg:text-lg mb-1" style={{ fontWeight: 600 }}>{item.after}</p>
                    <div className="flex items-center gap-2 mt-2">
                      <div className="w-16 h-1 rounded-full bg-[#00F593]/20" />
                      <span className="text-[#9CA3AF]/50 text-xs">resultado</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Bottom connector arrow */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="flex justify-center mt-12"
        >
          <div className="flex items-center gap-3 bg-[#00F593]/5 border rounded-full px-6 py-3" style={{ borderColor: "rgba(0,245,147,0.1)" }}>
            <ArrowRight className="w-4 h-4 text-[#00F593]" />
            <span className="text-[#9CA3AF] text-sm" style={{ fontWeight: 500 }}>Sua jornada de transformação começa aqui</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}