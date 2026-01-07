
import React from 'react';
import { Download, Copy, Maximize2 } from 'lucide-react';

const Assets: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-700">
      <header className="mb-24">
        <span className="text-red-600 font-bold text-xs uppercase tracking-widest mb-4 block">03 / Repositório</span>
        <h2 className="text-5xl font-black tracking-tighter uppercase">Arquivos e Diretrizes</h2>
      </header>

      {/* Grid Modular section */}
      <section className="mb-32">
        <div className="flex justify-between items-end mb-12 border-b border-zinc-800 pb-4">
          <h3 className="text-3xl font-black tracking-tighter">GRID MODULAR</h3>
          <span className="text-[10px] text-zinc-500 uppercase tracking-widest">A exatidão da forma</span>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="p-8 bg-zinc-900/50 relative aspect-video overflow-hidden border border-zinc-800 group">
             {/* Grid overlay visualization */}
             <div className="absolute inset-0 grid grid-cols-12 grid-rows-12 opacity-10 group-hover:opacity-30 transition-opacity">
                {Array.from({length: 144}).map((_, i) => (
                  <div key={i} className="border-[0.5px] border-white"></div>
                ))}
             </div>
             <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-32 bg-white flex items-center justify-center">
                  <span className="text-black font-black text-xs">8x16</span>
                </div>
             </div>
          </div>
          <div className="space-y-6">
            <p className="text-zinc-400 leading-relaxed">
              Trata-se de uma guia ou malha, construída por quadrados de 1x1 e suas subdivisões de 1/2, 1/4, 1/8 em diante, formando uma proporção gradeada e harmônica.
            </p>
            <div className="bg-white/5 p-4 rounded-sm flex items-center justify-between group cursor-pointer hover:bg-white/10 transition-colors">
              <span className="text-xs font-mono">grid_modular_guide.ai</span>
              <Download size={16} className="text-red-600 group-hover:scale-125 transition-transform" />
            </div>
          </div>
        </div>
      </section>

      {/* Colors Section */}
      <section className="mb-32">
        <h3 className="text-3xl font-black tracking-tighter mb-12 uppercase">Cores do Sistema</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { name: 'Monolith Black', hex: '#000000', use: 'Background / Base' },
            { name: 'Vanguard Red', hex: '#FF0000', use: 'Highlight / Disrupt' },
            { name: 'Pure Light', hex: '#FFFFFF', use: 'Typography / Content' }
          ].map(color => (
            <div key={color.hex} className="group">
              <div 
                className="h-48 w-full mb-4 relative flex items-end p-4 border border-zinc-800 transition-transform group-hover:-translate-y-2"
                style={{ backgroundColor: color.hex }}
              >
                <button 
                  onClick={() => navigator.clipboard.writeText(color.hex)}
                  className="bg-black/50 backdrop-blur-md text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <Copy size={16} />
                </button>
              </div>
              <h4 className="font-bold text-lg">{color.name}</h4>
              <p className="text-xs text-zinc-500 uppercase tracking-widest">{color.hex}</p>
              <p className="text-[10px] text-zinc-600 mt-1 italic">{color.use}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Logo Section */}
      <section className="mb-32">
        <h3 className="text-3xl font-black tracking-tighter mb-12 uppercase">Símbolo & Logo</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { label: 'Logo Positive', bg: 'bg-white', text: 'text-black' },
            { label: 'Logo Negative', bg: 'bg-black', text: 'text-white' },
            { label: 'Symbol Only', bg: 'bg-red-600', text: 'text-white' },
            { label: 'Vertical Lockup', bg: 'bg-zinc-900', text: 'text-white' }
          ].map((item, i) => (
            <div key={i} className={`${item.bg} aspect-square p-8 flex flex-col justify-between border border-zinc-800 group cursor-pointer overflow-hidden`}>
              <div className={`${item.text} font-black text-2xl tracking-tighter transition-transform group-hover:scale-110`}>
                {i === 2 ? '▮' : 'BRICK'}
              </div>
              <div className="flex justify-between items-center">
                <span className={`${item.text} text-[10px] uppercase font-bold opacity-50`}>{item.label}</span>
                <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Download size={14} className={item.text} />
                  <Maximize2 size={14} className={item.text} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Tipografia */}
      <section>
        <h3 className="text-3xl font-black tracking-tighter mb-12 uppercase">Tipografia</h3>
        <div className="space-y-12">
          <div className="border-l-4 border-red-600 pl-8">
            <h4 className="text-[10px] text-zinc-500 uppercase tracking-widest mb-4">Primary Headings</h4>
            <p className="text-6xl md:text-8xl font-black tracking-tighter mb-4">Inter Black</p>
            <p className="text-zinc-500 max-w-xl">
              Usada para títulos de grande escala, transmitindo força e autoridade técnica. Espaçamento (kerning) deve ser negativo: -0.05em.
            </p>
          </div>
          <div className="border-l-4 border-zinc-800 pl-8">
            <h4 className="text-[10px] text-zinc-500 uppercase tracking-widest mb-4">Body Text</h4>
            <p className="text-4xl font-light tracking-tight mb-4">Inter Regular / Light</p>
            <p className="text-zinc-500 max-w-xl">
              Clareza e objetividade. Usada para descrições e manifestos. Mantém a perenidade visual do sistema.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Assets;
