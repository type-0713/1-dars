// src/components/LessonRoadmap.jsx
import React from 'react';
import { CheckCircleIcon, SparklesIcon, LayersIcon, TerminalIcon, BugIcon, AwardIcon, TrophyIcon } from './Icons';

export function LessonRoadmap({ completedSteps = [], onSelectSection }) {
  const steps = [
    { id: "intro", title: "1. Kirish savoli va Ilk Tajriba", desc: "Saytlar qanday yaratilishini kashf qilish", icon: SparklesIcon },
    { id: "concepts", title: "2. HTML, CSS va JS (Uy analogiyasi)", desc: "Veb-texnologiyalarning o'zaro farqi", icon: LayersIcon },
    { id: "structure3d", title: "3. 3D HTML Hujjat Tuzilishi", desc: "Doctype, head, meta, title va body", icon: LayersIcon },
    { id: "playground", title: "4. HTML Laboratoriyasi", desc: "Jonli muharrirda o'z kodingizni sinash", icon: TerminalIcon },
    { id: "errorhunt", title: "5. 'Xatoni Top' Chaqirig'i", desc: "5 ta sintaktik xatolarni tuzatish", icon: BugIcon },
    { id: "practice", title: "6. 10 ta Amaliy Sinov", desc: "Boshlang'ichdan mustaqil darajagacha", icon: AwardIcon },
    { id: "quiz", title: "7. 12 ta Yakuniy Test", desc: "Bilimlarni 100% mustahkamlash", icon: TrophyIcon },
    { id: "project", title: "8. Shaxsiy Mini-Loyiha", desc: "'Men haqimda' birinchi veb-sahifasi", icon: SparklesIcon }
  ];

  return (
    <div className="py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 mb-6 border-b border-slate-100">
            <div>
              <h3 className="text-xl font-bold text-slate-900">
                1-Dars Yo'l Xaritasi (Roadmap)
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                O'quv rejasidagi qadamlaringiz va o'zlashtirish holati
              </p>
            </div>
            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-blue-50 text-blue-700 self-start sm:self-auto">
              8 ta muhim bosqich
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {steps.map((step, index) => {
              const IconComp = step.icon;
              const isDone = completedSteps.includes(step.id);

              return (
                <button
                  key={step.id}
                  onClick={() => onSelectSection?.(step.id)}
                  className={`text-left p-4 rounded-xl border transition-all flex flex-col justify-between group ${
                    isDone
                      ? "bg-emerald-50/50 border-emerald-300 hover:border-emerald-400"
                      : "bg-slate-50/60 border-slate-200 hover:border-blue-300 hover:bg-white"
                  }`}
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                      isDone ? "bg-emerald-600 text-white" : "bg-slate-200 text-slate-700 group-hover:bg-blue-600 group-hover:text-white"
                    } transition-colors`}>
                      <IconComp className="w-4 h-4" />
                    </div>
                    {isDone && <CheckCircleIcon className="w-5 h-5 text-emerald-600 shrink-0" />}
                  </div>

                  <div>
                    <h4 className="font-bold text-slate-900 text-xs sm:text-sm group-hover:text-blue-600 transition-colors">
                      {step.title}
                    </h4>
                    <p className="text-[11px] text-slate-500 mt-1 leading-normal">
                      {step.desc}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
