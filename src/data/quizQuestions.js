// src/data/quizQuestions.js
// Kamida 12 ta test savoli (har birida 4 ta variant va toifa mavjud)

export const QUIZ_QUESTIONS = [
  {
    id: 1,
    category: "HTML Ta'rifi",
    question: "HTML qisqartmasining to'liq va to'g'ri ma'nosi nima?",
    options: [
      { id: "a", text: "HyperText Markup Language" },
      { id: "b", text: "High Tech Machine Learning" },
      { id: "c", text: "Hyperlinks and Text Management Level" },
      { id: "d", text: "Home Tool Making Language" }
    ],
    correctOptionId: "a",
    explanation: "HTML — bu HyperText Markup Language (gipermatnli belgilash tili) bo'lib, veb-sahifalarning tuzilishini yaratishda xizmat qiladi."
  },
  {
    id: 2,
    category: "HTML va CSS Farqi",
    question: "HTML va CSS o'rtasidagi asosiy farq nimada?",
    options: [
      { id: "a", text: "HTML sahifa tuzilishini (karkas) belgilaydi, CSS esa unga dizayn va bezak beradi" },
      { id: "b", text: "HTML ma'lumotlar bazasi, CSS esa dasturlash tili" },
      { id: "c", text: "Ikkalasi ham aynan bir xil vazifani bajaradi" },
      { id: "d", text: "CSS faqat matn yozish uchun, HTML esa rang berish uchun" }
    ],
    correctOptionId: "a",
    explanation: "Uy analogiyasini eslang: HTML — devor va xonalar (tuzilish), CSS — bo'yoq, mebellar va ko'rinish (bezak)."
  },
  {
    id: 3,
    category: "Teg va Element Farqi",
    question: "HTML da 'Teg' va 'Element' o'rtasida qanday farq bor?",
    options: [
      { id: "a", text: "Hech qanday farq yo'q, ikkalasi bitta so'z" },
      { id: "b", text: "Teg — bu qavs ichidagi nom (<h1>), Element esa ochuvchi teg, kontent va yopuvchi tegning birlashmasi" },
      { id: "c", text: "Element faqat rasm, teg esa faqat matn" },
      { id: "d", text: "Teg faqat CSS da, element faqat JavaScript da bo'ladi" }
    ],
    correctOptionId: "b",
    explanation: "<h1> — teg, '<h1>Salom</h1>' esa to'liq HTML elementi deb ataladi."
  },
  {
    id: "4",
    category: "Ochuvchi va Yopuvchi Teg",
    question: "Yopuvchi teg ochuvchi tegdan qaysi belgisi bilan ajralib turadi?",
    options: [
      { id: "a", text: "Teg nomi oldidagi qiya chiziq (slash: /) bilan" },
      { id: "b", text: "Undov belgisi (!) bilan" },
      { id: "c", text: "Katta harflar bilan yozilishi bilan" },
      { id: "d", text: "Ikki nuqta (:) bilan" }
    ],
    correctOptionId: "a",
    explanation: "Ochuvchi teg <h1> bo'lsa, yopuvchi teg nomidan oldin slash belgisi qo'yiladi: </h1>."
  },
  {
    id: 5,
    category: "HTML Hujjatining Tuzilishi",
    question: "<!DOCTYPE html> qatori faylning qayerida yozilishi shart?",
    options: [
      { id: "a", text: "Faylning eng birinchi qatorida, barcha boshqa teglardan oldin" },
      { id: "b", text: "<body> bo'limining eng pastki qismida" },
      { id: "c", text: "<head> tegi ichida" },
      { id: "d", text: "Ixtiyoriy joyda, qayerda bo'lsa ham farqi yo'q" }
    ],
    correctOptionId: "a",
    explanation: "<!DOCTYPE html> eng yuqorida turib, brauzerga hujjat HTML5 standartida ekanini darhol ma'lum qiladi."
  },
  {
    id: 6,
    category: "Head va Body Farqi",
    question: "Foydalanuvchi veb-sahifada ko'radigan hamma matn, sarlavha va rasmlar qaysi teg ichida bo'lishi kerak?",
    options: [
      { id: "a", text: "<body> va </body> teglari orasida" },
      { id: "b", text: "<head> va </head> teglari orasida" },
      { id: "c", text: "<meta> tegi ichida" },
      { id: "d", text: "<!DOCTYPE> dan oldin" }
    ],
    correctOptionId: "a",
    explanation: "<head> ko'rinmas texnik sozlamalar uchun, <body> esa ko'rinuvchi butun tana uchun javobgardir."
  },
  {
    id: 7,
    category: "Title Tegi",
    question: "<title> tegi HTML hujjatining qaysi bo'limida joylashishi lozim?",
    options: [
      { id: "a", text: "Faqat <head> bo'limining ichida" },
      { id: "b", text: "<body> bo'limining eng boshida" },
      { id: "c", text: "Sahifaning eng pastida </html> dan keyin" },
      { id: "d", text: "Faqat <h1> ichida" }
    ],
    correctOptionId: "a",
    explanation: "<title> brauzer tabidagi nomni ko'rsatadi va u faqat <head> ichiga joylashtirilishi standart talabidir."
  },
  {
    id: 8,
    category: "Sarlavhalar Ierarxiyasi",
    question: "HTML da mavjud bo'lgan eng kichik sarlavha qaysi?",
    options: [
      { id: "a", text: "<h6>" },
      { id: "b", text: "<h1>" },
      { id: "c", text: "<h0>" },
      { id: "d", text: "<h10>" }
    ],
    correctOptionId: "a",
    explanation: "HTML da sarlavhalar <h1> (eng katta) dan <h6> (eng kichik) gacha davom etadi. <h0> yoki <h10> teglari mavjud emas."
  },
  {
    id: 9,
    category: "Paragraf Tegi",
    question: "Oddiy matn xatboshisini (paragraf) yaratish uchun qaysi teg ishlatiladi?",
    options: [
      { id: "a", text: "<p>" },
      { id: "b", text: "<paragraph>" },
      { id: "c", text: "<text>" },
      { id: "d", text: "<matn>" }
    ],
    correctOptionId: "a",
    explanation: "Inglizcha 'Paragraph' so'zining bosh harfi sifatida <p> tegi belgilangan."
  },
  {
    id: 10,
    category: "Ro'yxatlar",
    question: "Ketma-ket raqamlangan (1, 2, 3...) tartibli ro'yxat yaratish uchun qaysi teg ishlatiladi?",
    options: [
      { id: "a", text: "<ol> (Ordered List)" },
      { id: "b", text: "<ul> (Unordered List)" },
      { id: "c", text: "<list>" },
      { id: "d", text: "<dl>" }
    ],
    correctOptionId: "a",
    explanation: "<ol> — Ordered List (tartibli ro'yxat), <ul> esa dots/nuqtali Unordered List (tartibsiz ro'yxat) dir."
  },
  {
    id: 11,
    category: "Fayl Kengaytmasi",
    question: "HTML hujjati saqlanayotganda fayl nomi qanday kengaytma bilan tugashi kerak?",
    options: [
      { id: "a", text: ".html (yoki .htm)" },
      { id: "b", text: ".docx" },
      { id: "c", text: ".exe" },
      { id: "d", text: ".txt" }
    ],
    correctOptionId: "a",
    explanation: "Brauzer faylni veb-sahifa sifatida o'qishi uchun fayl '.html' (masalan: index.html) kengaytmasida saqlanadi."
  },
  {
    id: 12,
    category: "Sintaksis Xatolarini Topish",
    question: "Quyidagi kod namunalaridan qaysi biri sintaktik jihatdan MUTLAQO TO'G'RI yozilgan?",
    options: [
      { id: "a", text: "<h1>Xush kelibsiz!</h1>" },
      { id: "b", text: "<h1>Xush kelibsiz!<h1/>" },
      { id: "c", text: "<p>Xush kelibsiz!</h1>" },
      { id: "d", text: "<H1>Xush kelibsiz!</h2>" }
    ],
    correctOptionId: "a",
    explanation: "Faqat '<h1>Xush kelibsiz!</h1>' variantida ochuvchi va yopuvchi teglar bir xil, slash to'g'ri joyda va harflar to'g'ri belgilangan."
  }
];
