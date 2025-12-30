
import React from 'react';

const comparisons = [
  { label: "Oportunidades", before: "Perdidas em planilhas ou cadernos", after: "Centralizadas na Plataforma Med Growth" },
  { label: "Acesso aos Dados", before: "Você precisa pedir para a recepção", after: "Acesso 24/7 pelo seu portal exclusivo" },
  { label: "Gestão de Vendas", before: "Ninguém sabe quem foi contatado", after: "Tracking de status e histórico no sistema" },
  { label: "Tempo Gasto", before: "8-10h/semana analisando", after: "Ações prontas para clicar e executar" },
  { label: "Visibilidade de ROI", before: "Adivinhação no fim do mês", after: "Gráfico de lucro real dentro da plataforma" }
];

export const ComparisonTable: React.FC = () => {
  return (
    <section className="py-32 bg-[#050505] px-6 md:px-24">
      <div className="text-center mb-24">
        <h2 className="font-serif-elite text-4xl md:text-6xl font-light">Do Caos ao Crescimento Previsível</h2>
      </div>

      <div className="max-w-4xl mx-auto overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-white/10">
              <th className="py-8 text-[10px] tracking-[0.4em] uppercase text-[#64748b]">Atividade</th>
              <th className="py-8 text-[10px] tracking-[0.4em] uppercase text-[#64748b]">Processo Comum</th>
              <th className="py-8 text-[10px] tracking-[0.4em] uppercase text-[#b39359]">Com USYOU</th>
            </tr>
          </thead>
          <tbody>
            {comparisons.map((c, i) => (
              <tr key={i} className="border-b border-white/5">
                <td className="py-8 font-serif-elite text-white">{c.label}</td>
                <td className="py-8 text-xs text-[#64748b]">{c.before}</td>
                <td className="py-8 text-xs text-white font-bold">{c.after}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};
