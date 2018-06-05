"use strict";

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Why am I formatting my code this way: taking some single statements and
// breaking them out to multiple lines? Here's why: https://bit.ly/2HmI6RA

const ratSupremacist = 
  new Monster("Intelligent Rat (Racist)", "lab-experiment gone awry", 5, "ignorance");

const lawsuitWaitingToHappen = 
  new Monster("Sentient Boiling Hot Spilled Coffee", "construct", 5, "splash");

const gheklekTheWereRainbow = 
  new Monster("Semi-Iridescent Goblin", "fantastical creature", 30, "unicorn shit");

// What's with that slash at the end of some of the lines below?
// https://mdn.io/string#Long_literal_strings
// https://davidwalsh.name/multiline-javascript-strings

const jennifer = 
  new Monster(
    "Lady from Accounting", 
    "office creature", 
    80,
    "tantrum"
  );

const monsters = 
  [ratSupremacist, lawsuitWaitingToHappen, gheklekTheWereRainbow, jennifer];

const superhero1 = new Hero("Nerd Boy", "Patrick Hanson", 100, "coding expertise");

// Below, I am using the newline "escape sequence" to force console.log to
// print a literal newline on the console: http://mdn.io/string#Escape_notation

console.log(
  "A hero emerges!", 
  "\nThe noble " + superhero1.name + " has vowed to defeat the monsters and \
save the realm.",
  "\nWill they be victorious?"
);

superhero1.fight(monsters);

if (superhero1.isAlive) {
  console.log("The hero, " + superhero1.name + ", prevailed!");
} else {
  console.log(
    superhero1.name,
    "was bested by the monsters and when unmasked was discovered to be",
    superhero1.secretIdentity + "!"
  );
}