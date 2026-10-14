// src/data/exercises.js
// 10 ta turli qiyinlikdagi amaliy topshiriqlar

export const EXERCISES = [
  {
    id: 1,
    level: "boshlangich",
    levelLabel: "Boshlang'ich",
    levelColor: "emerald",
    title: "1. Birinchi bosh sarlavha",
    taskText: "Quyidagi muharrirga 'IT KURSI' matnidan iborat birinchi darajali <h1> sarlavha yarating.",
    instruction: "Ochuvchi <h1> va yopuvchi </h1> teglaridan foydalaning. Masalan: <h1>IT KURSI</h1>",
    initialCode: "<!-- Bu yerga <h1> sarlavhani yozing -->\n",
    expectedHint: "Matn '<h1>IT KURSI</h1>' shaklida bo'lishi kerak.",
    validator: (code) => {
      const clean = code.trim();
      return /<h1[^>]*>\s*IT\s+KURSI\s*<\/h1>/i.test(clean);
    },
    successMessage: "Ofarin! Siz birinchi darajali sarlavhani to'g'ri yaratdingiz. Brauzer bu matnni eng katta va asosiy sarlavha deb taniydi.",
    hint: "Unutmang: <h1> ochiladi, o'rtada 'IT KURSI' yoziladi va </h1> bilan yopiladi."
  },
  {
    id: 2,
    level: "boshlangich",
    levelLabel: "Boshlang'ich",
    levelColor: "emerald",
    title: "2. Matn xatboshisi (Paragraf)",
    taskText: "O'zingiz haqingizda bir jumlalik paragraf yarating. Buning uchun <p> tegidan foydalaning.",
    instruction: "Matn ixtiyoriy, lekin kamida 5 ta harfdan iborat bo'lsin va <p>...</p> orasida joylashsin.",
    initialCode: "<!-- Bu yerga <p> paragraf yozing -->\n",
    expectedHint: "<p>Men dasturlashni o'rganyapman</p> shaklida bo'lsin.",
    validator: (code) => {
      return /<p[^>]*>.{5,}<\/p>/i.test(code.trim());
    },
    successMessage: "Ajoyib! Paragraf matni to'g'ri yaratildi. Saytdagi barcha matnlar aynan shu teg ichiga yoziladi.",
    hint: "<p> ochuvchi tegi va </p> yopuvchi tegi ichiga o'zingiz haqingizda kamida 5 ta harfli so'z yozing."
  },
  {
    id: 3,
    level: "boshlangich",
    levelLabel: "Boshlang'ich",
    levelColor: "emerald",
    title: "3. Ierarxik sarlavhalar (h1 va h2)",
    taskText: "Sahifada avval <h1> tegi orqali 'Mening Blogim', uning ostidan esa <h2> tegi orqali 'Birinchi Maqola' sarlavhalarini yarating.",
    instruction: "Ketma-ketlik: avval h1, keyin esa h2 kelishi shart.",
    initialCode: "<h1>Mening Blogim</h1>\n<!-- Endi bu yerga <h2> sarlavhasini qo'shing -->\n",
    expectedHint: "<h2>Birinchi Maqola</h2> qatorini qo'shing.",
    validator: (code) => {
      const hasH1 = /<h1[^>]*>.*Mening\s+Blogim.*<\/h1>/i.test(code);
      const hasH2 = /<h2[^>]*>.*Birinchi\s+Maqola.*<\/h2>/i.test(code);
      return hasH1 && hasH2;
    },
    successMessage: "Juda yaxshi! Hujjat ierarxiyasi aynan shunday shakllanadi: bosh mavzu (h1) va uning ichki bo'limi (h2).",
    hint: "Ikkinchi qatorga <h2>Birinchi Maqola</h2> kodini yozing."
  },
  {
    id: 4,
    level: "ortacha",
    levelLabel: "O'rtacha",
    levelColor: "blue",
    title: "4. Tartibsiz ro'yxat (ul va li)",
    taskText: "Uchta sevimli filmingiz yoki taomingizdan iborat tartibsiz ro'yxat (bullet points) tuzing.",
    instruction: "<ul> tegi ochilsin, ichida kamida 3 ta <li> elementi bo'lsin va </ul> yopilsin.",
    initialCode: "<ul>\n  <li>Osh</li>\n  <!-- Yana 2 ta <li> qo'shing -->\n</ul>",
    expectedHint: "<ul> ichida kamida 3 ta <li>...</li> bo'lishi kerak.",
    validator: (code) => {
      const match = code.match(/<li[^>]*>[\s\S]*?<\/li>/gi);
      const hasUl = /<ul[^>]*>[\s\S]*<\/ul>/i.test(code);
      return hasUl && match && match.length >= 3;
    },
    successMessage: "Barakalla! Tartibsiz ro'yxat muvaffaqiyatli tuzildi. Brauzer har bir <li> oldiga chiroyli doiracha qo'yib beradi.",
    hint: "<ul> ichiga <li>Somsa</li> va <li>Manti</li> kabi qatorlarni qo'shib ko'ring."
  },
  {
    id: 5,
    level: "ortacha",
    levelLabel: "O'rtacha",
    levelColor: "blue",
    title: "5. Tartibli qadamlar ro'yxati (ol va li)",
    taskText: "Choy damlashning 3 ta ketma-ket bosqichini tartibli (<ol>) ro'yxat sifatida yozing.",
    instruction: "<ol> tegi ichida 3 ta <li> teglari bo'lishi kerak. Brauzer ularni avtomatik 1, 2, 3 qilib raqamlaydi.",
    initialCode: "<ol>\n  <!-- Bu yerga 3 ta <li> qadamlarini yozing -->\n</ol>",
    expectedHint: "<ol> ichida 3 ta <li> bo'lsin.",
    validator: (code) => {
      const match = code.match(/<li[^>]*>[\s\S]*?<\/li>/gi);
      const hasOl = /<ol[^>]*>[\s\S]*<\/ol>/i.test(code);
      return hasOl && match && match.length >= 3;
    },
    successMessage: "A'lo darajada! Tartibli ro'yxat qadam-baqadam ko'rsatmalarni ifodalash uchun eng qulay usuldir.",
    hint: "Misol: <li>Choynakni yuvish</li>, <li>Choy solish</li>, <li>Qaynoq suv quyish</li>."
  },
  {
    id: 6,
    level: "ortacha",
    levelLabel: "O'rtacha",
    levelColor: "blue",
    title: "6. HTML5 Hujjat deklaratsiyasi va Ildiz",
    taskText: "Bo'sh qog'ozni to'g'ri HTML hujjati qilib boshlang: birinchi qatorda <!DOCTYPE html>, keyingi qatorda <html lang=\"uz\"> va oxirida yopuvchi </html> bo'lsin.",
    instruction: "Sintaksisni aniq yozing. Katta-kichik harflar va qo'shtirnoqlarga e'tibor bering.",
    initialCode: "",
    expectedHint: "<!DOCTYPE html>\n<html lang=\"uz\">\n</html>",
    validator: (code) => {
      const hasDoc = /<!DOCTYPE\s+html>/i.test(code);
      const hasHtml = /<html[^>]*lang=["']uz["'][^>]*>[\s\S]*<\/html>/i.test(code);
      return hasDoc && hasHtml;
    },
    successMessage: "Mukammal! Siz har qanday professional veb-saytning eng birinchi va asosiy poydevorini to'g'ri qura olasiz.",
    hint: "Birinchi qator: <!DOCTYPE html>, ikkinchi qator: <html lang=\"uz\">, uchinchi qator: </html>."
  },
  {
    id: 7,
    level: "ortacha",
    levelLabel: "O'rtacha",
    levelColor: "blue",
    title: "7. Head bo'limi va Title nomi",
    taskText: "<head> tegi ichiga 'Mening Portfolio Saytim' nomli <title> elementini joylashtiring.",
    instruction: "Eslab qoling: <title> faqat va faqat <head> bo'limining ichida turishi mumkin.",
    initialCode: "<head>\n  <!-- Bu yerga <title> yozing -->\n</head>",
    expectedHint: "<head>\n  <title>Mening Portfolio Saytim</title>\n</head>",
    validator: (code) => {
      return /<head>[\s\S]*<title>\s*Mening\s+Portfolio\s+Saytim\s*<\/title>[\s\S]*<\/head>/i.test(code);
    },
    successMessage: "Juda to'g'ri! Endi sizning saytingiz brauzerda ochilganda yuqori tabida chiroyli sarlavha paydo bo'ladi.",
    hint: "<head> va </head> teglari o'rtasiga <title>Mening Portfolio Saytim</title> deb yozing."
  },
  {
    id: 8,
    level: "sinov",
    levelLabel: "Mustaqil sinov",
    levelColor: "purple",
    title: "8. Yopilmay qolgan tegni tuzatish",
    taskText: "Quyidagi kodda jiddiy xato bor — bitta teg yopilmagan. Kodni tahlil qiling va xatoni to'g'rilang.",
    instruction: "Paragraf ochilgan, lekin yopilmagan.",
    initialCode: "<h1>Saytga xush kelibsiz</h1>\n<p>Bu yerda juda qiziqarli darslar bor.\n<h2>Keyingi dars</h2>",
    expectedHint: "<p> matnining oxiriga </p> yopuvchi tegini qo'ying.",
    validator: (code) => {
      return /<p>[\s\S]*?<\/p>/i.test(code) && /<h2>[\s\S]*?<\/h2>/i.test(code);
    },
    successMessage: "Topdingiz! Yopilmagan teglar butun sahifa tuzilishini buzishi mumkin. Xatolarni ilg'ay olish haqiqiy dasturchi mahoratidir.",
    hint: "<p> matni tugagan joyga (h2 dan oldin) </p> yopuvchi tegini qo'shing."
  },
  {
    id: 9,
    level: "sinov",
    levelLabel: "Mustaqil sinov",
    levelColor: "purple",
    title: "9. To'g'ri Body ichiga joylashtirish",
    taskText: "Foydalanuvchiga ko'rinadigan barcha elementlar <body> teglari ichida bo'lishi kerak. Quyidagi kodda elementlar adashib qolgan. Ularni to'g'ri tartiblang.",
    instruction: "<h1> va <p> larni <body> va </body> teglari ichiga joylang.",
    initialCode: "<!DOCTYPE html>\n<html>\n<head>\n  <title>Sinov</title>\n</head>\n<!-- Xato: matnlar bodysiz turibdi! -->\n<h1>Dasturchi sahifasi</h1>\n<p>HTML juda qiziqarli til!</p>\n</html>",
    expectedHint: "<body>\n  <h1>Dasturchi sahifasi</h1>\n  <p>HTML juda qiziqarli til!</p>\n</body>",
    validator: (code) => {
      return /<body>[\s\S]*<h1[^>]*>[\s\S]*<\/h1>[\s\S]*<p[^>]*>[\s\S]*<\/p>[\s\S]*<\/body>/i.test(code);
    },
    successMessage: "Qoyilmaqom! HTML qoidasiga ko'ra vizual kontent albatta <body> ichida bo'lishi shart.",
    hint: "<head></head> dan keyin <body> ni oching, matnlarni qo'ying va </body> bilan yopib, keyin </html> qiling."
  },
  {
    id: 10,
    level: "sinov",
    levelLabel: "Mustaqil sinov",
    levelColor: "purple",
    title: "10. Berilgan dizaynga mos HTML yaratish",
    taskText: "To'liq mini-blok yarating: 1) <h1> sarlavha; 2) O'zingiz haqingizda <p> paragraf; 3) <h2> 'Mening sevimli 3 ta fanim' sarlavhasi; 4) 3 ta fandan iborat <ol> tartibli ro'yxat.",
    instruction: "Barcha 4 ta komponent to'g'ri sintaksis bilan yozilishi kerak.",
    initialCode: "<!-- To'liq mini-blokni shu yerda yarating -->\n",
    expectedHint: "<h1>, <p>, <h2> va <ol><li>...</li></ol> teglari qatnashishi kerak.",
    validator: (code) => {
      const hasH1 = /<h1[^>]*>.+<\/h1>/i.test(code);
      const hasP = /<p[^>]*>.+<\/p>/i.test(code);
      const hasH2 = /<h2[^>]*>.+<\/h2>/i.test(code);
      const hasOl = /<ol[^>]*>[\s\S]*<li[^>]*>[\s\S]*<li[^>]*>[\s\S]*<li[^>]*>[\s\S]*<\/ol>/i.test(code);
      return hasH1 && hasP && hasH2 && hasOl;
    },
    successMessage: "Tabriklaymiz! Siz HTML asosiy teglari bo'yicha barcha sinovlarni 100% muvaffaqiyatli tamomladingiz!",
    hint: "Ketma-ketlik: <h1>...</h1>, <p>...</p>, <h2>...</h2> va <ol><li>1</li><li>2</li><li>3</li></ol>."
  }
];
