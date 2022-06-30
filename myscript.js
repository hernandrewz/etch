//PARENT//
const square = document.createElement("div");              //create DIV parent//
square.setAttribute("id", "container");                   //set ID on parent//
square.setAttribute("class", "wrap");                    //set CLASS on parent//
const canvas = document.getElementById("container");    //create VARIABLE to get parent by ID//
const wrapper = document.querySelector(".wrap");       //create VARIABLE to get parent by CLASS//




//BUTTON//
const changeButton = document.createElement("button");     //create button element//
changeButton.innerText = "change it";                     //place text on button//
changeButton.setAttribute("id", "buttonOne");            //set ID on button//
const getButton = document.getElementById("buttonOne");  //create VARIABLE to get button by ID//
const margin = document.createElement("gap");



//APPEND FIRST TWO ELMENTS//
document.body.appendChild(changeButton);            //APPEND button to document BODY with 'create elment'  via VARIABLE 'changeButton'//
document.body.appendChild(square);                 //APPEND parent to document BODY with 'create element' via VARIABLE 'square'//

//SET FUNCTION ON BUTTON//
document.getElementById("buttonOne").addEventListener("click", askUser); //add EVENTLISTENER for 'click' with ID 'buttonOne' via VARIABLE 'getButton'//




function randomBgColor() {
    const x = Math.floor(Math.random()* 256);
    const y = Math.floor(Math.random()* 256);
    const z = Math.floor(Math.random()* 256); 
    const bgColor = "rgb(" + x + "," + y + "," + z + ")";
    console.log(bgColor); 
    return bgColor;
    
}
// WRITE FUNCTION TO DRAW CHILD ELEMENT GRID //
function makeRows(rows, cols,) {                                        // name FUNCTION 'makeRows' //
    square.style.setProperty('--grid-rows', rows);                     //set PARENT STYLE property of CSS variable rows//
    square.style.setProperty('--grid-cols', cols);                    //set PARENT STYLE property of CSS variable columns//
    
    for ( let c = 0; c < (rows * cols); c++) {                        //set LOOP to cycle product of ROW and COLUMN dimensions//
        let cell = document.createElement("div");                    //for Each loop set VARIABLE cell to create a corresponding CHILD DIV//  
        //cell.innerText = (c + 1); 
        container.appendChild(cell).className = "grid-item";           
        cell.setAttribute("id", "smallCell");
        
        
        
        
        //wrapper.addEventListener("mouseover", event =>
        //event.target.style.opacity -= "-0.0004");
        console.log(this);
        


    
       

    }
        

        const cellAdds = document.querySelectorAll(".grid-item");

    
        
        cellAdds.forEach (cellAdd => {
          cellAdd.addEventListener("mouseover", function () {
               cellAdd.style.backgroundColor = "blue";
              cellAdd.style.opacity -= "-0.1";
              //document.getElementById("smallCell").style.border = ""//
                
                
                
           });
            })
    }    

   
    
    
        
           
    
    

        //cellAdds.forEach //(cellAdd => {
            
        //cellAdd.addEventListener("mouseout", function () {
         //       cellAdd.style.backgroundColor = "white";
           // });
            //})
        
            
        


        //function cellDraw(){
            //const cellAdds = document.querySelectorAll(".grid-item");
           // for (var i=0; i < cellAdds.length; i++) {
          //      container.appendChild(cellAdds[i]);}}

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




    
    





