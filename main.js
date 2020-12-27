"use strict";

const textInput = document.querySelector(".text");
const keyboard = document.querySelector(".keyboard");
const key = document.querySelectorAll(".key");

// textInput.addEventListener("keydown", (event) => {
//   console.log(event.code);
//   console.log(event);
// });
textInput.addEventListener("keydown", (event) => {
  let eventKey = document.querySelector(`[data-key='${event.code}']`);
  if (!eventKey) {
    return;
  }
  eventKey.classList.add("p");
});
textInput.addEventListener("keyup", (event) => {
  let eventKey = document.querySelector(`[data-key='${event.code}']`);
  if (!eventKey) {
    return;
  }
  eventKey.classList.remove("p");
});
