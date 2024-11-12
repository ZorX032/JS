// #0Kxco1edSN
// - створити функцію яка створює ul з  елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл) та виводить його через document.write

let ulBuilder =(liText, liCount) =>{

    document.write(`<ul>`);
        for (let i = 0; i < liCount; i++) {
            document.write(`
            <li>${liText}</li>`);
        }
    document.write(`</ul>`);
}
ulBuilder('lorem ipsum', 5);