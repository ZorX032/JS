// #zg6Fifnqig
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку


function Cinderella (name, age, footSize){
    this.name = name;
    this.age = age;
    this.footSize = footSize;
}

let cinderellas = [
    new Cinderella('April', 33, 35),
    new Cinderella('Anna', 25, 38),
    new Cinderella('Liza', 20, 34),
    new Cinderella('Astrid', 19, 41),
    new Cinderella('Seylor', 28, 43),
    new Cinderella('Sara', 22, 40),
    new Cinderella('Ashly', 18, 33),
    new Cinderella('Kira', 21, 37),
    new Cinderella('Roksi', 24, 42),
    new Cinderella('Juls', 27, 44)
];

class Prince{
    constructor(name, age, foundedFootSize) {
        this.name = name;
        this.age = age;
        this.foundedFootSize = foundedFootSize;
    }
}

let prince = new Prince('Arnold', 23, 37);

for (const cinderella of cinderellas) {
    if(cinderella.footSize === prince.foundedFootSize){
        document.write(`${prince.name} знайшов туфельку ${cinderella.name}`);
    }
}

let findCinderella = cinderellas.find(cinderella => cinderella.footSize === prince.foundedFootSize);




