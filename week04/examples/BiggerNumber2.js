/* 
Exercise:
Which number is bigger? (45 min)
Declare 2 variables, both numbers
Compare which number is greater
Log the output, e.g. "The greater number of 5 and 10 is 10."
Add an output for the else statement, e.g. "The smaller number of 5 and 10 is 5." */

function biggerNumber(num1, num2) {
  if (num1 != num2) {
    console.log(
      `The bigger number of ${num1} and ${num2} is ${Math.max(num1, num2)}.`
    );
  } else {
    console.log("The numbers are equal", num1, num2);
  }
}

biggerNumber(5, 10);
