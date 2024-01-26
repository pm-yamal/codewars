// Напишите функцию findFirstNumberBetween которая принимает массив чисел numbers, число start и число end и возвращает первое число из массива numbers, которое находится между start и end (включительно). 
// Если такого числа нет, функция должна возвращать undefined.
// Например, для массива [5, -10, 1, 22, 8, 7], start = 0 и end = 3 функция должна вернуть 1.

// const numbers = [5, -10, 1, 22, 8, 7];
// const start = 0;
// const end = 3;
// let start_1 = numbers.find((i) => i > start);
// let end_1 = numbers.find((i) => i < end);
// console.log(start_1, end_1);

// const numbers = [5, -10, 1, 22, 8, 7];
// const start = 0;
// const end = 3;
// let findNum = numbers.find((i) => i > start && i < end);
// console.log(findNum);

function findFirstNumberBetween(numbers, start, end) {
  let findNum = numbers.find((i) => i > start && i < end);
  return findNum;
}
console.log(findFirstNumberBetween([5, -10, 1, 22, 8, 7], 0, 3));
