
import React from 'react';
import { ATTRIBUTES } from '../constants';

const Principles: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-700">
      <header className="mb-24">
        <span className="text-red-600 font-bold text-xs uppercase tracking-widest mb-4 block">02 / Princípios</span>
        <h2 className="text-5xl font-black tracking-tighter">ATRIBUTOS DA MARCA</h2>
      </header>

      <div className="space-y-32">
        {ATTRIBUTES.map((attr, index) => (
          <section key={index} className="grid grid-cols-1 lg:grid-cols-12 gap-12 border-t border-zinc-800 pt-16 group">
            <div className="lg:col-span-4">
              <div className="flex items-center gap-4 mb-8">
                <span className="w-8 h-8 rounded-full border border-zinc-600 flex items-center justify-center text-xs font-bold">{index + 1}</span>
                <h3 className="text-4xl font-black tracking-tighter group-hover:text-red-600 transition-colors">{attr.title}</h3>
              </div>
              <div className="space-y-8">
                <div>
                  <h4 className="text-[10px] uppercase tracking-widest text-zinc-500 mb-2">Manifesto</h4>
                  <p className="text-zinc-300 leading-relaxed italic">"{attr.manifesto}"</p>
                </div>
                <div>
                  <h4 className="text-[10px] uppercase tracking-widest text-zinc-500 mb-2">Verbos & Ações</h4>
                  <div className="flex flex-wrap gap-2">
                    {attr.verbs.map(v => (
                      <span key={v} className="bg-zinc-900 px-3 py-1 text-xs rounded-sm border border-zinc-800">→ {v}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-zinc-900/50 p-8 rounded-sm">
                <h4 className="text-[10px] uppercase tracking-widest text-zinc-500 mb-4">Atributos Associados</h4>
                <ul className="space-y-2">
                  {attr.associated.map(a => (
                    <li key={a} className="text-lg font-bold text-white flex items-center gap-2">
                      <span className="text-red-600">+</span> {a}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-zinc-900/20 p-8 rounded-sm">
                <h4 className="text-[10px] uppercase tracking-widest text-zinc-500 mb-4">Atributos Antagônicos</h4>
                <ul className="space-y-2">
                  {attr.antagonistic.map(a => (
                    <li key={a} className="text-lg font-bold text-zinc-600 flex items-center gap-2 line-through">
                      <span>-</span> {a}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="md:col-span-2 p-8 border-l-4 border-red-600 bg-red-600/5">
                <h4 className="text-[10px] uppercase tracking-widest text-red-600 mb-2">Lembrete</h4>
                <p className="text-zinc-400 text-sm leading-relaxed">{attr.note}</p>
              </div>
            </div>
          </section>
        ))}
      </div>

      <div className="mt-40 p-20 bg-zinc-900 text-center">
        <h3 className="text-3xl font-black tracking-tighter mb-4 italic">Perfil do Vanguardista</h3>
        <p className="text-zinc-500 max-w-xl mx-auto mb-12">Evolução, Preparo & Inovação. O vanguardista não espera o futuro; ele o materializa através do rigor técnico e audácia criativa.</p>
        <div className="flex justify-center gap-1">
          {[1,2,3,4,5,6,7,8].map(i => (
             <div key={i} className={`w-8 h-8 ${i % 2 === 0 ? 'bg-red-600' : 'bg-black'}`}></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Principles;
