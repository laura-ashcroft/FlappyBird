// class Score{
//     constructor(numberOfPoints) {
//         this.numberOfPoints = numberOfPoints;

//     }
//     pointsIncrease(){
//         this.numberOfPoints = document.getElementById("score").value;
//         console.log(this.numberOfPoints); 

//    }
// }

let p = document.querySelector("p");
let count = 0;

function incrementCount() {
    count++;
    p.innerText = `Score: ${count}`;
}
    
setTimeout(function() {
    let intervalID = setInterval(incrementCount, 2750);
}, 4500);


// let resetButton = document.querySelector(".resetButton");

//     function resetScore() {
//     clearInterval(setTimeout);
//     }
       
 
// resetButton.addEventListener("click", resetScore());