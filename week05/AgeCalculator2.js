/* 
Exercise: Age calculator (45 min)
Want to find out how old you'll be? Calculate it!

Store your birth year in a variable.
Store a future year in a variable.
Calculate your 2 possible ages for that year based on the stored values.
For example, if you were born in 1988, then in 2026 you'll be either 37 or 38, 
depending on what month it is in 2026.Output them to the screen/console like so: 
"I will be either NN or NN in YYYY", substituting the values.*/
var validYears = RegExp("^(19|20)\\d{2}$");
var validMonths = RegExp("^([1-9]|1[012])$");
var months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

var birthYear = takeAValidInputFromUser(
  "Please enter your birth year:\n (please enter YYYY format and between 1900 and 2099)",
  validYears
);
var birthMonth = takeAValidInputFromUser(
  "Please enter your birth month:\n (please enter MM format and between 1 and 12)",
  validMonths
);
var futureYear = takeAValidInputFromUser(
  "Please enter a year on the future:\n (please enter YYYY format and between 1900 and 2099)",
  validYears
);

if (birthYear >= futureYear) {
  futureYear = takeAValidInputFromUser(
    "Please enter a year on the future:\n (please enter YYYY format and between 1900 and 2099)",
    validYears
  );
}

var futureMonth = takeAValidInputFromUser(
  "Please enter a month on the future year:\n (please enter MM format and between 1 and 12)",
  validMonths
);

printTheAge(birthYear, birthMonth, futureYear, futureMonth);

function takeAValidInputFromUser(message, regEx) {
  var anInput = prompt(message);
  while (typeof anInput === "undefined" || !regEx.test(anInput)) {
    anInput = prompt(message);
  }
  return Number.parseInt(anInput);
}

function monthNumToName(monthnum) {
  return months[monthnum - 1] || "";
}

function printTheAge(birthYear, birthMonth, futureYear, futureMonth) {
  var age = 0;
  var ay = monthNumToName(futureMonth);
  if (birthYear < futureYear && birthMonth < futureMonth) {
    age = futureYear - birthYear;
  } else if (birthYear < futureYear && birthMonth > futureMonth) {
    age = futureYear - birthYear - 1;
  }
  document.write(`You will be ${age} in ${ay} ${futureYear}`);
}
