
import React, { useState } from 'react';
import { BrandSettings } from './types';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { VideoBriefing } from './components/VideoBriefing';
import { PainAgitation } from './components/PainAgitation';
import { Methodology } from './components/Methodology';
import { IntelligenceHub } from './components/IntelligenceHub';
import { CaseStudy } from './components/CaseStudy';
import { ComparisonTable } from './components/ComparisonTable';
import { Qualification } from './components/Qualification';
import { Pricing } from './components/Pricing';
import { Guarantee } from './components/Guarantee';
import { FAQ } from './components/FAQ';
import { DiagnosticQuiz } from './components/DiagnosticQuiz';
import { Footer } from './components/Footer';
import { PersonalizationDrawer } from './components/PersonalizationDrawer';

export default function App() {
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [settings, setSettings] = useState<BrandSettings>({
    productName: 'USYOU Med Growth',
    targetAudience: 'Médicos Proprietários de Clínicas',
    logoUrl: null
  });

  return (
    <div className="bg-[#000000] text-white min-h-screen font-sans selection:bg-[#b39359] selection:text-black">
      <Navbar settings={settings} onOpenSettings={() => setIsSettingsOpen(true)} />
      
      <main>
        {/* 1. Hero Section */}
        <Hero settings={settings} />

        {/* 1.1 Video Briefing (Estratégia) */}
        <VideoBriefing />
        
        {/* 2. Seção Problema */}
        <PainAgitation />
        
        {/* 3. Seção Solução (Metodologia) */}
        <Methodology />
        
        {/* 4. O Que Você Recebe */}
        <IntelligenceHub />
        
        {/* 5. Caso Real */}
        <CaseStudy />
        
        {/* 6. Comparação Antes vs Depois */}
        <ComparisonTable />
        
        {/* 7. Para Quem É */}
        <Qualification />
        
        {/* 8. Investimento */}
        <Pricing />
        
        {/* 9. Garantia */}
        <Guarantee />
        
        {/* 10. FAQ */}
        <FAQ />
        
        {/* 11. CTA Final (Quiz Diagnóstico) */}
        <DiagnosticQuiz />
      </main>
      
      {/* 12. Rodapé */}
      <Footer settings={settings} />

      {/* Painel de Personalização (Drawer) */}
      <PersonalizationDrawer 
        isOpen={isSettingsOpen} 
        onClose={() => setIsSettingsOpen(false)} 
        settings={settings}
        setSettings={setSettings}
      />

      {/* Visual background accents */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none overflow-hidden z-0">
        <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-[#b39359] opacity-[0.02] blur-[150px] rounded-full"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#64748b] opacity-[0.02] blur-[150px] rounded-full"></div>
      </div>
    </div>
  );
}
