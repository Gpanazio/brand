
import React from 'react';
import { SectionId } from '../types';

interface HomeProps {
  onNavigate: (id: SectionId) => void;
}

const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-1000">
      <div className="flex justify-between items-start mb-24">
        <div>
          <h2 className="text-sm font-medium text-zinc-400">Vissotto Studio.®</h2>
          <p className="text-xs text-zinc-500 italic">Everything is design, we design everything.</p>
        </div>
        <div className="text-right">
          <p className="text-xs text-zinc-500">Projeto: <span className="text-white">Brand Mother</span></p>
          <p className="text-xs text-zinc-500">Data: <span className="text-white">{new Date().toLocaleDateString('pt-BR')}</span></p>
        </div>
      </div>

      <div className="relative mb-32 group">
        <h1 className="text-7xl md:text-8xl lg:text-[10rem] font-black tracking-tighter leading-none mb-12 select-none">
          VISUAL<br/>IDENTITY<br/>SHOWCASE
        </h1>
        <button 
          onClick={() => onNavigate(SectionId.GUIDE)}
          className="absolute bottom-0 right-0 bg-white text-black px-8 py-6 rounded-full hover:scale-110 transition-transform active:scale-95 shadow-2xl flex items-center gap-4"
        >
          <span className="font-bold uppercase tracking-widest">Entrar</span>
          <span className="text-2xl">→</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-24 border-t border-zinc-800">
        <div>
          <p className="text-xl text-zinc-400 leading-relaxed max-w-md">
            Overview da marca contendo o conceito, história e decisões tomadas para compor o sistema gráfico da Identidade Visual.
          </p>
        </div>
        <div className="flex flex-col justify-end items-end space-y-4">
          <div className="w-12 h-[200px] bg-zinc-900 overflow-hidden group">
            <div className="w-full h-full bg-red-600 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-1000 ease-out"></div>
          </div>
          <p className="text-[10px] uppercase tracking-widest text-zinc-600 rotate-90 origin-right translate-y-12 whitespace-nowrap">The Monolith Principles</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
