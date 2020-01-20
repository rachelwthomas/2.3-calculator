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
     let number1 = ("num1", num1);
     // inserts number 1 into the calcultor screen
     return input.innerHTML = number1;
   }else {
     num2 = num2.concat(value)
     let number2 =("num2", num2);
     // inserts number 1 into the calcultor screen
     return input.innerHTML = number2;
   }

}
// console.log(pushNumber(2));

   // let answer = num1 + opp + num2



 for (let i=0; i < numbers.length; i=i+1) {
 numbers[i].addEventListener('click', pushNumber);
 }



// ****************************************************PUSH OPERATOR FUNCTION
// targeting operator buttons
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


// targets clear button on the calculator


// event listener for clean button
document.getElementById('ac').addEventListener('click',clearDisplay);


function clearDisplay() {
  let clear = 0
  return input.innerHTML = clear;

}




// let ac = null;

function equals(e) {



  // opp = (event.target.value)
  console.log("hello",opp );
  // console.log(Number(num1)+Number(num2));
  if (opp == "+"){
    let answer1 = (Number(num1)+Number(num2));
  // displays answer on calculator screen
    return input.innerHTML = answer1;
  }
  else if (opp == "-"){
    let answer2 =(Number(num1)-Number(num2));
  // displays answer on calculator screen
    return input.innerHTML = answer2;
  }
  else if (opp == "*"){
    let answer3 =(Number(num1)*Number(num2));
  // displays answer on calculator screen
    return input.innerHTML = answer3;
  }
  else if (opp == "/") {
    let answer4 =(Number(num1)/Number(num2));
  // displays answer on calculator screen
    return input.innerHTML = answer4;
  }



}




// targeting the clear button
// let clear = document.getElementById('ac').reset();
//










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
