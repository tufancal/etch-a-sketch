"use strict";

// VARIABLE DECLARATION
const container = document.getElementById("container");

// Create a 16x16 grid

function createDiv() {
  const divSquare = document.createElement("div");
  divSquare.className = "square16";
  return divSquare;
}

function divsInArray() {
  let myDivs = [];
  let numberOfSquares = 16;

  for (let i = 0; i < numberOfSquares; i++) {
    myDivs.push(createDiv());
    container.appendChild(myDivs[i]);
  }
}

divsInArray();
