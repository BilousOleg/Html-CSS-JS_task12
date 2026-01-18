const books = [
  {
    title: '1984',
    author: 'Джордж Оруелл',
    genre: 'Соціальна фантастика',
    pages: 328,
  },
  {
    title: 'Колгосп тварин',
    author: 'Джордж Оруелл',
    genre: 'Соціальна фантастика',
    pages: 286,
  },
  {
    title: 'Гаррі Поттер і філософський камінь',
    author: 'Дж. К. Роулінг',
    genre: 'Фентезі',
    pages: 256,
  },
  {
    title: 'Гаррі Поттер і таємна кімната',
    author: 'Дж. К. Роулінг',
    genre: 'Фентезі',
    pages: 336,
  },
  {
    title: "Гаррі Поттер і в'язень Азкабану",
    author: 'Дж. К. Роулінг',
    genre: 'Фентезі',
    pages: 448,
  },
  {
    title: 'Гаррі Поттер і келих вогню',
    author: 'Дж. К. Роулінг',
    genre: 'Фентезі',
    pages: 608,
  },
  {
    title: 'Гаррі Поттер і орден Фенікса',
    author: 'Дж. К. Роулінг',
    genre: 'Фентезі',
    pages: 864,
  },
  {
    title: 'Гаррі Поттер і Принц-півкров',
    author: 'Дж. К. Роулінг',
    genre: 'Фентезі',
    pages: 704,
  },
  {
    title: 'Гаррі Поттер і смертельні реліквії',
    author: 'Дж. К. Роулінг',
    genre: 'Фентезі',
    pages: 608,
  },
  { title: 'Франкенштейн', author: 'Мері Шеллі', genre: 'Жахи', pages: 280 },
  {
    title: 'Три товариші',
    author: 'Еріх Марія Ремарк',
    genre: 'Роман',
    pages: 592,
  },
  {
    title: 'Матильда',
    author: 'Роальд Даль',
    genre: 'Дитяча література',
    pages: 240,
  },
  {
    title: 'Маленький принц',
    author: 'Антуан де Сент-Экзюпери',
    genre: 'Філософська проза',
    pages: 96,
  },
  {
    title: 'Триумфальна арка',
    author: 'Еріх Марія Ремарк',
    genre: 'Роман',
    pages: 515,
  },
  {
    title: 'Американський психопат',
    author: 'Брет Істон Елліс',
    genre: 'Художній роман',
    pages: 399,
  },
  {
    title: 'Коротка історія часу',
    author: 'Стивен Гокінг',
    genre: 'Наукова література',
    pages: 256,
  },
  { title: 'Заводи', author: "Тед Х'юз", genre: 'Історія', pages: 672 },
  {
    title: 'Смерть в Венеції',
    author: 'Томас Манн',
    genre: 'Психологічний роман',
    pages: 128,
  },
  {
    title: 'Вікторія',
    author: 'Дейв Ітонс',
    genre: 'Альтернативна історія',
    pages: 592,
  },
  {
    title: 'Таємниці Старого Норвегії',
    author: 'Дерек Б. Міллер',
    genre: 'Фентезі',
    pages: 656,
  },
  {
    title: 'Дивна смерть',
    author: 'Пол К. Фейр',
    genre: 'Детектив',
    pages: 384,
  },
  {
    title: 'Війна майбутнього',
    author: 'Герберт Йенс',
    genre: 'Наукова фантастика',
    pages: 384,
  },
  { title: 'Думка', author: 'Стівен Кінг', genre: 'Жахи', pages: 432 },
  { title: 'Воно', author: 'Стівен Кінг', genre: 'Жахи', pages: 502 },
];

// Завдання 1

console.log(books.filter((b) => b.genre === 'Роман')[0]);

// Завдання 2

console.log(books.findLastIndex((b) => b.genre === 'Роман'));

// Завдання 3

console.log(books.filter((b) => b.genre === 'Фентезі' && b.pages > 600));

// Завдання 4

console.log(books.map((b) => (b = b.title)));

// Завдання 5

function filterBooks(books, author, genre) {
  return books
    .filter((b) => b.author === author && b.genre === genre)
    .map((b) => (b = b.title));
}

// Приклад застосування функції
console.log(filterBooks(books, 'Дж. К. Роулінг', 'Фентезі'));

// Завдання 6

console.log(books.filter((b) => b.genre === 'Фентезі').length);

// Завдання 7

console.log(books.filter((b) => b.pages >= 200 && b.pages <= 400).length);

// Завдання 8

console.log(books.sort((b1, b2) => (b1.pages > b2.pages ? 1 : -1))[0]);
