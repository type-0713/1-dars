// src/data/lessons.js
// 1-DARS: HTML OLAMIGA KIRISH

export const INTRO_QUESTION = {
  question: "Internetdagi saytlar qanday yaratiladi?",
  options: [
    {
      id: "magic",
      text: "Sehr va mo''jiza yordamida",
      feedback: "Bu fantastik eshitiladi, lekin afsuski unday emas! Har bir sayt ortida inson aqli va aniq yozilgan kod qoidalari turadi.",
      isCorrect: false
    },
    {
      id: "templates",
      text: "Faqat tayyor shablonlarni ko'chirib olish orqali",
      feedback: "Shablonlar bor, lekin o'sha shablonlarning o'zi ham dasturchilar tomonidan noldan kod orqali yozilgan. Haqiqiy dasturchi o'zi xohlagan narsani yarata oladi!",
      isCorrect: false
    },
    {
      id: "code",
      text: "Kod va veb-texnologiyalar (HTML, CSS, JS) yordamida",
      feedback: "To'ppa-to'g'ri! Barakalla! Veb-saytlar brauzer (Chrome, Safari) tushunadigan maxsus kodlar va teglar yordamida yaratiladi.",
      isCorrect: true
    },
    {
      id: "dontknow",
      text: "Buni hali bilmayman",
      feedback: "Hech qisi yo'q! Aynan shuning uchun biz bu yerdamiz. Bugun sen kod bilan birinchi veb-sahifangni yaratasan!",
      isCorrect: false
    }
  ]
};

export const HOUSE_ANALOGY = {
  title: "Veb-sayt qismlari — Uy analogiyasi",
  description: "Tasavvur qil, veb-sayt — bu shinam va zamonaviy bir uy. Har bir texnologiyaning o'z burchi bor:",
  technologies: [
    {
      id: "html",
      name: "HTML (Tuzilish / Karkas)",
      badge: "G'isht va devorlar",
      color: "blue",
      explanation: "Uyning poydevori, g'isht devorlari, xonalar bo'linishi, eshik va deraza o'rni. Agar HTML bo'lmasa, uyning o'zi ham bo'lmaydi!",
      codeExample: `<h1>Mening uyim</h1>\n<p>Mehmonxona va oshxona.</p>`,
      codeLanguage: "html",
      role: "Sahifaning asosiy skeleti va matnli axborotini yaratadi."
    },
    {
      id: "css",
      name: "CSS (Bezak va Dizayn)",
      badge: "Bo'yoq va mebel",
      color: "purple",
      explanation: "Devor ranglari, chiroyli gulqog'ozlar, qulay mebellar, deraza pardalari va yoritgichlar. Saytni ko'rkam va zamonaviy qiladi.",
      codeExample: `h1 {\n  color: #2563eb;\n  font-size: 28px;\n  text-align: center;\n}`,
      codeLanguage: "css",
      role: "Ranglar, o'lchamlar, shriftlar va joylashuvni bezaydi."
    },
    {
      id: "js",
      name: "JavaScript (Harakat va Aql)",
      badge: "Elektr va 'Smart Home'",
      color: "amber",
      explanation: "Tugmani bosganda chiroq yonishi, eshikning avtomatik ochilishi, konditsioner harorati. Saytni jonli va interaktiv qiladi.",
      codeExample: `function eshikniOch() {\n  alert("Xush kelibsiz!");\n}`,
      codeLanguage: "javascript",
      role: "Foydalanuvchi harakatlariga javob qaytaradi va mantiqiy ishlarni bajaradi."
    }
  ]
};

