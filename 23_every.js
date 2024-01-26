// Напишите функцию areAllPositive которая принимает массив чисел numbers и возвращает true, если все числа в массиве положительные, иначе false.

// const numbers = [1, 34, 78, 23, 92, 24];
// const areAllPositive = numbers.every((i) => i > 0); 
// console.log(areAllPositive);

const numbers = [1, 34, 78, 23, 92, 0];
function areAllPositive(numbers) {
  let positive = numbers.every((i) => i > 0);
  return positive;
}
console.log(areAllPositive(numbers));
