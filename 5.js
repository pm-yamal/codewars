Поиск индекса числа внутри массива.
Проход по массиву, сравнение искомого числа (target) с текущим, при совпадении вывод индекса этого числа.    
  
const test = [56, 12, 65, 23, 89];
function findIndex(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) return i;
    } return 'Число вне массива';
  }
console.log(findIndex(test, 89));
