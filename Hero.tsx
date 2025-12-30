
import React, { useEffect, useState } from 'react';
import { BrandSettings } from '../types';

interface HeroProps {
  settings: BrandSettings;
}

export const Hero: React.FC<HeroProps> = ({ settings }) => {
  const [reveal, setReveal] = useState(false);

  useEffect(() => {
    setTimeout(() => setReveal(true), 200);
  }, []);

  const handleScrollToBriefing = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById('briefing');
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 100,
        behavior: 'smooth'
      });
    }
  };

  const handleScrollToDiagnostic = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById('diagnostico');
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 100,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="min-h-screen flex flex-col justify-center px-6 md:px-24 pt-32 pb-24 relative overflow-hidden bg-black">
      <div className={`relative z-30 max-w-4xl transition-all duration-[1500ms] ${reveal ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
        <h1 className="font-serif-elite text-5xl md:text-[5.5rem] font-light leading-[1.05] mb-12 tracking-tight text-white">
          Toda Semana: Pacientes Prontos Para Fechar <span className="italic text-[#b39359] block md:inline">R$ 8.900</span>
        </h1>
        
        <p className="font-sans text-[#64748b] text-lg md:text-xl max-w-xl leading-relaxed mb-16">
          Não é apenas gestão. É <span className="text-white">Arquitetura de Crescimento em {settings.productName}</span>. Transformamos os dados brutos para <span className="text-white">{settings.targetAudience}</span> em faturamento imediato.
        </p>

        <div className="flex flex-col md:flex-row gap-8 items-center">
          <button 
            onClick={handleScrollToDiagnostic}
            className="group relative bg-[#b39359] text-black px-12 py-6 text-[11px] tracking-[0.6em] uppercase font-black transition-all duration-700 hover:tracking-[0.8em] hover:bg-white shadow-2xl shadow-[#b39359]/20 w-full md:w-auto text-center"
          >
            Realizar Diagnóstico Gratuito
          </button>
          
          <button 
            onClick={handleScrollToBriefing}
            className="group flex items-center gap-4 px-8 py-6 text-[11px] tracking-[0.4em] uppercase font-bold text-white/60 hover:text-white transition-all duration-500"
          >
            <span className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-[#b39359] transition-colors">
              <div className="w-0 h-0 border-t-[5px] border-t-transparent border-l-[8px] border-l-current border-b-[5px] border-b-transparent ml-1"></div>
            </span>
            Como funciona
          </button>
        </div>

        <div className="mt-20 flex items-center gap-8 border-l border-white/10 pl-10 h-14">
          <div className="flex flex-col">
            <span className="font-serif-elite text-3xl text-white leading-none">+300</span>
            <span className="text-[8px] tracking-[0.3em] uppercase font-bold text-[#64748b] mt-1">
              Médicos Atendidos
            </span>
          </div>
          <div className="w-px h-8 bg-white/10"></div>
          <div className="flex flex-col">
            <span className="font-serif-elite text-3xl text-[#b39359] leading-none">R$ 47M</span>
            <span className="text-[8px] tracking-[0.3em] uppercase font-bold text-[#64748b] mt-1">
              Faturamento Identificado
            </span>
          </div>
        </div>
      </div>
      
      {/* Background Decorativo */}
      <div className="absolute right-[-10%] md:right-[-5%] bottom-[5%] w-[55%] h-[80%] border border-white/10 bg-gradient-to-br from-white/[0.05] to-transparent backdrop-blur-3xl rounded-tl-[120px] hidden lg:block p-16 z-10 pointer-events-none">
        <div className="flex justify-between items-center mb-16 opacity-20">
          <div className="h-1.5 w-32 bg-white/20 rounded-full"></div>
          <div className="h-6 w-6 border border-white/20 rounded-full"></div>
        </div>
        <div className="space-y-12">
          <div className="h-24 w-full bg-white/[0.02] border border-white/5 rounded-2xl flex items-center px-10 justify-between">
            <div className="space-y-3">
              <div className="h-2 w-32 bg-[#b39359]/30 rounded-full"></div>
              <div className="h-1.5 w-24 bg-white/5 rounded-full"></div>
            </div>
            <div className="text-[#b39359] font-serif-elite text-xl opacity-80">R$ 1.200</div>
          </div>
          <div className="h-24 w-full bg-white/[0.02] border border-white/5 rounded-2xl flex items-center px-10 justify-between">
            <div className="space-y-3">
              <div className="h-2 w-44 bg-white/10 rounded-full"></div>
              <div className="h-1.5 w-20 bg-white/5 rounded-full"></div>
            </div>
            <div className="text-white/30 font-serif-elite text-xl">R$ 4.500</div>
          </div>
        </div>
      </div>
    </section>
  );
};
