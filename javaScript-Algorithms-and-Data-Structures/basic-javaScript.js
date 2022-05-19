// This is an in-line comment

/* 
    Multi-line comment
    wenk wonk
    cool cool
*/

// DECLARE AND ASSIGN VARIABLES
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


// OPERATIONS
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

// INCREMENT/DECREMENT : the same as i++/i--;
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


// DECIMAL DATA TYPE AND OPERATIONS
const myDecimal = 3.9;

const myPizza = 2.2 * myDecimal;
console.log(myPizza)

const myPie = 5.5 / myDecimal;
console.log(myPie)


// ESCAPING STRING LITERALS
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

// CONCATENATE STRINGS
//
// In JavaScript, String values are immutable, 
// which means that they cannot be altered once created.
// Although it can be assigned a new string depending on its declaration.

const myFirst = 'Martin' + ' ' + 'Adrian';
console.log(myFirst)
let myDream = " Software Engineer."
let myGoal = 'Japan';
// myGoal += ' and Korea.';
myGoal += ' and Korea.' + myDream + " I hope I can attain it.";  // Construct string using a variable.
myGoal += myDream;
console.log(myGoal)
console.log(myGoal.length)                                      // Find the length of a string.
const firstLetter = myGoal[0];                                  // Find first letter of the string.
console.log(firstLetter)
const thirdLetter = myGoal[2];                                  // Find third letter of the string.
console.log(thirdLetter)
const lastLetter = myGoal[myGoal.length - 1];                                  // Find first letter of the string.
console.log(lastLetter)

// JAVASCRIPT ARRAYS
// 1.) Like other programming languages, array indexes in jS starts at 0
// 2.) Entries in arrays are mutable. It can be changed freely despite it having declared as const.
const firstArray = ["This is a string.", 5];
const multiArray = [["This is a", 1], ["string.", 2]];
const myPhrase = firstArray[0];                         // First index of firstArray
firstArray[1] = 9;                                      // Second index of firstArray will be changed to the value of '9'
console.log(firstArray)

//      MULTI-DIMENSIONAL ARRAYS
const multiDimensional = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [[10, 11, 12], 13, 14],
];

const myPick = multiDimensional[2][1];
console.log(myPick)

const myShoppingList = [["Onions", 2],["Garlic",3],["Bell Peppers", 4],["Cheese",5],["Butter",6]];


//      .push() to append values into the END of the array
firstArray.push(12);
firstArray.push(15);
firstArray.push(18);
firstArray.push(21);
console.log(firstArray)

//      .unshift() to append values into the FRONT of the array
firstArray.unshift(6);
firstArray.unshift(3);
console.log(firstArray)


//      .pop() to remove values at the END of the array | any type will be removed.
const removedValue = firstArray.pop();
console.log(removedValue)
console.log(firstArray)

//      .shift() to remvoe values at the FRONT of the array.
const removedValue2 = firstArray.shift();
console.log(removedValue2)
console.log(firstArray)
