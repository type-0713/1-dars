// src/data/errorHunt.js
// "Xatoni top" interaktiv o'yini — Professional Coding Challenge

export const ERROR_HUNT_CHALLENGES = [
  {
    id: 1,
    title: "1-Challenge: Yopuvchi teg yo'qolgan",
    difficulty: "Oson",
    brokenCode: `<h1>Salom, dunyo!
<p>Dasturlash olamiga xush kelibsiz.</p>`,
    question: "Ushbu kod parchasida qanday xato mavjud?",
    options: [
      {
        id: "a",
        text: "Sarlavha matni juda qisqa yozilgan",
        isCorrect: false,
        feedback: "Matn uzunligi ixtiyoriy bo'lishi mumkin, bu xato emas."
      },
      {
        id: "b",
        text: "<h1> tegi uchun yopuvchi </h1> tegi qo'yilmagan",
        isCorrect: true,
        feedback: "To'g'ri! <h1> ochilgan, lekin oxirida </h1> bilan yopilmagan. Natijada brauzer butun sahifani sarlavha deb qabul qilishi mumkin."
      },
      {
        id: "c",
        text: "<p> tegining o'rniga <div> yozilishi shart edi",
        isCorrect: false,
        feedback: "Oddiy matn xatboshilari uchun aynan <p> tegi eng to'g'ri tanlovdir."
      },
      {
        id: "d",
        text: "Kodda hech qanday xato yo'q",
        isCorrect: false,
        feedback: "Yaxshilab qarang: birinchi qatorda ochilgan teg yopilmay qolgan!"
      }
    ],
    fixedCode: `<h1>Salom, dunyo!</h1>\n<p>Dasturlash olamiga xush kelibsiz.</p>`,
    lessonLearned: "Juft teglarni ochgach, albatta ularning yopuvchi qismini (slash / belgisi bilan) yozish shart."
  },
  {
    id: 2,
    title: "2-Challenge: Teg nomidagi imlo xatosi",
    difficulty: "O'rta",
    brokenCode: `<ul>
  <list>Birinchi element</list>
  <list>Ikkinchi element</list>
</ul>`,
    question: "Nega ro'yxat elementlari brauzerda to'g'ri ro'yxat bo'lib chiqmayapti?",
    options: [
      {
        id: "a",
        text: "HTML da <list> degan teg yo'q, ro'yxat elementi <li> bo'lishi kerak",
        isCorrect: true,
        feedback: "To'ppa-to'g'ri! HTML da ro'yxat elementi uchun 'list' deb emas, qisqartirib 'li' (List Item) tegi ishlatiladi."
      },
      {
        id: "b",
        text: "<ul> o'rniga <bullet> yozilishi kerak edi",
        isCorrect: false,
        feedback: "Yo'q, tartibsiz ro'yxat konteyneri aynan <ul> (Unordered List) hisoblanadi."
      },
      {
        id: "c",
        text: "Ro'yxat ichida kamida 5 ta element bo'lishi qonun",
        isCorrect: false,
        feedback: "Elementlar soni cheklanmagan, 1 ta bo'lsa ham ishlayveradi."
      },
      {
        id: "d",
        text: "Matnlar faqat ingliz tilida bo'lishi shart",
        isCorrect: false,
        feedback: "HTML da kontent xohlagan tilda bo'lishi mumkin."
      }
    ],
    fixedCode: `<ul>\n  <li>Birinchi element</li>\n  <li>Ikkinchi element</li>\n</ul>`,
    lessonLearned: "HTML standartidagi teglarni o'zboshimchalik bilan o'zgartirib bo'lmaydi. Ro'yxat elementi faqat <li> deb yoziladi."
  },
  {
    id: 3,
    title: "3-Challenge: Teglarning noto'g'ri chatishuvi (Nesting)",
    difficulty: "O'rta",
    brokenCode: `<h1><em>Muhim yangilik</h1></em>`,
    question: "Bu kodda teglarni joylashtirish (nesting) qoidasi qanday buzilgan?",
    options: [
      {
        id: "a",
        text: "<em> va <h1> birga ishlatilishi mutlaqo taqiqlangan",
        isCorrect: false,
        feedback: "Ular birga ishlatilishi mumkin, muammo ularning joylashuv tartibida!"
      },
      {
        id: "b",
        text: "Keyinroq ochilgan <em> tegi oldin yopilishi kerak edi: <h1><em>...</em></h1>",
        isCorrect: true,
        feedback: "Barakalla! HTML da 'oxirgi ochilgan birinchi yopiladi' (LIFO - Last In First Out) qoidasi amal qiladi. <em> ichkarida ochilgani uchun </h1> dan oldin yopilishi shart."
      },
      {
        id: "c",
        text: "Sarlavha har doim faqat qora rangda bo'lishi shart",
        isCorrect: false,
        feedback: "Bu sintaksis xatosi bilan bog'liq emas."
      },
      {
        id: "d",
        text: "Bu yerda xato yo'q, brauzer o'zi to'g'irlab oladi",
        isCorrect: false,
        feedback: "Brauzer tuzatishga urinsa ham, bu noto'g'ri va xavfli kodlash uslubidir."
      }
    ],
    fixedCode: `<h1><em>Muhim yangilik</em></h1>`,
    lessonLearned: "Teglar qutichaga o'xshaydi: ichki quticha tashqi qutichadan oldin yopilishi kerak!"
  },
  {
    id: 4,
    title: "4-Challenge: Ko'rinmas miya va tananing chalkashishi",
    difficulty: "Qiyin",
    brokenCode: `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <h1>Saytimga xush kelibsiz!</h1>
  <p>Bu yerdagi hamma ma'lumotlar foydalanuvchi uchun.</p>
</head>
<body>
  <title>Mening sahifam</title>
</body>
</html>`,
    question: "Koddagi eng asosiy arxitektura xatosi nimada?",
    options: [
      {
        id: "a",
        text: "Matnlar (<head> ichidagi h1, p) va tab sarlavhasi (<title>) o'rinlari almashib qolgan",
        isCorrect: true,
        feedback: "Mukammal! <title> faqat <head> ichida turishi kerak, <h1> va <p> kabi ko'rinadigan barcha elementlar esa <body> ichida bo'lishi shart edi!"
      },
      {
        id: "b",
        text: "<!DOCTYPE html> birinchi qatorda turmasligi kerak edi",
        isCorrect: false,
        feedback: "<!DOCTYPE html> eng birinchi qatorda turgani to'g'ri."
      },
      {
        id: "c",
        text: "<html> tegi ichida <head> bo'lishi noto'g'ri",
        isCorrect: false,
        feedback: "<head> aynan <html> ning ichida joylashadi."
      },
      {
        id: "d",
        text: "Koddagi hamma qatorlar mutlaqo to'g'ri",
        isCorrect: false,
        feedback: "<head> va <body> elementlarining vazifasini eslang: <head> texnik qism, <body> foydalanuvchi ko'radigan qism."
      }
    ],
    fixedCode: `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Mening sahifam</title>
</head>
<body>
  <h1>Saytimga xush kelibsiz!</h1>
  <p>Bu yerdagi hamma ma'lumotlar foydalanuvchi uchun.</p>
</body>
</html>`,
    lessonLearned: "Har bir narsa o'z joyida bo'lishi kerak: <head> da meta va title, <body> da esa barcha ko'rinuvchi kontent!"
  },
  {
    id: 5,
    title: "5-Challenge: Toq (Self-closing) teg xatosi",
    difficulty: "Qiyin",
    brokenCode: `<img src="rasm.jpg">Bu yerda chiroyli tog' manzarasi bor</img>`,
    question: "<img> tegi bilan ishlashda qanday xatolikka yo'l qo'yilgan?",
    options: [
      {
        id: "a",
        text: "<img> alohida yopuvchi </img> tegiga ega emas va u ichiga matn olmaydi",
        isCorrect: true,
        feedback: "Qoyil! <img> — bu toq (self-closing) teg. Uning yopuvchi </img> tegi bo'lmaydi va ichiga matn olinmaydi. Matnli tavsif uchun 'alt' atributi ishlatiladi."
      },
      {
        id: "b",
        text: "Rasm nomi faqat raqamlar bilan yozilishi shart",
        isCorrect: false,
        feedback: "Rasm fayli nomi ixtiyoriy harflar bilan nomlanishi mumkin."
      },
      {
        id: "c",
        text: "HTML da umuman rasm qo'yib bo'lmaydi",
        isCorrect: false,
        feedback: "HTML da rasmlar juda osonlik bilan <img> orqali joylanadi."
      },
      {
        id: "d",
        text: "src o'rniga link deb yozilishi kerak edi",
        isCorrect: false,
        feedback: "Rasm manzili uchun aynan src (source) atributi ishlatiladi."
      }
    ],
    fixedCode: `<img src="rasm.jpg" alt="Bu yerda chiroyli tog' manzarasi bor" />`,
    lessonLearned: "HTML dagi ayrim teglar (masalan: <img>, <br>, <hr>, <input>, <meta>) o'zini o'zi yopuvchi toq teglar hisoblanadi."
  }
];
