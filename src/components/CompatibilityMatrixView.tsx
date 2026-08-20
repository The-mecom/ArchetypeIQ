import React, { useState } from 'react';
import { COLOR_PROFILES } from '../data/hartmanProfiles';
import { getCompatibility } from '../data/compatibilityMatrix';
import { ColorCode } from '../types/personality';
import { 
  HeartHandshake, 
  Users, 
  Sparkles, 
  CheckCircle2, 
  AlertTriangle, 
  ShieldCheck, 
  Plus, 
  Trash2, 
  Grid,
  Heart
} from 'lucide-react';

interface CompatibilityMatrixViewProps {
  initialYouColor?: ColorCode;
  initialPartnerColor?: ColorCode;
}

interface TeamMember {
  id: string;
  name: string;
  color: ColorCode;
  role: string;
}

export const CompatibilityMatrixView: React.FC<CompatibilityMatrixViewProps> = ({
  initialYouColor = 'R',
  initialPartnerColor = 'B'
}) => {
  const [viewTab, setViewTab] = useState<'pair' | 'matrix' | 'team'>('pair');

  // Pair selector state
  const [youColor, setYouColor] = useState<ColorCode>(initialYouColor);
  const [partnerColor, setPartnerColor] = useState<ColorCode>(initialPartnerColor);

  // Team Modeler State
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([
    { id: '1', name: 'Alex', color: 'R', role: 'Executive / Strategy' },
    { id: '2', name: 'Sarah', color: 'B', role: 'Product Quality & Conscience' },
    { id: '3', name: 'Jordan', color: 'W', role: 'Operations & Stability' },
    { id: '4', name: 'Chloe', color: 'Y', role: 'Growth & Culture Evangelist' }
  ]);
  const [newMemberName, setNewMemberName] = useState('');
  const [newMemberColor, setNewMemberColor] = useState<ColorCode>('R');
  const [newMemberRole, setNewMemberRole] = useState('');

  const colorsList: ColorCode[] = ['R', 'B', 'W', 'Y'];

  const pairing = getCompatibility(youColor, partnerColor);
  const youProfile = COLOR_PROFILES[youColor];
  const partnerProfile = COLOR_PROFILES[partnerColor];

  // Team calculations
  const teamTally: Record<ColorCode, number> = { R: 0, B: 0, W: 0, Y: 0 };
  teamMembers.forEach((m) => {
    teamTally[m.color]++;
  });
  const totalTeam = teamMembers.length || 1;

  const handleAddTeamMember = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMemberName.trim()) return;
    setTeamMembers([
      ...teamMembers,
      {
        id: `team-${Date.now()}`,
        name: newMemberName.trim(),
        color: newMemberColor,
        role: newMemberRole.trim() || 'Contributor'
      }
    ]);
    setNewMemberName('');
    setNewMemberRole('');
  };

  const handleDeleteTeamMember = (id: string) => {
    setTeamMembers(teamMembers.filter((m) => m.id !== id));
  };

  return (
    <div className="max-w-6xl mx-auto py-8 px-4 sm:px-6">
      {/* Top Header */}
      <div className="text-center max-w-3xl mx-auto mb-8">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-slate-100 text-slate-800 text-[10px] font-bold uppercase tracking-widest mb-2 border border-slate-200">
          <HeartHandshake className="w-3 h-3 text-rose-500" />
          <span>Relationship & Synergy Dynamics</span>
        </div>
        <h1 className="font-editorial text-3xl sm:text-4xl font-normal text-slate-900 tracking-tight">
          Compatibility & Team Synergy Modeler
        </h1>
        <p className="font-grotesk mt-1.5 text-xs sm:text-sm text-slate-600">
          Understand natural chemistry, predictable friction sparks, and communication protocols between any two colors or across an entire group.
        </p>

        {/* View Switcher Tabs */}
        <div className="inline-flex p-1 bg-slate-100/90 rounded-full border border-slate-200 mt-5 font-grotesk">
          <button
            onClick={() => setViewTab('pair')}
            className={`px-4 py-2 rounded-full text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
              viewTab === 'pair'
                ? 'bg-white text-slate-950 shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Heart className="w-3.5 h-3.5 text-rose-500" />
            <span>1-on-1 Deep Dive</span>
          </button>

          <button
            onClick={() => setViewTab('matrix')}
            className={`px-4 py-2 rounded-full text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
              viewTab === 'matrix'
                ? 'bg-white text-slate-950 shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Grid className="w-3.5 h-3.5 text-slate-600" />
            <span>4x4 Grid Matrix</span>
          </button>

          <button
            onClick={() => setViewTab('team')}
            className={`px-4 py-2 rounded-full text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
              viewTab === 'team'
                ? 'bg-white text-slate-950 shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Users className="w-3.5 h-3.5 text-purple-600" />
            <span>Team & Group Modeler</span>
          </button>
        </div>
      </div>

      {viewTab === 'pair' && (
        <div className="space-y-6">
          {/* Pair Selectors */}
          <div className="bg-white rounded-2xl border border-slate-200/80 shadow-xs p-6 sm:p-7 font-grotesk">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
              {/* You */}
              <div className="space-y-2.5">
                <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-500">
                  Primary Motive (You)
                </label>
                <div className="grid grid-cols-4 gap-2">
                  {colorsList.map((c) => {
                    const p = COLOR_PROFILES[c];
                    const isSelected = youColor === c;
                    return (
                      <button
                        key={`you-${c}`}
                        onClick={() => setYouColor(c)}
                        className={`p-3 rounded-xl border text-center transition-all cursor-pointer ${
                          isSelected
                            ? 'shadow-xs ring-2'
                            : 'border-slate-200/90 bg-white hover:border-slate-300 text-slate-800'
                        }`}
                        style={{
                          backgroundColor: isSelected ? `${p.colorHex}12` : undefined,
                          borderColor: isSelected ? p.colorHex : undefined,
                          color: isSelected ? '#0f172a' : undefined
                        }}
                      >
                        <span 
                          className="w-2.5 h-2.5 rounded-full inline-block mb-1"
                          style={{ backgroundColor: p.colorHex }}
                        />
                        <div className="font-bold text-xs">{p.name}</div>
                        <div className={`text-[10px] font-medium ${isSelected ? 'text-slate-700 font-semibold' : 'text-slate-400'}`}>
                          {p.motive}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Partner */}
              <div className="space-y-2.5">
                <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-500">
                  Counterpart Motive (Partner / Colleague)
                </label>
                <div className="grid grid-cols-4 gap-2">
                  {colorsList.map((c) => {
                    const p = COLOR_PROFILES[c];
                    const isSelected = partnerColor === c;
                    return (
                      <button
                        key={`partner-${c}`}
                        onClick={() => setPartnerColor(c)}
                        className={`p-3 rounded-xl border text-center transition-all cursor-pointer ${
                          isSelected
                            ? 'shadow-xs ring-2'
                            : 'border-slate-200/90 bg-white hover:border-slate-300 text-slate-800'
                        }`}
                        style={{
                          backgroundColor: isSelected ? `${p.colorHex}12` : undefined,
                          borderColor: isSelected ? p.colorHex : undefined,
                          color: isSelected ? '#0f172a' : undefined
                        }}
                      >
                        <span 
                          className="w-2.5 h-2.5 rounded-full inline-block mb-1"
                          style={{ backgroundColor: p.colorHex }}
                        />
                        <div className="font-bold text-xs">{p.name}</div>
                        <div className={`text-[10px] font-medium ${isSelected ? 'text-slate-700 font-semibold' : 'text-slate-400'}`}>
                          {p.motive}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Matchup Hero Spotlight */}
          <div className="bg-white rounded-2xl border border-slate-200/80 shadow-xs p-6 sm:p-8 space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-4 pb-5 border-b border-slate-100">
              <div className="flex items-center gap-3.5">
                <div className="flex items-center -space-x-2">
                  <div 
                    className="w-10 h-10 rounded-xl border-2 border-white shadow-xs flex items-center justify-center text-white font-bold text-sm font-grotesk ring-1 ring-black/5"
                    style={{ backgroundColor: youProfile.colorHex }}
                  >
                    {youProfile.name[0]}
                  </div>
                  <div 
                    className="w-10 h-10 rounded-xl border-2 border-white shadow-xs flex items-center justify-center text-white font-bold text-sm font-grotesk ring-1 ring-black/5"
                    style={{ backgroundColor: partnerProfile.colorHex }}
                  >
                    {partnerProfile.name[0]}
                  </div>
                </div>

                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <h2 className="font-editorial text-2xl sm:text-3xl font-normal text-slate-900 tracking-tight">
                      {youProfile.name} + {partnerProfile.name}
                    </h2>
                    <span 
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold font-grotesk"
                      style={{ 
                        backgroundColor: `${youProfile.colorHex}12`, 
                        color: '#0f172a',
                        border: `1px solid ${partnerProfile.colorHex}35`
                      }}
                    >
                      <span className="w-2 h-2 rounded-full" style={{ backgroundColor: youProfile.colorHex }} />
                      <span className="w-2 h-2 rounded-full" style={{ backgroundColor: partnerProfile.colorHex }} />
                      <span>{pairing.compatibilityLevel}</span>
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm font-medium font-grotesk text-slate-500 mt-1">
                    {pairing.scoreTitle}
                  </p>
                </div>
              </div>
            </div>

            {/* Dynamic Duo-Tone Overview Box */}
            <div 
              className="p-5 sm:p-6 rounded-xl border transition-all text-sm sm:text-base text-slate-800 leading-relaxed font-grotesk"
              style={{ 
                background: `linear-gradient(135deg, ${youProfile.colorHex}0d 0%, ${partnerProfile.colorHex}0d 100%)`,
                borderColor: `${youProfile.colorHex}30`
              }}
            >
              {pairing.synergyOverview}
            </div>

            {/* Strengths & Challenges */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 font-grotesk">
              <div className="p-4 sm:p-5 border-l-4 border-emerald-500 bg-emerald-50/50 rounded-xl space-y-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-950 flex items-center gap-1.5 font-grotesk">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Natural Strengths & Chemistry</span>
                </h4>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  {pairing.strengths}
                </p>
              </div>

              <div className="p-4 sm:p-5 border-l-4 border-rose-500 bg-rose-50/50 rounded-xl space-y-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-rose-950 flex items-center gap-1.5 font-grotesk">
                  <AlertTriangle className="w-4 h-4 text-rose-600 shrink-0" />
                  <span>Predictable Friction Sparks</span>
                </h4>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  {pairing.challenges}
                </p>
              </div>
            </div>

            {/* Dynamic Communication Protocol */}
            <div className="p-5 sm:p-6 bg-slate-50/70 border border-slate-200/80 rounded-2xl space-y-3 font-grotesk">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-purple-700 shrink-0" />
                <span>Relationship Protocols & Rules for Thriving:</span>
              </h4>
              <ul className="space-y-2.5 pt-1">
                {pairing.communicationProtocol.map((rule, idx) => {
                  const isEven = idx % 2 === 0;
                  const activeColor = isEven ? youProfile : partnerProfile;
                  return (
                    <li 
                      key={idx} 
                      className="p-3.5 sm:p-4 rounded-xl border-l-4 text-xs sm:text-sm text-slate-800 leading-relaxed transition-all shadow-2xs"
                      style={{ 
                        backgroundColor: `${activeColor.colorHex}0a`,
                        borderLeftColor: activeColor.colorHex,
                        borderTop: `1px solid ${activeColor.colorHex}20`,
                        borderRight: `1px solid ${activeColor.colorHex}20`,
                        borderBottom: `1px solid ${activeColor.colorHex}20`
                      }}
                    >
                      <div className="flex items-center gap-2 mb-1">
                        <span 
                          className="text-[10px] font-bold font-mono px-2 py-0.5 rounded-full"
                          style={{ 
                            backgroundColor: `${activeColor.colorHex}20`,
                            color: activeColor.colorHex
                          }}
                        >
                          {activeColor.name} PRINCIPLE
                        </span>
                      </div>
                      <span className="font-medium text-slate-800">{rule}</span>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Dynamic Duo-Themed Golden Rule Card */}
            <div 
              className="p-5 sm:p-7 rounded-2xl text-white space-y-2.5 shadow-md border"
              style={{ 
                background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
                borderColor: 'rgba(255, 255, 255, 0.12)'
              }}
            >
              <div className="flex items-center justify-between gap-2">
                <div className="text-[11px] font-bold font-grotesk uppercase tracking-widest flex items-center gap-2">
                  <div className="flex items-center -space-x-1">
                    <Sparkles className="w-3.5 h-3.5" style={{ color: youProfile.colorHex }} />
                    <Sparkles className="w-3.5 h-3.5" style={{ color: partnerProfile.colorHex }} />
                  </div>
                  <span className="text-slate-200">A simple guide to understanding who you are and why you do the things you do</span>
                </div>

                <div className="flex items-center gap-1.5">
                  <span 
                    className="text-[10px] font-bold font-mono px-2 py-0.5 rounded-full text-white"
                    style={{ backgroundColor: `${youProfile.colorHex}99` }}
                  >
                    {youProfile.name}
                  </span>
                  <span className="text-slate-400 text-xs">+</span>
                  <span 
                    className="text-[10px] font-bold font-mono px-2 py-0.5 rounded-full text-white"
                    style={{ backgroundColor: `${partnerProfile.colorHex}99` }}
                  >
                    {partnerProfile.name}
                  </span>
                </div>
              </div>

              <p className="font-editorial text-lg sm:text-2xl font-normal text-white leading-relaxed italic tracking-wide pt-1">
                "{pairing.goldenRule}"
              </p>
            </div>
          </div>
        </div>
      )}

      {viewTab === 'matrix' && (
        <div className="bg-white rounded-lg border border-slate-200 shadow-xs p-6 space-y-4">
          <div className="flex items-center justify-between pb-2 border-b border-slate-100">
            <div>
              <h3 className="text-sm font-bold text-slate-900">4x4 Hartman Compatibility Matrix Grid</h3>
              <p className="text-xs text-slate-500">Click any cell to inspect detailed partnership dynamics.</p>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-xs">
              <thead>
                <tr>
                  <th className="p-2.5 bg-slate-50 border border-slate-200 text-left font-bold text-slate-500">
                    You ↓ / Partner →
                  </th>
                  {colorsList.map((c) => {
                    const p = COLOR_PROFILES[c];
                    return (
                      <th
                        key={`th-${c}`}
                        className="p-2.5 border border-slate-200 font-bold text-center"
                        style={{ color: p.colorHex, backgroundColor: p.bgLight }}
                      >
                        {p.name} ({p.motive})
                      </th>
                    );
                  })}
                </tr>
              </thead>
              <tbody>
                {colorsList.map((r) => {
                  const rProf = COLOR_PROFILES[r];
                  return (
                    <tr key={`tr-${r}`}>
                      <th
                        className="p-2.5 border border-slate-200 font-bold text-left"
                        style={{ color: rProf.colorHex, backgroundColor: rProf.bgLight }}
                      >
                        {rProf.name}
                      </th>
                      {colorsList.map((c) => {
                        const cellPair = getCompatibility(r, c);
                        const isCurrentPair = (r === youColor && c === partnerColor) || (r === partnerColor && c === youColor);
                        return (
                          <td
                            key={`td-${r}-${c}`}
                            onClick={() => {
                              setYouColor(r);
                              setPartnerColor(c);
                              setViewTab('pair');
                            }}
                            className={`p-2.5 border border-slate-200 text-center cursor-pointer transition-all hover:bg-slate-50 ${
                              isCurrentPair ? 'ring-2 ring-slate-900 bg-slate-100 font-bold' : ''
                            }`}
                          >
                            <div className="font-bold text-slate-900 text-xs line-clamp-1">{cellPair.scoreTitle.split(':')[0]}</div>
                            <span className="text-[10px] text-slate-500 block mt-0.5">{cellPair.compatibilityLevel}</span>
                          </td>
                        );
                      })}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {viewTab === 'team' && (
        <div className="space-y-6">
          {/* Team Composition & Balance Bar */}
          <div className="bg-white rounded-lg border border-slate-200 shadow-xs p-6 space-y-5">
            <h3 className="text-sm font-bold text-slate-900">Group Archetype Distribution</h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {colorsList.map((c) => {
                const p = COLOR_PROFILES[c];
                const count = teamTally[c];
                const pct = Math.round((count / totalTeam) * 100);
                return (
                  <div key={c} className={`p-3.5 rounded-lg border ${p.bgLight} ${p.borderClass}`}>
                    <div className="flex items-center gap-1.5 mb-1">
                      <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: p.colorHex }} />
                      <strong className="text-xs font-bold text-slate-900">{p.name}</strong>
                    </div>
                    <div className="text-xl font-bold text-slate-900">{count} <span className="text-xs font-normal text-slate-500">({pct}%)</span></div>
                    <p className="text-[10px] font-mono text-slate-600 mt-0.5 uppercase tracking-wider">{p.motive} Drive</p>
                  </div>
                );
              })}
            </div>

            {/* Diagnostic Alert based on Team Composition */}
            <div className="space-y-2 pt-2 border-t border-slate-100">
              <h4 className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Team Dynamics Diagnostic:</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {teamTally.R === 0 && (
                  <div className="p-3 border-l-2 border-amber-500 bg-amber-50/40 rounded-r text-xs text-slate-800">
                    <strong>Zero Reds:</strong> Potential risk of decision paralysis and missed deadlines. Designate a clear authority for final milestone sign-offs.
                  </div>
                )}
                {teamTally.B === 0 && (
                  <div className="p-3 border-l-2 border-amber-500 bg-amber-50/40 rounded-r text-xs text-slate-800">
                    <strong>Zero Blues:</strong> Risk of neglecting quality control, code craftsmanship, and team emotional connection.
                  </div>
                )}
                {teamTally.W === 0 && (
                  <div className="p-3 border-l-2 border-amber-500 bg-amber-50/40 rounded-r text-xs text-slate-800">
                    <strong>Zero Whites:</strong> Elevated risk of executive burnout and ego friction without a calm, objective mediator.
                  </div>
                )}
                {teamTally.Y === 0 && (
                  <div className="p-3 border-l-2 border-amber-500 bg-amber-50/40 rounded-r text-xs text-slate-800">
                    <strong>Zero Yellows:</strong> Culture risks becoming dry and clinical. Spontaneous enthusiasm and creative experimentation may drop.
                  </div>
                )}
                {teamTally.R > 0 && teamTally.B > 0 && teamTally.W > 0 && teamTally.Y > 0 && (
                  <div className="p-3 border-l-2 border-emerald-500 bg-emerald-50/40 rounded-r text-xs text-slate-800 col-span-2">
                    <strong>Equilibrium Achieved:</strong> All four core motives (Power, Intimacy, Peace, and Joy) are represented in the group.
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Manage Team Members */}
          <div className="bg-white rounded-lg border border-slate-200 shadow-xs p-6 space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-bold text-slate-900">Group Members ({teamMembers.length})</h3>
            </div>

            {/* Add Member Form */}
            <form onSubmit={handleAddTeamMember} className="p-3 bg-slate-50 rounded-lg border border-slate-200 grid grid-cols-1 sm:grid-cols-4 gap-2.5 items-center">
              <input
                type="text"
                value={newMemberName}
                onChange={(e) => setNewMemberName(e.target.value)}
                placeholder="Name (e.g. David)"
                className="text-xs font-medium p-2 rounded border border-slate-200 bg-white outline-none focus:ring-1 focus:ring-slate-900"
              />
              <select
                value={newMemberColor}
                onChange={(e) => setNewMemberColor(e.target.value as ColorCode)}
                className="text-xs font-medium p-2 rounded border border-slate-200 bg-white outline-none focus:ring-1 focus:ring-slate-900"
              >
                <option value="R">RED (Power & Results)</option>
                <option value="B">BLUE (Intimacy & Quality)</option>
                <option value="W">WHITE (Peace & Clarity)</option>
                <option value="Y">YELLOW (Fun & Joy)</option>
              </select>
              <input
                type="text"
                value={newMemberRole}
                onChange={(e) => setNewMemberRole(e.target.value)}
                placeholder="Role (e.g. Lead Architect)"
                className="text-xs font-medium p-2 rounded border border-slate-200 bg-white outline-none focus:ring-1 focus:ring-slate-900"
              />
              <button
                type="submit"
                className="py-2 px-3 rounded text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 transition flex items-center justify-center gap-1 shadow-xs"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>Add Member</span>
              </button>
            </form>

            {/* List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5">
              {teamMembers.map((member) => {
                const p = COLOR_PROFILES[member.color];
                return (
                  <div key={member.id} className="p-3 rounded-lg border border-slate-200 bg-white shadow-2xs flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full shrink-0" style={{ backgroundColor: p.colorHex }} />
                      <div>
                        <div className="font-bold text-xs text-slate-900">{member.name}</div>
                        <div className="text-[10px] text-slate-500">{member.role} • <strong>{p.name}</strong></div>
                      </div>
                    </div>
                    <button
                      onClick={() => handleDeleteTeamMember(member.id)}
                      className="p-1 text-slate-400 hover:text-rose-600 hover:bg-slate-50 rounded transition"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
