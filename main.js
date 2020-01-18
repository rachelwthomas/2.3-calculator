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





// *********************************************************************






 let numbers = document.querySelectorAll('.number');



 let pushNumber = (event) => {
 let value = Number(`${event.target.value}`);

 console.log(value);


 }

 



 for (let i=0; i < numbers.length; i=i+1) {
 numbers[i].addEventListener('click', pushNumber);



 }


//  let sum = () => {
//    answer = (pushNumber()+pushNumber())
//  }
//
//  let minus = () => {
//
//  }
//
//  let multiply = () => {
//
//  }
//
// let divide = () => {
//
// }




// fat arrow notation
// let pushNumber = () => {
//  }
//
//


// ****************************************************PUSH OPERATOR FUNCTION

let operators = document.querySelectorAll('.operator');




function pushOperator() {
 console.log(`${event.target.value}`);
}




for (let i=0; i < operators.length; i=i+1) {
  operators[i].addEventListener("click", pushOperator);

}





// function pushNumber() {
//   alert("you pushed a button");
//
// }


})();
