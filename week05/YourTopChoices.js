var array = [];
var team1 = new team("Besiktas", "Istanbul", ["Siyah", "Beyaz"]);
array.push(team1);
var team2 = new team("Karsiyaka", "Izmir", ["Red", "Green"]);
array.push(team2);
var team3 = new team("Altay", "Izmir", ["Siyah", "Beyaz"]);
array.push(team3);

function team(nameOfTeam, cityOfTeam, colorsOfTeam) {
  this.nameOfTeam = nameOfTeam;
  this.cityOfTeam = cityOfTeam;
  this.colorsOfTeam = colorsOfTeam;
}

console.log(array);
