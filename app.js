const container = document.getElementById("container");

window.onload = function() {
    makeRows(16,16);
  };

// 先做一個16x16，可以畫上隨機顏色的白板
function makeRows(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    cell.addEventListener('mouseover', changeColor);
    container.appendChild(cell).className = "grid-item";
   };
};

// 設定隨機顏色
function changeColor(e) {
   const a = Math.floor(Math.random() * 256);
   const b = Math.floor(Math.random() * 256);
   const c = Math.floor(Math.random() * 256);
   e.target.style.backgroundColor = `rgb(${a}, ${b}, ${c})`;
   console.log(e);
};