
import React from 'react';

export const CaseStudy: React.FC = () => {
  return (
    <section id="prova" className="py-32 px-6 md:px-24 scroll-mt-32">
      <div className="max-w-6xl mx-auto border border-white/5 p-16 md:p-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 p-12 opacity-5 text-9xl font-serif-elite">CASE</div>
        
        <div className="relative z-10">
          <span className="text-[#b39359] text-[10px] tracking-[0.8em] uppercase font-bold mb-8 block">Real Success</span>
          <h2 className="font-serif-elite text-4xl md:text-7xl font-light mb-16">
            Dr. Roberto Aumentou <br/>
            Faturamento em <span className="text-[#b39359]">R$ 87k/Mês</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
            <div>
              <p className="text-[#64748b] mb-12 leading-relaxed italic">
                "Antes eu perdia tempo tentando entender planilhas. Agora eu só ligo para quem meu CS me diz. É simples e funciona."
              </p>
              <div className="text-white text-sm font-bold tracking-widest uppercase">
                Dr. Roberto A. — Dermatologista, SP
              </div>
            </div>

            <div className="space-y-12">
              <div className="flex justify-between border-b border-white/10 pb-4">
                <span className="text-[10px] tracking-widest text-[#64748b] uppercase">Antes</span>
                <span className="text-white font-bold">R$ 180k/mês</span>
              </div>
              <div className="flex justify-between border-b border-white/10 pb-4">
                <span className="text-[10px] tracking-widest text-[#64748b] uppercase">Após 90 Dias</span>
                <span className="text-[#b39359] font-bold">R$ 267k/mês (+48%)</span>
              </div>
              <div className="flex justify-between border-b border-white/10 pb-4">
                <span className="text-[10px] tracking-widest text-[#64748b] uppercase">Tempo de Execução</span>
                <span className="text-white font-bold">2h/semana</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
