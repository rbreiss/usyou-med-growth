
import React, { useState } from 'react';

export const VideoBriefing: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section id="briefing" className="py-24 bg-black px-6 md:px-24 scroll-mt-32">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-16 md:gap-24">
          <div className="flex-1 space-y-8">
            <span className="text-[#b39359] text-[10px] tracking-[0.8em] uppercase font-bold block">Como funciona</span>
            <h2 className="font-serif-elite text-4xl md:text-5xl font-light leading-tight text-white">
              A Estratégia por trás do <br/>
              <span className="italic">Med Growth</span>
            </h2>
            <p className="text-[#64748b] text-lg leading-relaxed">
              Neste vídeo de 2 minutos, eu explico como conectamos sua clínica à nossa plataforma e como identificamos oportunidades que a sua recepção deixa passar todos os dias.
            </p>
            <div className="flex items-center gap-4 text-[#b39359]">
              <div className="w-12 h-px bg-[#b39359]"></div>
              <span className="text-[10px] tracking-[0.4em] uppercase font-black">Play para entender o processo</span>
            </div>
          </div>

          <div className="flex-1 w-full relative group cursor-pointer" onClick={() => setIsOpen(true)}>
            {/* Thumbnail Placeholder with Elite Aesthetic */}
            <div className="aspect-video bg-[#0a0a0a] border border-white/10 overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
              <img 
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=1000" 
                alt="Process Preview" 
                className="w-full h-full object-cover grayscale opacity-40 group-hover:scale-105 transition-transform duration-1000"
              />
              
              {/* Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-24 h-24 rounded-full border border-[#b39359]/30 flex items-center justify-center bg-black/40 backdrop-blur-sm group-hover:scale-110 transition-all duration-700">
                  <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[18px] border-l-[#b39359] border-b-[10px] border-b-transparent ml-2"></div>
                </div>
              </div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-r border-b border-[#b39359]/20 -z-10 group-hover:bottom-[-8px] group-hover:right-[-8px] transition-all duration-700"></div>
          </div>
        </div>
      </div>

      {/* Video Modal (Lightbox) */}
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 md:p-12">
          <div className="absolute inset-0 bg-black/95 backdrop-blur-2xl" onClick={() => setIsOpen(false)}></div>
          <div className="relative w-full max-w-5xl aspect-video bg-black border border-white/10 shadow-2xl animate-in zoom-in-95 duration-500">
            <button 
              onClick={() => setIsOpen(false)}
              className="absolute -top-12 right-0 text-white/50 hover:text-white text-[10px] tracking-widest uppercase font-bold"
            >
              [ Fechar ]
            </button>
            
            {/* Substitua o src abaixo pela URL do seu vídeo (YouTube/Vimeo/Wistia) */}
            <iframe 
              className="w-full h-full"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1" 
              title="USYOU Med Growth Process"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </section>
  );
};
