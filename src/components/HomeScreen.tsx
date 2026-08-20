import React, { useState } from 'react';
import { ColorCode } from '../types/personality';
import { COLOR_PROFILES } from '../data/hartmanProfiles';
import { getCompatibility } from '../data/compatibilityMatrix';
import { AppTab } from './Navbar';
import { 
  ClipboardCheck, 
  Sparkles, 
  MessageSquare, 
  Wand2, 
  HeartHandshake, 
  BookOpen, 
  Users, 
  ArrowRight, 
  CheckCircle2, 
  Zap, 
  Layers, 
  Quote, 
  ArrowUpRight,
  ChevronRight,
  Shield,
  Clock,
  Compass,
  Smile,
  Flame,
  Award
} from 'lucide-react';

interface HomeScreenProps {
  onNavigateTab: (tab: AppTab) => void;
  onLaunchAssessment: (mode?: 'full' | 'quick') => void;
  onOpenArchetype: (color: ColorCode) => void;
  onOpenPlaybook: (sender: ColorCode, receiver: ColorCode) => void;
  onOpenAiCoach: (recipientColor: ColorCode) => void;
  hasResult: boolean;
  userPrimaryColor?: ColorCode;
}

export const HomeScreen: React.FC<HomeScreenProps> = ({
  onNavigateTab,
  onLaunchAssessment,
  onOpenArchetype,
  onOpenPlaybook,
  onOpenAiCoach,
  hasResult,
  userPrimaryColor = 'R'
}) => {
  // Interactive mini widgets state on home screen
  const [quickSender, setQuickSender] = useState<ColorCode>('R');
  const [quickReceiver, setQuickReceiver] = useState<ColorCode>('B');
  const [quickTranslateCategory, setQuickTranslateCategory] = useState<'feedback' | 'urgency' | 'appreciation'>('feedback');

  const [interactiveYou, setInteractiveYou] = useState<ColorCode>('R');
  const [interactivePartner, setInteractivePartner] = useState<ColorCode>('B');

  const colorsList: ColorCode[] = ['R', 'B', 'W', 'Y'];
  const quickPair = getCompatibility(interactiveYou, interactivePartner);

  const sampleTranslations = {
    feedback: {
      fromRed: 'This draft is sloppy. Fix the second slide before tomorrow.',
      toBlue: 'I truly value your attention to craft. Slide two is missing a key detail we promised the team—could you polish that before tomorrow’s review?',
      toWhite: 'Whenever you have a few minutes this afternoon, take a look at slide two. We just need to clarify one point before tomorrow.',
      toYellow: 'The presentation concept is fantastic! Let’s make slide two punchier so leadership gets as excited as we are.'
    },
    urgency: {
      fromRed: 'I need this completed ASAP. Stop what you’re doing.',
      toBlue: 'I know you have a lot on your plate. This client deliverable has become critical to our commitments—can I support you in reprioritizing?',
      toWhite: 'No rush on the rest, but if you could send over that single spreadsheet today with zero fuss, it would really help maintain our baseline.',
      toYellow: 'Let’s crush this quick milestone together right now so we can wrap up and move on to the fun launch party!'
    },
    appreciation: {
      fromRed: 'Good job hitting the target.',
      toBlue: 'I deeply appreciate your loyalty, moral integrity, and the heartfelt effort you poured into this project.',
      toWhite: 'Thank you for bringing calm, steady balance and clear thinking to our team without any drama.',
      toYellow: 'You are the absolute life of this team! Your infectious enthusiasm and creative spark made this entire launch amazing!'
    }
  };

  const capabilities = [
    {
      id: 'assessment',
      tab: 'assessment' as AppTab,
      number: '01',
      title: 'Core Motive Diagnostic Battery',
      subtitle: 'Clinical Assessment & Statistical Profiling',
      description: 'Discover your innate psychological driving engine with either a 45-Question comprehensive clinical diagnostic or a 12-Question rapid motive battery.',
      badges: ['45-Item Clinical Standard', '12-Item Rapid Diagnostic', 'Motive vs. Personality'],
      icon: ClipboardCheck,
      color: '#2563eb',
      borderColor: 'hover:border-blue-500',
      actionText: hasResult ? 'View Your Complete Dossier' : 'Begin Assessment',
      onAction: () => onNavigateTab('assessment')
    },
    {
      id: 'archetypes',
      tab: 'archetypes' as AppTab,
      number: '02',
      title: '16-Blend Archetype Spectrum',
      subtitle: 'Primary Drives, Secondary Blends & Shadow Maturation',
      description: 'Detailed psychological profiles of Red (Power), Blue (Intimacy), White (Peace), and Yellow (Fun), plus all 16 Primary-Secondary combinations and character maturation stages.',
      badges: ['4 Core Motives', '16 Blend Dossiers', 'Healthy vs. Shadow Behaviors'],
      icon: Sparkles,
      color: '#7c3aed',
      borderColor: 'hover:border-purple-500',
      actionText: 'Explore 16 Archetype Blends',
      onAction: () => onNavigateTab('archetypes')
    },
    {
      id: 'communication',
      tab: 'communication' as AppTab,
      number: '03',
      title: 'Directional Strategy Playbook',
      subtitle: '16 Cross-Archetype Translation Engines & Word Swaps',
      description: 'Tactical communication scripts for influencing, feedback, and conflict resolution tailored directly from your color to their specific motivational currency.',
      badges: ['16 Directional Matrices', 'Word-Swap Dictionaries', 'Trigger Mitigation'],
      icon: MessageSquare,
      color: '#059669',
      borderColor: 'hover:border-emerald-500',
      actionText: 'Open Script Playbook',
      onAction: () => onNavigateTab('communication')
    },
    {
      id: 'coach',
      tab: 'coach' as AppTab,
      number: '04',
      title: 'AI Tone Optimizer & Roleplay Coach',
      subtitle: 'Gemini-Powered Psychological Rewriting & Simulations',
      description: 'Paste any draft email or message to translate it into your recipient’s emotional currency, or roleplay live high-stakes conversations with simulated archetypes.',
      badges: ['AI Currency Rewriter', 'Interactive Simulator', 'Real-Time Rapport Score'],
      icon: Wand2,
      color: '#dc2626',
      borderColor: 'hover:border-rose-500',
      actionText: 'Launch AI Tone Optimizer',
      onAction: () => onNavigateTab('coach')
    },
    {
      id: 'compatibility',
      tab: 'compatibility' as AppTab,
      number: '05',
      title: '4x4 Compatibility Matrix & Team Modeler',
      subtitle: 'Pairwise Chemistry, Marriage Dynamics & Group Balance',
      description: 'Examine predictable chemistry and friction sparks between any two colors, plus model team composition to diagnose leadership blindspots and motive deficits.',
      badges: ['16 Matchup Blueprints', 'Team Motive Modeler', 'Equilibrium Alerts'],
      icon: HeartHandshake,
      color: '#ea580c',
      borderColor: 'hover:border-amber-500',
      actionText: 'View Compatibility Matrix',
      onAction: () => onNavigateTab('compatibility')
    },
    {
      id: 'literature',
      tab: 'literature' as AppTab,
      number: '06',
      title: 'Analytical Literature & Clinical Library',
      subtitle: 'Foundational Hartman Frameworks, Essays & Studies',
      description: 'Curated essays and deep dives on Character Maturation, Child Development, Corporate Leadership, and Marital Repair directly based on Dr. Taylor Hartman’s research.',
      badges: ['Clinical Papers', 'Printable Dossiers', 'Bookmarking System'],
      icon: BookOpen,
      color: '#0284c7',
      borderColor: 'hover:border-sky-500',
      actionText: 'Browse Literature Vault',
      onAction: () => onNavigateTab('literature')
    },
    {
      id: 'profiles',
      tab: 'profiles' as AppTab,
      number: '07',
      title: 'Stakeholder Persona Vault',
      subtitle: 'Saved Profiles for Teammates, Clients & Partners',
      description: 'Build a private directory of key people in your life, map their primary and secondary motives, and generate 1-click tailored communication strategies for any meeting.',
      badges: ['Directory Management', '1-Click Strategy Launch', 'Contextual Notes'],
      icon: Users,
      color: '#475569',
      borderColor: 'hover:border-slate-500',
      actionText: 'Manage Saved Personas',
      onAction: () => onNavigateTab('profiles')
    }
  ];

  return (
    <div className="w-full bg-slate-50 selection:bg-purple-100 selection:text-purple-900">
      {/* 16Personalities-Inspired Hero Section */}
      <section className="relative pt-16 sm:pt-20 pb-0 overflow-hidden bg-gradient-to-b from-[#f2f4f8] via-[#f7f9fb] to-white border-b border-slate-200/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-6 relative z-10">
          
          {/* Main Hero Headline in Editorial New */}
          <h1 className="font-editorial text-4xl sm:text-6xl lg:text-7xl font-normal text-slate-900 tracking-tight leading-[1.12]">
            Understand the unspoken motives that drive human behavior.
          </h1>

          {/* Subtitle in Neue Haas Grotesk */}
          <p className="font-grotesk text-base sm:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed font-normal">
            A simple guide to understanding who you are and why you do the things you do.
          </p>

          {/* Large Pill CTA Button */}
          <div className="pt-2 pb-6 flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={() => onLaunchAssessment('full')}
              className="inline-flex items-center justify-center whitespace-nowrap px-8 py-4 rounded-full text-base sm:text-lg font-bold font-grotesk text-white bg-[#7c5295] hover:bg-[#6b4383] transition-all shadow-md hover:shadow-lg active:scale-98 cursor-pointer group"
            >
              <span>{hasResult ? 'Review your results' : 'Take the test'}</span>
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform shrink-0" />
            </button>

            <button
              onClick={() => onLaunchAssessment('quick')}
              className="inline-flex items-center justify-center whitespace-nowrap px-6 py-3.5 rounded-full text-xs sm:text-sm font-semibold font-grotesk text-slate-700 bg-white hover:bg-slate-50 transition border border-slate-200 shadow-2xs"
            >
              <Zap className="w-3.5 h-3.5 mr-1.5 text-amber-500 shrink-0" />
              <span>Rapid Test (90s)</span>
            </button>
          </div>
        </div>

        {/* Scenic Illustrative Vector Landscape & Hartman Motive Character Avatars */}
        <div className="relative w-full max-w-6xl mx-auto mt-4 px-4 sm:px-6 select-none pointer-events-none">
          <div className="relative h-64 sm:h-80 w-full overflow-hidden flex items-end justify-center">
            
            {/* Background Mountains & Hills Geometry */}
            <svg 
              className="absolute inset-x-0 bottom-0 w-full h-full text-slate-200" 
              viewBox="0 0 1200 320" 
              fill="none" 
              preserveAspectRatio="none"
            >
              {/* Distant Mountains */}
              <polygon points="0,320 180,120 360,320" fill="#cbd5e1" opacity="0.6" />
              <polygon points="240,320 440,80 640,320" fill="#94a3b8" opacity="0.5" />
              <polygon points="520,320 720,100 920,320" fill="#cbd5e1" opacity="0.7" />
              <polygon points="800,320 1000,110 1200,320" fill="#94a3b8" opacity="0.6" />
              
              {/* Midground Hills */}
              <polygon points="-50,320 200,180 450,320" fill="#5eead4" opacity="0.3" />
              <polygon points="350,320 600,160 850,320" fill="#93c5fd" opacity="0.35" />
              <polygon points="750,320 1000,190 1250,320" fill="#fde047" opacity="0.25" />

              {/* Foreground Gentle Rolling Terrain */}
              <path d="M0,280 C300,240 600,290 1200,260 L1200,320 L0,320 Z" fill="#ffffff" />
            </svg>

            {/* Stylized Character Avatars for 4 Core Hartman Motives */}
            <div className="relative z-10 w-full max-w-4xl flex items-end justify-around pb-4 px-4 sm:px-8">
              
              {/* RED: The Visionary Leader / Driver (Power) */}
              <div className="flex flex-col items-center pointer-events-auto cursor-pointer group" onClick={() => onOpenArchetype('R')}>
                <div className="relative mb-2 transition-transform group-hover:-translate-y-2">
                  <div className="w-16 sm:w-20 h-24 sm:h-28 rounded-t-2xl bg-gradient-to-b from-red-500 to-red-700 border-2 border-white shadow-md flex flex-col items-center justify-between p-2 text-white">
                    <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center text-xs font-bold font-mono">
                      <Flame className="w-3.5 h-3.5 text-white" />
                    </div>
                    <div className="w-8 h-1 bg-white/40 rounded-full my-auto" />
                    <span className="text-[10px] font-bold tracking-widest uppercase font-mono bg-black/20 px-1.5 py-0.5 rounded">
                      RED
                    </span>
                  </div>
                </div>
                <span className="font-editorial text-xs sm:text-sm font-semibold text-slate-800">The Driver</span>
                <span className="text-[10px] text-red-600 font-mono font-bold">POWER</span>
              </div>

              {/* BLUE: The Loyal Empath / Guardian (Intimacy) */}
              <div className="flex flex-col items-center pointer-events-auto cursor-pointer group" onClick={() => onOpenArchetype('B')}>
                <div className="relative mb-2 transition-transform group-hover:-translate-y-2">
                  <div className="w-16 sm:w-20 h-26 sm:h-32 rounded-t-2xl bg-gradient-to-b from-blue-600 to-blue-800 border-2 border-white shadow-md flex flex-col items-center justify-between p-2 text-white">
                    <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center text-xs font-bold font-mono">
                      <Shield className="w-3.5 h-3.5 text-white" />
                    </div>
                    <div className="w-8 h-1 bg-white/40 rounded-full my-auto" />
                    <span className="text-[10px] font-bold tracking-widest uppercase font-mono bg-black/20 px-1.5 py-0.5 rounded">
                      BLUE
                    </span>
                  </div>
                </div>
                <span className="font-editorial text-xs sm:text-sm font-semibold text-slate-800">The Empath</span>
                <span className="text-[10px] text-blue-600 font-mono font-bold">INTIMACY</span>
              </div>

              {/* WHITE: The Serene Sage / Diplomat (Peace) */}
              <div className="flex flex-col items-center pointer-events-auto cursor-pointer group" onClick={() => onOpenArchetype('W')}>
                <div className="relative mb-2 transition-transform group-hover:-translate-y-2">
                  <div className="w-16 sm:w-20 h-24 sm:h-28 rounded-t-2xl bg-gradient-to-b from-slate-400 to-slate-600 border-2 border-white shadow-md flex flex-col items-center justify-between p-2 text-white">
                    <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center text-xs font-bold font-mono">
                      <Compass className="w-3.5 h-3.5 text-white" />
                    </div>
                    <div className="w-8 h-1 bg-white/40 rounded-full my-auto" />
                    <span className="text-[10px] font-bold tracking-widest uppercase font-mono bg-black/20 px-1.5 py-0.5 rounded">
                      WHITE
                    </span>
                  </div>
                </div>
                <span className="font-editorial text-xs sm:text-sm font-semibold text-slate-800">The Diplomat</span>
                <span className="text-[10px] text-slate-600 font-mono font-bold">PEACE</span>
              </div>

              {/* YELLOW: The Creative Spark / Visionary (Fun) */}
              <div className="flex flex-col items-center pointer-events-auto cursor-pointer group" onClick={() => onOpenArchetype('Y')}>
                <div className="relative mb-2 transition-transform group-hover:-translate-y-2">
                  <div className="w-16 sm:w-20 h-22 sm:h-26 rounded-t-2xl bg-gradient-to-b from-amber-400 to-amber-600 border-2 border-white shadow-md flex flex-col items-center justify-between p-2 text-white">
                    <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center text-xs font-bold font-mono">
                      <Smile className="w-3.5 h-3.5 text-white" />
                    </div>
                    <div className="w-8 h-1 bg-white/40 rounded-full my-auto" />
                    <span className="text-[10px] font-bold tracking-widest uppercase font-mono bg-black/20 px-1.5 py-0.5 rounded">
                      YELLOW
                    </span>
                  </div>
                </div>
                <span className="font-editorial text-xs sm:text-sm font-semibold text-slate-800">The Creator</span>
                <span className="text-[10px] text-amber-600 font-mono font-bold">FUN & JOY</span>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* 4 Core Motive Horizontal Pillars */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <span className="text-[11px] font-mono font-bold text-slate-400 uppercase tracking-widest">
            Core Motive Framework
          </span>
          <h2 className="font-editorial text-3xl sm:text-4xl text-slate-900 font-normal mt-1">
            Four Motives. Infinite Human Depth.
          </h2>
          <p className="font-grotesk text-xs sm:text-sm text-slate-600 mt-1.5">
            Dr. Taylor Hartman’s model isolates innate driving motives rather than temporary behaviors.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {colorsList.map((c) => {
            const p = COLOR_PROFILES[c];
            return (
              <div
                key={c}
                onClick={() => onOpenArchetype(c)}
                className="group cursor-pointer p-6 rounded-xl bg-white border border-slate-200 hover:border-slate-400 hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span 
                      className="w-3.5 h-3.5 rounded-full shadow-2xs"
                      style={{ backgroundColor: p.colorHex }}
                    />
                    <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest">
                      {p.name}
                    </span>
                  </div>

                  <h3 className="font-editorial text-2xl text-slate-900 font-normal">
                    {p.motive}
                  </h3>

                  <p className="font-grotesk text-xs text-slate-600 mt-2 leading-relaxed">
                    {p.description}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-700 font-medium group-hover:text-purple-700 transition-colors">
                  <span>Explore 4 Blends</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Full-Screen All Capabilities Suite on Display */}
      <section className="bg-white border-y border-slate-200/80 py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12 pb-4 border-b border-slate-100">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-purple-50 text-purple-800 text-[10px] font-bold uppercase tracking-widest mb-2 border border-purple-200">
                <Layers className="w-3 h-3 text-purple-700" />
                <span>Archetype.iq Platform Suite</span>
              </div>
              <h2 className="font-editorial text-3xl sm:text-5xl text-slate-900 font-normal tracking-tight">
                Everything the app can do
              </h2>
              <p className="font-grotesk text-xs sm:text-sm text-slate-600 mt-1.5 max-w-2xl">
                A complete psychological diagnostic battery, tactical communication engine, and real-time AI coach designed to decode human behavior.
              </p>
            </div>

            <div className="flex items-center gap-2 font-mono text-xs text-slate-500">
              <span className="font-bold text-slate-900">7 Integrated Modules</span>
              <span>•</span>
              <span>Gemini AI Engine</span>
            </div>
          </div>

          {/* 7 Capabilities Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((cap) => {
              const Icon = cap.icon;
              return (
                <div
                  key={cap.id}
                  onClick={cap.onAction}
                  className={`group cursor-pointer bg-slate-50/50 hover:bg-white rounded-xl border border-slate-200 hover:shadow-md transition-all p-6 flex flex-col justify-between ${cap.borderColor}`}
                >
                  <div className="space-y-4">
                    {/* Header */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <div 
                          className="w-10 h-10 rounded-lg flex items-center justify-center shadow-2xs transition-transform group-hover:scale-105"
                          style={{ backgroundColor: cap.color, color: '#ffffff' }}
                        >
                          <Icon className="w-5 h-5" />
                        </div>
                        <span className="font-mono text-xs font-bold text-slate-400">
                          {cap.number}
                        </span>
                      </div>

                      <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-white text-slate-700 border border-slate-200 uppercase">
                        Engine
                      </span>
                    </div>

                    {/* Titles */}
                    <div>
                      <h3 className="font-editorial text-2xl font-normal text-slate-900 group-hover:text-purple-700 transition-colors">
                        {cap.title}
                      </h3>
                      <p className="font-grotesk text-xs font-semibold text-slate-500 mt-0.5">
                        {cap.subtitle}
                      </p>
                    </div>

                    {/* Description */}
                    <p className="font-grotesk text-xs text-slate-600 leading-relaxed">
                      {cap.description}
                    </p>

                    {/* Badges */}
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {cap.badges.map((b, i) => (
                        <span 
                          key={i}
                          className="text-[10px] font-medium px-2 py-0.5 rounded bg-white text-slate-700 border border-slate-200"
                        >
                          {b}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Action Link */}
                  <div className="mt-6 pt-4 border-t border-slate-200/80 flex items-center justify-between">
                    <span className="font-grotesk text-xs font-bold text-slate-900 group-hover:text-purple-700 transition-colors flex items-center gap-1">
                      {cap.actionText}
                    </span>
                    <div className="w-7 h-7 rounded-full bg-white group-hover:bg-purple-700 group-hover:text-white transition-all flex items-center justify-center text-slate-600 border border-slate-200">
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </div>
              );
            })}

            {/* 8th Spotlight Card: Live Interactive Currency Translator Demo */}
            <div className="bg-slate-900 text-white rounded-xl border border-slate-800 shadow-sm p-6 flex flex-col justify-between lg:col-span-2">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-purple-400" />
                    <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-purple-300">
                      Interactive Feature: Word-Swap Currency Engine
                    </span>
                  </div>
                  <button
                    onClick={() => onNavigateTab('communication')}
                    className="text-xs text-slate-300 hover:text-white font-medium flex items-center gap-1"
                  >
                    <span>Open Playbook</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>

                <div>
                  <h3 className="font-editorial text-2xl sm:text-3xl font-normal text-white">
                    Translate your message into any recipient’s psychological currency
                  </h3>
                  <p className="font-grotesk text-xs text-slate-300 mt-1">
                    Select a scenario below to preview how phrasing shifts when targeting different motive profiles:
                  </p>
                </div>

                {/* Scenario selector */}
                <div className="flex items-center gap-2 overflow-x-auto pb-1">
                  {(['feedback', 'urgency', 'appreciation'] as const).map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setQuickTranslateCategory(cat)}
                      className={`px-3 py-1 rounded text-xs font-semibold uppercase tracking-wider transition ${
                        quickTranslateCategory === cat
                          ? 'bg-[#7c5295] text-white'
                          : 'bg-slate-800 text-slate-400 hover:text-white'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>

                {/* Comparison Box */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
                  <div className="p-4 rounded-lg bg-slate-800/90 border border-slate-700/80 space-y-1">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-red-400">
                      Direct Red Style (Power / Results)
                    </span>
                    <p className="font-editorial text-sm text-slate-200 italic">
                      "{sampleTranslations[quickTranslateCategory].fromRed}"
                    </p>
                  </div>

                  <div className="p-4 rounded-lg bg-purple-950/40 border border-purple-800/60 space-y-1">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-purple-300">
                      Translated for Blue (Intimacy / Care / Quality)
                    </span>
                    <p className="font-editorial text-sm text-purple-100 italic">
                      "{sampleTranslations[quickTranslateCategory].toBlue}"
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
                <span>Want real-time AI assistance on your actual draft?</span>
                <button
                  onClick={() => onNavigateTab('coach')}
                  className="px-4 py-2 rounded-full bg-white text-slate-900 font-semibold hover:bg-slate-100 transition flex items-center gap-1.5 text-xs shadow-xs"
                >
                  <Wand2 className="w-3.5 h-3.5 text-purple-700" />
                  <span>Launch AI Coach</span>
                </button>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Interactive Synergy Calculator */}
      <section className="bg-slate-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-8">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-rose-50 text-rose-800 text-[10px] font-bold uppercase tracking-widest mb-2 border border-rose-200">
              <HeartHandshake className="w-3 h-3 text-rose-500" />
              <span>Interactive Chemistry Preview</span>
            </div>
            <h2 className="font-editorial text-3xl sm:text-4xl text-slate-900 font-normal">
              Instant Pairwise Chemistry & Synergy Matrix
            </h2>
            <p className="font-grotesk text-xs sm:text-sm text-slate-600 mt-1">
              Select two core motives to immediately preview natural alignment, friction points, and collaboration protocols.
            </p>
          </div>

          <div className="bg-white rounded-xl border border-slate-200 shadow-xs p-6 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* You */}
              <div className="space-y-2">
                <label className="block text-[10px] font-mono font-bold uppercase tracking-widest text-slate-500">
                  Primary Motive (You)
                </label>
                <div className="grid grid-cols-4 gap-2">
                  {colorsList.map((c) => {
                    const p = COLOR_PROFILES[c];
                    const isSelected = interactiveYou === c;
                    return (
                      <button
                        key={`home-you-${c}`}
                        onClick={() => setInteractiveYou(c)}
                        className={`p-2.5 rounded-lg border text-center transition-all ${
                          isSelected
                            ? 'border-slate-900 bg-slate-900 text-white shadow-xs'
                            : 'border-slate-200 bg-slate-50 hover:bg-white text-slate-800'
                        }`}
                      >
                        <span 
                          className="w-2.5 h-2.5 rounded-full inline-block mb-1"
                          style={{ backgroundColor: p.colorHex }}
                        />
                        <div className="font-bold text-xs font-grotesk">{p.name}</div>
                        <div className={`text-[9px] font-mono ${isSelected ? 'text-slate-300' : 'text-slate-500'}`}>
                          {p.motive}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Partner */}
              <div className="space-y-2">
                <label className="block text-[10px] font-mono font-bold uppercase tracking-widest text-slate-500">
                  Counterpart Motive (Colleague / Partner)
                </label>
                <div className="grid grid-cols-4 gap-2">
                  {colorsList.map((c) => {
                    const p = COLOR_PROFILES[c];
                    const isSelected = interactivePartner === c;
                    return (
                      <button
                        key={`home-part-${c}`}
                        onClick={() => setInteractivePartner(c)}
                        className={`p-2.5 rounded-lg border text-center transition-all ${
                          isSelected
                            ? 'border-slate-900 bg-slate-900 text-white shadow-xs'
                            : 'border-slate-200 bg-slate-50 hover:bg-white text-slate-800'
                        }`}
                      >
                        <span 
                          className="w-2.5 h-2.5 rounded-full inline-block mb-1"
                          style={{ backgroundColor: p.colorHex }}
                        />
                        <div className="font-bold text-xs font-grotesk">{p.name}</div>
                        <div className={`text-[9px] font-mono ${isSelected ? 'text-slate-300' : 'text-slate-500'}`}>
                          {p.motive}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Pair Summary */}
            <div className="bg-slate-50 rounded-lg border border-slate-200 p-5 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-slate-200">
                <div className="flex items-center gap-2">
                  <span className="font-editorial text-2xl font-normal text-slate-900">
                    {COLOR_PROFILES[interactiveYou].name} + {COLOR_PROFILES[interactivePartner].name}
                  </span>
                  <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-white text-slate-800 border border-slate-200">
                    {quickPair.compatibilityLevel}
                  </span>
                </div>
                <button
                  onClick={() => onOpenPlaybook(interactiveYou, interactivePartner)}
                  className="text-xs font-semibold text-purple-700 hover:text-purple-800 flex items-center gap-1"
                >
                  <span>Open Full Strategy Blueprint</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

              <p className="font-grotesk text-xs sm:text-sm text-slate-700 leading-relaxed">
                {quickPair.synergyOverview}
              </p>

              <div className="p-3.5 rounded-md border-l-2 border-purple-600 bg-purple-50/50 space-y-0.5">
                <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-purple-900">
                  Golden Rule for this Pairing
                </span>
                <p className="font-editorial text-sm text-slate-900 italic">
                  "{quickPair.goldenRule}"
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Clinical Quote Footer Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="p-8 sm:p-12 rounded-2xl bg-gradient-to-r from-slate-900 via-purple-950 to-slate-900 text-white shadow-md relative overflow-hidden">
          <div className="max-w-3xl space-y-4 relative z-10">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-purple-300 uppercase tracking-wider">
              <Quote className="w-3.5 h-3.5" />
              <span>Dr. Taylor Hartman, Ph.D.</span>
            </div>

            <h3 className="font-editorial text-3xl sm:text-4xl text-white font-normal leading-snug">
              "Personality is what you do. Character is why you do it. The Color Code is the map to your authentic core."
            </h3>

            <p className="font-grotesk text-xs sm:text-sm text-purple-200/90 leading-relaxed max-w-2xl">
              Unlike surface-level trait inventories, the Hartman model isolates the four core motives—Power, Intimacy, Peace, and Fun—enabling true character maturation and authentic relationships.
            </p>

            <div className="pt-3 flex flex-wrap items-center gap-3">
              <button
                onClick={() => onLaunchAssessment('full')}
                className="px-6 py-3 rounded-full text-xs font-bold text-slate-900 bg-white hover:bg-slate-100 transition flex items-center gap-1.5 shadow-sm"
              >
                <span>Take the Assessment</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={() => onNavigateTab('literature')}
                className="px-5 py-3 rounded-full text-xs font-semibold text-purple-200 hover:text-white bg-white/10 hover:bg-white/20 transition border border-white/10"
              >
                Explore Clinical Literature
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
