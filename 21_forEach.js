// Вам дан массив чисел numbers. Создайте новый массив odds, в который войдут только нечетные числа из numbers. Чтобы пройтись по массиву numbers, используйте метод forEach.

const numbers = [1, 44, 90, 33, 201, 133, 56, 30, 888];
let odds = [];
numbers.forEach(i => {
  if (i % 2 !== 0) {
    odds.unshift(i);
  }
});
console.log(odds);
