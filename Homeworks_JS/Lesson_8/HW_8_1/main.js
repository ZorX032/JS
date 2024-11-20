// #AiN5CoUQ
// Створити функцію, яка робить глибоку копію об'єкту.
// Додати перевірки на undefined, null, NaN.
//     Подумати і реалізувати логіку, в якій кінцевий об'єкт буде мати функції,які в нього були до цього моменту.

let user = {
    name: 'Alex',
    age: 32,
    skills: ['html', 'css', 'js'],
    greeting() {
        console.log('Hi!');
    },
};


function objectCloner(object){
    if(object){
        let functions = [];
        for (const key in object) {
            if(typeof object[key] === 'function'){
                let cloneFunction =  object[key].bind({});
                functions.push({cloneFunction, key});
            }
        }
        console.log(functions);
        const clone = JSON.stringify(object);
        const parse = JSON.parse(clone);
        for (const func of functions) {
            cloneObj[func.key] = func.cloneFunction;

        }

        return parse;
    }
    throw new Error('Помилка');
}

objectCloner(user);
