"use strict";

const container = document.querySelector(".js_container");
//debugger;
function changeColor() {
  if (window.scrollY > 150) {
    container.classList.add("purple");
  }
}

window.addEventListener("scroll", changeColor);
console.log(changeColor);
