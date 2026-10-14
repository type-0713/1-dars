// src/components/ProgressBar.jsx
import React from 'react';
import { TrophyIcon, SparklesIcon, CheckCircleIcon, RotateCcwIcon } from './Icons';

export function ProgressBar({ completedCount = 0, totalCount = 8, onReset }) {
  const percent = Math.min(100, Math.round((completedCount / totalCount) * 100));

  return (
    <div className="bg-white border-y border-slate-200 py-4 px-4 sm:px-6 shadow-sm">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-4">
        
        {/* Progress Text & Stage */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600 font-bold text-sm shrink-0">
            {percent}%
          </div>
          <div>
            <div className="text-xs font-semibold text-slate-500 uppercase tracking-wide">
              Dars O'zlashtirish Holati
            </div>
            <div className="text-sm font-bold text-slate-900">
              {totalCount} ta asosiy bosqichdan {completedCount} tasi yakunlandi
            </div>
          </div>
        </div>

        {/* Progress Bar & Actions */}
        <div className="flex-1 max-w-md flex items-center gap-4">
          <div className="flex-1 h-3 bg-slate-100 rounded-full overflow-hidden border border-slate-200">
            <div 
              className="h-full bg-gradient-to-r from-blue-500 via-indigo-500 to-emerald-500 rounded-full transition-all duration-700 ease-out"
              style={{ width: `${percent}%` }}
            />
          </div>

          {percent === 100 && (
            <span className="inline-flex items-center gap-1 text-xs font-bold text-emerald-700 bg-emerald-100 px-2.5 py-1 rounded-full shrink-0">
              <SparklesIcon className="w-3.5 h-3.5 text-emerald-600" />
              1-Dars Tamom!
            </span>
          )}

          {onReset && (
            <button
              onClick={onReset}
              title="Progressni tozalash"
              className="text-xs text-slate-400 hover:text-slate-600 p-1.5 rounded-lg hover:bg-slate-100 transition-colors"
            >
              <RotateCcwIcon className="w-4 h-4" />
            </button>
          )}
        </div>

      </div>
    </div>
  );
}
