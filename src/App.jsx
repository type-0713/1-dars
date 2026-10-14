// src/App.jsx
import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProgressBar } from './components/ProgressBar';
import { LessonRoadmap } from './components/LessonRoadmap';
import { ConceptCard } from './components/ConceptCard';
import { HtmlStructure3D } from './components/HtmlStructure3D';
import { HtmlCodePlayground } from './components/HtmlCodePlayground';
import { ErrorHunt } from './components/ErrorHunt';
import { PracticeChallenge } from './components/PracticeChallenge';
import { Quiz } from './components/Quiz';
import { FinalProject } from './components/FinalProject';
import { CodeIcon, SparklesIcon, CheckCircleIcon, TrophyIcon } from './components/Icons';

const STORAGE_KEY = "it_kursi_lesson1_progress";

export default function App() {
  const [completedSteps, setCompletedSteps] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [activeSection, setActiveSection] = useState("hero");

  // Save to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(completedSteps));
    } catch (e) {
      console.warn("localStorage saqlanmadi:", e);
    }
  }, [completedSteps]);

  // Total major milestones (8 core sections)
  const CORE_SECTIONS = [
    "intro",
    "concepts",
    "structure3d",
    "playground",
    "errorhunt",
    "practice",
    "quiz",
    "project"
  ];

  const completedCoreCount = CORE_SECTIONS.filter(sec => completedSteps.includes(sec)).length;
  const progressPercent = (completedCoreCount / CORE_SECTIONS.length) * 100;

  const markStepComplete = (stepId) => {
    if (!completedSteps.includes(stepId)) {
      setCompletedSteps(prev => [...prev, stepId]);
    }
  };

  const handleResetProgress = () => {
    if (window.confirm("Barcha dars progressini qayta boshlamoqchimisiz?")) {
      setCompletedSteps([]);
      localStorage.removeItem(STORAGE_KEY);
    }
  };

  const scrollToSection = (id) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col font-sans">
      
      {/* 1. Global Navigation Bar */}
      <Navbar
        progressPercent={progressPercent}
        onResetProgress={handleResetProgress}
        activeSection={activeSection}
        onNavigate={scrollToSection}
      />

      {/* 2. Hero Section */}
      <Hero
        onStartLesson={() => {
          markStepComplete("intro");
          scrollToSection("intro");
        }}
        onExploreHtml={() => {
          scrollToSection("structure3d");
        }}
      />

      {/* 3. Sticky / Prominent Progress Tracker */}
      <ProgressBar
        completedCount={completedCoreCount}
        totalCount={CORE_SECTIONS.length}
        onReset={handleResetProgress}
      />

      {/* 4. Lesson Roadmap Overview */}
      <LessonRoadmap
        completedSteps={completedSteps}
        onSelectSection={scrollToSection}
      />

      {/* Main Lesson Content Wrapper */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-20">
        
        {/* Core Concepts: Intro Question, Salom Dunyo, Analogy, Tags, Headings, Lists */}
        <ConceptCard
          completedSteps={completedSteps}
          onCompleteStep={(step) => {
            markStepComplete(step);
            markStepComplete("intro");
            markStepComplete("concepts");
          }}
        />

        {/* 3D HTML Document Structure & DOM Tree */}
        <HtmlStructure3D
          onCompletePart={(partId) => {
            markStepComplete(`structure_${partId}`);
            markStepComplete("structure3d");
          }}
        />

        {/* HTML Code Playground & Live Sandbox Preview */}
        <HtmlCodePlayground
          onCodeRun={() => markStepComplete("playground_run")}
          onCompleteChallenge={() => markStepComplete("playground")}
        />

        {/* "Xatoni Top" Coding Challenge Game */}
        <ErrorHunt
          onCompleteAllChallenges={() => markStepComplete("errorhunt")}
        />

        {/* 10 In-Class Practical Exercises */}
        <PracticeChallenge
          completedExerciseIds={completedSteps.filter(s => typeof s === 'number')}
          onCompleteExercise={(exId) => {
            markStepComplete(exId);
            markStepComplete("practice");
          }}
        />

        {/* 12 Final Quiz Questions with Score & Recommendations */}
        <Quiz
          onQuizComplete={() => markStepComplete("quiz")}
        />

        {/* Final Mini-Project: "Men haqimda" */}
        <FinalProject
          onProjectCompleted={() => markStepComplete("project")}
        />

      </main>

      {/* Professional EdTech Footer */}
      <footer className="mt-20 bg-white border-t border-slate-200 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-200">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-white shadow-md">
                <CodeIcon className="w-5 h-5" />
              </div>
              <div>
                <span className="font-extrabold text-lg text-slate-900 tracking-tight">IT KURSI</span>
                <p className="text-xs text-slate-500">1-DARS: HTML Olamiga Kirish — Muvaffaqiyatli yakunlandi</p>
              </div>
            </div>

            <div className="text-center md:text-right">
              <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Keyingi bosqich</div>
              <div className="text-sm font-bold text-slate-800">
                2-Dars: CSS — Sahifalarga jon va go'zallik berish (Tez kunda)
              </div>
            </div>
          </div>

          <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-3">
            <p>© {new Date().getFullYear()} IT KURSI. Barcha ta'lim materiallari ochiq va interaktiv.</p>
            <p>100% Frontend | Server va Login talab etilmaydi | LocalStorage orqali saqlanadi</p>
          </div>
        </div>
      </footer>

    </div>
  );
}
