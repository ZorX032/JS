// #2ikXsE2WiKZ
// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

function User (id, name, surname, email, phone){
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}

let users = [
    new User(1, 'Alex', 'Petrov', 'example@example.com', '+380930000001'),
    new User(2, 'Oleg', 'Shevchenko', 'example@example.com', '+380930000002'),
    new User(3, 'Vasya', 'Antonenko', 'example@example.com', '+380930000003'),
    new User(4, 'Igor', 'Kornelyuk', 'example@example.com', '+380930000004'),
    new User(5, 'Irina', 'Bilyk', 'example@example.com', '+380930000005'),
    new User(6, 'Olena', 'Osadcha', 'example@example.com', '+380930000006'),
    new User(7, 'Anton', 'Samulyak', 'example@example.com', '+380930000007'),
    new User(8, 'Sergiy', 'Ignatov', 'example@example.com', '+380930000008'),
    new User(9, 'Maxim', 'Zarichniy', 'example@example.com', '+380930000009'),
    new User(10, 'Vanya', 'Mazepa', 'example@example.com', '+380930000010'),

];

console.log(users.filter(value => value.id % 2 === 0));