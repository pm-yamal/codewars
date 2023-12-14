Циклы. Break. Continue.
Напишите функцию printFirstWord, которая найдёт первое слово в строке и выведет его на экран. Первым словом считаются все символы до первого пробела. Не удаляйте вызовы функции printFirstWord из кода.
Подсказка: используйте знания полученные в уроке Работа со строками в цикле, чтобы составить новое слово, а также break, чтобы прервать цикл при нахождении первого пробела.

function printFirstWord(str) {
  let newStr = '';
  for (let i = 0; i < str.length; i++) {
    if (str[i] === ' ') {
      break;
    }
    newStr += str[i];
  } 
  console.log(newStr);
}
printFirstWord('JavaScript не так уж сложен');
printFirstWord('Раз два три');
