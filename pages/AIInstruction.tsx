
import React, { useState } from 'react';
import { Bot, Copy, Check } from 'lucide-react';

const AIInstruction: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const promptText = `Atue como um Designer Sênior do Vissotto Studio. 
Diretrizes Visuais:
1. Estética: Brutalismo minimalista, alto contraste.
2. Paleta: Preto (#000000) predominante, Branco (#FFFFFF) para tipografia, Vermelho Puro (#FF0000) para destaques disruptivos.
3. Formas: Uso do "Monolito" (retângulos verticais pretos ou brancos).
4. Tipografia: Estilo Suíço/Helvetica (Sans-serif pesada), tracking negativo nos títulos.
5. Grid: Layouts baseados em malha modular 1x1 rígida.
6. Fotografia: Cinematic, alto contraste, granulado sutil, inspiração em Stanley Kubrick (2001: Uma Odisséia no Espaço).
7. Tom de Voz: Prático, empírico, inovador e direto.

Ao criar layouts, priorize o espaço negativo e a hierarquia tipográfica agressiva.`;

  const handleCopy = () => {
    navigator.clipboard.writeText(promptText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="animate-in fade-in duration-700">
      <header className="mb-24">
        <span className="text-red-600 font-bold text-xs uppercase tracking-widest mb-4 block">04 / IA Training</span>
        <h2 className="text-5xl font-black tracking-tighter uppercase">Ensinando a Inteligência</h2>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div className="space-y-8">
          <div className="flex items-center gap-4 text-zinc-400">
            <Bot size={32} />
            <h3 className="text-2xl font-bold">Prompting para Coerência</h3>
          </div>
          <p className="text-zinc-400 leading-relaxed text-lg">
            Para garantir que as ferramentas de IA Generativa (Midjourney, DALL-E, Claude Artifacts) mantenham a integridade da marca Vissotto Studio, utilize o System Prompt estruturado ao lado.
          </p>
          <div className="space-y-6">
            <h4 className="text-xs font-bold uppercase tracking-widest text-zinc-600">Keywords Chave</h4>
            <div className="flex flex-wrap gap-3">
              {['Monolith', 'Swiss Design', 'Kubrickian', 'High Contrast', 'Brutalist', 'Disruptive Red', 'Modular Grid'].map(tag => (
                <span key={tag} className="px-3 py-1 bg-red-600/10 text-red-600 border border-red-600/20 text-[10px] font-bold uppercase">{tag}</span>
              ))}
            </div>
          </div>
        </div>

        <div className="relative group">
          <div className="bg-zinc-900 border border-zinc-800 p-8 rounded-sm font-mono text-sm text-zinc-400 whitespace-pre-wrap leading-relaxed min-h-[400px]">
            {promptText}
          </div>
          <button 
            onClick={handleCopy}
            className="absolute top-4 right-4 bg-white text-black p-3 rounded-full hover:scale-110 transition-transform flex items-center gap-2"
          >
            {copied ? <Check size={18} /> : <Copy size={18} />}
            <span className="text-[10px] font-bold uppercase">{copied ? 'Copiado' : 'Copiar Prompt'}</span>
          </button>
        </div>
      </div>

      <div className="mt-32 p-12 bg-white text-black flex items-center justify-between">
        <div>
          <h4 className="text-2xl font-black tracking-tighter mb-2 italic">A IA é nossa ferramenta, não o mestre.</h4>
          <p className="text-zinc-600">Use os princípios para filtrar e refinar cada saída.</p>
        </div>
        <div className="text-6xl">🤖</div>
      </div>
    </div>
  );
};

export default AIInstruction;
