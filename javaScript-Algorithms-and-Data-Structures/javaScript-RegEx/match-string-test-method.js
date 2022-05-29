//  Check if the string has a substring with .test()


let myString = "Hello, World!";
let myRegex = /Hello/;
let result = myRegex.test(myString);

// .test() is case-sensitive, will return false if different caps

let waldoIsHiding = "Somewhere Waldo is hiding in this text.";
let waldoRegex = /Waldo/;
let result2 = waldoRegex.test(waldoIsHiding);

//  | (OR operator) to match literal
let petString = "James has a pet cat.";
let petRegex = /dog|cat|bird|fish/;
let result3 = petRegex.test(petString);

//  Ignore case using /ignorecase/i appended at the end.
let myString2 = "freeCodeCamp";
let fccRegex = /freecodecamp/i; 
let result4 = fccRegex.test(myString2);

//  Extract Matches with .match()
//      the .match syntax is the "opposite" of the .test method you have been using thus far:
let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/; 
let result5 = extractStr.match(codingRegex); 