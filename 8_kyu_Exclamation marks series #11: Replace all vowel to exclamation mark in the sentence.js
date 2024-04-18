Description:
Replace all vowel to exclamation mark in the sentence. aeiouAEIOU is vowel.
Examples
replace("Hi!") === "H!!"
replace("!Hi! Hi!") === "!H!! H!!"
replace("aeiou") === "!!!!!"
replace("ABCDE") === "!BCD!"

function replace(s){
  const arr = s.split("");
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 'e' || arr[i] === 'y' || arr[i] === 'u' || arr[i] === 'i' || arr[i] === 'o' || arr[i] === 'a' || arr[i] === 'E' || arr[i] === 'Y' || arr[i] === 'U' || arr[i] === 'I' || arr[i] === 'O' || arr[i] === 'A') {
      arr[i] = '!';
    }
  } return arr.join('');
}

console.log(replace("Hi!")) // "H!!"
console.log(replace("!Hi! Hi!")) // "!H!! H!!"
console.log(replace("aeiou")) // "!!!!!"
console.log(replace("ABCDE")) // "!BCD!"
console.log(replace("nOpk !nSSmltH Khyy DWamhee Uck XGee"));
