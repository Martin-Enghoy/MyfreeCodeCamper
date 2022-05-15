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