export const TAG_ANATOMY = {
  title: "HTML Teg anatomiyasi",
  description: "HTML elementlari maxsus qavslar ichidagi teglardan iborat. Keling, <h1>Salom, dunyo!</h1> kodini qismlarga ajratamiz:",
  fullCode: "<h1>Salom, dunyo!</h1>",
  parts: [
    {
      id: "open",
      label: "Ochuvchi teg",
      code: "<h1>",
      explanation: "Brauzerga: 'Diqqat, bu yerda 1-darajali katta sarlavha boshlanyapti!' deb signal beradi. Kichiklik (<) va kattalik (>) belgilari ichida teg nomi yoziladi.",
      tip: "Teg nomlari doimo kichik harflarda yoziladi: <H1> emas, <h1>."
    },
    {
      id: "content",
      label: "Element matni (Kontent)",
      code: "Salom, dunyo!",
      explanation: "Foydalanuvchi ekranda ko'radigan haqiqiy ma'lumot. Bu yerda xohlagan so'z, jumla yoki raqam bo'lishi mumkin.",
      tip: "Teglar orasiga yozilgan matn brauzerda ko'rinadi."
    },
    {
      id: "close",
      label: "Yopuvchi teg",
      code: "</h1>",
      explanation: "Brauzerga: 'Sarlavha shu yerda tugadi' deb bildiradi. Ochuvchi tegdan farqi — teg nomidan oldin qiya chiziq (slash: /) qo'yiladi.",
      tip: "Yopuvchi tegni unutmang, aks holda brauzer keyingi hamma narsani sarlavha deb o'ylashi mumkin!"
    },
    {
      id: "all",
      label: "To'liq element",
      code: "<h1>Salom, dunyo!</h1>",
      explanation: "Ochuvchi teg + Kontent + Yopuvchi teg birgalikda 'HTML Element' deb ataladi.",
      tip: "Demak: 'Teg' — bu <h1> yoki </h1>, 'Element' esa ularning umumiy butunligi!"
    }
  ],
  otherExamples: [
    {
      tag: "<p>",
      name: "Paragraf tegi",
      full: "<p>Bu oddiy matn xatboshisi.</p>",
      explanation: "Oddiy matnlar, maqolalar va tavsiflarni yozish uchun ishlatiladi."
    },
    {
      tag: "<h2>",
      name: "2-darajali sarlavha",
      full: "<h2>Mavzuning kichik bo'limi</h2>",
      explanation: "Hujjatdagi bo'limlarni ajratish uchun ishlatiladigan sarlavha."
    },
    {
      tag: "<button>",
      name: "Tugma tegi",
      full: "<button>Meni bosing</button>",
      explanation: "Foydalanuvchi bosishi mumkin bo'lgan interaktiv tugmani hosil qiladi."
    },
    {
      tag: "<img>",
      name: "Yopilmaydigan (toq) teg",
      full: '<img src="rasm.jpg" alt="Tabiat rasmi" />',
      explanation: "Rasm chiqarish tegi. Diqqat: rasm ichiga matn yozilmagani uchun uning yopuvchi </img > tegi bo'lmaydi! Bu 'o'zini-o'zi yopuvchi teg' (self-closing) deyiladi."
    }
  ]
};

