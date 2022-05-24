//  GLOBAL SCOPE EXAMPLE
//      GLOBAL VARIABLES HERE 
//      When declaring outside a function, all variables are used globally.
let myGlobal = 10;

//      VARIABLES WHICH ARE NOT DECLARED USING VAR, CONST AND LET WITHIN FUNCTIONS CAN BE USED OUTSIDE.
function fun1() {
    oopsGlobal = 5;
}

function fun2() {
    var output = "";
    if (typeof myGlobal != "undefined") {
        output += "myGlobal: " + myGlobal;
    }
    if (typeof oopsGlobal != "undefined") {s
        output += " oopsGlobal: " + oopsGlobal;
    }
    console.log(output);
}

fun2();

/////////////////////////////////////////////////////

//  LOCAL SCOPE EXAMPLE
function myLocalScope() {
    const myVar = 5;
    console.log('inside myLocalScope', myVar);
}
myLocalScope();

// Run and check the console
// myVar is not defined outside of myLocalScope
// console.log('outside myLocalScope', myVar);

/////////////////////////////////////////////////////

//  GLOBAL VS. LOCAL SCOPE EXAMPLE - Declaration of the SAME Variable
const outerWear = "T-Shirt";

function myOutfit() {
  const outerWear = "sweater";
  return outerWear;
}

//      The variable declared within the local scope of the function WILL take precedence.
console.log(myOutfit());