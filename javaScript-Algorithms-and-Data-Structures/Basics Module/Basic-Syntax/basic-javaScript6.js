//  RANDOM FRACTION
//      Math.random() returns a value from (inclusive) 0 to 1 (exclusive). Basically, a fraction.
function randomFraction() {
    return Math.random();
}

/////////////////////////////////////////////////////

//  RANDOM WHOLE NUMBER
//      When multiplied by 10, Math.random becomes a range from 0 to 9, especially paired with Math.floor, which rounds down to nearest whole number.
function randomWholeNum() {
    return Math.floor(Math.random() * 10);
}

/////////////////////////////////////////////////////

//  RANDOM WHOLE NUMBERS WITHIN A RANGE
//      returns a random whole number that's greater than or equal to myMin, and is less than or equal to myMax, inclusive.
function randomRange(myMin, myMax) {
    return Math.floor(Math.random() * (myMax - myMin + 1) + myMin);
}

console.log(randomRange(10,20))

/////////////////////////////////////////////////////

