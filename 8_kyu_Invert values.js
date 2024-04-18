Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.
invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
invert([]) == []
You can assume that all values are integers. Do not mutate the input array/list.

1. Через циклы
function invert(array) {
  const arrInvert = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] !== 0) {
      arrInvert.push(-array[i]);
    }
    else if (array[i] === 0) {
      arrInvert.push(0);
    }
  }
  return arrInvert;
}

2. Через методы
const invert = (array) => {
  const arrInvert = array.map(i => -i);
  return arrInvert;
}

console.log(invert([1,2,3,4,5])) // [-1,-2,-3,-4,-5]
console.log(invert([1,-2,3,-4,5])) // [-1,2,-3,4,-5]
console.log(invert([])) // []
console.log(invert([0])) // [0]
