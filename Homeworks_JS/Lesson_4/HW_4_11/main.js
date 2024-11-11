// #EKRNVPM
// - створити функцію sum(arr) яка приймає масив чисел, сумує значення елементів масиву та повертає його.
// Приклад sum([1,2,10]) //->13
function sum(arr){
    let sum = 0;
    for (const number of arr) {
        sum = sum + number;
    }
    return sum;
}

document.write(sum([5, 20, 50, -2, 33]));