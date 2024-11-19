// #vV9a6584I5
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

function Car(model, manufacturer, year, maxSpeed, engineVolume){
    this.model = model;
    this.manufacturer = manufacturer;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.engineVolume = engineVolume;
    this.drive = function (){
        console.log(`їдемо зі швидкістю ${maxSpeed} кілометрів на годину`);
    }
    this.info = function () {
        for (const item in this) {
            console.log(item, this[item]);
        }
    };
    this.increaseMaxSpeed = function (newSpeed){
        this.maxSpeed = this.maxSpeed + newSpeed;
    }
    this.changeYear = function (newValue){
        this.year = newValue;
    }
    this.addDriver = function (driver){
        this.driver = driver;
    }
}

const car = new Car('Tesla', 'Tesla', 2020, 300, 0);
console.log(car);
car.drive();
car.info();
car.increaseMaxSpeed(200);
console.log(car.maxSpeed);
car.changeYear(2024);
console.log(car.year);
car.addDriver({name: 'Elon', surname: 'Mask'});
console.log(car.driver);

