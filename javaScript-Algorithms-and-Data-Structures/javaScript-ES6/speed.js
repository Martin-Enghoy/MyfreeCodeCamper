//  Rest Parameter to accept a larger number of arguments into the Function
//      function sum is able to take any number of arguments and return their sum.
const sum = (...args) => args.reduce((a, b) => a + b, 0);

