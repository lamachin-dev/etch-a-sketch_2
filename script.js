
const createGrid = function(){
    const gridContainer = document.createElement("div");
    gridContainer.style.width = "100px";
    gridContainer.style.height = "100px";
    gridContainer.style.border = "3px red solid";
    //Start with 4x4
    let numberOfSquares = 4

  for(j=0; j < numberOfSquares; j++){
    // const gridRowSquare = document.createElement(div)
    const gridRow = document.createElement("div");
    
    gridRow.classList.add("row")
    gridRow.style.border = "1px solid black";
    gridRow.style.backgroundColor = "orange";
    gridRow.style.minHeight = "10px";
    gridRow.style.display = "flex";
    //squares that go into the row
    //TODO:append squares to row
    for(i=0; i < numberOfSquares; i++){
        const gridSquare = document.createElement("div");
        gridSquare.style.border = "1px solid blue";
        gridSquare.style.minWidth = "10px";
        gridSquare.style.flex = "1"
        gridRow.appendChild(gridSquare)
        }

    gridContainer.appendChild(gridRow)
  }  
document.body.appendChild(gridContainer)
}   

createGrid()