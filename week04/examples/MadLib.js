var noun1 = takeAValidInputFromUser("Please enter a noun:");
var adjective = takeAValidInputFromUser("Please enter a adjective:");
var verb = takeAValidInputFromUser("Please enter a verb:");
var noun2 = takeAValidInputFromUser("Please enter a noun:");

document.write(`${noun1} is too ${adjective} to ${verb} ${noun2}`);

function takeAValidInputFromUser(message) {
  var anInput = prompt(message);
  while (typeof anInput === "undefined") {
    anInput = prompt(message);
  }
  return anInput;
}
