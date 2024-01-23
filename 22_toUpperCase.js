// Напишите функцию scream, которая принимает массив строк strings и возвращает новый массив, в котором все строки переведены в верхний регистр. 
Чтобы пройтись по массиву strings используйте метод forEach. 
Пример: на вход функции scream подается массив ['apple', 'banana', 'orange'], а возвращается массив ['APPLE', 'BANANA', 'ORANGE'].

const strings = ['apple', 'banana', 'orange'];
let stringsUp = [];
function scream(strings) {
  strings.forEach((i) => {
    stringsUp.push(i.toUpperCase()); 
  });
  return stringsUp;
}
console.log(scream(strings));
