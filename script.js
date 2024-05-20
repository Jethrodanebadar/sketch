let container = document.querySelector(".grid")
const body = document.body;
let size_input = document.querySelector("#grid-input")
let size_btn = document.querySelector("#grid-btn")
let clear = document.querySelector("#clear-btn");
let isDown = false;
body.addEventListener("mousedown", () => {
  isDown = true; 
  
})

body.addEventListener("mouseup", () => {
  isDown = false; 
})

let squareColor = "black";
let inputValue = 16
size_btn.addEventListener("click",() =>{
   inputValue = parseInt(size_input.value);
  if (isNaN(inputValue) || inputValue <= 0){
    inputValue  = 16;
  }
  else if( inputValue > 100)
    alert("You entered too high value")
  else{
    createGrid(inputValue);
  }
  
})

function createGrid(size){
  container.textContent = '';
for(let i = 0; i< size; i++){
  let row = document.createElement('div');
  row.className = "row_div";

  for(let j = 0;j < size; j++ ){
    let square = document.createElement('div');
    square.className = "square";
    row.appendChild(square);
    colored = false;
    square.addEventListener("mousemove", ()=>{
      if(isDown ==true){
        square.style.backgroundColor = squareColor;
        colored = true;
      }
    })
  }
  container.appendChild(row)
}
}

clear.addEventListener("click", () =>{
  container.textContent = '';
  createGrid(inputValue);
})

createGrid(inputValue);
