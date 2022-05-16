// This is an in-line comment

/* 
    Multi-line comment
    wenk wonk
    cool cool
*/

// *** Declare and Assign Var ***
// 1.) Initializing a var without a value will set it to undefined. It will return NaN if it is used in a mathematical operation.
// 2.) JavaScript is case-sensitive. MyVar is not the same as myvar. camelCase preferred.
var myNum; 
var myNum2;

myNum = 9;
myNum = myNum2;

var myScore = 10;

var myFirstName = "Martin Adrian"
var myLastName = "Enghoy"   

let myWord = "Cool";
// let myWord = "Not"; // This declaration after the first let will result to an error. A feature of the ES6 update in avoiding multiple declarations.
console.log(myWord)

const POWER = 42; // const declaration is the same as let declaration but it is read-only. const declarations should be all caps to signify immutable values.
console.log(POWER)


// Operations
const LEVEL = 10 + 10;
console.log(LEVEL)

const MAGIC = 10 - 5;
console.log(MAGIC)

const LUCK = 5 * 2;
console.log(LUCK)

const SLOW = 50 / 5;
console.log(SLOW)

const MANA_REGEN = 100 % 3;
console.log(MANA_REGEN)

// Increment/Decrement : the same as i++/i--;
myScore++; 
myScore--;
myScore += 5;
console.log(myScore)
myScore -= 6;
console.log(myScore)
myScore *= 2;
console.log(myScore)
myScore /= 3;
console.log(myScore)


// Decimal Data type and Operations
const myDecimal = 3.9;

const myPizza = 2.2 * myDecimal;
console.log(myPizza)

const myPie = 5.5 / myDecimal;
console.log(myPie)


// Escaping string literals 
// Single and double quotes in strings are the same in javaScript, as long as you start and end with the same.
//
//      Escape Sequences:
//      \'	single quote
//      \"	double quote
//      \\	backslash
//      \n	newline
//      \r	carriage return
//      \t	tab
//      \b	word boundary
//      \f	form feed

const myStory = "I came to her house for \"breakfast\".";
console.log(myStory)
const myStream = 'I streamed for 4 hours last night.';
console.log(myStream)
const spaceSample = "FirstLine\n\t\\SecondLine\nThirdLine";
console.log(spaceSample)
