
import React from 'react';

const steps = [
  {
    num: "01",
    title: "Conectamos",
    text: "Integramos com seus sistemas e coletamos dados históricos em 15 dias."
  },
  {
    num: "02",
    title: "Analisamos",
    text: "IA + especialistas identificam oportunidades de faturamento escondidas."
  },
  {
    num: "03",
    title: "Acesso à Plataforma",
    text: "Você recebe login exclusivo na Plataforma Med Growth com sua lista de oportunidades e meeting quinzenal."
  },
  {
    num: "04",
    title: "Você Executa",
    text: "Sua equipe acessa o portal, utiliza os scripts e atualiza o status de cada fechamento em tempo real."
  }
];

export const Methodology: React.FC = () => {
  return (
    <section id="solucao" className="py-32 px-6 md:px-24 scroll-mt-32">
      <div className="text-center mb-32">
        <span className="text-[#64748b] text-[10px] tracking-[0.8em] uppercase font-bold mb-6 block">Metodologia</span>
        <h2 className="font-serif-elite text-5xl md:text-7xl font-light">Med Growth</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
        {steps.map((step, idx) => (
          <div key={idx} className="relative pt-12">
            <div className="text-[#b39359] font-serif-elite text-5xl mb-8 opacity-20">{step.num}</div>
            <h3 className="text-white font-serif-elite text-2xl mb-6">{step.title}</h3>
            <p className="text-[#64748b] text-sm leading-relaxed">{step.text}</p>
          </div>
        ))}
      </div>

      <div className="mt-32 p-12 bg-white/[0.02] border border-white/5 text-center">
        <p className="text-[#b39359] text-xs tracking-[0.4em] uppercase font-black">
          "Não é um sistema. É uma plataforma de gestão de crescimento em tempo real."
        </p>
      </div>
    </section>
  );
};
