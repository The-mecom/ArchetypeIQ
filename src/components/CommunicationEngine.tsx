import React, { useState } from 'react';
import { COLOR_PROFILES } from '../data/hartmanProfiles';
import { getDirectionalStrategy } from '../data/communicationStrategies';
import { ColorCode } from '../types/personality';
import { 
  MessageSquare, 
  ArrowRight, 
  Check, 
  X, 
  Copy, 
  Sparkles, 
  AlertTriangle, 
  CheckCircle2, 
  HelpCircle,
  Lightbulb
} from 'lucide-react';

interface CommunicationEngineProps {
  initialSenderColor?: ColorCode;
  initialReceiverColor?: ColorCode;
  onOpenAiRewriter?: (receiverColor: ColorCode) => void;
}

export const CommunicationEngine: React.FC<CommunicationEngineProps> = ({
  initialSenderColor = 'R',
  initialReceiverColor = 'B',
  onOpenAiRewriter
}) => {
  const [senderColor, setSenderColor] = useState<ColorCode>(initialSenderColor);
  const [receiverColor, setReceiverColor] = useState<ColorCode>(initialReceiverColor);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const colorsList: ColorCode[] = ['R', 'B', 'W', 'Y'];

  const senderProfile = COLOR_PROFILES[senderColor];
  const receiverProfile = COLOR_PROFILES[receiverColor];
  const strategy = getDirectionalStrategy(senderColor, receiverColor);

  const handleCopy = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <div className="max-w-6xl mx-auto py-8 px-4 sm:px-6">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-8">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-slate-100 text-slate-800 text-[10px] font-bold uppercase tracking-widest mb-2 border border-slate-200">
          <MessageSquare className="w-3 h-3 text-blue-600" />
          <span>Cross-Type Tactical Translation Engine</span>
        </div>
        <h1 className="font-editorial text-3xl sm:text-4xl font-normal text-slate-900 tracking-tight">
          Personalized Communication Playbook
        </h1>
        <p className="font-grotesk mt-1.5 text-xs sm:text-sm text-slate-600">
          Translate your message into the recipient’s psychological currency to dismantle defensiveness and build immediate rapport.
        </p>
      </div>

      {/* Interactive Dual Archetype Selector */}
      <div className="bg-white rounded-lg border border-slate-200 shadow-xs p-6 mb-6">
        <div className="grid grid-cols-1 md:grid-cols-11 gap-6 items-center">
          {/* Sender Selector */}
          <div className="md:col-span-5 space-y-2.5">
            <label className="block text-[10px] font-bold uppercase tracking-widest text-slate-400">
              1. Originator Archetype (You)
            </label>
            <div className="grid grid-cols-4 gap-2">
              {colorsList.map((c) => {
                const p = COLOR_PROFILES[c];
                const isSelected = senderColor === c;
                return (
                  <button
                    key={`sender-${c}`}
                    onClick={() => setSenderColor(c)}
                    className={`p-2.5 rounded-lg border text-center transition-all ${
                      isSelected
                        ? 'border-slate-900 bg-slate-900 text-white shadow-xs'
                        : 'border-slate-200 bg-white hover:border-slate-300 text-slate-800'
                    }`}
                  >
                    <span 
                      className="w-2 h-2 rounded-full inline-block mb-1"
                      style={{ backgroundColor: p.colorHex }}
                    />
                    <div className="font-bold text-xs">{p.name}</div>
                    <div className={`text-[10px] font-mono ${isSelected ? 'text-slate-300' : 'text-slate-500'}`}>
                      {p.motive}
                    </div>
                  </button>
                );
              })}
            </div>
            <div className="p-2 rounded bg-slate-50 border border-slate-200 text-xs text-slate-600 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full shrink-0" style={{ backgroundColor: senderProfile.colorHex }} />
              <span>You speak in: <strong>{senderProfile.motive}</strong> currency ({senderProfile.communicationStyle.preferredTone.toLowerCase()})</span>
            </div>
          </div>

          {/* Direction Arrow */}
          <div className="md:col-span-1 flex items-center justify-center">
            <div className="w-8 h-8 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-500 shadow-2xs">
              <ArrowRight className="w-4 h-4" />
            </div>
          </div>

          {/* Receiver Selector */}
          <div className="md:col-span-5 space-y-2.5">
            <label className="block text-[10px] font-bold uppercase tracking-widest text-slate-400">
              2. Target Archetype (Them)
            </label>
            <div className="grid grid-cols-4 gap-2">
              {colorsList.map((c) => {
                const p = COLOR_PROFILES[c];
                const isSelected = receiverColor === c;
                return (
                  <button
                    key={`receiver-${c}`}
                    onClick={() => setReceiverColor(c)}
                    className={`p-2.5 rounded-lg border text-center transition-all ${
                      isSelected
                        ? 'border-slate-900 bg-slate-900 text-white shadow-xs'
                        : 'border-slate-200 bg-white hover:border-slate-300 text-slate-800'
                    }`}
                  >
                    <span 
                      className="w-2 h-2 rounded-full inline-block mb-1"
                      style={{ backgroundColor: p.colorHex }}
                    />
                    <div className="font-extrabold text-xs">{p.name}</div>
                    <div className={`text-[10px] font-mono ${isSelected ? 'text-slate-300' : 'text-slate-500'}`}>
                      {p.motive}
                    </div>
                  </button>
                );
              })}
            </div>
            <div className="p-2 rounded bg-slate-50 border border-slate-200 text-xs text-slate-600 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full shrink-0" style={{ backgroundColor: receiverProfile.colorHex }} />
              <span>They hear in: <strong>{receiverProfile.motive}</strong> currency ({receiverProfile.communicationStyle.preferredTone.toLowerCase()})</span>
            </div>
          </div>
        </div>
      </div>

      {/* The Core Golden Rule & Mindset Shift */}
      <div className="bg-slate-900 text-white rounded-lg p-6 border border-slate-800 shadow-sm mb-6 space-y-3">
        <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-blue-400">
          <Sparkles className="w-3.5 h-3.5" />
          <span>The Tactical Mandate for {senderProfile.name} Talking to {receiverProfile.name}</span>
        </div>

        <h2 className="text-lg sm:text-xl font-bold text-white leading-snug">
          "{strategy.coreRule}"
        </h2>

        <div className="p-3 bg-slate-800/80 rounded border border-slate-700 text-xs text-slate-300 leading-relaxed flex items-start gap-2.5">
          <Lightbulb className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
          <div>
            <strong className="text-white">Crucial Mindset Shift: </strong>
            {strategy.senderMindsetShift}
          </div>
        </div>
      </div>

      {/* Do's and Don'ts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {/* Do's */}
        <div className="bg-white rounded-lg border border-slate-200 p-5 shadow-xs">
          <h3 className="text-sm font-bold text-slate-800 mb-3 flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span>Effective Communication (Builds Receptivity)</span>
          </h3>
          <ul className="space-y-2 text-xs text-slate-600">
            {strategy.dos.map((item, idx) => (
              <li key={idx} className="p-2 border-l-2 border-emerald-500 bg-emerald-50/30 rounded-r">
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Don'ts */}
        <div className="bg-white rounded-lg border border-slate-200 p-5 shadow-xs">
          <h3 className="text-sm font-bold text-slate-800 mb-3 flex items-center gap-2">
            <AlertTriangle className="w-4 h-4 text-rose-500" />
            <span>What to Avoid (Triggers Instant Resistance)</span>
          </h3>
          <ul className="space-y-2 text-xs text-slate-600">
            {strategy.donts.map((item, idx) => (
              <li key={idx} className="p-2 border-l-2 border-rose-500 bg-rose-50/30 rounded-r">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Word Swaps Table */}
      <div className="bg-white rounded-lg border border-slate-200 shadow-xs p-6 mb-6">
        <h3 className="text-sm font-bold text-slate-900 mb-3 flex items-center gap-2">
          <HelpCircle className="w-4 h-4 text-blue-600" />
          <span>High-Impact Word Swaps: What to Say vs. What to Avoid</span>
        </h3>

        <div className="space-y-3">
          {strategy.wordSwaps.map((ws, idx) => (
            <div key={idx} className="p-3 bg-slate-50 rounded border border-slate-200 grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="space-y-1">
                <span className="text-[10px] font-bold uppercase tracking-widest text-rose-600 flex items-center gap-1">
                  <X className="w-3 h-3" /> Avoid This Phrasing
                </span>
                <p className="text-xs font-semibold text-rose-950 bg-rose-50/80 p-2 rounded border border-rose-200">
                  {ws.avoid}
                </p>
              </div>

              <div className="space-y-1">
                <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-700 flex items-center gap-1">
                  <Check className="w-3 h-3" /> Use This Instead
                </span>
                <p className="text-xs font-semibold text-emerald-950 bg-emerald-50/80 p-2 rounded border border-emerald-200">
                  {ws.useInstead}
                </p>
                <p className="text-[10px] text-slate-500 italic mt-0.5">
                  Ref rationale: {ws.reason}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Context-Specific Scripts */}
      <div className="bg-white rounded-lg border border-slate-200 shadow-xs p-6 space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-4 pb-2 border-b border-slate-100">
          <div>
            <h3 className="text-sm font-bold text-slate-900">
              Validated Dialogue Scripts ({senderProfile.name} → {receiverProfile.name})
            </h3>
            <p className="text-xs text-slate-500">
              Pre-formulated dialogues designed to maximize psychological safety and alignment.
            </p>
          </div>

          {onOpenAiRewriter && (
            <button
              onClick={() => onOpenAiRewriter(receiverColor)}
              className="px-3 py-1.5 rounded bg-blue-600 hover:bg-blue-700 text-xs font-semibold text-white transition flex items-center gap-1.5 shadow-xs"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Tone Optimizer →</span>
            </button>
          )}
        </div>

        <div className="space-y-3">
          {strategy.contextScripts.map((scriptItem, idx) => (
            <div key={idx} className="p-4 rounded-lg bg-slate-50 border border-slate-200 space-y-2">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-xs text-slate-900">{scriptItem.contextName}</h4>
                  <p className="text-[11px] text-slate-500">{scriptItem.description}</p>
                </div>
                <button
                  onClick={() => handleCopy(scriptItem.script, idx)}
                  className="px-2.5 py-1 rounded text-xs font-semibold text-slate-700 bg-white border border-slate-200 hover:bg-slate-50 transition flex items-center gap-1 shadow-2xs"
                >
                  {copiedIndex === idx ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3 text-slate-400" />}
                  <span>{copiedIndex === idx ? 'Copied' : 'Copy Script'}</span>
                </button>
              </div>

              <div className="p-3 rounded border-l-2 border-slate-900 bg-white border-slate-200 font-serif italic text-xs text-slate-800 leading-relaxed">
                "{scriptItem.script}"
              </div>

              <div className="text-[11px] text-slate-600 flex items-center gap-1.5">
                <span className="font-bold text-blue-700">Tactic:</span>
                <span>{scriptItem.keyTactic}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