export const HTML_DOCUMENT_PARTS = [
  {
    id: "doctype",
    name: "<!DOCTYPE html>",
    simpleTitle: "1. Hujjat deklaratsiyasi",
    tagline: "Brauzerga qoidani aytish",
    definition: "HTML hujjatining eng birinchi qatori. U brauzerga ushbu fayl zamonaviy HTML5 standartida yozilganini bildiradi.",
    plainExplanation: "Xuddi kitobning muqovasida 'O'zbek tilidagi entsiklopediya' deb yozib qo'yilgandek, brauzerga qaysi qoidalar asosida o'qishni buyuradi.",
    analogy: "Avtomobil kalitini burash — tizimni ishga tayyorlaydi.",
    codeExample: "<!DOCTYPE html>",
    commonMistake: "<!DOCTYPE> ichida nuqta yoki boshqa so'z yozish, yoki uni butunlay unutib qoldirish.",
    miniQuiz: {
      question: "<!DOCTYPE html> nima uchun kerak?",
      options: [
        { text: "Saytga rang berish uchun", correct: false },
        { text: "Brauzerga bu zamonaviy HTML5 hujjati ekanini bildirish uchun", correct: true },
        { text: "Foydalanuvchiga matn ko'rsatish uchun", correct: false },
        { text: "Rasm yuklash uchun", correct: false }
      ],
      tip: "Bu teg sahifaning eng boshida turadi va versiyani belgilaydi."
    }
  },
  {
    id: "html",
    name: "<html lang=\"uz\">",
    simpleTitle: "2. Ildiz (Root) elementi",
    tagline: "Butun sahifaning onasi",
    definition: "HTML hujjatining eng asosiy o'rab turuvchi elementi. Barcha boshqa elementlar uning ichiga yoziladi.",
    plainExplanation: "Saytning boshlanishi va tugashini belgilaydi. 'lang=\"uz\"' esa saytdagi asosiy til O'zbek tili ekanini qidiruv tizimlariga (Google) tushuntiradi.",
    analogy: "Uyning tashqi devorlari va tomi — hamma narsa shu bino ichida bo'ladi.",
    codeExample: "<html lang=\"uz\">\n  <!-- Barcha kod shu yerda -->\n</html>",
    commonMistake: "Yopuvchi </html> tegini qo'ymay ketish.",
    miniQuiz: {
      question: "lang=\"uz\" atributi nima vazifani bajaradi?",
      options: [
        { text: "Matnni kattalashtiradi", correct: false },
        { text: "Sahifa tilining o'zbekcha ekanini belgilaydi", correct: true },
        { text: "O'zbekiston bayrog'ini chiqaradi", correct: false },
        { text: "Kodni yashiradi", correct: false }
      ],
      tip: "'lang' so'zi inglizcha 'language' (til) so'zidan olingan."
    }
  },
  {
    id: "head",
    name: "<head>",
    simpleTitle: "3. Bosh (Head) bo'limi",
    tagline: "Sahifaning ko'rinmas 'miyasi'",
    definition: "Sayt haqidagi texnik ma'lumotlar (meta-ma'lumotlar, sarlavha, shriftlar, ulanadigan fayllar) saqlanadigan bo'lim.",
    plainExplanation: "Bu yerdagi narsalar sahifa oynasida to'g'ridan-to'g'ri ko'rinmaydi, lekin saytning to'g'ri ishlashi, qidiruvda chiqishi va brauzer tabida ko'rinishi uchun juda muhim.",
    analogy: "Insonning miyasi yoki pasporti — tashqaridan ko'rinmaydi, lekin barcha asosiy ma'lumot shu yerda.",
    codeExample: "<head>\n  <meta charset=\"UTF-8\">\n  <title>Mening sahifam</title>\n</head>",
    commonMistake: "Foydalanuvchi ko'rishi kerak bo'lgan asosiy matnlarni <head> ichiga yozib qo'yish.",
    miniQuiz: {
      question: "<head> tegi ichiga qanday ma'lumotlar yoziladi?",
      options: [
        { text: "Katta sarlavhalar va rasmlar", correct: false },
        { text: "Saytning texnik ma'lumotlari, sarlavhasi (title) va sozlamalari", correct: true },
        { text: "Faqat videolarning havolalari", correct: false },
        { text: "Saytning pastki qismi (footer)", correct: false }
      ],
      tip: "Bu bo'lim sahifa foydalanuvchisi uchun emas, ko'proq brauzer va Google uchun xizmat qiladi."
    }
  },
  {
    id: "charset",
    name: "<meta charset=\"UTF-8\">",
    simpleTitle: "4. Belgilar kodirovkasi",
    tagline: "Harflar buzilmasligi uchun",
    definition: "Brauzerga dunyodagi barcha harflarni, shu jumladan o'zbekcha (o', g', sh, ch) va emojilarni to'g'ri ko'rsatishni buyuradi.",
    plainExplanation: "Agar bu yozilmasa, ba'zi harflar o'rnida g'alati tushunarsiz belgilar (, ) chiqib qolishi mumkin.",
    analogy: "Xalqaro tarjimon — har qanday tildagi harfni to'g'ri tushunadi.",
    codeExample: '<meta charset="UTF-8">',
    commonMistake: "charset o'rniga boshqa noto'g'ri so'z yozish.",
    miniQuiz: {
      question: "Agar UTF-8 belgilanmasa nima bo'lishi mumkin?",
      options: [
        { text: "Sayt butunlay o'chib ketadi", correct: false },
        { text: "O'zbekcha maxsus harflar va emojilar buzilib, xunuk ko'rinishi mumkin", correct: true },
        { text: "Kompyuter o'chib qoladi", correct: false },
        { text: "Internet tezligi tushib ketadi", correct: false }
      ],
      tip: "UTF-8 harflarni to'g'ri shifrlash va o'qish uchun javobgar."
    }
  },
  {
    id: "viewport",
    name: "<meta name=\"viewport\" ...>",
    simpleTitle: "5. Moslashuvchanlik (Viewport)",
    tagline: "Telefon va kompyuterga moslash",
    definition: "Sahifani smartfon, planshet va kompyuter ekranlariga chiroyli moslashishi (responsive) uchun ko'rsatma beradi.",
    plainExplanation: "Ushbu qator bo'lmasa, telefoningizda ochganda sayt kichrayib, mikroskopik darajada ko'rinishi mumkin.",
    analogy: "Kiyiladigan kiyimning o'lchamga mos ravishda qulay o'tirishi.",
    codeExample: '<meta name="viewport" content="width=device-width, initial-scale=1.0">',
    commonMistake: "Ushbu qatordan voz kechish va natijada mobil telefonlarda saytning buzulib ketishi.",
    miniQuiz: {
      question: "Viewport meta tegi nima uchun zarur?",
      options: [
        { text: "Saytni telefonda ham chiroyli va qulay ochilishi uchun", correct: true },
        { text: "Sayt foniga rasm qo'yish uchun", correct: false },
        { text: "Musiqa qo'yish uchun", correct: false },
        { text: "Kursor rangini o'zgartirish uchun", correct: false }
      ],
      tip: "'width=device-width' qurilma kengligiga tenglashtirish deganidir."
    }
  },
  {
    id: "title",
    name: "<title>",
    simpleTitle: "6. Sahifa nomi (Tab sarlavhasi)",
    tagline: "Brauzer tabidagi nom",
    definition: "Brauzerning eng yuqori qismidagi varaqada (tab) va qidiruv tizimlari natijalarida ko'rinadigan nom.",
    plainExplanation: "Sayt ochilganda brauzer tabida nima deb yozilib turishini belgilaydi.",
    analogy: "Kitobning muqovasidagi nomi.",
    codeExample: "<title>IT KURSI — 1-Dars</title>",
    commonMistake: "<title> tegini <body> ichiga yozib qo'yish. U faqat <head> ichida bo'lishi shart!",
    miniQuiz: {
      question: "<title> tegiga yozilgan matn qayerda ko'rinadi?",
      options: [
        { text: "Sahifaning eng o'rtasida katta bo'lib", correct: false },
        { text: "Brauzer tabida (yuqori varaqasida)", correct: true },
        { text: "Faqat sayt pastidagi footerda", correct: false },
        { text: "Hech qayerda ko'rinmaydi", correct: false }
      ],
      tip: "Chrome yoki Safari brauzerining eng tepadagi oynachasiga qarang."
    }
  },
  {
    id: "body",
    name: "<body>",
    simpleTitle: "7. Tana (Body) bo'limi",
    tagline: "Foydalanuvchi ko'radigan butun olam",
    definition: "Veb-sahifaning foydalanuvchi ko'zi bilan ko'radigan barcha qismi (sarlavhalar, matnlar, rasmlar, videolar, tugmalar).",
    plainExplanation: "Saytda odam nimani ko'rsa — hammasi <body> va </body> teglari orasida yoziladi.",
    analogy: "Insonning tanasi, kiyimi va xatti-harakatlari.",
    codeExample: "<body>\n  <h1>Salom, dunyo!</h1>\n  <p>Saytimga xush kelibsiz.</p>\n</body>",
    commonMistake: "Matnni <body> dan tashqarida yozish.",
    miniQuiz: {
      question: "Foydalanuvchi ekranda ko'radigan barcha matn va rasmlar qayerga joylashadi?",
      options: [
        { text: "<head> ichiga", correct: false },
        { text: "<body> ichiga", correct: true },
        { text: "<!DOCTYPE> ichiga", correct: false },
        { text: "<title> ichiga", correct: false }
      ],
      tip: "Inglizcha 'body' so'zi 'tana' degan ma'noni anglatadi."
    }
  }
];

