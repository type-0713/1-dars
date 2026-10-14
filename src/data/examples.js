// src/data/examples.js

export const PLAYGROUND_TEMPLATES = [
  {
    id: "default",
    name: "Standart HTML shablon",
    badge: "Boshlang'ich",
    description: "To'g'ri tuzilishga ega sodda HTML hujjati",
    code: `<!DOCTYPE html>
<html lang="uz">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>IT KURSI — Mening birinchi sahifam</title>
</head>
<body>
    <h1>Salom, dunyo!</h1>
    <p>Men IT KURSI platformasida HTML o'rganishni boshladim.</p>
</body>
</html>`
  },
  {
    id: "profile",
    name: "Shaxsiy profil kartochkasi",
    badge: "Sarlavhalar va matn",
    description: "Sarlavha, kasb va qisqa ma'lumot",
    code: `<!DOCTYPE html>
<html lang="uz">
<head>
    <meta charset="UTF-8">
    <title>Dasturchi Profili</title>
</head>
<body>
    <h1>Anvar Karimov</h1>
    <h2>Bo'lajak Frontend Dasturchi</h2>
    <p>Men texnologiyalarga, veb-dizaynga va zamonaviy veb-saytlar yaratishga qiziqaman.</p>
    <p>Bugun HTML asoslarini muvaffaqiyatli o'zlashtirdim!</p>
</body>
</html>`
  },
  {
    id: "lists",
    name: "Qiziqishlar va Rejalar",
    badge: "Ro'yxatlar",
    description: "ul va ol ro'yxatlari bilan ishlash",
    code: `<!DOCTYPE html>
<html lang="uz">
<head>
    <meta charset="UTF-8">
    <title>Mening Rejalarim</title>
</head>
<body>
    <h1>Mening IT sayohatim</h1>
    
    <h2>Sevimli mashg'ulotlarim:</h2>
    <ul>
        <li>Dasturlash sirlarini o'rganish</li>
        <li>Kiberxavfsizlik haqida o'qish</li>
        <li>Shaxmat o'ynash</li>
    </ul>

    <h2>Ushbu haftadagi maqsadlarim:</h2>
    <ol>
        <li>HTML teglari bilan tanishish</li>
        <li>O'z shaxsiy sahifamni yaratish</li>
        <li>Birinchi loyihani do'stlarimga ko'rsatish</li>
    </ol>
</body>
</html>`
  },
  {
    id: "portfolio",
    name: "To'liq Mini-Loyiha namunasi",
    badge: "Loyiha",
    description: "Barcha o'rganilgan elementlar jamlanmasi",
    code: `<!DOCTYPE html>
<html lang="uz">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Men haqimda — Birinchi sahifam</title>
</head>
<body>
    <h1>Salom! Mening ismim Jasur</h1>
    <p>Men 16 yoshdaman va dasturlash sohasiga ilk qadamlarimni qo'yyapman.</p>

    <h2>Nega aynan dasturlash?</h2>
    <p>Chunki kod yozish orqali butun dunyodagi odamlar foydalanadigan ajoyib mahsulotlar yaratish mumkin.</p>

    <h2>Mening qiziqishlarim</h2>
    <ul>
        <li>Veb-saytlar yaratish</li>
        <li>Robototexnika</li>
        <li>Kitoblar va podkastlar</li>
    </ul>

    <h2>Kelajakdagi 3 ta maqsadim</h2>
    <ol>
        <li>HTML va CSS tillarini mukammal o'rganish</li>
        <li>Shaxsiy portfolio saytimni internetga yuklash</li>
        <li>Katta IT kompaniyada stajirovkadan o'tish</li>
    </ol>
</body>
</html>`
  }
];

export const FINAL_PROJECT_CRITERIA = [
  {
    id: "doctype",
    label: "<!DOCTYPE html> e'lon qilingan",
    rule: (code) => /<!DOCTYPE\s+html>/i.test(code)
  },
  {
    id: "htmlRoot",
    label: "<html lang=\"uz\"> va </html> teglari mavjud",
    rule: (code) => /<html[^>]*>[\s\S]*<\/html>/i.test(code)
  },
  {
    id: "headAndTitle",
    label: "<head> ichida <title> nomi kiritilgan",
    rule: (code) => /<head>[\s\S]*<title>.+<\/title>[\s\S]*<\/head>/i.test(code)
  },
  {
    id: "bodyPresent",
    label: "<body> va </body> teglari to'g'ri o'ralgan",
    rule: (code) => /<body>[\s\S]*<\/body>/i.test(code)
  },
  {
    id: "h1Heading",
    label: "Kamida bitta <h1> bosh sarlavha (Ismingiz bilan)",
    rule: (code) => /<h1[^>]*>.+<\/h1>/i.test(code)
  },
  {
    id: "h2Heading",
    label: "Kamida bitta <h2> kichik sarlavha",
    rule: (code) => /<h2[^>]*>.+<\/h2>/i.test(code)
  },
  {
    id: "paragraphs",
    label: "O'zingiz haqingizda kamida bitta <p> paragraf",
    rule: (code) => /<p[^>]*>.+<\/p>/i.test(code)
  },
  {
    id: "listCheck",
    label: "Ro'yxat: <ul> yoki <ol> va ichida kamida ikkita <li> mavjud",
    rule: (code) => /(<(ul|ol)[^>]*>[\s\S]*<li[^>]*>[\s\S]*<li[^>]*>[\s\S]*<\/(ul|ol)>)/i.test(code)
  }
];
