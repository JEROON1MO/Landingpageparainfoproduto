import { motion } from "motion/react";
import { useInView } from "./hooks/useInView";
import { ShimmerButton } from "./ShimmerButton";
import { Check, Zap, Clock, ShieldCheck } from "lucide-react";
import { useState, useEffect } from "react";

const included = [
  "E-book completo — 120+ páginas",
  "Planos de treino detalhados",
  "Guia nutricional prático",
  "Planilha de acompanhamento",
  "Protocolo de recuperação",
  "Checklist dos 20 passos",
  "Templates de metas",
  "Acesso vitalício",
];

function CountdownTimer() {
  const [time, setTime] = useState({ h: 2, m: 47, s: 33 });

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prev) => {
        let { h, m, s } = prev;
        s--;
        if (s < 0) { s = 59; m--; }
        if (m < 0) { m = 59; h--; }
        if (h < 0) return { h: 0, m: 0, s: 0 };
        return { h, m, s };
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const pad = (n: number) => String(n).padStart(2, "0");

  return (
    <div className="flex items-center justify-center gap-3">
      {[
        { val: pad(time.h), label: "Horas" },
        { val: pad(time.m), label: "Min" },
        { val: pad(time.s), label: "Seg" },
      ].map((unit, i) => (
        <div key={i} className="text-center">
          <div
            className="bg-[#0A0A0F] border rounded-xl px-4 py-3 min-w-[64px]"
            style={{ borderColor: "rgba(0,245,147,0.15)" }}
          >
            <span className="text-white text-2xl tabular-nums" style={{ fontWeight: 800 }}>{unit.val}</span>
          </div>
          <span className="text-[#9CA3AF] text-xs mt-1 block">{unit.label}</span>
        </div>
      ))}
    </div>
  );
}

export function OfferSection() {
  const { ref, isInView } = useInView();

  return (
    <section ref={ref} id="oferta" className="py-20 lg:py-28 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(0,245,147,0.06) 0%, transparent 60%)" }}
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 25, filter: "blur(8px)" }}
          animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-center mb-12"
        >
          <span className="text-[#00F593] text-sm tracking-widest uppercase mb-4 block" style={{ fontWeight: 600 }}>
            Oferta Especial
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl text-white mb-6" style={{ fontWeight: 800, lineHeight: 1.15 }}>
            Garanta seu e-book com{" "}
            <span className="bg-gradient-to-r from-[#00F593] to-[#00D47E] bg-clip-text text-transparent">
              desconto exclusivo
            </span>
          </h2>
        </motion.div>

        {/* Pricing Card */}
        <motion.div
          initial={{ opacity: 0, y: 25, filter: "blur(10px)" }}
          animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
          transition={{ delay: 0.15, duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="relative bg-gradient-to-br from-[#12121A] to-[#0D0D14] border rounded-3xl p-8 sm:p-12 overflow-hidden"
          style={{ borderColor: "rgba(0,245,147,0.2)" }}
        >
          {/* Top glow */}
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[2px]"
            style={{ background: "linear-gradient(90deg, transparent, #00F593, transparent)" }}
          />

          {/* Urgency timer */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mb-8"
          >
            <div className="flex items-center justify-center gap-2 mb-4">
              <Clock className="w-4 h-4 text-[#FBBF24]" />
              <span className="text-[#FBBF24] text-sm" style={{ fontWeight: 600 }}>
                Preço promocional expira em:
              </span>
            </div>
            <CountdownTimer />
          </motion.div>

          {/* Price */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-center mb-8"
          >
            <div className="flex items-center justify-center gap-3 mb-2">
              <span className="text-[#9CA3AF] line-through text-lg">R$ 197,00</span>
              <span className="bg-[#EF4444] text-white text-xs px-3 py-1 rounded-full" style={{ fontWeight: 700 }}>-75% OFF</span>
            </div>
            <div className="flex items-baseline justify-center gap-1">
              <span className="text-[#9CA3AF] text-xl">R$</span>
              <span className="text-white text-6xl sm:text-7xl" style={{ fontWeight: 900 }}>47</span>
              <span className="text-[#9CA3AF] text-xl">,00</span>
            </div>
            <p className="text-[#9CA3AF] text-sm mt-2">Pagamento único • Acesso vitalício</p>
          </motion.div>

          {/* Included list */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="grid sm:grid-cols-2 gap-x-8 gap-y-3 mb-8 mx-auto max-w-fit px-[2px] py-[0px] mx-[90px] mt-[0px] mb-[32px]"
          >
            {included.map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <Check className="w-5 h-5 text-[#00F593] shrink-0" />
                <span className="text-[#C9CDD3] text-sm">{item}</span>
              </div>
            ))}
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="text-center"
          >
            <ShimmerButton href="#" className="w-full sm:w-auto text-lg">
              Quero Meu E-book Agora
            </ShimmerButton>

            <div className="flex items-center justify-center gap-4 mt-6 flex-wrap">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#00F593]" />
                <span className="text-[#9CA3AF] text-xs">Garantia de 7 dias</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-[#00F593]" />
                <span className="text-[#9CA3AF] text-xs">Acesso imediato</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[#00F593]" />
                <span className="text-[#9CA3AF] text-xs">Pagamento seguro</span>
              </div>
            </div>
          </motion.div>

          {/* Divider */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={isInView ? { opacity: 1, scaleX: 1 } : {}}
            transition={{ delay: 0.65, duration: 0.6 }}
            className="my-10 h-px w-full"
            style={{ background: "linear-gradient(90deg, transparent, rgba(0,245,147,0.2), transparent)" }}
          />

          {/* Guarantee — integrated */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.7, duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
            className="relative text-center"
          >
            <div className="flex items-center justify-center gap-4 mb-5">
              <div className="w-14 h-14 rounded-2xl bg-[#00F593]/10 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-7 h-7 text-[#00F593]" />
              </div>
              <div className="text-left">
                <h3 className="text-white text-xl sm:text-2xl" style={{ fontWeight: 800, lineHeight: 1.2 }}>
                  Garantia Incondicional de{" "}
                  <span className="text-[#00F593]">7 Dias</span>
                </h3>
              </div>
            </div>
            <p
              className="text-[#9CA3AF] text-sm sm:text-base max-w-xl mx-auto mb-3"
              style={{ lineHeight: 1.7 }}
            >
              Se dentro de 7 dias você não sentir que este e-book vale cada centavo investido, basta enviar um e-mail e devolvemos 100% do seu dinheiro. Sem perguntas, sem burocracia, sem estresse.
            </p>
            <p className="text-white text-sm sm:text-base" style={{ fontWeight: 600 }}>
              O risco é zero. A decisão é sua.
            </p>
          </motion.div>
        </motion.div>

        {/* Scarcity */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="flex items-center justify-center gap-3 bg-[#12121A]/60 rounded-2xl p-5 border mt-6"
          style={{ borderColor: "rgba(255,255,255,0.05)" }}
        >
          <div className="w-2 h-2 rounded-full bg-[#EF4444] animate-pulse" />
          <p className="text-[#9CA3AF] text-sm">
            <span className="text-white" style={{ fontWeight: 600 }}>127 pessoas</span> estão vendo esta página agora
          </p>
        </motion.div>
      </div>
    </section>
  );
}