// #hOL6126
// - створити функцію яка створює ul з трьома елементами li та виводить його через document.write. Текст li задати через аргумент всім однаковий

function ulBuilder(liText) {
    document.write(`<ul>
<li>${liText}</li>
<li>${liText}</li>
<li>${liText}</li>
</ul>  `)
}
ulBuilder('lorem ipsum')