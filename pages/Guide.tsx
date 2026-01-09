
import React from 'react';

const Guide: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-700">
      <header className="mb-24">
        <span className="text-red-600 font-bold text-xs uppercase tracking-widest mb-4 block">01 / Conceito</span>
        <h2 className="text-5xl font-black tracking-tighter">DIAGNÓSTICO DE MARCA</h2>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-32">
        <div className="space-y-8">
          <h3 className="text-3xl font-bold tracking-tight border-b border-zinc-800 pb-4">A Essência</h3>
          <p className="text-zinc-400 leading-relaxed text-lg">
            Nossa jornada começa na compreensão profunda. Não apenas visualizamos; destrinchamos todo o processo de desenvolvimento, sublinhando etapas cruciais para o entendimento das escolhas e soluções apresentadas.
          </p>
          <p className="text-zinc-400 leading-relaxed text-lg">
            As decisões visuais são o combustível para o crescimento no mercado. Somos movidos pela necessidade de resolver e solucionar problemas reais através do design.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <img src="https://picsum.photos/seed/brick1/400/600" alt="Concept 1" className="grayscale hover:grayscale-0 transition-all duration-700 rounded-sm" />
          <img src="https://picsum.photos/seed/brick2/400/600" alt="Concept 2" className="grayscale hover:grayscale-0 transition-all duration-700 rounded-sm mt-12" />
        </div>
      </div>

      <div className="space-y-12">
        <h3 className="text-xs font-bold uppercase tracking-[0.3em] text-zinc-500 mb-8">Guias Institucionais</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { from: 'CULTURA', to: 'CRIATIVIDADE' },
            { from: 'PRODUTORA', to: 'AUDIOVISUAL' },
            { from: 'SOLUCIONAR', to: 'INOVAR' }
          ].map((item, i) => (
            <div key={i} className="bg-zinc-900 p-8 flex flex-col items-center justify-center space-y-6 group hover:bg-white hover:text-black transition-all duration-500 border border-zinc-800">
              <span className="text-xs tracking-widest opacity-50">{item.from}</span>
              <span className="text-2xl">→</span>
              <span className="font-black text-xl tracking-tighter">{item.to}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-32 p-12 bg-white text-black">
        <div className="max-w-3xl">
          <h3 className="text-4xl font-black tracking-tighter mb-8 italic">O Monolito</h3>
          <p className="text-lg leading-relaxed mb-6 font-medium">
            Representa algo além da compreensão. Sua presença constante ao longo da narrativa torna-se um símbolo marcante da busca humana pelo desconhecido e pelo transcendental.
          </p>
          <div className="w-16 h-32 bg-black"></div>
        </div>
      </div>
    </div>
  );
};

export default Guide;
