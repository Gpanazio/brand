
import { NavItem, SectionId, BrandAttribute } from './types';

export const NAV_ITEMS: NavItem[] = [
  { id: SectionId.MONOLITH, label: 'Monolith' },
  { id: SectionId.GRID, label: 'Grid' },
  { id: SectionId.LOGO, label: 'Logo' },
  { id: SectionId.COLORS, label: 'Colors' },
  { id: SectionId.TYPOGRAPHY, label: 'Type' },
  { id: SectionId.AI, label: 'AI' },
];

export const BRAND_COLOR_PRIMARY = '#ff0000'; // Pure Red from PDF
export const BRAND_BG_DARK = '#000000';
export const BRAND_TEXT_WHITE = '#ffffff';

export const LOGO_VARIATIONS = [
  { label: 'Monolito Positivo', bg: 'bg-white', invert: true, img: '/brick-logo-white.png' },
  { label: 'Monolito Negativo', bg: 'bg-black', invert: false, border: 'border border-zinc-800', img: '/brick-logo-white.png' },
  { label: 'Monolito Highlight', bg: 'bg-red-600', invert: false, img: '/brick-logo-white.png' },
  { label: 'Monolito Símbolo', bg: 'bg-zinc-900', invert: false, border: 'border border-zinc-800', img: '/brick-monolith.png', isSymbol: true }
];

export const COLOR_PALETTE = [
  { name: 'Pure Black', hex: '#000000', ratio: '90%', textColor: 'text-white' },
  { name: 'Pure Red', hex: '#FF0000', ratio: '2%', textColor: 'text-white' },
  { name: 'Pure White', hex: '#FFFFFF', ratio: '8%', textColor: 'text-black' }
];

export const ATTRIBUTES: BrandAttribute[] = [
  {
    title: 'Disruptiva',
    manifesto: 'Estar estabelecido não é sinônimo de estar correto. É necessário que o fluxo de mudanças seja mantido, pois somente mediante inovações contínuas é possível construir algo novo.',
    associated: ['Inovadora', 'Intensa', 'Desejosa'],
    antagonistic: ['Acomodada', 'Padrão', 'Engessada'],
    verbs: ['Criar', 'Mudar', 'Alterar'],
    note: 'O apego ao passado pode gerar estagnação. É preciso dinamitar o que existe e recriar.'
  },
  {
    title: 'Aventureira',
    manifesto: 'Motivada pela experimentação do que há de novo, é preciso alinhar suas metas com a possibilidade de viver o que ainda é desconhecido.',
    associated: ['Destemida', 'Ousada', 'Corajosa'],
    antagonistic: ['Desafortunada', 'Estagnada', 'Tediosa'],
    verbs: ['Desbravar', 'Instigar', 'Explorar'],
    note: 'Estar estagnado é sinônimo de tédio. A vida deve ser explorada e a autenticidade encontrada a cada esquina.'
  },
  {
    title: 'Trabalhadora',
    manifesto: 'Sua vida factível é definida por ações. Constantemente ativa, destila seu prazer de contemplar aquilo que foi construído por ela.',
    associated: ['Aplicada', 'Diligente', 'Zelosa'],
    antagonistic: ['Preguiçosa', 'Negligente', 'Passiva'],
    verbs: ['Fazer', 'Executar', 'Desenvolver'],
    note: 'É passível de transformar e edificar o que lhe é útil, mas o gozo do ócio e labor equilibram o ímpeto.'
  }
];
