"use strict";

// VARIABLE DECLARATION
const container = document.getElementById("container");
const reset = document.getElementById("reset");
const erase = document.getElementById("erase");
const draw = document.getElementById("draw");
const rgb = document.getElementById("rgb");
const grid16 = document.getElementById("16");
const grid32 = document.getElementById("32");
const grid64 = document.getElementById("64");
let myDivs = [];
let numberOfSquares = 256;

// Create a 16x16 grid
function createDiv() {
  const divSquare = document.createElement("div");
  divSquare.className = "square";
  return divSquare;
}

function divsInArray() {
  for (let i = 0; i < numberOfSquares; i++) {
    myDivs.push(createDiv());
    container.appendChild(myDivs[i]);
  }
}

//creates the Grid
divsInArray();

// 16x16 GRID BUTTON
grid16.addEventListener("click", function () {
  for (let i = 256; i < numberOfSquares; i++) {
    myDivs[i].style.backgroundColor = ""; // standard value, so RGB gets resetted
    container.removeChild(myDivs[i]);
  }
  numberOfSquares = 256;
  for (let i = 0; i < numberOfSquares; i++) {
    myDivs[i].style.backgroundColor = ""; // standard value, so RGB gets resetted
    myDivs[i].classList.remove("drawing");
    myDivs[i].style.width = "30px";
    myDivs[i].style.height = "30px";
  }
  container.addEventListener("mouseover", function (e) {
    e.target.classList.add("drawing");
  });
});

// 32x32 GRID BUTTON
grid32.addEventListener("click", function () {
  for (let i = 256; i < numberOfSquares; i++) {
    container.removeChild(myDivs[i]);
  }
  numberOfSquares = 1024;
  for (let i = 0; i < numberOfSquares; i++) {
    myDivs[i].style.backgroundColor = ""; // standard value, so RGB gets resetted
    myDivs[i].classList.remove("drawing");
    myDivs.push(createDiv());
    container.appendChild(myDivs[i]);
    myDivs[i].style.width = "15px";
    myDivs[i].style.height = "15px";
  }
  container.addEventListener("mouseover", function (e) {
    e.target.classList.add("drawing");
  });
});

// 64x64GRID BUTTON
grid64.addEventListener("click", function () {
  numberOfSquares = 4096;
  for (let i = 0; i < numberOfSquares; i++) {
    myDivs[i].style.backgroundColor = ""; // standard value, so RGB gets resetted
    myDivs[i].classList.remove("drawing");
    myDivs.push(createDiv());
    container.appendChild(myDivs[i]);
    myDivs[i].style.width = "7.5px";
    myDivs[i].style.height = "7.5px";
  }
  container.addEventListener("mouseover", function (e) {
    e.target.classList.add("drawing");
  });
});

// drawing
container.addEventListener("mouseover", function (e) {
  e.target.classList.add("drawing");
});

// reset button
reset.addEventListener("click", function () {
  for (let i = 0; i < numberOfSquares; i++) {
    myDivs[i].style.backgroundColor = ""; // standard value, so RGB gets resetted
    myDivs[i].classList.remove("drawing");
  }
  container.addEventListener("mouseover", function (e) {
    e.target.classList.add("drawing");
  });
});

// draw button
draw.addEventListener("click", function () {
  container.addEventListener("mouseover", function (e) {
    e.target.style.backgroundColor = ""; // resets RGB VALUE
    e.target.classList.add("drawing");
  });
});

// erase button
erase.addEventListener("click", function () {
  container.addEventListener("mouseover", function (e) {
    e.target.style.backgroundColor = ""; // resets RGB VALUE
    e.target.classList.remove("drawing");
  });
});

// rgb button
rgb.addEventListener("click", function () {
  container.addEventListener("mouseover", function (e) {
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);
    // e.target.classList.add("drawing");
    e.target.style.backgroundColor =
      "rgb(" + red + "," + green + ", " + blue + ")";
  });
});
