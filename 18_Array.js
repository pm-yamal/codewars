Массивы. Методы массивов.
У вас есть список книг, представленный в виде массива. Изначально он пустой.
Выполните следующие действия:
Добавьте книгу "Сильмариллион" в конец списка.
Добавьте книгу "Хоббит" в начало списка.
Добавьте книгу "Сами боги" в конец списка.
Вы прочли книгу "Хоббит". Удалите её из списка.
Вы передумали читать "Сильмариллион". Удалите его из списка.
Добавьте книгу "Ложная слепота" в конец списка.
Добавьте книгу "История твоей жизни" в конец списка.
Вывести в консоль длину массива книг и сам массив.

const books = [];
books.push("Сильмариллион");
console.log(books);
books.unshift("Хоббит");
console.log(books);
books.push("Сами боги");
console.log(books);
books.shift("Хоббит");
console.log(books);
books.shift("Сильмариллион");
console.log(books);
books.push("Ложная слепота");