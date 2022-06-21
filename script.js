const mainDiv = document.querySelector(".main_container");
const button = document.querySelector(".button");

let squareNo = 16;

function makeGrid(){
    const squareSize = 600/squareNo;
    // console.log(squareSize);
    for(let i=0; i<squareNo; i++){
        const rowContainer = document.createElement("div");
        rowContainer.classList.toggle("row_container");
        rowContainer.style.height = `${squareSize}px`;
        // rowContainer.textContent = `${i+1}`;

        for(let i=0; i<squareNo; i++){
            const smallDiv = document.createElement("div");

            smallDiv.style.width = `${squareSize}px`;
            smallDiv.style.height = `${squareSize}px`;
            smallDiv.style.margin = `0px`;

            // smallDiv.textContent = `${i+1}`;
            
            smallDiv.addEventListener('mouseover', () => {
                smallDiv.style['background-color'] = RGBNo();
            });

            rowContainer.appendChild(smallDiv);
        };
        mainDiv.appendChild(rowContainer);
    };
};

makeGrid();

button.addEventListener("click", () => {
    let usrInp = parseInt(prompt("Enter the grid size (greater than 0 and smaller than 100)", 16));
    
    if(isNaN(usrInp) || usrInp>100 || usrInp<1){
        alert("Wrong Value Entered!");
    }else{
        // console.log(usrInp);
        squareNo = usrInp;
        // console.log(squareNo);

        while(mainDiv.firstChild){
            mainDiv.removeChild(mainDiv.lastChild);
        };

        makeGrid();
    };
});

function RGBNo(){
    let rgb = `rgb(${random()}, ${random()}, ${random()})`;
    return rgb;
}

function random(){
    return Math.floor(Math.random()*256);
};