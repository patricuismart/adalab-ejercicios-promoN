"use strict";

const adalaber1 = {
  name: "Susana",
  age: 34,
  profession: "periodista",
};
console.log(
  `Mi nombre es ${adalaber1.name} , tengo ${adalaber1.age} años y soy ${adalaber1.profession}`
);

const adalaber2 = {
  name: "Lolita",
  age: 55,
  profession: "trapecista",
};
const userInfo = document.querySelector(".js_user1");
userInfo.innerHTML = `Mi nombre es ${adalaber1.name} , tengo ${adalaber1.age} años y soy ${adalaber1.profession}`;

const userInfo2 = document.querySelector(".js_user2");
userInfo2.innerHTML = `Mi nombre es ${adalaber2.name} , tengo ${adalaber2.age} años y soy ${adalaber2.profession}`;
