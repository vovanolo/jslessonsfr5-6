// let input = prompt("Введіть свою країну");
// // .toUpperCase()
// // .toLowerCase()
// input = input.toLowerCase();
// let cost = 0;
// switch (input) {
//   case "китай":
//     cost = 100;
//     break;
//   case "чилі":
//     cost = 250;
//     break;
//   case "австралія":
//     cost = 170;
//     break;
//   case "індія":
//     cost = 80;
//     break;
//   case "ямайка":
//     cost = 120;
//     break;
//   default:
//     alert("У вашій країні доставка недоступна");
// }
// console.log(`Доставка в ${input} буде коштувати ${cost} кредитів`);

// const ADMIN_PASSWORD = "goit";
// let message;

// let input = prompt("Введіть пароль");

// if (input === null) {
//   message = "Скасовано користувачем!";
// } else if (input === ADMIN_PASSWORD) {
//   message = "Ласкаво просимо!";
// } else {
//   message = "Доступ заборонений, невірний пароль!";
// }
// alert(message);

// логічні елементи
// логічне і - &&
// логіне або - ||

// let number = 6;

// if (number > 0 && number < 100) {
//   console.log("Все круто");
// }

// if (number > 10 || number === 5) {
//   console.log("все круто");
// }

// хвилини
// 60хв

// 0-15 - 1 чверть
// 15-30 - 2 чверть
// 30-45 - 3 чверть
// 45-60 - 4 чверть
// let number = 6;
// if (number > 0 && number <= 15) {
//   console.log("1 чверть");
// } else if (number > 15 && number <= 30) {
//   console.log("2 чверть");
// }

// цикли
// while, do while, for

// цикл while

// console.log(1);
// console.log(2);
// console.log(3);

// while(умова){
//   команда
// }

// let a = 1;

// while (a <= 10) {
//   console.log(a);
//   a += 1;
// }
// a = 0
// log 0
// a = 1
// log 1
// a = 2

// do while
// do{
//   команда
// }while(умова)

// let a = 0;
// do {
//   console.log(a);
//   a += 1;
// } while (a <= 10);

// цикл for

// for(змінна, умова, крок){
//   команда
// }

// for (let i = 0; i < 10; i += 1) {
//   console.log(i);
//   if (i === 2) {
//     console.log("ура ми знайшли двійку");
//   }
// }

// 0+1+2+3+5...+10
// let sum = 0;
// for (let i = 0; i < 10; i += 1) {
//   sum += i;
// }
// console.log(sum);

// Масиви
// let ivan = "ivan";
// let petro = "petro";
// const students = ["pavlo", "milana", "denus", "роман", "марко"];
// console.log(students);
// console.log(students[6]);
// students[0] = "ivan";
// console.log(students);
