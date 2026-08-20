import React, { useState } from 'react';
import { getSavedProfiles, saveProfile, deleteProfile } from '../utils/storage';
import { SavedPersonProfile, ColorCode } from '../types/personality';
import { COLOR_PROFILES } from '../data/hartmanProfiles';
import { 
  Users, 
  Plus, 
  Trash2, 
  HeartHandshake, 
  MessageSquare, 
  User, 
  Briefcase, 
  Sparkles 
} from 'lucide-react';

interface SavedProfilesManagerProps {
  onComparePair: (sender: ColorCode, receiver: ColorCode) => void;
  onOpenPlaybook: (sender: ColorCode, receiver: ColorCode) => void;
}

export const SavedProfilesManager: React.FC<SavedProfilesManagerProps> = ({
  onComparePair,
  onOpenPlaybook
}) => {
  const [profiles, setProfiles] = useState<SavedPersonProfile[]>(getSavedProfiles());
  const [isAdding, setIsAdding] = useState(false);

  const [newName, setNewName] = useState('');
  const [newRelation, setNewRelation] = useState<SavedPersonProfile['relation']>('Colleague');
  const [newPrimary, setNewPrimary] = useState<ColorCode>('R');
  const [newSecondary, setNewSecondary] = useState<ColorCode>('B');
  const [newNotes, setNewNotes] = useState('');

  const colorsList: ColorCode[] = ['R', 'B', 'W', 'Y'];

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newName.trim()) return;

    saveProfile({
      name: newName.trim(),
      relation: newRelation,
      primaryColor: newPrimary,
      secondaryColor: newSecondary,
      scores: {
        [newPrimary]: 20,
        [newSecondary]: 12,
        W: 6,
        Y: 7
      } as Record<ColorCode, number>,
      notes: newNotes.trim()
    });

    setProfiles(getSavedProfiles());
    setIsAdding(false);
    setNewName('');
    setNewNotes('');
  };

  const handleDelete = (id: string) => {
    if (window.confirm('Delete this persona profile?')) {
      deleteProfile(id);
      setProfiles(getSavedProfiles());
    }
  };

  return (
    <div className="max-w-6xl mx-auto py-8 px-4 sm:px-6">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-slate-100 text-slate-800 text-[10px] font-bold uppercase tracking-widest mb-2 border border-slate-200">
            <Users className="w-3 h-3 text-blue-600" />
            <span>Persona Vault & Stakeholder Directory</span>
          </div>
          <h1 className="font-editorial text-3xl sm:text-4xl font-normal text-slate-900 tracking-tight">
            Saved Archetype Personas
          </h1>
          <p className="font-grotesk mt-1 text-xs sm:text-sm text-slate-600">
            Track stakeholders, teammates, clients, and partners to quickly access tailored communication tactics and compatibility blueprints.
          </p>
        </div>

        <button
          onClick={() => setIsAdding(!isAdding)}
          className="px-3.5 py-2 rounded text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 transition flex items-center gap-1.5 shadow-xs shrink-0"
        >
          <Plus className="w-3.5 h-3.5" />
          <span>{isAdding ? 'Cancel' : 'Add Persona'}</span>
        </button>
      </div>

      {/* Add New Persona Form Modal/Card */}
      {isAdding && (
        <div className="bg-white rounded-lg border border-slate-200 shadow-xs p-5 sm:p-6 mb-6 space-y-4 animate-in fade-in">
          <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider">Add Persona Profile</h3>
          <form onSubmit={handleAdd} className="space-y-3">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-1">
                  Full Name or Nickname
                </label>
                <input
                  type="text"
                  required
                  value={newName}
                  onChange={(e) => setNewName(e.target.value)}
                  placeholder="e.g. David (VP of Product)"
                  className="w-full text-xs p-2 rounded border border-slate-200 focus:ring-1 focus:ring-slate-900 outline-none"
                />
              </div>

              <div>
                <label className="block text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-1">
                  Relationship / Role
                </label>
                <select
                  value={newRelation}
                  onChange={(e) => setNewRelation(e.target.value as SavedPersonProfile['relation'])}
                  className="w-full text-xs p-2 rounded-lg border border-slate-200 bg-white focus:ring-1 focus:ring-purple-600 outline-none font-grotesk"
                >
                  <option value="Self">Self</option>
                  <option value="Partner">Partner</option>
                  <option value="Manager">Manager</option>
                  <option value="Colleague">Colleague</option>
                  <option value="Family Member">Family Member</option>
                  <option value="Child">Child</option>
                  <option value="Friend">Friend</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-1">
                  Primary Motive (Core Driving Force)
                </label>
                <div className="grid grid-cols-4 gap-1.5">
                  {colorsList.map((c) => {
                    const p = COLOR_PROFILES[c];
                    const isSelected = newPrimary === c;
                    return (
                      <button
                        key={`prim-${c}`}
                        type="button"
                        onClick={() => setNewPrimary(c)}
                        className={`p-1.5 rounded border text-center text-xs font-bold transition ${
                          isSelected
                            ? 'border-slate-900 bg-slate-900 text-white'
                            : 'border-slate-200 bg-white text-slate-700'
                        }`}
                      >
                        {p.name}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-1">
                  Secondary Motive (Secondary Influence)
                </label>
                <div className="grid grid-cols-4 gap-1.5">
                  {colorsList.map((c) => {
                    const p = COLOR_PROFILES[c];
                    const isSelected = newSecondary === c;
                    return (
                      <button
                        key={`sec-${c}`}
                        type="button"
                        onClick={() => setNewSecondary(c)}
                        className={`p-1.5 rounded border text-center text-xs font-bold transition ${
                          isSelected
                            ? 'border-slate-900 bg-slate-900 text-white'
                            : 'border-slate-200 bg-white text-slate-700'
                        }`}
                      >
                        {p.name}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            <div>
              <label className="block text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-1">
                Context Notes & Observations
              </label>
              <input
                type="text"
                value={newNotes}
                onChange={(e) => setNewNotes(e.target.value)}
                placeholder="e.g. Provide written agendas beforehand; values bottom-line summaries..."
                className="w-full text-xs p-2 rounded border border-slate-200 focus:ring-1 focus:ring-slate-900 outline-none"
              />
            </div>

            <div className="flex justify-end gap-2 pt-1">
              <button
                type="button"
                onClick={() => setIsAdding(false)}
                className="px-3 py-1.5 rounded text-xs font-semibold text-slate-600 hover:bg-slate-100 transition"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-1.5 rounded text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 transition"
              >
                Save Persona Profile
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Profiles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {profiles.map((person) => {
          const primProfile = COLOR_PROFILES[person.primaryColor];
          const secProfile = COLOR_PROFILES[person.secondaryColor];

          return (
            <div
              key={person.id}
              className="bg-white rounded-lg border border-slate-200 shadow-xs hover:border-slate-300 transition p-5 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="flex items-center -space-x-1">
                      <span 
                        className="w-6 h-6 rounded border border-white shadow-2xs flex items-center justify-center text-white text-[10px] font-bold"
                        style={{ backgroundColor: primProfile.colorHex }}
                      >
                        {primProfile.name[0]}
                      </span>
                      <span 
                        className="w-6 h-6 rounded border border-white shadow-2xs flex items-center justify-center text-white text-[10px] font-bold"
                        style={{ backgroundColor: secProfile.colorHex }}
                      >
                        {secProfile.name[0]}
                      </span>
                    </div>
                    <div>
                      <h3 className="font-bold text-sm text-slate-900 leading-tight">
                        {person.name}
                      </h3>
                      <span className="text-[10px] font-mono text-slate-500">
                        {person.relation}
                      </span>
                    </div>
                  </div>

                  <button
                    onClick={() => handleDelete(person.id)}
                    className="text-slate-400 hover:text-rose-600 p-1 transition"
                    title="Delete Persona"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>

                <div className="p-2.5 border-l-2 border-slate-900 bg-slate-50 rounded-r space-y-0.5">
                  <div className="text-xs font-bold text-slate-900">
                    {primProfile.name} / {secProfile.name} Blend
                  </div>
                  <div className="text-[10px] text-slate-600 font-mono">
                    Primary: <strong>{primProfile.motive}</strong> • Secondary: <strong>{secProfile.motive}</strong>
                  </div>
                </div>

                {person.notes && (
                  <p className="text-xs text-slate-600 italic bg-slate-50 p-2 rounded border border-slate-100">
                    "{person.notes}"
                  </p>
                )}
              </div>

              {/* Action Buttons */}
              <div className="mt-4 pt-3 border-t border-slate-100 grid grid-cols-2 gap-2">
                <button
                  onClick={() => onOpenPlaybook('R', person.primaryColor)}
                  className="px-2.5 py-1.5 rounded text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 transition flex items-center justify-center gap-1"
                >
                  <MessageSquare className="w-3 h-3 text-blue-600" />
                  <span>Playbook</span>
                </button>

                <button
                  onClick={() => onComparePair('R', person.primaryColor)}
                  className="px-2.5 py-1.5 rounded text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 transition flex items-center justify-center gap-1"
                >
                  <HeartHandshake className="w-3 h-3 text-rose-500" />
                  <span>Synergy</span>
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
