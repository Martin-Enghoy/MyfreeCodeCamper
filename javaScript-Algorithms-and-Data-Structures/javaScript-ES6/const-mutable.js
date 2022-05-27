//  ARRAY / OBJECT MUTATION
//      Can't change all of the values in an array instantly like a quick assignment from a normal variable.
//      Possible iterable or recursion function can be used.

const s = [5, 7, 2];
function editInPlace() {
    // Replacement
    const x = [2, 5, 7];

    // Using s = [2, 5, 7] would be invalid
    for (var i = 0; i < s.length; i++) {
        //  Assigning the values of x to s
        s[i] = x[i]
    }
}
editInPlace();

//  OBJECT FREEZING
//      Prevents any changes within Objects. Very useful when dealing with strict objects such as Math_Constants
function freezeObj() {
    const MATH_CONSTANTS = {
        PI: 3.14
    };
    Object.freeze(MATH_CONSTANTS);

    try {
        MATH_CONSTANTS.PI = 99;
    } catch (ex) {
        console.log(ex);
    }
    return MATH_CONSTANTS.PI;
}
const PI = freezeObj();