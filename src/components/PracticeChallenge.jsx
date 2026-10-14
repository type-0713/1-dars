// src/components/PracticeChallenge.jsx
import React, { useState } from 'react';
import { EXERCISES } from '../data/exercises';
import { 
  AwardIcon, CheckCircleIcon, XCircleIcon, LightbulbIcon, 
  PlayIcon, RotateCcwIcon, CheckIcon, ArrowRightIcon, TerminalIcon 
} from './Icons';

export function PracticeChallenge({ onCompleteExercise, completedExerciseIds = [] }) {
  const [selectedExIndex, setSelectedExIndex] = useState(0);
  const [codeInputs, setCodeInputs] = useState(() => {
    const map = {};
    EXERCISES.forEach(ex => {
      map[ex.id] = ex.initialCode;
    });
    return map;
  });
  const [results, setResults] = useState({});
  const [showHint, setShowHint] = useState(false);

  const currentEx = EXERCISES[selectedExIndex];
  const userCode = codeInputs[currentEx.id] ?? currentEx.initialCode;
  const currentResult = results[currentEx.id];

  const handleCodeChange = (text) => {
    setCodeInputs({
      ...codeInputs,
      [currentEx.id]: text
    });
    // Agar oldin tekshirilgan bo'lsa, xatolikni yangilash
    if (results[currentEx.id] && !results[currentEx.id].passed) {
      setResults({
        ...results,
        [currentEx.id]: null
      });
    }
  };

  const handleCheckCode = () => {
    const isValid = currentEx.validator(userCode);
    setResults({
      ...results,
      [currentEx.id]: {
        passed: isValid,
        message: isValid ? currentEx.successMessage : "Kodingiz talabga to'liq javob bermadi. Qayta urinib ko'ring yoki maslahatdan foydalaning!"
      }
    });

    if (isValid) {
      onCompleteExercise?.(currentEx.id);
    }
  };

  const handleReset = () => {
    setCodeInputs({
      ...codeInputs,
      [currentEx.id]: currentEx.initialCode
    });
    setResults({
      ...results,
      [currentEx.id]: null
    });
    setShowHint(false);
  };

  const solvedCount = Object.values(results).filter(r => r?.passed).length;

  return (
    <section id="practice" className="scroll-mt-20 py-8">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-8">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-semibold uppercase tracking-wider mb-3">
          <AwardIcon className="w-3.5 h-3.5" />
          9-Bo'lim: Kichik Amaliy Topshiriqlar
        </div>
        <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
          10 ta Amaliy Sinov (Dars davomida)
        </h2>
        <p className="mt-2 text-slate-600 text-base leading-relaxed">
          Uyga vazifa yo'q! Barcha mashqlarni shu yerning o'zida bajarasiz. Boshlang'ichdan mustaqil darajagacha qadamma-qadam rivojlaning.
        </p>
      </div>

      {/* Main Container */}
      <div className="max-w-6xl mx-auto bg-white rounded-2xl border border-slate-200 shadow-md p-6 sm:p-8">
        
        {/* Horizontal Stepper/Tabs */}
        <div className="flex items-center justify-between gap-4 pb-4 mb-6 border-b border-slate-200">
          <div className="flex items-center gap-2 overflow-x-auto pb-1 max-w-full">
            {EXERCISES.map((ex, idx) => {
              const isPassed = results[ex.id]?.passed || completedExerciseIds.includes(ex.id);
              const isActive = selectedExIndex === idx;

              return (
                <button
                  key={ex.id}
                  onClick={() => {
                    setSelectedExIndex(idx);
                    setShowHint(false);
                  }}
                  className={`w-9 h-9 rounded-xl flex items-center justify-center text-xs font-bold shrink-0 transition-all ${
                    isActive
                      ? "bg-blue-600 text-white shadow-md shadow-blue-500/25 ring-2 ring-blue-300 scale-105"
                      : isPassed
                        ? "bg-emerald-100 text-emerald-800 border border-emerald-300"
                        : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                  }`}
                  title={ex.title}
                >
                  {isPassed ? "✓" : idx + 1}
                </button>
              );
            })}
          </div>

          <div className="text-xs font-semibold text-slate-500 shrink-0 hidden sm:block">
            Bajarildi: <span className="text-emerald-600 font-bold">{solvedCount}</span> / {EXERCISES.length}
          </div>
        </div>

        {/* Current Exercise Detail */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Task Info & Instructions (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-2">
              <span className={`px-2.5 py-0.5 rounded-full text-[11px] font-bold ${
                currentEx.level === "boshlangich" ? "bg-emerald-100 text-emerald-800" :
                currentEx.level === "ortacha" ? "bg-blue-100 text-blue-800" :
                "bg-purple-100 text-purple-800"
              }`}>
                {currentEx.levelLabel}
              </span>
              <span className="text-xs text-slate-400">Mashq #{currentEx.id}</span>
            </div>

            <h3 className="text-xl font-bold text-slate-900">
              {currentEx.title}
            </h3>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 text-sm leading-relaxed">
              <strong>Vazifa:</strong> {currentEx.taskText}
            </div>

            <div className="p-3.5 rounded-xl bg-blue-50/70 border border-blue-200/80 text-blue-900 text-xs sm:text-sm">
              <strong className="block font-bold mb-1">Ko'rsatma:</strong>
              {currentEx.instruction}
            </div>

            {/* Hint Box */}
            <div>
              <button
                onClick={() => setShowHint(!showHint)}
                className="text-xs font-bold text-amber-600 hover:text-amber-700 flex items-center gap-1.5 transition-colors"
              >
                <LightbulbIcon className="w-4 h-4" />
                <span>{showHint ? "Maslahatni yashirish" : "Maslahat (Hint) kerakmi?"}</span>
              </button>

              {showHint && (
                <div className="mt-2 p-3 bg-amber-50 border border-amber-200 rounded-lg text-xs text-amber-900 animate-fadeIn leading-relaxed">
                  {currentEx.hint}
                </div>
              )}
            </div>
          </div>

          {/* Right: Code Editor & Result (7 cols) */}
          <div className="lg:col-span-7 space-y-4">
            {/* Editor Box */}
            <div className="rounded-xl bg-slate-900 border border-slate-800 overflow-hidden shadow-inner flex flex-col">
              <div className="flex items-center justify-between px-4 py-2 bg-slate-950 text-slate-400 font-mono text-xs border-b border-slate-800">
                <span className="text-slate-200 font-semibold">Kod kiritish maydoni</span>
                <button
                  onClick={handleReset}
                  className="hover:text-slate-200 flex items-center gap-1 text-[11px]"
                >
                  <RotateCcwIcon className="w-3.5 h-3.5" />
                  Qayta o'rnatish
                </button>
              </div>

              <textarea
                value={userCode}
                onChange={(e) => handleCodeChange(e.target.value)}
                rows={7}
                spellCheck="false"
                className="w-full bg-slate-900 text-emerald-300 font-mono text-xs sm:text-sm p-4 focus:outline-none resize-none leading-relaxed"
                placeholder="Bu yerga HTML kodingizni yozing..."
              />

              <div className="p-3 bg-slate-950/90 border-t border-slate-800 flex items-center justify-between">
                <span className="text-[11px] text-slate-500 font-mono">
                  Kodni to'g'ri yozib, tekshirish tugmasini bosing
                </span>

                <button
                  onClick={handleCheckCode}
                  className="px-5 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shadow-md shadow-blue-500/20 active:scale-95 transition-all flex items-center gap-2"
                >
                  <CheckCircleIcon className="w-4 h-4" />
                  <span>Tekshirish</span>
                </button>
              </div>
            </div>

            {/* Validation Feedback Result */}
            {currentResult && (
              <div className={`p-4 rounded-xl border text-xs sm:text-sm leading-relaxed animate-fadeIn flex items-start gap-3 ${
                currentResult.passed
                  ? "bg-emerald-50 border-emerald-300 text-emerald-900"
                  : "bg-amber-50 border-amber-300 text-amber-900"
              }`}>
                {currentResult.passed ? (
                  <CheckCircleIcon className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                ) : (
                  <LightbulbIcon className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                )}
                <div>
                  <strong className="block font-bold">
                    {currentResult.passed ? "Ofarin, to'g'ri yechim!" : "Qayta sinab ko'ring:"}
                  </strong>
                  <p className="mt-0.5">{currentResult.message}</p>
                </div>
              </div>
            )}

            {/* Next exercise shortcut if passed */}
            {currentResult?.passed && selectedExIndex < EXERCISES.length - 1 && (
              <div className="text-right">
                <button
                  onClick={() => {
                    setSelectedExIndex(selectedExIndex + 1);
                    setShowHint(false);
                  }}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-emerald-600 text-white text-xs font-bold hover:bg-emerald-700 transition-colors shadow-sm"
                >
                  <span>Keyingi mashqqa o'tish (#{selectedExIndex + 2})</span>
                  <ArrowRightIcon className="w-4 h-4" />
                </button>
              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
