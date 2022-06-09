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
console.log(result4);

//  Extract Matches with .match()
//      the .match syntax is the "opposite" of the .test method you have been using thus far:
let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/; 
let result5 = extractStr.match(codingRegex); 

//  Extract matches with .match() along with g (for multiple occurrences) and i (ignoring cases)
let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /twinkle/gi;
let result6 = twinkleStar.match(starRegex);     //  Returns Array of all instances
console.log(result6)


//  Wildcard character . to select all words with the respective pattern .un
//      it matches the strings run, sun, fun, pun, nun, and bun
let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /.un/; 
let result7 = unRegex.test(exampleStr);

//  To get a specific pattern using [] in the regex
let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aeiou]/gi;
let result8 = quoteSample.match(vowelRegex); 

//  Range of letters
let quoteSample2 = "The quick brown fox jumps over the lazy dog.";
let alphabetRegex = /[a-z]/gi; 
let result9 = quoteSample2.match(alphabetRegex); 

//  Range of letters and numbers
let quoteSample3 = "Blueberry 3.141592653s are delicious.";
let myRegex2 = /[h-s2-6]/gi;
let result10 = quoteSample3.match(myRegex2);

//  Negated Character set
let quoteSample4 = "3 blind mice.";
let myRegex3 = /[^aeiou0-9]mice/gi;
let result11 = quoteSample4.match(myRegex3); 
console.log(result11)

//  Occurring more than once in one word
let difficultSpelling = "Mississippi";
let myRegex4 = /s+/gi;
let result12 = difficultSpelling.match(myRegex4);

//  Match a characters that follow each other
//     that uses the * character to match an uppercase A character immediately followed by zero or more lowercase a characters in chewieQuote
//          Your regex should not match any characters in the string He made a fair move. Screaming about it can't help you.
//          Your regex should not match any characters in the string Let him have it. It's not wise to upset a Wookiee.
let chewieRegex = /Aa*/; 
// let result13 = chewieQuote.match(chewieRegex);

//  Lazy Matching - only gets the shortest
//      In regular expressions, a greedy match finds the longest possible part of a string that fits the regex pattern and returns it as a match.
//      The alternative is called a lazy match, which finds the smallest possible part of the string that satisfies the regex pattern.
//
//             to return the HTML tag <h1>:
let text = "<h1>Winter is coming</h1>";
let myRegex5 = /<.1*?>/;
let result14 = text.match(myRegex5);