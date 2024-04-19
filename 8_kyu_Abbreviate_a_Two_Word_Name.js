Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.
The output should be two capital letters with a dot separating them.
It should look like this:
Sam Harris => S.H
patrick feeney => P.F

1. Решение через методы
function abbrevName(name){
  const nameNew = name.toUpperCase().split(' ');
  return nameNew[0].slice(0, 1) + '.' + nameNew[1].slice(0, 1);
}
console.log(abbrevName('Sam Harris')); // S.H
console.log(abbrevName('patrick feeney')); // P.F
