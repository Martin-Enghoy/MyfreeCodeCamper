//  JAVASCRIPT LOOPING
//      WHILE LOOPS


//  BASIC WHILE LOOP
const myArray = [];
let i = 5;

while (i != -1) {
    myArray.push(i);
    i--;
}
console.log(myArray);

/////////////////////////////////////////////////////

//  FOR LOOP LOGIC:
//      For loops are declared with three optional expressions separated by semicolons:
//
//      for (a; b; c), where a is the initialization statement, b is the condition statement, and c is the final expression.
//
//      The initialization statement is executed one time only before the loop starts. It is typically used to define and setup your loop variable.
//
//      The condition statement is evaluated at the beginning of every loop iteration and will continue as long as it evaluates to true. 
//
//      When the condition is false at the start of the iteration, the loop will stop executing. This means if the condition starts as false, your loop will never execute. <-------- !!!!!
//
//      The final expression is executed at the end of each loop iteration, prior to the next condition check and is usually used to increment or decrement your loop counter.

const mySecondArray = [];

for (let i = 1; i < 6; i++) {
    mySecondArray.push(i);
}
console.log(mySecondArray);


//  A different positive iterator value:
const myThirdArray = [];

for (let i = 1; i < 10; i += 2) { // <--- Adds 2 to iterator variable
    myThirdArray.push(i);
}
console.log(myThirdArray);


//  A negative iterator value:
const myFourthArray = [];

for (let i = 9; i > 0; i -= 2) {
    myFourthArray.push(i);
}
console.log(myFourthArray);

/////////////////////////////////////////////////////

//  ARRAY OPERATION USING FOR LOOP
const myArr = [2, 3, 4, 5, 6];
let total = 0;

for (let i = 0; i < myArr.length; i++) {
    total += myArr[i];                        //  Adds the myArr values one by one into the total variable.
}

/////////////////////////////////////////////////////

//  NESTING FOR LOOPS
//      The function below multiplies all the values in the sub-arrays within the array:
function multiplyAll(arr) {
    let product = 1;
    let i, j = 0;

    for (i = 0; i < arr.length; i++) {
        for (j = 0; j < arr[i].length; j++) {
            product *= arr[i][j];
        }
    }
    return product;
}

multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);

/////////////////////////////////////////////////////

//  DO...WHILE LOOPS
const myDoWhileArray = [];
i = 10;

do {
    myDoWhileArray.push(i);
    i++;
} while (i < 5);