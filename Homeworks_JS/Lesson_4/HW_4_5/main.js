// #59g0IsA
// - створити функцію яка створює параграф з текстом та виводить його через document.write. Текст задати через аргумент

function paragraphGeneration (text){
    document.write(`<p>${text}</p>`);
}
paragraphGeneration('lorem ipsum')