import React, { useState } from 'react';
import { TestResultData, saveProfile } from '../utils/storage';
import { COLOR_PROFILES, BLEND_ARCHETYPES } from '../data/hartmanProfiles';
import { ColorCode } from '../types/personality';
import { 
  Sparkles, 
  Printer, 
  Copy, 
  Check, 
  Users, 
  MessageSquare, 
  HeartHandshake, 
  RotateCcw, 
  ShieldAlert, 
  Award,
  Zap,
  TrendingUp,
  Brain,
  FileText,
  Bookmark
} from 'lucide-react';

interface ResultViewProps {
  result: TestResultData;
  onRetake: () => void;
  onNavigateToCommunication: (primaryColor: ColorCode) => void;
  onNavigateToCompatibility: (primaryColor: ColorCode) => void;
  onOpenArchetypeDetail: (color: ColorCode) => void;
}

export const ResultView: React.FC<ResultViewProps> = ({
  result,
  onRetake,
  onNavigateToCommunication,
  onNavigateToCompatibility,
  onOpenArchetypeDetail
}) => {
  const [copied, setCopied] = useState(false);
  const [savedToPersonas, setSavedToPersonas] = useState(false);
  const [activeTab, setActiveTab] = useState<'overview' | 'strengths' | 'stress' | 'growth'>('overview');

  const { primaryColor, secondaryColor, scores, percentages, totalQuestions } = result;

  const primaryProfile = COLOR_PROFILES[primaryColor];
  const secondaryProfile = COLOR_PROFILES[secondaryColor];
  const blendKey = `${primaryColor}-${secondaryColor}`;
  const blendArchetype = BLEND_ARCHETYPES[blendKey] || {
    primary: primaryColor,
    secondary: secondaryColor,
    title: `${primaryProfile.name} / ${secondaryProfile.name} Blend`,
    epithet: `Driven by ${primaryProfile.motive} with a strong influence of ${secondaryProfile.motive}`,
    tagline: `Combines the primary strength of ${primaryProfile.name} with secondary ${secondaryProfile.name} qualities.`,
    summary: `Your core motivation is ${primaryProfile.motive}, supported and enriched by your secondary ${secondaryProfile.motive} traits.`,
    strengths: [...primaryProfile.naturalStrengths.slice(0, 3), ...secondaryProfile.naturalStrengths.slice(0, 2)],
    tensions: [`Balancing ${primaryProfile.motive} urgency with ${secondaryProfile.motive} preferences`],
    growthAdvice: `Leverage your ${secondaryProfile.name} qualities to soften the blind spots of your primary ${primaryProfile.name}.`
  };

  // Find least expressed color (Growth edge)
  const sortedByLowest = (Object.keys(scores) as ColorCode[]).sort((a, b) => scores[a] - scores[b]);
  const leastColor = sortedByLowest[0];
  const leastProfile = COLOR_PROFILES[leastColor];

  const handleCopySummary = () => {
    const text = `🧬 Hartman Color Code Assessment Dossier:
Subject Primary Color: ${primaryProfile.name} (${primaryProfile.motive}) - ${percentages[primaryColor]}%
Secondary Modifier: ${secondaryProfile.name} (${secondaryProfile.motive}) - ${percentages[secondaryColor]}%
Blend Archetype: ${blendArchetype.title} ("${blendArchetype.epithet}")

Spectrum Breakdown:
• RED (Power): ${percentages.R}% (${scores.R}/${totalQuestions})
• BLUE (Intimacy): ${percentages.B}% (${scores.B}/${totalQuestions})
• WHITE (Peace): ${percentages.W}% (${scores.W}/${totalQuestions})
• YELLOW (Fun): ${percentages.Y}% (${scores.Y}/${totalQuestions})

Growth Frontier: Integration of ${leastProfile.name} (${leastProfile.motive}) virtues.`;

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSaveToPersonas = () => {
    saveProfile({
      name: 'My Subject Dossier (Self)',
      relation: 'Self',
      primaryColor,
      secondaryColor,
      scores,
      notes: `Blend: ${blendArchetype.title}. Completed via ${result.testMode === 'full' ? '45-Question Standard' : '12-Question Rapid'} diagnostic.`
    });
    setSavedToPersonas(true);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="max-w-5xl mx-auto py-8 px-4 sm:px-6">
      {/* Top Executive Header Bar */}
      <div className="bg-white rounded-lg border border-slate-200 p-4 mb-6 shadow-xs flex flex-wrap items-center justify-between gap-4 print:hidden">
        <div className="flex items-center gap-3">
          <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500 font-grotesk">
            Subject Profile:
          </span>
          <span className="text-xs sm:text-sm font-bold text-slate-900 flex items-center gap-1.5 font-grotesk">
            <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: primaryProfile.colorHex }} />
            Archetype {primaryColor} - {primaryProfile.name} ({blendArchetype.title})
          </span>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handleCopySummary}
            className="px-3 py-1.5 rounded border border-slate-200 text-xs font-semibold text-slate-700 bg-white hover:bg-slate-50 transition flex items-center gap-1.5 shadow-xs"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5 text-slate-500" />}
            <span>{copied ? 'Copied' : 'Copy Summary'}</span>
          </button>

          <button
            onClick={handlePrint}
            className="px-3 py-1.5 rounded border border-slate-200 text-xs font-semibold text-slate-700 bg-white hover:bg-slate-50 transition flex items-center gap-1.5 shadow-xs"
          >
            <Printer className="w-3.5 h-3.5 text-slate-500" />
            <span>Export Dossier</span>
          </button>

          <button
            onClick={handleSaveToPersonas}
            disabled={savedToPersonas}
            className="px-3.5 py-1.5 rounded bg-blue-600 hover:bg-blue-700 text-xs font-semibold text-white transition flex items-center gap-1.5 shadow-xs disabled:bg-emerald-700"
          >
            <Users className="w-3.5 h-3.5" />
            <span>{savedToPersonas ? 'Saved in Vault ✓' : 'Save Dossier'}</span>
          </button>

          <button
            onClick={onRetake}
            className="p-1.5 rounded border border-slate-200 text-slate-400 hover:text-slate-700 hover:bg-slate-50 transition"
            title="New Assessment"
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Hero Analytical Dossier Card */}
      <div className="bg-slate-900 rounded-lg p-6 sm:p-8 text-white border border-slate-800 shadow-sm mb-6 relative overflow-hidden">
        <div className="absolute -right-8 -top-8 w-40 h-40 bg-white/5 rounded-full blur-2xl pointer-events-none" />
        
        <div className="relative z-10 space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-3">
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-bold uppercase tracking-widest text-blue-400">
                Hartman Core Motive Analysis
              </span>
              <span className="text-slate-500">•</span>
              <span className="text-xs text-slate-400">
                {result.testMode === 'full' ? '45-Question Standard Battery' : '12-Question Rapid Diagnostic'}
              </span>
            </div>
            <span className="text-xs font-mono text-slate-400 bg-slate-800 px-2 py-0.5 rounded">
              Status: Validated
            </span>
          </div>

          <div>
            <h1 className="font-editorial text-3xl sm:text-5xl font-normal tracking-tight text-white">
              {blendArchetype.title}
            </h1>
            <p className="font-editorial text-sm sm:text-base text-slate-300 mt-1 font-normal italic">
              "{blendArchetype.epithet}"
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded bg-slate-800 border border-slate-700">
              <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: primaryProfile.colorHex }} />
              <span className="text-xs font-bold text-white">
                Primary: {primaryProfile.name} ({primaryProfile.motive})
              </span>
              <span className="text-[10px] font-mono font-bold px-1.5 py-0.5 rounded bg-blue-600 text-white">
                {percentages[primaryColor]}%
              </span>
            </div>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded bg-slate-800 border border-slate-700">
              <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: secondaryProfile.colorHex }} />
              <span className="text-xs font-bold text-white">
                Secondary: {secondaryProfile.name} ({secondaryProfile.motive})
              </span>
              <span className="text-[10px] font-mono font-bold px-1.5 py-0.5 rounded bg-slate-700 text-slate-200">
                {percentages[secondaryColor]}%
              </span>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed pt-2 border-t border-slate-800/80">
            {blendArchetype.summary}
          </p>
        </div>
      </div>

      {/* 4-Color Score Breakdown Grid */}
      <div className="bg-white rounded-lg shadow-xs border border-slate-200 p-6 mb-6">
        <div className="flex items-center justify-between mb-4 pb-2 border-b border-slate-100">
          <div>
            <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest block">
              Diagnostic Distribution
            </span>
            <h3 className="text-sm font-bold text-slate-900">
              Four Core Motive Spectrum Percentages
            </h3>
          </div>
          <span className="text-xs font-mono text-slate-500 bg-slate-50 px-2 py-1 rounded border border-slate-100">
            Σ = 100%
          </span>
        </div>

        <div className="space-y-3.5">
          {(['R', 'B', 'W', 'Y'] as ColorCode[]).map((code) => {
            const p = COLOR_PROFILES[code];
            const pct = percentages[code];
            const rawScore = scores[code];
            const isPrimary = code === primaryColor;
            const isSecondary = code === secondaryColor;

            return (
              <div key={code} className="space-y-1">
                <div className="flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <span 
                      className="w-2.5 h-2.5 rounded-full shrink-0"
                      style={{ backgroundColor: p.colorHex }}
                    />
                    <strong className="text-slate-900">{p.name} Personality</strong>
                    <span className="text-slate-500">— {p.motive}</span>
                    {isPrimary && (
                      <span className="text-[9px] uppercase font-mono font-bold px-1.5 py-0.2 rounded bg-slate-900 text-white">
                        PRIMARY
                      </span>
                    )}
                    {isSecondary && (
                      <span className="text-[9px] uppercase font-mono font-bold px-1.5 py-0.2 rounded bg-slate-100 text-slate-700 border border-slate-200">
                        SECONDARY
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-slate-400 text-xs font-mono">({rawScore}/{totalQuestions})</span>
                    <span className="font-bold text-slate-900 w-10 text-right font-mono">{pct}%</span>
                  </div>
                </div>

                <div className="h-2 bg-slate-100 rounded overflow-hidden flex">
                  <div
                    className="h-full transition-all duration-700 ease-out"
                    style={{
                      width: `${pct}%`,
                      backgroundColor: p.colorHex
                    }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Analytical Tab Navigation */}
      <div className="flex items-center gap-1.5 bg-slate-100 p-1 rounded-lg border border-slate-200 mb-6 print:hidden overflow-x-auto">
        <button
          onClick={() => setActiveTab('overview')}
          className={`px-3 py-1.5 text-xs font-semibold rounded transition whitespace-nowrap flex items-center gap-1.5 ${
            activeTab === 'overview'
              ? 'bg-white text-slate-900 shadow-xs'
              : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          <Brain className="w-3.5 h-3.5 text-blue-600" />
          <span>Core Motive Anatomy</span>
        </button>

        <button
          onClick={() => setActiveTab('strengths')}
          className={`px-3 py-1.5 text-xs font-semibold rounded transition whitespace-nowrap flex items-center gap-1.5 ${
            activeTab === 'strengths'
              ? 'bg-white text-slate-900 shadow-xs'
              : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          <Award className="w-3.5 h-3.5 text-emerald-600" />
          <span>Strengths & Shadow Traits</span>
        </button>

        <button
          onClick={() => setActiveTab('stress')}
          className={`px-3 py-1.5 text-xs font-semibold rounded transition whitespace-nowrap flex items-center gap-1.5 ${
            activeTab === 'stress'
              ? 'bg-white text-slate-900 shadow-xs'
              : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          <ShieldAlert className="w-3.5 h-3.5 text-rose-500" />
          <span>Under Stress vs. In Health</span>
        </button>

        <button
          onClick={() => setActiveTab('growth')}
          className={`px-3 py-1.5 text-xs font-semibold rounded transition whitespace-nowrap flex items-center gap-1.5 ${
            activeTab === 'growth'
              ? 'bg-white text-slate-900 shadow-xs'
              : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          <Zap className="w-3.5 h-3.5 text-amber-500" />
          <span>Growth Frontier</span>
        </button>
      </div>

      {/* Tab 1: Core Motive Anatomy */}
      {activeTab === 'overview' && (
        <div className="space-y-6">
          <section className="bg-white rounded-lg border border-slate-200 p-6 shadow-xs">
            <div className="flex items-center justify-between mb-4 pb-2 border-b border-slate-100">
              <div>
                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">
                  Primary Motive Foundation
                </p>
                <h2 className="text-xl font-bold text-slate-900">
                  The {primaryProfile.name} Personality: {primaryProfile.motive}
                </h2>
              </div>
              <button
                onClick={() => onOpenArchetypeDetail(primaryColor)}
                className="text-xs font-semibold px-3 py-1.5 rounded border border-slate-200 hover:bg-slate-50 transition"
              >
                View Full Archetype →
              </button>
            </div>

            <p className="text-slate-600 text-sm leading-relaxed mb-6">
              {primaryProfile.deepEssay}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-3.5 border-l-2 border-blue-500 bg-blue-50/40 rounded-r-lg">
                <p className="text-[10px] text-blue-900 font-bold uppercase tracking-widest mb-1.5">
                  Innate Psychological Needs
                </p>
                <ul className="space-y-1 text-xs text-slate-700">
                  {primaryProfile.innateNeeds.map((need, idx) => (
                    <li key={idx}>• {need}</li>
                  ))}
                </ul>
              </div>

              <div className="p-3.5 border-l-2 border-indigo-500 bg-indigo-50/40 rounded-r-lg">
                <p className="text-[10px] text-indigo-900 font-bold uppercase tracking-widest mb-1.5">
                  Deepest Emotional Wants
                </p>
                <ul className="space-y-1 text-xs text-slate-700">
                  {primaryProfile.deepestWants.map((want, idx) => (
                    <li key={idx}>• {want}</li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* Secondary Influence Box */}
          <section className="bg-white rounded-lg border border-slate-200 p-5 shadow-xs">
            <h3 className="text-sm font-bold text-slate-800 mb-2 flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: secondaryProfile.colorHex }} />
              Secondary Modifier: {secondaryProfile.name} ({secondaryProfile.motive})
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed mb-3">
              Your secondary color acts as the vital modifier to your primary drive. Rather than operating as an unmitigated {primaryProfile.name}, you blend in {secondaryProfile.name} traits of {secondaryProfile.motive.toLowerCase()}.
            </p>
            <div className="p-3 bg-slate-50 rounded border border-slate-100 text-xs text-slate-700">
              <strong className="text-slate-900">Blend Synthesis: </strong>
              {blendArchetype.tagline}
            </div>
          </section>
        </div>
      )}

      {/* Tab 2: Strengths & Shadow */}
      {activeTab === 'strengths' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <section className="bg-white rounded-lg border border-slate-200 p-6 shadow-xs space-y-4">
            <div className="flex items-center gap-2">
              <Award className="w-4 h-4 text-emerald-600" />
              <h3 className="text-sm font-bold text-slate-900">
                Primary Natural Strengths
              </h3>
            </div>
            <p className="text-xs text-slate-500">
              Natural capabilities inherent to your {primaryProfile.name} core and {secondaryProfile.name} secondary:
            </p>
            <div className="space-y-2">
              {blendArchetype.strengths.map((trait, idx) => (
                <div key={idx} className="p-2 border-l-2 border-emerald-500 bg-emerald-50/40 rounded-r text-xs text-slate-800 font-medium">
                  {trait}
                </div>
              ))}
              {primaryProfile.naturalStrengths.slice(0, 3).map((trait, idx) => (
                <div key={`p-${idx}`} className="p-2 border-l-2 border-emerald-500 bg-emerald-50/20 rounded-r text-xs text-slate-700">
                  {trait}
                </div>
              ))}
            </div>
          </section>

          <section className="bg-white rounded-lg border border-slate-200 p-6 shadow-xs space-y-4">
            <div className="flex items-center gap-2">
              <ShieldAlert className="w-4 h-4 text-rose-500" />
              <h3 className="text-sm font-bold text-slate-900">
                Shadow Traits & Blind Spots
              </h3>
            </div>
            <p className="text-xs text-slate-500">
              Unconscious limitations and friction triggers under pressure:
            </p>
            <div className="space-y-2">
              {primaryProfile.shadowLimitations.map((trait, idx) => (
                <div key={idx} className="p-2 border-l-2 border-rose-500 bg-rose-50/40 rounded-r text-xs text-slate-800 font-medium">
                  {trait}
                </div>
              ))}
            </div>
          </section>
        </div>
      )}

      {/* Tab 3: Under Stress vs In Health */}
      {activeTab === 'stress' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg border border-slate-200 p-5 shadow-xs">
              <h3 className="text-sm font-bold text-slate-800 mb-3 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                In Peak Emotional Health
              </h3>
              <ul className="space-y-2 text-xs text-slate-600">
                {primaryProfile.inHealthTraits.map((t, idx) => (
                  <li key={idx} className="p-2 border-l-2 border-emerald-500 bg-emerald-50/30 rounded-r">
                    {t}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-lg border border-slate-200 p-5 shadow-xs">
              <h3 className="text-sm font-bold text-slate-800 mb-3 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-rose-500" />
                Under Severe Stress & Fatigue
              </h3>
              <ul className="space-y-2 text-xs text-slate-600">
                {primaryProfile.underStressTraits.map((t, idx) => (
                  <li key={idx} className="p-2 border-l-2 border-rose-500 bg-rose-50/30 rounded-r">
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="p-3.5 bg-slate-50 rounded-lg border border-slate-200 text-xs text-slate-700">
            <strong className="text-slate-900">Optimal Operating Environment: </strong>
            {primaryProfile.thrivesWith}
          </div>
        </div>
      )}

      {/* Tab 4: Growth Frontier */}
      {activeTab === 'growth' && (
        <section className="bg-white rounded-lg border border-slate-200 p-6 shadow-xs space-y-4">
          <div className="flex items-center gap-2">
            <Zap className="w-4 h-4 text-blue-600" />
            <h3 className="text-sm font-bold text-slate-900">
              The Hartman Character Code Stretch: Borrowing {leastProfile.name} ({leastProfile.motive})
            </h3>
          </div>

          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            True psychological maturation is achieved not by changing your core motive, but by cultivating the strengths of your least dominant archetype: <strong className="text-slate-900">{leastProfile.name}</strong>.
          </p>

          <div className="p-4 border-l-2 border-blue-500 bg-blue-50/40 rounded-r-lg space-y-1.5">
            <p className="text-[10px] font-bold uppercase tracking-widest text-blue-900">
              Clinical Action Step
            </p>
            <p className="text-xs text-slate-800 leading-relaxed">
              {leastProfile.growthFrontier}
            </p>
          </div>
        </section>
      )}

      {/* Strategic Playbook Launchers */}
      <div className="mt-8 pt-6 border-t border-slate-200 grid grid-cols-1 sm:grid-cols-2 gap-4 print:hidden">
        <button
          onClick={() => onNavigateToCommunication(primaryColor)}
          className="p-5 rounded-lg bg-white border border-slate-200 hover:border-slate-300 shadow-xs hover:shadow-sm transition text-left group"
        >
          <div className="flex items-center justify-between mb-2">
            <span className="font-bold text-slate-900 text-sm flex items-center gap-2">
              <MessageSquare className="w-4 h-4 text-blue-600" />
              <span>Communication Playbook</span>
            </span>
            <span className="text-xs text-blue-600 font-semibold group-hover:translate-x-1 transition-transform">
              Open Strategy →
            </span>
          </div>
          <p className="text-xs text-slate-600 leading-relaxed">
            Specific word swaps, tactical scripts, and conflict protocols for your <strong>{primaryProfile.name}</strong> archetype.
          </p>
        </button>

        <button
          onClick={() => onNavigateToCompatibility(primaryColor)}
          className="p-5 rounded-lg bg-white border border-slate-200 hover:border-slate-300 shadow-xs hover:shadow-sm transition text-left group"
        >
          <div className="flex items-center justify-between mb-2">
            <span className="font-bold text-slate-900 text-sm flex items-center gap-2">
              <HeartHandshake className="w-4 h-4 text-rose-500" />
              <span>Compatibility & Team Synergy</span>
            </span>
            <span className="text-xs text-rose-600 font-semibold group-hover:translate-x-1 transition-transform">
              View Matrix →
            </span>
          </div>
          <p className="text-xs text-slate-600 leading-relaxed">
            Evaluate chemistry, friction sparks, and synergy with other colors in marriage and teams.
          </p>
        </button>
      </div>
    </div>
  );
};
