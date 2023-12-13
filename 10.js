Циклы. Задача с числами.
Написать функцию, которая возвращает сумму всех делителей числа n, кроме самого числа. Например, если n = 12, то функция должна вернуть 1 + 2 + 3 + 4 + 6 = 16.

function sumDivisors (n) {
  let result = 0;
  for (let i = 0; i < n; i++ ) {
    if (n % i === 0) {
      result += i;
    }
  }
  return result;
}
console.log(sumDivisors(12));
