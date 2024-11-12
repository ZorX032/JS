// #gEFoxMMO
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві),
// та будує для них список (ul li) та виводить його через document.write



let arrBuilder = (arrayPrimitive) =>{
    document.write(`<ul>`);
    for (let item of arrayPrimitive) {
        document.write(`<li>${item}</li>`);
    }
    document.write(`</ul>`);
}

arrBuilder([2, 'lorem', true, 45, 'afjapksf', 4654, false]);