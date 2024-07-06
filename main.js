const tilesContainer = document.querySelector(".tiles-container");
const colors = [
  "aqua",
  "lightcoral",
  "crimson",
  "blue",
  "dodgerblue",
  "gold",
  "greenyellow",
  "teal",
];
const colorPickList = [...colors, ...colors].sort(
  (a, b) => Math.random() - 0.5
);
const tileCount = colorPickList.length;

let revealedTileCount = 0;
let activeTile = null;
let awaitForCheck = false;

for (let i = 0; i < tileCount; i++) {
  const elem = document.createElement("div");
  elem.classList.add("tile");
  elem.setAttribute("data-color", colorPickList[i]);
  elem.setAttribute("data-revealed", false)
  elem.addEventListener("click", onTileClick);

  tilesContainer.appendChild(elem);
}

function onTileClick(e) {
  const element = e.target;
  const color = e.target.dataset.color;

  if (awaitForCheck || element === activeTile || element.dataset.revealed === "true") {
    return;
  }

  if (!activeTile) {
    activeTile = element;
    element.style.backgroundColor = color;
    return;
  }

  awaitForCheck = true;
  element.style.backgroundColor = color;
  checkColor(element, color);
}

function checkColor(element, color) {
  const selectedColor = activeTile.dataset.color;

  if (color === selectedColor) {
    revealedTileCount += 2;
    element.setAttribute("data-revealed", true);
    activeTile.setAttribute("data-revealed", true);
    checkWinner();
    activeTile = null;
    awaitForCheck = false;
  } else {
    setTimeout(() => {
      activeTile.style.backgroundColor = null;
      element.style.backgroundColor = null;
      activeTile = null;
      awaitForCheck = false;
    }, 1000);
  }

}

function checkWinner(){
    if(tileCount === revealedTileCount){
        alert("You Win, Refresh to Play Again")
    }
}