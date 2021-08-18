"use strict";

const button = document.querySelector(".js_click");
const userName = document.querySelector(".js_name");
const hiUser = document.querySelector(".js_txt");

button.addEventListener("click", function hi() {
  console.log(`Hola ${userName.value}`);
  return (hiUser.innerHTML = `Hola ${userName.value}`);
});
