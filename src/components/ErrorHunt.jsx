// src/components/ErrorHunt.jsx
import React, { useState } from 'react';
import { ERROR_HUNT_CHALLENGES } from '../data/errorHunt';
import { BugIcon, CheckCircleIcon, XCircleIcon, LightbulbIcon, ArrowRightIcon, CodeIcon, SparklesIcon } from './Icons';

export function ErrorHunt({ onCompleteAllChallenges }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState({});
  const [showSolution, setShowSolution] = useState(false);

  const currentChallenge = ERROR_HUNT_CHALLENGES[currentIndex];
  const selectedOptionId = userAnswers[currentChallenge.id];
  const selectedOption = currentChallenge.options.find(o => o.id === selectedOptionId);

  const handleSelectOption = (optionId) => {
    setUserAnswers({
      ...userAnswers,
      [currentChallenge.id]: optionId
    });
  };

  const handleNext = () => {
    setShowSolution(false);
    if (currentIndex < ERROR_HUNT_CHALLENGES.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      onCompleteAllChallenges?.("error_hunt_all");
    }
  };

  const handlePrev = () => {
    setShowSolution(false);
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  // Total correct calculation
  const totalCompleted = Object.keys(userAnswers).length;
  const totalCorrect = Object.entries(userAnswers).filter(([id, optId]) => {
    const ch = ERROR_HUNT_CHALLENGES.find(c => c.id === parseInt(id));
    return ch?.options.find(o => o.id === optId)?.isCorrect;
  }).length;

  return (
    <section id="errorhunt" className="scroll-mt-20 py-8">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-8">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-50 border border-rose-200 text-rose-700 text-xs font-semibold uppercase tracking-wider mb-3">
          <BugIcon className="w-3.5 h-3.5" />
          8-Bo'lim: Professional Challenge
        </div>
        <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
          "Xatoni Top" — Kod Tergovchisi
        </h2>
        <p className="mt-2 text-slate-600 text-base leading-relaxed">
          Haqiqiy dasturchilar ish vaqtining 50% dan ortig'ini xatolarni (bug) qidirish va to'g'rilashga sarflaydi. Keling, o'zingizni sinab ko'ring!
        </p>
      </div>

      {/* Main Challenge Card */}
      <div className="max-w-4xl mx-auto bg-white rounded-2xl border border-slate-200 shadow-md p-6 sm:p-8">
        
        {/* Progress & Difficulty Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 mb-6 border-b border-slate-200">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-1 rounded-lg bg-slate-900 text-white font-mono text-xs font-bold">
              Bosqich {currentIndex + 1} / {ERROR_HUNT_CHALLENGES.length}
            </span>
            <span className={`px-2.5 py-1 rounded-lg text-xs font-semibold ${
              currentChallenge.difficulty === "Oson" ? "bg-emerald-100 text-emerald-800" :
              currentChallenge.difficulty === "O'rta" ? "bg-amber-100 text-amber-800" :
              "bg-rose-100 text-rose-800"
            }`}>
              {currentChallenge.difficulty} daraja
            </span>
          </div>

          <div className="text-xs text-slate-500 font-medium">
            To'g'ri yechilganlar: <strong className="text-blue-600">{totalCorrect}</strong> / {ERROR_HUNT_CHALLENGES.length}
          </div>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-slate-900 mb-4">
          {currentChallenge.title}
        </h3>

        {/* Broken Code Display (Dark Syntax Theme) */}
        <div className="mb-6 rounded-xl bg-slate-900 p-4 sm:p-5 text-white font-mono text-xs sm:text-sm shadow-inner relative overflow-x-auto">
          <div className="flex items-center justify-between pb-2 mb-3 border-b border-slate-800 text-xs text-rose-400">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-rose-500 animate-ping" />
              MUAMMOLI KOD PARCHASI:
            </span>
            <span className="text-slate-500 text-[11px]">Diqqat bilan o'qing</span>
          </div>
          <pre className="text-rose-300 leading-relaxed whitespace-pre-wrap">
            <code>{currentChallenge.brokenCode}</code>
          </pre>
        </div>

        {/* Question & Options */}
        <div className="space-y-4">
          <h4 className="text-base font-semibold text-slate-800">
            {currentChallenge.question}
          </h4>

          <div className="space-y-2.5">
            {currentChallenge.options.map((option) => {
              const isSelected = selectedOptionId === option.id;
              return (
                <button
                  key={option.id}
                  onClick={() => handleSelectOption(option.id)}
                  className={`w-full text-left p-4 rounded-xl border text-xs sm:text-sm font-medium transition-all flex items-start justify-between gap-3 ${
                    isSelected
                      ? option.isCorrect
                        ? "bg-emerald-50 border-emerald-500 text-emerald-950 ring-2 ring-emerald-200"
                        : "bg-rose-50 border-rose-500 text-rose-950 ring-2 ring-rose-200"
                      : "bg-white border-slate-200 text-slate-700 hover:bg-slate-50 hover:border-slate-300"
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center text-xs font-bold uppercase text-slate-600 shrink-0 mt-0.5">
                      {option.id}
                    </span>
                    <span className="leading-relaxed">{option.text}</span>
                  </div>

                  {isSelected && (
                    option.isCorrect 
                      ? <CheckCircleIcon className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                      : <XCircleIcon className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Detailed Feedback & Solution Drawer */}
        {selectedOption && (
          <div className="mt-6 space-y-4 animate-fadeIn">
            <div className={`p-4 rounded-xl border text-xs sm:text-sm leading-relaxed ${
              selectedOption.isCorrect
                ? "bg-emerald-50 border-emerald-200 text-emerald-900"
                : "bg-amber-50 border-amber-200 text-amber-900"
            }`}>
              <div className="font-bold flex items-center gap-1.5 mb-1">
                {selectedOption.isCorrect ? (
                  <>
                    <CheckCircleIcon className="w-4 h-4 text-emerald-600" />
                    To'g'ri tashxis!
                  </>
                ) : (
                  <>
                    <LightbulbIcon className="w-4 h-4 text-amber-600" />
                    Maslahat va yordam:
                  </>
                )}
              </div>
              <p>{selectedOption.feedback}</p>
            </div>

            {/* Toggle Fixed Code */}
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-slate-700 uppercase tracking-wide">
                  To'g'rilangan professional kod:
                </span>
                <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded">
                  Ideal variant
                </span>
              </div>
              <pre className="p-3 bg-slate-900 text-emerald-300 rounded-lg font-mono text-xs overflow-x-auto whitespace-pre-wrap">
                <code>{currentChallenge.fixedCode}</code>
              </pre>
              <p className="text-xs text-slate-500 pt-1">
                <strong>O'rganilgan dars:</strong> {currentChallenge.lessonLearned}
              </p>
            </div>
          </div>
        )}

        {/* Navigation Controls */}
        <div className="mt-8 pt-6 border-t border-slate-200 flex items-center justify-between">
          <button
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className={`px-4 py-2 rounded-xl text-xs font-semibold transition-colors ${
              currentIndex === 0
                ? "text-slate-300 cursor-not-allowed"
                : "text-slate-700 hover:bg-slate-100"
            }`}
          >
            ← Oldingi challenge
          </button>

          <button
            onClick={handleNext}
            disabled={!selectedOption}
            className={`px-6 py-2.5 rounded-xl text-xs font-bold shadow transition-all flex items-center gap-2 ${
              selectedOption
                ? "bg-blue-600 text-white hover:bg-blue-700"
                : "bg-slate-200 text-slate-400 cursor-not-allowed shadow-none"
            }`}
          >
            <span>{currentIndex === ERROR_HUNT_CHALLENGES.length - 1 ? "O'yinni yakunlash" : "Keyingi challenge"}</span>
            <ArrowRightIcon className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}
