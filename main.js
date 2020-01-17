(function() {
  'use strict';



// => pushNumber() {
//   document.querySelector('.key').addEventListener("click",alert());
// }
// document.querySelector('button').addEventListener,("click",pushNumber());

// document.querySelector(".button").addEventListener("click", pushNumber);


//**************************************************** PUSH NUMBER FUNCTION

let numbers = document.querySelectorAll('.number');


for (let i=0; i < numbers.length; i=i+1) {
  console.log(numbers[i]);
  numbers[i].addEventListener("click", pushNumber);

}
// returns the value of the  button
function pushNumber() {
  let x = document.querySelector('.number').value;
  alert(x);
}

// ****************************************************PUSH OPERATOR FUNCTION

let operators = document.querySelectorAll('.operator');


for (let i=0; i < operators.length; i=i+1) {
  console.log(operators[i]);
  operators[i].addEventListener("click", pushOperator);

}

function pushOperator() {
  alert("you pushed an operator");
}








// function pushNumber() {
//   alert("you pushed a button");
//
// }


})();
