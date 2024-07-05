const tilesContainer = document.querySelector(".tiles-container");
const colors = ["aqua", "lightcoral", "crimson", "blue", "dodgerblue", "gold", "greenyellow", "teal"];
const colorPickList = [...colors, ...colors].sort((a, b) => Math.random() - 0.5);
const tileCount = colorPickList.length;


let revealedTileCount = null;
let activeTile = null;
let awaitForCheck = false;

for(let i = 0; i < tileCount; i++){
    const elem = document.createElement("div");
    elem.classList.add("tile");

    tilesContainer.appendChild(elem);
}