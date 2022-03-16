// Javascript Loops

// create a variable and assign it a number 

let num = 25; 

// minus 10 from the number

num = num - 10

// print that number to the console

console.log(num);


// create a variable that holds a value from the input

let inputedVal = document.querySelector('#dancedanceRevolution').value //this gets the value out of the input and stores it into the variable inputedVal

// add 25 to that number

inputedVal = inputedval + 25

// alert that number

alert(inputedVal)

// let x = input 
// x + 25
// alert("You Did It?");

// create a variable that holds the h1

const h1Holder = document.querySelector("h1")


// add an event listener to that element that console logs the sum of the two previous variables

 
h1Holder.addEventListener('click', sum)

function sum() {
    console.log(inputedVal + num);
}