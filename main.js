// => pushNumber() {
//   document.querySelector('.key').addEventListener("click",alert());
// }
// document.querySelector('button').addEventListener,("click",pushNumber());

// document.querySelector(".button").addEventListener("click", pushNumber);
(function() {
  'use strict';


function pushNumber() {

let numbers = document.querySelectorAll('.number');

for (let i=0; i < numbers.length; i=i+1) {
  numbers[i].addEventListener("click", pushNumber);
}

alert("you pushed a button");

}
// function pushNumber() {
//   alert("you pushed a button");
//
// }


})();
