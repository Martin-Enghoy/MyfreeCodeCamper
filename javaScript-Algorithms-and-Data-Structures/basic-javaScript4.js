//  FUNCTION WITH IF-ELSE STATEMENT
function trueOrFalse(wasThatTrue) {
    if (wasThatTrue) {
        return "Yes, that was true"
    }
    else {
        return "No, that was false"
    }
}

console.log(trueOrFalse(true));
console.log(trueOrFalse(false));

/////////////////////////////////////////////////////

//  EQUALITY (==) vs. STRICT (===)
//      3 == '3' returns true because JavaScript performs type conversion from string to number. 
//      3 === '3' returns false because the types are different and type conversion is not performed.

/////////////////////////////////////////////////////

//  FUNCTION WITH IF CONDITION USING == <-- equality operator (int example) -- attempts to convert both values being compared to a common type
function testEqual(val) {
    if (val == 12) {
        return "Equal";
    }
    return "Not Equal";
}

console.log(testEqual(10));

/////////////////////////////////////////////////////

// FUNCTION WITH IF CONDITION USING === <-- strict operator -- does not perform a type conversion
function testStrict(val) {
    if (val === 7) {
        return "Equal";
    }
    return "Not Equal";
}

console.log(testStrict(10));

/////////////////////////////////////////////////////

//  FUNCTION COMPARING TWO UNEQUAL PARAMS WITH STRICT (===) OPERATOR
function compareEquality(a, b) {
    if (a === b) { // Change this line
      return "Equal";
    }
    return "Not Equal";
  }
  
  compareEquality(10, "10");
