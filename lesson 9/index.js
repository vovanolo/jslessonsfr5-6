// const countProps = function (obj) {
//   // let total = 0;
//   // // const keys = Object.keys(obj);
//   // for (const key in obj) {
//   //   total += 1;
//   // }
//   // return total;
//   const keys = Object.keys(obj);
//   return keys.length;
// };

// /*
//  * Викличи функції для перевірки працездатності твоєї реалізації.
//  */
// console.log(countProps({})); // 0

// console.log(countProps({ name: "Mango", age: 2 })); // 2

// console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 })); // 3

// const findBestEmployee = function (employees) {
//   let tasksNumber = 0;
//   let result = "";
//   for (const key in employees) {
//     if (employees[key] > tasksNumber) {
//       tasksNumber = employees[key];
//       result = key;
//     }
//   }
//   return result;
// };

// /*
//  * Викличи функції для перевірки працездатності твоєї реалізації.
//  */
// console.log(
//   findBestEmployee({
//     ann: 29,
//     david: 35,
//     helen: 1,
//     lorence: 99,
//   })
// ); // lorence

// console.log(
//   findBestEmployee({
//     poly: 12,
//     mango: 17,
//     ajax: 4,
//   })
// ); // mango

// console.log(
//   findBestEmployee({
//     lux: 147,
//     david: 21,
//     kiwi: 19,
//     chelsy: 38,
//   })
// ); // lux

// const products = [
//   { name: "Радар", price: 1300, quantity: 4 },
//   { name: "Сканер", price: 2700, quantity: 3 },
//   { name: "Дроїд", price: 400, quantity: 7 },
//   { name: "Захоплення", price: 1200, quantity: 2 },
// ];

// // console.log(products[0].name);
// // console.log(products[0]["name"]);

// const getAllPropValues = function (arr, prop) {
//   let total = [];
//   for (const object of arr) {
//     if (object[prop] === undefined) {
//       return [];
//     }
//     total.push(object[prop]);
//   }
//   return total;
// };

// /*
//  * Викличи функції для перевірки працездатності твоєї реалізації.
//  */
// console.log(getAllPropValues(products, "name")); // ['Радар', 'Сканер', 'Дроїд', 'Захоплення']

// console.log(getAllPropValues(products, "quantity")); // [4, 3, 7, 2]

// console.log(getAllPropValues(products, "category")); // []

// const products = [
//   { name: "Радар", price: 1300, quantity: 4 },
//   { name: "Сканер", price: 2700, quantity: 3 },
//   { name: "Дроїд", price: 400, quantity: 7 },
//   { name: "Захоплення", price: 1200, quantity: 2 },
// ];

// const calculateTotalPrice = function (allProducts, productName) {
//   let total = 0;
//   for (const object of allProducts) {
//     if (object.name === productName) {
//       total = object.price * object.quantity;
//     }
//   }
//   return total;
// };

// /*
//  * Викличи функції для перевірки працездатності твоєї реалізації.
//  */
// console.log(calculateTotalPrice(products, "Радар")); // 5200

// console.log(calculateTotalPrice(products, "Дроїд")); // 2800

// this
// const user = {
//   name: "ivan",
//   getName() {
//     console.log(this.name);
//   },
// };

// user.getName();

// const user = {
//   name: "vasyl",
//   changeName(newName) {
//     this.name = newName;
//   },
// };

// user.changeName("Petro");

// console.log(user);

// const user = {
//   name: "ivan",
//   friends: ["milana", "andrew", "pavlo"],
// };

// console.log(user);

// домашнє завдання
// модуль 4 - завдання 1
//https://github.com/goitacademy/javascript-homework/blob/master/homework-04/README.ua.md
