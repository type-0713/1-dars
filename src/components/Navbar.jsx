// src/components/Navbar.jsx
import React, { useState } from 'react';
import { CodeIcon, LayersIcon, TerminalIcon, BugIcon, AwardIcon, TrophyIcon, MenuIcon, XIcon, RotateCcwIcon } from './Icons';

export function Navbar({ progressPercent = 0, onResetProgress, activeSection, onNavigate }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: "hero", label: "Bosh sahifa" },
    { id: "intro", label: "Kirish" },
    { id: "concepts", label: "HTML Asoslari" },
    { id: "structure3d", label: "3D Tuzilish" },
    { id: "playground", label: "Laboratoriya" },
    { id: "errorhunt", label: "Xatoni Top" },
    { id: "practice", label: "Mashqlar" },
    { id: "quiz", label: "Yakuniy Test" },
    { id: "project", label: "Mini-Loyiha" }
  ];

  const handleLinkClick = (id) => {
    onNavigate?.(id);
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo & Course Badge */}
          <div className="flex items-center gap-3">
            <button 
              onClick={() => handleLinkClick("hero")}
              className="flex items-center gap-2 group text-left"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-white shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform">
                <CodeIcon className="w-5 h-5" />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="font-extrabold text-xl tracking-tight text-slate-900">IT KURSI</span>
                  <span className="text-[10px] font-bold tracking-wider uppercase px-1.5 py-0.5 rounded bg-blue-100 text-blue-700">EdTech</span>
                </div>
                <p className="text-xs text-slate-500 font-medium">1-Dars — HTML Olamiga Kirish</p>
              </div>
            </button>
          </div>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors ${
                  activeSection === link.id
                    ? "bg-blue-50 text-blue-700"
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                }`}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Progress Indicator & Reset Action */}
          <div className="flex items-center gap-3">
            <div className="hidden sm:flex items-center gap-2.5 bg-slate-50 border border-slate-200 px-3 py-1.5 rounded-full">
              <div className="text-xs font-medium text-slate-600">
                Progress: <span className="font-bold text-blue-600">{Math.round(progressPercent)}%</span>
              </div>
              <div className="w-16 h-2 bg-slate-200 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full transition-all duration-500 ease-out"
                  style={{ width: `${Math.min(100, Math.max(0, progressPercent))}%` }}
                />
              </div>
            </div>

            {onResetProgress && (
              <button
                onClick={onResetProgress}
                title="Dars progressini qayta boshlash"
                className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-lg transition-colors text-xs flex items-center gap-1"
              >
                <RotateCcwIcon className="w-4 h-4" />
                <span className="hidden xl:inline text-[11px]">Qayta boshlash</span>
              </button>
            )}

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors"
              aria-label="Menyu"
            >
              {mobileMenuOpen ? <XIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 space-y-2 shadow-xl animate-fadeIn">
          <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-100">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Mavzular</span>
            <span className="text-xs font-semibold text-blue-600">{Math.round(progressPercent)}% yakunlandi</span>
          </div>
          <div className="grid grid-cols-2 gap-1.5">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                className={`text-left px-3 py-2 text-xs font-medium rounded-lg transition-colors ${
                  activeSection === link.id
                    ? "bg-blue-600 text-white font-semibold"
                    : "text-slate-700 bg-slate-50 hover:bg-slate-100"
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
