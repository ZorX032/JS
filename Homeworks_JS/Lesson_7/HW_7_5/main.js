// #8abtVjRv
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

class Client{
    constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}

let clients = [
    new Client(23, 'Alex', 'Petrov', 'example@example.com', '+380930000001',[{title:'headphones', price:3000}, {title: 'phone', price: 40000}]),
    new Client(12, 'Oleg', 'Shevchenko', 'example@example.com', '+380930000002',[{title:'table', price:4000}, {title: 'PC', price: 80000}]),
    new Client(2, 'Vasya', 'Antonenko', 'example@example.com', '+380930000003',[{title:'tv', price:15000}, {title: 'tv-box', price: 2000}]),
    new Client(55, 'Igor', 'Kornelyuk', 'example@example.com', '+380930000004',[{title:'helmet', price:25000}]),
    new Client(85, 'Irina', 'Bilyk', 'example@example.com', '+380930000005',[{title:'shower-box', price:30000}]),
    new Client(63, 'Olena', 'Osadcha', 'example@example.com', '+380930000006',[{title:'bike', price:123000}, {title: 'helmet', price: 25000}]),
    new Client(71, 'Anton', 'Samulyak', 'example@example.com', '+380930000007',[{title:'car', price:600000}, {title: 'options', price: 25000}]),
    new Client(20, 'Sergiy', 'Ignatov', 'example@example.com', '+380930000008',[{title:'vr', price:45000}]),
    new Client(34, 'Maxim', 'Zarichniy', 'example@example.com', '+380930000009',[{title:'microphone', price:12000}]),
    new Client(10, 'Vanya', 'Mazepa', 'example@example.com', '+380930000010',[{title:'monitor', price:23000}, {title: 'keyboard', price: 5000}]),
];

console.log(clients.sort((a, b) => a.order.length - b.order.length));