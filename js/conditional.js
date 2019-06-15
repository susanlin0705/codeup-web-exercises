"use strict";

/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * if what the user enters is not a number, use an alert to tell them that, and
 * do *not* display any of the above information.
 *
 * Can you refactor your code to use functions?
 */

    function typeANumber(number){
        if (number%2===0){
            alert("This number is an even number.");
        }else{
            alert("This number is an odd number ")
        }
        alert(number + "plus 100 = " + (number+ 100));

        if (number>0){
            alert("This number is positive.")
        }else{
            alert("This number is negative.")
        }
        return number;
    }

    var confirmANumber=confirm("Would you like to enter a number?");
    if (confirmANumber===true){
        var userNumber= Number(prompt("Please enter a number."));
    } else {
        alert("This is not a number. Please enter a number.");
    }

    typeANumber(userNumber);













/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message that related to that
 * color. Only worry about the colors defined above, if the color passed is not
 * one of the ones defined above, return a message that says so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */
var color = prompt("What's your favorite color?");

function analyzeColor(color) {

    if (color === "blue") {

        alert("blue is the color of the sky.")

    } else if (color === "red") {

        alert("Strawberries are red.")

    } else if (color === "cyan") {

        alert("I don't know anything about cyan")
    } else if (color === "yellow") {

        alert("Daisy is yellow.")
    } else if (color === "green") {

        alert("Trees are green.")

    } else if (color === "violet") {

        alert("That is my favorite color.")

    } else {
        alert("This " + color + " is not pretty.")

    }
    return color;
}
console.log(analyzeColor(color));

    // console.log(analyzeColor(color));


// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color everytime the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * TODO:
 * Pass the `randomColor` variable to your function and console.log the results.
 * You should see a different message everytime you refresh the page
 */

/**
 * TODO:
 * Refactor your above function to use a switch-case statement
 */
switch (randomColor) {
    case "blue":
        alert("Blue is the color of my house.");
        break;
    case "red":
        alert("Strawberries are red.");
        break;
    case "cyan":
        alert("I don't know anything about cyan.");
        break;
    case "green":
        alert("This is my favorite color.");
        break;
    case "yellow":
        alert("Daisy is yellow.");
        break;
    default:
        alert("This is not a pretty color. ");
}

/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */

/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * all for free!.
 *
 * Write a function named `calculateTotal` that accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */
function caculateTotal(luckyNumber, totalAmount) {
    if (luckyNumber === 0){
        return totalAmount;
    }else if(luckyNumber===1){
        return totalAmount* .9;
    }else if (luckyNumber===2){
        return totalAmount*.75;
    }else if (luckyNumber===3){
        return totalAmount*.65;
    }else if (luckyNumber===4){
        return totalAmount*.5;
    }else if (luckyNumber===5){
        return totalAmount*0
    }

}
var userLuckyNumber=Number(prompt("Pick a number between 0 to 5."));
var userTotalAmount=Number(prompt("What is your total?"));
caculateTotal(userLuckyNumber, userTotalAmount);











// var totalAmount= Number(prompt("What is your total price?"))
// var luckyNumber= Number(prompt("Please type your lucky number between 0 and 5."));
//
//
//
//
//
// function calculateTotal(luckyNumber,totalAmount) {
//
//     if (luckyNumber===0){
//             return totalAmount;
//     }else if (luckyNumber===1){
//             return totalAmount*0.9;
//     }else if (luckyNumber===2){
//         alert("Congrats, You get 25 % discount. Your total is " + luckyNumber + (totalAmount*.75));
//     }else if (luckyNumber===3) {
//         alert("Congrats, You get 35 % discount. Your total is " + luckyNumber + (totalAmount*.65));
//     }else if (luckyNumber===4){
//         alert("Congrats, You get 50 % discount. Your total is " + luckyNumber + (totalAmount*.5));
//     }else if (luckyNumber===5){
//         alert("Congrats, You get 100 % discount. Your total is free.");
//     }
//     return totalAmount;
//
// }
/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 6.
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6
var luckyNumber = Math.floor(Math.random() * 6);
userTotalAmount=Number(prompt("What is your total?"));

alert("Your Lucky number is " + luckyNumber);
alert("Your price before discount is " + userTotalAmount);
alert("Your total amount after discount is" + caculateTotal(luckyNumber, userTotalAmount) );
