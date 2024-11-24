// #kUSgFqWY
// Створити 3 інпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.

let table = document.getElementById('table');

let tableGeneration = document.forms['tableGeneration'];

tableGeneration.onsubmit = function (e){
    e.preventDefault();
    table.innerText = '';
    let rovCount = +tableGeneration.rowCount.value;
    let cellCount = +tableGeneration.cellCount.value;
    let cellText = tableGeneration.cellText.value;
    for (let i = 0; i < rovCount; i++) {
        let tr = document.createElement('tr');
        table.append(tr);
        for (let j = 0; j < cellCount; j++) {
            let td = document.createElement('td');
            td.innerText = cellText;
            table.append(td);
        }
    }
}

