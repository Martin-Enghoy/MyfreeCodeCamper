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

//  EQUALITY (==) vs. STRICT (===) || INEQUALITY (!=) vs. STRICT (!==)
//      3 ==  '3' returns true because JavaScript performs type conversion from string to number. 
//      3 === '3' returns false because the types are different and type conversion is not performed.
//      3 !=  '3' returns false as JS also performs type conversion. Complete opposite of Equality Operator
//      3 !== '3' returns false, does not convert data type. Complete opposite of Strict Equality Operator.

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
    if (a === b) {
        return "Equal";
    }
    return "Not Equal";
}

compareEquality(10, "10");

/////////////////////////////////////////////////////

// FUNCTION COMPARING 1 PARAM USING INEQUALITY (!=) OPERATOR
function testNotEqual(val) {
    if (val != 99) {
        return "Not Equal";
    }
    return "Equal";
}

testNotEqual(10);

/////////////////////////////////////////////////////

// FUNCTION COMPARING 1 PARAM USING STRICT INEQUALITY (!==) OPERATOR
function testStrictNotEqual(val) {
    if (val !== 17) {
        return "Not Equal";
    }
    return "Equal";
}

testStrictNotEqual(10);

/////////////////////////////////////////////////////

//  '>'     returns true when the left param is 'greater than' the right param. False if less than or equal.
//  '>='    returns true when the left param is 'greater than or equal to' the right param. False if less than.
//  '<'     returns true when the left param is 'less than' the right param. False if greater than or equal.
//  '<='    returns true when the left param is 'less than or equal to' the right param. False if greater than.
// 

/////////////////////////////////////////////////////

// FUNCTION USING GREATER THAN (>) IN CONDITIONAL
function testGreaterThan(val) {
    if (val > 100) {
        return "Over 100";
    }

    if (val > 10) {
        return "Over 10";
    }

    return "10 or Under";
}

testGreaterThan(10);

/////////////////////////////////////////////////////

// FUNCTION USING GREATER THAN OR EQUAL TO (>=) IN CONDITIONAL
function testGreaterOrEqual(val) {
    if (val >= 20) {
        return "20 or Over";
    }

    if (val >= 10) {
        return "10 or Over";
    }

    return "Less than 10";
}

testGreaterOrEqual(10);

/////////////////////////////////////////////////////

// FUNCTION USING LESS THAN (<) IN CONDITIONAL
function testLessThan(val) {
    if (val < 25) {
        return "Under 25";
    }

    if (val < 55) {
        return "Under 55";
    }

    return "55 or Over";
}

testLessThan(10);

/////////////////////////////////////////////////////

// FUNCTION USING LESS THAN OR EQUAL TO (<=) IN CONDITIONAL
function testLessOrEqual(val) {
    if (val <= 12) {
        return "Smaller Than or Equal to 12";
    }

    if (val <= 24) {
        return "Smaller Than or Equal to 24";
    }

    return "More Than 24";
}

testLessOrEqual(10);

/////////////////////////////////////////////////////

//  '&&' returns true when both sides of the Logical And returns true.
//  '||' returns true when one side of the Logical Or returns true.

/////////////////////////////////////////////////////

// FUNCTION USING LOGICAL AND (&&) IN CONDITIONAL
function testLogicalAnd(val) {
    if (val <= 50 && val >= 25) {
        return "Yes";
    }
    return "No";
}

testLogicalAnd(10);

/////////////////////////////////////////////////////

// FUNCTION USING LOGICAL OR (||) IN CONDITIONAL
function testLogicalOr(val) {

    if (val < 10 || val > 20) {
        return "Outside";
    }
    return "Inside";
}

testLogicalOr(15);