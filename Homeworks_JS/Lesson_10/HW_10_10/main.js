//
// #NKB0tgWIK1G
// ***PAGINATION
// зробити масив на 100 об'єктів та дві кнопки prev next
// при завантажені сторінки з'являються перші 10 об'єктів.
//     При натисканні next виводяться наступні 10 об'єктів
// При натисканні prev виводяться попередні 10 об'єктів
let table = document.getElementById('table');
let prevButton = document.getElementById('prev');
let nextButton = document.getElementById('next');

a = 10;
b =0;
const array = [];
for (let i = 0; i < 100; i++) {
    array.push({ id: i + 1 });
}
console.log(array);





for (let i = 0; i < 10; i++) {

    let tr = document.createElement('tr');
    table.append(tr);
    tr.innerText = `User ID: ${array[i].id}`;

}

nextButton.onclick = function (){

    for (let i = 10; i < a; i++) {
        tr.innerText = `User ID: ${array[i].id}`;
    }
}


// nextButton.onclick = function (){
//     for (let i = 10; i < 20; i++) {
//         tr.innerText = `User ID: ${array[i].id}`;}
//
// }

