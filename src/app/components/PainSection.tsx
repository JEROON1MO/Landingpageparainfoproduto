import { motion } from "motion/react";
import { AlertCircle, Clock, Frown, TrendingDown, XCircle, HelpCircle } from "lucide-react";
import { useInView } from "./hooks/useInView";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const pains = [
  { icon: Frown, text: "Treina há meses (ou anos) e não vê resultado real no espelho" },
  { icon: Clock, text: "Já tentou várias dietas e sempre volta para a estaca zero" },
  { icon: TrendingDown, text: "Sente que está perdendo tempo e dinheiro com treinos sem método" },
  { icon: XCircle, text: "Começa motivado na segunda e desiste antes do fim do mês" },
  { icon: AlertCircle, text: "Fica confuso com tanta informação contraditória na internet" },
  { icon: HelpCircle, text: "Não sabe por onde começar de verdade — ou como continuar" },
];

export function PainSection() {
  const { ref, isInView } = useInView();

  return (
    <section ref={ref} className="py-20 lg:py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0D0D14]/50 to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -25, filter: "blur(8px)" }}
            animate={isInView ? { opacity: 1, x: 0, filter: "blur(0px)" } : {}}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            className="relative rounded-3xl overflow-hidden"
          >
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1623092350739-4635ce84d47c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJzb24lMjBmcnVzdHJhdGVkJTIwZ3ltJTIwbWlycm9yJTIwYm9keXxlbnwxfHx8fDE3NzIxMzgxMTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Frustração no treino"
              className="w-full aspect-[4/3] object-cover rounded-3xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0F] via-transparent to-transparent rounded-3xl" />
          </motion.div>

          {/* Content */}
          <div>
            <motion.span
              initial={{ opacity: 0, y: 15, filter: "blur(6px)" }}
              animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="text-[#EF4444] text-sm tracking-widest uppercase mb-4 block"
              style={{ fontWeight: 600 }}
            >
              Você se identifica?
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
              animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-3xl sm:text-4xl lg:text-5xl text-white mb-8"
              style={{ fontWeight: 800, lineHeight: 1.15 }}
            >
              A verdade que ninguém{" "}
              <span className="text-[#EF4444]">te conta</span> sobre resultados
            </motion.h2>

            <div className="space-y-4">
              {pains.map((pain, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20, filter: "blur(4px)" }}
                  animate={isInView ? { opacity: 1, x: 0, filter: "blur(0px)" } : {}}
                  transition={{ delay: 0.3 + i * 0.07, duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
                  whileHover={{ scale: 1.01, borderColor: "rgba(239,68,68,0.15)", transition: { duration: 0.25 } }}
                  className="flex items-start gap-4 p-4 rounded-xl bg-[#EF4444]/5 border transition-all cursor-default"
                  style={{ borderColor: "rgba(239,68,68,0.08)" }}
                >
                  <div className="p-2 rounded-lg bg-[#EF4444]/10 shrink-0">
                    <pain.icon className="w-5 h-5 text-[#EF4444]" />
                  </div>
                  <p className="text-[#C9CDD3]" style={{ lineHeight: 1.6 }}>{pain.text}</p>
                </motion.div>
              ))}
            </div>

            <motion.p
              initial={{ opacity: 0, y: 15, filter: "blur(4px)" }}
              animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
              transition={{ delay: 0.75, duration: 0.6 }}
              className="text-white text-lg mt-8"
              style={{ fontWeight: 600 }}
            >
              Se você marcou pelo menos 2… esse e-book foi feito pra você.
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
}