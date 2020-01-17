(function() {
  'use strict';



// => pushNumber() {
//   document.querySelector('.key').addEventListener("click",alert());
// }
// document.querySelector('button').addEventListener,("click",pushNumber());

// document.querySelector(".button").addEventListener("click", pushNumber);


//**************************************************** PUSH NUMBER FUNCTION
// returns only the value of seven no matter what number is pushed

// let numbers = document.querySelectorAll('.number');
//
//
// for (let i=0; i < numbers.length; i=i+1) {
//   console.log(numbers[i]);
//   numbers[i].addEventListener("click", pushNumber);
//
// }
//
// function pushNumber() {
//   let x = document.querySelector('.number').value;
//   alert(x);
// }
// *********************************************************************
// let numbers = document.querySelectorAll('.number');
//
//
// for (let i=0; i < numbers.length; i=i+1) {
//   console.log(numbers[i]);
//   numbers[i].addEventListener("click", pushNumber);
//
//
// }


// function pushNumber() {
//   let numbers = document.querySelector('.number').value;
//   console.log(numbers.value);
//
//   for (let i=0; i < numbers.length; i=i+1) {
//     // console.log(numbers[i]);
//     numbers[i].addEventListener("click", pushNumber);
//     // console.log(numbers[i]);
//
//   alert();
// }}


// let numbers = document.querySelectorAll('.number');
//
//
// for (let i=0; i < numbers.length; i=i+1) {
//   console.log(numbers[i]);
//   numbers[i].addEventListener("click", pushNumber);
//   // alert(numbers[i].value);
//
// }

// function pushNumber() {
//   let numbers = document.querySelectorAll('.number');
//
//
//   for (let i=0; i < numbers.length; i=i+1) {
//     console.log(numbers[i]);
//     numbers[i].addEventListener("click", pushNumber);
//     alert(numbers[i].value);
//
//   }
//
// }




//
//
// let numbers = document.querySelectorAll('.number');
//
//
// for (let i=0; i < numbers.length; i=i+1) {
//   console.log(numbers[i]);
//   numbers[i].addEventListener("click", pushNumber);
//
// }
//
// function pushNumber() {
//   let numbers = document.querySelector('.number').value;
//   alert(numbers[0].value);
// }

// function pushNumber() {
//   let x = document.querySelector('.number').value;
//   // alert(numbers[1].value);
// }












// let numbers = document.querySelectorAll('.number');
//
//
// for (let i=0; i < numbers.length; i=i+1) {
//   console.log(numbers[i]);
//   numbers[i].addEventListener("click", pushNumber);
//
// }

//   let value = document.querySelectorAll('.number');
//
//   for(let i=0; i < value.length;i=i+1){
//   console.log(value[i]);
//   value[i].addEventListener("click", pushNumber);
// }
//
//   function pushNumber() {
//     alert(value.value);
//   // let value = document.querySelectorAll('.number').value;
//
//     // for (let i=0; i < value.length; i=i+1){}
//     // console.log(value[i]);
//   }
  // alert(value);
 //
 //  let numbers = document.querySelectorAll('.number');
 //
 //
 // for (let i=0; i < numbers.length; i=i+1) {
 //   console.log(numbers[i]);
 //   numbers[0].addEventListener("click", pushNumber);
 //
 // }
 //
 // for (let i=0; i < numbers.length; i=i+1) {
 //   console.log(numbers[i]);
 //   numbers[1].addEventListener("click", pushNumber);
 //
 //
 // }
 //
 // function pushNumber() {
 //   // let x = document.querySelector('.number').value;
 // //   alert(numbers());
 // }


 // let numbers = document.querySelectorAll('.number');
 //
 //
 // for (let i=0; i < numbers.length; i=i+1) {
 //   console.log(numbers[i]);
 //   numbers[i].addEventListener("click", pushNumber);
 //
 // }
 //
 // function pushNumber() {
 //   let numbers = document.querySelectorAll('.number');
 //   alert(numbers);
 // }



//  let numbers = document.querySelectorAll('.number');
//
//
//  for (let i=0; i < numbers.length; i=i+1) {
//    console.log(numbers[i]);
//    numbers[i].addEventListener("click", pushNumber);
//
//  }
//
//  function pushNumber() {
//    console.log('this', this);
//    // let x = document.querySelector('.number').value;
//    // alert(x);
//  }
//
//
// $buttons[i].addEventListener('click')

// **********************************************************

 let numbers = document.querySelectorAll('.number');



 let pushNumber = (event) => {
 console.log(`e ${event.target.value}`);

 }

 for (let i=0; i < numbers.length; i=i+1) {
 numbers[i].addEventListener('click', pushNumber);
 }






// fat arrow notation
// let pushNumber = () => {
//  }
//
//
//
//
//
//  function pushNumber() {
//    console.log('this', this);
//    // let x = document.querySelector('.number').value;
//    // alert(x);
//  }
//
//
// $buttons[i].addEventListener('click')



// target.value




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
