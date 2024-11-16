// #Rbr5kEQ
// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.


let numArr = [10, 8, -7, 55, 987, -1011, 0, 1050, 0];

let transformToString = numArr.map(num => num + '');

console.log(transformToString);