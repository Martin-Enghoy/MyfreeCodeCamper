//  JAVASCRIPT FUNCTION DECLARATION
function reusableFunction() {
    console.log("Hi World!");
}

//  JAVASCRIPT FUNCTION CALL
reusableFunction();

/////////////////////////////////////////////////////

//  JAVASCRIPT FUNCTION WITH ARGS
//  Calling the function will print the sum of the two number args
//  Printing in a console.log with string and variables ALREADY has a space in between.
function functionWithArgs(num1, num2) {
    console.log("The sum is", num1 + num2);
}

functionWithArgs(2, 3);

/////////////////////////////////////////////////////

//  JAVASCRIPT FUNCTION WITH ARGS AND RETURN
function timesFive(num){
    return num*5;
}

console.log("The product is",timesFive(2));
