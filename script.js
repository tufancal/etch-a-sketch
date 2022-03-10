"use strict";

// VARIABLE DECLARATION
const container = document.getElementById("container");
let myDivs = [];
let numberOfSquares = 256;

// Create a 16x16 grid
function createDiv() {
  const divSquare = document.createElement("div");
  divSquare.className = "square16";
  return divSquare;
}

function divsInArray() {
  for (let i = 0; i < numberOfSquares; i++) {
    myDivs.push(createDiv());
    container.appendChild(myDivs[i]);
  }
}
divsInArray();

// drawing
container.addEventListener("mouseover", function (e) {
  e.target.classList.add("drawing");
});
