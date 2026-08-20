import React, { useState, useEffect, useMemo } from 'react';
import confetti from 'canvas-confetti';
import { FULL_QUESTIONS, QUICK_QUESTIONS } from '../data/questionsData';
import { ColorCode, Question } from '../types/personality';
import { TestResultData } from '../utils/storage';
import { 
  CheckCircle2, 
  ArrowRight, 
  ArrowLeft, 
  RotateCcw, 
  Sparkles, 
  Zap, 
  Clock, 
  ListOrdered,
  HelpCircle,
  Brain
} from 'lucide-react';

interface QuizEngineProps {
  onComplete: (result: TestResultData) => void;
  onViewExistingResult?: () => void;
  hasExistingResult?: boolean;
  initialMode?: 'full' | 'quick';
}

export const QuizEngine: React.FC<QuizEngineProps> = ({
  onComplete,
  onViewExistingResult,
  hasExistingResult,
  initialMode = 'full'
}) => {
  const [testMode, setTestMode] = useState<'full' | 'quick'>(initialMode);
  const [isStarted, setIsStarted] = useState(false);

  useEffect(() => {
    if (initialMode) {
      setTestMode(initialMode);
    }
  }, [initialMode]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, ColorCode>>({});
  const [shuffledOptionsMap, setShuffledOptionsMap] = useState<Record<number, ColorCode[]>>({});

  const questions: Question[] = useMemo(() => {
    return testMode === 'full' ? FULL_QUESTIONS : QUICK_QUESTIONS;
  }, [testMode]);

  // Pre-shuffle options once per question
  useEffect(() => {
    const map: Record<number, ColorCode[]> = {};
    const baseColors: ColorCode[] = ['R', 'B', 'W', 'Y'];
    questions.forEach((q) => {
      const arr = [...baseColors];
      for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
      map[q.id] = arr;
    });
    setShuffledOptionsMap(map);
    setCurrentIndex(0);
    setAnswers({});
  }, [questions]);

  const currentQuestion = questions[currentIndex];
  const totalQuestions = questions.length;
  const answeredCount = Object.keys(answers).length;
  const progressPct = Math.round((answeredCount / totalQuestions) * 100);

  const handleSelectOption = (color: ColorCode) => {
    if (!currentQuestion) return;
    setAnswers((prev) => ({
      ...prev,
      [currentQuestion.id]: color
    }));

    // Auto-advance if not last question
    if (currentIndex < totalQuestions - 1) {
      setTimeout(() => {
        setCurrentIndex((prev) => prev + 1);
      }, 180);
    }
  };

  const handleCalculateResults = () => {
    const tally: Record<ColorCode, number> = { R: 0, B: 0, W: 0, Y: 0 };
    Object.values(answers).forEach((c) => {
      const code = c as ColorCode;
      if (code && tally[code] !== undefined) {
        tally[code]++;
      }
    });

    const sortedColors = (Object.keys(tally) as ColorCode[]).sort((a, b) => tally[b] - tally[a]);
    const primary = sortedColors[0];
    const secondary = sortedColors[1];

    const percentages: Record<ColorCode, number> = {
      R: Math.round((tally.R / totalQuestions) * 100),
      B: Math.round((tally.B / totalQuestions) * 100),
      W: Math.round((tally.W / totalQuestions) * 100),
      Y: Math.round((tally.Y / totalQuestions) * 100)
    };

    // Confetti effect
    try {
      confetti({
        particleCount: 70,
        spread: 60,
        origin: { y: 0.6 }
      });
    } catch {
      // ignore
    }

    const resultData: TestResultData = {
      primaryColor: primary,
      secondaryColor: secondary,
      scores: tally,
      percentages,
      totalQuestions,
      completedAt: new Date().toISOString(),
      testMode
    };

    onComplete(resultData);
  };

  // Keyboard navigation
  useEffect(() => {
    if (!isStarted || !currentQuestion) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' && currentIndex < totalQuestions - 1) {
        setCurrentIndex((i) => i + 1);
      } else if (e.key === 'ArrowLeft' && currentIndex > 0) {
        setCurrentIndex((i) => i - 1);
      } else if (['1', '2', '3', '4'].includes(e.key)) {
        const optionOrder = shuffledOptionsMap[currentQuestion.id] || ['R', 'B', 'W', 'Y'];
        const chosen = optionOrder[parseInt(e.key, 10) - 1];
        if (chosen) handleSelectOption(chosen);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isStarted, currentQuestion, currentIndex, totalQuestions, shuffledOptionsMap]);

  if (!isStarted) {
    return (
      <div className="max-w-3xl mx-auto py-8 sm:py-12 px-4 sm:px-6">
        {/* Intro Card */}
        <div className="bg-white rounded-2xl border border-slate-200/80 shadow-xs overflow-hidden">
          <div className="p-6 sm:p-10 space-y-6">
            <div>
              <h1 className="font-editorial text-3xl sm:text-4xl font-normal text-slate-900 tracking-tight">
                Core Motive & Personality Blend Assessment
              </h1>
              <p className="font-grotesk mt-2.5 text-xs sm:text-sm text-slate-600 leading-relaxed max-w-2xl">
                Unlike assessments measuring transient behavior, Dr. Taylor Hartman’s methodology reveals your 
                <strong> innate Core Driving Motive</strong>—the root psychological engine determining how you make decisions, process conflict, and build relationships.
              </p>
            </div>

            {/* The 4 Core Motives Grid Preview */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 py-2">
              <div className="p-3.5 rounded-xl border border-red-100 bg-red-50/40">
                <div className="flex items-center gap-1.5 mb-1">
                  <span className="w-2 h-2 rounded-full bg-red-500" />
                  <h3 className="font-bold text-slate-900 text-xs font-grotesk">RED — POWER</h3>
                </div>
                <p className="text-[11px] text-slate-600 leading-relaxed font-grotesk">
                  Driven by results, productivity, and decisive leadership.
                </p>
              </div>

              <div className="p-3.5 rounded-xl border border-blue-100 bg-blue-50/40">
                <div className="flex items-center gap-1.5 mb-1">
                  <span className="w-2 h-2 rounded-full bg-blue-600" />
                  <h3 className="font-bold text-slate-900 text-xs font-grotesk">BLUE — INTIMACY</h3>
                </div>
                <p className="text-[11px] text-slate-600 leading-relaxed font-grotesk">
                  Driven by genuine connection, deep loyalty, and moral integrity.
                </p>
              </div>

              <div className="p-3.5 rounded-xl border border-slate-200 bg-slate-50">
                <div className="flex items-center gap-1.5 mb-1">
                  <span className="w-2 h-2 rounded-full bg-slate-600" />
                  <h3 className="font-bold text-slate-900 text-xs font-grotesk">WHITE — PEACE</h3>
                </div>
                <p className="text-[11px] text-slate-600 leading-relaxed font-grotesk">
                  Driven by inner calm, clarity, and quiet independence.
                </p>
              </div>

              <div className="p-3.5 rounded-xl border border-amber-100 bg-amber-50/40">
                <div className="flex items-center gap-1.5 mb-1">
                  <span className="w-2 h-2 rounded-full bg-amber-500" />
                  <h3 className="font-bold text-slate-900 text-xs font-grotesk">YELLOW — FUN</h3>
                </div>
                <p className="text-[11px] text-slate-600 leading-relaxed font-grotesk">
                  Driven by joy, spontaneity, optimism, and living fully.
                </p>
              </div>
            </div>

            {/* Assessment Mode Selector */}
            <div className="border-t border-slate-100 pt-6">
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-widest block mb-3 font-grotesk">
                Choose your pace
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <button
                  type="button"
                  onClick={() => setTestMode('full')}
                  className={`p-4 rounded-xl text-left border transition-all cursor-pointer ${
                    testMode === 'full'
                      ? 'border-[#7c5295] bg-purple-50/50 shadow-xs ring-1 ring-[#7c5295]'
                      : 'border-slate-200 hover:border-slate-300 bg-white hover:bg-slate-50/50'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="inline-flex items-center gap-1.5 font-bold text-xs sm:text-sm text-slate-900 font-grotesk">
                      <ListOrdered className="w-3.5 h-3.5 text-purple-600" />
                      45-Question Standard
                    </span>
                    <span className={`text-[10px] font-grotesk font-semibold px-2 py-0.5 rounded-full ${testMode === 'full' ? 'bg-[#7c5295] text-white' : 'bg-slate-100 text-slate-700'}`}>
                      Comprehensive
                    </span>
                  </div>
                  <p className="text-[11px] leading-relaxed text-slate-600 font-grotesk">
                    Full breakdown for your Primary + Secondary Blend and shadow dynamics.
                  </p>
                  <div className="mt-2.5 flex items-center gap-1 text-[11px] font-grotesk text-slate-500">
                    <Clock className="w-3 h-3 text-slate-400" />
                    <span>~5–7 minutes</span>
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => setTestMode('quick')}
                  className={`p-4 rounded-xl text-left border transition-all cursor-pointer ${
                    testMode === 'quick'
                      ? 'border-[#7c5295] bg-purple-50/50 shadow-xs ring-1 ring-[#7c5295]'
                      : 'border-slate-200 hover:border-slate-300 bg-white hover:bg-slate-50/50'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="inline-flex items-center gap-1.5 font-bold text-xs sm:text-sm text-slate-900 font-grotesk">
                      <Zap className="w-3.5 h-3.5 text-amber-500" />
                      12-Question Rapid
                    </span>
                    <span className={`text-[10px] font-grotesk font-semibold px-2 py-0.5 rounded-full ${testMode === 'quick' ? 'bg-[#7c5295] text-white' : 'bg-slate-100 text-slate-700'}`}>
                      Quick 90s
                    </span>
                  </div>
                  <p className="text-[11px] leading-relaxed text-slate-600 font-grotesk">
                    Quick baseline diagnostic to immediately identify your core dominant motive.
                  </p>
                  <div className="mt-2.5 flex items-center gap-1 text-[11px] font-grotesk text-slate-500">
                    <Clock className="w-3 h-3 text-slate-400" />
                    <span>~90 seconds</span>
                  </div>
                </button>
              </div>
            </div>

            {/* Test Guidance */}
            <div className="p-4 rounded-xl bg-slate-50/80 border border-slate-200/70 flex items-start gap-3">
              <HelpCircle className="w-4 h-4 text-purple-600 shrink-0 mt-0.5" />
              <div className="text-xs text-slate-600 leading-relaxed font-grotesk">
                <strong className="text-slate-900 font-semibold">Gentle Tip:</strong> There are no right or wrong answers. Select the choice that represents your natural, honest instinct—how you feel deep down, not how you feel pressured to act.
              </div>
            </div>

            {/* Action Bar */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-4 border-t border-slate-100">
              {hasExistingResult && onViewExistingResult ? (
                <button
                  onClick={onViewExistingResult}
                  className="w-full sm:w-auto px-5 py-2.5 rounded-full text-xs font-semibold font-grotesk text-slate-700 hover:bg-slate-100 transition border border-slate-200 flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>View Previous Result</span>
                </button>
              ) : <div />}

              <button
                onClick={() => setIsStarted(true)}
                className="w-full sm:w-auto px-7 py-3 rounded-full text-xs sm:text-sm font-bold font-grotesk text-white bg-[#7c5295] hover:bg-[#6b4383] transition shadow-md active:scale-98 flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Begin Assessment ({testMode === 'full' ? '45 Questions' : '12 Questions'})</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Active Quiz View
  const isQuestionAnswered = !!answers[currentQuestion.id];
  const allAnswered = answeredCount === totalQuestions;
  const optionOrder = shuffledOptionsMap[currentQuestion.id] || ['R', 'B', 'W', 'Y'];
  const optionLabels = ['A', 'B', 'C', 'D'];

  // Calculate estimated time remaining based on answers
  const remainingQuestions = totalQuestions - answeredCount;
  const estMinutesRemaining = Math.max(1, Math.ceil(remainingQuestions * 0.12));

  return (
    <div className="max-w-2xl mx-auto py-8 sm:py-12 px-4 sm:px-6">
      {/* Quiz Header & Soothing Smooth Progress */}
      <div className="bg-white rounded-2xl border border-slate-200/80 shadow-xs p-5 sm:p-6 mb-6 transition-all">
        <div className="flex items-center justify-between mb-3 text-xs">
          <div className="flex items-center gap-2">
            <span className="font-grotesk font-bold text-slate-900 text-sm sm:text-base">
              Question {currentIndex + 1} <span className="text-slate-400 font-normal">of {totalQuestions}</span>
            </span>
            <span className="hidden sm:inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-purple-50 text-purple-700 border border-purple-100">
              {currentQuestion.category}
            </span>
          </div>

          <div className="flex items-center gap-1.5 text-slate-500 font-grotesk text-xs">
            <Clock className="w-3.5 h-3.5 text-slate-400" />
            <span>~{estMinutesRemaining} min left</span>
            <span className="text-slate-300">•</span>
            <span className="font-semibold text-purple-700 font-mono">{progressPct}%</span>
          </div>
        </div>

        {/* Soothing Rounded Progress Bar */}
        <div className="w-full h-2.5 bg-slate-100 rounded-full overflow-hidden p-0.5">
          <div
            className="h-full bg-gradient-to-r from-purple-500 via-purple-600 to-[#7c5295] rounded-full transition-all duration-500 ease-out shadow-xs"
            style={{ width: `${Math.max(4, (answeredCount / totalQuestions) * 100)}%` }}
          />
        </div>

        {/* Gentle Milestone Track & Quick Nav */}
        <div className="flex items-center justify-between mt-3.5 pt-3 border-t border-slate-100 text-[11px] text-slate-500 font-grotesk">
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="font-medium text-slate-600">
              {answeredCount} answered
            </span>
            {remainingQuestions > 0 && (
              <span className="text-slate-400">
                ({remainingQuestions} remaining)
              </span>
            )}
          </div>

          <div className="flex items-center gap-1">
            <button
              onClick={() => setCurrentIndex((prev) => Math.max(0, prev - 1))}
              disabled={currentIndex === 0}
              className="px-2.5 py-1 rounded-full text-slate-600 hover:bg-slate-100 transition disabled:opacity-30 disabled:pointer-events-none flex items-center gap-1 text-[11px] font-medium"
            >
              <ArrowLeft className="w-3 h-3" />
              <span>Back</span>
            </button>
            <span className="text-slate-300">|</span>
            <button
              onClick={() => setCurrentIndex((prev) => Math.min(totalQuestions - 1, prev + 1))}
              disabled={currentIndex === totalQuestions - 1}
              className="px-2.5 py-1 rounded-full text-slate-600 hover:bg-slate-100 transition disabled:opacity-30 disabled:pointer-events-none flex items-center gap-1 text-[11px] font-medium"
            >
              <span>Skip</span>
              <ArrowRight className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>

      {/* Main Question Card with Soft Curves */}
      <div className="bg-white rounded-2xl border border-slate-200/80 shadow-xs p-6 sm:p-8 transition-all">
        <div className="mb-6">
          <span className="inline-block text-[11px] font-medium text-purple-600 mb-2 font-grotesk">
            Select what feels most natural to you in your core:
          </span>
          <h2 className="font-editorial text-xl sm:text-2xl font-normal text-slate-900 leading-snug">
            {currentQuestion.text}
          </h2>
        </div>

        {/* 4 Soothing Interactive Option Cards */}
        <div className="space-y-3">
          {optionOrder.map((colorKey, optionIdx) => {
            const isSelected = answers[currentQuestion.id] === colorKey;
            const optionText = currentQuestion.options[colorKey];

            return (
              <button
                key={colorKey}
                type="button"
                onClick={() => handleSelectOption(colorKey)}
                className={`w-full group relative flex items-start gap-3.5 p-4 rounded-xl text-left transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-[#7c5295] text-white shadow-md ring-2 ring-[#7c5295]/30'
                    : 'bg-slate-50/70 hover:bg-purple-50/40 border border-slate-200/90 hover:border-purple-300 text-slate-800'
                }`}
              >
                {/* Soft Round Option Badge */}
                <div className="mt-0.5 shrink-0">
                  <span className={`w-7 h-7 rounded-full text-xs font-bold font-grotesk flex items-center justify-center transition-all ${
                    isSelected
                      ? 'bg-white text-[#7c5295] shadow-xs'
                      : 'bg-white border border-slate-200 text-slate-600 group-hover:border-purple-300 group-hover:text-purple-700'
                  }`}>
                    {optionLabels[optionIdx]}
                  </span>
                </div>

                <div className={`flex-1 text-sm sm:text-base font-normal font-grotesk leading-relaxed ${isSelected ? 'text-white' : 'text-slate-700'}`}>
                  {optionText}
                </div>

                {isSelected && (
                  <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4 text-white" />
                  </div>
                )}
              </button>
            );
          })}
        </div>

        {/* Navigation Footer with Rounded Pill Actions */}
        <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between gap-3">
          <button
            onClick={() => setCurrentIndex((prev) => Math.max(0, prev - 1))}
            disabled={currentIndex === 0}
            className="px-4 py-2.5 rounded-full text-xs sm:text-sm font-semibold font-grotesk text-slate-600 hover:bg-slate-100 transition disabled:opacity-30 disabled:pointer-events-none flex items-center gap-1.5 cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Previous</span>
          </button>

          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                if (window.confirm('Would you like to reset your answers and restart?')) {
                  setAnswers({});
                  setCurrentIndex(0);
                }
              }}
              className="p-2.5 rounded-full text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition cursor-pointer"
              title="Reset Assessment"
            >
              <RotateCcw className="w-4 h-4" />
            </button>

            {currentIndex === totalQuestions - 1 || allAnswered ? (
              <button
                onClick={handleCalculateResults}
                disabled={!allAnswered}
                className="px-6 py-2.5 rounded-full text-xs sm:text-sm font-bold font-grotesk text-white bg-[#7c5295] hover:bg-[#6b4383] transition shadow-md disabled:opacity-40 disabled:pointer-events-none flex items-center gap-2 cursor-pointer active:scale-98"
              >
                <span>View Results</span>
                <Sparkles className="w-4 h-4" />
              </button>
            ) : (
              <button
                onClick={() => setCurrentIndex((prev) => Math.min(totalQuestions - 1, prev + 1))}
                disabled={!isQuestionAnswered}
                className="px-6 py-2.5 rounded-full text-xs sm:text-sm font-bold font-grotesk text-white bg-[#7c5295] hover:bg-[#6b4383] transition shadow-xs disabled:opacity-30 disabled:pointer-events-none flex items-center gap-1.5 cursor-pointer active:scale-98"
              >
                <span>Next</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
