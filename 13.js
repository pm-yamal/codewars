Циклы. Break. Continue.  
Выведите числа от 1 до 100, пропуская числа 13, 18, и 45.

let result = 0;
for (let i = 1; i <= 100; i++) {
  if (i === 13 || i === 18 || i === 45) {
    continue;
  }
  console.log(i);
}
