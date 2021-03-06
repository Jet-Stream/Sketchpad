//creates starting grid of 16x16 squares
let container = document.getElementById('container');
let containerWidth = container.offsetWidth; //stores width in px of contaienr div as int
let containerHeight = container.offsetHeight; //stores height in px of container div as int
let containerArea = containerWidth * containerHeight //stores area in px of container div
let squareArea = Math.floor(Math.sqrt(containerArea)/16-2); //sets area of each square, subtract 2 for border
for(i=0;i<(16*16); i++){
  let newDiv = document.createElement('div');
    newDiv.classList.add('gridDiv');
    newDiv.style.height = `${(squareArea)}px`;
    newDiv.style.width = `${(squareArea)}px`;
    container.appendChild(newDiv);
    
    newDiv.addEventListener('mouseover', () =>{
      if (newDiv.id = 'shaded1'){
        newDiv.addEventListener('mouseover', () =>{
          newDiv.id = 'shaded2';
        });
      }
      else {
        newDiv.id = 'shaded1';  
      }
    });
  }

function reset(){//creates a new grid with user submitted dimensions
  while (container.firstChild){//empties container div
    container.removeChild(container.firstChild);
  }
let numberOfSquares = parseInt(prompt('How many squares per side? '));
let customSquareArea = Math.floor(containerArea/(numberOfSquares*numberOfSquares));
let customSquareWidth = Math.floor(Math.sqrt(customSquareArea)-2);// subtract 2 for border
let customSquareAreaSum= 0; 

for(i=0;i<=(numberOfSquares*numberOfSquares); i++){

      let newDiv = document.createElement('div');
        newDiv.classList.add('gridDiv');
        newDiv.style.height = `${customSquareWidth}px`;
        newDiv.style.width = `${customSquareWidth}px`;
        customSquareAreaSum += Math.floor((parseInt(customSquareArea)));
        container.appendChild(newDiv);
        newDiv.addEventListener('mouseover', () =>{
          if (newDiv.id = 'shaded1'){
            newDiv.addEventListener('mouseover', () =>{
              newDiv.id = 'shaded2';
            });
          }
          else{
            newDiv.id = 'shaded1';  
          }
        });
        }
        let j = customSquareAreaSum; //if the sum of the areas of the custom squares is greater than the 
                                    //container area, remove the last child of the container until it is smaller
        while (customSquareAreaSum >= containerArea){
        container.removeChild(container.lastChild);
       j-= (newDiv.style.height) * (newDiv.style.height);
    }
  }
let resetButton = document.getElementById('reset')
  resetButton.addEventListener('click', () =>{
    reset(); 
  });