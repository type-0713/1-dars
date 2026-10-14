// src/components/Hero.jsx
import React, { useState } from 'react';
import { ArrowRightIcon, PlayIcon, SparklesIcon, LayersIcon, CodeIcon } from './Icons';

export function Hero({ onStartLesson, onExploreHtml }) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 20; // -10deg to 10deg
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -20;
    setMousePos({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
  };

  return (
    <section id="hero" className="relative overflow-hidden pt-12 pb-20 md:pt-20 md:pb-28 bg-gradient-to-b from-slate-50 via-white to-slate-50 border-b border-slate-200">
      {/* Background Decorative Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-40 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Content */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold tracking-wide">
              <SparklesIcon className="w-4 h-4 text-blue-600 animate-pulse" />
              <span>Interaktiv Ta'lim Platformasi</span>
            </div>

            <h1 className="text-4xl sm:text-5xl xl:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
              Kelajakni <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">kod bilan</span> yarat!
            </h1>

            <p className="text-xl sm:text-2xl font-medium text-slate-700">
              IT KURSI — dasturlash olamiga birinchi qadaming.
            </p>

            <p className="text-base sm:text-lg text-slate-600 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Bugun sen faqat HTML o'rganmaysan. Sen o'zingning birinchi veb-sahifangni yaratishni boshlaysan. Har bir qadamda tajriba, sinov va amaliyot!
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                onClick={onStartLesson}
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold text-base shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/35 hover:-translate-y-0.5 active:translate-y-0 transition-all flex items-center justify-center gap-3 group"
              >
                <span>Darsni boshlash</span>
                <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onExploreHtml}
                className="w-full sm:w-auto px-6 py-4 rounded-xl bg-white border border-slate-300 text-slate-700 hover:text-slate-900 hover:border-slate-400 font-semibold text-base shadow-sm hover:shadow transition-all flex items-center justify-center gap-2.5"
              >
                <LayersIcon className="w-5 h-5 text-indigo-600" />
                <span>HTML qanday ishlashini ko'rish</span>
              </button>
            </div>

            {/* Mini Trust Highlights */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-slate-200/80 max-w-lg mx-auto lg:mx-0 text-left">
              <div>
                <div className="text-2xl font-bold text-slate-900">100%</div>
                <div className="text-xs text-slate-500 font-medium">Interaktiv va jonli</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-blue-600">10+</div>
                <div className="text-xs text-slate-500 font-medium">Amaliy mashqlar</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-indigo-600">3D</div>
                <div className="text-xs text-slate-500 font-medium">Vizual model</div>
              </div>
            </div>
          </div>

          {/* Right Hero 3D Interactive Visualization */}
          <div 
            className="lg:col-span-5 flex justify-center perspective-1000"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <div 
              className="relative w-full max-w-md h-[420px] rounded-2xl bg-white/80 backdrop-blur border border-slate-200/80 p-6 shadow-2xl preserve-3d transition-transform duration-200 ease-out flex flex-col justify-between"
              style={{
                transform: `rotateX(${mousePos.y}deg) rotateY(${mousePos.x}deg)`
              }}
            >
              {/* Window Header */}
              <div className="flex items-center justify-between pb-3 border-b border-slate-200">
                <div className="flex items-center gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-rose-400" />
                  <div className="w-3 h-3 rounded-full bg-amber-400" />
                  <div className="w-3 h-3 rounded-full bg-emerald-400" />
                </div>
                <span className="text-[11px] font-mono text-slate-400">index.html (3D Qatlamlar)</span>
                <CodeIcon className="w-4 h-4 text-slate-400" />
              </div>

              {/* 3D Stacked Layers */}
              <div className="relative flex-1 flex flex-col justify-center gap-3.5 py-4 preserve-3d">
                
                {/* Layer 1: html root */}
                <div className="group relative bg-slate-900 text-slate-100 p-3 rounded-xl border border-slate-700 shadow-md layer-3d layer-step-1 flex items-center justify-between hover:bg-slate-800 cursor-pointer">
                  <div className="flex items-center gap-2 font-mono text-xs font-semibold">
                    <span className="text-indigo-400">&lt;html&gt;</span>
                    <span className="text-slate-400 text-[10px]">Butun sahifa qobig'i</span>
                  </div>
                  <span className="text-[10px] font-sans px-2 py-0.5 rounded bg-indigo-500/20 text-indigo-300">Root</span>
                </div>

                {/* Layer 2: head */}
                <div className="relative ml-4 bg-indigo-50/90 text-indigo-900 p-3 rounded-xl border border-indigo-200 shadow-md layer-3d layer-step-2 flex items-center justify-between hover:bg-indigo-100 cursor-pointer">
                  <div className="flex items-center gap-2 font-mono text-xs font-semibold">
                    <span className="text-indigo-600">&lt;head&gt;</span>
                    <span className="text-slate-500 text-[10px]">Texnik qism &amp; sarlavha</span>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white text-indigo-700">&lt;title&gt;</span>
                </div>

                {/* Layer 3: body */}
                <div className="relative ml-4 bg-blue-50/90 text-blue-900 p-3 rounded-xl border border-blue-200 shadow-md layer-3d layer-step-3 flex items-center justify-between hover:bg-blue-100 cursor-pointer">
                  <div className="flex items-center gap-2 font-mono text-xs font-semibold">
                    <span className="text-blue-600">&lt;body&gt;</span>
                    <span className="text-slate-600 text-[10px]">Ko'rinadigan tana</span>
                  </div>
                  <span className="text-[10px] font-sans px-2 py-0.5 rounded bg-blue-600 text-white">Visual</span>
                </div>

                {/* Layer 4: h1 */}
                <div className="relative ml-8 bg-white text-slate-800 p-3 rounded-xl border border-emerald-300 shadow-lg layer-3d layer-step-4 flex items-center justify-between hover:border-emerald-400 cursor-pointer">
                  <div className="font-mono text-xs">
                    <span className="text-emerald-600 font-bold">&lt;h1&gt;</span>
                    <span className="font-sans font-bold text-slate-900 ml-1">Salom, dunyo!</span>
                    <span className="text-emerald-600 font-bold ml-1">&lt;/h1&gt;</span>
                  </div>
                  <span className="text-[10px] font-sans px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 font-medium">Sarlavha</span>
                </div>

                {/* Layer 5: p */}
                <div className="relative ml-8 bg-white text-slate-700 p-3 rounded-xl border border-amber-300 shadow-lg layer-3d layer-step-5 flex items-center justify-between hover:border-amber-400 cursor-pointer">
                  <div className="font-mono text-xs">
                    <span className="text-amber-600 font-bold">&lt;p&gt;</span>
                    <span className="font-sans text-slate-600 ml-1">Mening birinchi sahifam</span>
                    <span className="text-amber-600 font-bold ml-1">&lt;/p&gt;</span>
                  </div>
                  <span className="text-[10px] font-sans px-2 py-0.5 rounded bg-amber-100 text-amber-800 font-medium">Matn</span>
                </div>

              </div>

              {/* Footer Tip in 3D Card */}
              <div className="pt-2 text-center text-xs text-slate-400 flex items-center justify-center gap-1.5">
                <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                <span>Kursor bilan 3D chuqurlikni his qiling</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
