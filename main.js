"use strict";

const textInput = document.querySelector(".text");
const keyboard = document.querySelector(".keyboard");
const typingContainer = document.querySelector(".typingContainer");
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
textInput.addEventListener('focus',()=>{
  keyboard.style.opacity = "1";
  typingContainer.style.transform = "translateY(0%)";
})
textInput.addEventListener('blur',()=>{
  keyboard.style.opacity = "0";
  typingContainer.style.transform = "translateY(100%)";
})