// src/components/FinalProject.jsx
import React, { useState } from 'react';
import { FINAL_PROJECT_CRITERIA } from '../data/examples';
import { LivePreview } from './LivePreview';
import { 
  TrophyIcon, CheckCircleIcon, SparklesIcon, PlayIcon, 
  RotateCcwIcon, AwardIcon, CodeIcon, CopyIcon, CheckIcon 
} from './Icons';

export function FinalProject({ onProjectCompleted }) {
  const defaultStarterCode = `<!DOCTYPE html>
<html lang="uz">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Men haqimda — Mening birinchi veb-sahifam</title>
</head>
<body>
    <!-- 1. Asosiy sarlavha (Ismingiz) -->
    <h1>Mening ismim ...</h1>

    <!-- 2. O'zingiz haqingizda paragraf -->
    <p>Men IT sohasiga qiziqaman va bugun ilk veb-sahifamni yaratdim.</p>

    <!-- 3. Ikkinchi darajali sarlavha va qiziqishlar ro'yxati -->
    <h2>Mening qiziqishlarim</h2>
    <ul>
        <li>Dasturlash</li>
        <li>Kitob mutolaasi</li>
    </ul>

    <!-- 4. Maqsadlar ro'yxati -->
    <h2>Kelajakdagi maqsadlarim</h2>
    <ol>
        <li>HTML va CSS ni to'liq o'rganish</li>
        <li>Birinchi veb-saytimni internetga chiqarish</li>
    </ol>
</body>
</html>`;

  const [projectCode, setProjectCode] = useState(defaultStarterCode);
  const [renderedCode, setRenderedCode] = useState(defaultStarterCode);
  const [copied, setCopied] = useState(false);
  const [checked, setChecked] = useState(false);

  // Real-time evaluation against all criteria
  const evaluationResults = FINAL_PROJECT_CRITERIA.map(criterion => ({
    ...criterion,
    passed: criterion.rule(projectCode)
  }));

  const passedCount = evaluationResults.filter(c => c.passed).length;
  const isAllPassed = passedCount === FINAL_PROJECT_CRITERIA.length;

  const handleRun = () => {
    setRenderedCode(projectCode);
    setChecked(true);
    if (isAllPassed) {
      onProjectCompleted?.();
    }
  };

  const handleReset = () => {
    setProjectCode(defaultStarterCode);
    setRenderedCode(defaultStarterCode);
    setChecked(false);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(projectCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="project" className="scroll-mt-20 py-8">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-8">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-50 border border-purple-200 text-purple-700 text-xs font-semibold uppercase tracking-wider mb-3">
          <SparklesIcon className="w-3.5 h-3.5" />
          11-Bo'lim: Shaxsiy Mini-Loyiha
        </div>
        <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
          "Men haqimda — mening birinchi veb-sahifam"
        </h2>
        <p className="mt-2 text-slate-600 text-base leading-relaxed">
          1-Darsning eng sharafli cho'qqisi! O'rgangan barcha teglaringizni birlashtirib, haqiqiy to'liq veb-sahifa yarating.
        </p>
      </div>

      <div className="max-w-7xl mx-auto bg-white rounded-2xl border border-slate-200 shadow-lg overflow-hidden">
        
        {/* Top Criteria Evaluation Bar */}
        <div className="p-5 bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 text-white">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
            <div>
              <span className="text-xs font-mono text-indigo-300 font-bold uppercase tracking-wider">
                Baholash Mezonlari (Avtomatik Tekshiruv)
              </span>
              <h3 className="text-lg font-bold text-white">
                Bajarilgan mezonlar: <span className="text-emerald-400">{passedCount}</span> / {FINAL_PROJECT_CRITERIA.length}
              </h3>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handleCopy}
                className="px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-800 hover:bg-slate-700 text-slate-200 flex items-center gap-1.5 transition-colors border border-slate-700"
              >
                {copied ? <CheckIcon className="w-4 h-4 text-emerald-400" /> : <CopyIcon className="w-4 h-4" />}
                <span>{copied ? "Nusxalandi" : "Kodni olish"}</span>
              </button>

              <button
                onClick={handleReset}
                className="px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-800 hover:bg-slate-700 text-slate-200 flex items-center gap-1.5 transition-colors border border-slate-700"
              >
                <RotateCcwIcon className="w-4 h-4" />
                <span>Asliga qaytarish</span>
              </button>

              <button
                onClick={handleRun}
                className="px-5 py-1.5 rounded-lg text-xs font-bold bg-emerald-500 hover:bg-emerald-600 text-slate-950 flex items-center gap-1.5 transition-all shadow-md shadow-emerald-500/25 active:scale-95"
              >
                <PlayIcon className="w-4 h-4 fill-slate-950" />
                <span>Baholash va Ko'rish</span>
              </button>
            </div>
          </div>

          {/* Criteria Badges Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {evaluationResults.map((c) => (
              <div 
                key={c.id}
                className={`p-2.5 rounded-lg border text-[11px] font-medium flex items-center gap-2 transition-colors ${
                  c.passed 
                    ? "bg-emerald-500/15 border-emerald-400/50 text-emerald-300 font-semibold"
                    : "bg-slate-800/60 border-slate-700 text-slate-400"
                }`}
              >
                <span className={`w-4 h-4 rounded-full flex items-center justify-center text-[10px] shrink-0 ${
                  c.passed ? "bg-emerald-500 text-slate-950 font-bold" : "bg-slate-700 text-slate-400"
                }`}>
                  {c.passed ? "✓" : "○"}
                </span>
                <span className="truncate">{c.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Split Editor and Preview */}
        <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[480px]">
          {/* Code Editor */}
          <div className="lg:col-span-7 bg-slate-900 flex flex-col border-b lg:border-b-0 lg:border-r border-slate-800">
            <div className="px-4 py-2 bg-slate-950 text-slate-400 font-mono text-xs flex items-center justify-between border-b border-slate-800">
              <span className="text-slate-200">my-first-website.html</span>
              <span className="text-indigo-400 text-[11px]">HTML5 Standarti</span>
            </div>

            <textarea
              value={projectCode}
              onChange={(e) => {
                setProjectCode(e.target.value);
                setRenderedCode(e.target.value);
              }}
              spellCheck="false"
              className="flex-1 w-full bg-slate-900 text-emerald-300 font-mono text-xs sm:text-sm p-4 focus:outline-none resize-none leading-relaxed"
            />
          </div>

          {/* Preview Panel */}
          <div className="lg:col-span-5 p-4 bg-slate-50 flex flex-col justify-between">
            <LivePreview code={renderedCode} />
          </div>
        </div>

        {/* Completion Congratulations & Certificate Badge */}
        {isAllPassed && (
          <div className="p-6 bg-gradient-to-r from-emerald-50 via-teal-50 to-blue-50 border-t border-emerald-200 flex flex-col sm:flex-row items-center justify-between gap-4 animate-fadeIn">
            <div className="flex items-center gap-4 text-center sm:text-left">
              <div className="w-14 h-14 rounded-2xl bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-lg shadow-emerald-500/25">
                <TrophyIcon className="w-8 h-8" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-slate-900">
                  🎉 Tabriklaymiz! Birinchi veb-sahifangiz tayyor!
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
                  Siz 1-darsning barcha mezonlarini 100% bajardingiz va o'zingizning haqiqiy HTML sahifangizni muvaffaqiyatli yaratdingiz!
                </p>
              </div>
            </div>

            <div className="shrink-0 px-4 py-2 rounded-xl bg-white border border-emerald-300 text-emerald-800 font-bold text-xs shadow-sm">
              HTML Dasturchisi nishoni qo'lga kiritildi 🏅
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
