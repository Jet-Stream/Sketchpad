let canvassSize = parseInt(prompt('Select your canvas size: '));
console.log (canvassSize);
if (canvassSize != null){
    let container = document.getElementById('container');
    console.log(container);
    container.style.width = `${canvassSize} px`;
    container.style.height = `${canvassSize} px`;
    for(i=0; i <= (canvassSize * canvassSize); i++){
        
        let newDiv = document.createElement('div');
        newDiv.classList.add('gridDiv');
        container.appendChild(newDiv);
        newDiv.addEventListener('mouseover', () =>{
          newDiv.id = 'shaded1';  
        });
    }
}

