
import React, { useState } from 'react';

interface Question {
  id: number;
  text: string;
  options: { label: string; value: number }[];
}

const QUESTIONS: Question[] = [
  {
    id: 1,
    text: "Qual o faturamento médio mensal da sua clínica hoje?",
    options: [
      { label: "Até R$ 50k", value: 1 },
      { label: "R$ 50k a R$ 150k", value: 3 },
      { label: "R$ 150k a R$ 500k", value: 5 },
      { label: "Acima de R$ 500k", value: 5 }
    ]
  },
  {
    id: 2,
    text: "Sua recepção possui um processo ativo de resgate de orçamentos não fechados?",
    options: [
      { label: "Não, dependemos da iniciativa do paciente", value: 0 },
      { label: "Sim, mas de forma desorganizada", value: 2 },
      { label: "Sim, com CRM e scripts validados", value: 5 }
    ]
  },
  {
    id: 3,
    text: "Quantos pacientes novos você atende por mês, em média?",
    options: [
      { label: "Menos de 20", value: 1 },
      { label: "20 a 50", value: 3 },
      { label: "Mais de 50", value: 5 }
    ]
  },
  {
    id: 4,
    text: "Você sabe exatamente qual o seu Custo por Aquisição de Paciente (CAC)?",
    options: [
      { label: "Não tenho ideia", value: 0 },
      { label: "Tenho uma estimativa vaga", value: 2 },
      { label: "Sei exatamente por canal (Google, Insta, etc)", value: 5 }
    ]
  },
  {
    id: 5,
    text: "Qual a recorrência média dos seus pacientes atuais?",
    options: [
      { label: "Eles vêm uma vez e raramente voltam", value: 1 },
      { label: "Voltam para revisões pontuais", value: 3 },
      { label: "Temos planos de acompanhamento/manutenção", value: 5 }
    ]
  },
  {
    id: 6,
    text: "Sua equipe recebe treinamento de vendas e contorno de objeções?",
    options: [
      { label: "Nunca receberam", value: 0 },
      { label: "Receberam há mais de 6 meses", value: 2 },
      { label: "Treinamento mensal e constante", value: 5 }
    ]
  },
  {
    id: 7,
    text: "Você utiliza algum software de gestão (ERP/CRM) de forma plena?",
    options: [
      { label: "Apenas para agenda básica", value: 1 },
      { label: "Uso para financeiro e prontuário", value: 3 },
      { label: "Uso inteligência de dados para decisões", value: 5 }
    ]
  },
  {
    id: 8,
    text: "Qual a principal origem dos seus pacientes hoje?",
    options: [
      { label: "100% Indicação", value: 2 },
      { label: "Misto (Indicação + Tráfego Pago)", value: 5 },
      { label: "Apenas Tráfego Pago", value: 3 }
    ]
  },
  {
    id: 9,
    text: "Você possui uma meta de faturamento clara e acompanhada semanalmente?",
    options: [
      { label: "Não temos metas definidas", value: 0 },
      { label: "Temos meta mensal, mas olhamos só no fim", value: 2 },
      { label: "Meta semanal acompanhada rigorosamente", value: 5 }
    ]
  },
  {
    id: 10,
    text: "Onde você sente que está o maior gargalo da clínica?",
    options: [
      { label: "Falta de novos pacientes", value: 3 },
      { label: "Conversão baixa na recepção", value: 5 },
      { label: "Baixa lucratividade/Custos altos", value: 4 }
    ]
  }
];

// URL ATUALIZADA PELO USUÁRIO
const GOOGLE_SHEETS_WEBHOOK_URL = 'https://script.google.com/macros/s/AKfycbwIJGcUWxh_8-CNRp0xo-DOA6XIJOZ-OCkwvNRwLGZDoe4yt-dLeFkLPJyFuKGpWopf/exec'; 

