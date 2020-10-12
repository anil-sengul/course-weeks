function tellFortune(numberOfChildren, nameOfPartner, location, titleOfJob) {
  this.numberOfChildren = numberOfChildren;
  this.nameOfPartner = nameOfPartner;
  this.location = location;
  this.titleOfJob = titleOfJob;
  this.print = function () {
    var vowels = [" a", "e", "i", "o", "u"];
    titleOfJob = vowels.includes(titleOfJob[0].toLowerCase())
      ? "an " + titleOfJob
      : "a " + titleOfJob;
    console.log(`You will be ${titleOfJob} is too ${location}, 
          and married to ${nameOfPartner} with ${numberOfChildren} kids.`);
  };
}

var fortune1 = new tellFortune(2, "Askim", "Bern", "Full-stack Web Developer");
fortune1.print();

var fortune2 = new tellFortune(
  3,
  "Askim",
  "Zürich",
  "Full-stack Web Developer"
);
fortune2.print();

var fortune3 = new tellFortune(
  2,
  "Askim",
  "Boston",
  "Full-stack Web Developer"
);
fortune3.print();
