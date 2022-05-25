//  Parses a string and returns an integer
//      If the first character in the string can't be converted into a number, then it returns NaN.
function convertToInteger(str) {
    str = parseInt(str);
    return str;
}

convertToInteger("56");

/////////////////////////////////////////////////////

//  Parses a string and returns a binary converted from an integer
function convertToBinary(str) {
    str = parseInt(str, 2);

    return str;
}

convertToBinary("10011");

/////////////////////////////////////////////////////

//  Ternary Operator, converts a single if-else to a one-liner return.
function checkEqual(a, b) {
    return a === b ? "Equal" : "Not Equal";
}

checkEqual(1, 2);

/////////////////////////////////////////////////////

//  Ternary Operator for multiple else-if statements, helps lessen lines of code.
function checkSign(num) {
    return (num > 0) ? "positive"
        : (num < 0) ? "negative"
            : "zero";
}

checkSign(10);