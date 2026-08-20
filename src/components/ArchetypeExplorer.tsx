import React, { useState } from 'react';
import { COLOR_PROFILES, BLEND_ARCHETYPES } from '../data/hartmanProfiles';
import { ColorCode } from '../types/personality';
import { 
  Sparkles, 
  Award, 
  ShieldAlert, 
  Briefcase, 
  Heart, 
  Baby, 
  Compass, 
  CheckCircle2, 
  Layers
} from 'lucide-react';

interface ArchetypeExplorerProps {
  initialColor?: ColorCode;
  onSelectColorToTest?: (c: ColorCode) => void;
}

export const ArchetypeExplorer: React.FC<ArchetypeExplorerProps> = ({ initialColor = 'R' }) => {
  const [selectedColor, setSelectedColor] = useState<ColorCode>(initialColor);
  const [viewMode, setViewMode] = useState<'core' | 'blends'>('core');
  const [selectedBlendKey, setSelectedBlendKey] = useState<string>('R-B');
  const [stressState, setStressState] = useState<'health' | 'stress'>('health');

  const profile = COLOR_PROFILES[selectedColor];
  const colorsList: ColorCode[] = ['R', 'B', 'W', 'Y'];

  return (
    <div className="max-w-6xl mx-auto py-8 px-4 sm:px-6">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-8">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-slate-100 text-slate-800 text-[10px] font-bold uppercase tracking-widest mb-2 border border-slate-200">
          <Sparkles className="w-3 h-3 text-blue-600" />
          <span>Hartman Psychological Framework</span>
        </div>
        <h1 className="font-editorial text-3xl sm:text-4xl font-normal text-slate-900 tracking-tight">
          Archetype Spectrum & Motive Library
        </h1>
        <p className="font-grotesk mt-1.5 text-xs sm:text-sm text-slate-600">
          Explore the deep psychological architecture of the 4 Core Driving Motives and all 16 Primary/Secondary blend combinations.
        </p>

        {/* Mode Toggle: 4 Core Motives vs 16 Blends */}
        <div className="inline-flex p-1 bg-slate-100 rounded-lg border border-slate-200 mt-5">
          <button
            onClick={() => setViewMode('core')}
            className={`px-3.5 py-1.5 rounded text-xs font-semibold transition ${
              viewMode === 'core'
                ? 'bg-white text-slate-950 shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            4 Core Motives
          </button>
          <button
            onClick={() => setViewMode('blends')}
            className={`px-3.5 py-1.5 rounded text-xs font-semibold transition flex items-center gap-1.5 ${
              viewMode === 'blends'
                ? 'bg-white text-slate-950 shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Layers className="w-3.5 h-3.5 text-blue-600" />
            <span>16 Blend Combinations</span>
          </button>
        </div>
      </div>

      {viewMode === 'core' ? (
        <>
          {/* 4 Core Color Tabs */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
            {colorsList.map((code) => {
              const p = COLOR_PROFILES[code];
              const isSelected = selectedColor === code;

              return (
                <button
                  key={code}
                  onClick={() => setSelectedColor(code)}
                  className={`p-3.5 rounded-lg border text-left transition-all ${
                    isSelected
                      ? 'border-slate-900 bg-slate-900 text-white shadow-xs'
                      : 'border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50/70 text-slate-800'
                  }`}
                >
                  <div className="flex items-center gap-2 mb-1">
                    <span 
                      className="w-2.5 h-2.5 rounded-full shrink-0"
                      style={{ backgroundColor: p.colorHex }}
                    />
                    <span className="font-bold text-xs sm:text-sm">
                      {p.name}
                    </span>
                  </div>
                  <div className={`text-[10px] font-mono uppercase tracking-widest ${isSelected ? 'text-slate-300' : 'text-slate-500'}`}>
                    Motive: {p.motive}
                  </div>
                  <p className={`text-[11px] mt-1 line-clamp-1 ${isSelected ? 'text-slate-300' : 'text-slate-600'}`}>
                    {p.tagline}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Detailed Selected Profile Sheet */}
          <div className="bg-white rounded-lg border border-slate-200 shadow-xs overflow-hidden">
            {/* Profile Hero Header */}
            <div className="p-6 sm:p-8 border-b border-slate-100 bg-white">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2">
                    <span 
                      className="text-[10px] font-bold font-mono uppercase tracking-widest px-2.5 py-0.5 rounded-full"
                      style={{ 
                        backgroundColor: `${profile.colorHex}15`, 
                        color: profile.colorHex,
                        border: `1px solid ${profile.colorHex}30` 
                      }}
                    >
                      CORE MOTIVE: {profile.motive.toUpperCase()}
                    </span>
                  </div>
                  <h2 className="font-editorial text-2xl sm:text-3xl font-normal text-slate-900 mt-2 flex items-center gap-2.5 tracking-tight">
                    <span className="w-3.5 h-3.5 rounded-full shrink-0" style={{ backgroundColor: profile.colorHex }} />
                    The {profile.name} Personality: {profile.motive}
                  </h2>
                  <p className="text-xs sm:text-sm font-medium font-grotesk text-slate-500 mt-1">
                    {profile.tagline}
                  </p>
                </div>

                {/* Health vs Stress Live Toggle */}
                <div className="p-1 bg-slate-100 rounded-full border border-slate-200 flex items-center gap-1 font-grotesk">
                  <button
                    onClick={() => setStressState('health')}
                    className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                      stressState === 'health'
                        ? 'bg-emerald-600 text-white shadow-xs'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    In Health
                  </button>
                  <button
                    onClick={() => setStressState('stress')}
                    className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                      stressState === 'stress'
                        ? 'bg-rose-600 text-white shadow-xs'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    Under Stress
                  </button>
                </div>
              </div>

              {/* Structured, Easy-to-Read Overview Content */}
              <div className="mt-6 space-y-4 max-w-4xl font-grotesk">
                {profile.deepEssay.split('\n\n').map((para, idx, arr) => {
                  if (idx === 0) {
                    // Lead paragraph: prominent and engaging
                    return (
                      <p key={idx} className="text-sm sm:text-base text-slate-800 leading-relaxed font-medium">
                        {para}
                      </p>
                    );
                  }
                  if (idx === arr.length - 1) {
                    // Final paragraph: transformation & maturity takeaway
                    return (
                      <div key={idx} className="mt-4 p-4 sm:p-5 rounded-xl bg-purple-50/60 border border-purple-100/80 space-y-1">
                        <span className="text-[11px] font-bold uppercase tracking-wider text-purple-800 flex items-center gap-1.5">
                          <Sparkles className="w-3.5 h-3.5 text-purple-600" />
                          Path to Character Maturity
                        </span>
                        <p className="text-xs sm:text-sm text-purple-950 leading-relaxed">
                          {para}
                        </p>
                      </div>
                    );
                  }
                  // Middle paragraphs: clean, readable flow
                  return (
                    <p key={idx} className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {para}
                    </p>
                  );
                })}
              </div>
            </div>

            {/* Dynamic Behavioral State Box based on toggle */}
            <div className={`p-6 border-b border-slate-100 transition-colors ${
              stressState === 'health' ? 'bg-emerald-50/20' : 'bg-rose-50/20'
            }`}>
              <div className="flex items-center gap-2 mb-3">
                {stressState === 'health' ? (
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                ) : (
                  <ShieldAlert className="w-4 h-4 text-rose-600" />
                )}
                <h3 className="font-bold text-xs sm:text-sm text-slate-900">
                  {stressState === 'health' 
                    ? `Operating in Emotional Health & Maturity:` 
                    : `Behavioral Distortion Under Threat or Fatigue:`}
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5">
                {(stressState === 'health' ? profile.inHealthTraits : profile.underStressTraits).map((trait, idx) => (
                  <div 
                    key={idx} 
                    className={`p-2.5 rounded-r border-l-2 bg-white text-xs text-slate-700 shadow-2xs ${
                      stressState === 'health' ? 'border-emerald-500' : 'border-rose-500'
                    }`}
                  >
                    {trait}
                  </div>
                ))}
              </div>
            </div>

            {/* In-Depth Psychological Anatomy Grid */}
            <div className="p-6 sm:p-8 grid grid-cols-1 md:grid-cols-2 gap-6 bg-slate-50/50">
              {/* Needs & Wants */}
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg border border-slate-200 shadow-xs space-y-2">
                  <h4 className="text-[10px] text-slate-400 font-bold uppercase tracking-widest flex items-center gap-1.5">
                    <Compass className="w-3.5 h-3.5 text-slate-500" />
                    <span>Innate Psychological Needs</span>
                  </h4>
                  <ul className="space-y-1 text-xs text-slate-700">
                    {profile.innateNeeds.map((need, idx) => (
                      <li key={idx}>• {need}</li>
                    ))}
                  </ul>
                </div>

                <div className="bg-white p-4 rounded-lg border border-slate-200 shadow-xs space-y-2">
                  <h4 className="text-[10px] text-slate-400 font-bold uppercase tracking-widest flex items-center gap-1.5">
                    <Award className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Primary Natural Strengths</span>
                  </h4>
                  <div className="grid grid-cols-1 gap-1.5">
                    {profile.naturalStrengths.map((s, idx) => (
                      <div key={idx} className="p-2 border-l-2 border-emerald-500 bg-emerald-50/30 rounded-r text-xs text-slate-800">
                        {s}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg border border-slate-200 shadow-xs space-y-1.5">
                  <h4 className="text-[10px] text-slate-400 font-bold uppercase tracking-widest flex items-center gap-1.5">
                    <Baby className="w-3.5 h-3.5 text-blue-600" />
                    <span>Childhood Developmental Roots</span>
                  </h4>
                  <p className="text-xs text-slate-700 leading-relaxed">
                    {profile.childhoodRoots}
                  </p>
                </div>
              </div>

              {/* Workplace & Relationships */}
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg border border-slate-200 shadow-xs space-y-2">
                  <h4 className="text-[10px] text-slate-400 font-bold uppercase tracking-widest flex items-center gap-1.5">
                    <Briefcase className="w-3.5 h-3.5 text-blue-600" />
                    <span>Workplace Role & Leadership</span>
                  </h4>
                  <div className="space-y-1.5 text-xs text-slate-700">
                    <div><strong className="text-slate-900">Leadership Style:</strong> {profile.workplaceRole.leadershipStyle}</div>
                    <div><strong className="text-slate-900">Team Function:</strong> {profile.workplaceRole.teamRole}</div>
                    <div><strong className="text-slate-900">Optimal Culture:</strong> {profile.workplaceRole.idealEnvironment}</div>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg border border-slate-200 shadow-xs space-y-2">
                  <h4 className="text-[10px] text-slate-400 font-bold uppercase tracking-widest flex items-center gap-1.5">
                    <Heart className="w-3.5 h-3.5 text-rose-500" />
                    <span>Relationship Dynamics</span>
                  </h4>
                  <div className="space-y-1.5 text-xs text-slate-700">
                    <div><strong className="text-slate-900">In Intimacy:</strong> {profile.romanticDynamic.inLove}</div>
                    <div><strong className="text-slate-900">Needs From Partner:</strong> {profile.romanticDynamic.needsFromPartner}</div>
                    <div><strong className="text-slate-900">Friction Warning:</strong> {profile.romanticDynamic.warningSigns}</div>
                  </div>
                </div>

                <div className="bg-slate-900 text-white p-4 rounded-lg border border-slate-800 shadow-xs space-y-2">
                  <h4 className="text-[10px] font-bold uppercase tracking-widest text-blue-400">
                    Moral Evolution & Character Growth
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {profile.moralEvolution}
                  </p>
                  <p className="text-xs text-slate-400 pt-2 border-t border-slate-800">
                    <strong className="text-white">Growth Frontier:</strong> {profile.growthFrontier}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        /* 16 Blends Browser */
        <div className="space-y-6">
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-2">
            {Object.keys(BLEND_ARCHETYPES).map((key) => {
              const blend = BLEND_ARCHETYPES[key];
              const isSelected = selectedBlendKey === key;
              const p = COLOR_PROFILES[blend.primary];
              const s = COLOR_PROFILES[blend.secondary];

              return (
                <button
                  key={key}
                  onClick={() => setSelectedBlendKey(key)}
                  className={`p-2.5 rounded-lg border text-left transition-all ${
                    isSelected
                      ? 'border-slate-900 bg-slate-900 text-white shadow-xs'
                      : 'border-slate-200 bg-white hover:border-slate-300 text-slate-900'
                  }`}
                >
                  <div className="flex items-center gap-1.5 mb-1">
                    <span 
                      className="w-2 h-2 rounded-full"
                      style={{ backgroundColor: p.colorHex }}
                    />
                    <span 
                      className="w-2 h-2 rounded-full"
                      style={{ backgroundColor: s.colorHex }}
                    />
                    <span className={`text-[9px] font-mono font-bold ${isSelected ? 'text-slate-300' : 'text-slate-500'}`}>
                      {p.name[0]}/{s.name[0]}
                    </span>
                  </div>
                  <div className="font-bold text-xs line-clamp-1">
                    {blend.title}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Selected Blend Profile Card */}
          {(() => {
            const blend = BLEND_ARCHETYPES[selectedBlendKey];
            if (!blend) return null;
            const p = COLOR_PROFILES[blend.primary];
            const s = COLOR_PROFILES[blend.secondary];

            return (
              <div className="bg-white rounded-lg border border-slate-200 shadow-xs p-6 sm:p-8 space-y-5">
                <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-slate-100">
                  <div>
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="text-[10px] font-mono font-bold uppercase tracking-widest px-2 py-0.5 rounded bg-slate-100 text-slate-800 border border-slate-200">
                        {p.name} Primary + {s.name} Secondary
                      </span>
                    </div>
                    <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                      {blend.title}
                    </h2>
                    <p className="text-xs sm:text-sm font-medium text-slate-600 mt-0.5">
                      {blend.epithet}
                    </p>
                  </div>
                </div>

                <div className="p-3 bg-slate-50 rounded border border-slate-200 text-xs sm:text-sm text-slate-800 font-medium leading-relaxed">
                  "{blend.tagline}"
                </div>

                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  {blend.summary}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t border-slate-100">
                  <div className="p-4 rounded-lg bg-emerald-50/30 border border-emerald-200 space-y-2">
                    <h4 className="text-[10px] font-bold uppercase tracking-widest text-emerald-950 flex items-center gap-1.5">
                      <Award className="w-3.5 h-3.5 text-emerald-600" />
                      <span>Signature Strengths</span>
                    </h4>
                    <ul className="space-y-1 text-xs text-emerald-900">
                      {blend.strengths.map((str, idx) => (
                        <li key={idx}>• {str}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-4 rounded-lg bg-rose-50/30 border border-rose-200 space-y-2">
                    <h4 className="text-[10px] font-bold uppercase tracking-widest text-rose-950 flex items-center gap-1.5">
                      <ShieldAlert className="w-3.5 h-3.5 text-rose-600" />
                      <span>Internal Tensions</span>
                    </h4>
                    <ul className="space-y-1 text-xs text-rose-900">
                      {blend.tensions.map((ten, idx) => (
                        <li key={idx}>• {ten}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="p-4 rounded-lg bg-slate-900 text-white space-y-1.5">
                  <h4 className="text-[10px] font-bold uppercase tracking-widest text-blue-400">
                    Growth Prescription:
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {blend.growthAdvice}
                  </p>
                </div>
              </div>
            );
          })()}
        </div>
      )}
    </div>
  );
};
