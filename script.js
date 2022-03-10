"use strict";

// VARIABLE DECLARATION
const container = document.getElementById("container");
const reset = document.getElementById("reset");
const erase = document.getElementById("erase");
const draw = document.getElementById("draw");
let myDivs = [];
let numberOfSquares16 = 256;

// Create a 16x16 grid
function createDiv() {
  const divSquare = document.createElement("div");
  divSquare.className = "square16";
  return divSquare;
}

function divsInArray() {
  for (let i = 0; i < numberOfSquares16; i++) {
    myDivs.push(createDiv());
    container.appendChild(myDivs[i]);
  }
}
divsInArray();

// drawing
container.addEventListener("mouseover", function (e) {
  e.target.classList.add("drawing");
});

// reset button
reset.addEventListener("click", function () {
  for (let i = 0; i < numberOfSquares16; i++) {
    myDivs[i].classList.remove("drawing");
  }
  container.addEventListener("mouseover", function (e) {
    e.target.classList.add("drawing");
  });
});

// draw button
draw.addEventListener("click", function () {
  container.addEventListener("mouseover", function (e) {
    e.target.classList.add("drawing");
  });
});

// erase button
erase.addEventListener("click", function () {
  container.addEventListener("mouseover", function (e) {
    e.target.classList.remove("drawing");
  });
});
