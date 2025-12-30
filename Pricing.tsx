
import React from 'react';

export const Pricing: React.FC = () => {
  return (
    <section id="investimento" className="py-32 bg-[#050505] px-6 md:px-24">
      <div className="max-w-4xl mx-auto text-center">
        <span className="text-[#b39359] text-[10px] tracking-[0.8em] uppercase font-bold mb-8 block">Investment</span>
        
        <div className="mb-4">
          <span className="text-[#64748b] text-sm line-through opacity-50">De R$ 2.997/mês</span>
          <span className="ml-4 bg-[#b39359]/10 text-[#b39359] text-[10px] px-3 py-1 rounded-full font-bold tracking-widest uppercase border border-[#b39359]/20">
            Condição Especial de Lançamento
          </span>
        </div>
        
        <h2 className="font-serif-elite text-6xl md:text-9xl font-light mb-8">R$ 1.597<span className="text-xl">/mês</span></h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left mt-24">
          <div className="p-12 border border-white/5 bg-black relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#b39359] opacity-[0.02] blur-3xl group-hover:opacity-[0.05] transition-opacity"></div>
            <h4 className="text-[#b39359] font-bold text-xs uppercase tracking-widest mb-6">Incluso no Med Growth:</h4>
            <ul className="space-y-4 text-xs text-[#64748b] tracking-wide">
              <li>• Setup e Integração de Dados (Faturamento e Agenda)</li>
              <li>• <strong>Acesso Ilimitado à Plataforma Med Growth</strong></li>
              <li>• Dashboard de Oportunidades em Tempo Real</li>
              <li>• Meeting Quinzenal de 1h com Especialista</li>
              <li>• Suporte via WhatsApp para Dúvidas de Execução</li>
            </ul>
          </div>
          
          <div className="flex flex-col gap-8">
            <div className="p-12 border border-[#b39359]/20 bg-[#b39359]/5">
              <h4 className="text-white font-bold text-xs uppercase tracking-widest mb-6">Foco em Ativos Prontos:</h4>
              <p className="text-xl font-serif-elite text-white leading-relaxed">
                Você não paga para ter dados. Você paga para ter uma <span className="text-[#b39359]">plataforma de lucros</span> que diz exatamente quem contatar hoje.
              </p>
            </div>
            
            <div className="p-6 border border-white/5 bg-white/[0.02]">
              <p className="text-[10px] text-[#64748b] leading-relaxed uppercase tracking-widest">
                <span className="text-white font-bold">Projetos Adicionais:</span> Clientes Med Growth possuem prioridade e taxas exclusivas em projetos de Precificação, Estruturação Financeira, Planejamento Estratégico entre outros.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
