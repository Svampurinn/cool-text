"use strict";
window.addEventListener("DOMContentLoaded", start);

function start() {
  const coolText = document.querySelector(".cooltext").textContent;
  document.querySelector(".cooltext").innerHTML = "";
  const coolTextArray = Array.from(coolText);
  coolTextArray.forEach(spanWrap);
}
console.log(start);
function spanWrap(char, index) {
  const spanElement = document.createElement("span");
  if (char === " ") {
    spanElement.innerHTML = `&nbsp;`;
  } else {
    spanElement.innerText = char;
  }
  spanElement.style.display = "inline-block";
  spanElement.className = "char";
  spanElement.style.setProperty("--char-index", `${index}`);
  document.querySelector(".cooltext").append(spanElement);
}
