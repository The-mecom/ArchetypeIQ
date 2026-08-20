import React from 'react';
import { 
  ClipboardCheck, 
  BookOpen, 
  Sparkles, 
  MessageSquare, 
  HeartHandshake, 
  Users, 
  Wand2, 
  Search, 
  Globe, 
  ChevronDown,
  ArrowRight
} from 'lucide-react';

export type AppTab = 'home' | 'assessment' | 'archetypes' | 'communication' | 'coach' | 'compatibility' | 'literature' | 'profiles' | 'legal';

interface NavbarProps {
  activeTab: AppTab;
  setActiveTab: (tab: AppTab) => void;
  hasResult: boolean;
  onOpenQuickTest?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeTab, setActiveTab, hasResult }) => {
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-100 transition-all">
      {/* 4-Color Signature Motive Accent Top Line */}
      <div className="flex h-1 w-full">
        <div className="flex-1 bg-red-500" title="Red: Power" />
        <div className="flex-1 bg-blue-600" title="Blue: Intimacy" />
        <div className="flex-1 bg-slate-400" title="White: Peace" />
        <div className="flex-1 bg-amber-400" title="Yellow: Fun" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 py-2">
          {/* Brand Logo - 16Personalities style with Hartman multi-color emblem */}
          <div 
            onClick={() => setActiveTab('home')}
            className="flex items-center gap-3 cursor-pointer select-none group shrink-0"
          >
            <div className="relative w-8 h-8 flex items-center justify-center">
              <div className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center p-1 bg-slate-50 group-hover:bg-slate-100 transition-colors shadow-2xs">
                <div className="grid grid-cols-2 gap-1 w-5 h-5">
                  <span className="w-2 h-2 rounded-full bg-red-500" />
                  <span className="w-2 h-2 rounded-full bg-blue-600" />
                  <span className="w-2 h-2 rounded-full bg-slate-400" />
                  <span className="w-2 h-2 rounded-full bg-amber-400" />
                </div>
              </div>
            </div>
            <div className="flex items-baseline">
              <span className="font-editorial text-2xl font-bold tracking-tight text-slate-900">
                Archetype<span className="text-purple-700 font-serif">.iq</span>
              </span>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            <button
              onClick={() => setActiveTab('assessment')}
              className={`px-3 py-2 text-sm font-medium rounded-md transition-colors flex items-center gap-1 font-grotesk whitespace-nowrap ${
                activeTab === 'assessment' ? 'text-purple-700 font-semibold bg-purple-50/70' : 'text-slate-700 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              <span>Personality Test</span>
              {hasResult && (
                <span className="w-2 h-2 rounded-full bg-emerald-500" title="Result Ready" />
              )}
            </button>

            <button
              onClick={() => setActiveTab('archetypes')}
              className={`px-3 py-2 text-sm font-medium rounded-md transition-colors flex items-center gap-1 font-grotesk whitespace-nowrap ${
                activeTab === 'archetypes' ? 'text-purple-700 font-semibold bg-purple-50/70' : 'text-slate-700 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              <span>Personality Types</span>
              <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
            </button>

            <button
              onClick={() => setActiveTab('communication')}
              className={`px-3 py-2 text-sm font-medium rounded-md transition-colors flex items-center gap-1 font-grotesk whitespace-nowrap ${
                activeTab === 'communication' ? 'text-purple-700 font-semibold bg-purple-50/70' : 'text-slate-700 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              <span>Strategy Playbook</span>
              <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
            </button>

            <button
              onClick={() => setActiveTab('coach')}
              className={`px-3 py-2 text-sm font-medium rounded-md transition-colors flex items-center gap-1 font-grotesk whitespace-nowrap ${
                activeTab === 'coach' ? 'text-purple-700 font-semibold bg-purple-50/70' : 'text-slate-700 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              <span>AI Coach</span>
              <span className="text-[10px] font-bold px-1.5 py-0.2 rounded bg-purple-100 text-purple-800 uppercase font-mono">
                AI
              </span>
            </button>

            <button
              onClick={() => setActiveTab('compatibility')}
              className={`px-3 py-2 text-sm font-medium rounded-md transition-colors flex items-center gap-1 font-grotesk whitespace-nowrap ${
                activeTab === 'compatibility' ? 'text-purple-700 font-semibold bg-purple-50/70' : 'text-slate-700 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              <span>Teams & Synergy</span>
              <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
            </button>

            <button
              onClick={() => setActiveTab('literature')}
              className={`px-3 py-2 text-sm font-medium rounded-md transition-colors flex items-center gap-1 font-grotesk whitespace-nowrap ${
                activeTab === 'literature' ? 'text-purple-700 font-semibold bg-purple-50/70' : 'text-slate-700 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              <span>Resources</span>
              <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
            </button>
          </nav>

          {/* Right Action Icons & Primary CTA Pill */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => setActiveTab('literature')}
              className="p-2 text-slate-500 hover:text-slate-800 transition-colors hidden sm:block"
              title="Search Literature"
            >
              <Search className="w-4 h-4" />
            </button>

            <button
              onClick={() => setActiveTab('profiles')}
              className="text-sm font-medium text-slate-700 hover:text-slate-900 transition-colors hidden md:block px-2 py-1 font-grotesk whitespace-nowrap"
            >
              Vault
            </button>

            {/* Prominent Pill CTA Button */}
            <button
              onClick={() => setActiveTab('assessment')}
              className="inline-flex items-center justify-center shrink-0 whitespace-nowrap px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold font-grotesk text-white bg-[#7c5295] hover:bg-[#6b4383] transition-all shadow-xs hover:shadow-sm active:scale-98 cursor-pointer"
            >
              <span>{hasResult ? 'View Result' : 'Take the test'}</span>
              <ArrowRight className="w-3.5 h-3.5 ml-1.5 shrink-0" />
            </button>
          </div>
        </div>

        {/* Mobile Horizontal Navigation */}
        <div className="lg:hidden flex items-center gap-1 overflow-x-auto py-2.5 border-t border-slate-100 scrollbar-none font-grotesk">
          <button
            onClick={() => setActiveTab('home')}
            className={`px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap transition ${
              activeTab === 'home' ? 'bg-purple-700 text-white' : 'text-slate-700 bg-slate-100'
            }`}
          >
            Overview
          </button>
          <button
            onClick={() => setActiveTab('assessment')}
            className={`px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap transition ${
              activeTab === 'assessment' ? 'bg-purple-700 text-white' : 'text-slate-700 bg-slate-100'
            }`}
          >
            Test
          </button>
          <button
            onClick={() => setActiveTab('archetypes')}
            className={`px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap transition ${
              activeTab === 'archetypes' ? 'bg-purple-700 text-white' : 'text-slate-700 bg-slate-100'
            }`}
          >
            Types
          </button>
          <button
            onClick={() => setActiveTab('communication')}
            className={`px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap transition ${
              activeTab === 'communication' ? 'bg-purple-700 text-white' : 'text-slate-700 bg-slate-100'
            }`}
          >
            Playbook
          </button>
          <button
            onClick={() => setActiveTab('coach')}
            className={`px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap transition ${
              activeTab === 'coach' ? 'bg-purple-700 text-white' : 'text-slate-700 bg-slate-100'
            }`}
          >
            AI Coach
          </button>
          <button
            onClick={() => setActiveTab('compatibility')}
            className={`px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap transition ${
              activeTab === 'compatibility' ? 'bg-purple-700 text-white' : 'text-slate-700 bg-slate-100'
            }`}
          >
            Synergy
          </button>
          <button
            onClick={() => setActiveTab('literature')}
            className={`px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap transition ${
              activeTab === 'literature' ? 'bg-purple-700 text-white' : 'text-slate-700 bg-slate-100'
            }`}
          >
            Articles
          </button>
          <button
            onClick={() => setActiveTab('profiles')}
            className={`px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap transition ${
              activeTab === 'profiles' ? 'bg-purple-700 text-white' : 'text-slate-700 bg-slate-100'
            }`}
          >
            Vault
          </button>
        </div>
      </div>
    </header>
  );
};
