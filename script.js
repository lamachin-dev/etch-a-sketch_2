
const createGrid = function(numSquares){
    const gridContainer = document.createElement("div");
    gridContainer.classList.add("grid")
    gridContainer.style.width = "400px";
    gridContainer.style.height = "400px";
    gridContainer.style.border = "3px red solid";
    gridContainer.style.display = "flex";
    gridContainer.style.flexDirection = "column";

    //Hover effect
    gridContainer.addEventListener("mouseover", (e)=>{
        let hoverTarget = e.target 
        if (hoverTarget.class === "square") {
            hoverTarget.style.backgroundColor = "red"}                                                  
    }
    )

    //Start with 4x4
    let numberOfSquares = numSquares

  for(j=0; j < numberOfSquares; j++){
    const gridRow = document.createElement("div");
    
    gridRow.classList.add("row")
    gridRow.style.border = "1px solid black";
    gridRow.style.backgroundColor = "orange";
    gridRow.style.display = "flex";
    gridRow.style.flex = 1
    //squares that go into the row
    for(i=0; i < numberOfSquares; i++){
        const gridSquare = document.createElement("div");
        gridSquare.style.border = "1px solid blue";
        gridSquare.style.flex = "1"
        gridSquare.classList.add("square")

        gridSquare.addEventListener("mouseover", function(){
            this.style.backgroundColor = "red"
        })

        gridRow.appendChild(gridSquare)
        }

    gridContainer.appendChild(gridRow)
  }  
document.body.appendChild(gridContainer)

}   
createGrid(10)

const resetGrid = function(){
    let numSquares = prompt("Enter # of squares per side 1-100")
    
    // if (isNaN(numSquares)) numSquares = prompt("Please enter valid number");
    while (isNaN(numSquares) || numSquares > 100) {
        numSquares = prompt("Please enter valid number 1-100")
    }
    const gridContainer = document.querySelector(".grid")

    gridContainer.remove()
    createGrid(numSquares)
}

