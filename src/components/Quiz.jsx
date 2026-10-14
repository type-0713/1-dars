// src/components/Quiz.jsx
import React, { useState } from 'react';
import { QUIZ_QUESTIONS } from '../data/quizQuestions';
import { 
  TrophyIcon, CheckCircleIcon, XCircleIcon, RotateCcwIcon, 
  ArrowRightIcon, LightbulbIcon, SparklesIcon, BookOpenIcon 
} from './Icons';

export function Quiz({ onQuizComplete }) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({}); // { [questionId]: optionId }
  const [isSubmitted, setIsSubmitted] = useState(false);

  const currentQ = QUIZ_QUESTIONS[currentQuestionIndex];
  const isAnswered = selectedAnswers[currentQ.id] !== undefined;

  const handleSelectOption = (optionId) => {
    if (isSubmitted) return;
    setSelectedAnswers({
      ...selectedAnswers,
      [currentQ.id]: optionId
    });
  };

  const handleNext = () => {
    if (currentQuestionIndex < QUIZ_QUESTIONS.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      // Finish quiz
      setIsSubmitted(true);
      const score = calculateScore();
      onQuizComplete?.(score);
    }
  };

  const handlePrev = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const calculateScore = () => {
    let correct = 0;
    const missedCategories = new Set();

    QUIZ_QUESTIONS.forEach(q => {
      if (selectedAnswers[q.id] === q.correctOptionId) {
        correct++;
      } else {
        missedCategories.add(q.category);
      }
    });

    const percent = Math.round((correct / QUIZ_QUESTIONS.length) * 100);
    return {
      correct,
      total: QUIZ_QUESTIONS.length,
      percent,
      missedCategories: Array.from(missedCategories)
    };
  };

  const handleRestart = () => {
    setSelectedAnswers({});
    setIsSubmitted(false);
    setCurrentQuestionIndex(0);
  };

  const scoreData = isSubmitted ? calculateScore() : null;

  return (
    <section id="quiz" className="scroll-mt-20 py-8">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-8">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-semibold uppercase tracking-wider mb-3">
          <TrophyIcon className="w-3.5 h-3.5" />
          10-Bo'lim: Yakuniy Bilim Sinovi
        </div>
        <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
          1-Dars Yakuniy Testi
        </h2>
        <p className="mt-2 text-slate-600 text-base leading-relaxed">
          O'rgangan barcha 12 ta asosiy mavzularingizni tekshirib ko'ring. Natijangizga qarab shaxsiy tavsiyalarga ega bo'lasiz!
        </p>
      </div>

      <div className="max-w-3xl mx-auto bg-white rounded-2xl border border-slate-200 shadow-md p-6 sm:p-8">
        
        {!isSubmitted ? (
          <div>
            {/* Quiz Progress & Category */}
            <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-200">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-1 rounded-lg bg-blue-50 text-blue-700 border border-blue-200 font-mono text-xs font-bold">
                  Savol {currentQuestionIndex + 1} / {QUIZ_QUESTIONS.length}
                </span>
                <span className="text-xs font-semibold text-slate-500">
                  Mavzu: <span className="text-slate-800">{currentQ.category}</span>
                </span>
              </div>

              {/* Mini progress bar */}
              <div className="w-24 sm:w-32 h-2 bg-slate-100 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-blue-600 transition-all duration-300"
                  style={{ width: `${((currentQuestionIndex + 1) / QUIZ_QUESTIONS.length) * 100}%` }}
                />
              </div>
            </div>

            {/* Question Text */}
            <h3 className="text-xl font-bold text-slate-900 mb-6 leading-snug">
              {currentQ.question}
            </h3>

            {/* 4 Options */}
            <div className="space-y-3 mb-8">
              {currentQ.options.map((opt) => {
                const isSelected = selectedAnswers[currentQ.id] === opt.id;
                return (
                  <button
                    key={opt.id}
                    onClick={() => handleSelectOption(opt.id)}
                    className={`w-full text-left p-4 rounded-xl border text-xs sm:text-sm font-medium transition-all flex items-center justify-between ${
                      isSelected
                        ? "bg-blue-50 border-blue-500 text-blue-950 ring-2 ring-blue-200 shadow-sm"
                        : "bg-white border-slate-200 text-slate-700 hover:bg-slate-50 hover:border-slate-300"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className={`w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold uppercase shrink-0 ${
                        isSelected ? "bg-blue-600 text-white" : "bg-slate-100 text-slate-600"
                      }`}>
                        {opt.id}
                      </span>
                      <span>{opt.text}</span>
                    </div>

                    {isSelected && <CheckCircleIcon className="w-5 h-5 text-blue-600 shrink-0 ml-2" />}
                  </button>
                );
              })}
            </div>

            {/* Navigation Buttons */}
            <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
              <button
                onClick={handlePrev}
                disabled={currentQuestionIndex === 0}
                className={`px-4 py-2 rounded-xl text-xs font-semibold ${
                  currentQuestionIndex === 0 ? "text-slate-300 cursor-not-allowed" : "text-slate-700 hover:bg-slate-100"
                }`}
              >
                ← Oldingi savol
              </button>

              <button
                onClick={handleNext}
                disabled={!isAnswered}
                className={`px-6 py-2.5 rounded-xl text-xs font-bold shadow transition-all flex items-center gap-2 ${
                  isAnswered
                    ? "bg-blue-600 text-white hover:bg-blue-700"
                    : "bg-slate-200 text-slate-400 cursor-not-allowed shadow-none"
                }`}
              >
                <span>
                  {currentQuestionIndex === QUIZ_QUESTIONS.length - 1 ? "Testni yakunlash" : "Keyingi savol"}
                </span>
                <ArrowRightIcon className="w-4 h-4" />
              </button>
            </div>
          </div>
        ) : (
          /* Quiz Results View */
          <div className="text-center py-6 space-y-6 animate-fadeIn">
            
            {/* Score Badge */}
            <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-white shadow-xl shadow-blue-500/20">
              <TrophyIcon className="w-10 h-10" />
            </div>

            <div>
              <h3 className="text-2xl font-extrabold text-slate-900">
                {scoreData.percent >= 80 ? "Ajoyib Natija! Siz mutaxassissiz! 🎉" :
                 scoreData.percent >= 50 ? "Yaxshi Natija! Biroz takrorlash kerak. 👍" :
                 "Darsni qayta ko'rib chiqishni tavsiya qilamiz! 📚"}
              </h3>
              <p className="text-slate-600 text-sm mt-1">
                HTML asoslari bo'yicha yakuniy test natijangiz:
              </p>
            </div>

            {/* Score Stats Grid */}
            <div className="grid grid-cols-3 gap-4 max-w-md mx-auto">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <div className="text-2xl font-extrabold text-blue-600">{scoreData.correct}</div>
                <div className="text-xs text-slate-500 font-medium">To'g'ri javoblar</div>
              </div>
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <div className="text-2xl font-extrabold text-slate-900">{scoreData.total}</div>
                <div className="text-xs text-slate-500 font-medium">Umumiy savollar</div>
              </div>
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <div className="text-2xl font-extrabold text-emerald-600">{scoreData.percent}%</div>
                <div className="text-xs text-slate-500 font-medium">O'zlashtirish</div>
              </div>
            </div>

            {/* Recommendations / Missed Topics */}
            {scoreData.missedCategories.length > 0 ? (
              <div className="text-left p-5 rounded-xl bg-amber-50 border border-amber-200 text-amber-950 space-y-2">
                <div className="flex items-center gap-2 font-bold text-sm text-amber-900">
                  <BookOpenIcon className="w-4 h-4 text-amber-600" />
                  Qayta o'rganish tavsiya etiladigan mavzular:
                </div>
                <ul className="list-disc list-inside text-xs sm:text-sm space-y-1 text-amber-900">
                  {scoreData.missedCategories.map((cat, i) => (
                    <li key={i}><strong>{cat}</strong> bo'limi</li>
                  ))}
                </ul>
                <p className="text-xs text-amber-800 pt-1">
                  Ushbu bo'limlarni qayta ko'rib chiqsangiz, 100% natijaga erishasiz!
                </p>
              </div>
            ) : (
              <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-900 text-sm font-semibold flex items-center justify-center gap-2">
                <SparklesIcon className="w-5 h-5 text-emerald-600" />
                <span>Barcha savollarga to'g'ri javob berdingiz! 1-darsni a'lo bahoga tamomladingiz!</span>
              </div>
            )}

            {/* Restart Quiz Button */}
            <div className="pt-4">
              <button
                onClick={handleRestart}
                className="px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs sm:text-sm shadow-md transition-all inline-flex items-center gap-2"
              >
                <RotateCcwIcon className="w-4 h-4" />
                <span>Testni qayta ishlash</span>
              </button>
            </div>

          </div>
        )}

      </div>
    </section>
  );
}
