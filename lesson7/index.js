// const findLongestWord = function (string) {
//   let str = string.split(" ");
//   let longest = 0;
//   let word = null;
//   for (let i = 0; i < str.length; i += 1) {
//     if (longest < str[i].length) {
//       longest = str[i].length;
//       word = str[i];
//     }
//   }
//   return word;
// };

// /*
//  * Виклич функції для перевірки працездатності твоєї реалізації.
//  */
// console.log(findLongestWord("The quick brown fox jumped over the lazy dog")); // 'jumped'

// console.log(findLongestWord("Google do a roll")); // 'Google'

// console.log(findLongestWord("May the force be with you")); // 'force'

// function checkAge(age) {
//   if (age > 18) {
//     return true;
//   } else {
//     return false;
//   }
// }

// function checkAge(age) {
//   if (age > 18) {
//     return true;
//   }

//   return false;
// }

// console.log(checkAge(17));

// написати функцію яка шукає менше число, функція викликається ось так min(a,b)
// min(2,4)
// min(255, 400)

// function min(a, b) {
//   // if (a < b) {
//   //   return a;
//   // } else {
//   //   return b;
//   // }
//   // let result = a < b ? a : b;
//   // return result;
//   return a < b ? a : b;
// }

// console.log(min(1000, 20));

// Обєкти
// const friends = [.......];
// const friend = {}
// const hotel = {
//   name: "King hotel",
//   stars: 5,
//   capacity: 100,
// };

// console.log(hotel);
// friends[3]
// hotel.name
// console.log(hotel.name);
// console.log(hotel.stars);
// console.log(hotel.capacity);
// console.log(hotel["name"]);
// console.log(hotel["stars"]);

// hotel.name = "Grand Hotel";

// hotel["stars"] = 10;

// hotel.adress = "Main Street";
// hotel["manager"] = "ivan popovych";

// hotel.name = "";
// hotel.name = null;
// delete
// delete hotel.name;
// delete hotel["stars"];
// hotel.personal = "200";

// console.log(hotel.personal);

// методи або функції обєкта
// const hotel = {
//   name: "King hotel",
//   stars: 5,
//   capacity: 100,

// welcome: function () {
//   console.log("Ласкаво просимо");
// }, застарілий варіант !!!!!!!!!

// welcome() {
//   console.log("Ласкаво просимо");
// },
// };

// hotel.welcome = function () {
//   console.log("Ласкаво просимо");
// };

// hotel.welcome();

// const hotel = {
//   name: "King hotel",
//   stars: 5,
//   capacity: 100,

//   showName() {
//     console.log(this.name);
//   },

//   changeCapacity(value) {
//     this.capacity = value;
//   },
// };

// // hotel.showName();
// hotel.changeCapacity(101);

// console.log(hotel);
// for ( const arr of Array)

// const friends = ["ivan", "petro", "nadia"];
// for (const friend of friends) {
//   console.log(friend);
// }

// цикли обєкту for...in

// const hotel = {
//   name: "King hotel",
//   stars: 5,
//   capacity: 100,
// };

// for (const i in hotel) {
//   console.log(i);
// }
// for (const i in hotel) {
//   console.log(hotel[i]);
// }
// const hotel = {}

// домашнє завдання
// створити пустий обєкт з назвою user
// добавити властивість name із значенням John
// добавити властивість surname із значенням Smith
// змінити значення name на Pete
// Видалити name з обєкту
// створити функцію в обєкті яка буде міняти name нашого обєкту
