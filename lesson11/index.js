// const City = function (name, mista, quantity, materuk) {
//   this.name = name;
//   this.mista = mista;
//   this.quantity = quantity;
//   this.materuk = materuk;

//   this.SayQuantity = function () {
//     console.log(`In this city live ${this.quantity} people`);
//   };
// };

// const london = new City("London", 250, 22226, "europa");
// const lviv = new City("Lviv", 300, 23423536, "europa");
// const odessa = new City("Odessa", 56, 556, "europa");
// london.SayQuantity();
// lviv.SayQuantity();
// odessa.SayQuantity();

// class City {
//   constructor(name, mista, quantity) {
//     this.name = name;
//     this.mista = mista;
//     this.quantity = quantity;
//   }

//   SayQuantity() {
//     console.log(`In this city live ${this.quantity} people`);
//   }
// }

// const london = new City("london", 40, 400);
// london.SayQuantity();

// class Dad {
//   constructor(surname) {
//     this.surname = surname;
//   }
// }

// class Son extends Dad {
//   constructor(surname, name) {
//     super(surname);
//     this.name = name;
//   }
// }

// const ivan = new Son("ivanov", "ivan");

// console.log(ivan);

// перебираючі методи масиву

// forEach

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// for (let i = 0; i < numbers.length; i += 1) {
//   console.log(numbers[i]); //value
//   console.log(i);   //index
//   console.log(numbers); // array
// }

// numbers.forEach(function (value, index, array) {
//   console.log(value); // numbers[i]
//   console.log(index); // i
//   console.log(array); // numbers
// });

// крок 1 - numbers[0]    i=1
// крок 2 - numbers[1]    i=2
// крок 3 - numbers[2]    i=3
// крок 4 - numbers[3]    i=4
// крок 5 - numbers[4]    i=5
// крок 6 - numbers[5]   i=6
// крок 7 - numbers[6]   i=7
// крок 8 - numbers[7]   i=8
// крок 9 - numbers[8]   i=9
// крок 10 - закінчуємо цикл

// метод map

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// numbers.map(function (value, index, array) {
//   console.log(value);
//   console.log(index);
//   console.log(array);
// });

// const newNumbers = numbers.map(function (value) {
//   return value * 2;
// });

// console.log(newNumbers);

// const users = [
//   {
//     name: "ivan",
//     surname: "ivanenko",
//   },
//   {
//     name: "petro",
//     surname: "petrenko",
//   },
//   {
//     name: "vlad",
//     surname: "vladenko",
//   },
//   {
//     name: "victor",
//     surname: "victorenko",
//   },
// ];

// users.map(function (value) {
//   console.log(value.name);
// });
// const usersNames = users.map(function (value) {
//   return value.name;
// });
// const usersSurnames = users.map(function (value) {
//   return value.surname;
// });

// console.log(usersNames);
// console.log(usersSurnames);

// домашнє завдання
// модуль 6 - завдання 1

// const users = [
//   {
//     id: "701b29c3-b35d-4cf1-a5f6-8b12b29a5081",
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     skills: ["ipsum", "lorem"],
//     gender: "male",
//     age: 37,
//   },
//   {
//     id: "7a3cbd18-57a1-4534-8e12-1caad921bda1",
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     skills: ["tempor", "mollit", "commodo", "veniam", "laborum"],
//     gender: "female",
//     age: 34,
//   },
//   {
//     id: "88beb2f3-e4c2-49f3-a0a0-ecf957a95af3",
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     skills: ["nulla", "anim", "proident", "ipsum", "elit"],
//     gender: "male",
//     age: 24,
//   },
//   {
//     id: "249b6175-5c30-44c6-b154-f120923736f5",
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     skills: ["adipisicing", "irure", "velit"],
//     gender: "female",
//     age: 21,
//   },
//   {
//     id: "334f8cb3-eb04-45e6-abf4-4935dd439b70",
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     skills: ["ex", "culpa", "nostrud"],
//     gender: "male",
//     age: 27,
//   },
//   {
//     id: "150b00fb-dd82-427d-9faf-2879ea87c695",
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     skills: ["non", "amet", "ipsum"],
//     gender: "male",
//     age: 38,
//   },
//   {
//     id: "e1bf46ab-7168-491e-925e-f01e21394812",
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     skills: ["lorem", "veniam", "culpa"],
//     gender: "female",
//     age: 39,
//   },
// ];
