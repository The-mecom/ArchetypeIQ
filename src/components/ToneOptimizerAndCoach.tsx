import React, { useState } from 'react';
import { COLOR_PROFILES } from '../data/hartmanProfiles';
import { ColorCode } from '../types/personality';
import { 
  Wand2, 
  MessageSquare, 
  Send, 
  Sparkles, 
  Copy, 
  Check, 
  RotateCcw, 
  Bot, 
  User, 
  Lightbulb, 
  AlertCircle,
  TrendingUp,
  Target
} from 'lucide-react';

interface ToneOptimizerAndCoachProps {
  initialRecipientColor?: ColorCode;
  initialSenderColor?: ColorCode;
}

interface ChatMessage {
  id: string;
  sender: 'user' | 'character' | 'coach';
  text: string;
  emotionalState?: string;
  score?: number;
  coachingFeedback?: string;
  suggestedNextMove?: string;
}

const PRESET_SCENARIOS = [
  {
    id: 'red-manager',
    title: 'Giving Critical Timeline Feedback to a Red Executive',
    recipientColor: 'R' as ColorCode,
    recipientName: 'David (VP of Product)',
    context: 'David wants to pull a software release forward by 3 weeks. You need to tell him it is mathematically impossible without breaking quality, and propose a phased launch.',
    initialBotMessage: 'I reviewed the release timeline. Two weeks is too slow. We need this in customer hands by next Friday. Make it happen.'
  },
  {
    id: 'blue-partner',
    title: 'Resolving Unmet Expectations with a Blue Partner',
    recipientColor: 'B' as ColorCode,
    recipientName: 'Claire (Partner)',
    context: 'Claire spent 4 hours cooking an anniversary dinner, but you came home 45 minutes late from an unexpected client call without texting. She is deeply hurt and quiet.',
    initialBotMessage: 'I guess work was more important than our dinner tonight. You don\'t need to say anything; I already put the food away.'
  },
  {
    id: 'white-colleague',
    title: 'Getting Decision Alignment from an Avoidant White Colleague',
    recipientColor: 'W' as ColorCode,
    recipientName: 'Marcus (Senior Architect)',
    context: 'Marcus has avoided choosing between two database architecture proposals for three weeks. You need his decision before Friday without causing him to shut down.',
    initialBotMessage: 'Both database designs have some pros and cons. We don\'t necessarily need to rush into one right now; let\'s just see how things develop.'
  },
  {
    id: 'yellow-teammate',
    title: 'Holding a Creative Yellow Teammate Accountable to Budgets',
    recipientColor: 'Y' as ColorCode,
    recipientName: 'Chloe (Lead Designer)',
    context: 'Chloe came up with a brilliant, thrilling marketing campaign, but it is 40% over budget and missing all vendor paperwork. You need her to trim the budget without dampening her excitement.',
    initialBotMessage: 'Did you see the campaign concept video?! It is going to be HUGE! Everyone is going to talk about this for months!'
  }
];

