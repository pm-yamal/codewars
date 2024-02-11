// Напишите функцию isAnagram, которая принимает две строки string1 и string2. Функция должна возвращать true, если строки являются анаграммами, иначе false. Анаграммы — это слова, которые состоят из одинаковых букв, но в разном порядке.
// Примеры:
// isAnagram('кот', 'ток'); // true
// isAnagram('кот', 'кит'); // false
// isAnagram('удар', 'руда'); // true
// Подсказка: В этой задаче вам не нужно придумывать сложных алгоритмов, достаточно использовать три метода из этого урока.

function isAnagram(string1, string2) {
  const arr1 = string1.split('');
  const arr2 = string2.split('');
  const sortArr1 = arr1.sort();
  const sortArr2 = arr2.sort();
  const joinSortArr1 = sortArr1.join('');
  const joinSortArr2 = sortArr2.join('');
  if (joinSortArr1 == joinSortArr2) {
    return true;
  } else return false;
}
console.log(isAnagram('кот', 'ток'));
