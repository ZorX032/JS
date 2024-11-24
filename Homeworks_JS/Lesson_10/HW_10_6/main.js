// #Jg0gPO00
// створити конвертор ваги з кг в фунти. данні заповнюються через інпут. При введенні даних обрахунок стається миттєво, без натискань додаткових кнопок
const input = document.getElementById('value');
const result = document.getElementById('result');


input.oninput = function (){
    result.innerText = +input.value * 2.2;
}

