const square = document.createElement("div");

square.setAttribute("id", "container")

document.body.appendChild(square);

const canvas = document.getElementById("container");

function makeRows(rows, cols,) {
    canvas.style.setProperty('--grid-rows', rows);
    canvas.style.setProperty('--grid-cols', cols);
    for ( c = 0; c < (rows * cols); c++) {
        let cell = document.createElement("div");
        cell.innerText = (c + 1); 
        container.appendChild(cell).className = "grid-item";
    }


}

makeRows(16, 16);