export const HEADINGS_DATA = {
  title: "Sarlavhalar (h1 dan h6 gacha) va Paragraflar (p)",
  description: "HTML da sarlavhalar muhimlik darajasiga ko'ra 6 ta pog'onaga bo'linadi. <h1> eng muhim va eng katta, <h6> esa eng kichigi.",
  levels: [
    { tag: "h1", name: "1-darajali sarlavha", sample: "Asosiy sarlavha (Sahifada 1 marta ishlatiladi)", size: "text-3xl font-extrabold text-slate-900" },
    { tag: "h2", name: "2-darajali sarlavha", sample: "Katta bo'lim sarlavhasi", size: "text-2xl font-bold text-slate-800" },
    { tag: "h3", name: "3-darajali sarlavha", sample: "Kichik bo'lim sarlavhasi", size: "text-xl font-semibold text-slate-800" },
    { tag: "h4", name: "4-darajali sarlavha", sample: "To'rtinchi darajali mavzu", size: "text-lg font-medium text-slate-700" },
    { tag: "h5", name: "5-darajali sarlavha", sample: "Beshinchi darajali mavzu", size: "text-base font-medium text-slate-600" },
    { tag: "h6", name: "6-darajali sarlavha", sample: "Eng kichik sarlavha", size: "text-sm font-medium text-slate-500 uppercase tracking-wider" },
    { tag: "p", name: "Paragraf (Oddiy matn)", sample: "Bu oddiy matn xatboshisi. Saytdagi asosiy maqola, tavsif va jumlalar shu tegda yoziladi.", size: "text-base font-normal text-slate-700 leading-relaxed" }
  ],
  deepQuestion: {
    question: "Nega butun sahifadagi barcha matnlarni faqat <h1> qilib yozish yaxshi fikr emas?",
    answer: "Chunki <h1> — bu gazeta yoki kitobning bosh sarlavhasi kabi eng muhim yagona sarlavha. Agar hamma matnni <h1> qilib yozsak: 1) Google va qidiruv tizimlari sahifada nima asosiy ekanini tushunmaydi (SEO buziladi); 2) Ko'zi ojiz insonlar ishlatadigan ekran o'quvchi dasturlar chalkashib ketadi; 3) Foydalanuvchi ko'zi uchun o'qish qiyin va xunuk bo'lib qoladi. Har doim semantik tartibga rioya qilish kerak!"
  }
};

