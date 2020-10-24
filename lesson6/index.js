// const calculateEngravingPrice = function (message, pricePerWord) {
//   let numberOfWords = 0;
//   for (let i = 0; i < message.length; i += 1) {
//     if (message[i] === " ") {
//       numberOfWords += 1;
//     }
//   }
//   numberOfWords += 1;
//   return numberOfWords * pricePerWord;
// };

// const calculateEngravingPrice = function (message, pricePerWord) {
//   let word = message.split(" ");
//   return word.length * pricePerWord;
// };

// /*
//  * Виклич функції для перевірки працездатності твоєї реалізації.
//  */
// console.log(
//   calculateEngravingPrice(
//     "Proin sociis natoque et magnis parturient montes mus",
//     10
//   )
// ); // 80

// console.log(
//   calculateEngravingPrice(
//     "Proin sociis natoque et magnis parturient montes mus",
//     20
//   )
// ); // 160

// console.log(
//   calculateEngravingPrice("Donec orci lectus aliquam est magnis", 40)
// ); // 240

// console.log(
//   calculateEngravingPrice("Donec orci lectus aliquam est magnis", 20)
// ); // 120

// повторення

// let a = 2;

// let x = 1 + (a *= 2);
// a *= 2;
// a *= 2;

// console.log(a);

// console.log("" + 1 + 0); //10
// console.log("" - 1 + 0); // -1
// true - 1
// false - 0
// console.log(true + false); // 1
// console.log(6 / "3"); // 2
// console.log("2" * "3"); // 6
// console.log(4 + 5 + "px"); // 9px
// console.log("px" + 4 + 5); // px45
// console.log("4" - 2); // 2
// console.log("4px" - 2); // NaN (Not a Number)
// console.log(7 / 0); //
// console.log("  -9  " + 5); //   -9  5
// console.log("  -9  " - 5); // -14
// console.log(null + 1); // 1
// console.log(undefined + 1); // NaN

// let a = prompt("введіть перше число");
// let b = prompt("введіть друге число");
// let a1 = parseInt(a);
// let b1 = parseInt(b);

// console.log(a1 + b1);

// функції

// const helloWorld = function () {
//   console.log("Hello world");
// };

// helloWorld();

// стрілкові функції

// const helloWorld = () => {
//   console.log("hello world");
// };
// helloWorld();

// const sum = function (a, b) {
//   console.log(a + b);
// };
// sum(2, 3);
// sum(5, 6);

// const sum = (a, b) => {
//   console.log(a + b);
// };

// sum(2, 3);
// sum(5, 6);

// let friends = ["ivan", "petro"];

// console.log(friends);
// let friends = function () {
//   console.log(friends);
// };
// friends();
// let card = friends;
// console.log(card);
// функцію яка буде виводити друзів в консоль
// const card = function (array) {
//   console.log(array);
// };
// // card(friends);
// card(["vlad", "yama", "a4"]);
// for (const friend of friends) {
//   console.log(friend);
// }

// const name = function (array) {
//   for (const friend of array) {
//     console.log(friend);
//   }
// };

// name(friends);

// const findBestFriend = function (array) {
//   for (const bestFriend of array) {
//     if (bestFriend === "ivan") {
//       console.log(bestFriend);
//     }
//   }
// };
// let friends = ["petro", "vasyl", "ivan", "sviat"];

// findBestFriend(friends);

// const helloWorld = function () {
//   console.log("hello world");
// };

// const goodbye = function () {
//   console.log("goodbye");
// };

// let input = prompt("say hello");

// if (input === "hello") {
//   helloWorld();
// } else {
//   goodbye();
// }

// const sum = function (a, b, c) {
//   console.log(a + b + c);
// };
// sum(1, 2, 3);

// const sum = function () {
//   // console.log(arguments);
//   let total = 0;
//   for (const argument of arguments) {
//     total += argument;
//   }
//   console.log(total);
// };

// sum(1, 2, 3, 5, 6, 7, 8, 9, 6, 5, 3, 5, 6, 7, 3, 2,24,535,6,463,43634,46346,4265,1354,1535);

// slice(0,40)

// const formatString = function (string) {
//   if (string.length > 40) {
//     return string.slice(0, 40) + "...";
//   } else {
//     return string;
//   }
// };
// const formatString = function (string) {
//   // if (string.length > 40) {
//   //   return string.slice(0, 40) + "...";
//   // } else {
//   //   return string;
//   // }
//   // let result = string.length > 40 ? string.slice(0, 40) + "..." : string;
//   // return result;
//   return string.length > 40 ? string.slice(0, 40) + "..." : string;
// };

// /*
//  * Виклич функції для перевірки працездатності твоєї реалізації.
//  */
// console.log(formatString("Curabitur ligula sapien, tincidunt non."));
// // повернеться оригінальний рядок

// console.log(formatString("Vestibulum facilisis, purus nec pulvinar iaculis."));
// // повернеться форматований рядок

// console.log(formatString("Curabitur ligula sapien."));
// // повернеться оригінальний рядок

// console.log(
//   formatString(
//     "Nunc sed turpis. Curabitur a felis in nunc fringilla tristique."
//   )
// );
//
// домашнє завдання
// 2 модуль завдання 3
// PS: в завданні треба знайти найдовше слово(так написано в умові!!!!!!!!!!!!!!!!!!!!!!!!!!!!!)
// https://github.com/goitacademy/javascript-homework/blob/master/homework-02/README.ua.md
