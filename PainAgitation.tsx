
import React from 'react';

const pains = [
  {
    title: "Pacientes VIP Sumindo",
    text: "Pacientes que gastavam R$ 15k/ano pararam de vir há 4 meses — e você nem percebeu."
  },
  {
    title: "Preços Defasados",
    text: "Você cobra R$ 800 no procedimento que o mercado cobra R$ 1.200. Dinheiro jogado fora."
  },
  {
    title: "Orçamentos Esquecidos",
    text: "Orçamentos parados há 7 dias esfriando enquanto você foca na operação clínica."
  },
  {
    title: "Cross-sells Invisíveis",
    text: "Paciente fez botox mas não recebeu oferta de preenchimento. 67% aceitam quando oferecido."
  }
];

export const PainAgitation: React.FC = () => {
  return (
    <section id="problema" className="py-32 bg-[#050505] px-6 md:px-24 scroll-mt-32">
      <div className="max-w-4xl mb-24">
        <span className="text-[#b39359] text-[10px] tracking-[0.8em] uppercase font-bold mb-6 block">O problema</span>
        <h2 className="font-serif-elite text-4xl md:text-6xl font-light leading-tight">
          Você Sabe Que Está Deixando Dinheiro na Mesa. <br/>
          <span className="italic">Mas Onde Exatamente?</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {pains.map((pain, idx) => (
          <div key={idx} className="p-12 border border-white/5 bg-[#000000] group hover:border-[#b39359]/30 transition-all duration-700">
            <h3 className="text-[#b39359] font-serif-elite text-2xl mb-6">{pain.title}</h3>
            <p className="text-[#64748b] leading-relaxed">{pain.text}</p>
          </div>
        ))}
      </div>

      <div className="mt-24 text-center">
        <p className="text-white text-xl font-bold italic tracking-wide">
          "O pior: você não tem tempo de descobrir isso sozinho"
        </p>
      </div>
    </section>
  );
};
