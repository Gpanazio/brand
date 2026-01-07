
import React from 'react';
import { SectionId } from '../types';
import { NAV_ITEMS } from '../constants';

interface SidebarProps {
  activeSection: SectionId;
  onSectionChange: (id: SectionId) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeSection, onSectionChange }) => {
  return (
    <aside className="fixed left-0 top-0 h-full w-64 bg-black border-r border-zinc-800 z-50 p-8 flex flex-col">
      <div className="mb-16">
        <h1 className="text-xl font-black tracking-tighter">VISSOTTO STUDIO.®</h1>
        <p className="text-[10px] text-zinc-500 mt-2 uppercase tracking-widest leading-tight">
          Visual Identity Bible<br/>v.2025.01
        </p>
      </div>

      <nav className="flex-1 space-y-2">
        {NAV_ITEMS.map((item) => (
          <button
            key={item.id}
            onClick={() => onSectionChange(item.id)}
            className={`w-full text-left py-3 px-4 rounded transition-all duration-300 flex items-center group ${
              activeSection === item.id 
                ? 'bg-white text-black font-bold translate-x-2' 
                : 'text-zinc-500 hover:text-white hover:translate-x-1'
            }`}
          >
            <span className="text-xs uppercase tracking-widest">{item.label}</span>
          </button>
        ))}
      </nav>

      <div className="mt-auto pt-8 border-t border-zinc-900">
        <div className="bg-red-600 p-4 rounded-sm flex items-center justify-between cursor-pointer hover:bg-red-700 transition-colors">
          <span className="text-[10px] font-bold uppercase tracking-tighter">Download PDF Full Guide</span>
          <span className="text-xl">→</span>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
