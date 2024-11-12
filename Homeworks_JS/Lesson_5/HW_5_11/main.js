// #EKRNVPM
// - створити функцію sum(arr) яка приймає масив чисел, сумує значення елементів масиву та повертає його.

let sum = (arr) => {
    let sum = 0;
    for (const number of arr) {
        sum = sum + number;
    }
    return sum;
}

console.log(sum([5, 20, 50, -2, 33]));