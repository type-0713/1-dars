// src/components/LivePreview.jsx
import React from 'react';
import { EyeIcon, MonitorIcon } from './Icons';

export function LivePreview({ code }) {
  return (
    <div className="flex flex-col h-full bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm">
      {/* Browser Mockup Chrome Bar */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-slate-100 border-b border-slate-200">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-400" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
          </div>
          <span className="text-xs text-slate-400 font-mono hidden sm:inline ml-2">Sandbox Preview</span>
        </div>

        {/* Mock Browser URL pill */}
        <div className="flex items-center gap-2 px-3 py-1 bg-white border border-slate-200 rounded-md text-[11px] text-slate-600 font-mono max-w-[200px] sm:max-w-xs truncate shadow-inner">
          <span className="text-emerald-600 font-bold">https://</span>
          <span>localhost:3000/index.html</span>
        </div>

        <div className="flex items-center gap-1 text-slate-400 text-xs">
          <MonitorIcon className="w-4 h-4" />
        </div>
      </div>

      {/* Sandboxed iframe for safe and realistic rendering */}
      <div className="relative flex-1 min-h-[360px] sm:min-h-[420px] bg-white">
        <iframe
          title="HTML Kod Natijasi"
          srcDoc={code}
          sandbox="allow-same-origin"
          className="w-full h-full border-0 bg-white"
        />
      </div>
    </div>
  );
}
