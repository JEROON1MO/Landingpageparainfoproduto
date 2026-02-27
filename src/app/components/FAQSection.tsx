import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { useInView } from "./hooks/useInView";

const faqs = [
  {
    question: "Para quem é este e-book?",
    answer: "Para qualquer pessoa que deseja transformar seu físico de forma séria e sustentável — desde iniciantes que não sabem por onde começar até intermediários que estagnaram e precisam de um método estruturado.",
  },
  {
    question: "Preciso de experiência prévia em academia?",
    answer: "Não. O e-book foi pensado para guiar você do zero absoluto até a consolidação de hábitos e técnicas avançadas. Os 20 passos seguem uma progressão natural.",
  },
  {
    question: "Quanto tempo até ver resultados?",
    answer: "Seguindo o método, a maioria das pessoas percebe mudanças visíveis em 30-45 dias e transformações significativas em 90 dias. Tudo depende da sua consistência.",
  },
  {
    question: "O e-book inclui plano de treino e dieta?",
    answer: "Sim! Além do conteúdo teórico e prático dos 20 passos, você recebe planos de treino, guia nutricional, planilha de acompanhamento e muito mais como material complementar.",
  },
  {
    question: "Como funciona a garantia?",
    answer: "Você tem 7 dias para ler o material. Se por qualquer motivo achar que não valeu o investimento, basta enviar um e-mail e devolvemos 100% do valor. Sem perguntas.",
  },
  {
    question: "Recebo o acesso imediatamente?",
    answer: "Sim! Após a confirmação do pagamento, você recebe o e-book e todos os bônus direto no seu e-mail em poucos minutos. Acesso vitalício, sem limite.",
  },
  {
    question: "Funciona para mulheres também?",
    answer: "Absolutamente. Os princípios de treino, nutrição e mentalidade são universais. O e-book ensina a adaptar tudo ao seu corpo e objetivos específicos.",
  },
];

function FAQItem({ faq, index, isOpen, onToggle }: {
  faq: typeof faqs[0];
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.05 + index * 0.05, duration: 0.5 }}
      className="border rounded-2xl overflow-hidden transition-colors"
      style={{
        borderColor: isOpen ? "rgba(0,245,147,0.2)" : "rgba(255,255,255,0.05)",
        backgroundColor: isOpen ? "rgba(0,245,147,0.03)" : "transparent",
      }}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 p-5 sm:p-6 text-left cursor-pointer"
      >
        <span className={`text-sm sm:text-base transition-colors ${isOpen ? "text-[#00F593]" : "text-white"}`} style={{ fontWeight: 600 }}>
          {faq.question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.25 }}
          className="shrink-0"
        >
          <ChevronDown className={`w-5 h-5 transition-colors ${isOpen ? "text-[#00F593]" : "text-[#9CA3AF]"}`} />
        </motion.div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="px-5 sm:px-6 pb-5 sm:pb-6">
              <p className="text-[#9CA3AF]" style={{ lineHeight: 1.7 }}>{faq.answer}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function FAQSection() {
  const { ref, isInView } = useInView();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section ref={ref} id="faq" className="py-20 lg:py-28 relative overflow-hidden">
      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 25, filter: "blur(8px)" }}
          animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-center mb-12"
        >
          <span className="text-[#00F593] text-sm tracking-widest uppercase mb-4 block" style={{ fontWeight: 600 }}>
            Dúvidas frequentes
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl text-white mb-6" style={{ fontWeight: 800, lineHeight: 1.15 }}>
            Perguntas{" "}
            <span className="bg-gradient-to-r from-[#00F593] to-[#00D47E] bg-clip-text text-transparent">
              respondidas
            </span>
          </h2>
        </motion.div>

        {isInView && (
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <FAQItem
                key={i}
                faq={faq}
                index={i}
                isOpen={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? null : i)}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}