export const LISTS_DATA = {
  title: "HTML Ro'yxatlari: ul, ol va li",
  description: "Ma'lumotlarni tartibli qilib taqdim etish uchun ro'yxatlar ishlatiladi.",
  types: [
    {
      id: "ul",
      name: "Tartibsiz ro'yxat (Unordered List)",
      tag: "<ul>",
      bulletType: "Nuqtalar (bullet) bilan belgilanadi. Tartib raqami muhim bo'lmaganda ishlatiladi.",
      code: `<h2>Mening qiziqishlarim</h2>\n<ul>\n  <li>Dasturlash</li>\n  <li>Shaxmat</li>\n  <li>Kitob o'qish</li>\n</ul>`,
      items: ["Dasturlash", "Shaxmat", "Kitob o'qish"]
    },
    {
      id: "ol",
      name: "Tartibli ro'yxat (Ordered List)",
      tag: "<ol>",
      bulletType: "1, 2, 3... kabi ketma-ket raqamlar bilan belgilanadi. Qadamlar yoki tartib muhim bo'lganda ishlatiladi.",
      code: `<h2>Mening maqsadlarim</h2>\n<ol>\n  <li>HTML o'rganish</li>\n  <li>CSS o'rganish</li>\n  <li>Birinchi sayt yaratish</li>\n</ol>`,
      items: ["HTML o'rganish", "CSS o'rganish", "Birinchi sayt yaratish"]
    }
  ],
  liExplanation: "<li> (List Item) — ro'yxatning har bir alohida a'zosi. U doimo <ul> yoki <ol> teglarining ichida bo'lishi shart!"
};
