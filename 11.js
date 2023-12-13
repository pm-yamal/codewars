Циклы. Работа с числами.
Нахождение наибольшего общего делимого.
gcd - greatest common divisor (наибольший общий делитель).

Теперь сделаем что-нибудь посложнее: напишем функцию, которая возвращает наибольший общий делитель двух чисел. 
Например, если a = 12, b = 18, то функция должна вернуть 6, так как это наибольшее число, на которое делятся оба числа. 
Решим задачу простым перебором: будем перебирать числа от 1 до a и проверять, делится ли a и b на это число без остатка. 
Если делится, то запоминаем его в переменную result. После того как перебрали все числа, возвращаем result.

function gcd(a, b) {
  let result = 0;
  for (let i = 1; i <= a; i++) {
    if (a % i === 0 && b % i ===0){
      result = i
    }
  }
  return result;
}
console.log(gcd(12, 18));