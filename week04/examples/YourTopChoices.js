/* First part of the question */
var topChoices = [
  ["Blue", "Yellow"],
  ["Pasta", "Simit", "Baklava", "Leek", "Aubergine"],
  ["Besiktas", "Altay", "Karsiyaka"],
  ["Zürich", "Izmir", "Kolombo"],
];

topChoices.forEach((element) => {
  console.log(`My #1 choice is ${element[0]}`);
});

/* Second part of the question */

var team1 = new team("Besiktas", "Istanbul", ["Siyah", "Beyaz"]);
var team2 = new team("Karsiyaka", "Izmir", ["Red", "Green"]);
var team3 = new team("Altay", "Izmir", ["Siyah", "Beyaz"]);

var city1 = new city("Zürich", "Switzerland", "Lion");
var city2 = new city("Izmir", "Turkey", "Clock Tower");
var city3 = new city("Bern", "Switzerland", "Bear");

topChoices = {
  teams: [team1, team2, team3],
  colors: ["Blue", "Yellow"],
  foods: ["Pasta", "Simit", "Baklava", "Leek", "Aubergine"],
  cities: [city1, city2, city3],
};

var tempArray = Object.keys(topChoices);
tempArray.forEach((element) => {
  console.log(element + ": \n", topChoices[element]);
});
