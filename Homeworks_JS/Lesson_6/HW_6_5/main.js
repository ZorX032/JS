// #bfoJuse4ZzP
// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']

function stringToArray(str) {
    if (str){
        const split = str.split(' ');
        return split;
    }
    return [''];
}

let s = 'Ревуть воли як ясла повні';
let arr = stringToArray(s);
console.log(arr);
