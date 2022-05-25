//  parses a string and returns an integer
//      If the first character in the string can't be converted into a number, then it returns NaN.
function convertToInteger(str) {
    str = parseInt(str);
    return str;
}

convertToInteger("56");

/////////////////////////////////////////////////////

//  parses a string and returns a binary converted from an integer
function convertToBinary(str) {
    str = parseInt(str, 2);

    return str;
}

convertToBinary("10011");

