// ... imports

const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-1000">
      <div className="flex justify-between items-start mb-24">
        {/* ... (cabeçalho mantém-se igual) */}
        <div>
          <h2 className="text-sm font-medium text-zinc-400">Vissotto Studio.®</h2>
          <p className="text-xs text-zinc-500 italic">Everything is design, we design everything.</p>
        </div>
        <div className="text-right">
          <p className="text-xs text-zinc-500">Projeto: <span className="text-white">Brand Mother</span></p>
          <p className="text-xs text-zinc-500">Data: <span className="text-white">{new Date().toLocaleDateString('pt-BR')}</span></p>
        </div>
      </div>

      <div className="relative mb-24 group"> {/* Margem inferior reduzida de 32 para 24 */}
        {/* Título Reduzido: de text-[10rem] para text-7xl/8xl e font-bold ao invés de font-black para mais leveza */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[0.9] mb-8 select-none">
          VISUAL<br/>IDENTITY<br/>SHOWCASE
        </h1>
        
        {/* Botão ajustado para acompanhar a nova escala */}
        <button 
          onClick={() => onNavigate(SectionId.GUIDE)}
          className="absolute bottom-0 right-0 bg-white text-black px-6 py-4 rounded-full hover:scale-105 transition-transform active:scale-95 shadow-2xl flex items-center gap-3"
        >
          <span className="font-bold uppercase tracking-widest text-xs">Entrar</span>
          <span className="text-xl">→</span>
        </button>
      </div>

      {/* Grid inferior ajustado */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-16 border-t border-zinc-800">
        <div>
          <p className="text-lg text-zinc-400 leading-relaxed max-w-md font-light">
            Overview da marca contendo o conceito, história e decisões tomadas para compor o sistema gráfico da Identidade Visual.
          </p>
        </div>
        {/* ... (restante do código) */}
      </div>
    </div>
  );
};
// ... export
