// #sH8c4er
// - Створити довільний елемент з id = text та створити кнопку.Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку зникав елемент з id="text".

//!!!!!! Так я знаю, що в вирішенні ДЗ було зроблено не так і можна було все зробити простіше, але я хотів попрактикуватися =) Наче працює



//створюємо дів
let textBlock = document.createElement('div');
//присвоюємо йому клас
textBlock.classList.add('textBlock');
//створюємо заголовок
let title = document.createElement('h1');
//присвоюємо йому ід
title.id = 'text'
//додаємо текст в h1
title.innerText = 'Lorem';
//створюємо кнопку
let button = document.createElement('button');
// додаємо текст в кнопку
button.innerText = 'delete text';
//додаємо h1 всередину div
textBlock.append(title);
//додаємо всі елементи в баді
document.body.append(textBlock, button);
//створюємо подію
button.onclick = function (){
    // при натисканні на кнопку текст всередині(h1) div зникає
    document.getElementById('text').remove();
}
