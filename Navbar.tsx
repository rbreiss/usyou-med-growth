
import React from 'react';
import { BrandSettings } from '../types';

interface NavbarProps {
  settings: BrandSettings;
  onOpenSettings: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ settings }) => {
  const navLinks = [
    { label: 'Problema', href: '#problema' },
    { label: 'Solução', href: '#solucao' },
    { label: 'Inteligência', href: '#inteligencia' },
    { label: 'Prova', href: '#prova' },
    { label: 'FAQ', href: '#faq' },
  ];

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 glass border-b border-white/5 px-6 md:px-12 py-6 flex justify-between items-center transition-all duration-700 bg-black/80 backdrop-blur-2xl">
      <div className="flex items-center gap-4">
        <div className="text-[#b39359] font-bold tracking-[0.5em] text-sm md:text-lg uppercase">
          USYOU
        </div>
      </div>

      <div className="hidden lg:flex items-center gap-10">
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={(e) => handleScroll(e, link.href)}
            className="text-[10px] tracking-[0.6em] uppercase font-bold text-white/40 hover:text-[#b39359] transition-colors duration-500"
          >
            {link.label}
          </a>
        ))}
      </div>

      <div className="flex items-center gap-6">
        <a 
          href="#diagnostico" 
          onClick={(e) => handleScroll(e, '#diagnostico')}
          className="bg-transparent border border-[#b39359] px-6 py-2.5 text-[10px] tracking-[0.4em] uppercase font-bold text-[#b39359] hover:bg-[#b39359] hover:text-black transition-all duration-700"
        >
          Realizar Diagnóstico
        </a>
      </div>
    </nav>
  );
};
