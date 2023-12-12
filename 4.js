Создать функцию compareStrings(str1, str2), которая принимает две строки и возвращает строку с большей длиной. Если строки равны по длине, функция возвращает строку "Строки равны по длине".

function compareStrings(str1, str2) {
  const str3 = 'Строки равны по длине';
  if (str1.length > str2.length) {
    return str1;
  } else if (str1.length === str2.length) {
    return str3;  
  } return str2; 
}
console.log(compareStrings('JavaScript', 'Java')); 
console.log(compareStrings('Java', 'Ruby')); 
console.log(compareStrings('Rust', 'Python')); 
