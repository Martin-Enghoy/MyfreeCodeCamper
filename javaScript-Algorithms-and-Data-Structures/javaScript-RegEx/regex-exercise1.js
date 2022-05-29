// let reCriminals = /[^A-Z]C+.*/g;
const RegEx = (string) => string.match(/C+/);

console.log(RegEx("C"));
console.log(RegEx("CC"));
console.log(RegEx("P1P5P4CCCcP2P6P3"));
console.log(RegEx("P6P2P7P4P5CCCCCP3P1"));
console.log(RegEx(""));
console.log(RegEx("P1P2P3"));
console.log(RegEx("P2P1P5P4CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCP3"));




