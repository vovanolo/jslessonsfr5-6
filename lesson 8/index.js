// завдання
// const user = {
//   name: "Mango",
//   age: 20,
//   hobby: "html",
//   premium: true,
// };

// user.mood = "happy";
// user.hobby = "skydiving";
// user.premium = false;

// Object.keys()  Object.values()  Object.entries()
// const user = {
//   name: "Mango",
//   age: 20,
//   hobby: "html",
//   premium: true,
// };

// name: "Mango",
// age: 20
// hobby: 'html"
// premium: true

// const keys = Object.keys(user);
// for (const key of keys) {
//   // console.log(key);
//   // console.log(user[key]);
//   console.log(`${key} : ${user[key]}`);
// }

// console.log(keys);

// const values = Object.values(user);
// for (const val of values) {
//   console.log(val);
// }
// console.log(values);
// const entries = Object.entries(user);

// console.log(keys);
// console.log(values);
// console.log(entries);

// задача для пітрахунку суми всіх значень обєкта

// const goods = {
//   apple: 10,
//   banana: 20,
//   pineapple: 5,
//   mango: 4,
//   melon: 9,
//   grapes: 23,
// };

// let total = 0;
// const values = Object.values(goods);
// for (const val of values) {
//   total += val;
// }

// console.log(total);

// Оператори spread і rest
// ...  - spread

// const friends = ["milana", "ivan", "petro", "vasyl"];

// const newFriends = [...friends];

// console.log(newFriends);

// console.log(friends === newFriends); //true false

// const a = {
//   x: 1,
//   y: 2,
// };

// const b = {
//   x: 0,
//   z: 4,
// };

// const c = {
//   ...a,
//   ...b,
// };

// Object.assign()
// const c = Object.assign({}, a, b);

// console.log(c);

// const number = [1, 2, 5, 6, 8, 4, 3, 12, 5, 6];
// console.log(Math.max(...number));

// Оператор rest

// const some = function (...args) {
//   console.log(args);
// };

// some(12, 4, 6, 7, 4, 3, 56, 7, 8, 4, 3, 2, 4, 6, 8);

// Деструктуризація

// const user = {
//   name: "Mango",
//   age: 20,
//   hobby: "html",
//   premium: true,
// };

// const { name, age } = user;
// React js
// import { animation, parapalax } from "react";

// console.log(name);
// console.log(age);

// масив обєктів

// const user = {
//   name: "ivan",
//   age: 17,
//   salary: 2000,
// };

// const users = [
//   {
//     name: "ivan",
//     age: 17,
//     salary: 2000,
//   },
//   {
//     name: "petro",
//     age: 22,
//     salary: 1000,
//   },
//   {
//     name: "vlad",
//     age: 20,
//     salary: 100,
//   },
// ];

// console.log(users);
// console.log(users[0]);
// console.log(users[2]);

// for (user of users) {
//   // console.log(user.name);
//   console.log(user.age);
// }
// const countTotalSalary = function (employees) {
//   // let total = 0;
//   // const values = Object.values(employees);
//   // for (const val of values) {
//   //   total += val;
//   // }
//   // return total;
//   // for...in
//   // object[key]
//   // key - ключ
//   // object[key] - значення
//   let total = 0;
//   for (const key in employees) {
//     total += employees[key];
//   }
//   return total;
// };

/*
 * Викличи функції для перевірки працездатності твоєї реалізації.
 */
// console.log(countTotalSalary({})); // 0

// console.log(
//   countTotalSalary({
//     mango: 100,
//     poly: 150,
//     alfred: 80,
//   })
// ); // 330

// console.log(
//   countTotalSalary({
//     kiwi: 200,
//     lux: 50,
//     chelsy: 150,
//   })
// ); // 400

// домашнє завдання
// модуль 3 - завдання 2
//https://github.com/goitacademy/javascript-homework/blob/master/homework-03/README.ua.md
//total = 0
// for in   :   total+=1
