import { motion } from "motion/react";
import { useInView } from "./hooks/useInView";
import { ShimmerButton } from "./ShimmerButton";
import { Flame, ArrowRight } from "lucide-react";

export function FinalCTA() {
  const { ref, isInView } = useInView();

  return (
    <section ref={ref} className="py-20 lg:py-28 relative overflow-hidden">
      {/* Ambient glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(0,245,147,0.08) 0%, transparent 60%)" }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, filter: "blur(8px)" }}
          animate={isInView ? { opacity: 1, scale: 1, filter: "blur(0px)" } : {}}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          className="w-16 h-16 rounded-2xl bg-[#00F593]/10 flex items-center justify-center mx-auto mb-8"
        >
          <Flame className="w-8 h-8 text-[#00F593]" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
          animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
          transition={{ delay: 0.15, duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-white mb-6"
          style={{ fontWeight: 800, lineHeight: 1.1 }}
        >
          Seu shape dos sonhos começa com{" "}
          <span className="bg-gradient-to-r from-[#00F593] to-[#00D47E] bg-clip-text text-transparent">
            uma decisão
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15, filter: "blur(6px)" }}
          animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="text-[#9CA3AF] text-lg lg:text-xl max-w-2xl mx-auto mb-10"
          style={{ lineHeight: 1.7 }}
        >
          Você pode fechar essa página e continuar como está. Ou pode dar o primeiro passo agora e daqui 90 dias agradecer a si mesmo por ter começado hoje.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 15, filter: "blur(6px)" }}
          animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
          transition={{ delay: 0.45, duration: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <ShimmerButton href="#oferta" className="text-lg">
            Quero Começar Agora <ArrowRight className="w-5 h-5 inline ml-1" />
          </ShimmerButton>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="text-[#9CA3AF]/60 text-sm mt-8"
        >
          Garantia de 7 dias • Acesso imediato • Pagamento seguro
        </motion.p>
      </div>
    </section>
  );
}