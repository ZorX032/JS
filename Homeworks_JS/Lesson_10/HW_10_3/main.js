// #ymAmN2xJ
// Стоврити форму з трьома полями для name,sruname,age та кнопкою. При натисканні на кнопку зчитати данні з полів, та вивести об'єкт в документ. Іншими словами : заповниои форму, натиснули кнопку, під формою з'явився блок з вашим об'єктом

//створюємо форму
let form = document.createElement('form');


// створюємо інпути та кнопку
let nameInput = document.createElement('input');
nameInput.placeholder = "Ваше ім'я";
let surnameInput = document.createElement('input');
surnameInput.placeholder = 'Ваше прізвище';
let ageInput = document.createElement('input');
ageInput.placeholder = 'Ваш вік';
let buttonForm = document.createElement('button');
buttonForm.innerText = 'Підтвердити';
// додаємо створені елементи в форму
form.append(nameInput, surnameInput, ageInput, buttonForm);
//створюємо блок з результатами які були введені в форму
let resultBlock = document.createElement('div')
resultBlock.className = 'resultBlock';
let resultBlockTitle = document.createElement('p');
resultBlockTitle.innerText = 'Введені дані'
let resultBlockName = document.createElement('p');
let resultBlockSurname = document.createElement('p');
let resultBlockAge = document.createElement('p');
// додаємо елементи в створенний блок
resultBlock.append(resultBlockTitle, resultBlockName,resultBlockSurname,resultBlockAge);
//додаємо всі елементи в баді
document.body.append(form, resultBlock);
//створюємо подію натискання на кнопку
buttonForm.onclick = function (ev){
    ev.preventDefault()
    resultBlockName.innerText = nameInput.value;
    resultBlockSurname.innerText = surnameInput.value;
    resultBlockAge.innerText = ageInput.value;
}
