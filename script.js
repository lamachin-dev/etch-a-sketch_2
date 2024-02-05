
const createGrid = function(numSquares){
    const gridContainer = document.createElement("div");
    gridContainer.classList.add("grid")
    gridContainer.style.width = "400px";
    gridContainer.style.height = "400px";
    gridContainer.style.border = "3px red solid";
    gridContainer.style.display = "flex";
    gridContainer.style.flexDirection = "column";


    //Start with 4x4
    let numberOfSquares = numSquares

  for(j=0; j < numberOfSquares; j++){
    const gridRow = document.createElement("div");
    
    gridRow.classList.add("row")
    gridRow.style.border = "1px solid black";
    gridRow.style.backgroundColor = "hsl(0,0%,50%)";
    gridRow.style.display = "flex";
    gridRow.style.flex = 1
    //squares that go into the row

    for(i=0; i < numberOfSquares; i++){
        const gridSquare = document.createElement("div");
        gridSquare.style.border = "1px solid blue";
        gridSquare.style.flex = "1"
        gridSquare.style.backgroundColor = "hsl(0,0%,50%)";

        gridSquare.classList.add("square")

        // gridSquare.addEventListener("mouseover", function(){
        //     this.style.backgroundColor = "red"
        // })

        gridRow.appendChild(gridSquare)
        }

    gridContainer.appendChild(gridRow)
    gridContainer.addEventListener("mouseover", changeColorEventHandler)

    // attachEventListener()
  }  
document.body.appendChild(gridContainer)

}   

createGrid(10)

//function to convert from RGB to HSL
const RGBToHSL = (r, g, b) => {
    r /= 255;
    g /= 255;
    b /= 255;
    const l = Math.max(r, g, b);
    const s = l - Math.min(r, g, b);
    const h = s
      ? l === r
        ? (g - b) / s
        : l === g
        ? 2 + (b - r) / s
        : 4 + (r - g) / s
      : 0;
    return [
      60 * h < 0 ? 60 * h + 360 : 60 * h,
      100 * (s ? (l <= 0.5 ? s / (2 * l - s) : s / (2 - (2 * l - s))) : 0),
      (100 * (2 * l - s)) / 2,
    ];
  };

function changeColorEventHandler(e){
    let hoverTarget = e.target;
    
    if (hoverTarget.className === "square") {
        
        //Hover effect

        //Read target square's RGB values
        let currentRGB = hoverTarget.style.backgroundColor.slice(4,-1)
        //Convert from RGB to HSL
        currentHSL = RGBToHSL(...currentRGB.split(","))
        //Get current Lightness value
        const currentLightness = currentHSL[2]
        
        //Randomize HSL
        let randomHue = Math.random() * 360
        let randomSaturation = Math.random () * 100
        let randomLightness = Math.random() * (currentLightness - currentLightness / 10)        

        //Apply style
        hoverTarget.style.backgroundColor = `hsl(${randomHue}, ${randomSaturation}%, ${randomLightness}%)`
        console.log(`${randomHue},${randomSaturation}, ${randomLightness}`);

        //Display Lightness value
        // hoverTarget.textContent = randomLightness
    } 
}

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


