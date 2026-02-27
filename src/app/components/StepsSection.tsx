import { motion } from "motion/react";
import { useInView } from "./hooks/useInView";

const steps = [
  "Defina seu objetivo com clareza absoluta",
  "Avalie seu ponto de partida com honestidade",
  "Monte um plano de treino periodizado",
  "Calcule suas necessidades calóricas reais",
  "Domine os macronutrientes essenciais",
  "Estruture suas refeições semanais",
  "Aprenda a técnica correta dos exercícios-base",
  "Implemente a progressão de carga semanal",
  "Otimize seu sono para recuperação máxima",
  "Gerencie o estresse que sabota seus ganhos",
  "Crie uma rotina matinal de alta performance",
  "Elimine os 5 maiores erros de treino",
  "Entenda o timing nutricional pré e pós-treino",
  "Desenvolva disciplina acima da motivação",
  "Monitore e ajuste sua evolução a cada 4 semanas",
  "Domine a periodização de mesociclos",
  "Quebre platôs com estratégias avançadas",
  "Construa hábitos que se mantêm no automático",
  "Integre treino e vida sem ser escravo da dieta",
  "Consolide sua transformação como identidade",
];

export function StepsSection() {
  const { ref, isInView } = useInView(0.08);

  return (
    null
  );
}