(function() {
  'use strict';



// => pushNumber() {
//   document.querySelector('.key').addEventListener("click",alert());
// }
// document.querySelector('button').addEventListener,("click",pushNumber());

// document.querySelector(".button").addEventListener("click", pushNumber);

let numbers = document.querySelectorAll('.number');


for (let i=0; i < numbers.length; i=i+1) {
  console.log(numbers[i]);
  numbers[i].addEventListener("click", pushNumber);

}

function pushNumber() {
  alert("you pushed a button");
}







// function pushNumber() {
//   alert("you pushed a button");
//
// }


})();
