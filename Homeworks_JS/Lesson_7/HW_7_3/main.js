// #pOeHKct
// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

function User (id, name, surname, email, phone){
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}

let users = [
    new User(23, 'Alex', 'Petrov', 'example@example.com', '+380930000001'),
    new User(12, 'Oleg', 'Shevchenko', 'example@example.com', '+380930000002'),
    new User(2, 'Vasya', 'Antonenko', 'example@example.com', '+380930000003'),
    new User(55, 'Igor', 'Kornelyuk', 'example@example.com', '+380930000004'),
    new User(85, 'Irina', 'Bilyk', 'example@example.com', '+380930000005'),
    new User(63, 'Olena', 'Osadcha', 'example@example.com', '+380930000006'),
    new User(71, 'Anton', 'Samulyak', 'example@example.com', '+380930000007'),
    new User(20, 'Sergiy', 'Ignatov', 'example@example.com', '+380930000008'),
    new User(34, 'Maxim', 'Zarichniy', 'example@example.com', '+380930000009'),
    new User(10, 'Vanya', 'Mazepa', 'example@example.com', '+380930000010'),
];

let sortUsers = users.sort((a, b) => a.id - b.id);
console.log(sortUsers);