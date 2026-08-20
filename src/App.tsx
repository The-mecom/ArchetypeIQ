import React, { useState, useEffect } from 'react';
import { Navbar, AppTab } from './components/Navbar';
import { HomeScreen } from './components/HomeScreen';
import { QuizEngine } from './components/QuizEngine';
import { ResultView } from './components/ResultView';
import { LiteratureLibrary } from './components/LiteratureLibrary';
import { ArchetypeExplorer } from './components/ArchetypeExplorer';
import { CommunicationEngine } from './components/CommunicationEngine';
import { ToneOptimizerAndCoach } from './components/ToneOptimizerAndCoach';
import { CompatibilityMatrixView } from './components/CompatibilityMatrixView';
import { SavedProfilesManager } from './components/SavedProfilesManager';
import { LegalDisclaimer } from './components/LegalDisclaimer';
import { TestResultData, getLatestResult, saveLatestResult } from './utils/storage';
import { ColorCode } from './types/personality';

export function App() {
  const [activeTab, setActiveTab] = useState<AppTab>('home');
  const [currentResult, setCurrentResult] = useState<TestResultData | null>(null);
  const [assessmentView, setAssessmentView] = useState<'quiz' | 'result'>('quiz');
  const [quizInitialMode, setQuizInitialMode] = useState<'full' | 'quick'>('full');

  // Active navigation states for cross-component launches
  const [senderColor, setSenderColor] = useState<ColorCode>('R');
  const [receiverColor, setReceiverColor] = useState<ColorCode>('B');
  const [targetArchetypeDetail, setTargetArchetypeDetail] = useState<ColorCode>('R');

  // Load existing result on mount if available
  useEffect(() => {
    const saved = getLatestResult();
    if (saved) {
      setCurrentResult(saved);
      setSenderColor(saved.primaryColor);
    }
  }, []);

  const handleQuizComplete = (result: TestResultData) => {
    setCurrentResult(result);
    saveLatestResult(result);
    setSenderColor(result.primaryColor);
    setAssessmentView('result');
  };

  const handleRetakeQuiz = () => {
    setAssessmentView('quiz');
  };

  const handleLaunchAssessment = (mode: 'full' | 'quick' = 'full') => {
    setQuizInitialMode(mode);
    setAssessmentView('quiz');
    setActiveTab('assessment');
  };

  const handleNavigateToCommunication = (primaryColor: ColorCode) => {
    setSenderColor(primaryColor);
    setActiveTab('communication');
  };

  const handleNavigateToCompatibility = (primaryColor: ColorCode) => {
    setSenderColor(primaryColor);
    setActiveTab('compatibility');
  };

  const handleOpenArchetypeDetail = (color: ColorCode) => {
    setTargetArchetypeDetail(color);
    setActiveTab('archetypes');
  };

  const handleOpenAiRewriter = (recColor: ColorCode) => {
    setReceiverColor(recColor);
    setActiveTab('coach');
  };

  const handleComparePair = (sender: ColorCode, receiver: ColorCode) => {
    setSenderColor(sender);
    setReceiverColor(receiver);
    setActiveTab('compatibility');
  };

  const handleOpenPlaybook = (sender: ColorCode, receiver: ColorCode) => {
    setSenderColor(sender);
    setReceiverColor(receiver);
    setActiveTab('communication');
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-grotesk text-slate-900 antialiased selection:bg-slate-900 selection:text-white">
      {/* Top Main Navigation Bar */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        hasResult={!!currentResult}
      />

      {/* Main Content Area */}
      <main className="flex-1 pb-16">
        {activeTab === 'home' && (
          <HomeScreen
            onNavigateTab={setActiveTab}
            onLaunchAssessment={handleLaunchAssessment}
            onOpenArchetype={handleOpenArchetypeDetail}
            onOpenPlaybook={handleOpenPlaybook}
            onOpenAiCoach={handleOpenAiRewriter}
            hasResult={!!currentResult}
            userPrimaryColor={currentResult?.primaryColor || 'R'}
          />
        )}

        {activeTab === 'assessment' && (
          <>
            {assessmentView === 'quiz' ? (
              <QuizEngine
                onComplete={handleQuizComplete}
                hasExistingResult={!!currentResult}
                onViewExistingResult={() => setAssessmentView('result')}
                initialMode={quizInitialMode}
              />
            ) : currentResult ? (
              <ResultView
                result={currentResult}
                onRetake={handleRetakeQuiz}
                onNavigateToCommunication={handleNavigateToCommunication}
                onNavigateToCompatibility={handleNavigateToCompatibility}
                onOpenArchetypeDetail={handleOpenArchetypeDetail}
              />
            ) : (
              <QuizEngine
                onComplete={handleQuizComplete}
                initialMode={quizInitialMode}
              />
            )}
          </>
        )}

        {activeTab === 'literature' && (
          <LiteratureLibrary
            onOpenCommunicationPlaybook={() => setActiveTab('communication')}
            onNavigateLegal={() => setActiveTab('legal')}
          />
        )}

        {activeTab === 'archetypes' && (
          <ArchetypeExplorer
            initialColor={targetArchetypeDetail || currentResult?.primaryColor || 'R'}
          />
        )}

        {activeTab === 'communication' && (
          <CommunicationEngine
            initialSenderColor={senderColor || currentResult?.primaryColor || 'R'}
            initialReceiverColor={receiverColor || 'B'}
            onOpenAiRewriter={handleOpenAiRewriter}
          />
        )}

        {activeTab === 'coach' && (
          <ToneOptimizerAndCoach
            initialRecipientColor={receiverColor || 'R'}
            initialSenderColor={currentResult?.primaryColor || 'B'}
          />
        )}

        {activeTab === 'compatibility' && (
          <CompatibilityMatrixView
            initialYouColor={currentResult?.primaryColor || 'R'}
            initialPartnerColor={receiverColor || 'B'}
          />
        )}

        {activeTab === 'profiles' && (
          <SavedProfilesManager
            onComparePair={handleComparePair}
            onOpenPlaybook={handleOpenPlaybook}
          />
        )}

        {activeTab === 'legal' && (
          <LegalDisclaimer
            onNavigateTab={setActiveTab}
          />
        )}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 py-10 print:hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3 cursor-pointer" onClick={() => setActiveTab('home')}>
              <div className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center p-1 bg-slate-50 shadow-2xs">
                <div className="grid grid-cols-2 gap-0.5 w-4 h-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-400" />
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                </div>
              </div>
              <div>
                <span className="font-editorial font-bold text-base text-slate-900 tracking-tight">Archetype<span className="text-purple-700 font-serif">.iq</span></span>
                <p className="text-xs text-slate-500 font-grotesk">Core Motive Psychology & Communication Intelligence</p>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-slate-600 font-medium font-grotesk">
              <button onClick={() => setActiveTab('home')} className="hover:text-slate-900">Home</button>
              <button onClick={() => setActiveTab('assessment')} className="hover:text-slate-900">Personality Test</button>
              <button onClick={() => setActiveTab('archetypes')} className="hover:text-slate-900">Personality Types</button>
              <button onClick={() => setActiveTab('communication')} className="hover:text-slate-900">Strategy Playbook</button>
              <button onClick={() => setActiveTab('coach')} className="hover:text-slate-900">AI Coach</button>
              <button onClick={() => setActiveTab('compatibility')} className="hover:text-slate-900">Teams & Synergy</button>
              <button onClick={() => setActiveTab('literature')} className="hover:text-slate-900">Resources</button>
              <button onClick={() => setActiveTab('legal')} className={`hover:text-slate-900 font-semibold ${activeTab === 'legal' ? 'text-purple-700' : 'text-slate-500'}`}>Legal & Fair Use</button>
            </div>
          </div>

          <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-slate-400 font-grotesk">
            <p>
              Theoretical foundation formulated from the published clinical research of <strong>Dr. Taylor Hartman, Ph.D.</strong> Independent educational application.
            </p>
            <div className="flex items-center gap-3">
              <button onClick={() => setActiveTab('legal')} className="underline hover:text-slate-600">
                Copyright & Trademark Attribution
              </button>
              <span>•</span>
              <p>
                Archetype.iq
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
