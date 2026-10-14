// src/components/HtmlStructure3D.jsx
import React, { useState } from 'react';
import { HTML_DOCUMENT_PARTS } from '../data/lessons';
import { LayersIcon, CheckCircleIcon, XCircleIcon, HelpCircleIcon, LightbulbIcon, SparklesIcon, CodeIcon } from './Icons';

export function HtmlStructure3D({ onCompletePart }) {
  const [selectedPartId, setSelectedPartId] = useState("doctype");
  const [quizAnswer, setQuizAnswer] = useState({});
  const [rotation, setRotation] = useState({ x: 8, y: -12 });
  const [isRotating, setIsRotating] = useState(false);

  const activePart = HTML_DOCUMENT_PARTS.find(p => p.id === selectedPartId) || HTML_DOCUMENT_PARTS[0];

  const handleSelectPart = (id) => {
    setSelectedPartId(id);
    onCompletePart?.(id);
  };

  const handleQuizOption = (partId, optionIndex, isCorrect) => {
    setQuizAnswer({
      ...quizAnswer,
      [partId]: { optionIndex, isCorrect }
    });
    if (isCorrect) {
      onCompletePart?.(`quiz_${partId}`);
    }
  };

  return (
    <section id="structure3d" className="scroll-mt-20 py-8">
      <div className="text-center max-w-3xl mx-auto mb-10">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold uppercase tracking-wider mb-3">
          <LayersIcon className="w-3.5 h-3.5" />
          6-Mavzu: HTML Hujjatining Tuzilishi
        </div>
        <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
          3D HTML Daraxti va Hujjat Anatomiyasi
        </h2>
        <p className="mt-2 text-slate-600 text-base leading-relaxed">
          Har bir veb-sahifa aniq bir tartibdagi suyak (skelet) ustiga quriladi. Quyidagi 3D daraxtdan yoki ro'yxatdan qismlarni tanlab, ularning sir-asrorlarini bilib oling:
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Side: 3D Tree Visualizer & Quick Nav */}
        <div className="lg:col-span-5 space-y-6">
          
          {/* 3D Visualizer Canvas */}
          <div className="bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 p-6 rounded-2xl border border-slate-700 shadow-xl perspective-1000 overflow-hidden relative">
            <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-700 text-xs text-slate-400 font-mono">
              <span className="flex items-center gap-1.5 text-indigo-400 font-semibold">
                <CodeIcon className="w-4 h-4" />
                DOM Daraxti (3D Model)
              </span>
              <span className="text-[11px] text-slate-400">Interaktiv qatlam</span>
            </div>

            {/* Interactive 3D Tree Nodes */}
            <div 
              className="py-4 space-y-3 preserve-3d transition-transform duration-300 ease-out"
              style={{
                transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`
              }}
            >
              {/* Doctype Node */}
              <button
                onClick={() => handleSelectPart("doctype")}
                className={`w-full text-left font-mono text-xs p-2.5 rounded-xl border transition-all ${
                  selectedPartId === "doctype"
                    ? "bg-blue-600 text-white border-blue-400 shadow-lg translate-z-10 scale-105"
                    : "bg-slate-800/90 text-slate-300 border-slate-700 hover:bg-slate-800"
                }`}
              >
                &lt;!DOCTYPE html&gt; <span className="text-[10px] opacity-75 font-sans">(HTML5 e'loni)</span>
              </button>

              {/* html root */}
              <button
                onClick={() => handleSelectPart("html")}
                className={`w-full text-left font-mono text-xs p-2.5 rounded-xl border transition-all ${
                  selectedPartId === "html"
                    ? "bg-indigo-600 text-white border-indigo-400 shadow-lg translate-z-10 scale-105"
                    : "bg-slate-800/90 text-slate-300 border-slate-700 hover:bg-slate-800"
                }`}
              >
                &lt;html lang="uz"&gt; <span className="text-[10px] opacity-75 font-sans">(Ildiz element)</span>
              </button>

              {/* Head Branch */}
              <div className="ml-4 pl-3 border-l-2 border-indigo-500/40 space-y-2">
                <button
                  onClick={() => handleSelectPart("head")}
                  className={`w-full text-left font-mono text-xs p-2 rounded-lg border transition-all ${
                    selectedPartId === "head"
                      ? "bg-indigo-500 text-white border-indigo-300 shadow-md scale-105"
                      : "bg-slate-800/60 text-indigo-300 border-slate-700 hover:bg-slate-800"
                  }`}
                >
                  ├── &lt;head&gt; <span className="text-[10px] opacity-75 font-sans">(Texnik bosh)</span>
                </button>

                <div className="ml-4 pl-3 border-l border-indigo-400/30 space-y-1.5">
                  <button
                    onClick={() => handleSelectPart("charset")}
                    className={`w-full text-left font-mono text-[11px] p-1.5 rounded border transition-all ${
                      selectedPartId === "charset"
                        ? "bg-indigo-400 text-slate-900 font-bold border-white"
                        : "text-slate-400 hover:text-slate-200 border-transparent hover:bg-slate-800"
                    }`}
                  >
                    ├── &lt;meta charset="UTF-8"&gt;
                  </button>
                  <button
                    onClick={() => handleSelectPart("viewport")}
                    className={`w-full text-left font-mono text-[11px] p-1.5 rounded border transition-all ${
                      selectedPartId === "viewport"
                        ? "bg-indigo-400 text-slate-900 font-bold border-white"
                        : "text-slate-400 hover:text-slate-200 border-transparent hover:bg-slate-800"
                    }`}
                  >
                    ├── &lt;meta name="viewport"&gt;
                  </button>
                  <button
                    onClick={() => handleSelectPart("title")}
                    className={`w-full text-left font-mono text-[11px] p-1.5 rounded border transition-all ${
                      selectedPartId === "title"
                        ? "bg-indigo-400 text-slate-900 font-bold border-white"
                        : "text-slate-400 hover:text-slate-200 border-transparent hover:bg-slate-800"
                    }`}
                  >
                    └── &lt;title&gt;
                  </button>
                </div>
              </div>

              {/* Body Branch */}
              <div className="ml-4 pl-3 border-l-2 border-emerald-500/40 space-y-2">
                <button
                  onClick={() => handleSelectPart("body")}
                  className={`w-full text-left font-mono text-xs p-2 rounded-lg border transition-all ${
                    selectedPartId === "body"
                      ? "bg-emerald-600 text-white border-emerald-300 shadow-md scale-105"
                      : "bg-slate-800/60 text-emerald-300 border-slate-700 hover:bg-slate-800"
                  }`}
                >
                  └── &lt;body&gt; <span className="text-[10px] opacity-75 font-sans">(Ko'rinadigan tana)</span>
                </button>

                <div className="ml-4 pl-3 border-l border-emerald-400/30 space-y-1.5 text-slate-400 font-mono text-[11px]">
                  <div className="p-1">├── &lt;h1&gt; Salom, dunyo! &lt;/h1&gt;</div>
                  <div className="p-1">└── &lt;p&gt; Birinchi sahifam &lt;/p&gt;</div>
                </div>
              </div>
            </div>

            {/* 3D Angle Sliders for Fun */}
            <div className="mt-4 pt-3 border-t border-slate-700/80 flex items-center justify-between text-xs text-slate-400">
              <span>Burchak: X {rotation.x}° | Y {rotation.y}°</span>
              <button 
                onClick={() => setRotation(rotation.x === 0 ? { x: 10, y: -15 } : { x: 0, y: 0 })}
                className="px-2 py-1 rounded bg-slate-800 hover:bg-slate-700 text-indigo-300 text-[11px]"
              >
                Burchakni burish
              </button>
            </div>
          </div>

          {/* Quick Tab Selector for Mobile / Small Screens */}
          <div className="grid grid-cols-2 gap-2">
            {HTML_DOCUMENT_PARTS.map((part) => (
              <button
                key={part.id}
                onClick={() => handleSelectPart(part.id)}
                className={`p-2.5 rounded-xl text-left border text-xs font-semibold transition-all ${
                  selectedPartId === part.id
                    ? "bg-blue-50 border-blue-500 text-blue-700 shadow-sm"
                    : "bg-white border-slate-200 text-slate-700 hover:bg-slate-50"
                }`}
              >
                <div className="font-mono text-slate-900 truncate">{part.name}</div>
                <div className="text-[10px] text-slate-500 font-normal truncate">{part.tagline}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Right Side: Detailed Deep Explanation for Selected Part */}
        <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-6">
          
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-200">
            <div>
              <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">
                {activePart.simpleTitle}
              </span>
              <h3 className="text-2xl font-mono font-bold text-slate-900 mt-1">
                {activePart.name}
              </h3>
            </div>
            <span className="self-start sm:self-center px-3 py-1 rounded-full text-xs font-semibold bg-indigo-50 text-indigo-700 border border-indigo-100">
              {activePart.tagline}
            </span>
          </div>

          {/* Definition & Simple Explanation */}
          <div className="space-y-3">
            <p className="text-slate-800 text-base font-medium leading-relaxed">
              {activePart.definition}
            </p>
            <p className="text-slate-600 text-sm leading-relaxed">
              {activePart.plainExplanation}
            </p>
          </div>

          {/* Analogy & Code Example Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Analogy Card */}
            <div className="p-4 rounded-xl bg-amber-50/80 border border-amber-200 text-amber-950 space-y-1.5">
              <div className="flex items-center gap-2 text-xs font-bold text-amber-800 uppercase tracking-wider">
                <LightbulbIcon className="w-4 h-4 text-amber-600" />
                Hayotiy Analogiya
              </div>
              <p className="text-xs sm:text-sm leading-relaxed font-medium">
                {activePart.analogy}
              </p>
            </div>

            {/* Code Sample */}
            <div className="p-4 rounded-xl bg-slate-900 text-white font-mono text-xs flex flex-col justify-between shadow-inner">
              <div className="text-slate-400 text-[10px] pb-1 border-b border-slate-800 uppercase">
                To'g'ri Sintaksis
              </div>
              <pre className="py-2 text-emerald-400 overflow-x-auto whitespace-pre-wrap">
                <code>{activePart.codeExample}</code>
              </pre>
            </div>
          </div>

          {/* Common Mistake Alert */}
          <div className="p-4 rounded-xl bg-rose-50 border border-rose-200 text-rose-900 flex items-start gap-3">
            <span className="text-rose-500 font-bold text-base mt-0.5">⚠️</span>
            <div className="text-xs sm:text-sm">
              <strong className="font-bold">Keng tarqalgan xato: </strong>
              <span>{activePart.commonMistake}</span>
            </div>
          </div>

          {/* Mini-Quiz for this part */}
          <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
            <div className="flex items-center gap-2 text-xs font-bold text-slate-700 uppercase tracking-wider">
              <HelpCircleIcon className="w-4 h-4 text-blue-600" />
              Tezkor Mini-Sinov
            </div>

            <p className="text-sm font-semibold text-slate-900">
              {activePart.miniQuiz.question}
            </p>

            <div className="space-y-2">
              {activePart.miniQuiz.options.map((opt, idx) => {
                const currentAnswer = quizAnswer[activePart.id];
                const isSelected = currentAnswer?.optionIndex === idx;

                return (
                  <button
                    key={idx}
                    onClick={() => handleQuizOption(activePart.id, idx, opt.correct)}
                    className={`w-full text-left p-3 rounded-lg text-xs sm:text-sm font-medium border transition-all flex items-center justify-between ${
                      isSelected
                        ? opt.correct
                          ? "bg-emerald-100 border-emerald-400 text-emerald-900 font-semibold"
                          : "bg-rose-100 border-rose-400 text-rose-900"
                        : "bg-white border-slate-200 text-slate-700 hover:bg-slate-100"
                    }`}
                  >
                    <span>{opt.text}</span>
                    {isSelected && (
                      opt.correct
                        ? <CheckCircleIcon className="w-5 h-5 text-emerald-600 shrink-0 ml-2" />
                        : <XCircleIcon className="w-5 h-5 text-rose-600 shrink-0 ml-2" />
                    )}
                  </button>
                );
              })}
            </div>

            {quizAnswer[activePart.id] && (
              <div className={`text-xs p-2.5 rounded-lg font-medium animate-fadeIn ${
                quizAnswer[activePart.id].isCorrect
                  ? "bg-emerald-50 text-emerald-800 border border-emerald-200"
                  : "bg-amber-50 text-amber-800 border border-amber-200"
              }`}>
                {quizAnswer[activePart.id].isCorrect 
                  ? "To'g'ri! Barakalla, bu qismni to'liq o'zlashtirdingiz." 
                  : `Maslahat: ${activePart.miniQuiz.tip}`}
              </div>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
