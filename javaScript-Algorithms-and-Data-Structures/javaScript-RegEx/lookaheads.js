// Here is a (naively) simple password checker that looks for between 3 and 6 characters and at least one number:
let password = "abc123";
let checkPass = /(?=\w{3,6})(?=\D*\d)/;
checkPass.test(password);

//  to match passwords that are greater than 5 characters long, and have two consecutive digits.
let sampleWord = "astronaut";
let pwRegex = /(?=\w{6})(?=\w*\d{2})/;
let result = pwRegex.test(sampleWord);

let myString = "Eleanor Roosevelt";
let myRegex = /(Franklin|Eleanor).*Roosevelt/; // Change this line
let result2 = myRegex.test(myString); // Change this line
// After passing the challenge experiment with myString and see how the grouping works


//  Reuse RegEx Capture Groups
//      Your regex should use the shorthand character class for digits.
//      Your regex should reuse a capture group twice.
//      Your regex should match the string 42 42 42.
//      Your regex should match the string 100 100 100.
//      Your regex should not match the string 42 42 42 42.
//      Your regex should not match the string 42 42.
//      Your regex should not match the string 101 102 103.
//      Your regex should not match the string 1 2 3.
//      Your regex should match the string 10 10 10.
let repeatNum = "42 42 42";
let reRegex = /^(\d+)(\s)\1\2\1$/;
let result3 = reRegex.test(repeatNum);

//  Reverse, using capture groups again
let str = "one two three";
let fixRegex = /(one)\s(two)\s(three)/; 
let replaceText = "$3 $2 $1"; 
let result4 = str.replace(fixRegex, replaceText);

//  Remove whitespace
let hello = "   Hello, World!  ";
let wsRegex = /^\s+|\s+$/g;
let result5 = hello.replace(wsRegex, ""); 