/* 
Exercise: Fortune teller (45 min)
Why pay a fortune teller when you can just program your fortune yourself?

Store the following into variables: number of children, partner's name, geographic location, job title.
Output your fortune to the screen / console like so: "You will be a X in Y, and married to Z with N kids." */

var numberOfChildren = 10;
var partnerName = "Meliha";
var location = "Bern";
var jobTitle = "Full-stack Web Developer";
var vowels = [" a", "e", "i", "o", "u"];
if (vowels.includes(jobTitle[0].toLowerCase())) {
  jobTitle = " an " + jobTitle;
} else {
  jobTitle = "a " + jobTitle;
}

var yourFortune =
  "You will be " +
  jobTitle +
  " in " +
  location +
  ", and married to " +
  partnerName +
  " with " +
  numberOfChildren +
  " kids.";
console.log(yourFortune);
