const square = document.createElement("div");
square.setAttribute("id", "container");
square.setAttribute("class", "wrap")
const grabSquare = document.getElementById("container");



const changeButton = document.createElement("button");
changeButton.setAttribute("id", "buttonOne");
changeButton.innerText = "change it";


document.body.appendChild(changeButton); 
document.body.appendChild(square);

const canvas = document.getElementById("container");

document.getElementById("buttonOne").addEventListener("click", askUser);




function makeRows(rows, cols,) {
    canvas.style.setProperty('--grid-rows', rows);
    canvas.style.setProperty('--grid-cols', cols);
    for ( let c = 0; c < (rows * cols); c++) {
        let cell = document.createElement("div");
        cell.innerText = (c + 1); 
        container.appendChild(cell).className = "grid-item";
        cell.setAttribute("id", "cellS");
        const cellAdds = document.querySelectorAll(".grid-item");
        
        
        
        cellAdds.forEach (cellAdd => {
            cellAdd.addEventListener("mouseover", function () {
                cellAdd.style.backgroundColor = "blue";
            });
            })
        
        cellAdds.forEach (cellAdd => {
            cellAdd.addEventListener("mouseout", function () {
                cellAdd.style.backgroundColor = "white";
            });
            })
        }
            
        }
    

        
        
        
        
    
       


       
     
        
    
    
    


     makeRows(16, 16)



function askUser() { 
    const answer = parseInt(prompt("choose the dimensions of the square grid"));
    const  grabCells = document.querySelectorAll(".grid-item");
    const grabWrap = document.querySelectorAll(".wrap");
   
    
    if ( answer <= 100) { 
        document.querySelectorAll(".grid-item").forEach(e=>e.remove());
        return makeRows(answer, answer);
    }
    }
    
    





function mouseOver(e) {
    const bgColor = 'blue';
   e.target.style.backgroundColor = bgColor;
  
   console.log(this)
   }


function mouseOut(e){ 
    var elements = document.getElementsByClassName("grid-item"); 
    for(var i = 0; i < elements.length; i++) {
        elements[i].style.backgroundColor = "black";}}


        