// #RbQGnH5DuC
// В localStorage зберігаються масиви. Вам потрібно зробити функцію, які дістає потрібний вам масив з localStorage та додає в нього об'єкт
// сигнатура функції -
// addToLocalStorage(arrayName:string,objToAdd:any{}):void


//!! Це не перевіряйте, я його скопіював з вирішення



function addToLocalStorage(arrayName, objToAdd) {    // створюємо функцію
    const lsItem = localStorage.getItem(arrayName); //отримуємо дані з локального сховища
    if (!lsItem) { //якщо не існує, то помилка
        throw new Error('there is no such array');
    }

    const array = JSON.parse(lsItem);  // якщо масив є то парсимо його
    if (typeof objToAdd === 'object') { //якщо там зберігаються об'єкти
        array.push(objToAdd); // то пушимо об'єкт, у іншому випадку нічого не буде виконуватись
    }
    localStorage.setItem(arrayName, JSON.stringify(array)); // предаємо масив в локальне сховище, перед цим перетворюємо його на JSON

}
