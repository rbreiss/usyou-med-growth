
import React, { useState } from 'react';

const faqs = [
  { q: "Preciso trocar meu sistema?", a: "Não. Integramos com 95% dos sistemas do mercado (Doctoralia, Clinicorp, etc)." },
  { q: "Quanto tempo vou gastar?", a: "Apenas 1h quinzenal para reunião com especialista + execução semanal das ações de fechamento." },
  { q: "E se minha clínica for pequena?", a: "Abaixo de R$ 80k/mês recomendamos nossa Formação como primeiro passo." },
  { q: "Meus dados ficam seguros?", a: "Sim. Criptografia bancária e contrato de confidencialidade rigoroso." }
];

export const FAQ: React.FC = () => {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="py-32 bg-[#050505] px-6 md:px-24 scroll-mt-24">
      <div className="max-w-3xl mx-auto">
        <h2 className="font-serif-elite text-4xl text-center mb-24 uppercase tracking-widest">FAQ</h2>
        <div className="space-y-8">
          {faqs.map((faq, i) => (
            <div key={i} className="border-b border-white/5 pb-8 cursor-pointer" onClick={() => setOpen(open === i ? null : i)}>
              <h4 className="flex justify-between items-center text-sm font-bold tracking-widest uppercase">
                {faq.q}
                <span className="text-[#b39359]">{open === i ? '−' : '+'}</span>
              </h4>
              {open === i && <p className="mt-8 text-[#64748b] text-sm leading-relaxed">{faq.a}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
