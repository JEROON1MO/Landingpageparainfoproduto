import { motion } from "motion/react";
import { Dumbbell, Utensils, Brain } from "lucide-react";
import { useInView } from "./hooks/useInView";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const pillars = [
  {
    icon: Dumbbell,
    title: "Treino Inteligente",
    description: "Periodização, volume ideal e progressão de carga — sem achismo. Cada treino com propósito claro.",
    color: "#00F593",
  },
  {
    icon: Utensils,
    title: "Nutrição Estratégica",
    description: "Aprenda a montar um plano alimentar que funciona para o SEU corpo, sem dietas malucas.",
    color: "#00D47E",
  },
  {
    icon: Brain,
    title: "Mentalidade Inabalável",
    description: "Disciplina > motivação. Construa hábitos que transformam não apenas o físico, mas a vida.",
    color: "#00B86B",
  },
];

export function MethodSection() {
  const { ref, isInView } = useInView();

  return (
    <section ref={ref} id="metodo" className="py-20 lg:py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0C0C12]/50 to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
          {/* Content */}
          <div>
            <motion.span
              initial={{ opacity: 0, y: 15, filter: "blur(6px)" }}
              animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="text-[#00F593] text-sm tracking-widest uppercase mb-4 block"
              style={{ fontWeight: 600 }}
            >
              O Método Comprovado
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
              animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
              transition={{ delay: 0.2, duration: 0.7 }}
              className="text-3xl sm:text-4xl lg:text-5xl text-white mb-6"
              style={{ fontWeight: 800, lineHeight: 1.15 }}
            >
              Os 3 pilares da{" "}
              <span className="bg-gradient-to-r from-[#00F593] to-[#00D47E] bg-clip-text text-transparent">
                transformação real
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 15, filter: "blur(6px)" }}
              animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
              transition={{ delay: 0.35, duration: 0.6 }}
              className="text-[#9CA3AF] text-lg mb-8"
              style={{ lineHeight: 1.7 }}
            >
              Resultado não vem de um único fator isolado. É a combinação precisa de treino, nutrição e mentalidade que cria transformações reais e duradouras.
            </motion.p>
          </div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 20, filter: "blur(8px)" }}
            animate={isInView ? { opacity: 1, x: 0, filter: "blur(0px)" } : {}}
            transition={{ delay: 0.3, duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden border" style={{ borderColor: "rgba(0,245,147,0.1)" }}>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1700784795176-7ff886439d79?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXJrJTIwZ3lmJTIwdHJhaW5pbmclMjBpbnRlbnNlJTIwd29ya291dHxlbnwxfHx8fDE3NzIxMzgxMTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Treino intenso"
                className="w-full aspect-[4/3] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0F]/80 via-transparent to-transparent" />
            </div>
          </motion.div>
        </div>

        {/* Pillars Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {pillars.map((pillar, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 25 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 + i * 0.12, duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
              whileHover={{
                y: -4,
                borderColor: `${pillar.color}33`,
                boxShadow: `0 12px 40px ${pillar.color}10`,
                transition: { duration: 0.35 },
              }}
              className="bg-[#12121A]/80 border rounded-3xl p-8 cursor-default group"
              style={{ borderColor: "rgba(255,255,255,0.05)" }}
            >
              <motion.div
                whileHover={{ rotate: 4, scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-colors"
                style={{ backgroundColor: `${pillar.color}15` }}
              >
                <pillar.icon className="w-7 h-7" style={{ color: pillar.color }} />
              </motion.div>
              <h3 className="text-white text-xl mb-3" style={{ fontWeight: 700 }}>{pillar.title}</h3>
              <p className="text-[#9CA3AF]" style={{ lineHeight: 1.7 }}>{pillar.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}