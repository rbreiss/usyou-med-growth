
import React from 'react';

export const IntelligenceHub: React.FC = () => {
  return (
    <section id="inteligencia" className="py-32 bg-[#050505] px-6 md:px-24 scroll-mt-24">
      <div className="max-w-4xl mb-24">
        <span className="text-[#b39359] text-[10px] tracking-[0.8em] uppercase font-bold mb-6 block">Intelligence Hub</span>
        <h2 className="font-serif-elite text-4xl md:text-6xl font-light leading-tight">
          Inteligência de Crescimento: <br/>Plataforma Med Growth
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/5 border border-white/5">
        <div className="p-16 bg-black">
          <h3 className="text-[#b39359] font-serif-elite text-3xl mb-12">O Portal de Oportunidades</h3>
          <ul className="space-y-8 text-[#64748b] text-sm">
            <li className="flex gap-4">
              <span className="text-[#b39359]">💻</span>
              <span><strong>Dashboard 24/7:</strong> Acesso total à lista de pacientes priorizados.</span>
            </li>
            <li className="flex gap-4">
              <span className="text-[#b39359]">🔄</span>
              <span><strong>CRM de Fechamento:</strong> Mova o paciente de "Oportunidade" para "Vendido" e acompanhe seu ROI.</span>
            </li>
            <li className="flex gap-4">
              <span className="text-[#b39359]">📱</span>
              <span><strong>Acesso Multi-dispositivo:</strong> Você e sua secretária logados em um ambiente seguro.</span>
            </li>
          </ul>
        </div>
        
        <div className="p-16 bg-black">
          <h3 className="text-[#b39359] font-serif-elite text-3xl mb-12">Apoio do Especialista</h3>
          <ul className="space-y-8 text-[#64748b] text-sm">
            <li className="flex gap-4">
              <span className="text-[#b39359]">📞</span>
              <span><strong>Meeting de 1h:</strong> Quinzenalmente, entramos na plataforma com você para ajustar a estratégia.</span>
            </li>
            <li className="flex gap-4">
              <span className="text-[#b39359]">🎯</span>
              <span><strong>Análise de Funil:</strong> Identificamos gargalos na sua recepção através dos dados do portal.</span>
            </li>
            <li className="flex gap-4">
              <span className="text-[#b39359]">📊</span>
              <span><strong>Relatório de Performance:</strong> Veja quanto dinheiro saiu da plataforma para o seu caixa.</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
