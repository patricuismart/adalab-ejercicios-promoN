"use strict";

const paragraph = document.querySelector(".js_paragraph");

paragraph.addEventListener("mouseover", function addParagraph() {
  paragraph.innerHTML += paragraph.innerHTML;
});

console.log(paragraph.innerHTML);
