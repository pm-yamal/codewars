Цикл for.  
Как известно: регулярная практика - это залог успеха. В Эльбрусе мы практикуемся каждый день. 
А всего у нас 3 фазы по 3 недели. 
Выведите в консоль фразу "Новый день практики в Эльбрусе!" столько раз, сколько дней проводят студенты в кампусе школы. 
Будем учитывать, что студент занимается 5 дней в неделю.

const phases = 3; // количество фаз
const weeks = 3; // количество недель в фазе
const weekDays = 5; // количество рабочих дней в неделе
const totalDays = phases * weeks * weekDays;
for (let i = 0; i < totalDays; i++) {
  console.log('Новый день практики в Эльбрусе!');
}
  