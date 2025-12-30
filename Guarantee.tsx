
import React from 'react';

export const Guarantee: React.FC = () => {
  return (
    <section className="py-32 px-6 md:px-24">
      <div className="max-w-4xl mx-auto border-2 border-[#b39359] p-16 md:p-24 text-center">
        <h2 className="font-serif-elite text-4xl md:text-6xl text-white mb-12">
          30 Dias: Resultado ou <br/>
          <span className="text-[#b39359]">Dinheiro de Volta + R$ 1.000</span>
        </h2>
        <p className="text-[#64748b] leading-relaxed max-w-2xl mx-auto mb-12">
          Se em 30 dias não identificarmos pelo menos R$ 30.000 em oportunidades concretas na sua clínica, devolvemos 100% e pagamos R$ 1.000 pelo tempo perdido.
        </p>
        <div className="text-[10px] tracking-[0.4em] uppercase font-black text-white/30">
          SEM PERGUNTAS. SEM BUROCRACIA.
        </div>
      </div>
    </section>
  );
};
