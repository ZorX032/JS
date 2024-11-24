// #bq1zkx7WP
// *** (подібне було вище, але...будьте уважні в другій частині) створити сторінку з довільним блоком, в середині якого є значення "100грн"
// при перезавантаженні сторінки до значаення додається по 10грн, але !!!
//     зміна ціни відбувається тільки на перезавантаження, які відбулись пізніше ніж 10 секунд після попереднього.
//     При перезавантаженні, яке відбулось раніше ніж минуло 10 секунд - нічого не відбувається

//!!!!!! Сил тому, хто буде це перевіряти=) Я розумію, що я тут намудрив, але наче працює. Так як розв'язку до цього завдання не було, я викручувався як міг.


// тут ми отримуємо створенний h1
let number =  document.getElementById('value');


//тут ми перевіряємо чи існує ключ в локальному сховищі, якщо не існує то виконуємо
if(!localStorage.getItem('num')){
    // створюємо змінну та даємо їй стандартне значення
    let startValue = 100;
    // додаємо цю змінну в локаль
    localStorage.setItem('num', startValue);
    //присвоюємо текст нашій h1
    number.innerText = startValue + ' ' + 'Грн';
}else{//якщо ключ існує то беремо значення по ключу і присвоюємо його нашій h1
    number.innerText = localStorage.getItem('num') + ' ' + 'Грн';
}
// створюємо змінну time та присвоюємо їй дату
let time = new Date().getTime();
// записуємо дату в локаль
localStorage.setItem('startTime', time);
//тут ми перевіряємо чи існує ключ, якщо не існує, то присвоюємо йому дату, таким чином ми її заморожуємо, так як в майбутньому ця перевірка не буде проходити
if(!localStorage.getItem('savedTime')){
    localStorage.setItem('savedTime', time);
}

// отримуємо з локалі наш замороженний час
let savedTime = localStorage.getItem('savedTime');
//робимо перевірку, якщо нинішній час мінус заморожений час більше або дорівнює 10000 мілісекунд(10 секунд) то виконується умова.
if(time - savedTime >= 10000){
    //присвоюємо за ключем нове значення збільшене на 10, а саме витягуємо те що вже є, та додаємо до нього 10
    let newValue = +localStorage.getItem('num') + 10;
    // зберігаємо нове значення
    localStorage.setItem('num', newValue);
    //заморожуємо новий час
    localStorage.setItem('savedTime', time);
    //виводимо значення
    number.innerText = localStorage.getItem('num') + ' ' + 'Грн';
}else{//якщо умова не виконалась то заморожуємо новий час
    localStorage.setItem('savedTime', time);
}











// localStorage.setItem('startTime', time);
//
// let startTime = localStorage.getItem('startTime');
// let startValue = +localStorage.getItem('num');
// // let startValue = 100;
// number.innerText = startValue;
//
// if(startTime !== Null){
//
// }
//
// function updateTime(){
//     let updatedTime = new Date().getSeconds();
//     localStorage.setItem('sessionTime', updatedTime);
//
// }
//
// let sessionTime =setInterval(updateTime, 1000);
//
//
// if( localStorage.getItem('sessionTime') - startTime <= 10){
//
//     startValue += 10;
//     localStorage.setItem('num', startValue);
//
// }