export const DiagnosticQuiz: React.FC = () => {
  const [step, setStep] = useState<'intro' | 'questions' | 'lead' | 'result'>('intro');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [leadData, setLeadData] = useState({ name: '', email: '', phone: '', clinic: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isRequestingSpecialist, setIsRequestingSpecialist] = useState(false);
  const [specialistRequested, setSpecialistRequested] = useState(false);

  const totalScore = answers.reduce((a, b) => a + b, 0);
  const maxScore = QUESTIONS.length * 5;
  const currentPercentage = maxScore > 0 ? Math.round((totalScore / maxScore) * 100) : 0;

  const handleAnswer = (value: number) => {
    const newAnswers = [...answers, value];
    setAnswers(newAnswers);
    
    if (currentQuestionIndex < QUESTIONS.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setStep('lead');
    }
  };

  const handleSubmitLead = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!leadData.name.trim() || !leadData.email.trim() || !leadData.phone.trim() || !leadData.clinic.trim()) {
      alert("Por favor, preencha todos os campos obrigatórios.");
      return;
    }
    setIsSubmitting(true);

    const payload = {
      "Nome": leadData.name,
      "E-mail": leadData.email,
      "Telefone": leadData.phone,
      "Clinica": leadData.clinic,
      "Score": currentPercentage + "%",
      "Respostas": answers.join(' | '),
      "Contato": "NÃO",
      "Data": new Date().toLocaleString('pt-BR'),
      "Origem": "Diagnóstico Inicial"
    };

    try {
      await fetch(GOOGLE_SHEETS_WEBHOOK_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      
      setTimeout(() => {
        setIsSubmitting(false);
        setStep('result');
      }, 1500);
    } catch (error) {
      console.error('Erro no envio:', error);
      setIsSubmitting(false);
      setStep('result');
    }
  };

  const handleRequestSpecialist = async () => {
    setIsRequestingSpecialist(true);

    const payload = {
      "Nome": leadData.name,
      "E-mail": leadData.email,
      "Telefone": leadData.phone,
      "Clinica": leadData.clinic,
      "Score": currentPercentage + "%",
      "Respostas": "SOLICITOU CONTATO VIA BOTÃO ESPECIALISTA",
      "Contato": "SIM",
      "Data": new Date().toLocaleString('pt-BR'),
      "Origem": "Botão Especialista"
    };

    try {
      await fetch(GOOGLE_SHEETS_WEBHOOK_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      
      setTimeout(() => {
        setIsRequestingSpecialist(false);
        setSpecialistRequested(true);
      }, 1500);
    } catch (error) {
      console.error('Erro no contato:', error);
      setIsRequestingSpecialist(false);
      setSpecialistRequested(true);
    }
  };

  return (
    <section id="diagnostico" className="py-32 px-6 md:px-24 bg-black scroll-mt-24 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[#b39359]/5 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="max-w-4xl mx-auto relative z-10">
        {step === 'intro' && (
          <div className="text-center space-y-12 animate-in fade-in zoom-in duration-700">
            <span className="text-[#b39359] text-[10px] tracking-[0.8em] uppercase font-bold block">Assessment</span>
            <h2 className="font-serif-elite text-5xl md:text-7xl font-light">Descubra o Potencial de <br/><span className="italic text-[#b39359]">Lucro Oculto</span> da sua Clínica.</h2>
            <p className="text-[#64748b] text-lg max-w-2xl mx-auto leading-relaxed">Responda a 10 perguntas rápidas e receba um diagnóstico imediato sobre a sua eficiência de crescimento e conversão.</p>
            <button onClick={() => setStep('questions')} className="bg-[#b39359] text-black px-12 py-6 text-[11px] tracking-[0.6em] uppercase font-black hover:bg-white transition-all duration-700">Iniciar Diagnóstico Gratuito</button>
          </div>
        )}

        {step === 'questions' && (
          <div className="glass p-12 md:p-20 border border-white/10 animate-in slide-in-from-bottom-8 duration-700">
            <div className="flex justify-between items-end mb-16">
              <span className="text-[10px] tracking-[0.4em] uppercase text-[#b39359] font-bold">Pergunta {currentQuestionIndex + 1} de {QUESTIONS.length}</span>
              <div className="w-48 h-1 bg-white/5 rounded-full overflow-hidden">
                <div className="h-full bg-[#b39359] transition-all duration-500" style={{ width: `${((currentQuestionIndex + 1) / QUESTIONS.length) * 100}%` }}></div>
              </div>
            </div>
            <h3 className="font-serif-elite text-3xl md:text-4xl mb-12 leading-tight">{QUESTIONS[currentQuestionIndex].text}</h3>
            <div className="grid grid-cols-1 gap-4">
              {QUESTIONS[currentQuestionIndex].options.map((opt, idx) => (
                <button key={idx} onClick={() => handleAnswer(opt.value)} className="w-full text-left p-6 border border-white/5 bg-white/[0.02] hover:border-[#b39359] hover:bg-[#b39359]/5 transition-all group flex justify-between items-center">
                  <span className="text-sm tracking-wide text-white/70 group-hover:text-white">{opt.label}</span>
                  <span className="text-[#b39359] opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {step === 'lead' && (
          <div className="glass p-12 md:p-20 border border-white/10 animate-in fade-in duration-700">
            <div className="text-center mb-16">
              <h2 className="font-serif-elite text-4xl mb-6">Diagnóstico Concluído!</h2>
              <p className="text-[#64748b] text-sm uppercase tracking-widest">Identificamos oportunidades valiosas. Preencha os dados obrigatórios para liberar seu relatório.</p>
            </div>
            <form onSubmit={handleSubmitLead} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <label className="text-[9px] tracking-[0.4em] uppercase font-bold text-[#64748b]">Nome Completo *</label>
                  <input required type="text" value={leadData.name} onChange={e => setLeadData({...leadData, name: e.target.value})} placeholder="DIGITE SEU NOME" className="w-full bg-transparent border-b border-white/10 py-4 outline-none focus:border-[#b39359] text-xs uppercase tracking-widest text-white transition-all placeholder:text-white/5" />
                </div>
                <div className="space-y-4">
                  <label className="text-[9px] tracking-[0.4em] uppercase font-bold text-[#64748b]">Email Corporativo *</label>
                  <input required type="email" value={leadData.email} onChange={e => setLeadData({...leadData, email: e.target.value})} placeholder="SEU@EMAIL.COM" className="w-full bg-transparent border-b border-white/10 py-4 outline-none focus:border-[#b39359] text-xs uppercase tracking-widest text-white transition-all placeholder:text-white/5" />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <label className="text-[9px] tracking-[0.4em] uppercase font-bold text-[#64748b]">WhatsApp com DDD *</label>
                  <input required type="tel" minLength={10} placeholder="(00) 00000-0000" value={leadData.phone} onChange={e => setLeadData({...leadData, phone: e.target.value})} className="w-full bg-transparent border-b border-white/10 py-4 outline-none focus:border-[#b39359] text-xs uppercase tracking-widest text-white transition-all placeholder:text-white/5" />
                </div>
                <div className="space-y-4">
                  <label className="text-[9px] tracking-[0.4em] uppercase font-bold text-[#64748b]">Nome da Clínica *</label>
                  <input required type="text" value={leadData.clinic} onChange={e => setLeadData({...leadData, clinic: e.target.value})} placeholder="SUA CLÍNICA" className="w-full bg-transparent border-b border-white/10 py-4 outline-none focus:border-[#b39359] text-xs uppercase tracking-widest text-white transition-all placeholder:text-white/5" />
                </div>
              </div>
              <button type="submit" disabled={isSubmitting} className="w-full bg-[#b39359] text-black py-6 text-[11px] tracking-[0.6em] uppercase font-black hover:bg-white transition-all duration-700 disabled:opacity-50">{isSubmitting ? "PROCESSANDO SEU DIAGNÓSTICO..." : "GERAR MEU RELATÓRIO AGORA →"}</button>
            </form>
          </div>
        )}

        {step === 'result' && (
          <div className="text-center space-y-16 animate-in zoom-in duration-1000">
            <div className="relative inline-block">
               <svg className="w-64 h-64 -rotate-90">
                <circle cx="128" cy="128" r="120" stroke="currentColor" strokeWidth="2" fill="transparent" className="text-white/5" />
                <circle cx="128" cy="128" r="120" stroke="currentColor" strokeWidth="4" fill="transparent" strokeDasharray={2 * Math.PI * 120} strokeDashoffset={2 * Math.PI * 120 * (1 - currentPercentage / 100)} className="text-[#b39359] transition-all duration-[2000ms] ease-out" />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="font-serif-elite text-7xl text-white">{currentPercentage}</span>
                <span className="text-[10px] tracking-widest uppercase text-[#64748b] font-bold">Eficiência</span>
              </div>
            </div>
            <div className="max-w-2xl mx-auto space-y-8">
              <h2 className="font-serif-elite text-4xl leading-tight">Sua clínica possui um <br/><span className="text-[#b39359] italic">{currentPercentage < 40 ? 'Grave Gargalo de Faturamento' : currentPercentage < 75 ? 'Potencial de Crescimento Retido' : 'Desempenho de Alta Performance'}</span></h2>
              <p className="text-[#64748b] leading-relaxed">Relatório gerado com sucesso para <strong>{leadData.name}</strong>. Identificamos que a <strong>{leadData.clinic}</strong> está operando com apenas {currentPercentage}% da sua capacidade real de lucro.</p>
              
              <div className="pt-8 flex flex-col items-center gap-6">
                {!specialistRequested ? (
                  <button 
                    onClick={handleRequestSpecialist}
                    disabled={isRequestingSpecialist}
                    className="bg-[#b39359] text-black px-12 py-6 text-[11px] tracking-[0.6em] uppercase font-black hover:bg-white transition-all duration-700 shadow-2xl shadow-[#b39359]/20 disabled:opacity-50"
                  >
                    {isRequestingSpecialist ? "SOLICITANDO CONTATO..." : "Quero falar com um especialista"}
                  </button>
                ) : (
                  <div className="bg-white/5 border border-[#b39359]/30 p-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
                    <p className="text-[#b39359] text-[11px] tracking-[0.4em] uppercase font-black mb-2">Solicitação enviada com sucesso</p>
                    <p className="text-white text-sm tracking-widest uppercase opacity-60">Nosso time entrará em contato em breve.</p>
                  </div>
                )}
                <button onClick={() => { setAnswers([]); setCurrentQuestionIndex(0); setStep('intro'); setSpecialistRequested(false); }} className="text-[9px] tracking-[0.3em] uppercase text-white/30 hover:text-white transition-colors">Refazer Diagnóstico</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
