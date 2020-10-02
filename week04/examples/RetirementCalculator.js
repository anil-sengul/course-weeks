/*
input   : current Age, 
          retirement age
        
process: calculating the retirement year and the remaining number of years.Age

output: display the remaining years to retire and retirement future year


constraints:
    . Current age must be less than retirement age.
    . Current age must be greater than 18
    . Inputs must be positive integer numbers.


INITIALIZED currentAge as number
INITIALIZED retireAge as number
INITIALIZED remainAge as number
INITIALIZED retireYear as number
INITIALIZED currentYear as current year //call function to get current system year

PROMPT currentAge ('Enter your age:')
WHILE (currentAge < 18 && currentAge is String)
    PROMPT currentAge ('Enter your age:')
END WHILE
    
PROMPT retireAge ('Enter the age you want to retire.')
WHILE (retireAge < currentAge && retireAge is String)
    PROMPT retireAge ('Enter the age you want to retire.')
END WHILE

remainAge= retireAge-currentAge

retireYear= currentYear+remainAge

DISPLAY "You have remainAge year left until you retire." 

DISPLAY "It is currentYear, so you can retire in retireYear."


*/

// var currentAge = prompt("Enter your Age!");
// while (isNaN(currentAge) || currentAge < 18) {
//   currentAge = prompt("Enter your Age!");
// }
// var retireAge = prompt("Enter the Age you want to be retired!");
// while (isNaN(retireAge) || retireAge < currentAge) {
//   retireAge = prompt("Enter the Age you want to be retired!");
// }
// var remainAge = retireAge - currentAge;
// var currentYear = new Date().getFullYear();
// var retireYear = currentYear + remainAge;

// console.log(`You have ${remainAge} years left until you retire`);
// console.log(`It's ${currentYear}, so you can retire in ${retireYear}`);

/*TipCalculator
    Initialize billAmount to 0
    Initialize tip to 0
    Initialize tipRate to 0
    Initialize total to 0
    Prompt for billAmount with "What is the bill amount?"
    Prompt for tipRate with "What is the tip rate?"
    convert billAmount to a number
    convert tipRate to a number
    tip = billAmount * (tipRate / 100)
    round tip up to nearest 5 rappen
    total = billAmount + tip
    Display "Tip : CHF" + tip
    Display "Total : CHF" + total
End*/

var billAmount = getANumberWithMessage(billAmount, "Please enter the bill amount:");
var tipRate = getANumberWithMessage(tipRate, "Please enter the tip rate(%):");

var tip = billAmount * (tipRate / 100);
tip = roundTo5Rappen(tip);

var total = billAmount + tip;
total = roundTo5Rappen(total);

console.log(`Tip\t: ${tip}`);
console.log(`Total\t: ${total}`);

function getANumberWithMessage(number, message) {
  number = prompt(message);
  while (isNaN(number) || number <= 0) {
    number = prompt(message);
  }
  number = roundTo5Rappen(number);
  return number;
}

function roundTo5Rappen(number) {
  number = (Math.round(number * 100) / 100).toFixed(2);
  number = (Math.round(number * 20) / 20).toFixed(2);
  number = Number.parseFloat(number);
  return number;
}
