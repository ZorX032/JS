// #OPLI89c9G
// - Є масив:
//     ['Main','Products','About us','Contacts']
// Зробити ul в середині якої будуть лежати елементи масиву (кожен в своєму li)


//створюємо масив
let arr = ['Main', 'Products', 'About us', 'Contacts'];

//створюємо ul
let ul = document.createElement('ul');
// додаємо клас до ul
ul.classList.add('list');

// ітеруємо масив
for (const element of arr) {
    //створюємо li
    let li = document.createElement('li');
    // записуємо в li текст за елементом в масиві
    li.innerText = element;
    // додаємо li в створену ul
    ul.appendChild(li);
}
//додаємо ul в body
document.body.appendChild(ul);