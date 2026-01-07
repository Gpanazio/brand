
import React from 'react';

const Showcase: React.FC = () => {
  const applications = [
    { title: 'Out of Home', category: 'Publicidade', img: 'https://picsum.photos/seed/vissotto-ooh/1200/600' },
    { title: 'Filmmaking House', category: 'Stationery', img: 'https://picsum.photos/seed/vissotto-stat/800/800' },
    { title: 'Merchandising', category: 'Apparel', img: 'https://picsum.photos/seed/vissotto-app/800/800' },
    { title: 'Digital Presence', category: 'Web', img: 'https://picsum.photos/seed/vissotto-web/1200/800' }
  ];

  return (
    <div className="animate-in fade-in duration-700">
      <header className="mb-24">
        <span className="text-red-600 font-bold text-xs uppercase tracking-widest mb-4 block">05 / Showcase</span>
        <h2 className="text-5xl font-black tracking-tighter uppercase">Aplicações Práticas</h2>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {applications.map((app, i) => (
          <div key={i} className={`group cursor-pointer ${i % 3 === 0 ? 'md:col-span-2' : ''}`}>
            <div className="relative overflow-hidden mb-6 aspect-video bg-zinc-900">
              <img 
                src={app.img} 
                alt={app.title} 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000" 
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                 <span className="bg-white text-black px-6 py-3 font-bold uppercase tracking-widest text-xs">Ver Detalhes</span>
              </div>
            </div>
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-2xl font-black tracking-tighter uppercase">{app.title}</h3>
                <p className="text-[10px] text-zinc-500 uppercase tracking-[0.2em]">{app.category}</p>
              </div>
              <div className="text-zinc-700 font-mono text-xs">#APPLICATION_ID_{i+100}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-40 text-center border-t border-zinc-900 pt-32 mb-16">
        <h2 className="text-9xl font-black tracking-tighter opacity-10 select-none mb-12">GRAND FINALE</h2>
        <p className="text-zinc-500 italic max-w-lg mx-auto">
          "The monolith does not explain itself. It is simply there. It is the beginning and the end. Like good design."
        </p>
        <div className="mt-20 flex justify-center">
          <div className="w-px h-32 bg-gradient-to-b from-red-600 to-transparent"></div>
        </div>
      </div>
    </div>
  );
};

export default Showcase;
