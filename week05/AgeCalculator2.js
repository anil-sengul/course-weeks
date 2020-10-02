/* 
Exercise: Age calculator (45 min)
Want to find out how old you'll be? Calculate it!

Store your birth year in a variable.
Store a future year in a variable.
Calculate your 2 possible ages for that year based on the stored values.
For example, if you were born in 1988, then in 2026 you'll be either 37 or 38, 
depending on what month it is in 2026.Output them to the screen/console like so: 
"I will be either NN or NN in YYYY", substituting the values.*/

var birthYear = prompt("Please enter your birth year:");
var birthMonth = prompt("Please enter your birth year:");
var futureYear = prompt("Please enter a year on the future:");

var age = futureYear - birthYear;

document.write(
  "You will be either " + (age - 1) + " or " + age + " in " + futureYear
);


