// const account = {
//   owner: "Mango",
//   balance: 24000,
//   discount: 0.1,
//   orders: ["order-1", "order-2", "order-3"],
//   changeDiscount(value) {
//     this.discount = value;
//   },
//   showOrders() {
//     return this.orders;
//   },
//   addOrder(cost, order) {
//     this.balance -= cost;
//     this.orders.push(order);
//   },
// };

// account.changeDiscount(0.15);
// console.log(account.discount); // 0.15

// console.table(account.showOrders()); // ['order-1', 'order-2', 'order-3']

// account.addOrder(5000, "order-4");
// console.log(account.balance); // 19000
// console.table(account.showOrders()); // ['order-1', 'order-2', 'order-3', 'order-4']

// let a = 10;

// const number = function (a) {
//   console.log(a);
// };

// const callBack = function (func) {
//   const message = "hello";
//   func(message);
// };

// callBack(number);

// let a = 10;

// const callBack = function (func) {
//   const message = "hello";
//   func(message);
// };

// callBack(function (message) {
//   console.log(message);
// });

// forEach(function(){

// })

// console.log(this);

// Всі конструктори називати з великої букви

// const Hello = function(){}

// const Student = function (name, surname, age) {
//   this.name = name;
//   this.surname = surname;
//   this.age = age;

//   this.sayHello = function () {
//     console.log(`hello ${this.name}`);
//   };
// };

// const ivan = new Student("Ivan", "Ivanov", 25);

// ivan.sayHello();

// const petro = new Student("Petro", "Petrov", 35);
// petro.sayHello();

// console.log(ivan);
// console.log(petro);

// Домашнє завдання
// Зробити конструктор City який буде створювати імя міста, кількість жителів(quantity), материк
// створити функцію в конструкторі яка буде виводити кількість жителів міста
// створити за допомогою конструктора три обєкти London, Lviv, Odessa
