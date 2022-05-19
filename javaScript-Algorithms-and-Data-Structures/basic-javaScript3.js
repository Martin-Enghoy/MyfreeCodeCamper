
//  GLOBAL SCOPE EXAMPLE
//      GLOBAL VARIABLES HERE 
//      When declaring outside a function, all variables are used globally.
let myGlobal = 10;

//      VARIABLES WHICH ARE NOT DECLARED USING VAR, CONST AND LET WITHIN FUNCTIONS CAN BE USED OUTSIDE.
function fun1() {
    //    Assign 5 to oopsGlobal Here
    oopsGlobal = 5;
}

//      Only change code above this line

function fun2() {
    var output = "";
    if (typeof myGlobal != "undefined") {
        output += "myGlobal: " + myGlobal;
    }
    if (typeof oopsGlobal != "undefined") {
        output += " oopsGlobal: " + oopsGlobal;
    }
    console.log(output);
}

fun2();

//  LOCAL SCOPE EXAMPLE
function myLocalScope() {
    // Only change code below this line
    const myVar = 5;
    console.log('inside myLocalScope', myVar);
}
myLocalScope();

// Run and check the console
// myVar is not defined outside of myLocalScope
// console.log('outside myLocalScope', myVar);