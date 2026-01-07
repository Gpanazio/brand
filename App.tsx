import React, { useState } from 'react';
import { Download, Copy, Bot, Check, ArrowDown, ChevronRight } from 'lucide-react';

const App: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-black text-white selection:bg-red-600 selection:text-white font-['Inter'] scroll-smooth">
      
      {/* --- 00. HERO --- */}
      <section className="min-h-screen flex flex-col justify-between p-6 md:p-12 border-b border-zinc-900 relative overflow-hidden">
        <div className="flex justify-between items-start z-10">
          <div>
            <h1 className="text-xl font-black tracking-tighter uppercase">BRICK.®</h1>
            <p className="text-[10px] text-zinc-500 uppercase tracking-widest mt-1">Repository v.25.01</p>
          </div>
          <div className="text-right">
            <nav className="hidden md:flex gap-8 text-[10px] uppercase tracking-widest font-bold">
              <a href="#monolith" className="hover:text-red-600 transition-colors">01 Monolith</a>
              <a href="#grid" className="hover:text-red-600 transition-colors">02 Grid</a>
              <a href="#logo" className="hover:text-red-600 transition-colors">03 Logo</a>
              <a href="#colors" className="hover:text-red-600 transition-colors">04 Colors</a>
              <a href="#typography" className="hover:text-red-600 transition-colors">05 Type</a>
            </nav>
          </div>
        </div>

        <div className="z-10 flex flex-col items-center justify-center flex-1">
          <div className="relative group w-full max-w-[80vw] flex justify-center">
             <img 
               src="/brick-logo-white.png" 
               alt="BRICK" 
               className="w-full h-auto max-h-[15vh] md:max-h-[20vh] object-contain select-none group-hover:scale-105 transition-transform duration-1000 ease-out"
             />
            <div className="absolute -bottom-12 right-0 text-red-600 font-black text-[10px] tracking-[0.2em] uppercase opacity-80">
              Brand Assets Mother
            </div>
          </div>
        </div>

        <div className="flex justify-between items-end z-10">
          <div className="max-w-xs md:max-w-sm">
            <p className="text-[11px] text-zinc-400 leading-relaxed uppercase tracking-tight">
              A arquitetura mãe de ativos. Ensinando humanos e sistemas de IA a aplicar o rigor técnico e a estética da BRICK em cada pixel.
            </p>
          </div>
          <a href="#monolith" className="flex flex-col items-center gap-4 group">
             <span className="text-[10px] uppercase tracking-widest text-zinc-600 group-hover:text-white transition-colors">Acessar</span>
             <ArrowDown size={16} className="animate-bounce text-red-600" />
          </a>
        </div>
      </section>

      {/* --- 01. THE MONOLITH --- */}
      <section id="monolith" className="py-24 px-6 md:px-12 border-b border-zinc-900">
        <div className="max-w-7xl mx-auto">
          <span className="text-red-600 font-bold text-xs uppercase tracking-widest mb-4 block">01 / Símbolo</span>
          {/* Título Ajustado: de text-8xl para text-6xl */}
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-16 uppercase">O MONOLITO</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="grid grid-cols-2 gap-4">
               {/* Solid Monolith */}
               <div className="relative aspect-[1/2] bg-zinc-950 flex flex-col items-center justify-center border border-zinc-900 group">
                  <div className="w-2/3 h-2/3 bg-white transition-all duration-700 group-hover:bg-red-600"></div>
                  <span className="absolute bottom-4 text-[8px] font-mono text-zinc-700 uppercase tracking-widest">Sólido</span>
               </div>
               {/* Hollow Monolith */}
               <div className="relative aspect-[1/2] bg-zinc-950 flex flex-col items-center justify-center border border-zinc-900 group">
                  <div className="w-2/3 h-2/3 border-2 border-white transition-all duration-700 group-hover:border-red-600"></div>
                  <span className="absolute bottom-4 text-[8px] font-mono text-zinc-700 uppercase tracking-widest">Vazado</span>
               </div>
            </div>
            <div className="space-y-12">
              <div>
                <h3 className="text-3xl font-black tracking-tighter mb-6 uppercase">Presença & Rigor</h3>
                <p className="text-xl text-zinc-400 leading-relaxed">
                  O monolito é a fundação da BRICK. Ele existe como uma forma pura que impõe ordem e estabilidade. Sua variação <span className="text-white font-bold">sólida</span> carrega o peso da marca, enquanto a versão <span className="text-white font-bold">vazada</span> permite que o conteúdo respire sem perder a estrutura.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-zinc-800 pt-12">
                <div>
                   <h4 className="text-[10px] text-zinc-500 uppercase tracking-widest mb-2">Proporção</h4>
                   <p className="text-lg font-bold">Vertical Rigorosa</p>
                </div>
                <div>
                   <h4 className="text-[10px] text-zinc-500 uppercase tracking-widest mb-2">Aplicação</h4>
                   <p className="text-lg font-bold">Focal ou Estrutural</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- 02. MODULAR GRID --- */}
      <section id="grid" className="py-24 bg-zinc-950 px-6 md:px-12 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <span className="text-red-600 font-bold text-xs uppercase tracking-widest mb-4 block">02 / Estrutura</span>
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-16 uppercase">GRID MODULAR</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4 space-y-12">
              <div className="space-y-6">
                <p className="text-zinc-200 text-lg leading-snug font-medium italic">
                  Trata-se de uma guia ou malha, construída por quadrados de 1x1 e suas subdivisões de 1/2, 1/4, 1/8 em diante, formando uma proporção gradeada e harmônica para auxiliar na criação visual.
                </p>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  Com essa técnica, conseguimos obter a exatidão e proporção ideal dos elementos e detalhes da forma, justificando todo o trabalho.
                </p>
              </div>
              <div className="border-l-2 border-red-600 pl-6 py-2">
                 <p className="text-[10px] uppercase tracking-widest text-zinc-500 mb-2">Engenharia Visual</p>
                 <p className="text-sm text-zinc-300">A malha modular BRICK garante que IAs gerem layouts coerentes com a proporção áurea da marca... Não é só sobre IA, é sobre qualquer um.</p>
              </div>
            </div>
            
            <div className="lg:col-span-8 bg-black border border-zinc-900 aspect-video relative group overflow-hidden p-8 flex items-center justify-center">
               <div className="relative w-full h-full border border-zinc-800 bg-zinc-900/10">
                  <div className="absolute inset-0 grid grid-cols-[repeat(24,1fr)] grid-rows-[repeat(12,1fr)] opacity-20 pointer-events-none">
                     {Array.from({length: 288}).map((_, i) => (
                       <div key={i} className="border-[0.5px] border-white"></div>
                     ))}
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center gap-[5%] px-12 pointer-events-none">
                     <div className="w-full h-full flex items-center justify-center relative opacity-60 group-hover:opacity-100 transition-opacity">
                        <div className="absolute left-[12%] w-[32%] aspect-square border border-zinc-500 rounded-full flex items-center justify-center">
                           <div className="w-1/2 h-1/2 border border-zinc-700 rounded-full"></div>
                        </div>
                        <div className="absolute right-[12%] w-[32%] aspect-square border border-zinc-500 rounded-full flex items-center justify-center">
                           <div className="w-1/2 h-1/2 border border-zinc-700 rounded-full"></div>
                        </div>
                        <div className="absolute top-4 left-4 w-[3%] aspect-square border border-zinc-400 rounded-full"></div>
                        <div className="absolute top-4 right-4 w-[3%] aspect-square border border-zinc-400 rounded-full"></div>
                        <div className="absolute bottom-4 left-4 w-[3%] aspect-square border border-zinc-400 rounded-full"></div>
                        <div className="absolute bottom-4 right-4 w-[3%] aspect-square border border-zinc-400 rounded-full"></div>
                     </div>
                  </div>
               </div>
               <div className="absolute bottom-4 right-4 font-mono text-[8px] text-zinc-600 uppercase">GRID_CONSTRUCTION_ENABLED</div>
            </div>
          </div>
        </div>
      </section>

      {/* --- 03. LOGO VARIATIONS --- */}
      <section id="logo" className="py-24 px-6 md:px-12 border-b border-zinc-900">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div>
              <span className="text-red-600 font-bold text-xs uppercase tracking-widest mb-4 block">03 / Identidade</span>
              <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase leading-[0.9]">MARCA MÃE</h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { label: 'Monolito Positivo', bg: 'bg-white', invert: true, img: '/brick-logo-white.png' },
              { label: 'Monolito Negativo', bg: 'bg-black', invert: false, border: 'border border-zinc-800', img: '/brick-logo-white.png' },
              { label: 'Monolito Highlight', bg: 'bg-red-600', invert: false, img: '/brick-logo-white.png' },
              { label: 'Monolito Símbolo', bg: 'bg-zinc-900', invert: false, border: 'border border-zinc-800', img: '/brick-monolith.png', isSymbol: true }
            ].map((v, i) => (
              <div key={i} className="flex flex-col items-center group">
                 {/* Aspect Ratio ajustado de [2/3] para square para economizar altura */}
                 <div className={`${v.bg} ${v.border || ''} aspect-square w-full flex flex-col items-center justify-center p-8 relative overflow-hidden transition-all duration-500 hover:scale-[1.02] cursor-pointer`}>
                    <img 
                      src={v.img} 
                      alt={v.label} 
                      className={`
                        ${v.isSymbol ? 'h-3/5 w-auto' : 'w-full'} 
                        ${v.invert ? 'invert' : ''} 
                        object-contain transition-transform group-hover:scale-110 z-10
                      `}
                    />
                 </div>
                 <span className="mt-4 text-[10px] uppercase font-bold tracking-widest text-zinc-500">{v.label}</span>
              </div>
            ))}
          </div>
          
          <div className="mt-16 flex justify-center">
            <a 
              href="https://drive.google.com/drive/u/1/folders/1K0IwFLr_Pw7whYcdEuQLsEWtlTvSzg6_" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-4 border border-zinc-800 px-10 py-5 group hover:bg-white hover:text-black transition-all"
            >
              <span className="text-[10px] font-black uppercase tracking-[0.3em]">Download Asset Bundle (ZIP)</span>
              <Download size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* --- 04. COLORS --- */}
      <section id="colors" className="py-24 px-6 md:px-12 bg-zinc-950">
        <div className="max-w-7xl mx-auto">
          <span className="text-red-600 font-bold text-xs uppercase tracking-widest mb-4 block">04 / Cromatismo</span>
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-16 uppercase">CORES</h2>
          
          {/* Altura reduzida de 450px para 320px para maior elegância */}
          <div className="grid grid-cols-1 lg:grid-cols-3 h-[320px] gap-2">
            {[
              { name: 'Pure Black', hex: '#000000', ratio: '90%', textColor: 'text-white' },
              { name: 'Pure Red', hex: '#FF0000', ratio: '2%', textColor: 'text-white' },
              { name: 'Pure White', hex: '#FFFFFF', ratio: '8%', textColor: 'text-black' }
            ].map((color, i) => (
              <div 
                key={i} 
                className="relative group overflow-hidden cursor-pointer flex flex-col justify-end p-8"
                style={{ backgroundColor: color.hex }}
                onClick={() => handleCopy(color.hex)}
              >
                <div className={`relative z-10 ${color.textColor}`}>
                  <h4 className="text-3xl font-black tracking-tighter uppercase">{color.name}</h4>
                  <div className="flex justify-between items-center mt-2">
                    <p className="text-xs font-mono">{color.hex}</p>
                    <p className="text-2xl font-black opacity-30">{color.ratio}</p>
                  </div>
                </div>
                <div className={`absolute top-8 right-8 ${color.textColor} opacity-0 group-hover:opacity-100 transition-opacity`}>
                  <Copy size={16} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- 05. TYPOGRAPHY --- */}
      <section id="typography" className="py-24 px-6 md:px-12 bg-zinc-950 border-b border-zinc-900">
        <div className="max-w-7xl mx-auto">
          <span className="text-red-600 font-bold text-xs uppercase tracking-widest mb-4 block">05 / Tipografia</span>
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-16 uppercase">SISTEMA DE FONTES</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
            {/* Coluna de Texto e Regras */}
            <div className="lg:col-span-5 space-y-12">
              <div>
                  <div className="flex justify-between items-baseline mb-6">
                    <h3 className="text-[10px] text-red-600 font-black uppercase tracking-[0.4em]">Fonte Primária</h3>
                    <a href="https://fonts.google.com/specimen/Inter" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-zinc-500 hover:text-white transition-colors">
                        <Download size={12} />
                        Download Inter
                    </a>
                  </div>
                  {/* Tamanho reduzido para não competir com o título da seção */}
                  <p className="text-6xl md:text-8xl font-black tracking-tighter leading-none mb-4">INTER</p>
                  <p className="text-zinc-400 text-lg leading-relaxed">
                    A tipografia BRICK é baseada na Inter, escolhida por sua legibilidade neutra e precisão técnica. Nos títulos, utilizamos o peso <span className="text-white font-bold">Black</span> com tracking negativo de <span className="text-white font-bold">-0.05em</span>.
                  </p>
                  <p className="text-zinc-500 text-sm mt-4 leading-relaxed italic border-l border-zinc-800 pl-4">
                    Para manifestos e descrições, a <span className="text-white font-medium italic">Inter Light (300)</span> traz clareza e objetividade, garantindo a perenidade visual e o contraste necessário com o peso dos títulos.
                  </p>
              </div>

              {/* Tabela de Pesos */}
              <div className="space-y-4 pt-8">
                  <div className="flex justify-between border-b border-zinc-900 pb-2">
                    <span className="text-xs uppercase tracking-widest text-zinc-500">Títulos de Impacto</span>
                    <span className="text-xs font-black uppercase">Inter Black / -5% Tracking</span>
                  </div>
                  <div className="flex justify-between border-b border-zinc-900 pb-2">
                    <span className="text-xs uppercase tracking-widest text-zinc-500">Manifestos & Apoio</span>
                    <span className="text-xs font-light uppercase">Inter Light (300)</span>
                  </div>
                  <div className="flex justify-between border-b border-zinc-900 pb-2">
                    <span className="text-xs uppercase tracking-widest text-zinc-500">Textos Técnicos</span>
                    <span className="text-xs font-mono uppercase">JetBrains Mono</span>
                  </div>
              </div>
            </div>

            {/* Coluna de Specimen Visual */}
            <div className="lg:col-span-7 bg-black border border-zinc-900 p-12 relative group overflow-hidden">
              <div className="absolute top-0 right-0 p-4 text-[8px] font-mono text-zinc-700 tracking-widest">SPECIMEN_BRK_05</div>
              <div className="space-y-12">
                  <div className="space-y-4">
                    <div>
                      <p className="text-[10px] text-zinc-700 uppercase mb-2">Weight 900</p>
                      <p className="text-6xl md:text-8xl font-black tracking-tighter leading-none">AaBbCc</p>
                    </div>
                    <div className="pt-4">
                      <p className="text-[10px] text-zinc-700 uppercase mb-2">Weight 300</p>
                      <p className="text-4xl md:text-6xl font-light tracking-tight leading-none text-zinc-400">AaBbCc</p>
                    </div>
                  </div>
                  
                  <div className="border-t border-zinc-900 pt-8">
                    <p className="text-2xl font-light leading-relaxed text-zinc-300 max-w-lg italic">
                      "O design BRICK é um exercício de remoção. Se a fonte não comunica estrutura, ela é ruído."
                    </p>
                  </div>

                  <div className="flex gap-4 items-end">
                    <div className="w-16 h-24 bg-white flex items-center justify-center font-black text-black text-4xl">B</div>
                    <div className="w-16 h-24 bg-zinc-900 flex items-center justify-center font-light text-white text-4xl border border-zinc-800">r</div>
                    <div className="w-16 h-24 bg-red-600 flex items-center justify-center font-black text-white text-4xl">i</div>
                    <div className="w-16 h-24 bg-zinc-900 flex items-center justify-center font-light text-zinc-500 text-4xl border border-zinc-800">k</div>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- 06. AI DIRECTIVE --- */}
      <section className="py-24 px-6 md:px-12 bg-black border-t border-zinc-900">
        <div className="max-w-3xl mx-auto text-center md:text-left">
           <div className="flex items-center justify-center md:justify-start gap-4 mb-8">
              <Bot size={20} className="text-red-600" />
              <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">AI SYSTEM INSTRUCTION</span>
           </div>
           <h2 className="text-3xl md:text-4xl font-black tracking-tighter mb-12 uppercase">Ensinando a Inteligência a Construir</h2>
           
           <div className="bg-zinc-900/50 border border-zinc-800 p-8 rounded-sm font-mono text-sm leading-relaxed text-zinc-400 group relative">
              <p className="mb-6 text-red-600 font-bold uppercase tracking-tighter">System.Directive.BRICK</p>
              <p>Ao gerar layouts para a marca BRICK: Fundo deve ser Preto (#000). Use tipografia branca em Inter Black com tracking negativo de -0.05em. Elementos disruptivos devem ser Vermelho Puro (#FF0000). A forma mestre é o Monolito (retângulo vertical proporção 2:3 ou similar). Mantenha alinhamento absoluto ao Grid Modular.</p>
              
              <button 
                onClick={() => handleCopy("Instrução de Design: Brutalismo Minimalista. Paleta #000, #FFF, #FF0000. Grid Modular 1x1. Forma mestre: Monolito.")}
                className="mt-8 flex items-center gap-3 text-white bg-zinc-800 px-6 py-3 text-[10px] font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all"
              >
                {copied ? <Check size={14} /> : <Copy size={14} />}
                {copied ? 'Diretriz Copiada' : 'Copiar Prompt de Sistema'}
              </button>
           </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="py-20 px-6 md:px-12 border-t border-zinc-900">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12 text-zinc-500 uppercase">
          <div className="text-center md:text-left">
            <h5 className="text-2xl font-black tracking-tighter text-white">BRICK.</h5>
            <p className="text-[10px] tracking-widest mt-1">Mother Asset Repository</p>
          </div>
          <p className="text-[10px] tracking-widest font-bold">Everything is logic. We build everything.</p>
          <p className="text-zinc-400 text-[10px] tracking-tighter font-mono">© 2025 BRICK SYSTEM.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
