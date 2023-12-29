Вам дан массив, где среди игреков (y) затесался один икс (x). Нужно удалить этот икс из массива. 
Сначала с помощью цикла for найдите индекс элемента, равного 'x', а затем используйте метод splice для удаления этого элемента. 
В конце концов выведите массив yArray в консоль.

const yArray = ['y', 'y', 'y', 'y', 'y', 'y', 'y', 'x', 'y', 'y', 'y', 'y'];
for (let xIndex = 0; xIndex < yArray.length; xIndex++) {
  console.log(`${xIndex}, ${yArray[xIndex]}`);
}
const newArray = yArray.splice(7, 1);
console.log(yArray);
