Create a function that accepts a string and a single character, and returns an integer of the count of occurrences the 2nd argument is found in the first one.
If no occurrences can be found, a count of 0 should be returned.
("Hello", "o")  ==>  1
("Hello", "l")  ==>  2
("", "z")       ==>  0

Создайте функцию, которая принимает строку и один символ и возвращает целое число вхождений второго аргумента в первый.
Если вхождений не обнаружено, должно быть возвращено значение 0.
("Hello", "o")  ==>  1
("Hello", "l")  ==>  2
("", "z")       ==>  0
str_count("Hello", 'o'); // returns 1
str_count("Hello", 'l'); // returns 2
str_count("", 'z'); // returns 0

1. Через циклы
function strCount(str, letter){
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === letter) {
      count += 1;
    }
  } 
  return count;
}

2. Через методы
const strCount = (str, letter) => {
  const count = str.split('').filter(i => i === letter).length;
  return count;
}

console.log(strCount('Hello', 'o')); // return 1
console.log(strCount('Hello', 'l')); // return 2
console.log(strCount('', 'z')); // return 0
