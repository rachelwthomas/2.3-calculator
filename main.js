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
 let operatorbtn = document.querySelectorAll('.operator');
 let test = null
 let num1 = ""
 let num2 = ""
 let opp = ""

 console.log(num1);

 let pushNumber = (event) => {
   let value = event.target.value;


   if (test !== true) {
     num1 = num1.concat(value)
     console.log("num1", num1)
   }else {
     num2 = num2.concat(value)
     console.log("num2", num2)
   }

}
// console.log(pushNumber(2));

   // let answer = num1 + opp + num2



 for (let i=0; i < numbers.length; i=i+1) {
 numbers[i].addEventListener('click', pushNumber);
 }



// ****************************************************PUSH OPERATOR FUNCTION

let operators = document.querySelectorAll('.operator');

function pushOperator() {
  test = true;
  opp = (`${event.target.value}`);

}

for (let i=0; i < operators.length; i=i+1) {
  operators[i].addEventListener("click", pushOperator);
}



document.getElementById('equals').addEventListener('click',equals);

// This is targeting the "screen on the caluculator"
let input = document.querySelector('.input-area');

function equals(e) {
  // opp = (event.target.value)
  console.log("hello",opp );
  // console.log(Number(num1)+Number(num2));
  if (opp == "+"){
  let answer1 = (Number(num1)+Number(num2));
  return input.textContent = answer1;
  }
  else if (opp == "-"){
    let answer2 =(Number(num1)-Number(num2));
    return input.textContent = answer2;
  }
  else if (opp == "*"){
    let answer3 =(Number(num1)*Number(num2));
    return input.textContent = answer3;
  }
  else if (opp == "/") {
    let answer4 =(Number(num1)/Number(num2));
    return input.textContent = answer4;
  }

}



// if n1 = true {
//
// }
//
//
//
// if opp == "+" {
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
