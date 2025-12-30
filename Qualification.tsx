
import React from 'react';

export const Qualification: React.FC = () => {
  return (
    <section className="py-32 px-6 md:px-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/5 border border-white/5">
        <div className="p-16 bg-black">
          <h3 className="text-[#b39359] font-serif-elite text-3xl mb-12">Isso é Para Você Se...</h3>
          <ul className="space-y-6 text-sm text-[#64748b]">
            <li>✅ Clínica fatura entre R$ 100k-500k/mês</li>
            <li>✅ Você tem base de pacientes (300+)</li>
            <li>✅ Você valoriza tempo acima de tudo</li>
            <li>✅ Você quer crescer mas não sabe por onde começar</li>
          </ul>
        </div>
        <div className="p-16 bg-[#050505]">
          <h3 className="text-[#64748b] font-serif-elite text-3xl mb-12">Não é Para Você Se...</h3>
          <ul className="space-y-6 text-sm text-white/20">
            <li>❌ Faturamento menor que R$ 80k/mês</li>
            <li>❌ Você não tem sistema de agendamento</li>
            <li>❌ Você prefere cursos a serviços executados</li>
            <li>❌ Você não vai executar as ações</li>
          </ul>
        </div>
      </div>
    </section>
  );
};
