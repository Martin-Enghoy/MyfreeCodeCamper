// When there is no function body, and only a return value, arrow function syntax 
// allows you to omit the keyword return as well as the brackets surrounding the code. This helps simplify smaller functions into one-line statements:

const magic = () => new Date();

//  With Parameters
const myConcat = (arr1, arr2) => arr1.concat(arr2);

console.log(myConcat([1, 2], [3, 4, 5]));

//  With a default parameter
//  adding default parameters so that it will add 1 to number if value is not specified.s
const increment = (number, value = 1) => number + value;

//  Rest Parameter to accept a larger number of arguments into the Function
//      function sum is able to take any number of arguments and return their sum.
const sum = (...args) => args.reduce((a, b) => a + b, 0);