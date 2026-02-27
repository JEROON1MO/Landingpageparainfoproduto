import { motion } from "motion/react";
import { Star, Quote } from "lucide-react";
import { useInView } from "./hooks/useInView";

const stats = [
  { value: "+5.000", label: "Leitores" },
  { value: "4.9/5", label: "Avaliação média" },
  { value: "92%", label: "Recomendam" },
  { value: "30 dias", label: "Primeiros resultados" },
];

const testimonials = [
  {
    name: "Lucas M.",
    role: "Perdeu 12 kg em 3 meses",
    text: "Eu já tinha tentado de tudo. Esse e-book me deu um método claro e, pela primeira vez, eu segui até o fim. Resultado: -12 kg e um shape que nunca tive.",
    stars: 5,
  },
  {
    name: "Camila R.",
    role: "Ganhou massa muscular",
    text: "Achava que mulher não precisava de periodização. Estava errada. Os 20 passos mudaram minha relação com treino e alimentação. Super recomendo!",
    stars: 5,
  },
  {
    name: "Rafael S.",
    role: "Saiu da estagnação",
    text: "Treinava há 2 anos sem evolução. Apliquei os passos de progressão e nutrição do e-book e em 8 semanas já estava diferente. Melhor investimento.",
    stars: 5,
  },
];

export function TestimonialsSection() {
  const { ref, isInView } = useInView();

  return (
    <section ref={ref} className="py-20 lg:py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0D0D14]/50 to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 25, filter: "blur(8px)" }}
          animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-center mb-16"
        >
          <span className="text-[#00F593] text-sm tracking-widest uppercase mb-4 block" style={{ fontWeight: 600 }}>
            Prova Social
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl text-white mb-6" style={{ fontWeight: 800, lineHeight: 1.15 }}>
            Quem aplicou,{" "}
            <span className="bg-gradient-to-r from-[#00F593] to-[#00D47E] bg-clip-text text-transparent">
              transformou
            </span>
          </h2>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 + i * 0.08, duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
              whileHover={{ scale: 1.03, transition: { duration: 0.25 } }}
              className="text-center bg-[#12121A]/60 border rounded-2xl p-6 cursor-default"
              style={{ borderColor: "rgba(255,255,255,0.05)" }}
            >
              <p className="text-3xl lg:text-4xl text-white mb-1" style={{ fontWeight: 800 }}>
                {stat.value}
              </p>
              <p className="text-[#9CA3AF] text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Testimonial Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.1, duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
              whileHover={{
                y: -4,
                borderColor: "rgba(0,245,147,0.15)",
                boxShadow: "0 12px 40px rgba(0,245,147,0.06)",
                transition: { duration: 0.35 },
              }}
              className="bg-[#12121A]/80 border rounded-3xl p-6 lg:p-8 relative cursor-default"
              style={{ borderColor: "rgba(255,255,255,0.05)" }}
            >
              <Quote className="w-8 h-8 text-[#00F593]/15 absolute top-6 right-6" />

              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: t.stars }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 text-[#FBBF24] fill-[#FBBF24]" />
                ))}
              </div>

              <p className="text-[#C9CDD3] mb-6" style={{ lineHeight: 1.7 }}>
                "{t.text}"
              </p>

              <div>
                <p className="text-white text-sm" style={{ fontWeight: 700 }}>{t.name}</p>
                <p className="text-[#00F593] text-xs" style={{ fontWeight: 500 }}>{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}