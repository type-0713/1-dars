// src/components/ConceptCard.jsx
import React, { useState } from 'react';
import { 
  CheckCircleIcon, HelpCircleIcon, LightbulbIcon, SparklesIcon, 
  LayersIcon, ArrowRightIcon, BookOpenIcon, CheckIcon 
} from './Icons';
import { INTRO_QUESTION, HOUSE_ANALOGY, TAG_ANATOMY, HEADINGS_DATA, LISTS_DATA } from '../data/lessons';

export function ConceptCard({ onCompleteStep, completedSteps = [] }) {
  // Intro Question State
  const [selectedIntroOption, setSelectedIntroOption] = useState(null);
  
  // Live "Salom dunyo" Experiment State
  const [liveGreetingText, setLiveGreetingText] = useState("Salom, dunyo!");

  // House Analogy State
  const [activeTech, setActiveTech] = useState("html");

  // Tag Anatomy State
  const [selectedTagPart, setSelectedTagPart] = useState("open");

  // Headings Playground State
  const [selectedHeadingTag, setSelectedHeadingTag] = useState("h1");
  const [headingCustomText, setHeadingCustomText] = useState("Bu sarlavha matni");
  const [showDeepQuestionAnswer, setShowDeepQuestionAnswer] = useState(false);

  // Lists Playground State
  const [listType, setListType] = useState("ul");
  const [customListItems, setCustomListItems] = useState(["Dasturlash", "Shaxmat", "Kitob o'qish"]);
  const [newListItemInput, setNewListItemInput] = useState("");

  const handleAddListItem = (e) => {
    e.preventDefault();
    if (newListItemInput.trim()) {
      setCustomListItems([...customListItems, newListItemInput.trim()]);
      setNewListItemInput("");
      onCompleteStep?.("lists_interactive");
    }
  };

  const handleRemoveListItem = (index) => {
    setCustomListItems(customListItems.filter((_, i) => i !== index));
  };

  return (
    <div className="space-y-16">
      
      {/* ========================================================
          1. DARSNING BOSHLANISHI — SAVOL & ILK TAJRIBA
          ======================================================== */}
      <section id="intro" className="scroll-mt-20">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold uppercase tracking-wider mb-3">
            <SparklesIcon className="w-3.5 h-3.5" />
            1-Qadam: Qiziqish uyg'otish
          </div>
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            Internetdagi saytlar qanday yaratiladi?
          </h2>
          <p className="mt-2 text-slate-600 text-base">
            Keling, darsni zerikarli qoidalardan emas, oddiy bir savoldan boshlaylik.
          </p>
        </div>

        {/* Intro Question Options */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-4xl mx-auto">
          {INTRO_QUESTION.options.map((option) => {
            const isSelected = selectedIntroOption?.id === option.id;
            return (
              <button
                key={option.id}
                onClick={() => {
                  setSelectedIntroOption(option);
                  if (option.isCorrect) onCompleteStep?.("intro_question");
                }}
                className={`p-5 rounded-2xl text-left border-2 transition-all flex flex-col justify-between ${
                  isSelected
                    ? option.isCorrect
                      ? "border-emerald-500 bg-emerald-50/50 shadow-md ring-2 ring-emerald-200"
                      : "border-amber-400 bg-amber-50/50 shadow-md ring-2 ring-amber-200"
                    : "border-slate-200 bg-white hover:border-blue-300 hover:shadow-sm"
                }`}
              >
                <div className="flex items-start justify-between gap-3">
                  <span className="font-semibold text-slate-900 text-base">{option.text}</span>
                  {isSelected && (
                    option.isCorrect 
                      ? <CheckCircleIcon className="w-6 h-6 text-emerald-600 shrink-0" />
                      : <LightbulbIcon className="w-6 h-6 text-amber-600 shrink-0" />
                  )}
                </div>
                {isSelected && (
                  <p className={`mt-3 text-sm leading-relaxed ${
                    option.isCorrect ? "text-emerald-800 font-medium" : "text-amber-800"
                  }`}>
                    {option.feedback}
                  </p>
                )}
              </button>
            );
          })}
        </div>

        {/* Live First Experiment: Salom Dunyo! */}
        <div className="mt-12 max-w-4xl mx-auto bg-gradient-to-br from-white to-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-md">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 mb-6 border-b border-slate-200">
            <div>
              <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-blue-600 text-white text-xs font-bold">1.1</span>
                Ilk Tajriba: "Salom, dunyo!" siri
              </h3>
              <p className="text-sm text-slate-600 mt-1">
                Chap tomondagi sarlavha matnini o'zgartiring va o'ng tomonda brauzer buni qanday ko'rsatishini tomosha qiling:
              </p>
            </div>
            <span className="self-start sm:self-center px-3 py-1 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-800">
              Jonli tajriba
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
            {/* Left: Code Input */}
            <div className="bg-slate-900 rounded-xl p-5 text-white flex flex-col justify-between shadow-inner">
              <div>
                <div className="flex items-center justify-between text-xs text-slate-400 font-mono mb-3 pb-2 border-b border-slate-800">
                  <span>HTML KOD</span>
                  <span className="text-indigo-400">&lt;h1&gt; sarlavha tegi</span>
                </div>
                <div className="font-mono text-sm sm:text-base text-slate-200 space-y-2">
                  <div className="text-indigo-400 font-bold">&lt;h1&gt;</div>
                  <input
                    type="text"
                    value={liveGreetingText}
                    onChange={(e) => {
                      setLiveGreetingText(e.target.value);
                      onCompleteStep?.("live_greeting");
                    }}
                    placeholder="Matn kiriting..."
                    className="w-full bg-slate-800/90 border border-indigo-500/50 rounded-lg px-3 py-2 text-white font-mono text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
                  />
                  <div className="text-indigo-400 font-bold">&lt;/h1&gt;</div>
                </div>
              </div>
              <p className="text-xs text-slate-400 mt-4">
                Siz matn yozganingizda, brauzer darhol uni &lt;h1&gt; qoidasi bo'yicha ekranga chiqaradi!
              </p>
            </div>

            {/* Right: Live Browser Render */}
            <div className="bg-white rounded-xl border-2 border-blue-200 p-5 flex flex-col justify-between shadow-sm relative overflow-hidden">
              <div className="flex items-center justify-between text-xs text-slate-500 font-medium pb-2 border-b border-slate-100">
                <span className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block" />
                  BRAUZER NATIJASI
                </span>
                <span className="text-[11px] text-slate-400">Google Chrome ko'rinishi</span>
              </div>

              <div className="my-auto py-6">
                <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 break-words leading-tight">
                  {liveGreetingText || <span className="text-slate-300 italic">Matn kiritilmadi...</span>}
                </h1>
              </div>

              <div className="bg-blue-50/80 rounded-lg p-3 text-xs text-blue-900 border border-blue-100">
                <strong>Xulosa:</strong> Kod yozish — bu brauzerga nima chizish kerakligini tushunarli tilda aytib berishdir!
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          2. HTML NIMA? & UY ANALOGIYASI (HTML, CSS, JS)
          ======================================================== */}
      <section id="concepts" className="scroll-mt-20">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-semibold uppercase tracking-wider mb-3">
            <BookOpenIcon className="w-3.5 h-3.5" />
            2-Mavzu: Chuqur tushunish
          </div>
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            HTML nima va u qanday ishlaydi?
          </h2>
          <p className="mt-2 text-slate-600 text-base leading-relaxed">
            <strong>HTML (HyperText Markup Language)</strong> — veb-sahifaning tuzilishini yaratish uchun ishlatiladigan <em>belgilash tili</em>. U dasturlash tili emas, balki elementlarni qayerda qanday joylashishini belgilovchi qoidalardir.
          </p>
        </div>

        {/* House Analogy Interactive Switcher */}
        <div className="max-w-4xl mx-auto bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <h3 className="text-xl font-bold text-slate-900">
                Hayotiy Analogiya: Veb-saytni uyga qiyoslash
              </h3>
              <p className="text-sm text-slate-600">
                Keling, HTML, CSS va JS farqini ko'rish uchun quyidagi kartalarni tanlang:
              </p>
            </div>
            <div className="flex items-center gap-1.5 bg-slate-100 p-1 rounded-xl self-start">
              {HOUSE_ANALOGY.technologies.map((tech) => (
                <button
                  key={tech.id}
                  onClick={() => {
                    setActiveTech(tech.id);
                    onCompleteStep?.(`analogy_${tech.id}`);
                  }}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                    activeTech === tech.id
                      ? "bg-white text-slate-900 shadow-sm"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  {tech.id.toUpperCase()}
                </button>
              ))}
            </div>
          </div>

          {/* Active Technology Deep Dive */}
          {(() => {
            const current = HOUSE_ANALOGY.technologies.find(t => t.id === activeTech) || HOUSE_ANALOGY.technologies[0];
            return (
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                <div className="md:col-span-7 space-y-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg text-xs font-bold bg-slate-100 text-slate-800">
                    <span>{current.badge}</span>
                  </div>
                  <h4 className="text-2xl font-bold text-slate-900">{current.name}</h4>
                  <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                    {current.explanation}
                  </p>
                  <div className="p-3 bg-blue-50 border border-blue-100 rounded-xl text-xs sm:text-sm text-blue-900">
                    <strong>Vazifasi:</strong> {current.role}
                  </div>
                </div>

                <div className="md:col-span-5 bg-slate-900 rounded-xl p-4 text-white shadow-lg">
                  <div className="flex items-center justify-between text-xs text-slate-400 font-mono pb-2 mb-3 border-b border-slate-800">
                    <span>{current.codeLanguage.toUpperCase()} Namunasi</span>
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  </div>
                  <pre className="font-mono text-xs sm:text-sm text-emerald-300 overflow-x-auto leading-relaxed">
                    <code>{current.codeExample}</code>
                  </pre>
                  <div className="mt-4 pt-3 border-t border-slate-800 text-[11px] text-slate-400">
                    {current.id === "html" && "HTML sahifaga qanday element qo'shishni aytadi."}
                    {current.id === "css" && "CSS ushbu elementga rang, o'lcham va shrift beradi."}
                    {current.id === "js" && "JavaScript ushbu elementga jonli harakat baxsh etadi."}
                  </div>
                </div>
              </div>
            );
          })()}
        </div>
      </section>

      {/* ========================================================
          3. HTML TEG VA ELEMENTLARI — INTERAKTIV ANATOMIYA
          ======================================================== */}
      <section className="scroll-mt-20">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-50 border border-purple-200 text-purple-700 text-xs font-semibold uppercase tracking-wider mb-3">
            <LayersIcon className="w-3.5 h-3.5" />
            3-Mavzu: Anatomiya
          </div>
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            HTML Teg va Element Anatomiyasi
          </h2>
          <p className="mt-2 text-slate-600 text-base">
            Quyidagi element qismlariga bosing va har birining vazifasini o'rganing:
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm">
          {/* Interactive Tag Visual Representation */}
          <div className="flex flex-wrap items-center justify-center gap-2 p-6 bg-slate-50 border border-slate-200 rounded-2xl mb-6 font-mono text-lg sm:text-2xl font-bold select-none">
            
            {/* Opening Tag Part */}
            <button
              onClick={() => {
                setSelectedTagPart("open");
                onCompleteStep?.("tag_open");
              }}
              className={`px-3 py-2 rounded-xl transition-all ${
                selectedTagPart === "open"
                  ? "bg-blue-600 text-white shadow-lg scale-105 ring-4 ring-blue-200"
                  : "bg-blue-100 text-blue-900 hover:bg-blue-200"
              }`}
            >
              &lt;h1&gt;
            </button>

            {/* Content Part */}
            <button
              onClick={() => {
                setSelectedTagPart("content");
                onCompleteStep?.("tag_content");
              }}
              className={`px-4 py-2 rounded-xl transition-all ${
                selectedTagPart === "content"
                  ? "bg-emerald-600 text-white shadow-lg scale-105 ring-4 ring-emerald-200"
                  : "bg-emerald-100 text-emerald-900 hover:bg-emerald-200"
              }`}
            >
              Salom, dunyo!
            </button>

            {/* Closing Tag Part */}
            <button
              onClick={() => {
                setSelectedTagPart("close");
                onCompleteStep?.("tag_close");
              }}
              className={`px-3 py-2 rounded-xl transition-all ${
                selectedTagPart === "close"
                  ? "bg-purple-600 text-white shadow-lg scale-105 ring-4 ring-purple-200"
                  : "bg-purple-100 text-purple-900 hover:bg-purple-200"
              }`}
            >
              &lt;/h1&gt;
            </button>

            {/* Entire Element Button */}
            <button
              onClick={() => {
                setSelectedTagPart("all");
                onCompleteStep?.("tag_all");
              }}
              className={`ml-2 px-3 py-1.5 text-xs font-sans font-semibold rounded-lg border transition-all ${
                selectedTagPart === "all"
                  ? "bg-slate-900 text-white border-slate-900 shadow"
                  : "bg-white text-slate-700 border-slate-300 hover:bg-slate-100"
              }`}
            >
              To'liq Element
            </button>
          </div>

          {/* Active Tag Part Detailed Card */}
          {(() => {
            const part = TAG_ANATOMY.parts.find(p => p.id === selectedTagPart) || TAG_ANATOMY.parts[0];
            return (
              <div className="p-6 rounded-2xl bg-gradient-to-r from-blue-50/50 via-white to-purple-50/50 border border-slate-200 animate-fadeIn">
                <div className="flex items-center gap-3 mb-2">
                  <span className="font-mono text-base font-bold px-3 py-1 rounded bg-slate-900 text-white">
                    {part.code}
                  </span>
                  <h4 className="text-lg font-bold text-slate-900">{part.label}</h4>
                </div>
                <p className="text-slate-700 text-sm sm:text-base leading-relaxed mt-2">
                  {part.explanation}
                </p>
                <div className="mt-4 flex items-center gap-2 text-xs font-medium text-blue-800 bg-blue-100/60 p-3 rounded-xl">
                  <LightbulbIcon className="w-4 h-4 text-blue-600 shrink-0" />
                  <span><strong>Eslab qol:</strong> {part.tip}</span>
                </div>
              </div>
            );
          })()}

          {/* Other Basic HTML Tags Grid */}
          <div className="mt-8 pt-6 border-t border-slate-200">
            <h4 className="text-base font-bold text-slate-900 mb-4">
              Boshqa muhim boshlang'ich teglar:
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {TAG_ANATOMY.otherExamples.map((ex, i) => (
                <div key={i} className="p-4 rounded-xl border border-slate-200 bg-slate-50/50 hover:bg-white hover:shadow-sm transition-all">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="font-mono font-bold text-sm text-blue-700">{ex.tag}</span>
                    <span className="text-xs text-slate-500 font-medium">{ex.name}</span>
                  </div>
                  <div className="font-mono text-xs text-slate-600 bg-white p-2 rounded border border-slate-200 mb-2 overflow-x-auto">
                    {ex.full}
                  </div>
                  <p className="text-xs text-slate-600 leading-normal">{ex.explanation}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          4. SARLAVHALAR (H1-H6) VA MATNLAR (P)
          ======================================================== */}
      <section className="scroll-mt-20">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-semibold uppercase tracking-wider mb-3">
            <SparklesIcon className="w-3.5 h-3.5" />
            4-Mavzu: Tipografika
          </div>
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            Sarlavhalar Ierarxiyasi va Paragraflar
          </h2>
          <p className="mt-2 text-slate-600 text-base">
            HTML da 6 darajadagi sarlavha mavjud: <code>&lt;h1&gt;</code> dan <code>&lt;h6&gt;</code> gacha.
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm">
          {/* Tag Selector Buttons */}
          <div className="flex flex-wrap items-center gap-2 mb-6">
            {HEADINGS_DATA.levels.map((item) => (
              <button
                key={item.tag}
                onClick={() => {
                  setSelectedHeadingTag(item.tag);
                  onCompleteStep?.(`heading_${item.tag}`);
                }}
                className={`px-4 py-2 rounded-xl font-mono text-xs font-bold transition-all ${
                  selectedHeadingTag === item.tag
                    ? "bg-blue-600 text-white shadow-md shadow-blue-500/20 scale-105"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                }`}
              >
                &lt;{item.tag}&gt;
              </button>
            ))}
          </div>

          {/* Interactive Heading Tester */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
            <div className="bg-slate-900 rounded-xl p-5 text-white flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between text-xs text-slate-400 font-mono pb-2 mb-3 border-b border-slate-800">
                  <span>KODNI TAHRIRLANG</span>
                  <span className="text-emerald-400 font-bold">&lt;{selectedHeadingTag}&gt;</span>
                </div>
                <div className="space-y-2">
                  <div className="text-indigo-400 font-mono text-sm">&lt;{selectedHeadingTag}&gt;</div>
                  <input
                    type="text"
                    value={headingCustomText}
                    onChange={(e) => setHeadingCustomText(e.target.value)}
                    className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-white font-mono text-sm focus:outline-none focus:border-indigo-400"
                    placeholder="Sarlavha matni..."
                  />
                  <div className="text-indigo-400 font-mono text-sm">&lt;/{selectedHeadingTag}&gt;</div>
                </div>
              </div>
              <p className="text-xs text-slate-400 mt-4">
                Tegni o'zgartirib, matn o'lchami va ahamiyatining o'zgarishini kuzating.
              </p>
            </div>

            {/* Live Result Area */}
            <div className="bg-slate-50 border-2 border-slate-200 rounded-xl p-6 flex flex-col justify-between">
              <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider pb-2 border-b border-slate-200">
                Brauzerdagi Haqiqiy Ko'rinishi
              </div>
              <div className="my-auto py-4">
                {selectedHeadingTag === "h1" && <h1 className={HEADINGS_DATA.levels[0].size}>{headingCustomText}</h1>}
                {selectedHeadingTag === "h2" && <h2 className={HEADINGS_DATA.levels[1].size}>{headingCustomText}</h2>}
                {selectedHeadingTag === "h3" && <h3 className={HEADINGS_DATA.levels[2].size}>{headingCustomText}</h3>}
                {selectedHeadingTag === "h4" && <h4 className={HEADINGS_DATA.levels[3].size}>{headingCustomText}</h4>}
                {selectedHeadingTag === "h5" && <h5 className={HEADINGS_DATA.levels[4].size}>{headingCustomText}</h5>}
                {selectedHeadingTag === "h6" && <h6 className={HEADINGS_DATA.levels[5].size}>{headingCustomText}</h6>}
                {selectedHeadingTag === "p" && <p className={HEADINGS_DATA.levels[6].size}>{headingCustomText}</p>}
              </div>
              <div className="text-xs text-slate-500">
                Teg turi: <strong>{HEADINGS_DATA.levels.find(l => l.tag === selectedHeadingTag)?.name}</strong>
              </div>
            </div>
          </div>

          {/* Deep Question Accordion */}
          <div className="mt-8 pt-6 border-t border-slate-200">
            <button
              onClick={() => {
                setShowDeepQuestionAnswer(!showDeepQuestionAnswer);
                onCompleteStep?.("deep_heading_question");
              }}
              className="w-full flex items-center justify-between p-4 rounded-xl bg-blue-50/80 hover:bg-blue-100/80 text-left transition-colors"
            >
              <div className="flex items-center gap-3">
                <HelpCircleIcon className="w-5 h-5 text-blue-600 shrink-0" />
                <span className="font-bold text-blue-950 text-sm sm:text-base">
                  {HEADINGS_DATA.deepQuestion.question}
                </span>
              </div>
              <span className="text-xs font-bold text-blue-700 bg-white px-2.5 py-1 rounded-md shadow-sm">
                {showDeepQuestionAnswer ? "Yashirish" : "Javobni ko'rish"}
              </span>
            </button>

            {showDeepQuestionAnswer && (
              <div className="mt-3 p-5 rounded-xl bg-white border border-blue-200 text-slate-700 text-sm leading-relaxed shadow-sm animate-fadeIn">
                <p>{HEADINGS_DATA.deepQuestion.answer}</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ========================================================
          5. RO'YXATLAR: UL, OL VA LI
          ======================================================== */}
      <section className="scroll-mt-20">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold uppercase tracking-wider mb-3">
            <LayersIcon className="w-3.5 h-3.5" />
            5-Mavzu: Ro'yxatlar
          </div>
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            HTML Ro'yxatlari: ul, ol va li
          </h2>
          <p className="mt-2 text-slate-600 text-base">
            Ro'yxatlar ikki turga bo'linadi: <strong>Tartibsiz (ul)</strong> va <strong>Tartibli (ol)</strong>.
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm">
          {/* Switcher: ul vs ol */}
          <div className="flex items-center justify-center gap-3 mb-6">
            <button
              onClick={() => {
                setListType("ul");
                onCompleteStep?.("list_ul");
              }}
              className={`px-5 py-2.5 rounded-xl font-semibold text-sm transition-all flex items-center gap-2 ${
                listType === "ul"
                  ? "bg-blue-600 text-white shadow-md scale-105"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              <span>Tartibsiz ro'yxat (&lt;ul&gt;)</span>
            </button>
            <button
              onClick={() => {
                setListType("ol");
                onCompleteStep?.("list_ol");
              }}
              className={`px-5 py-2.5 rounded-xl font-semibold text-sm transition-all flex items-center gap-2 ${
                listType === "ol"
                  ? "bg-indigo-600 text-white shadow-md scale-105"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              <span>Tartibli ro'yxat (&lt;ol&gt;)</span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Interactive List Editor */}
            <div className="p-5 rounded-xl bg-slate-50 border border-slate-200">
              <h4 className="text-sm font-bold text-slate-800 mb-3">
                Ro'yxatga yangi element qo'shish (&lt;li&gt;):
              </h4>
              <form onSubmit={handleAddListItem} className="flex gap-2 mb-4">
                <input
                  type="text"
                  value={newListItemInput}
                  onChange={(e) => setNewListItemInput(e.target.value)}
                  placeholder="Yangi element yozing..."
                  className="flex-1 bg-white border border-slate-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                  type="submit"
                  className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold transition-colors"
                >
                  Qo'shish
                </button>
              </form>

              <div className="space-y-1.5 max-h-48 overflow-y-auto pr-1">
                {customListItems.map((item, index) => (
                  <div key={index} className="flex items-center justify-between bg-white px-3 py-2 rounded-lg border border-slate-200 text-xs text-slate-700">
                    <span className="font-mono text-slate-500">&lt;li&gt;{item}&lt;/li&gt;</span>
                    {customListItems.length > 1 && (
                      <button
                        onClick={() => handleRemoveListItem(index)}
                        className="text-slate-400 hover:text-rose-500 font-bold ml-2 text-xs"
                        title="O'chirish"
                      >
                        ✕
                      </button>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Live Render Area */}
            <div className="p-5 rounded-xl bg-white border-2 border-blue-200 shadow-sm flex flex-col justify-between">
              <div>
                <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider pb-2 mb-3 border-b border-slate-100 flex items-center justify-between">
                  <span>Brauzer ko'rinishi</span>
                  <span className="font-mono text-blue-600 font-bold">&lt;{listType}&gt;</span>
                </div>

                {listType === "ul" ? (
                  <ul className="list-disc list-inside space-y-2 text-slate-800 text-sm sm:text-base font-medium">
                    {customListItems.map((item, idx) => (
                      <li key={idx} className="transition-all animate-fadeIn">{item}</li>
                    ))}
                  </ul>
                ) : (
                  <ol className="list-decimal list-inside space-y-2 text-slate-800 text-sm sm:text-base font-medium">
                    {customListItems.map((item, idx) => (
                      <li key={idx} className="transition-all animate-fadeIn">{item}</li>
                    ))}
                  </ol>
                )}
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 text-xs text-slate-500">
                {listType === "ul" 
                  ? "<ul> elementlari nuqtalar (bullet) bilan tartibsiz chiqadi." 
                  : "<ol> elementlari 1, 2, 3 kabi raqamlar bilan avtomatik tartiblanadi."}
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
