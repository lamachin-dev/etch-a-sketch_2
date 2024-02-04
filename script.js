
const createGrid = function(){
    const gridContainer = document.createElement("div");
    //Start with 4x4
    let numberOfSquares = 4

  for(i=0; i< numberOfSquares; i++){
    // const gridRowSquare = document.createElement(div)
    const gridRow = document.createElement("div");
    
    gridRow.style.border = "1px solid black";
    gridRow.style.backgroundColor = "orange";
    gridRow.style.height = "10px";
    gridRow.style.display = "flex";
    //squares that go into the row
    gridContainer.appendChild(gridRow)
  }  
document.body.appendChild(gridContainer)
}   

createGrid()