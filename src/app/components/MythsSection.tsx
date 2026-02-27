import { motion } from "motion/react";
import { XCircle, CheckCircle } from "lucide-react";
import { useInView } from "./hooks/useInView";

const myths = [
  {
    myth: "Você precisa de suplementos caros para ter resultado",
    truth: "Resultado vem de consistência, treino e alimentação básica bem feita",
  },
  {
    myth: "Treinar 2 horas por dia é o segredo dos shapes incríveis",
    truth: "Treinos inteligentes de 45-60 min com progressão superam horas na academia",
  },
  {
    myth: "Dieta restritiva é a única forma de secar a gordura",
    truth: "Déficit calórico moderado e sustentável gera resultados que duram",
  },
  {
    myth: "Genética ruim impede qualquer pessoa de ter um bom shape",
    truth: "Genética define o teto, mas método e consistência definem até onde você vai",
  },
];

export function MythsSection() {
  const { ref, isInView } = useInView();

  return (
    <section ref={ref} className="py-20 lg:py-28 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(0,245,147,0.04) 0%, transparent 70%)" }}
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 25, filter: "blur(8px)" }}
          animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-center mb-16"
        >
          <span className="text-[#FBBF24] text-sm tracking-widest uppercase mb-4 block" style={{ fontWeight: 600 }}>
            Quebrando mitos
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl text-white mb-6" style={{ fontWeight: 800, lineHeight: 1.15 }}>
            Pare de acreditar em{" "}
            <span className="text-[#FBBF24]">mentiras fitness</span>
          </h2>
          <p className="text-[#9CA3AF] text-lg max-w-2xl mx-auto" style={{ lineHeight: 1.7 }}>
            A indústria lucra com a sua confusão. Veja o que a ciência e a prática realmente mostram.
          </p>
        </motion.div>

        <div className="space-y-6">
          {myths.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
              animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
              transition={{ delay: 0.15 + i * 0.1, duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
              className="grid md:grid-cols-2 gap-4"
            >
              {/* Myth */}
              <motion.div
                whileHover={{ scale: 1.01, borderColor: "rgba(239,68,68,0.18)", transition: { duration: 0.25 } }}
                className="flex items-start gap-4 p-5 rounded-2xl bg-[#EF4444]/5 border cursor-default"
                style={{ borderColor: "rgba(239,68,68,0.1)" }}
              >
                <div className="p-2 rounded-lg bg-[#EF4444]/10 shrink-0 mt-0.5">
                  <XCircle className="w-5 h-5 text-[#EF4444]" />
                </div>
                <div>
                  <span className="text-[#EF4444] text-xs uppercase mb-1 block" style={{ fontWeight: 700 }}>Mito</span>
                  <p className="text-[#C9CDD3]" style={{ lineHeight: 1.6 }}>{item.myth}</p>
                </div>
              </motion.div>

              {/* Truth */}
              <motion.div
                whileHover={{ scale: 1.01, borderColor: "rgba(0,245,147,0.18)", transition: { duration: 0.25 } }}
                className="flex items-start gap-4 p-5 rounded-2xl bg-[#00F593]/5 border cursor-default"
                style={{ borderColor: "rgba(0,245,147,0.1)" }}
              >
                <div className="p-2 rounded-lg bg-[#00F593]/10 shrink-0 mt-0.5">
                  <CheckCircle className="w-5 h-5 text-[#00F593]" />
                </div>
                <div>
                  <span className="text-[#00F593] text-xs uppercase mb-1 block" style={{ fontWeight: 700 }}>Verdade</span>
                  <p className="text-[#C9CDD3]" style={{ lineHeight: 1.6 }}>{item.truth}</p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}