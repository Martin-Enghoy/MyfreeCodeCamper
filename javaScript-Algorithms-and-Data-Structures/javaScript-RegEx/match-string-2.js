// Without [], ^ returns bool if string STARTS with regex
let rickyAndCal = "Cal and Ricky both like racing.";
let calRegex = /^Cal/;
let result = calRegex.test(rickyAndCal);
console.log(result)

//  Returns bool if string ENDS with regex
let caboose = "The last car on a train is the caboose";
let lastRegex = /caboose$/; 
let result2 = lastRegex.test(caboose);

//  For all alphanumeric characters
//      The closest character class in JavaScript to match the alphabet is \w. 
//      This shortcut is equal to [A-Za-z0-9_]. This character class matches upper and lowercase letters plus numbers. 
//      Note, this character class also includes the underscore character (_).
let quoteSample = "The five boxings wizards jump quickly.";
let alphabetRegexV2 = /\w/g; 
let result3 = quoteSample.match(alphabetRegexV2).length;

//  Opposite of above
let quoteSample2 = "The five boxing wizards jump quickly.";
let nonAlphabetRegex = /\W/g; // Change this line
let result4 = quoteSample2.match(nonAlphabetRegex).length;

//  Match All numbers
//      This is equal to the character class [0-9]
let movieName = "2001: A Space Odyssey";
let numRegex = /\d/g; 
let result5 = movieName.match(numRegex).length;

//  Exclude ALL numbers
let movieName2 = "2001: A Space Odyssey";
let noNumRegex = /\D/g;
let result6 = movieName2.match(noNumRegex).length;