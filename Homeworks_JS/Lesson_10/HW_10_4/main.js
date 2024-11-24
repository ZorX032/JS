// #2VaLt4vDczH
// є сторінка, на якій є блок, я кому знаходиьтся цифра. написати код, який при кожному перезавантажені сторінки буде додавати до неї +1

let number =  document.getElementById('value');

let startValue = +localStorage.getItem('num');
startValue += 1;
localStorage.setItem('num', startValue);
number.innerText = startValue;
