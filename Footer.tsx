
import React from 'react';
import { BrandSettings } from '../types.ts';

interface FooterProps {
  settings: BrandSettings;
}

export const Footer: React.FC<FooterProps> = ({ settings }) => {
  return (
    <footer className="py-24 px-6 md:px-24 border-t border-white/5 bg-[#000000]">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-24">
        <div className="col-span-1 md:col-span-1">
          <div className="text-[#b39359] font-bold tracking-[0.5em] text-lg mb-8 uppercase">
             USYOU
          </div>
          <p className="text-[#64748b] text-[10px] leading-relaxed max-w-xs uppercase tracking-widest">
            Med Growth para Clínicas Médicas de Alto Padrão. Desenvolvido por USYOU Gestão Médica
          </p>
        </div>
        
        <div>
          <h4 className="text-[10px] tracking-[0.4em] uppercase font-bold text-white mb-8">Soluções</h4>
          <ul className="space-y-4 text-[10px] tracking-[0.2em] uppercase font-bold text-[#64748b]">
            <li>{settings.productName}</li>
            <li>Consultoria Estratégica</li>
            <li>Formação Médica</li>
          </ul>
        </div>

        <div>
          <h4 className="text-[10px] tracking-[0.4em] uppercase font-bold text-white mb-8">Empresa</h4>
          <ul className="space-y-4 text-[10px] tracking-[0.2em] uppercase font-bold text-[#64748b]">
            <li>Sobre USYOU</li>
            <li>Termos de Uso</li>
            <li>Privacidade</li>
          </ul>
        </div>

        <div>
          <h4 className="text-[10px] tracking-[0.4em] uppercase font-bold text-white mb-8">Contato</h4>
          <ul className="space-y-4 text-[10px] tracking-[0.2em] uppercase font-bold text-[#64748b]">
            <li>contato@usyou.com.br</li>
            <li>Instagram: @usyou.gestao</li>
          </ul>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-white/5 gap-8">
        <div className="text-[9px] tracking-widest text-[#64748b] uppercase">
          © 2025 USYOU GESTÃO MÉDICA. TODOS OS DIREITOS RESERVADOS.
        </div>
      </div>
    </footer>
  );
};
