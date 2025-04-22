function squareGrid(size){
   container.innerHTML = "";
   let squareSize=500/size;
   for(let i=0;i<=size*size;i++){
    let subDiv = document.createElement("div");
    subDiv.style.width=squareSize + "px";
    subDiv.style.height=squareSize + "px";
    subDiv.classList.add("sub-div");
    subDiv.addEventListener("mouseover",() =>{
        let red= Math.floor(Math.random() * 255)+1;
        let green=  Math.floor(Math.random() * 255)+1;
        let blue=Math.floor(Math.random() * 255)+1;
        subDiv.style.backgroundColor= `rgb(${red},${green},${blue})`
       })
  
    container.appendChild(subDiv);
   }
   
  
  
}
const resize = document.getElementById("resize");
const container = document.getElementById("container");
const clear = document.getElementById("clear");
let max;
squareGrid(16);
resize.addEventListener("click",() => {
   let resizeValue=prompt("Enter a number from 1-99");
   while(resizeValue >= 100){
      resizeValue = prompt("Sorry you cannot enter that value it should be 1-99")
      resizeValue = max;
   }
   squareGrid(resizeValue)
})
clear.addEventListener("click",() =>{
   squareGrid(16)
   })
console.log()
