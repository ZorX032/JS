// #pghbnSB
// - створити функцію яка повертає найменьше число з масиву
function minValue(arr) {
    let min = arr[0];
    for (const number of arr) {
        if (number < min) {
            min = number;
        }
    }
    return min;
}

document.write(minValue([5, 8, 100, 2, -3, 55, 950, -120, 0]));