// src/components/HtmlCodePlayground.jsx
import React, { useState } from 'react';
import { PLAYGROUND_TEMPLATES } from '../data/examples';
import { LivePreview } from './LivePreview';
import { 
  PlayIcon, RotateCcwIcon, CopyIcon, CheckIcon, TerminalIcon, 
  CheckCircleIcon, SparklesIcon, LightbulbIcon, LayersIcon 
} from './Icons';

export function HtmlCodePlayground({ onCodeRun, onCompleteChallenge }) {
  const [activeTemplateId, setActiveTemplateId] = useState("default");
  const [sourceCode, setSourceCode] = useState(PLAYGROUND_TEMPLATES[0].code);
  const [renderedCode, setRenderedCode] = useState(PLAYGROUND_TEMPLATES[0].code);
  const [copied, setCopied] = useState(false);
  const [challengeResults, setChallengeResults] = useState(null);

  // Line numbers calculation
  const lineCount = sourceCode.split('\n').length;
  const lineNumbers = Array.from({ length: Math.max(lineCount, 16) }, (_, i) => i + 1);

  const handleTemplateChange = (tmpl) => {
    setActiveTemplateId(tmpl.id);
    setSourceCode(tmpl.code);
    setRenderedCode(tmpl.code);
    setChallengeResults(null);
  };

  const handleRunCode = () => {
    setRenderedCode(sourceCode);
    onCodeRun?.(sourceCode);
  };

  const handleReset = () => {
    const currentTmpl = PLAYGROUND_TEMPLATES.find(t => t.id === activeTemplateId) || PLAYGROUND_TEMPLATES[0];
    setSourceCode(currentTmpl.code);
    setRenderedCode(currentTmpl.code);
    setChallengeResults(null);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(sourceCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Step check logic
  const handleCheckChallenge = () => {
    const hasNameH1 = /<h1[^>]*>.{3,}<\/h1>/i.test(sourceCode);
    const hasParagraph = /<p[^>]*>.{5,}<\/p>/i.test(sourceCode);
    const hasH2 = /<h2[^>]*>.{3,}<\/h2>/i.test(sourceCode);
    const hasListWith3Items = /(<(ul|ol)[^>]*>[\s\S]*<li[^>]*>[\s\S]*<li[^>]*>[\s\S]*<li[^>]*>[\s\S]*<\/(ul|ol)>)/i.test(sourceCode);

    const results = [
      { id: 1, text: "Ismingizni <h1> bosh sarlavhaga yozing", passed: hasNameH1 },
      { id: 2, text: "O'zingiz haqingizda <p> paragraf qo'shing", passed: hasParagraph },
      { id: 3, text: "Ikkinchi sarlavha (<h2>) yarating", passed: hasH2 },
      { id: 4, text: "Uchta qiziqishingizdan iborat ro'yxat (<ul> yoki <ol> va <li>) yarating", passed: hasListWith3Items }
    ];

    setChallengeResults(results);

    const allPassed = results.every(r => r.passed);
    if (allPassed) {
      onCompleteChallenge?.("playground_completed");
    }
  };

  return (
    <section id="playground" className="scroll-mt-20 py-8">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-8">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold uppercase tracking-wider mb-3">
          <TerminalIcon className="w-3.5 h-3.5" />
          7-Bo'lim: HTML Laboratoriyasi
        </div>
        <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
          Endi navbat senda!
        </h2>
        <p className="mt-2 text-slate-600 text-base leading-relaxed">
          Kodni o'zgartiring, yangi teglar qo'shing va o'z qo'lingiz bilan birinchi veb-sahifangizni yarating. Hech narsadan qo'rqmang — kodni istalgan vaqtda qayta tiklash mumkin!
        </p>
      </div>

      {/* Main Workspace Card */}
      <div className="max-w-7xl mx-auto bg-white rounded-2xl border border-slate-200 shadow-md overflow-hidden">
        
        {/* Template Selector & Action Toolbar */}
        <div className="p-4 bg-slate-50 border-b border-slate-200 flex flex-wrap items-center justify-between gap-3">
          
          {/* Template pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0 max-w-full">
            <span className="text-xs font-bold text-slate-500 mr-1 shrink-0">Namuna:</span>
            {PLAYGROUND_TEMPLATES.map((tmpl) => (
              <button
                key={tmpl.id}
                onClick={() => handleTemplateChange(tmpl)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold shrink-0 transition-all ${
                  activeTemplateId === tmpl.id
                    ? "bg-blue-600 text-white shadow-sm"
                    : "bg-white text-slate-700 border border-slate-200 hover:bg-slate-100"
                }`}
              >
                {tmpl.name}
              </button>
            ))}
          </div>

          {/* Action buttons */}
          <div className="flex items-center gap-2">
            <button
              onClick={handleCopy}
              className="px-3 py-1.5 rounded-lg text-xs font-medium bg-white border border-slate-200 hover:bg-slate-100 text-slate-700 flex items-center gap-1.5 transition-colors shadow-sm"
              title="Kodni nusxalash"
            >
              {copied ? <CheckIcon className="w-4 h-4 text-emerald-600" /> : <CopyIcon className="w-4 h-4" />}
              <span>{copied ? "Nusxalandi!" : "Nusxa"}</span>
            </button>

            <button
              onClick={handleReset}
              className="px-3 py-1.5 rounded-lg text-xs font-medium bg-white border border-slate-200 hover:bg-slate-100 text-slate-700 flex items-center gap-1.5 transition-colors shadow-sm"
              title="Kodni asl holatiga qaytarish"
            >
              <RotateCcwIcon className="w-4 h-4" />
              <span>Tiklash</span>
            </button>

            <button
              onClick={handleRunCode}
              className="px-4 py-1.5 rounded-lg text-xs font-bold bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-700 hover:to-indigo-700 flex items-center gap-1.5 shadow-md shadow-blue-500/20 active:scale-95 transition-all"
            >
              <PlayIcon className="w-4 h-4" />
              <span>Ishga tushirish</span>
            </button>
          </div>
        </div>

        {/* Editor & Preview Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[460px]">
          
          {/* Left: Code Editor (7 cols on lg) */}
          <div className="lg:col-span-7 bg-slate-900 flex flex-col border-b lg:border-b-0 lg:border-r border-slate-800">
            {/* Editor Tab Bar */}
            <div className="flex items-center justify-between px-4 py-2 bg-slate-950 text-slate-400 text-xs font-mono border-b border-slate-800">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-blue-500" />
                <span className="text-slate-200 font-semibold">index.html</span>
                <span className="text-[10px] text-slate-400 hidden sm:inline">(Jonli muharrir)</span>
              </div>
              <span className="text-[11px] text-slate-400 font-sans">Avtomatik format</span>
            </div>

            {/* Code Input Area with Line Numbers */}
            <div className="relative flex-1 flex overflow-hidden">
              {/* Line numbers gutter */}
              <div className="w-10 sm:w-12 py-3 bg-slate-950/60 text-right pr-2.5 select-none font-mono text-xs text-slate-600 leading-[1.6]">
                {lineNumbers.map((num) => (
                  <div key={num}>{num}</div>
                ))}
              </div>

              {/* Textarea */}
              <textarea
                value={sourceCode}
                onChange={(e) => {
                  setSourceCode(e.target.value);
                  // Jonli natijani ham yangilash
                  setRenderedCode(e.target.value);
                }}
                spellCheck="false"
                className="flex-1 bg-transparent text-emerald-300 font-mono text-xs sm:text-sm p-3 focus:outline-none resize-none leading-[1.6] selection:bg-indigo-600/40"
                placeholder="HTML kodingizni shu yerga yozing..."
              />
            </div>

            {/* Bottom status */}
            <div className="px-4 py-2 bg-slate-950/80 border-t border-slate-800 text-[11px] text-slate-400 font-mono flex items-center justify-between">
              <span>Satrlar: {lineCount} | Belgilar: {sourceCode.length}</span>
              <span className="text-emerald-400 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Jonli sinxronizatsiya
              </span>
            </div>
          </div>

          {/* Right: Live Sandboxed Preview (5 cols on lg) */}
          <div className="lg:col-span-5 p-3 sm:p-4 bg-slate-50 flex flex-col justify-between">
            <LivePreview code={renderedCode} />
          </div>
        </div>

        {/* Guided Practical Challenge Card */}
        <div className="p-6 bg-gradient-to-r from-blue-50/70 via-indigo-50/40 to-white border-t border-slate-200">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
            <div>
              <h4 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                <SparklesIcon className="w-5 h-5 text-blue-600" />
                Laboratoriya Topshirig'i: O'z sahifangizni yarating!
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                Koddagi matnlarni quyidagi ko'rsatmalar asosida o'zgartiring va "Topshiriqni tekshirish" tugmasini bosing:
              </p>
            </div>

            <button
              onClick={handleCheckChallenge}
              className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs sm:text-sm shadow-sm hover:shadow transition-all self-start sm:self-auto shrink-0"
            >
              Topshiriqni tekshirish
            </button>
          </div>

          {/* Checklist */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { id: 1, text: "1. Ismingizni <h1> sarlavhaga yozing" },
              { id: 2, text: "2. O'zingiz haqingizda <p> paragraf qo'shing" },
              { id: 3, text: "3. Ikkinchi sarlavha (<h2>) yarating" },
              { id: 4, text: "4. Uchta qiziqishingizdan iborat ro'yxat (<ul> yoki <ol>) yarating" }
            ].map((item) => {
              const res = challengeResults?.find(r => r.id === item.id);
              return (
                <div 
                  key={item.id}
                  className={`p-3 rounded-xl border text-xs font-medium flex items-center justify-between transition-all ${
                    res
                      ? res.passed
                        ? "bg-emerald-50 border-emerald-300 text-emerald-900 font-semibold"
                        : "bg-amber-50 border-amber-300 text-amber-900"
                      : "bg-white border-slate-200 text-slate-700"
                  }`}
                >
                  <span>{item.text}</span>
                  {res && (
                    res.passed 
                      ? <CheckCircleIcon className="w-5 h-5 text-emerald-600 shrink-0 ml-2" />
                      : <span className="text-[11px] font-bold text-amber-700 px-2 py-0.5 rounded bg-amber-100 shrink-0 ml-2">Hali bajarilmadi</span>
                  )}
                </div>
              );
            })}
          </div>

          {challengeResults && challengeResults.every(r => r.passed) && (
            <div className="mt-4 p-4 rounded-xl bg-emerald-100 border border-emerald-300 text-emerald-900 text-sm font-semibold flex items-center gap-3 animate-fadeIn">
              <CheckCircleIcon className="w-6 h-6 text-emerald-600 shrink-0" />
              <span>Qoyilmaqom natija! Barcha 4 ta shart muvaffaqiyatli bajarildi. Siz HTML bilan erkin ishlay olyapsiz!</span>
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
