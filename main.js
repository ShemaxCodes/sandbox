// create a function thta divides three numebrs and console logs the quotient

function dividesThreeNums(zebra, forest, unicorn) {
    console.log(zebra / forest / unicorn)
}

dividesThreeNums(12, 4, 3)

// create a function that multiplies three numbers and returns the product

function timesThree(a, b, c) {
    return a * b * c
}

timesThree(5, 10, 2)

// create a function that takes in three numbers. Add the first two numbers and return the remainder of dividing the sum of the first 
// two numbers by the third number.

function threeNums(a, b, c){
   let sum = a + b 
   return sum % c 
}

console.log(threeNums(30, 6, 12))

// create a function that takes in 4 numbers. Multiply the first two numbers. If the product is greater than 100 add the sum of the last two
// numbers and console log the value. If the product is less than 100, subtract the difference of the last two numbers and console log the
// value. If the product is 100, multiply the first three numbers together and alert the remainder of dividing the fourth number.

function fourNums(num1, num2, num3, num4){
   let product = num1 * num2
   let sum = num3 + num4 
   if(product > 100 ) {
       console.log(sum)
   } else if(product < 100){
        console.log(num4 - num3)
   } else
   console.log((num1 * num2 * num3) % num4)

}

fourNums(10, 10, 5, 50)