// #uwsz1RnTQJ1
// - Користувач вводить або має два числа.
//     Потрібно знайти та вивести максимальне число з тих двох.
//     Також потрібно врахувати коли введені рівні числа.
let number1 = +prompt("Введіть перше число");
let number2 = +prompt("Введіть друге число");
if (number1 > number2){
    console.log('Максимальне число1 ' + number1);
}else if (number2 > number1){
    console.log('Максимальне число2 ' + number2);
}else if(number1 === number2){
    console.log('Числа рівні');
}
