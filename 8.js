Циклы. Работа со строками.
Напишите функцию reverse, которая принимает на вход строку и переворачивает ее, используя цикл.
Подсказка: загляните в предыдущую главу, чтобы посмотреть как перебрать индексы не в прямом, а в обратном порядке.

function reverse(str) {
  let newStr = '';
  for (let i = str.length - 1; i >= 0; i--) {
    newStr += str[i];
  } 
    return newStr;
}
console.log(reverse('elbrus'));
