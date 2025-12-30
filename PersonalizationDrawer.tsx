
import React from 'react';
import { BrandSettings } from '../types';

interface PersonalizationDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  settings: BrandSettings;
  setSettings: React.Dispatch<React.SetStateAction<BrandSettings>>;
}

export const PersonalizationDrawer: React.FC<PersonalizationDrawerProps> = ({ isOpen, onClose, settings, setSettings }) => {
  const handleLogoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSettings(prev => ({ ...prev, logoUrl: reader.result as string }));
      };
      reader.readAsDataURL(file);
    }
  };

  const resetSettings = () => {
    setSettings({
      productName: 'Protocolo de Soberania',
      targetAudience: 'Ultra High Net Worth Individuals',
      logoUrl: null
    });
  };

  return (
    <>
      {/* Backdrop */}
      <div 
        className={`fixed inset-0 bg-black/80 backdrop-blur-sm z-[60] transition-opacity duration-700 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={onClose}
      />
      
      {/* Drawer */}
      <div className={`fixed top-0 right-0 h-full w-full md:w-[450px] bg-[#050505] z-[70] shadow-2xl border-l border-white/5 transition-transform duration-1000 p-12 overflow-y-auto ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex justify-between items-center mb-16">
          <h3 className="text-[12px] tracking-[0.5em] uppercase font-black text-[#b39359]">Brand Architect</h3>
          <button onClick={onClose} className="text-[#64748b] hover:text-white">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
          </button>
        </div>

        <div className="space-y-12">
          <div>
            <label className="text-[9px] tracking-[0.4em] uppercase font-bold text-[#64748b] mb-4 block">Identidade Visual (Logo)</label>
            <div className="flex flex-col gap-6">
              {settings.logoUrl && (
                <div className="p-4 bg-black border border-white/5 flex justify-center">
                  <img src={settings.logoUrl} alt="Preview" className="h-12 object-contain" />
                </div>
              )}
              <label className="w-full cursor-pointer bg-white/5 border border-dashed border-white/10 hover:border-[#b39359] py-8 text-center transition-all">
                <input type="file" className="hidden" accept="image/*" onChange={handleLogoUpload} />
                <span className="text-[9px] tracking-[0.3em] uppercase font-bold text-[#64748b]">Upload de Logo Oficial</span>
              </label>
            </div>
          </div>

          <div>
            <label className="text-[9px] tracking-[0.4em] uppercase font-bold text-[#64748b] mb-4 block">Nome do Produto/Serviço</label>
            <input 
              type="text" 
              value={settings.productName}
              onChange={(e) => setSettings(prev => ({ ...prev, productName: e.target.value }))}
              className="w-full bg-transparent border-b border-white/10 py-3 focus:border-[#b39359] outline-none transition-all text-xs tracking-widest uppercase font-bold"
            />
          </div>

          <div>
            <label className="text-[9px] tracking-[0.4em] uppercase font-bold text-[#64748b] mb-4 block">Público-Alvo Estratégico</label>
            <input 
              type="text" 
              value={settings.targetAudience}
              onChange={(e) => setSettings(prev => ({ ...prev, targetAudience: e.target.value }))}
              className="w-full bg-transparent border-b border-white/10 py-3 focus:border-[#b39359] outline-none transition-all text-xs tracking-widest uppercase font-bold"
            />
          </div>

          <div className="pt-12 space-y-4">
            <button 
              onClick={onClose}
              className="w-full bg-[#b39359] text-black py-4 text-[10px] tracking-[0.4em] uppercase font-black"
            >
              Salvar Alterações
            </button>
            <button 
              onClick={resetSettings}
              className="w-full border border-white/10 text-white py-4 text-[10px] tracking-[0.4em] uppercase font-black hover:bg-white/5 transition-colors"
            >
              Resetar para Padrão
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
