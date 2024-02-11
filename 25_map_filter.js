// Напишите функцию positiveSquares, которая принимает массив чисел numbers. 
// Функция должна отобрать из массива numbers только положительные числа, затем возвести их в квадрат и вернуть получившийся новый массив.
// positiveSquares([-2, 4, -5, 3, 9]); // [16, 9, 81]
// positiveSquares([-10, 0, 10]); // [0, 100]
// Подсказка: в этой задаче вам понадобится использовать два метода.

// 1. Циклами
// function positiveSquares(numbers) {
//   let onlyPositive = [];
//   let onlyPositiveSquares = [];
//   for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] >= 0) {
//       onlyPositive.push(numbers[i]);
//     }  
//   }
//   for (let i of onlyPositive) {
//     onlyPositiveSquares.push(i * i)
//   }
//   return onlyPositiveSquares;
//   // return onlyPositive;
// }
// console.log(positiveSquares([-2, 4, -5, 3, 9]));

// 2. Методами
// function positiveSquares(numbers) {
//   const onlyPositive = numbers.filter((i) => [i] >= 0);
//   const positiveSquares = onlyPositive.map((i) => i * i);
//   return positiveSquares;
// }
// console.log(positiveSquares([-2, 4, -5, 3, 9]));
