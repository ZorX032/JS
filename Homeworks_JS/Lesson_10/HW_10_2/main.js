// #j693ca8
// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача

let inputAge = document.createElement('input');
let approveBtn = document.createElement('button');
let msgBlock = document.createElement('div');
let textInMsgBlock = document.createElement('p');
msgBlock.append(textInMsgBlock);
approveBtn.innerText = 'Підтвердити';
document.body.append(inputAge, approveBtn, msgBlock);

approveBtn.onclick = function (){
    localStorage.setItem('age', inputAge.value);
    let userAge = localStorage.getItem('age');

    if(!userAge || isNaN(+userAge)){
        textInMsgBlock.innerText = 'Введіть свій вік';
    }else if(+userAge >= 18){
        msgBlock.style.backgroundColor = 'green';
        textInMsgBlock.innerText = 'Вітаємо! Ваш вік 18 або більше, реєстрацію пройдено';

    }else{
        msgBlock.style.backgroundColor = 'red';
        textInMsgBlock.innerText = 'Нажаль Ваш вік менше 18, реєстрацію не пройдено';
    }

}

