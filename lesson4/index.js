// const credits = 23580;
// const pricePerDroid = 3000;

// let numberOfDroids = prompt("Введіть кількість дроїдів");
// let totalPrice = pricePerDroid * numberOfDroids;

// if (numberOfDroids === null) {
//   console.log("Скасовано користувачем");
// } else if (totalPrice > credits) {
//   console.log("недостатньо коштів на рахунку");
// } else {
//   console.log(
//     `Ви купили ${numberOfDroids} дроїдів, на рахунку залишилося ${
//       credits - totalPrice
//     } кредитів.`
//   );
// }

// let result;
// if (a < 0) {
//   result = "мало";
// } else {
//   result = "багато";
// }

// let result = a < 0 ? "мало" : "багато";
// let result = умова ? результат : результат

// масиви
// const friends = ["ivan", "petro", "sviat", "milana", "pavlo", "denys", "roman"];
// console.log(friends[2]);
// console.log(friends.length);
// console.log(friends[0]);
// console.log(friends[1]);
// console.log(friends[2]);

// for (let i = 0; i < friends.length; i += 1) {
//   // console.log(friends[i]);
//   if (friends[i] === "milana") {
//     console.log("я знайшов мілану");
//     break;
//   }
// }

// for of

// for(змінна of масив){
//   команда
// }

// for (const friend of friends) {
//   // console.log(friend);
//   if (friend === "milana") {
//     console.log("я знайшов найкращого друга");
//     break;
//   }
// }

// методи масиву

// split join
// let message = "welcome to goiteens";
// console.log(message.split(" "));
// console.log(message.split(""));
// const message = ["welcome", "to", "goitees"];
// console.log(message.join(" "));
// console.log(message.join(","));
// console.log(message.join("-"));

// indexOf includes
// const friends = ["ivan", "petro", "sviat", "milana", "pavlo", "denys", "roman"];
// console.log(friends.indexOf("vasyl"));
// console.log(friends.includes("pavlo"));
// console.log(friends.includes("vasyl"));

// push pop
// const friends = ["ivan", "petro", "sviat", "milana", "pavlo", "denys", "roman"];
// friends.push("vlad");
// console.log(friends);
// friends.pop();
// console.log(friends);

// shift unshift
// const friends = ["ivan", "petro", "sviat", "milana", "pavlo", "denys", "roman"];
// friends.unshift("vlad");
// console.log(friends);
// friends.shift();
// console.log(friends);

//slice
// const friends = ["ivan", "petro", "sviat", "milana", "pavlo", "denys", "roman"];
// console.log(friends.slice(1, 3));
// console.log(friends.slice(1));

// splice

// const friends = ["ivan", "petro", "sviat", "milana", "pavlo", "denys", "roman"];
// console.log(friends.splice(0, 3));
// friends.splice(2, 0, "vlad", "vova");
// console.log(friends);
// friends.splice(1, 1, "vlad");
// console.log(friends);

// concat
// const friends = ["ivan", "petro", "sviat", "milana", "pavlo", "denys", "roman"];
// const newFriends = ["vova", "vasyl", "vlad"];

// const allFriends = friends.concat(newFriends);

// console.log(friends);
// console.log(newFriends);
// console.log(allFriends);

// Функції
// const message = function(){

// }

// function message(){

// }

// const sayHello = function () {
//   console.log("hello world");
// };

// sayHello();

// const message = function (a) {
//   console.log(a);
// };
// message("hello world");

// const multiply = function (a, b, c) {
//   console.log(a * b * c);
// };

// multiply(3, 4, 5);
