
import React, { useState } from 'react';
import { BrandSettings } from '../types';

interface SelectionProcessProps {
  settings: BrandSettings;
}

// URL ATUALIZADA PELO USUÁRIO
const GOOGLE_SHEETS_WEBHOOK_URL = 'https://script.google.com/macros/s/AKfycbwIJGcUWxh_8-CNRp0xo-DOA6XIJOZ-OCkwvNRwLGZDoe4yt-dLeFkLPJyFuKGpWopf/exec';

export const SelectionProcess: React.FC<SelectionProcessProps> = ({ settings }) => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', revenue: 'R$ 100k - 200k / mês' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim()) {
      alert("Por favor, preencha todos os campos obrigatórios.");
      return;
    }

    setLoading(true);

    const payload = {
      "Nome": formData.name,
      "E-mail": formData.email,
      "Telefone": "N/A",
      "Clinica": "Cadastro Direto",
      "Score": "Lead de Sessão",
      "Respostas": "Faturamento Selecionado: " + formData.revenue,
      "Contato": "SIM",
      "Data": new Date().toLocaleString('pt-BR'),
      "Origem": "Formulário Fim de Página"
    };

    try {
      await fetch(GOOGLE_SHEETS_WEBHOOK_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      setTimeout(() => {
        setLoading(false);
        setSubmitted(true);
      }, 1500);
    } catch (error) {
      console.error('Erro ao enviar lead:', error);
      setLoading(false);
      setSubmitted(true);
    }
  };

  return (
    <section id="diagnostico-direto" className="py-32 px-6 md:px-24 relative scroll-mt-24">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-24">
        <div className="flex-1">
          <span className="text-[#b39359] text-[10px] tracking-[0.8em] uppercase font-bold mb-8 block">Next Step</span>
          <h2 className="font-serif-elite text-5xl md:text-7xl font-light leading-tight mb-12">
            Veja Quanto Você Está <span className="italic text-[#b39359]">Deixando na Mesa</span>.
          </h2>
          <p className="text-[#64748b] text-lg mb-12 leading-relaxed">
            Agende um Diagnóstico Gratuito de 30 minutos. Analisamos 12 meses de dados e mostramos onde estão as 3 maiores oportunidades da sua clínica hoje.
          </p>
        </div>

        <div className="flex-1 glass p-10 md:p-16 border border-white/5 relative overflow-hidden">
          {submitted ? (
            <div className="h-full flex flex-col justify-center items-center text-center space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">
              <div className="w-20 h-20 border border-[#b39359] flex items-center justify-center rounded-full mb-4">
                <svg className="w-10 h-10 text-[#b39359]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5 13l4 4L19 7"></path></svg>
              </div>
              <h3 className="font-serif-elite text-4xl">Solicitação Recebida</h3>
              <p className="text-[#64748b] text-sm tracking-widest uppercase">Nosso time estratégico entrará em contato em breve.</p>
              <button 
                onClick={() => setSubmitted(false)}
                className="text-[9px] tracking-[0.3em] uppercase text-white/30 hover:text-white transition-colors"
              >
                Voltar
              </button>
            </div>
          ) : (
            <form className="space-y-10" onSubmit={handleSubmit}>
              <div className={loading ? 'opacity-20 pointer-events-none' : ''}>
                <label className="text-[9px] tracking-[0.5em] uppercase font-bold text-[#64748b] mb-4 block">Seu Nome *</label>
                <input 
                  required 
                  type="text" 
                  placeholder="NOME COMPLETO"
                  value={formData.name}
                  onChange={e => setFormData({...formData, name: e.target.value})}
                  className="w-full bg-transparent border-b border-white/10 py-4 focus:border-[#b39359] outline-none transition-all text-xs tracking-widest uppercase text-white placeholder:text-white/5" 
                />
              </div>
              
              <div className={loading ? 'opacity-20 pointer-events-none' : ''}>
                <label className="text-[9px] tracking-[0.5em] uppercase font-bold text-[#64748b] mb-4 block">E-mail Corporativo *</label>
                <input 
                  required 
                  type="email" 
                  placeholder="EX: CLINICA@CONTATO.COM"
                  value={formData.email}
                  onChange={e => setFormData({...formData, email: e.target.value})}
                  className="w-full bg-transparent border-b border-white/10 py-4 focus:border-[#b39359] outline-none transition-all text-xs tracking-widest uppercase text-white placeholder:text-white/5" 
                />
              </div>

              <div className={loading ? 'opacity-20 pointer-events-none' : ''}>
                <label className="text-[9px] tracking-[0.5em] uppercase font-bold text-[#64748b] mb-4 block">Faturamento Médio Mensal</label>
                <select 
                  value={formData.revenue}
                  onChange={e => setFormData({...formData, revenue: e.target.value})}
                  className="w-full bg-transparent border-b border-white/10 py-4 focus:border-[#b39359] outline-none transition-all text-xs tracking-widest uppercase text-white"
                >
                  <option className="bg-black" value="R$ 100k - 200k / mês">R$ 100k - 200k / mês</option>
                  <option className="bg-black" value="R$ 200k - 500k / mês">R$ 200k - 500k / mês</option>
                  <option className="bg-black" value="Acima de R$ 500k / mês">Acima de R$ 500k / mês</option>
                </select>
              </div>

              <button 
                type="submit"
                disabled={loading}
                className="w-full bg-[#b39359] text-black py-6 text-[11px] tracking-[0.6em] uppercase font-black hover:bg-white transition-all duration-700 disabled:opacity-50"
              >
                {loading ? "SINCRONIZANDO..." : "AGENDAR DIAGNÓSTICO GRATUITO →"}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