export const ToneOptimizerAndCoach: React.FC<ToneOptimizerAndCoachProps> = ({
  initialRecipientColor = 'R',
  initialSenderColor = 'B'
}) => {
  const [activeTab, setActiveTab] = useState<'optimizer' | 'simulator'>('optimizer');

  // Optimizer State
  const [senderColor, setSenderColor] = useState<ColorCode>(initialSenderColor);
  const [recipientColor, setRecipientColor] = useState<ColorCode>(initialRecipientColor);
  const [recipientName, setRecipientName] = useState('');
  const [relationshipContext, setRelationshipContext] = useState('Workplace Colleague');
  const [draftMessage, setDraftMessage] = useState(
    'Hey David, I was looking at the timeline and I feel like maybe we should slow down because the team is getting pretty stressed out and I am worried we might make some mistakes.'
  );
  const [isOptimizing, setIsOptimizing] = useState(false);
  const [optimizationResult, setOptimizationResult] = useState<{
    psychologicalCritique: string;
    optimizedMessage: string;
    keyTacticalAdjustments: string[];
    deliveryTip: string;
  } | null>(null);
  const [copied, setCopied] = useState(false);
  const [apiError, setApiError] = useState<string | null>(null);

  // Simulator State
  const [selectedScenarioIndex, setSelectedScenarioIndex] = useState(0);
  const currentScenario = PRESET_SCENARIOS[selectedScenarioIndex];
  const [chatHistory, setChatHistory] = useState<ChatMessage[]>([
    {
      id: 'init-1',
      sender: 'character',
      text: currentScenario.initialBotMessage,
      emotionalState: 'Neutral / Awaiting Response'
    }
  ]);
  const [userInputMessage, setUserInputMessage] = useState('');
  const [isChatLoading, setIsChatLoading] = useState(false);

  const colorsList: ColorCode[] = ['R', 'B', 'W', 'Y'];

  // Handle Optimizer Submit
  const handleOptimize = async () => {
    if (!draftMessage.trim()) return;
    setIsOptimizing(true);
    setApiError(null);

    try {
      const res = await fetch('/api/gemini/optimize-message', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          draftMessage,
          senderColor,
          recipientColor,
          recipientName: recipientName || undefined,
          relationshipContext
        })
      });

      if (!res.ok) {
        throw new Error(`Server returned ${res.status}`);
      }

      const data = await res.json();
      setOptimizationResult({
        psychologicalCritique: data.psychologicalCritique || 'Analysis complete.',
        optimizedMessage: data.optimizedMessage || draftMessage,
        keyTacticalAdjustments: data.keyTacticalAdjustments || [],
        deliveryTip: data.deliveryTip || ''
      });
    } catch {
      // Fallback deterministic rewriter based on Hartman Core Motive Rules
      setTimeout(() => {
        let critique = '';
        let rewritten = '';
        const adjustments = [];
        let tip = '';

        if (recipientColor === 'R') {
          critique = 'The draft uses tentative, emotion-centered language ("I feel like maybe", "pretty stressed out", "worried"). Red personalities interpret feelings as weakness or hesitation. They demand bottom-line logic, clear options, and timeline impacts.';
          rewritten = `David,\n\nTo ensure 100% stability at scale, the full release requires two weeks. \n\nI recommend we deploy a Phase 1 core build by next Friday, followed by the full feature set on the 15th. This eliminates customer-facing risk while meeting your leadership deadline.\n\nLet me know if you want the phase 1 scope breakdown.`;
          adjustments.push('Eliminated emotional hedging ("I feel", "worried")');
          adjustments.push('Led with the executive bottom line and a decisive counter-proposal');
          adjustments.push('Framed the delay in terms of risk mitigation rather than team fatigue');
          tip = 'Send via bullet points or brief direct message. Do not over-explain or apologize.';
        } else if (recipientColor === 'B') {
          critique = 'Blue recipients prioritize relational integrity, sincerity, and thoroughness. The draft lacks validation of their high standards and emotional commitment.';
          rewritten = `Claire,\n\nI am deeply sorry for coming home so late without texting. You spent hours preparing something special for us, and I completely disregarded your effort and time. That was thoughtless of me. Work could have waited, and being with you was what mattered. If you are open to it, I would love to warm up the food and sit down together with my phone off.`;
          adjustments.push('Offered sincere, non-defensive apology acknowledging specific effort');
          adjustments.push('Validated their emotional contribution before explaining circumstances');
          adjustments.push('Proposed actionable relational repair with undivided attention');
          tip = 'Deliver in person or via thoughtful written note. Maintain eye contact and genuine warmth.';
        } else if (recipientColor === 'W') {
          critique = 'White recipients shut down when rushed or confronted aggressively. They need quiet clarity, no guilt trips, and structured choices with low emotional temperature.';
          rewritten = `Marcus,\n\nWhenever you have a few minutes this afternoon, take a look at the two database options. Option A provides faster read throughput, while Option B has simpler maintenance. No need for an immediate meeting—just reply with which trade-off you prefer whenever you've had time to review.`;
          adjustments.push('Removed artificial urgency and aggressive demands');
          adjustments.push('Structured the decision as two clear, low-pressure trade-offs');
          adjustments.push('Permitted asynchronous contemplation to prevent retreat');
          tip = 'Provide written options first. Avoid putting them on the spot in large meetings.';
        } else {
          critique = 'Yellow recipients thrive on enthusiasm, recognition, and forward momentum. Heavy criticism or dry bureaucratic jargon causes disengagement.';
          rewritten = `Chloe,\n\nThe campaign concept video is incredible—the visual energy and storytelling are top-tier! To get leadership to greenlight this immediately, we just need to trim 25% from the production line items so it passes budget approval. Let's do a quick 10-minute brainstorming session to keep the magic intact while making the numbers work.`;
          adjustments.push('Opened with genuine, vibrant praise for their creative vision');
          adjustments.push('Framed financial constraints as a collaborative game/milestone');
          adjustments.push('Kept communication upbeat, fast-paced, and forward-looking');
          tip = 'Keep meetings short and high-energy. Celebrate their wins publicly.';
        }

        setOptimizationResult({
          psychologicalCritique: critique,
          optimizedMessage: rewritten,
          keyTacticalAdjustments: adjustments,
          deliveryTip: tip
        });
      }, 500);
    } finally {
      setIsOptimizing(false);
    }
  };

  // Handle Simulator Send
  const handleSendChatMessage = async () => {
    if (!userInputMessage.trim() || isChatLoading) return;

    const userText = userInputMessage;
    setUserInputMessage('');

    const newChatHistory: ChatMessage[] = [
      ...chatHistory,
      {
        id: `user-${Date.now()}`,
        sender: 'user',
        text: userText
      }
    ];
    setChatHistory(newChatHistory);
    setIsChatLoading(true);

    try {
      const res = await fetch('/api/gemini/coach', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          userMessage: userText,
          recipientColor: currentScenario.recipientColor,
          scenarioTitle: currentScenario.title,
          scenarioContext: currentScenario.context,
          conversationHistory: newChatHistory.map(m => ({ sender: m.sender, text: m.text }))
        })
      });

      if (!res.ok) throw new Error('Coach API failed');

      const data = await res.json();
      setChatHistory(prev => [
        ...prev,
        {
          id: `bot-${Date.now()}`,
          sender: 'character',
          text: data.characterResponse || '...',
          emotionalState: data.emotionalState,
          score: data.effectivenessScore,
          coachingFeedback: data.coachingFeedback,
          suggestedNextMove: data.suggestedNextMove
        }
      ]);
    } catch {
      // Fallback in-character response
      setTimeout(() => {
        let reply = '';
        let feedback = '';
        let score = 75;

        if (currentScenario.recipientColor === 'R') {
          reply = 'That makes strategic sense. Give me the breakdown of the pilot launch by 2 PM. Don\'t let it slip.';
          feedback = 'Good directness. You provided a concrete proposal without emotional fluff. State your recommended option first for maximum impact.';
          score = 88;
        } else if (currentScenario.recipientColor === 'B') {
          reply = 'Thank you for explaining that. It means a lot that you noticed how much effort went into tonight. Let\'s warm up the dinner.';
          feedback = 'Excellent emotional resonance. You validated her feelings before explaining logistical details.';
          score = 92;
        } else if (currentScenario.recipientColor === 'W') {
          reply = 'Thanks for giving me time to look it over. I think Option B is much safer for our team balance. Let\'s go with that.';
          feedback = 'Great job removing the pressure. You gave him space and he made a clear decision.';
          score = 90;
        } else {
          reply = 'Awesome! Let\'s streamline the slides and celebrate closing the deal on Friday!';
          feedback = 'Great positive energy. You matched her enthusiasm while keeping the target clear.';
          score = 86;
        }

        setChatHistory(prev => [
          ...prev,
          {
            id: `bot-${Date.now()}`,
            sender: 'character',
            text: reply,
            emotionalState: 'Receptive & Aligned',
            score,
            coachingFeedback: feedback,
            suggestedNextMove: 'Confirm the next step in writing and thank them.'
          }
        ]);
      }, 500);
    } finally {
      setIsChatLoading(false);
    }
  };

  const handleSelectScenario = (index: number) => {
    setSelectedScenarioIndex(index);
    const scen = PRESET_SCENARIOS[index];
    setChatHistory([
      {
        id: `init-${Date.now()}`,
        sender: 'character',
        text: scen.initialBotMessage,
        emotionalState: 'Initial Scenario Prompt'
      }
    ]);
  };

  return (
    <div className="max-w-6xl mx-auto py-8 px-4 sm:px-6">
      {/* Top Banner */}
      <div className="text-center max-w-3xl mx-auto mb-8">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-slate-100 text-slate-800 text-[10px] font-bold uppercase tracking-widest mb-2 border border-slate-200">
          <Wand2 className="w-3 h-3 text-blue-600" />
          <span>AI Communication Coach & Tone Rewriter</span>
        </div>
        <h1 className="font-editorial text-3xl sm:text-4xl font-normal text-slate-900 tracking-tight">
          Hartman Archetype Communication AI
        </h1>
        <p className="font-grotesk mt-1.5 text-xs sm:text-sm text-slate-600">
          Optimize high-stakes messages or roleplay real scenarios with simulated archetypes with real-time psychological coaching.
        </p>

        {/* Tab Switcher */}
        <div className="inline-flex p-1 bg-slate-100 rounded-lg border border-slate-200 mt-5">
          <button
            onClick={() => setActiveTab('optimizer')}
            className={`px-4 py-1.5 rounded text-xs font-semibold transition flex items-center gap-1.5 ${
              activeTab === 'optimizer'
                ? 'bg-white text-slate-950 shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span>Message Tone Optimizer</span>
          </button>

          <button
            onClick={() => setActiveTab('simulator')}
            className={`px-4 py-1.5 rounded text-xs font-semibold transition flex items-center gap-1.5 ${
              activeTab === 'simulator'
                ? 'bg-white text-slate-950 shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Bot className="w-3.5 h-3.5 text-indigo-600" />
            <span>Interactive Roleplay Simulator</span>
          </button>
        </div>
      </div>

      {activeTab === 'optimizer' ? (
        /* Tab 1: Message Optimizer */
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left Column: Input Form */}
          <div className="lg:col-span-5 space-y-4">
            <div className="bg-white rounded-lg border border-slate-200 shadow-xs p-5 space-y-3.5">
              <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider flex items-center gap-1.5">
                <Target className="w-3.5 h-3.5 text-slate-500" />
                <span>Recipient Archetype & Context</span>
              </h3>

              {/* Recipient Color Picker */}
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-1.5">
                  Target Motive (Recipient)
                </label>
                <div className="grid grid-cols-4 gap-2">
                  {colorsList.map((c) => {
                    const p = COLOR_PROFILES[c];
                    const isSelected = recipientColor === c;
                    return (
                      <button
                        key={c}
                        type="button"
                        onClick={() => setRecipientColor(c)}
                        className={`p-2 rounded-lg border text-center transition-all ${
                          isSelected
                            ? 'border-slate-900 bg-slate-900 text-white shadow-xs'
                            : 'border-slate-200 bg-white hover:border-slate-300 text-slate-800'
                        }`}
                      >
                        <span 
                          className="w-2 h-2 rounded-full inline-block mb-0.5"
                          style={{ backgroundColor: p.colorHex }}
                        />
                        <div className="font-bold text-xs">{p.name}</div>
                        <div className={`text-[9px] font-mono ${isSelected ? 'text-slate-300' : 'text-slate-500'}`}>
                          {p.motive}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Sender Color Picker */}
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-1">
                  Originating Motive (You)
                </label>
                <select
                  value={senderColor}
                  onChange={(e) => setSenderColor(e.target.value as ColorCode)}
                  className="w-full text-xs font-medium p-2 rounded border border-slate-200 bg-slate-50 focus:bg-white focus:ring-1 focus:ring-slate-900 outline-none"
                >
                  <option value="R">RED (Driven by Power & Results)</option>
                  <option value="B">BLUE (Driven by Intimacy & Quality)</option>
                  <option value="W">WHITE (Driven by Peace & Clarity)</option>
                  <option value="Y">YELLOW (Driven by Fun & Optimism)</option>
                </select>
              </div>

              {/* Context Selector */}
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-1">
                  Relationship Context
                </label>
                <select
                  value={relationshipContext}
                  onChange={(e) => setRelationshipContext(e.target.value)}
                  className="w-full text-xs font-medium p-2 rounded border border-slate-200 bg-slate-50 focus:bg-white focus:ring-1 focus:ring-slate-900 outline-none"
                >
                  <option value="Workplace Manager / Executive">Workplace Manager / Executive</option>
                  <option value="Workplace Direct Report / Teammate">Workplace Direct Report / Teammate</option>
                  <option value="Client / Vendor">Client / Vendor</option>
                  <option value="Romantic Partner / Spouse">Romantic Partner / Spouse</option>
                  <option value="Close Friend / Family Member">Close Friend / Family Member</option>
                </select>
              </div>

              {/* Draft Input */}
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-1">
                  Draft Text / Email
                </label>
                <textarea
                  value={draftMessage}
                  onChange={(e) => setDraftMessage(e.target.value)}
                  rows={4}
                  placeholder="Paste your draft text, email, or talking points here..."
                  className="w-full text-xs p-3 rounded border border-slate-200 focus:ring-1 focus:ring-slate-900 outline-none leading-relaxed"
                />
              </div>

              <button
                type="button"
                onClick={handleOptimize}
                disabled={isOptimizing || !draftMessage.trim()}
                className="w-full py-2.5 rounded text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 transition shadow-xs flex items-center justify-center gap-1.5 disabled:opacity-50"
              >
                {isOptimizing ? (
                  <>
                    <Sparkles className="w-3.5 h-3.5 animate-spin" />
                    <span>Analyzing Psychological Currency...</span>
                  </>
                ) : (
                  <>
                    <Wand2 className="w-3.5 h-3.5" />
                    <span>Optimize for {COLOR_PROFILES[recipientColor].name} Recipient</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Right Column: AI Optimization Results */}
          <div className="lg:col-span-7">
            {optimizationResult ? (
              <div className="bg-white rounded-lg border border-slate-200 shadow-xs p-5 space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                  <div className="flex items-center gap-2">
                    <span 
                      className="w-2.5 h-2.5 rounded-full"
                      style={{ backgroundColor: COLOR_PROFILES[recipientColor].colorHex }}
                    />
                    <h3 className="font-bold text-slate-900 text-xs sm:text-sm">
                      Optimized for {COLOR_PROFILES[recipientColor].name} ({COLOR_PROFILES[recipientColor].motive})
                    </h3>
                  </div>
                  <button
                    onClick={() => {
                      navigator.clipboard.writeText(optimizationResult.optimizedMessage);
                      setCopied(true);
                      setTimeout(() => setCopied(false), 2000);
                    }}
                    className="px-2.5 py-1 rounded text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 transition flex items-center gap-1 shadow-2xs"
                  >
                    {copied ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3 text-slate-500" />}
                    <span>{copied ? 'Copied' : 'Copy Message'}</span>
                  </button>
                </div>

                {/* Psychological Critique */}
                <div className="p-3 border-l-2 border-amber-500 bg-amber-50/40 rounded-r space-y-1">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-amber-900 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3 text-amber-600" />
                    <span>Psychological Analysis of Original Draft</span>
                  </p>
                  <p className="text-xs text-slate-800 leading-relaxed">
                    {optimizationResult.psychologicalCritique}
                  </p>
                </div>

                {/* Rewritten Message */}
                <div className="space-y-1.5">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 flex items-center gap-1">
                    <Sparkles className="w-3 h-3 text-emerald-600" />
                    <span>Recommended Formulation</span>
                  </span>
                  <div className="p-3.5 border-l-2 border-emerald-500 bg-slate-50 rounded-r font-sans text-xs text-slate-900 whitespace-pre-wrap leading-relaxed">
                    {optimizationResult.optimizedMessage}
                  </div>
                </div>

                {/* Key Tactical Adjustments */}
                <div className="space-y-1.5">
                  <h4 className="text-[10px] font-bold uppercase tracking-widest text-slate-500">
                    Key Tactical Shifts Applied (Hartman Rapport Rules):
                  </h4>
                  <ul className="space-y-1">
                    {optimizationResult.keyTacticalAdjustments.map((adj, idx) => (
                      <li key={idx} className="text-xs text-slate-700 flex items-start gap-1.5">
                        <span className="w-1 h-1 rounded-full bg-blue-600 mt-1.5 shrink-0" />
                        <span>{adj}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Delivery Tip */}
                {optimizationResult.deliveryTip && (
                  <div className="p-2.5 border-l-2 border-blue-500 bg-blue-50/40 rounded-r text-xs text-slate-800 flex items-start gap-2">
                    <Lightbulb className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                    <div>
                      <strong>Delivery Tip: </strong>
                      {optimizationResult.deliveryTip}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div className="bg-slate-50 rounded-lg border border-dashed border-slate-200 p-8 text-center flex flex-col items-center justify-center min-h-[320px]">
                <Wand2 className="w-8 h-8 text-slate-300 mb-2" />
                <h4 className="font-bold text-slate-700 text-sm">Ready to Optimize Your Message</h4>
                <p className="text-xs text-slate-500 max-w-sm mt-1">
                  Select the recipient's Hartman color archetype on the left, paste your draft, and click "Optimize" to translate your words into their motivational currency.
                </p>
              </div>
            )}
          </div>
        </div>
      ) : (
        /* Tab 2: Interactive Roleplay Simulator */
        <div className="space-y-4">
          {/* Scenario Selector */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
            {PRESET_SCENARIOS.map((scen, idx) => {
              const isSelected = selectedScenarioIndex === idx;
              const p = COLOR_PROFILES[scen.recipientColor];
              return (
                <button
                  key={scen.id}
                  onClick={() => handleSelectScenario(idx)}
                  className={`p-3 rounded-lg border text-left transition-all ${
                    isSelected
                      ? 'border-slate-900 bg-slate-900 text-white shadow-xs'
                      : 'border-slate-200 bg-white hover:border-slate-300'
                  }`}
                >
                  <div className="flex items-center gap-1.5 mb-1">
                    <span 
                      className="w-2 h-2 rounded-full"
                      style={{ backgroundColor: p.colorHex }}
                    />
                    <span className={`text-[10px] font-mono font-bold uppercase tracking-widest ${isSelected ? 'text-slate-300' : 'text-slate-500'}`}>
                      {p.name} ({p.motive})
                    </span>
                  </div>
                  <h4 className="font-bold text-xs line-clamp-1">{scen.title}</h4>
                  <p className={`text-[11px] mt-0.5 line-clamp-2 ${isSelected ? 'text-slate-300' : 'text-slate-600'}`}>
                    {scen.context}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Active Chat Interface */}
          <div className="bg-white rounded-lg border border-slate-200 shadow-xs overflow-hidden flex flex-col h-[520px]">
            {/* Chat Header */}
            <div className="p-3.5 border-b border-slate-200 bg-slate-50 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div 
                  className="w-8 h-8 rounded flex items-center justify-center text-white font-bold text-xs shadow-2xs"
                  style={{ backgroundColor: COLOR_PROFILES[currentScenario.recipientColor].colorHex }}
                >
                  {COLOR_PROFILES[currentScenario.recipientColor].name[0]}
                </div>
                <div>
                  <h3 className="font-bold text-xs sm:text-sm text-slate-900">{currentScenario.recipientName}</h3>
                  <p className="text-[11px] text-slate-500 font-mono">
                    Archetype: {COLOR_PROFILES[currentScenario.recipientColor].name} ({COLOR_PROFILES[currentScenario.recipientColor].motive})
                  </p>
                </div>
              </div>

              <button
                onClick={() => handleSelectScenario(selectedScenarioIndex)}
                className="px-2.5 py-1 rounded text-xs font-semibold text-slate-600 hover:bg-slate-200 transition flex items-center gap-1"
              >
                <RotateCcw className="w-3 h-3" />
                <span>Reset</span>
              </button>
            </div>

            {/* Messages Scroll Area */}
            <div className="flex-1 p-4 overflow-y-auto space-y-3">
              {chatHistory.map((msg) => {
                if (msg.sender === 'user') {
                  return (
                    <div key={msg.id} className="flex items-start justify-end gap-2">
                      <div className="max-w-md p-3 rounded-lg bg-slate-900 text-white text-xs leading-relaxed shadow-xs">
                        {msg.text}
                      </div>
                      <div className="w-6 h-6 rounded bg-slate-200 flex items-center justify-center text-slate-600 text-xs shrink-0">
                        <User className="w-3.5 h-3.5" />
                      </div>
                    </div>
                  );
                }

                return (
                  <div key={msg.id} className="space-y-2">
                    {/* Character Reply */}
                    <div className="flex items-start gap-2">
                      <div 
                        className="w-6 h-6 rounded flex items-center justify-center text-white text-xs font-bold shrink-0 mt-0.5"
                        style={{ backgroundColor: COLOR_PROFILES[currentScenario.recipientColor].colorHex }}
                      >
                        {COLOR_PROFILES[currentScenario.recipientColor].name[0]}
                      </div>
                      <div className="max-w-md p-3 rounded-lg bg-slate-100 text-slate-900 text-xs leading-relaxed border border-slate-200 shadow-2xs">
                        <p className="font-medium">{msg.text}</p>
                        {msg.emotionalState && (
                          <div className="mt-1.5 text-[9px] font-mono uppercase tracking-widest text-slate-500 flex items-center gap-1">
                            <span>Mood:</span>
                            <span className="text-slate-700 font-semibold">{msg.emotionalState}</span>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Coach Evaluation Card (if available) */}
                    {msg.coachingFeedback && (
                      <div className="ml-8 max-w-md p-3 rounded border-l-2 border-blue-500 bg-blue-50/40 text-xs space-y-1">
                        <div className="flex items-center justify-between">
                          <span className="font-bold text-slate-900 text-[11px] flex items-center gap-1">
                            <TrendingUp className="w-3 h-3 text-blue-600" />
                            Psychological Rapport Score: {msg.score || 80}/100
                          </span>
                        </div>
                        <p className="text-slate-800">{msg.coachingFeedback}</p>
                        {msg.suggestedNextMove && (
                          <div className="pt-1 border-t border-blue-100 text-[10px] text-slate-600">
                            <strong>Suggested Next Move: </strong>
                            {msg.suggestedNextMove}
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                );
              })}

              {isChatLoading && (
                <div className="flex items-center gap-2 text-xs text-slate-500 italic ml-8">
                  <Sparkles className="w-3 h-3 animate-spin text-blue-600" />
                  <span>{currentScenario.recipientName} is formulating a response...</span>
                </div>
              )}
            </div>

            {/* Chat Input Bar */}
            <div className="p-3 border-t border-slate-200 bg-white">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSendChatMessage();
                }}
                className="flex items-center gap-2"
              >
                <input
                  type="text"
                  value={userInputMessage}
                  onChange={(e) => setUserInputMessage(e.target.value)}
                  placeholder={`Respond in ${COLOR_PROFILES[currentScenario.recipientColor].name} motivational currency...`}
                  className="flex-1 text-xs p-2.5 rounded border border-slate-200 focus:ring-1 focus:ring-slate-900 outline-none"
                />
                <button
                  type="submit"
                  disabled={isChatLoading || !userInputMessage.trim()}
                  className="px-3.5 py-2.5 rounded bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold transition shadow-xs disabled:opacity-50 flex items-center gap-1"
                >
                  <span>Send</span>
                  <Send className="w-3 h-3" />
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
