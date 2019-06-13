"use strict"

console.log("Hello from external JavaScript");

alert("Welcome to my Website!");



var usercolor = prompt("What\'s your favorite color?");

var results= "Really? " + usercolor + " is my favorite color too!";
alert(results);
console.log(results);




// Exercise 3-1
var mermaid = prompt("How many days do you want to rent Little Mermaid?");
console.log(mermaid*3);
var bear = prompt("How many days do you want to rent Brother Bear?");
console.log(bear*3);
var hercules = prompt("How many days do you want to rent Hercules?");
console.log(hercules*1);


var total = (parseInt(mermaid) + parseInt(bear) + parseInt(hercules)) * 3;

alert("Your total is going to be " + total + " dollars." );


// Exercise 3-2
var facebook = prompt("How many hours do you work for Facebook this week?");
console.log(facebook*350);
alert("Your hourly from Facebook is 350.");

var google = prompt("How many hours do you work for Goolge this week?");
console.log(google*400);
alert("Your hourly from Google is 400.");

var amazon = prompt("How many hours do you work for Amazon this week?");
console.log(amazon*380);
alert("Your hourly from Amazon is 380.");

var paycheck = (Number(facebook*350) + Number(google*400) + Number(amazon*380));

alert("You make " + paycheck + " dollars this week.");
console.log("Your total paycheck is " + paycheck + " ." );




