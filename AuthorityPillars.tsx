
import React from 'react';

const pillars = [
  {
    num: "I",
    title: "Mapeamento de Glosas",
    text: "Identificamos onde o seu capital fica retido nos processos burocráticos dos convênios e operadoras."
  },
  {
    num: "II",
    title: "Custeio Baseado em Valor",
    text: "Implementação da estrutura de DRE que separa custos fixos de variáveis para encontrar o Ponto de Equilíbrio real."
  },
  {
    num: "III",
    title: "Soberania Financeira",
    text: "Criação de reservas de operação para que a sua clínica nunca mais dependa de crédito bancário imediato."
  }
];

export const AuthorityPillars: React.FC = () => {
  return (
    <section id="governança" className="py-32 px-6 md:px-24">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-32">
          <span className="text-[#64748b] text-[10px] tracking-[0.8em] uppercase font-bold mb-6 block">
            Metodologia
          </span>
          <h2 className="font-serif-elite text-5xl md:text-7xl font-light">Gestão de Sobrevivência à Soberania</h2>
        </div>

        <div className="space-y-32">
          {pillars.map((pillar, idx) => (
            <div key={idx} className="flex flex-col md:flex-row gap-12 md:gap-24 items-start group">
              <div className="text-[#b39359] font-serif-elite text-8xl md:text-9xl opacity-20 group-hover:opacity-100 transition-opacity duration-1000 leading-none">
                {pillar.num}
              </div>
              <div className="pt-4 max-w-2xl">
                <h3 className="font-serif-elite text-3xl md:text-5xl mb-8 tracking-tight">
                  {pillar.title}
                </h3>
                <p className="text-[#64748b] text-lg md:text-xl leading-relaxed">
                  {pillar.text}
                </p>
                <div className="mt-12 h-px w-0 bg-[#b39359] group-hover:w-full transition-all duration-1000 opacity-50"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
