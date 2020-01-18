(function() {
  'use strict';



// => pushNumber() {
//   document.querySelector('.key').addEventListener("click",alert());
// }
// document.querySelector('button').addEventListener,("click",pushNumber());

// document.querySelector(".button").addEventListener("click", pushNumber);


//**************************************************** PUSH NUMBER FUNCTION
// let numbers = document.querySelectorAll('.number');
//
//
//
// let pushNumber = (event) => {
// console.log(`e ${event.target.value}`);
//
// }
//
// for (let i=0; i < numbers.length; i=i+1) {
// numbers[i].addEventListener('click', pushNumber);
// }
// ******************pushNumber fucntion returns a value in the console..o



// fat arrow notation
// let pushNumber = () => {
//  }
//
//



// *********************************************************************







 let numbers = document.querySelectorAll('.number');

 let pushNumber = (event) => {
   let value = Number(`${event.target.value}`);
   let num1 = value
   let num2 = value
   let opp = null
   if (o) {
     console.log("eyes")
   }




   console.log(value);
}
// console.log(pushNumber(2));





 for (let i=0; i < numbers.length; i=i+1) {
 numbers[i].addEventListener('click', pushNumber);
 }



// ****************************************************PUSH OPERATOR FUNCTION

let operators = document.querySelectorAll('.operator');

function pushOperator() {
 console.log(`${event.target.value}`);
}

for (let i=0; i < operators.length; i=i+1) {
  operators[i].addEventListener("click", pushOperator);
}


// if n1 = true {
//
// }
//
//
//
// if pushOperator == "+" {
//   return n1 + n2;
// }
//
// if pushOperator == "-" {
//   return n1 - n2;
// }
//
// if pushOperator == "*" {
//   return n1 * n2;
// }
//
// if pushOperator == "/" {
//   return n1 / n2;
// }



// function pushNumber() {
//   alert("you pushed a button");
//
// }


})();
